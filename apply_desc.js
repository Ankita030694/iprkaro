const fs = require('fs');
const path = require('path');

const replacements = JSON.parse(fs.readFileSync('replacements.json', 'utf8'));

let modifiedCount = 0;

for (const item of replacements) {
  const filePath = path.resolve(item.file);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let replaced = false;

  // The original descriptions may have regex-special characters, so we'll use a simple string replacement.
  // We need to look for the property `description: ` followed by the quote used in the original.
  
  // Since we extracted the quote character, we can construct the exact string we are replacing
  const originalFullString = `description: ${item.quote}${item.oldDesc}${item.quote}`;
  
  // Before replacing, we ensure the new description is properly escaped based on the quote type
  let newDescEscaped = item.newDesc;
  if (item.quote === '"') {
    newDescEscaped = newDescEscaped.replace(/"/g, '\\"');
  } else if (item.quote === "'") {
    newDescEscaped = newDescEscaped.replace(/'/g, "\\'");
  } else if (item.quote === '`') {
    newDescEscaped = newDescEscaped.replace(/`/g, "\\`");
  }

  const newFullString = `description: ${item.quote}${newDescEscaped}${item.quote}`;

  if (content.includes(originalFullString)) {
    content = content.replace(originalFullString, newFullString);
    replaced = true;
  } else {
    // sometimes there is space like `description : ` or multiple spaces, we can use a regex to match
    // we need to escape the oldDesc for regex
    const oldDescEscapedForRegex = item.oldDesc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`description\\s*:\\s*${item.quote}${oldDescEscapedForRegex}${item.quote}`, 'g');
    
    if (regex.test(content)) {
       content = content.replace(regex, newFullString);
       replaced = true;
    }
  }

  if (replaced) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
  } else {
    console.warn(`Could not replace description in ${filePath}`);
  }
}

console.log(`Successfully updated ${modifiedCount} files.`);
