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

function fixUseClient(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Find if file has "use client" or 'use client'
  const useClientRegex = /^(?:import.*?\n)*\s*(['"]use client['"];?)/m;
  const useClientMatch = content.match(/['"]use client['"];?/);
  
  if (useClientMatch) {
    // If there is 'use client', make sure it's at the very beginning (ignoring comments/whitespace)
    // Actually, just remove all occurrences of use client, and prepend it to the file.
    let cleanContent = content.replace(/['"]use client['"];?\n?/g, '');
    content = "'use client';\n" + cleanContent;
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed use client: ' + filePath);
  }
}

walk(srcDir, fixUseClient);
console.log("Done fixing use client.");
