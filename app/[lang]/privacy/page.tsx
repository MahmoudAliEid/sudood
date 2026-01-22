'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'


import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

export default function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: paramLang } = React.use(params)
  const lang = (paramLang as Language) || 'en'
  const [currentLang, setCurrentLang] = useState<Language>(lang)
  const router = useRouter()
  const isRTL = currentLang === 'ar'

  const handleLangChange = (newLang: Language) => {
    setCurrentLang(newLang)
    router.push(`/${newLang}/privacy`)
  }

  return (
    <div
      className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Navigation lang={currentLang} onLangChange={handleLangChange} />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl font-bold text-foreground">
              {currentLang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </h1>

            <div className="prose prose-lg max-w-none text-foreground space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  {currentLang === 'ar'
                    ? 'مقدمة'
                    : 'Introduction'}
                </h2>
                <p className="text-muted-foreground">
                  {currentLang === 'ar'
                    ? 'تقدّر SUDOOD خصوصيتك وتلتزم بحماية بيانات المستخدمين وفقاً للقوانين المعمول بها.'
                    : 'SUDOOD respects your privacy and is committed to protecting your personal data in accordance with applicable laws.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  {currentLang === 'ar' ? 'البيانات المجمعة' : 'Data We Collect'}
                </h2>
                <p className="text-muted-foreground">
                  {currentLang === 'ar'
                    ? 'نجمع المعلومات الشخصية التي تقدمها طواعية عبر نموذج الاتصال، مثل الاسم والبريد الإلكتروني ورقم الهاتف وتفاصيل المشروع.'
                    : 'We collect personal information you voluntarily provide through our contact form, such as name, email, phone number, and project details.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  {currentLang === 'ar' ? 'الاستخدام' : 'How We Use Your Data'}
                </h2>
                <p className="text-muted-foreground">
                  {currentLang === 'ar'
                    ? 'نستخدم بيانات الاتصال الخاصة بك للرد على استفساراتك وتقديم خدماتنا وتحسين تجربتك.'
                    : 'We use your contact information to respond to inquiries, provide our services, and improve your experience.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  {currentLang === 'ar' ? 'الأمان' : 'Security'}
                </h2>
                <p className="text-muted-foreground">
                  {currentLang === 'ar'
                    ? 'ننفذ تدابير أمان قياسية لحماية بيانات المستخدمين من الوصول غير المصرح به.'
                    : 'We implement standard security measures to protect your data from unauthorized access.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  {currentLang === 'ar' ? 'الاتصال' : 'Contact Us'}
                </h2>
                <p className="text-muted-foreground">
                  {currentLang === 'ar'
                    ? 'للأسئلة حول الخصوصية، يرجى التواصل معنا عبر info@sudood.sa'
                    : 'For privacy questions, please contact us at info@sudood.sa'}
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer lang={currentLang} />
    </div>
  )
}
