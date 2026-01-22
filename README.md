# SUDOOD - Modern Bilingual Website

A premium, animated bilingual (English & Arabic) website for SUDOOD, a Saudi manufacturer of high-quality water and gas valves.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

The site will automatically redirect to `http://localhost:3000/en`. Use the language switcher (top right) to toggle between English and Arabic.

---

## 🌐 Language & RTL Support

- **English:** `/en` (LTR layout)
- **Arabic:** `/ar` (RTL layout)
- **Automatic Language Switching:** Use the language button in navigation
- **URL-Based Routing:** Change `/en` to `/ar` in the URL or use the switcher

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/[lang]/` | Hero, features, certifications, CTA |
| About | `/[lang]/about` | Company info, mission, values |
| Services | `/[lang]/services` | 4 main service offerings |
| Products | `/[lang]/products` | Product listing (3 products) |
| AI Product | `/[lang]/ai-future` | Smart Thread Ball Valve showcase |
| Contact | `/[lang]/contact` | Contact form, business info |
| Privacy | `/[lang]/privacy` | Privacy policy |

---

## 🎨 Customization

### Update Content
All text is in `/lib/i18n.ts`:
```typescript
// Example: Update home page title
en: {
  home: {
    title: 'Your New Title',
    // ...
  }
}
```

### Change Colors
Edit `/app/globals.css`:
```css
--primary: #6C3D8D; /* SUDOOD brand purple */
```

### Update Logo
Replace logo references in:
- `/components/Navigation.tsx` (line ~19)
- `/components/Footer.tsx` (line ~29)

---

## 📧 Contact Form Setup

The contact form currently uses a mailto fallback. To enable email delivery:

### Option 1: Formspree (Easiest)
1. Go to https://formspree.io
2. Create a new form
3. Update `/components/ContactForm.tsx` line ~83:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### Option 2: EmailJS
1. Sign up at https://www.emailjs.com
2. Create service and template
3. Install: `npm install @emailjs/browser`
4. Update ContactForm component with credentials

### Current Setup (No Backend Needed)
- Form opens user's email client (mailto)
- Works immediately, no configuration needed

---

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Tailwind + theme
│   └── [lang]/
│       ├── page.tsx            # Home
│       ├── about/page.tsx
│       ├── services/page.tsx
│       ├── products/page.tsx
│       ├── ai-future/page.tsx
│       ├── contact/page.tsx
│       └── privacy/page.tsx
├── components/
│   ├── Navigation.tsx           # Navbar
│   ├── Footer.tsx              # Footer
│   ├── CertificationShowcase.tsx # Certificates
│   └── ContactForm.tsx         # Contact form
├── lib/
│   ├── i18n.ts                 # Translations
│   └── utils.ts                # Utilities
├── middleware.ts               # i18n routing
└── next.config.mjs             # Next.js config
```

---

## 🎬 Animations

Built with **Framer Motion** for smooth, performant animations:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Staggered element animations

Animations are production-ready and optimized for performance.

---

## 📱 Responsive Design

- **Mobile:** 320px and up
- **Tablet:** 640px and up (sm breakpoint)
- **Desktop:** 1024px and up (lg breakpoint)

Test responsiveness:
```bash
# Open DevTools in Chrome/Firefox
# Press Ctrl+Shift+M (Windows/Linux) or Cmd+Shift+M (Mac)
```

---

## ✅ SEO Features

- ✅ Meta tags and Open Graph
- ✅ JSON-LD structured data
- ✅ Semantic HTML
- ✅ ARIA labels for accessibility
- ✅ Optimized images with alt text
- ✅ Fast page load times
- ✅ Mobile-friendly (responsive)

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```
One-click deploy from GitHub.

### Deploy to Netlify
1. Connect GitHub repo to Netlify
2. Build: `npm run build`
3. Publish: `.next`

See `DEPLOYMENT.md` for detailed instructions.

---

## 🛠️ Build & Production

```bash
# Build for production
npm run build

# Start production server
npm run start

# Analyze bundle size
npm run build -- --debug
```

---

## 📊 Performance

**Lighthouse Scores (Target):**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🌍 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome  | ✅ 90+ |
| Firefox | ✅ 88+ |
| Safari  | ✅ 14+ |
| Edge    | ✅ 90+ |
| Mobile  | ✅ All modern |

---

## 📚 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16 | Framework |
| React | 19 | UI Library |
| TypeScript | Latest | Type Safety |
| Tailwind CSS | v4 | Styling |
| Framer Motion | Latest | Animations |
| next/image | Built-in | Image Optimization |

---

## 🔐 Security & Best Practices

- ✅ No hardcoded secrets
- ✅ TypeScript type safety
- ✅ Input validation on forms
- ✅ HTTPS ready
- ✅ WCAG 2.1 AA accessibility
- ✅ Performance optimized

---

## 📞 Support

**Questions or Issues?**
- Email: info@sudood.sa
- Use contact form on website

---

## 📄 License

All rights reserved © 2025 SUDOOD

---

## 📖 Additional Resources

- **Deployment Guide:** See `DEPLOYMENT.md`
- **Project Summary:** See `PROJECT_SUMMARY.md`
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion

---

**Status:** ✅ Production Ready

**Framework:** Next.js 16 | **Updated:** January 2025
