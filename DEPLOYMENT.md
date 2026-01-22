# SUDOOD Website - Deployment Guide

## Project Overview

This is a modern, animated bilingual (Arabic/English) website for SUDOOD, a Saudi manufacturer of high-quality water and gas valves.

**Tech Stack:**
- Next.js 16 (App Router)
- React 19 with TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- i18n (internationalization)

## Features

✅ Bilingual support (English & Arabic with RTL layout)
✅ Responsive design (mobile-first)
✅ Smooth animations with Framer Motion
✅ Certifications showcase (SASO, UL, CSA, FM, ISO9001)
✅ Contact form with email integration
✅ SEO optimized with structured data
✅ Products listing system
✅ AI-powered product showcase
✅ Services and About pages

## Pages Structure

```
/[lang]
├── page.tsx              (Home)
├── about/page.tsx        (About Us)
├── services/page.tsx     (Services)
├── products/page.tsx     (Product Listing)
├── ai-future/page.tsx    (AI Product - Smart Thread Ball Valve)
├── contact/page.tsx      (Contact & Quote Request)
└── privacy/page.tsx      (Privacy Policy)
```

## Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   - Visit http://localhost:3000
   - You'll be automatically redirected to http://localhost:3000/en
   - Change language by clicking language switcher (top right)

## Deployment to Vercel

### Option 1: One-Click Deploy
1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click Deploy

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## Deployment to Netlify

1. Push code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect GitHub and select repository
5. Build command: `npm run build`
6. Publish directory: `.next`

## Environment Variables

Currently, no environment variables are required for basic operation. 

**For Email Integration (Optional):**

If you want to use Formspree or EmailJS for the contact form:

### Using Formspree:
1. Sign up at https://formspree.io
2. Create a new form
3. Copy the form endpoint ID
4. Update `/components/ContactForm.tsx` line ~83 with your form ID:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### Using EmailJS:
1. Sign up at https://www.emailjs.com
2. Create service, template, and get credentials
3. Install EmailJS: `npm install @emailjs/browser`
4. Update ContactForm component with your credentials

**Current Setup:** Contact form uses mailto links as fallback (works without backend configuration)

## Content Management

### Edit Page Content
All text content is managed in `/lib/i18n.ts`. To update translations:

1. Open `/lib/i18n.ts`
2. Find the desired language (en/ar)
3. Update the translation strings
4. Changes apply immediately in development

### Update Certifications
Edit `/components/CertificationShowcase.tsx` to add/remove certification logos:
```typescript
const certifications = [
  { name: 'SASO', image: 'url', alt: 'description' },
  // Add more...
]
```

### Add Products
Products are defined in `/lib/i18n.ts` under `translations[lang].products`

## Customization

### Colors
Primary color is set to #6C3D8D (SUDOOD brand purple). To change:
1. Edit `/app/globals.css` - update `--primary` variable
2. Colors throughout the site will automatically update

### Fonts
Fonts are configured in:
- `/app/layout.tsx` - Import Google fonts
- `/app/globals.css` - Set font variables in @theme

Default: Inter (English) + Cairo (Arabic)

### Logo
The SUDOOD logo is referenced in:
- `/components/Navigation.tsx`
- `/components/Footer.tsx`
- Home hero section

Replace with your actual logo image.

## SEO Optimization

### Meta Tags
- Edit `/app/layout.tsx` for global metadata
- Edit individual page files for page-specific metadata

### Structured Data
- JSON-LD schema added in layout.tsx
- Update organization details and URLs

### Keywords
Update in translations and page metadata for each language.

## Performance Optimization

- Next.js Image optimization enabled
- Lazy loading for images
- CSS/JS minification (automatic)
- Responsive images with srcset

## Analytics

To add analytics:
- Google Analytics: Add to `layout.tsx`
- Vercel Analytics: Already integrated (remove if not using Vercel)

## Support

For issues or customization needs:
- Email: info@sudood.sa
- Contact form on website

## License

Custom website for SUDOOD. All rights reserved.

---

**Last Updated:** January 2025
**Framework Version:** Next.js 16
**Status:** Production Ready
