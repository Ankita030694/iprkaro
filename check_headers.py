
import urllib.request
import ssl

url = "https://iprkaro.com"
headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
}

try:
    req = urllib.request.Request(url, headers=headers)
    context = ssl.create_default_context()
    context.check_hostname = False
    context.verify_mode = ssl.CERT_NONE  # Ignore SSL errors for debug
    
    with urllib.request.urlopen(req, context=context) as response:
        print(f"Status: {response.status}")
        print("Headers:")
        for name, value in response.headers.items():
            print(f"{name}: {value}")
            
except urllib.error.HTTPError as e:
    # 308 might raise HTTPError depending on python version handling of redirects
    print(f"Status: {e.code}")
    print("Headers:")
    for name, value in e.headers.items():
        print(f"{name}: {value}")
except Exception as e:
    print(f"Error: {e}")
