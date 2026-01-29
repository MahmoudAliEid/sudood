'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Settings,
  Truck,
  Award,
  Headphones,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Wrench,
  Package,
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

export function ServicesPageClient({ lang: initialLang }: { lang: Language }) {
  const [currentLang, setCurrentLang] = useState<Language>(initialLang)
  const router = useRouter()

  const validLang: Language = (currentLang === 'en' || currentLang === 'ar') ? currentLang : 'en'
  const t = translations[validLang]
  const isRTL = validLang === 'ar'

  const handleLangChange = (newLang: Language) => {
    const validNewLang: Language = (newLang === 'en' || newLang === 'ar') ? newLang : 'en'
    setCurrentLang(validNewLang)
    router.push(`/${validNewLang}/services`)
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

  const services = [
    {
      icon: Settings,
      title: validLang === 'ar' ? 'التصنيع والتجميع المخصص' : 'Custom Manufacturing & Assembly',
      desc: validLang === 'ar'
        ? 'تصنيع و تجميع محابس و صمامات وفق مواصفات المشروع الدقيقة مع ضمان الجودة العالية'
        : 'Custom manufacturing and assembly of valves according to precise project specifications with high quality assurance',
      features: [
        validLang === 'ar' ? 'تصميم حسب الطلب' : 'Custom design',
        validLang === 'ar' ? 'معايير دولية' : 'International standards',
        validLang === 'ar' ? 'فحص شامل' : 'Comprehensive testing'
      ]
    },
    {
      icon: Truck,
      title: validLang === 'ar' ? 'التوريد للمقاولين والمتاجر' : 'Supply to Contractors & Retailers',
      desc: validLang === 'ar'
        ? 'توريد منتجاتنا لمقاولين و متاجر السباكة و المشاريع العامة و الصناعية'
        : 'Supply to contractors, plumbing retailers, and public and industrial projects',
      features: [
        validLang === 'ar' ? 'توصيل سريع' : 'Fast delivery',
        validLang === 'ar' ? 'أسعار تنافسية' : 'Competitive pricing',
        validLang === 'ar' ? 'كميات كبيرة' : 'Bulk quantities'
      ]
    },
    {
      icon: Award,
      title: validLang === 'ar' ? 'الاختبار والشهادات' : 'Quality Testing & Certification',
      desc: validLang === 'ar'
        ? 'اختبارات و فحص جودة و مطابقة شهادات دولية (SASO, UL, CSA, FM, ISO9001)'
        : 'Quality testing, inspection, and international certification compliance (SASO, UL, CSA, FM, ISO9001)',
      features: [
        validLang === 'ar' ? 'اختبارات صارمة' : 'Rigorous testing',
        validLang === 'ar' ? 'شهادات معتمدة' : 'Certified standards',
        validLang === 'ar' ? 'تقارير مفصلة' : 'Detailed reports'
      ]
    },
    {
      icon: Headphones,
      title: validLang === 'ar' ? 'الدعم الفني والتكامل الذكي' : 'Technical Support & Smart Integration',
      desc: validLang === 'ar'
        ? 'دعم تقني متخصص و تركيب للمنتجات الذكية و التكاملات المتقدمة'
        : 'Specialized technical support and installation for smart products and advanced integrations',
      features: [
        validLang === 'ar' ? 'دعم 24/7' : '24/7 support',
        validLang === 'ar' ? 'فريق متخصص' : 'Expert team',
        validLang === 'ar' ? 'تدريب شامل' : 'Comprehensive training'
      ]
    },
  ]

  const processSteps = [
    {
      icon: Users,
      title: validLang === 'ar' ? 'الاستشارة' : 'Consultation',
      desc: validLang === 'ar' ? 'نفهم احتياجاتك ونقدم الحلول المناسبة' : 'We understand your needs and provide suitable solutions'
    },
    {
      icon: Wrench,
      title: validLang === 'ar' ? 'التصميم' : 'Design',
      desc: validLang === 'ar' ? 'نصمم الحل الأمثل لمشروعك' : 'We design the optimal solution for your project'
    },
    {
      icon: Package,
      title: validLang === 'ar' ? 'التنفيذ' : 'Implementation',
      desc: validLang === 'ar' ? 'ننفذ المشروع بأعلى معايير الجودة' : 'We execute the project with the highest quality standards'
    },
    {
      icon: Shield,
      title: validLang === 'ar' ? 'الدعم' : 'Support',
      desc: validLang === 'ar' ? 'نقدم الدعم المستمر بعد التسليم' : 'We provide ongoing support after delivery'
    }
  ]

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
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                {validLang === 'ar' ? 'خدمات متكاملة' : 'Comprehensive Services'}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              {validLang === 'ar' ? 'خدماتنا المتميزة' : 'Our Premium Services'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {validLang === 'ar'
                ? 'نقدم مجموعة شاملة من الخدمات المتخصصة لدعم مشاريعك بأعلى معايير الجودة و الاحترافية'
                : 'We provide a comprehensive range of specialized services to support your projects with the highest standards of quality and professionalism'}
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-12 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-12 right-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, idx) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 p-8 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -8 }}
                >
                  {/* Background gradient overlay */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-purple-100/0 rounded-full -mr-20 -mt-20 pointer-events-none" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="inline-flex p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
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
              {validLang === 'ar' ? 'عملية العمل' : 'Our Process'}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {validLang === 'ar' ? 'نتبع منهجية واضحة لضمان نجاح مشروعك' : 'We follow a clear methodology to ensure your project success'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                    {idx + 1}
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Connector line (hidden on last item) */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-y-1/2 -z-10" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
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
              {validLang === 'ar' ? 'لماذا تختار خدماتنا؟' : 'Why Choose Our Services?'}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                number: '100%',
                title: validLang === 'ar' ? 'معتمد دولياً' : 'Internationally Certified',
                desc: validLang === 'ar' ? 'جميع الخدمات معتمدة من SASO, UL, CSA, FM' : 'All services certified by SASO, UL, CSA, FM',
              },
              {
                icon: Clock,
                number: '24/7',
                title: validLang === 'ar' ? 'دعم مستمر' : 'Continuous Support',
                desc: validLang === 'ar' ? 'دعم تقني متاح على مدار الساعة' : 'Technical support available around the clock',
              },
              {
                icon: TrendingUp,
                number: '500+',
                title: validLang === 'ar' ? 'مشروع ناجح' : 'Successful Projects',
                desc: validLang === 'ar' ? 'نخدم أكثر من 500 عميل راضٍ' : 'Serving over 500 satisfied clients',
              },
            ].map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                  whileHover={{ y: -8 }}
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{stat.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{stat.desc}</p>
                </motion.div>
              )
            })}
          </div>
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
                ? 'هل أنت مستعد للبدء؟'
                : 'Ready to Get Started?'}
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              {validLang === 'ar'
                ? 'تواصل معنا اليوم لمناقشة متطلبات مشروعك و الحصول على استشارة مجانية'
                : 'Contact us today to discuss your project requirements and get a free consultation'}
            </p>
            <Link
              href={`/${validLang}/contact`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-primary rounded-xl font-bold hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              {validLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              <ArrowRight className={`w-5 h-5 ${validLang === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
      </section>

    </div>
  )
}
