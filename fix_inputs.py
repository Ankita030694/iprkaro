import re

# Update page.tsx
with open("src/app/authority/blogs/page.tsx", "r") as f:
    page_content = f.read()

# 1. Remove secondaryKeyword state
page_content = re.sub(r'const \[secondaryKeyword, setSecondaryKeyword\] = useState\(\'\'\);\n\s*', '', page_content)

# 2. Remove the secondaryKeyword input field
secondary_input_pattern = r'<input\s+type="text"\s+value=\{secondaryKeyword\}\s+onChange=\{[^}]+\}\s+placeholder="Secondary Keyword \(Optional\)"\s+className="[^"]+"\s+disabled=\{isGenerating\}\s+/>'
page_content = re.sub(secondary_input_pattern, '', page_content)

# 3. Update handleGenerate API call
api_call_pattern = r'body: JSON.stringify\(\{ primaryKeyword, secondaryKeyword \}\),'
page_content = re.sub(api_call_pattern, 'body: JSON.stringify({ primaryKeyword }),', page_content)

# 4. Remove secondaryKeyword from draft saving
draft_save_pattern = r'secondary: secondaryKeyword,'
page_content = re.sub(draft_save_pattern, '', page_content)

# 5. Remove secondaryKeyword from draft loading
draft_load_pattern = r'const \{ blog, primary, secondary, image, expansion \} = JSON.parse\(savedDraft\);'
page_content = page_content.replace('const { blog, primary, secondary, image, expansion } = JSON.parse(savedDraft);', 'const { blog, primary, image, expansion } = JSON.parse(savedDraft);')

set_sec_pattern = r'setSecondaryKeyword\(secondary \|\| \'\'\);'
page_content = page_content.replace("setSecondaryKeyword(secondary || '');", "")

clear_sec_pattern = r'setSecondaryKeyword\(\'\'\); '
page_content = page_content.replace("setSecondaryKeyword(''); ", "")

# Check if changes were made
with open("src/app/authority/blogs/page.tsx", "w") as f:
    f.write(page_content)


# Update API route.ts
with open("src/app/api/generate-article/route.ts", "r") as f:
    api_content = f.read()

# Add max_tokens: 10000 to all completions
# Step 1
api_content = api_content.replace('temperature: 0.7,\n    });', 'temperature: 0.7,\n      max_tokens: 10000,\n    });')

# Step 2
api_content = api_content.replace('temperature: 0.8,\n    });', 'temperature: 0.8,\n      max_tokens: 10000,\n    });')

# Step 3
# Step 3's completion might also have temperature 0.8. Let's be safe.
# Actually, the string replacement will replace BOTH step 2 and step 3 if they have the exact same string.
# Wait, step 3 is inside a try-catch and might have different indentation.
api_content = api_content.replace('temperature: 0.8,\n      });', 'temperature: 0.8,\n        max_tokens: 10000,\n      });')

# Change "Primary Keyword" placeholder in page.tsx
page_content = page_content.replace('placeholder="Primary Keyword (e.g., \'Trademark Registration in India\')"', 'placeholder="Topic, Keywords, or Context (e.g., \'Trademark Registration in India\')"')

with open("src/app/authority/blogs/page.tsx", "w") as f:
    f.write(page_content)

with open("src/app/api/generate-article/route.ts", "w") as f:
    f.write(api_content)
