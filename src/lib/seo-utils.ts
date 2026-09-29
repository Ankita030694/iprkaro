export const MAX_META_DESC_CHARS = 150;
export const MAX_META_DESC_PIXELS = 900;

export const TARGET_TITLE_MIN_CHARS = 45;
export const TARGET_TITLE_MAX_CHARS = 55;
export const MAX_TITLE_CHARS = 60; // Hard maximum: title must be under 60 characters
export const MAX_TITLE_PIXELS = 561; // Hard maximum: Screaming Frog / Google SERP title pixel cutoff

// Approximate character widths for Arial/Roboto 14px (typical SERP description font)
const descCharWidths: Record<string, number> = {
  'A': 8.5, 'B': 8.5, 'C': 9.5, 'D': 9.5, 'E': 8.5, 'F': 8.5, 'G': 9.5, 'H': 9.5, 'I': 3.5, 'J': 6.5,
  'K': 8.5, 'L': 7.5, 'M': 11.5, 'N': 9.5, 'O': 10, 'P': 8.5, 'Q': 10, 'R': 9.5, 'S': 8.5, 'T': 8.5,
  'U': 9.5, 'V': 8.5, 'W': 12.5, 'X': 8.5, 'Y': 8.5, 'Z': 8.5,
  'a': 7.5, 'b': 7.5, 'c': 7.5, 'd': 7.5, 'e': 7.5, 'f': 4.5, 'g': 7.5, 'h': 7.5, 'i': 3.5, 'j': 3.5,
  'k': 7.5, 'l': 3.5, 'm': 11.5, 'n': 7.5, 'o': 7.5, 'p': 7.5, 'q': 7.5, 'r': 4.5, 's': 7.5, 't': 4.5,
  'u': 7.5, 'v': 7.5, 'w': 10.5, 'x': 7.5, 'y': 7.5, 'z': 7.5,
  '0': 7.5, '1': 7.5, '2': 7.5, '3': 7.5, '4': 7.5, '5': 7.5, '6': 7.5, '7': 7.5, '8': 7.5, '9': 7.5,
  ' ': 3.5, '.': 3.5, ',': 3.5, '!': 3.5, '?': 7.5, '\'': 2.5, '"': 4.5, '-': 4.5, '+': 7.5, '=': 7.5,
  ':': 3.5, ';': 3.5, '(': 4.5, ')': 4.5, '[': 4.5, ']': 4.5, '{': 4.5, '}': 4.5, '/': 4.5, '\\': 4.5,
  '|': 3.5, '<': 7.5, '>': 7.5, '@': 13.5, '#': 7.5, '$': 7.5, '%': 12.5, '^': 7.5, '&': 9.5, '*': 5.5,
  '_': 7.5, '~': 7.5, '`': 4.5
};

// Proportional character widths for Arial 20px (standard SERP title font evaluated by Screaming Frog)
const titleCharWidths: Record<string, number> = {
  'A': 13.34, 'B': 13.34, 'C': 14.44, 'D': 14.44, 'E': 13.34, 'F': 12.22, 'G': 15.56, 'H': 14.44, 'I': 5.56, 'J': 10.0,
  'K': 13.34, 'L': 11.12, 'M': 16.66, 'N': 14.44, 'O': 15.56, 'P': 13.34, 'Q': 15.56, 'R': 14.44, 'S': 13.34, 'T': 12.22,
  'U': 14.44, 'V': 13.34, 'W': 18.88, 'X': 13.34, 'Y': 13.34, 'Z': 12.22,
  'a': 11.12, 'b': 11.12, 'c': 10.0, 'd': 11.12, 'e': 11.12, 'f': 5.56, 'g': 11.12, 'h': 11.12, 'i': 4.44, 'j': 4.44,
  'k': 10.0, 'l': 4.44, 'm': 16.66, 'n': 11.12, 'o': 11.12, 'p': 11.12, 'q': 11.12, 'r': 6.66, 's': 10.0, 't': 5.56,
  'u': 11.12, 'v': 10.0, 'w': 14.44, 'x': 10.0, 'y': 10.0, 'z': 10.0,
  '0': 11.12, '1': 11.12, '2': 11.12, '3': 11.12, '4': 11.12, '5': 11.12, '6': 11.12, '7': 11.12, '8': 11.12, '9': 11.12,
  ' ': 5.56, '.': 5.56, ',': 5.56, '!': 5.56, '?': 11.12, '\'': 3.82, '"': 7.10, '-': 6.66, '+': 11.68, '=': 11.68,
  ':': 5.56, ';': 5.56, '(': 6.66, ')': 6.66, '[': 5.56, ']': 5.56, '{': 6.68, '}': 6.68, '/': 5.56, '\\': 5.56,
  '|': 5.20, '<': 11.68, '>': 11.68, '@': 20.30, '#': 11.12, '$': 11.12, '%': 17.78, '^': 9.38, '&': 13.34, '*': 7.78,
  '_': 11.12, '~': 11.68, '`': 6.66, '–': 11.12, '—': 20.0, '’': 4.44, '‘': 4.44, '“': 7.10, '”': 7.10, '₹': 13.0
};

