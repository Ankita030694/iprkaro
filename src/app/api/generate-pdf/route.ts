import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const trademark = searchParams.get('trademark');
    const classNumber = searchParams.get('class');

    if (!trademark || !classNumber) {
      return NextResponse.json(
        { error: 'Missing trademark or class parameter' },
        { status: 400 }
      );
    }

    const isDev = process.env.NODE_ENV === 'development';
    const protocol = isDev ? 'http' : (request.headers.get('x-forwarded-proto') || 'https');
    
    let host = request.headers.get('host');
    if (!host) {
      host = isDev ? '127.0.0.1:3000' : 'localhost:3000';
    } else if (isDev && host.includes('localhost')) {
      host = host.replace('localhost', '127.0.0.1');
    }

    const baseUrl = `${protocol}://${host}`;
    const dashboardUrl = `${baseUrl}/dashboard/pdf?trademark=${encodeURIComponent(trademark)}&class=${encodeURIComponent(classNumber)}`;

    console.log('Generating PDF for:', { trademark, classNumber, baseUrl });

    // Launch Puppeteer with Vercel-compatible Chromium
    let browser;
    try {
      browser = await puppeteer.launch({
        args: [
          ...chromium.args,
          '--disable-web-security',
          '--disable-features=IsolateOrigins',
          '--disable-site-isolation-trials',
        ],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: true,
      });
      console.log('Browser launched successfully');
    } catch (launchError: any) {
      console.error('Failed to launch browser:', launchError);
      return NextResponse.json(
        {
          error: 'Failed to launch browser',
          details: launchError.message
        },
        { status: 500 }
      );
    }

    try {
      const page = await browser.newPage();

      // Optimize: Block unnecessary requests to speed up page load
      await page.setRequestInterception(true);
      page.on('request', (req: any) => {
        const resourceType = req.resourceType();
        const url = req.url().toLowerCase();
        
        // Block tracking, analytics, and images that aren't the logo if needed
        if (
          url.includes('google-analytics') || 
          url.includes('facebook') || 
          url.includes('googletagmanager') ||
          resourceType === 'font' // We'll rely on the Google Fonts link we added to the page
        ) {
          req.abort();
        } else {
          req.continue();
        }
      });

      // Set desktop user agent to ensure desktop rendering
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

      // Set desktop viewport
      await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 1 });

      console.log('Navigating to dashboard...');
      try {
        await page.goto(dashboardUrl, {
          waitUntil: ['domcontentloaded', 'networkidle2'],
          timeout: 12000, 
        });
        console.log('Page loaded');
      } catch (navigationError: any) {
        console.warn('Navigation timeout, proceeding anyway');
      }

      // Inject minimal CSS needed for PDF
      await page.addStyleTag({
        content: `
          * { font-family: 'Poppins', sans-serif !important; }
          html, body {
            background: #0C002B !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            min-height: 100vh !important;
            overflow: hidden !important;
          }
          .pdf-page-2 { page-break-before: always !important; }
          .fixed, [class*="fixed"], #whatsapp-widget, [aria-label*="Chat"] { display: none !important; }
        `
      });

      // Wait for critical content in parallel with a short timeout
      try {
        await Promise.all([
          page.waitForSelector('h1', { timeout: 3000 }),
          page.waitForSelector('[class*="grid"]', { timeout: 3000 }),
          page.waitForSelector('img[alt="IPR Karo Logo"]', { timeout: 3000 })
        ]);
        console.log('Critical elements found');
      } catch (e) {
        console.warn('Wait for selectors timed out, proceeding to generate PDF');
      }

      // Final short grace period for rendering
      await new Promise(resolve => setTimeout(resolve, 500));

      // Generate PDF
      const pdfBuffer = await page.pdf({
        format: 'A4',
        landscape: true,
        printBackground: true,
        margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
        preferCSSPageSize: false,
        scale: 0.95,
      });

      await browser.close();

      return new NextResponse(pdfBuffer as unknown as BodyInit, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="trademark-report-${trademark}-class-${classNumber}.pdf"`,
        },
      });
    } catch (pageError) {
      await browser.close();
      throw pageError;
    }
  } catch (error: any) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate PDF',
        details: error.message || 'Unknown error',
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}