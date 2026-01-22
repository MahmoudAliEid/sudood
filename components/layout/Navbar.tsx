"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { translations, Language } from "@/lib/i18n"

interface NavbarProps {
    lang: string
}

export function Navbar({ lang }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()
    const router = useRouter()
    const pathname = usePathname()
    const currentPath = pathname.split('/')[2] ? `/${pathname.split('/')[1]}/${pathname.split('/')[2]}` : `/${pathname.split('/')[1]}`

    console.log("Current Path:", currentPath)

    const currentLang = (lang === 'ar' || lang === 'en') ? lang : 'en' as Language
    const t = translations[currentLang]
    const isRTL = currentLang === 'ar'

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20)
    })

    const handleLangChange = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en'
        const segments = pathname.split('/')
        if (segments.length > 1) {
            segments[1] = newLang
            const newPath = segments.join('/')
            router.push(newPath)
        } else {
            router.push(`/${newLang}`)
        }
    }

    const navLinks = [
        { name: t.nav.home, href: `/${currentLang}` },
        { name: t.nav.about, href: `/${currentLang}/about` },
        { name: t.nav.services, href: `/${currentLang}/services` },
        { name: t.nav.ai, href: `/${currentLang}/ai-future` },
        { name: t.nav.products, href: `/${currentLang}/products` },
        { name: t.nav.contact, href: `/${currentLang}/contact` },
    ]

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/98 backdrop-blur-lg shadow-sm border-b border-gray-100"
                : "bg-white/95 backdrop-blur-sm"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href={`/${currentLang}`} className="relative z-50 flex items-center gap-3 group">
                        <div className="relative w-28 bg-primary h-16 rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-transform group-hover:scale-105">
                            <Image
                                src="/sudoodLogoFill.png"
                                alt="SUDOOD Logo"
                                fill
                                className="object-contain p-2"
                                priority
                            />
                        </div>
                        <span className="text-foreground text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                            SUDOOD
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 ${currentPath === link.href ? 'text-gray-700 text-primary bg-primary/5' : 'text-gray-700 hover:text-primary hover:bg-primary/5'} py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleLangChange}
                            className="rounded-lg gap-2 hover:bg-gray-100 hover:text-primary text-gray-700 font-medium"
                        >
                            <Globe size={16} />
                            <span className="text-sm">{currentLang === 'en' ? 'العربية' : 'English'}</span>
                        </Button>
                        <Link href={`/${currentLang}/contact`}>
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-2 shadow-sm font-medium">
                                {t.cta.requestQuote}
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden relative z-50 flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleLangChange}
                            className="rounded-lg hover:bg-gray-100"
                        >
                            <span className="text-xs font-bold">{currentLang === 'en' ? 'ع' : 'EN'}</span>
                        </Button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-foreground hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-full left-0 right-0 bg-white border-b shadow-lg p-6 lg:hidden"
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/5 py-3 px-4 rounded-lg transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link href={`/${currentLang}/contact`} onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full mt-4 bg-primary text-white rounded-lg py-3 font-medium">
                                        {t.cta.requestQuote}
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.header>
    )
}