export function estimateDescriptionPixelWidth(text: string): number {
  let width = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    width += descCharWidths[char] || 8.5; // Default width for unknown chars
  }
  return Math.round(width * 10) / 10;
}

export function estimateTitlePixelWidth(text: string): number {
  let width = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    width += titleCharWidths[char] || 11.0; // Default width for unknown chars
  }
  return Math.round(width * 10) / 10;
}

export interface TitleValidationResult {
  title: string;
  charCount: number;
  pixelWidth: number;
  isCharCountValid: boolean;
  isPixelWidthValid: boolean;
  isSameAsH1: boolean;
  isDuplicate: boolean;
  isMissing: boolean;
  isValid: boolean;
  warnings: string[];
}

const registeredTitles = new Map<string, string>();

export function validateTitle(
  title: string | undefined | null,
  routeOrUrl: string = "unknown-route",
  h1?: string | undefined | null
): TitleValidationResult {
  const cleanTitle = (title || "").trim();
  const cleanH1 = (h1 || "").trim();
  const charCount = cleanTitle.length;
  const pixelWidth = estimateTitlePixelWidth(cleanTitle);
  const warnings: string[] = [];

  const isMissing = charCount === 0;
  if (isMissing) {
    warnings.push("Page title is missing.");
  }

  const isSameAsH1 = cleanH1.length > 0 && cleanTitle.toLowerCase() === cleanH1.toLowerCase();
  if (isSameAsH1) {
    warnings.push(`Title is identical to H1 ("${cleanH1}"). Page title and H1 should differ.`);
  }

  const isCharCountValid = charCount > 0 && charCount < MAX_TITLE_CHARS;
  const isPixelWidthValid = pixelWidth < MAX_TITLE_PIXELS;

  if (charCount >= MAX_TITLE_CHARS) {
    warnings.push(`Title has ${charCount} characters (hard limit: < ${MAX_TITLE_CHARS} characters).`);
  } else if (charCount < TARGET_TITLE_MIN_CHARS && charCount > 0) {
    warnings.push(`Title has ${charCount} characters (target recommendation: ${TARGET_TITLE_MIN_CHARS}–${TARGET_TITLE_MAX_CHARS} characters).`);
  }

  if (pixelWidth >= MAX_TITLE_PIXELS) {
    warnings.push(`Title has estimated width of ${pixelWidth}px (hard limit: < ${MAX_TITLE_PIXELS}px).`);
  }

  let isDuplicate = false;
  if (cleanTitle.length > 0) {
    const titleKey = cleanTitle.toLowerCase();
    const existingRoute = registeredTitles.get(titleKey);
    if (existingRoute && existingRoute !== routeOrUrl) {
      isDuplicate = true;
      warnings.push(`Duplicate title detected. Already registered by ${existingRoute}.`);
    } else {
      registeredTitles.set(titleKey, routeOrUrl);
    }
  }

  const isValid = !isMissing && !isSameAsH1 && isCharCountValid && isPixelWidthValid && !isDuplicate;

  if (!isValid && typeof console !== 'undefined' && console.warn) {
    console.warn(
      `[SEO TITLE VALIDATION]\n` +
      `URL: ${routeOrUrl}\n` +
      `Title: ${cleanTitle}\n` +
      `H1: ${cleanH1 || 'N/A'}\n` +
      `Character count: ${charCount}\n` +
      `Estimated pixel width: ${pixelWidth}px\n` +
      `Status: FAIL (${warnings.join(' | ')})`
    );
  }

  return {
    title: cleanTitle,
    charCount,
    pixelWidth,
    isCharCountValid,
    isPixelWidthValid,
    isSameAsH1,
    isDuplicate,
    isMissing,
    isValid,
    warnings
  };
}

export function validateAndNormalizeTitle(
  rawTitle: string | undefined | null,
  routeOrUrl: string = "unknown-route",
  h1?: string | undefined | null
): string {
  if (!rawTitle) {
    validateTitle("", routeOrUrl, h1);
    return "";
  }
  const cleanTitle = rawTitle.trim();
  validateTitle(cleanTitle, routeOrUrl, h1);
  return cleanTitle;
}

