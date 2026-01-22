'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Award, Zap, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { CertificationShowcase } from '@/components/CertificationShowcase'
import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { products } from '@/app/[lang]/products/page'
import { ProductCard } from '@/components/products/ProductCard'

interface TranslationStructure {
  nav: Record<string, string>
  cta: Record<string, string>
  home: Record<string, string>
  about: Record<string, string>
  services: Record<string, string>
  products: Record<string, string>
  contact: {
    title: string
    description: string
    form: Record<string, string>
  }
  certifications: Record<string, string>
  footer: Record<string, string>
}

export function HomePageClient({ lang: initialLang }: { lang: Language }) {
  const [currentLang, setCurrentLang] = useState<Language>(initialLang)
  const router = useRouter()

  const validLang: Language = (currentLang === 'en' || currentLang === 'ar') ? currentLang : 'en'
  const t = translations[validLang] as TranslationStructure
  const isRTL = validLang === 'ar'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div
      className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
        <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Certified • SASO • UL • CSA • FM • ISO9001
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                {t?.home?.title || 'SUDOOD — High-Quality Water & Gas Valves'}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                {t?.home?.subtitle || 'SUDOOD is a Saudi brand specialized in manufacturing and assembling high-quality water and gas valves. Our products meet international and Saudi standards and are engineered for durability in GCC conditions.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={`/${validLang}/contact`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  {t?.cta?.requestQuote || 'Request Quote'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href={`/${validLang}/products`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-foreground rounded-xl font-semibold hover:border-primary hover:bg-primary/5 transition-all"
                >
                  {t?.cta?.viewProducts || 'View Products'}
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div variants={itemVariants} className="relative">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-50 to-transparent rounded-3xl -z-20" />

              {/* Main image container with animated border */}
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 p-1 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-400/10 to-transparent opacity-50 animate-pulse" />
                <div className="relative w-full h-full bg-white rounded-3xl p-8 overflow-hidden">
                  <Image
                    src="/heroImage.png"
                    alt="SUDOOD Valves"
                    fill
                    className="object-fit drop-shadow-2xl z-10"
                    priority
                  />
                  {/* Subtle grid pattern overlay */}
                  <div className="absolute inset-0 bg-grid-gray-200/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary/30 to-purple-400/20 rounded-full blur-3xl -z-10"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple-300/30 to-primary/20 rounded-full blur-3xl -z-10"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />

              {/* Accent dots */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary/40 rounded-full blur-sm" />
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-purple-400/40 rounded-full blur-sm" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Certifications Section */}
      <CertificationShowcase lang={validLang} />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {validLang === 'ar' ? 'لماذا تختار سدود؟' : 'Why Choose SUDOOD?'}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {validLang === 'ar'
                ? 'جودة رائدة والابتكار في تصنيع الصمامات'
                : 'Leading quality and innovation in valve manufacturing'}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: validLang === 'ar' ? 'شهادات عالمية' : 'International Certifications',
                desc: validLang === 'ar' ? 'معتمد من SASO و UL و CSA و FM و ISO9001' : 'Certified by SASO, UL, CSA, FM, and ISO9001',
                icon: Award,
              },
              {
                title: validLang === 'ar' ? 'أداء موثوق' : 'Reliable Performance',
                desc: validLang === 'ar' ? 'مصمم لتحمل أقسى ظروف المياه في الخليج' : 'Engineered for harsh GCC water conditions',
                icon: Zap,
              },
              {
                title: validLang === 'ar' ? 'دعم متخصص' : 'Expert Support',
                desc: validLang === 'ar' ? 'فريق هندسي سعودي متخصص لضمان الجودة' : 'Saudi engineering team ensures quality',
                icon: Users,
              },
            ].map((feature, idx) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={idx}
                  className="group p-8  border border-gray-100 rounded-2xl hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.products.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.products.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} lang={validLang} />
            ))}
          </div>

          {/* View All Products Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/${validLang}/products`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl"
            >
              {t.products.viewAllProducts}
              <ArrowRight className={`w-5 h-5 ${validLang === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/95 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {validLang === 'ar'
                ? 'هل أنت مستعد لحلول صمامات عالية الجودة؟'
                : 'Ready for Premium Valve Solutions?'}
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              {validLang === 'ar'
                ? 'تواصل معنا اليوم لمناقشة متطلبات مشروعك والحصول على عرض سعر تنافسي'
                : 'Contact us today to discuss your project requirements and get a competitive quote'}
            </p>
            <Link
              href={`/${validLang}/contact`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-primary rounded-xl font-bold hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              {t?.cta?.requestQuote || 'Request Quote'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
      </section>
    </div>
  )
}
