'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

interface NavigationProps {
  lang: Language
  onLangChange: (lang: Language) => void
}

export function Navigation({ lang, onLangChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = translations[lang]
  const isRTL = lang === 'ar'

  const navItems = [
    { key: 'nav.home', href: `/${lang}` },
    { key: 'nav.about', href: `/${lang}/about` },
    { key: 'nav.services', href: `/${lang}/services` },
    { key: 'nav.products', href: `/${lang}/products` },
    { key: 'nav.ai', href: `/${lang}/ai-future` },
    { key: 'nav.contact', href: `/${lang}/contact` },
  ]

  const getLabel = (key: string) => {
    const keys = key.split('.')
    let value: any = t
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-purple-100 shadow-sm ${
        isRTL ? 'rtl' : 'ltr'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-primary hidden sm:inline">
                SUDOOD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {getLabel(item.key)}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => onLangChange(lang === 'en' ? 'ar' : 'en')}
              className="px-3 py-2 rounded-lg bg-purple-100 text-primary font-medium text-sm hover:bg-purple-200 transition-colors"
            >
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-purple-100 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white border-t border-purple-100"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {getLabel(item.key)}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
