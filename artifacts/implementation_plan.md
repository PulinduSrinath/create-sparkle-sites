# Implementation Plan - Rebranding ZetasBuild Website

This plan details the design updates and file changes to rebrand the entire website with the new logo and brand colors (electric blue and deep purple) as provided in the user's asset.

## Proposed Design System & Brand Identity

### 1. Logo Asset Replacement
The new logo icon (a gradient ZB icon) has been extracted from the user-uploaded image and successfully saved into the repository's `public/` directory:
- [premium-logo-icon.webp](file:///a:/Website/create-sparkle-sites/public/premium-logo-icon.webp)
- [premium-logo-icon-256.webp](file:///a:/Website/create-sparkle-sites/public/premium-logo-icon-256.webp)
- [premium-logo-icon.png](file:///a:/Website/create-sparkle-sites/public/premium-logo-icon.png)

### 2. Colors & Typography
We will establish a cohesive dark tech-themed palette using HSL codes derived from the logo and banner:
*   **Electric Blue (Primary)**: `#0052FF` (`hsl(221, 100%, 50%)`) for primary actions, buttons, and primary gradients.
*   **Deep Purple (Secondary)**: `#7A22FF` (`hsl(264, 100%, 56%)`) for accents, secondary gradients, and highlighted features.
*   **Deep Space Dark Navy (Background)**: `#060B26` (`hsl(231, 72%, 9%)`) to match the screens in the banner.

---

## Proposed Changes

### [CSS Core & Theme]

#### [MODIFY] [globals.css](file:///a:/Website/create-sparkle-sites/src/app/globals.css)
*   Update CSS color variables to define the new Electric Blue, Deep Purple, and Accent colors.
*   Update `.gradient-text` and `.gradient-border` rules to transition smoothly from electric blue to deep purple.

---

### [Components]

#### [MODIFY] [ZetasLogo.tsx](file:///a:/Website/create-sparkle-sites/src/components/ZetasLogo.tsx)
*   Rechange name representation from Greek-styled `ZΞTΛS BUILD` to title case `ZetasBuild` using the electric blue and dark navy/white colors.
*   Update subtext from `Web • Mobile • Product Development` to `SOFTWARE COMPANY` as depicted in the logo.

---

### [Pages]

#### [MODIFY] [page.tsx](file:///a:/Website/create-sparkle-sites/src/app/page.tsx) (Home Page)
*   Update hardcoded color glows (e.g., cyan/violet glows in StatCards) to match the new electric blue and purple theme.

#### [MODIFY] [ServicesSection.tsx](file:///a:/Website/create-sparkle-sites/src/app/ServicesSection.tsx)
*   Remap service item colors to the new Electric Blue and Deep Purple theme.

#### [MODIFY] [page.tsx](file:///a:/Website/create-sparkle-sites/src/app/about/page.tsx) (About Page)
*   Update stat card colors and inline gradient text drops.

#### [MODIFY] [page.tsx](file:///a:/Website/create-sparkle-sites/src/app/contact/page.tsx) (Contact Page)
*   Change hardcoded cyan glows and shadow variables to the electric blue brand color.

#### [MODIFY] [page.tsx](file:///a:/Website/create-sparkle-sites/src/app/services/page.tsx) (Services Page)
*   Remap bento grid services colors and glows to align with the new brand colors.

---

## Verification Plan

### Automated Verification
*   Run the Vite development build to verify there are no compilation errors.

### Manual Verification
*   Inspect the homepage, about page, services page, and contact page in the browser to ensure the branding transitions smoothly and matches the premium look of the banner.
