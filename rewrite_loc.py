import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements for trademark-by-location/page.tsx
    replacements = [
        (
            r'Find trademark registration services in \{loc\}\.',
            r'Trademark services in this area.'
        ),
        (
            r'Choose your city from the list below\. We provide localized trademark registration services across India\.',
            r'Choose your city from the list below. We provide localized trademark services across India.'
        )
    ]

    for old, new in replacements:
        content = re.sub(old, new, content, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
process_file('src/app/trademark-by-location/page.tsx')
