const fs = require('fs');
const path = require('path');

function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, fileList);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = findFiles('d:/Samagra Jaiswal/iprkaro/src/app');
const overLimit = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  // Look for description: "..." or description: '...' or description: `...`
  const match = content.match(/description\s*:\s*(["'`])((?:(?!\1)[^\\]|\\.)*)\1/);
  if (match) {
    const desc = match[2];
    if (desc.length > 155) {
      overLimit.push({ file, oldDesc: desc });
    }
  }
}

fs.writeFileSync('long_descriptions.json', JSON.stringify(overLimit, null, 2));
console.log('Found ' + overLimit.length + ' long descriptions.');
