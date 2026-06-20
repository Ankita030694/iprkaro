import re

with open("src/app/authority/blogs/page.tsx", "r") as f:
    content = f.read()

# Replace the window.prompt logic with automatic prompt
old_logic = r"""  const handleGenerateImage = async \(\) => \{
    const defaultPrompt = newBlog\.title 
      \? `A professional, high-quality illustration representing: \$\{newBlog\.title\}`
      : "A professional illustration with premium high-quality digital art";
    
    const userPrompt = window\.prompt\("Enter the prompt for the AI image generator:", defaultPrompt\);
    if \(userPrompt === null\) return; // User cancelled

    const finalPrompt = userPrompt\.trim\(\) \|\| defaultPrompt;"""

new_logic = """  const handleGenerateImage = async () => {
    const finalPrompt = newBlog.title 
      ? `A professional, modern, corporate legal illustration representing: ${newBlog.title}`
      : "A professional, modern, corporate legal illustration with premium high-quality digital art";"""

content = re.sub(old_logic, new_logic, content)

with open("src/app/authority/blogs/page.tsx", "w") as f:
    f.write(content)

