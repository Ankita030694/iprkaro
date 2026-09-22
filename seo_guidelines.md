# SEO Issues Log and Guidelines

This document tracks resolved SEO issues and establishes guidelines to prevent their recurrence.

## Issue: Duplicate `<h2>` Tags Across Multiple Pages

### Description
The search engine optimization (SEO) tool flagged a "Duplicate H2" issue across hundreds of URLs. The root cause was a Call-To-Action (CTA) header in a globally shared component (`NewFooter.tsx`) that was using an `<h2>` tag for the text "Make Your Brand Future-Proof with AI". Because this footer appears on almost every page, the exact same `<h2>` content was duplicated everywhere, violating the SEO best practice that `<h2>` tags should be unique and descriptive of the specific page's content.

### Fix Implemented
The `<h2>` tag in `NewFooter.tsx` was converted to a `<p>` tag (a generic paragraph element) while preserving the exact same Tailwind CSS styling. 

```diff
- <h2 className="text-white font-nunito text-[40px] md:text-[56px] font-bold text-center leading-[1.1] mb-12 tracking-tight">
+ <p className="text-white font-nunito text-[40px] md:text-[56px] font-bold text-center leading-[1.1] mb-12 tracking-tight">
    Make Your Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A56DB] via-[#DAB6FC] to-[#059669] animate-gradient">Future-Proof</span><br />
    with AI
- </h2>
+ </p>
```

### Guidelines to Prevent Recurrence
1. **Never use SEO-semantic tags (`<h1>`, `<h2>`, `<h3>`) in global layouts, footers, or navigation menus** unless strictly necessary for semantic page structure.
2. For visual headings in global components (like CTAs in a footer), use `<p>`, `<div>`, or `<span>` tags styled with CSS to look like headings.
3. Keep `<h2>` and `<h3>` tags reserved for the main body content of the specific page to ensure they remain unique, relevant, and indexable for that specific topic.

## Issue: `H2: Multiple` - Screaming Frog Flag

### Description
Screaming Frog flagged an "H2: Multiple" issue across 405 URLs. The affected pages had exactly 2 `<h2>` elements. The first `<h2>` was page-specific and legitimate. However, the second `<h2>` was repeatedly the global Call-To-Action (CTA): "Make Your Brand Future-Proof with AI". Although HTML standards allow multiple `<h2>` elements if they denote meaningful content sections, in this context, the CTA was merely promotional and not a genuine hierarchical content section for each of those pages. 

### Fix Implemented
The `<h3>` (or previously `<h2>`) tag in `CtaSection.tsx` (and `NewFooter.tsx`) was converted to a `<p>` tag to remove it from the heading hierarchy while preserving all visual styling, layout, animations, and accessibility features.

### Guidelines to Prevent Recurrence
1. **Never use SEO-semantic tags (`<h1>`, `<h2>`, `<h3>`) for global promotional elements or CTAs** unless they genuinely represent a hierarchical content section for the page they are rendered on.
2. If an element is purely a global CTA, style a non-heading semantic element (such as `<p>` or `<div>`) using CSS to achieve the required visual appearance.
3. Validate heading hierarchies during component creation. Ensure page templates contain logical, sequential headings that reflect their unique content rather than inheriting multiple non-contextual headings from reused components.

## Issue: Metadata and Canonicals Streaming Outside `<head>`

### Description
Screaming Frog flagged multiple SEO metadata tags (Canonicals, Page Titles, Directives, Meta Descriptions) as either "Missing" or appearing "Outside `<head>`". This occurs because the Next.js App Router dynamically streams metadata (placing it later in the document body) for dynamic pages (e.g., those using `searchParams`) unless the request's User-Agent is explicitly recognized as a bot. Additionally, paginated variations of URLs (e.g., `?page=1`, `?page=2`) were incorrectly generating unique canonical URLs instead of intentionally consolidating to the main root URL.

### Fix Implemented
1. Verified and ensured that the `htmlLimitedBots` property in `next.config.ts` was properly configured with a regex including crawler User-Agents (e.g., `/Screaming Frog|Googlebot.../i`). This instructs Next.js to wait and fully render the metadata inside the initial `<head>` instead of streaming it when crawled.
2. Updated the `generateMetadata` function in the affected paginated pages (e.g., `/trademark-by-location`) to hardcode the canonical URL to the root path (`https://www.iprkaro.com/trademark-by-location`), completely consolidating all paginated versions.

### Guidelines to Prevent Recurrence
1. **Next.js Bot Configuration**: Always ensure SEO auditing tools (like Screaming Frog) are included in the Next.js `htmlLimitedBots` configuration in `next.config.ts` when auditing Next.js App Router applications to ensure metadata is accurately detected in the `<head>`.
2. **Canonical Consolidation**: Ensure dynamic URL parameters (like pagination `?page=X`) do not generate unique canonical URLs unless explicitly required by a specific SEO strategy. Default to pointing them back to the main, unpaginated URL to consolidate link equity.
3. **Metadata Verification**: When testing SEO metadata, always verify the raw server-rendered HTML using the specific bot User-Agent (rather than just checking the browser's final DOM) to ensure tags are correctly placed in the `<head>`.
