export const MAX_META_DESC_CHARS = 150;
export const MAX_META_DESC_PIXELS = 900;

// Approximate pixel widths for Arial/Roboto 14px (typical SERP font)
const charWidths: Record<string, number> = {
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

function estimatePixelWidth(text: string): number {
  let width = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    width += charWidths[char] || 8.5; // Default width for unknown chars
  }
  return width;
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
  const originalWidth = estimatePixelWidth(desc);

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
  while (words.length > 0 && (desc.length > MAX_META_DESC_CHARS || estimatePixelWidth(desc) > MAX_META_DESC_PIXELS)) {
    words.pop();
    desc = words.join(' ').replace(/[,.\s]+$/, ''); // Remove trailing punctuation or space
  }
  
  const finalChars = desc.length;
  const finalWidth = estimatePixelWidth(desc);
  
  if (originalChars > MAX_META_DESC_CHARS || originalWidth > MAX_META_DESC_PIXELS) {
    console.warn(`SEO META WARNING: ${routeOrUrl} — source description ${originalChars} chars (${Math.round(originalWidth)}px) -> normalized to ${finalChars} chars (${Math.round(finalWidth)}px)`);
  }
  
  return desc;
}
