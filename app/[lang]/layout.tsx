import React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params

    // Basic validation or fallback
    const validLang = ['en', 'ar'].includes(lang) ? lang : 'en'
    const dir = validLang === 'ar' ? 'rtl' : 'ltr'

    return (
        <div dir={dir} className="min-h-screen flex flex-col font-sans">
            <Navbar lang={validLang} />
            <main className="flex-grow pt-24">
                {children}
            </main>
            <Footer lang={validLang} />

        </div>
    )
}
