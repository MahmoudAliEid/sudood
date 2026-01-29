// /lib/metadata.ts

import { Metadata } from "next";

const baseUrl = "https://sudood.sa";

export const metadata: Record<string, Metadata> = {
  en: {
    title: "SUDOOD - Premium Water & Gas Valves | Saudi Manufacturer",
    description: "SUDOOD is a leading Saudi brand specializing in high-quality brass water and gas valves. SASO, UL, and ISO certified solutions for industrial and residential projects.",
    generator: "SUDOOD",
    keywords: [
      "water valves",
      "gas valves",
      "brass valves",
      "Saudi valve manufacturer",
      "SASO certified valves",
      "plumbing solutions Saudi Arabia",
      "industrial valves Gulf",
      "SUDOOD valves",
      "smart water valves",
      "quality plumbing materials",
    ],
    authors: [{ name: "SUDOOD", url: baseUrl }, { name: "SoftMasters", url: "https://shimaamohamed.bio.link/" }],
    alternates: {
      canonical: `${baseUrl}/en`,
      languages: {
        'en': `${baseUrl}/en`,
        'ar': `${baseUrl}/ar`,
        'x-default': `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: "SUDOOD - Premium Water & Gas Valves",
      description: "High-quality Saudi manufactured valves for water and gas systems. Engineering excellence since 20 years.",
      url: `${baseUrl}/en`,
      siteName: "SUDOOD",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${baseUrl}/sudoodLogo.png`,
          width: 1200,
          height: 630,
          alt: "SUDOOD Valves - Quality & Excellence",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "SUDOOD | Saudi Valve Manufacturer",
      description: "Premium brass valves for water and gas. SASO & UL certified.",
      images: [`${baseUrl}/sudoodLogo.png`],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
        { url: "/sudoodLogoFill.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/sudoodLogoFill.png", sizes: "180x180", type: "image/png" },
      ],
    },
  },

  ar: {
    title: "سدود - محابس و صمامات مياه و غاز فاخرة | صناعة سعودية",
    description: "سدود علامة سعودية رائدة متخصصة في محابس النحاس عالية الجودة للمياه والغاز. حلول معتمدة من SASO و UL للمشاريع الصناعية والسكنية.",
    generator: "سدود",
    keywords: [
      "محابس مياه",
      "صمامات غاز",
      "محابس نحاس",
      "مصنع صمامات سعودي",
      "محابس معتمدة من ساسو",
      "حلول السباكة في السعودية",
      "صمامات صناعية في الخليج",
      "محابس سدود",
      "محابس مياه ذكية",
      "مواد سباكة بجودة عالية",
    ],
    authors: [{ name: "سدود", url: baseUrl }, { name: "SoftMasters", url: "https://shimaamohamed.bio.link/" }],
    alternates: {
      canonical: `${baseUrl}/ar`,
      languages: {
        'en': `${baseUrl}/en`,
        'ar': `${baseUrl}/ar`,
        'x-default': `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: "سدود - محابس و صمامات مياه و غاز فاخرة",
      description: "محابس عالية الجودة مصنعة في السعودية لأنظمة المياه والغاز. تميز هندسي لأكثر من 20 عاماً.",
      url: `${baseUrl}/ar`,
      siteName: "سدود",
      type: "website",
      locale: "ar_AR",
      images: [
        {
          url: `${baseUrl}/sudoodLogo.png`,
          width: 1200,
          height: 630,
          alt: "محابس سدود - الجودة والتميز",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "سدود | مصنع صمامات سعودي",
      description: "محابس نحاسية فاخرة للمياه والغاز. معتمدة من ساسو و UL.",
      images: [`${baseUrl}/sudoodLogo.png`],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
        { url: "/sudoodLogoFill.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/sudoodLogoFill.png", sizes: "180x180", type: "image/png" },
      ],
    },
  },
};
