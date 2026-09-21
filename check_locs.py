import re

with open('src/app/trademark-by-city/locations.ts', 'r') as f:
    content = f.read()

locations = re.findall(r'"([^"]+)"', content)
longest = max(locations, key=len)
print(f'Longest: {longest} ({len(longest)})')
over_49 = [l for l in locations if len(l) > 49]
print(f'Over 49: {over_49}')
