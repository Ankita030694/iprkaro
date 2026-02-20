import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

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

    // Get the base URL (works for both dev and production)
    // In development, use 127.0.0.1 instead of localhost for better compatibility
    const isDev = process.env.NODE_ENV === 'development';
    const protocol = isDev ? 'http' : (request.headers.get('x-forwarded-proto') || 'https');

    // Use the host from the request, or default to localhost/127.0.0.1
    let host = request.headers.get('host');
    if (!host) {
      host = isDev ? '127.0.0.1:3000' : 'localhost:3000';
    } else if (isDev && host.includes('localhost')) {
      // Replace localhost with 127.0.0.1 in dev for Puppeteer compatibility
      host = host.replace('localhost', '127.0.0.1');
    }

    const baseUrl = `${protocol}://${host}`;

    console.log('Generating PDF for:', { trademark, classNumber, baseUrl });

    // Construct the PDF-specific dashboard URL (only shows MetricsSection in desktop layout)
    const dashboardUrl = `${baseUrl}/dashboard/pdf?trademark=${encodeURIComponent(trademark)}&class=${encodeURIComponent(classNumber)}`;

    console.log('PDF Dashboard URL:', dashboardUrl);

    // Launch Puppeteer
    let browser;
    try {
      const launchOptions: any = {
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--disable-gpu',
          '--disable-web-security',
        ],
      };

      // Try to find Chromium executable (puppeteer should handle this automatically)
      // But we can explicitly set it if needed for troubleshooting
      browser = await puppeteer.launch(launchOptions);
      console.log('Puppeteer browser launched successfully');
    } catch (launchError: any) {
      console.error('Failed to launch Puppeteer:', launchError);
      console.error('Launch error details:', {
        message: launchError.message,
        code: launchError.code,
        name: launchError.name,
      });
      return NextResponse.json(
        {
          error: 'Failed to launch browser',
          details: launchError.message || 'Puppeteer launch failed. Make sure Chromium is installed. Try running: npx puppeteer browsers install chrome'
        },
        { status: 500 }
      );
    }

    try {
      const page = await browser.newPage();

      // Set desktop user agent to ensure desktop rendering
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

      // Set large desktop viewport for PDF rendering
      // Using 1400x900 to ensure desktop layout and proper PDF formatting
      await page.setViewport({
        width: 1600,
        height: 900,
        deviceScaleFactor: 2,
      });

      // Navigate to the dashboard page
      console.log('Navigating to dashboard...');
      try {
        // Use domcontentloaded first, then wait for network to be idle
        await page.goto(dashboardUrl, {
          waitUntil: 'domcontentloaded',
          timeout: 30000,
        });
        console.log('Page DOM loaded');

        // Wait a bit for React to hydrate and content to render
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log('Page loaded successfully');
      } catch (navigationError: any) {
        console.error('Navigation error:', navigationError);
        await browser.close();
        return NextResponse.json(
          {
            error: 'Failed to load dashboard page',
            details: navigationError.message || 'Page navigation timeout or error',
            url: dashboardUrl
          },
          { status: 500 }
        );
      }

      // Wait for PDF-specific content to be fully rendered
      console.log('Waiting for PDF content...');

      // Wait for the main heading, metric cards, and logo
      try {
        await page.waitForSelector('h1', { timeout: 10000 });
        await page.waitForSelector('[class*="grid"]', { timeout: 10000 });
        // Wait for logo image to load
        await page.waitForSelector('img[alt="IPR Karo Logo"]', { timeout: 10000 });
        // Wait for all images to load
        await page.evaluate(() => {
          return Promise.all(
            Array.from(document.images)
              .filter(img => !img.complete)
              .map(img => new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
              }))
          );
        }).catch(() => {
          // Some images might fail to load, continue anyway
          console.log('Some images may not have loaded');
        });
        console.log('PDF content loaded successfully');
      } catch (selectorError) {
        console.warn('Some selectors not found, proceeding anyway...');
      }

      // Additional wait to ensure all content is fully rendered
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Inject Poppins font from Google Fonts using link tag
      await page.evaluate(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
        document.head.appendChild(link);
      });

      // Wait for font to load
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Inject CSS to ensure dark background covers entire page (no white areas)
      // But preserve spacing for PDF content elements
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
          /* Preserve spacing for PDF content - do not override margins/padding */
          /* Only reset default browser margins for specific elements */
          h1, h2, h3, h4, h5, h6, p, span, div {
            box-sizing: border-box !important;
            font-family: 'Poppins', sans-serif !important;
          }
          /* Ensure flexbox gap works in PDF */
          .flex {
            box-sizing: border-box !important;
            font-family: 'Poppins', sans-serif !important;
          }
          /* Page break support - force new page for second page component */
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

      // Wait for styles to apply
      await new Promise(resolve => setTimeout(resolve, 500));

      // Verify content is loaded
      const contentCheck = await page.evaluate(() => {
        const heading = document.querySelector('h1');
        const grid = document.querySelector('[class*="grid"]');
        const logo = document.querySelector('img[alt="IPR Karo Logo"]');
        return {
          hasHeading: !!heading,
          hasGrid: !!grid,
          hasLogo: !!logo,
          viewportWidth: window.innerWidth,
        };
      });

      console.log('Content check:', contentCheck);
      console.log('Content rendering complete');

      // Generate PDF with optimized settings for MetricsSection
      // Using A4 landscape for better fit of the row layout
      // Ensure background colors are printed with minimal margins (no white borders)
      const pdfBuffer = await page.pdf({
        format: 'A4',
        landscape: true, // Landscape for better fit of 3-column + Key Factors layout
        printBackground: true, // Critical: ensures background colors are printed
        margin: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
        preferCSSPageSize: false,
        scale: 0.95, // Slightly increased scale since we removed margins
      });

      await browser.close();

      // Return PDF as response
      // Convert buffer to ensure proper type compatibility
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
    console.error('Error stack:', error.stack);
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

