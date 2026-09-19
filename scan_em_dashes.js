const fs = require('fs');
const path = require('path');

/**
 * Script to scan the codebase for em dashes (—) and report their locations.
 * This helps in identifying content that needs to be updated to meet SEO or style guidelines.
 */

const SEARCH_DIR = path.join(process.cwd(), 'src');
const EM_DASH = '—';
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

let totalFound = 0;
let filesWithDashes = 0;
let filesScanned = 0;

console.log('\x1b[36m%s\x1b[0m', `🚀 Starting scan for em dashes (—) in ${SEARCH_DIR}...`);
console.log('------------------------------------------------------------');

const results = [];

walk(SEARCH_DIR, (filePath) => {
    const ext = path.extname(filePath);
    if (TARGET_EXTENSIONS.includes(ext)) {
        filesScanned++;
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes(EM_DASH)) {
                filesWithDashes++;
                const lines = content.split('\n');
                lines.forEach((line, index) => {
                    if (line.includes(EM_DASH)) {
                        totalFound++;
                        const match = {
                            file: path.relative(process.cwd(), filePath),
                            line: index + 1,
                            content: line.trim()
                        };
                        results.push(match);
                        console.log(`\x1b[33m[${match.file}:${match.line}]\x1b[0m`);
                        console.log(`  ${match.content}`);
                        console.log('\x1b[90m%s\x1b[0m', '---');
                    }
                });
            }
        } catch (err) {
            // Skip files that can't be read
        }
    }
});

console.log('\n------------------------------------------------------------');
console.log('\x1b[32m%s\x1b[0m', '✅ Scan complete.');
console.log(`📂 Files scanned: ${filesScanned}`);
console.log(`📄 Files containing em dashes: ${filesWithDashes}`);
console.log(`🔢 Total em dashes found: ${totalFound}`);

if (totalFound > 0) {
    const reportPath = path.join(process.cwd(), 'em_dash_report.txt');
    const reportContent = results.map(m => `[${m.file}:${m.line}] ${m.content}`).join('\n');
    fs.writeFileSync(reportPath, `EM DASH SCAN REPORT\nGenerated on: ${new Date().toISOString()}\n\nTotal Found: ${totalFound}\n\n${reportContent}`);
    console.log(`\n📝 Detailed report saved to: \x1b[34m${reportPath}\x1b[0m`);
}
