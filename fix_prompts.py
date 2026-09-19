import re

with open("src/app/api/generate-article/route.ts", "r") as f:
    content = f.read()

# Replace primaryKeyword parsing
content = content.replace(
    'const primaryKeyword = body.primaryKeyword || body.context || body.writeup;',
    'const contextText = body.primaryKeyword || body.context || body.writeup || body.topic;'
)
content = content.replace(
    'if (!primaryKeyword) {',
    'if (!contextText) {'
)
content = content.replace(
    'Primary Keyword, Context, or Writeup is required',
    'Topic, Context, or Writeup is required'
)

# Step 1 prompt
content = content.replace(
    'Primary Keyword: ${primaryKeyword}',
    'Topic / Context: ${contextText}'
)
content = content.replace(
    'H1 Title containing the primary keyword',
    'H1 Title'
)
# Update console log
content = content.replace(
    '${primaryKeyword}',
    '${contextText.substring(0, 50)}...'
)

# Step 2 prompt
content = content.replace(
    'Target Primary Keyword: ${contextText.substring(0, 50)}...', # because of the previous replacement
    'Target Topic / Context: ${contextText}'
)
# Because of the substring replacement, wait, let me just use regex for safety on the file.

