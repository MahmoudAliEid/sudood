'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

interface FooterProps {
  lang: Language
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang]
  const isRTL = lang === 'ar'

  return (
    <footer
      className={`bg-primary text-white py-12 ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-lg">SUDOOD</span>
            </div>
            <p className="text-purple-100 text-sm">{t.footer.about}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">{t.nav.about}</h3>
            <ul className="space-y-2 text-sm text-purple-100">
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/services`}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/products`}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.products}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Info</h3>
            <ul className="space-y-2 text-sm text-purple-100">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">{t.nav.contact}</h3>
            <ul className="space-y-2 text-sm text-purple-100">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@sudood.sa"
                  className="hover:text-white transition-colors"
                >
                  info@sudood.sa
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-200 pt-8">
          <p className="text-center text-sm text-purple-100">
            {t.footer.copyright} © 2025 SUDOOD • {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
