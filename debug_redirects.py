import urllib.request
import ssl

urls = [
    "https://iprkaro.com/about-us",
    "https://www.iprkaro.com/about-us"
]

headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
}

context = ssl.create_default_context()
context.check_hostname = False
context.verify_mode = ssl.CERT_NONE

for url in urls:
    print(f"\n--- Checking URL: {url} ---")
    try:
        # We want to see the redirect, so we handle it manually
        class NoRedirectHandler(urllib.request.HTTPRedirectHandler):
            def http_error_301(self, req, fp, code, msg, headers): return fp
            def http_error_302(self, req, fp, code, msg, headers): return fp
            def http_error_303(self, req, fp, code, msg, headers): return fp
            def http_error_307(self, req, fp, code, msg, headers): return fp
            def http_error_308(self, req, fp, code, msg, headers): return fp

        opener = urllib.request.build_opener(NoRedirectHandler)
        req = urllib.request.Request(url, headers=headers)
        
        with opener.open(req) as response:
            print(f"Status: {response.status}")
            print("Headers:")
            for name, value in response.headers.items():
                if name.lower() in ['location', 'x-robots-tag', 'content-type']:
                    print(f"{name}: {value}")
            
    except Exception as e:
        print(f"Error: {e}")
