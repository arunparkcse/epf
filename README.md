# Emirates Printing Forms — Angular Redesign

Modern Angular 17 redesign of **emiratesprintingforms.com**, inspired by the [mexdot light/creative](https://template.dsngrid.com/mexdot/light/creative.html) design concept.

**Full light theme · No dark backgrounds · All content & images migrated · Standalone components**

---

## Project Structure

```
epf-angular/
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.scss                  ← Global theme variables & utilities
    └── app/
        ├── app.component.ts/html/scss
        ├── app.config.ts
        ├── app.routes.ts            ← Lazy-loaded routes
        ├── shared/
        │   ├── navbar/              ← Sticky navbar + dropdown + mobile menu
        │   └── footer/              ← 4-column footer + offices + QR code
        └── pages/
            ├── home/                ← Hero slider, stats, products, industries, process, clients
            ├── about/               ← Company overview + Why Choose Us
            ├── vision-mission/      ← Vision, Mission, Core Values
            ├── certifications/      ← ISO 9001/14001/45001, BRC/IOP, FSSC, Halal
            ├── printing-technology/ ← 6 technology cards + facility banner
            ├── flexible-packaging/  ← 7 categories with tab switcher
            ├── labels/              ← 4 label types (Wrap Around, Self-Adhesive, Shrink, In-Mold)
            ├── gallery/             ← Filterable masonry grid + lightbox
            ├── careers/             ← Benefits grid + open roles CTA
            └── contact/             ← Dual-office maps, form, info cards
```

---

## Quick Start

### Prerequisites
- **Node.js** 18+ — [nodejs.org](https://nodejs.org)
- **Angular CLI** 17 — install once globally:

```bash
npm install -g @angular/cli@17
```

### 1 — Install dependencies

> **Important:** Delete the `node_modules` folder first if it exists (it may contain partial files from the build environment), then run:

```bash
cd epf-angular
npm install
```

### 2 — Development server

```bash
ng serve
```

Open **http://localhost:4200** in your browser. The app hot-reloads on file changes.

### 3 — Production build

```bash
ng build
```

Output is placed in `dist/epf-angular/`. Deploy the contents of that folder to any static host (Netlify, Vercel, Firebase Hosting, cPanel, etc.).

---

## Pages & Routes

| Route | Component | Content |
|---|---|---|
| `/` | HomeComponent | Hero slider, stats bar, about intro, products, industries, process steps, clients marquee, CTA |
| `/about-us` | AboutComponent | Company overview, image gallery, Why Choose Us grid |
| `/vision-and-mission` | VisionMissionComponent | Vision card, Mission card, 6 Core Values |
| `/certifications` | CertificationsComponent | ISO 9001, ISO 14001, ISO 45001, BRC/IOP, FSSC 22000, Halal |
| `/printing-technology` | PrintingTechnologyComponent | Rotogravure, Flexo, Digital, Lamination, Slitting, QC Lab |
| `/flexible-packaging` | FlexiblePackagingComponent | 7 tabbed categories (Confectionary, Chips, Biscuits, Ice Cream, Dairy, Food, Detergent) |
| `/labels` | LabelsComponent | 4 label types (Wrap Around, Self-Adhesive, Shrink Sleeves, In-Mold) |
| `/gallery` | GalleryComponent | Filterable grid + click-to-zoom lightbox |
| `/careers` | CareersComponent | Benefits grid, team photo, email CTA |
| `/contact-us` | ContactComponent | Info cards, contact form, dual Google Maps embeds |

---

## Design System

All CSS custom properties are in `src/styles.scss`:

| Variable | Value | Use |
|---|---|---|
| `--primary` | `#0056b3` | Buttons, links, accents |
| `--accent` | `#f5a623` | Badges, highlights, numbers |
| `--text-dark` | `#1a1a2e` | Headings |
| `--bg-light` | `#f8f9fc` | Section backgrounds |
| `--shadow-lg` | `0 20px 60px rgba(0,86,179,0.16)` | Card hovers |

### Key UI Patterns
- **Hero** — Full-viewport auto-sliding hero with parallax bg + dot/arrow controls + stats bar
- **Navbar** — Sticky with scroll-aware shadow, hover dropdowns, animated hamburger
- **Cards** — Lift + shadow on hover (`transform: translateY(-6px)`)
- **Tabs** — Pill-style tab switchers on product pages (no page reload)
- **Marquee** — CSS-only infinite scroll for client logos (pause on hover)
- **Lightbox** — Click-to-expand gallery with backdrop dismiss
- **Forms** — Reactive-style with success message feedback

---

## Angular Component Structure

Every component follows the same pattern — **3 separate files**:

```
component-name/
├── component-name.component.ts    ← Logic, data, signals
├── component-name.component.html  ← Template with @for / @if control flow
└── component-name.component.scss  ← Scoped SCSS styles
```

All components are **standalone** (no NgModule). Routes use **lazy loading** via `loadComponent`.

---

## Images

All images load directly from the live EPF website CDN:
```
https://emiratesprintingforms.com/wp-content/uploads/...
```
No assets need to be downloaded. To use local images instead, place them in `src/assets/images/` and update the `src` paths in each component's `.ts` file.

---

## Deployment

### Netlify / Vercel (recommended)
1. Run `ng build`
2. Drag `dist/epf-angular/browser/` folder to Netlify drop zone  
   **or** connect your Git repo for auto-deploy

### Apache / cPanel
1. Run `ng build`
2. Upload contents of `dist/epf-angular/browser/` to `public_html/`
3. Add `.htaccess` for Angular routing:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
ng build
firebase deploy
```

---

## Contact & Offices

| | Abu Dhabi (HQ) | Dubai (Sales) |
|---|---|---|
| **Address** | P.O. Box 4678, Abu Dhabi, U.A.E. | P.O. Box 27222, Dubai, U.A.E. |
| **Phone** | +971 2 673 0800 | +971 4 282 7877 |
| **Email** | info@epfe.ae | info@epfe.ae |

---

*Built with Angular 17 · Standalone Components · SCSS · No external UI frameworks*
