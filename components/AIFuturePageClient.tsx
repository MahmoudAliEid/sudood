'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, AlertCircle, Power, Gauge, Wifi, Shield, Battery, Smartphone } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

export function AIFuturePageClient({ lang: initialLang }: { lang: Language }) {
  const [currentLang, setCurrentLang] = useState<Language>(initialLang)
  const router = useRouter()

  const validLang: Language = (currentLang === 'en' || currentLang === 'ar') ? currentLang : 'en'
  const t = translations[validLang]
  const isRTL = validLang === 'ar'

  const handleLangChange = (newLang: Language) => {
    const validNewLang: Language = (newLang === 'en' || newLang === 'ar') ? newLang : 'en'
    setCurrentLang(validNewLang)
    router.push(`/${validNewLang}/ai-future`)
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                {validLang === 'ar' ? 'تكنولوجيا المستقبل' : 'Future Technology'}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              {validLang === 'ar' ? 'الصمام الذكي' : 'Smart Thread Ball Valve'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {validLang === 'ar'
                ? 'ثورة في إدارة المياه الذكية مع تحكم عن بعد وإنذارات ذكية لحماية منزلك ومشروعك'
                : 'Revolution in smart water management with remote control and intelligent alerts to protect your home and project'}
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-12 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-12 right-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Key Features */}
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
              {validLang === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {validLang === 'ar' ? 'تقنيات متقدمة لحماية وإدارة أفضل' : 'Advanced technologies for better protection and management'}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Smartphone,
                title: validLang === 'ar' ? 'تحكم عن بعد' : 'Remote Control',
                desc: validLang === 'ar' ? 'تحكم كامل عبر التطبيق الذكي' : 'Full control via smart app',
              },
              {
                icon: AlertCircle,
                title: validLang === 'ar' ? 'إنذارات ذكية' : 'Smart Alerts',
                desc: validLang === 'ar' ? 'تنبيهات فورية عند أي تسرب' : 'Instant alerts for leaks',
              },
              {
                icon: Gauge,
                title: validLang === 'ar' ? 'مراقبة الضغط' : 'Pressure Monitoring',
                desc: validLang === 'ar' ? 'مراقبة ضغط المياه في الوقت الفعلي' : 'Real-time pressure monitoring',
              },
              {
                icon: Battery,
                title: validLang === 'ar' ? 'توفير الطاقة' : 'Energy Efficient',
                desc: validLang === 'ar' ? 'استهلاك طاقة منخفض جداً' : 'Ultra-low power consumption',
              },
              {
                icon: Wifi,
                title: validLang === 'ar' ? 'اتصال لاسلكي' : 'Wireless Connectivity',
                desc: validLang === 'ar' ? 'اتصال Wi-Fi موثوق' : 'Reliable Wi-Fi connection',
              },
              {
                icon: Shield,
                title: validLang === 'ar' ? 'حماية متقدمة' : 'Advanced Protection',
                desc: validLang === 'ar' ? 'حماية ضد التسريبات والأضرار' : 'Protection against leaks and damage',
              },
              {
                icon: Power,
                title: validLang === 'ar' ? 'إغلاق تلقائي' : 'Auto Shutoff',
                desc: validLang === 'ar' ? 'إغلاق تلقائي عند اكتشاف مشكلة' : 'Automatic shutoff when issue detected',
              },
              {
                icon: Zap,
                title: validLang === 'ar' ? 'سريع الاستجابة' : 'Fast Response',
                desc: validLang === 'ar' ? 'استجابة فورية للأوامر' : 'Instant command response',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Specs */}
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
              {validLang === 'ar' ? 'المواصفات التقنية' : 'Technical Specifications'}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: validLang === 'ar' ? 'الضغط الأقصى' : 'Max Pressure', value: '16 Bar' },
              { label: validLang === 'ar' ? 'درجة الحرارة' : 'Temperature', value: '-10 to 60°C' },
              { label: validLang === 'ar' ? 'المادة' : 'Material', value: 'Brass' },
              { label: validLang === 'ar' ? 'الشهادات' : 'Certifications', value: 'SASO, UL, CSA' },
            ].map((spec, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <p className="text-gray-600 text-sm mb-3 font-semibold uppercase tracking-wider">{spec.label}</p>
                <p className="text-4xl font-bold text-primary">{spec.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Request Quote */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {validLang === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600">
              {validLang === 'ar'
                ? 'تواصل معنا عبر النموذج أدناه للحصول على عرض سعر مخصص'
                : 'Contact us using the form below to get a customized quote'}
            </p>
          </motion.div>
          <ContactForm lang={validLang} />
        </div>
      </section>

    </div>
  )
}
