import urllib.request

url = "http://iprkaro.com"
try:
    with urllib.request.urlopen(url) as response:
        print(f"Status: {response.status}")
        for name, value in response.headers.items():
            print(f"{name}: {value}")
except Exception as e:
    print(f"Error: {e}")
