const fs = require('fs');
const path = require('path');

/**
 * Script to replace all em dashes (—) with hyphens (-) in the codebase.
 */

const SEARCH_DIR = path.join(process.cwd(), 'src');
const EM_DASH = '—';
const REPLACEMENT = '-';
const TARGET_EXTENSIONS = ['.tsx', '.ts', '.js', '.jsx', '.md', '.mdx', '.txt'];

function walk(dir, callback) {
    try {
        const files = fs.readdirSync(dir);
        files.forEach(f => {
            let dirPath = path.join(dir, f);
            try {
                let isDirectory = fs.statSync(dirPath).isDirectory();
                if (isDirectory) {
                    if (f !== 'node_modules' && f !== '.next' && f !== '.git') {
                        walk(dirPath, callback);
                    }
                } else {
                    callback(dirPath);
                }
            } catch (err) {
                // Skip files that can't be stat-ed
            }
        });
    } catch (err) {
        console.error(`Error reading directory ${dir}:`, err.message);
    }
}

let filesChanged = 0;
let totalReplacements = 0;
let filesScanned = 0;

console.log('\x1b[36m%s\x1b[0m', `🛠️ Starting replacement of em dashes (—) with "${REPLACEMENT}" in ${SEARCH_DIR}...`);
console.log('------------------------------------------------------------');

walk(SEARCH_DIR, (filePath) => {
    const ext = path.extname(filePath);
    if (TARGET_EXTENSIONS.includes(ext)) {
        filesScanned++;
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes(EM_DASH)) {
                const occurrences = content.split(EM_DASH).length - 1;
                const newContent = content.split(EM_DASH).join(REPLACEMENT);
                
                fs.writeFileSync(filePath, newContent);
                
                filesChanged++;
                totalReplacements += occurrences;
                
                const relativePath = path.relative(process.cwd(), filePath);
                console.log(`\x1b[32m[UPDATED]\x1b[0m ${relativePath} (\x1b[33m${occurrences}\x1b[0m replacements)`);
            }
        } catch (err) {
            console.error(`\x1b[31m[ERROR]\x1b[0m Could not process ${filePath}:`, err.message);
        }
    }
});

console.log('------------------------------------------------------------');
console.log('\x1b[32m%s\x1b[0m', '✅ Replacement complete.');
console.log(`📂 Files scanned: ${filesScanned}`);
console.log(`📄 Files updated: ${filesChanged}`);
console.log(`🔢 Total em dashes replaced: ${totalReplacements}`);
