/**
 * Reusable SEO Heading Structure Validator
 * 
 * Validates:
 * - Exactly one H1 per page (missing or multiple H1s)
 * - Strict heading sequentiality (no skipped levels like H1 -> H3, H2 -> H4)
 * - No H3 before first H2
 * - Duplicate H2 detection
 * 
 * Usage:
 *   node scripts/validate_headings.js [optional-page-path-or-slug]
 */

const fs = require('fs');
const path = require('path');

function extractHeadingsFromSource(source) {
  const headings = [];
  // Regex to match heading tags and extract level and approximate inner content
  const regex = /<h([1-6])(?:\s+[^>]*)?>([\s\S]*?)<\/h\1>/gi;
  let match;
  while ((match = regex.exec(source)) !== null) {
    const level = parseInt(match[1], 10);
    // Strip inner JSX tags/expressions for text representation
    const text = match[2].replace(/<[^>]+>/g, '').replace(/\{[^}]+\}/g, '').replace(/\s+/g, ' ').trim();
    headings.push({ level, tag: `H${level}`, text });
  }
  return headings;
}

function validateHeadingStructure(headings, urlPath) {
  const issues = [];
  const h1Count = headings.filter(h => h.level === 1).length;
  
  if (h1Count === 0) {
    issues.push('Missing H1 tag.');
  } else if (h1Count > 1) {
    issues.push(`Multiple H1 tags detected (${h1Count} found).`);
  }

  const h2Texts = new Map();
  let prevLevel = 0;
  let seenFirstH2 = false;

  for (let i = 0; i < headings.length; i++) {
    const { level, tag, text } = headings[i];

    if (level === 2) {
      seenFirstH2 = true;
      const normalizedText = text.toLowerCase();
      if (normalizedText && h2Texts.has(normalizedText)) {
        issues.push(`Duplicate H2 found: "${text}"`);
      } else if (normalizedText) {
        h2Texts.set(normalizedText, true);
      }
    }

    if (level === 3 && !seenFirstH2) {
      issues.push(`H3 "${text}" appears before any H2 on the page.`);
    }

    // Check for skipped heading level (e.g., H1 -> H3, H2 -> H4)
    if (prevLevel > 0 && level > prevLevel + 1) {
      issues.push(`Skipped heading level detected: H${prevLevel} → ${tag} ("${text}"). Skipped H${prevLevel + 1}.`);
    }

    prevLevel = level;
  }

  const structureStr = headings.map(h => h.tag).join(' ');
  const status = issues.length === 0 ? 'PASS' : 'FAIL';

  return {
    urlPath,
    structureStr,
    headings,
    issues,
    status
  };
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const headings = extractHeadingsFromSource(content);
  const relativePath = path.relative(path.join(__dirname, '../src/app'), filePath).replace(/\\/g, '/');
  const urlPath = '/' + relativePath.replace(/\/page\.tsx?$/, '');
  return validateHeadingStructure(headings, urlPath);
}

function run() {
  const targetArg = process.argv[2];
  const appDir = path.join(__dirname, '../src/app');

  if (targetArg) {
    let targetFile = targetArg;
    if (!fs.existsSync(targetFile)) {
      targetFile = path.join(appDir, targetArg, 'page.tsx');
    }
    if (!fs.existsSync(targetFile)) {
      console.error(`File not found: ${targetArg}`);
      process.exit(1);
    }
    const result = checkFile(targetFile);
    console.log('='.repeat(70));
    console.log(`HEADING SEO VALIDATION`);
    console.log(`URL: ${result.urlPath}`);
    console.log(`Heading structure: ${result.structureStr}`);
    if (result.issues.length > 0) {
      console.log(`Problems:`);
      result.issues.forEach(iss => console.log(` - ${iss}`));
    }
    console.log(`Status: ${result.status}`);
    console.log('='.repeat(70));
    return;
  }

  // Scan both target URLs specifically or all pages
  const targetPages = [
    'how-to-get-well-known-trademark-status-india',
    'domain-name-trademark-dispute-cybersquatting-indrp-india'
  ];

  targetPages.forEach(slug => {
    const filePath = path.join(appDir, slug, 'page.tsx');
    if (fs.existsSync(filePath)) {
      const result = checkFile(filePath);
      console.log('='.repeat(70));
      console.log(`HEADING SEO VALIDATION`);
      console.log(`URL: ${result.urlPath}`);
      console.log(`Heading structure: ${result.structureStr}`);
      if (result.issues.length > 0) {
        console.log(`Problems:`);
        result.issues.forEach(iss => console.log(` - ${iss}`));
      }
      console.log(`Status: ${result.status}`);
    }
  });
  console.log('='.repeat(70));
}

run();
