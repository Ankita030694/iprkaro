import re

with open("src/app/authority/blogs/page.tsx", "r") as f:
    content = f.read()

# Fix useEffect for draft
# const hasContent = newBlog.title || newBlog.description || writeupInput || imagePrompt;
content = re.sub(r'const hasContent = newBlog\.title \|\| newBlog\.description \|\| writeupInput \|\| imagePrompt;', 'const hasContent = newBlog.title || newBlog.description || writeupInput;', content)

# draft object creation
content = re.sub(r'image: imagePrompt,\s*expansion: expansionSubtopics', '', content)

# useEffect deps
# [newBlog, writeupInput, imagePrompt, expansionSubtopics, showBlogForm, formMode]
content = re.sub(r'\[newBlog, writeupInput, imagePrompt, expansionSubtopics, showBlogForm, formMode\]', '[newBlog, writeupInput, showBlogForm, formMode]', content)

# loadDraft
content = re.sub(r'setImagePrompt\(image \|\| \'\'\);\n\s*setExpansionSubtopics\(expansion \|\| \'\'\);', '', content)

# resetForm
content = re.sub(r'setWriteupInput\(\'\'\); setImagePrompt\(\'\'\); setExpansionSubtopics\(\'\'\);', 'setWriteupInput(\'\');', content)


with open("src/app/authority/blogs/page.tsx", "w") as f:
    f.write(content)
