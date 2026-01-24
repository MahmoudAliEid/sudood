import React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Metadata } from "next"
import { metadata as allMetadata } from "@/lib/metadata"
import Script from "next/script"

const baseUrl = "https://sudood.sa"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params
    const m = allMetadata[lang] ?? allMetadata.en

    return {
        ...m,
        metadataBase: new URL(baseUrl),
        alternates: {
            canonical: `${baseUrl}/${lang}`,
            languages: {
                'en': `${baseUrl}/en`,
                'ar': `${baseUrl}/ar`,
                'x-default': `${baseUrl}/ar`,
            },
        },
    }
}

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params

    const validLang = ['en', 'ar'].includes(lang) ? lang : 'en'
    const dir = validLang === 'ar' ? 'rtl' : 'ltr'
    const isArabic = validLang === 'ar'

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": isArabic ? "سدود" : "SUDOOD",
        "description": isArabic
            ? "علامة تجارية سعودية متخصصة في تصنيع وتجميع محابس المياه والصمامات عالية الجودة"
            : "Saudi brand specialized in manufacturing and assembling high-quality water and gas valves",
        "url": `${baseUrl}/${validLang}`,
        "logo": `${baseUrl}/logo.png`,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966-XXXX-XXXX",
            "contactType": "customer service",
            "email": "info@sudood.sa",
            "areaServed": "SA",
            "availableLanguage": ["Arabic", "English"]
        },
        "sameAs": [
            "https://twitter.com/sudood",
            "https://linkedin.com/company/sudood"
        ]
    }

    return (
        <div dir={dir} className="min-h-screen flex flex-col font-sans">
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Navbar lang={validLang as 'en' | 'ar'} />
            <main className="flex-grow pt-24">
                {children}
            </main>
            <Footer lang={validLang as 'en' | 'ar'} />
        </div>
    )
}
