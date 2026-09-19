import urllib.request
import ssl

url = "https://www.iprkaro.com/"
headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
}

context = ssl.create_default_context()
context.check_hostname = False
context.verify_mode = ssl.CERT_NONE

try:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, context=context) as response:
        print(f"Status: {response.status}")
        print("X-Robots-Tag:", response.headers.get('X-Robots-Tag'))
except Exception as e:
    print(f"Error: {e}")
