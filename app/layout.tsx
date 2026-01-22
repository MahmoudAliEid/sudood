import React from "react"
import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const cairo = Cairo({ subsets: ["arabic"], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: 'SUDOOD - محابس وصمامات مياه وغاز بجودة سعودية',
  description: 'SUDOOD - Saudi Manufacturer of High-Quality Water and Gas Valves | سدود - محابس وصمامات مياه عالية الجودة',
  generator: 'Next.js',
  keywords: ['water valves', 'gas valves', 'محابس مياه', 'صمامات غاز', 'SUDOOD', 'SASO', 'Saudi manufacturer'],
  authors: [{ name: 'SUDOOD' }],
  openGraph: {
    title: 'SUDOOD - High-Quality Water & Gas Valves',
    description: 'Saudi manufacturer of certified water and gas valves with international standards.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/sudoodLogo.png',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  return (
    <html lang="en" className={`${cairo.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#6C3D8D" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SUDOOD',
              url: 'https://sudood.sa',
              email: 'info@sudood.sa',
              logo: '/sudoodLogo.png',
              description: 'Saudi manufacturer of high-quality water and gas valves',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
