const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const longDescs = [];
let allFilesCount = 0;
let filesWithDesc = 0;

walkDir('./src/app', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    allFilesCount++;
    const content = fs.readFileSync(filePath, 'utf8');
    
    const regex = /description\s*:\s*(["'`])([\s\S]*?)(?<!\\)\1/g;
    let match;
    let foundInFile = false;
    while ((match = regex.exec(content)) !== null) {
      if (!foundInFile) {
        filesWithDesc++;
        foundInFile = true;
      }
      const desc = match[2];
      if (desc.length > 155) {
        longDescs.push({ file: filePath, desc: desc, length: desc.length, quote: match[1] });
      }
    }
  }
});

console.log(`Scanned ${allFilesCount} files, found descriptions in ${filesWithDesc} files.`);
console.log(`Found ${longDescs.length} descriptions over 155 characters.`);
fs.writeFileSync('long_descs.json', JSON.stringify(longDescs, null, 2));
