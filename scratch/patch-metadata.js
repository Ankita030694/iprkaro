const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Check if the file has a description field in metadata/generateMetadata
  if (!content.includes('description:') && !content.includes('description =')) return;
  
  // We need to add the import if it's going to use validateAndNormalizeDescription
  const importStatement = "import { validateAndNormalizeDescription } from '@/lib/seo-utils';\n";
  let needsImport = false;

  // For `export const metadata: Metadata = { ... description: "..." ... }`
  content = content.replace(/description:\s*(["'`].*?["'`])(\s*[,}])/g, (match, descString, endChar) => {
    needsImport = true;
    return `description: validateAndNormalizeDescription(${descString}, "${filePath.split('\\src\\')[1].replace(/\\/g, '/')} ")${endChar}`;
  });

  // For variables named description in generateMetadata
  // e.g. const description = `...`; return { ..., description, ... }
  content = content.replace(/const description\s*=\s*([^;]+);/g, (match, descValue) => {
    if (descValue.includes('validateAndNormalizeDescription')) return match; // already wrapped
    needsImport = true;
    return `const description = validateAndNormalizeDescription(${descValue}, "${filePath.split('\\src\\')[1].replace(/\\/g, '/')} ");`;
  });

  // For let description = ...
  content = content.replace(/let description\s*=\s*([^;]+);/g, (match, descValue) => {
    if (descValue.includes('validateAndNormalizeDescription')) return match;
    needsImport = true;
    return `let description = ${descValue};\ndescription = validateAndNormalizeDescription(description, "${filePath.split('\\src\\')[1].replace(/\\/g, '/')} ");`;
  });

  if (needsImport && !content.includes('validateAndNormalizeDescription')) {
      // should never happen if replacements occurred correctly, but just in case
  }
  
  if (needsImport && !originalContent.includes('validateAndNormalizeDescription')) {
    // Add import after the last import statement, or at the top
    const importRegex = /import .*?;?\n/g;
    let lastMatch = null;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      lastMatch = match;
    }
    
    if (lastMatch) {
      const insertPos = lastMatch.index + lastMatch[0].length;
      content = content.slice(0, insertPos) + importStatement + content.slice(insertPos);
    } else {
      content = importStatement + content;
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Patched: ' + filePath);
  }
}

walk(srcDir, processFile);
console.log("Done patching.");
