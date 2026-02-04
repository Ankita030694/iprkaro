import urllib.request

url = "http://iprkaro.com/about-us"
headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
}

try:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as response:
        print(f"Status: {response.status}")
        body = response.read().decode('utf-8', errors='ignore')
        print("Body start (500 chars):")
        print(body[:500])
except Exception as e:
    print(f"Error: {e}")
