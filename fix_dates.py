import re

with open("src/app/authority/blogs/page.tsx", "r") as f:
    content = f.read()

# Replace:
# reviews: generatedData.reviews || prevState.reviews,
# With:
# reviews: (generatedData.reviews || []).map((r: any) => ({ ...r, date: r.date || new Date().toISOString().split('T')[0] })) || prevState.reviews,

replacement = """reviews: generatedData.reviews && generatedData.reviews.length > 0
          ? generatedData.reviews.map((r: any) => ({ ...r, date: r.date || new Date().toISOString().split('T')[0] }))
          : prevState.reviews,"""

content = re.sub(r'reviews:\s*generatedData\.reviews\s*\|\|\s*prevState\.reviews,', replacement, content)

with open("src/app/authority/blogs/page.tsx", "w") as f:
    f.write(content)