export function validateAndNormalizeDescription(
  rawDescription: string | undefined | null,
  routeOrUrl: string = "unknown-route"
): string {
  if (!rawDescription) {
    return "";
  }
  
  let desc = rawDescription.trim();
  const originalChars = desc.length;
  const originalWidth = estimateDescriptionPixelWidth(desc);

  if (originalChars <= MAX_META_DESC_CHARS && originalWidth <= MAX_META_DESC_PIXELS) {
    return desc;
  }
  
  // Clean up unnecessary marketing filler that takes space without SEO value
  const fillers = [
    /5000\+\s*words/gi,
    /4000\+\s*words/gi,
    /comprehensive guide/gi,
    /exhaustive guide/gi,
    /ultimate guide/gi,
    /definitive guide/gi
  ];
  
  for (const filler of fillers) {
    desc = desc.replace(filler, '').replace(/\s+/g, ' ').trim();
  }

  // Iteratively remove words from the end until it fits both limits
  let words = desc.split(' ');
  while (words.length > 0 && (desc.length > MAX_META_DESC_CHARS || estimateDescriptionPixelWidth(desc) > MAX_META_DESC_PIXELS)) {
    words.pop();
    desc = words.join(' ').replace(/[,.\s]+$/, ''); // Remove trailing punctuation or space
  }
  
  const finalChars = desc.length;
  const finalWidth = estimateDescriptionPixelWidth(desc);
  
  if (originalChars > MAX_META_DESC_CHARS || originalWidth > MAX_META_DESC_PIXELS) {
    console.warn(`SEO META WARNING: ${routeOrUrl} — source description ${originalChars} chars (${Math.round(originalWidth)}px) -> normalized to ${finalChars} chars (${Math.round(finalWidth)}px)`);
  }
  
  return desc;
}

export interface HeadingItem {
  level: number;
  text: string;
  id?: string;
}

export interface HeadingValidationResult {
  h1Count: number;
  h2Count: number;
  duplicateH2s: { text: string; occurrences: number }[];
  missingH1: boolean;
  multipleH1: boolean;
  nonSequential: { from: number; to: number; text: string }[];
  isValid: boolean;
  warnings: string[];
}

export function validateHeadings(
  headings: HeadingItem[],
  routeOrUrl: string = "unknown-route"
): HeadingValidationResult {
  const warnings: string[] = [];
  const h1s = headings.filter(h => h.level === 1);
  const h2s = headings.filter(h => h.level === 2);

  const missingH1 = h1s.length === 0;
  const multipleH1 = h1s.length > 1;

  if (missingH1) {
    warnings.push("Page is missing an H1 heading.");
  }
  if (multipleH1) {
    warnings.push(`Page contains ${h1s.length} H1 headings (should have exactly 1).`);
  }

  // Check duplicate H2s (case-insensitive & trimmed)
  const h2Map: Record<string, number> = {};
  h2s.forEach(h => {
    const key = h.text.trim().toLowerCase();
    h2Map[key] = (h2Map[key] || 0) + 1;
  });

  const duplicateH2s: { text: string; occurrences: number }[] = [];
  Object.entries(h2Map).forEach(([key, count]) => {
    if (count > 1) {
      const original = h2s.find(h => h.text.trim().toLowerCase() === key)?.text || key;
      duplicateH2s.push({ text: original, occurrences: count });
      warnings.push(`Duplicate H2 found: "${original}" (${count} occurrences).`);
    }
  });

  // Check non-sequential heading levels (e.g. H1 directly to H3 or H2 to H4)
  const nonSequential: { from: number; to: number; text: string }[] = [];
  for (let i = 0; i < headings.length - 1; i++) {
    const current = headings[i].level;
    const next = headings[i + 1].level;
    if (next > current + 1) {
      nonSequential.push({ from: current, to: next, text: headings[i + 1].text });
      warnings.push(`Non-sequential heading jump from H${current} to H${next} at "${headings[i + 1].text}".`);
    }
  }

  const isValid = !missingH1 && !multipleH1 && duplicateH2s.length === 0 && nonSequential.length === 0;

  if (!isValid && typeof console !== 'undefined' && console.warn) {
    console.warn(
      `[SEO HEADING WARNING] ${routeOrUrl} — Issues: ${warnings.join(' | ')}`
    );
  }

  return {
    h1Count: h1s.length,
    h2Count: h2s.length,
    duplicateH2s,
    missingH1,
    multipleH1,
    nonSequential,
    isValid,
    warnings
  };
}

