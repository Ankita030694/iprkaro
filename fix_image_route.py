import re

with open("src/app/api/generate-image/route.ts", "r") as f:
    content = f.read()

# Remove dbConnect and ImageFile imports
content = re.sub(r'import dbConnect from "@/lib/dbConnect";\n', '', content)
content = re.sub(r'import \{ ImageFile \} from "@/lib/models";\n', '', content)

# Remove the entire saveImageToDb function
saveImageToDb_regex = r'  // Helper function to download and save an image to MongoDB ImageFile collection\n  const saveImageToDb = async \(imageUrl: string, promptText: string\): Promise<string> => \{[\s\S]*?return `/api/images/\$\{savedImage\._id\}`;\n  \};\n\n'
content = re.sub(saveImageToDb_regex, '', content)

# Replace `await saveImageToDb(dynamicFallbackUrl, prompt)` with just `dynamicFallbackUrl`
content = content.replace(
    'const savedUrl = await saveImageToDb(dynamicFallbackUrl, prompt);',
    'const savedUrl = dynamicFallbackUrl;'
)

# Replace `await saveImageToDb(imageUrl, prompt)` with just `imageUrl`
content = content.replace(
    'const savedUrl = await saveImageToDb(imageUrl, prompt);',
    'const savedUrl = imageUrl;'
)

# Replace `await saveImageToDb(dynamicFallbackUrl, promptText)` with just `dynamicFallbackUrl`
content = content.replace(
    'const savedUrl = await saveImageToDb(dynamicFallbackUrl, promptText);',
    'const savedUrl = dynamicFallbackUrl;'
)

# Replace `await saveImageToDb(defaultFallbackUrl, "Default legal balance vector")` with just `defaultFallbackUrl`
content = content.replace(
    'const savedUrl = await saveImageToDb(defaultFallbackUrl, "Default legal balance vector");',
    'const savedUrl = defaultFallbackUrl;'
)

with open("src/app/api/generate-image/route.ts", "w") as f:
    f.write(content)
