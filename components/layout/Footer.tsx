"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"
import { translations, Language } from "@/lib/i18n"

export function Footer({ lang }: { lang: string }) {
    const currentLang = (lang === 'ar' || lang === 'en') ? lang : 'en' as Language
    const t = translations[currentLang]
    const isRTL = currentLang === 'ar'

    return (
        <footer className="bg-slate-900 text-white py-12 lg:py-16" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="relative w-32 h-16 bg-primary rounded-xl shadow-lg p-1">
                                <Image
                                    src="/sudoodLogoFill.png"
                                    alt="SUDOOD"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            <span className="text-4xl font-bold tracking-tighter text-white">SUDOOD</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            { t.home?.subtitle}
                        </p>
                        <div className="flex gap-4 text-gray-400 pt-2">
                            <Link href="#" className="hover:text-primary transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"><Linkedin size={18} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"><Twitter size={18} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"><Instagram size={18} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t.nav.about}</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href={`/${currentLang}/about`} className="hover:text-primary transition-colors">{t.nav.about}</Link></li>
                            <li><Link href={`/${currentLang}/services`} className="hover:text-primary transition-colors">{t.nav.services}</Link></li>
                            <li><Link href={`/${currentLang}/products`} className="hover:text-primary transition-colors">{t.nav.products}</Link></li>
                            <li><Link href={`/${currentLang}/contact`} className="hover:text-primary transition-colors">{t.nav.contact}</Link></li>
                        </ul>
                    </div>

                    {/* Legal/Resources */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{currentLang === 'ar' ? 'معلومات' : 'Info'}</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">{t.footer.terms}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t.nav.contact}</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-center gap-3">
                                <div className="bg-primary/20 p-2 rounded-full text-primary"><Mail size={16} /></div>
                                <a href={`mailto:${t.footer.email}`} className="hover:text-white transition-colors">{t.footer.email}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-primary/20 p-2 rounded-full text-primary"><MapPin size={16} /></div>
                                <span>{t.footer.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} SUDOOD. {t.footer.rights}.</p>
                    <a href="https://shimaamohamed.bio.link/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        {
                            currentLang === 'ar' ? 'تصميم وتطوير بواسطة SoftMasters' : 'Designed and Developed by SoftMasters'
                        }
                    </a>
                </div>
            </div>
        </footer>
    )
}
