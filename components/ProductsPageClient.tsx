'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'


import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

export function ProductsPageClient({ lang: initialLang }: { lang: Language }) {
  const [currentLang, setCurrentLang] = useState<Language>(initialLang)
  const router = useRouter()

  const validLang: Language = (currentLang === 'en' || currentLang === 'ar') ? currentLang : 'en'
  const t = translations[validLang]
  const isRTL = validLang === 'ar'

  const handleLangChange = (newLang: Language) => {
    const validNewLang: Language = (newLang === 'en' || newLang === 'ar') ? newLang : 'en'
    setCurrentLang(validNewLang)
    router.push(`/${validNewLang}/products`)
  }

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

  const products = [
    {
      name: validLang === 'ar' ? 'صمام الخيط الذكي' : 'Smart Thread Ball Valve',
      desc: validLang === 'ar'
        ? 'صمام ذكي بتحكم عن بعد وإغلاق تلقائي'
        : 'Smart valve with remote control and auto-shutoff',
      features: validLang === 'ar'
        ? ['تحكم عن بعد', 'إنذارات ذكية', 'توفير الطاقة', 'اتصال IoT']
        : ['Remote Control', 'Smart Alerts', 'Energy Saving', 'IoT Connected'],
    },
    {
      name: validLang === 'ar' ? 'صمام الكرة القياسي' : 'Standard Ball Valve',
      desc: validLang === 'ar'
        ? 'صمام كرة عالي الجودة مصنوع من نحاس خالص'
        : 'High-quality brass ball valve with reliable performance',
      features: validLang === 'ar'
        ? ['نحاس خالص', 'مقاوم للتآكل', 'معتمد SASO', 'معايير ISO9001']
        : ['Pure Brass', 'Corrosion Resistant', 'SASO Certified', 'ISO9001 Standard'],
    },
    {
      name: validLang === 'ar' ? 'صمام البوابة' : 'Gate Valve',
      desc: validLang === 'ar'
        ? 'صمام بوابة متين لأنظمة المياه الكبرى'
        : 'Durable gate valve for large water systems',
      features: validLang === 'ar'
        ? ['سعة عالية', 'تصميم متين', 'سهل التركيب', 'دعم تقني مدى الحياة']
        : ['High Capacity', 'Durable Design', 'Easy Installation', 'Lifetime Support'],
    },
  ]

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>


      {/* Page Header */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              {validLang === 'ar' ? 'منتجاتنا' : 'Our Products'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {validLang === 'ar'
                ? 'مجموعة شاملة من محابس و صمامات مياه و غاز عالية الجودة'
                : 'A comprehensive range of high-quality water and gas valves'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow flex flex-col"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{product.desc}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {idx === 0 && (
                  <Link
                    href={`/${validLang}/ai-future`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-purple-800 transition-colors"
                  >
                    {validLang === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              {validLang === 'ar' ? 'جاهز للبدء؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              {validLang === 'ar'
                ? 'تواصل معنا اليوم لطلب عرض سعر أو مزيد من المعلومات'
                : 'Contact us today to request a quote or learn more'}
            </p>
            <Link
              href={`/${validLang}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-purple-50 transition-colors"
            >
              {validLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>


    </div>
  )
}
