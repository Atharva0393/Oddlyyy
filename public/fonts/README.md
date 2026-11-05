# ODDLYYY Font Assets Directory

This directory hosts custom local webfonts for the ODDLYYY website.

## FONT 02: Tempting (Editorial Script Font)
The global typography system is pre-configured with a `@font-face` declaration for **Tempting**.

### Role:
An elegant, flowing script typeface used selectively for:
- Expressive subheadings
- Short editorial phrases
- Selected words within headings
- Special introductory statements
- Occasional decorative typography

### Required Font File:
Place your Tempting script font file in this directory with any of the following names/formats:
- `Tempting.woff2` (Recommended for modern web browsers)
- `Tempting.woff`
- `Tempting.otf`
- `Tempting.ttf`

### Current Status:
- **Font File Present**: No (not currently supplied in repository).
- **Fallback Behavior**: Falls back to cursive / script / Inter until the file is placed in `/public/fonts/`.
- Once `Tempting.woff2` is added here, all `.font-secondary` and `.font-script` elements will immediately render with the custom script typeface.


