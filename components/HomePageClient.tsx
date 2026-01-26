'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, Variants } from 'framer-motion'
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
  home: {
    title: string
    subtitle: string
    hero: string
    heroDesc: string
    badges: {
      experience: string
      quality: string
      certified: string
    }
  }
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

const FloatingBadge = ({
  icon: Icon,
  text,
  className,
  delay = 0,
  isRTL = false
}: {
  icon: any
  text: string
  className: string
  delay?: number
  isRTL?: boolean
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{
      delay,
      duration: 0.8,
      ease: "easeOut"
    }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`absolute z-30 hidden lg:flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl shadow-primary/5 ${className}`}
  >
    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-sm font-bold text-foreground whitespace-nowrap">{text}</span>
  </motion.div>
)

export function HomePageClient({ lang: initialLang }: { lang: Language }) {
  const [currentLang, setCurrentLang] = useState<Language>(initialLang)
  const router = useRouter()

  const validLang: Language = (currentLang === 'en' || currentLang === 'ar') ? currentLang : 'en'
  const t = translations[validLang] as TranslationStructure
  const isRTL = validLang === 'ar'

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <div
      className={`min-h-screen bg-[#fafafa] selection:bg-primary/20 ${isRTL ? 'rtl font-cairo' : 'ltr font-sans'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants} className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-8 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Certified Excellence • SASO • UL
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-foreground mb-8 leading-[1.05] tracking-tight">
                {t?.home?.title || 'SUDOOD — High-Quality Water & Gas Valves'}
              </h1>

              <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-xl">
                {t?.home?.subtitle || 'SUDOOD is a Saudi brand specialized in manufacturing and assembling high-quality water and gas valves. Our products meet international and Saudi standards.'}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href={`/${validLang}/contact`}
                  className="px-8 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-[0.98] flex items-center gap-3"
                >
                  {t?.cta?.requestQuote || 'Request Quote'}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
                <Link
                  href={`/${validLang}/products`}
                  className="px-8 py-5 bg-white border border-gray-200 text-foreground rounded-2xl font-bold text-lg hover:bg-gray-50 hover:border-primary/30 transition-all active:scale-[0.98]"
                >
                  {t?.cta?.viewProducts || 'View Products'}
                </Link>
              </div>
            </motion.div>

            {/* Hero Image Section */}
            <motion.div variants={itemVariants} className="relative group">
              {/* Floating Decorative Blobs */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-primary/10 via-transparent to-purple-500/10 rounded-[4rem] blur-3xl -z-10 animate-pulse" />

              {/* Main Image Container */}
              <div className="relative rounded-[3.5rem] overflow-hidden border border-white/60 bg-white shadow-[0_32px_128px_-16px_rgba(0,0,0,0.1)] p-8 backdrop-blur-sm transition-transform duration-700 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 -z-10" />
                <Image
                  src="/products/30.png"
                  alt="SUDOOD Valves"
                  width={800}
                  height={800}
                  className="w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating Metrics Cards */}
              <FloatingBadge
                icon={Award}
                text={t.home.badges.experience}
                className={isRTL ? "top-10 -right-12" : "top-10 -left-12"}
                delay={0.6}
                isRTL={isRTL}
              />
              <FloatingBadge
                icon={Zap}
                text={t.home.badges.quality}
                className={isRTL ? "bottom-12 -left-8" : "bottom-12 -right-8"}
                delay={0.8}
                isRTL={isRTL}
              />
              <FloatingBadge
                icon={CheckCircle}
                text={t.home.badges.certified}
                className={isRTL ? "top-1/2 -left-16 transform -translate-y-1/2" : "top-1/2 -right-16 transform -translate-y-1/2"}
                delay={1}
                isRTL={isRTL}
              />
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
