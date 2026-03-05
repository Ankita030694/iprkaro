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
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
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

      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

      await page.setViewport({
        width: 1600,
        height: 900,
        deviceScaleFactor: 2,
      });

      console.log('Navigating to dashboard...');
      await page.goto(dashboardUrl, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });
      
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Rest of your code stays the same...
      await page.waitForSelector('h1', { timeout: 10000 }).catch(() => {});
      await page.waitForSelector('[class*="grid"]', { timeout: 10000 }).catch(() => {});
      await page.waitForSelector('img[alt="IPR Karo Logo"]', { timeout: 10000 }).catch(() => {});

      await page.evaluate(() => {
        return Promise.allSettled(
          Array.from(document.images)
            .filter(img => !img.complete)
            .map(img => new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            }))
        );
      });

      await new Promise(resolve => setTimeout(resolve, 2000));

      await page.evaluate(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
        document.head.appendChild(link);
      });

      await new Promise(resolve => setTimeout(resolve, 1500));

      await page.addStyleTag({
        content: `
          * {
            font-family: 'Poppins', sans-serif !important;
          }
          html, body {
            background: #0C002B !important;
            background-size: 100% 100% !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            min-height: 100vh !important;
            overflow: hidden !important;
            box-sizing: border-box !important;
            font-family: 'Poppins', sans-serif !important;
          }
          body > div {
            background: transparent !important;
            box-sizing: border-box !important;
            font-family: 'Poppins', sans-serif !important;
          }
          h1, h2, h3, h4, h5, h6, p, span, div {
            box-sizing: border-box !important;
            font-family: 'Poppins', sans-serif !important;
          }
          .flex {
            box-sizing: border-box !important;
            font-family: 'Poppins', sans-serif !important;
          }
          .pdf-page-2 {
            page-break-before: always !important;
            break-before: page !important;
          }
          @page {
            margin: 0 !important;
            padding: 0 !important;
            size: A4 landscape;
          }
        `
      });

      await new Promise(resolve => setTimeout(resolve, 500));

      const pdfBuffer = await page.pdf({
        format: 'A4',
        landscape: true,
        printBackground: true,
        margin: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
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