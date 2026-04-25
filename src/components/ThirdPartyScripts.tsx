'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function ThirdPartyScripts() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Delay loading tracking scripts by 2 seconds to prioritize LCP and interactivity
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7DNEQJ9TBP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7DNEQJ9TBP');
        `}
      </Script>

      {/* Meta Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1641589187020786');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
}
