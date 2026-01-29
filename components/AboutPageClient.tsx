'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Award, Lightbulb, Shield, Trophy, Handshake } from 'lucide-react'
import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

export function AboutPageClient({ lang: initialLang }: { lang: Language }) {
  const [currentLang, setCurrentLang] = useState<Language>(initialLang)
  const router = useRouter()

  const validLang: Language = (currentLang === 'en' || currentLang === 'ar') ? currentLang : 'en'
  const t = translations[validLang]
  const isRTL = validLang === 'ar'

  const handleLangChange = (newLang: Language) => {
    const validNewLang: Language = (newLang === 'en' || newLang === 'ar') ? newLang : 'en'
    setCurrentLang(validNewLang)
    router.push(`/${validNewLang}/about`)
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

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">
                {validLang === 'ar' ? 'من نحن' : 'About Us'}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              {validLang === 'ar' ? 'سدود - التميز في تصنيع الصمامات' : 'SUDOOD - Excellence in Valve Manufacturing'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {validLang === 'ar'
                ? 'شركة سعودية رائدة في تصنيع و توريد محابس و صمامات المياه والغاز بأعلى معايير الجودة العالمية'
                : 'A leading Saudi company in manufacturing and supplying water and gas valves with the highest international quality standards'}
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-12 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-12 right-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* About Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {validLang === 'ar' ? 'شركة سعودية متخصصة' : 'A Specialized Saudi Company'}
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8" />
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {validLang === 'ar'
                  ? 'سدود شركة سعودية متخصصة في توريد و تصنيع محابس و صمامات مياه و غاز من مواد عالية النقاء (نحاس برونز) بمعايير جودة عالمية.'
                  : 'SUDOOD is a Saudi company specializing in supplying and manufacturing high-quality water and gas valves from high-purity brass materials with international quality standards.'}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {validLang === 'ar'
                  ? 'جميع العمليات تحت إشراف فريق هندسي سعودي متخصص مع شهادات جودة عالمية (SASO, UL, CSA, FM, ISO9001).'
                  : 'All processes are overseen by a specialized Saudi engineering team with international quality certifications (SASO, UL, CSA, FM, ISO9001).'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              {[
                {
                  icon: Award,
                  title: validLang === 'ar' ? 'الجودة' : 'Quality',
                  desc: validLang === 'ar' ? 'منتجات معتمدة دولياً' : 'Internationally certified products',
                },
                {
                  icon: Lightbulb,
                  title: validLang === 'ar' ? 'الابتكار' : 'Innovation',
                  desc: validLang === 'ar' ? 'تقنيات حديثة في التصنيع' : 'Modern manufacturing techniques',
                },
                {
                  icon: Shield,
                  title: validLang === 'ar' ? 'الموثوقية' : 'Reliability',
                  desc: validLang === 'ar' ? 'أداء موثوق تحت أقسى الظروف' : 'Reliable performance under harsh conditions',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group flex gap-4 p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  whileHover={{ x: isRTL ? -8 : 8 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              {validLang === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {validLang === 'ar' ? 'المبادئ التي توجه عملنا وتحدد هويتنا' : 'The principles that guide our work and define our identity'}
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
                icon: Trophy,
                title: validLang === 'ar' ? 'التميز' : 'Excellence',
                desc: validLang === 'ar' ? 'نسعى للتميز في كل جوانب عملنا و نلتزم بأعلى معايير الجودة' : 'We strive for excellence in every aspect and commit to the highest quality standards',
              },
              {
                icon: Handshake,
                title: validLang === 'ar' ? 'الأمانة' : 'Integrity',
                desc: validLang === 'ar' ? 'نتعامل بأمانة و شفافية مع عملائنا وشركائنا' : 'We deal honestly and transparently with our customers and partners',
              },
              {
                icon: Lightbulb,
                title: validLang === 'ar' ? 'الابتكار' : 'Innovation',
                desc: validLang === 'ar' ? 'نواصل الابتكار و التطور المستمر لتلبية احتياجات السوق' : 'We continue to innovate and evolve to meet market needs',
              },
            ].map((value, idx) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300"
                  whileHover={{ y: -8 }}
                >
                  <div className="inline-flex p-6 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {validLang === 'ar' ? 'إنجازاتنا بالأرقام' : 'Our Achievements in Numbers'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: validLang === 'ar' ? 'سنوات خبرة' : 'Years Experience' },
              { number: '5', label: validLang === 'ar' ? 'شهادات دولية' : 'International Certifications' },
              { number: '1000+', label: validLang === 'ar' ? 'عميل راضٍ' : 'Satisfied Clients' },
              { number: '100%', label: validLang === 'ar' ? 'جودة مضمونة' : 'Quality Guaranteed' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
      </section>

    </div>
  )
}
