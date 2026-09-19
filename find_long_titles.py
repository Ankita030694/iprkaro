import os
import re

def main():
    app_dir = 'src/app'
    for root, dirs, files in os.walk(app_dir):
        if 'page.tsx' in files:
            file_path = os.path.join(root, 'page.tsx')
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                # Find metadata title
                match = re.search(r'export const metadata: Metadata = \{.*?title: (["\'])(.*?)\1', content, re.DOTALL)
                if match:
                    title = match.group(2)
                    if len(title) > 60:
                        print(f"{len(title)} | {title} | {file_path}")

if __name__ == "__main__":
    main()
