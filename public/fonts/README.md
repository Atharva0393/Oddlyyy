# ODDLYYY Typography System: Recoleta x Berthold

This directory hosts the local webfont assets for the Oddlyyy brand typography system.

---

## 1. Recoleta (Display and Editorial Serif)
- Foundry / Designer: Latinotype (Jorge Cisterna)
- Role: Expressive editorial serif used selectively for large statements, hero contrast phrases, storytelling moments, and editorial accents.
- Target Location: `/public/fonts/`

### Supported Filenames and Formats:
- Regular (Weight 400):
  - `Recoleta-Regular.woff2` (Recommended)
  - `Recoleta-Regular.woff`
  - `Recoleta-Regular.otf`
  - `Recoleta-Regular.ttf`
  - `Recoleta.woff2` / `Recoleta.otf` / `Recoleta.ttf`
- Italic (Weight 400 Italic):
  - `Recoleta-RegularItalic.woff2`
  - `Recoleta-Italic.woff2`
  - `Recoleta-Italic.otf`
- Medium (Weight 500):
  - `Recoleta-Medium.woff2`
  - `Recoleta-Medium.otf`
- Bold and Black (Weight 700 to 900):
  - `Recoleta-Bold.woff2`
  - `Recoleta-Black.woff2`
  - `Recoleta-Bold.otf`

---

## 2. Berthold (Primary Brand Sans-Serif)
- Foundry / Reference: H. Berthold AG (Akzidenz-Grotesk / Berthold Standard)
- Role: Bold, confident, graphic grotesque sans-serif used for navigation, body text, primary oversized headlines, service cards, project cards, CTAs, forms, and footer.
- Target Location: `/public/fonts/`

### Supported Filenames and Formats:
- Regular (Weight 400):
  - `Berthold-Regular.woff2` (Recommended)
  - `Berthold-Regular.woff`
  - `Berthold-Regular.otf`
  - `Berthold-Regular.ttf`
  - `AkzidenzGrotesk-Regular.woff2`
  - `AkzidenzGrotesk-Regular.otf`
- Medium (Weight 500):
  - `Berthold-Medium.woff2`
  - `AkzidenzGrotesk-Medium.woff2`
- Bold / Super / Black (Weight 700 to 900):
  - `Berthold-Bold.woff2`
  - `Berthold-Super.woff2`
  - `Berthold-Black.woff2`
  - `AkzidenzGrotesk-Bold.woff2`
  - `AkzidenzGrotesk-Super.woff2`
  - `AkzidenzGrotesk-Bold.otf`

---

## 3. Global CSS Variables and Activation
Configured centrally in `src/app/globals.css`, `src/app/layout.tsx`, and `tailwind.config.ts`:
- `--font-display: 'Recoleta', 'Fraunces', Georgia, serif;`
- `--font-primary: 'Berthold', 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`
- `--font-serif: 'Recoleta', 'Fraunces', Georgia, serif;`

### Activation Steps:
1. Place the purchased webfont binary files (`.woff2`) into this `/public/fonts/` directory.
2. In `src/app/globals.css`, uncomment the `@font-face` declarations for Recoleta and Berthold.
3. The website will immediately serve the licensed font faces with zero layout shift.
