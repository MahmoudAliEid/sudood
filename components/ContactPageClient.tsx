'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ContactForm } from '@/components/ContactForm'
import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function ContactPageClient({ lang: initialLang }: { lang: Language }) {
  const [currentLang, setCurrentLang] = useState<Language>(initialLang)
  const router = useRouter()

  const validLang: Language = (currentLang === 'en' || currentLang === 'ar') ? currentLang : 'en'
  const t = translations[validLang]
  const isRTL = validLang === 'ar'

  const handleLangChange = (newLang: Language) => {
    const validNewLang: Language = (newLang === 'en' || newLang === 'ar') ? newLang : 'en'
    setCurrentLang(validNewLang)
    router.push(`/${validNewLang}/contact`)
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
                {validLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              {validLang === 'ar' ? 'دعنا نساعدك' : "Let's Help You"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {validLang === 'ar'
                ? 'لا تتردد في الاتصال بنا للاستفسار أو طلب عرض سعر. فريقنا جاهز لمساعدتك'
                : "Get in touch with us for inquiries or to request a quote. Our team is ready to help"}
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-12 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-12 right-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {validLang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
              </h3>
              <a href="mailto:info@sudood.sa" className="text-gray-600 hover:text-primary transition-colors">
                info@sudood.sa
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {validLang === 'ar' ? 'الهاتف' : 'Phone'}
              </h3>
              <p className="text-gray-600">+966 (0) XXX-XXX-XXXX</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {validLang === 'ar' ? 'العنوان' : 'Address'}
              </h3>
              <p className="text-gray-600">
                {validLang === 'ar' ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
              </p>
            </motion.div>
          </div>

          {/* Business Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary via-primary/95 to-purple-700 text-white rounded-2xl p-8 mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">
                {validLang === 'ar' ? 'ساعات العمل' : 'Business Hours'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-purple-100">
              <p>{validLang === 'ar' ? 'السبت - الخميس: 8:00 - 18:00' : 'Sat - Thu: 8:00 AM - 6:00 PM'}</p>
              <p>{validLang === 'ar' ? 'الجمعة: مغلق' : 'Friday: Closed'}</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {validLang === 'ar' ? 'أرسل لنا رسالة' : 'Send us a Message'}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>
            <ContactForm lang={validLang} />
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.8671572023827!2d46.6753796!3d24.7745431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1b9b8b9b9b9b%3A0x9b9b9b9b9b9b9b9b!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
