'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Zap, AlertCircle, Power, Gauge, Wifi, Shield,
  Battery, Smartphone, Cpu, Activity, Bell,
  Calendar, Users, ChevronRight, Settings,
  Home, Building2, Factory, CheckCircle2
} from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import type { Language } from '@/lib/i18n'

export function AIFuturePageClient({ lang: initialLang }: { lang: Language }) {
  const [currentLang] = useState<Language>(initialLang)
  const isRTL = currentLang === 'ar'

  const content = {
    en: {
      badge: "AI Future Edition",
      title: "SMART THREAD BALL VALVE",
      subtitle: "AI-Enabled Remote Control & Leak Protection System",
      description: "This smart threaded ball valve combines mechanical reliability with intelligent digital control, enabling real-time monitoring and remote operation through a mobile application.",
      aiTitle: "AI Integrated Intelligence",
      aiLogic: "Powered by AI-assisted logic, the system can detect abnormal water flow patterns, potential leaks, or unexpected usage behavior, and automatically shut off the valve to prevent damage.",
      stats: {
        reaction: { label: "Reaction Time", value: "0.5s" },
        accuracy: { label: "Leak Accuracy", value: "99%" },
        security: { title: "Full-Stack Security", desc: "Encrypted IoT communication with end-to-end device authorization." }
      },
      featuresTitle: "Smart Features",
      features: [
        { icon: Smartphone, title: "Remote Control", desc: "Open/close from anywhere via mobile application" },
        { icon: Cpu, title: "AI Detection", desc: "Leak detection using flow behavior analysis" },
        { icon: AlertCircle, title: "Auto Shut-off", desc: "Automatic closure during abnormal consumption" },
        { icon: Bell, title: "Real-time Alerts", desc: "Instant notifications and critical alerts" },
        { icon: Calendar, title: "Scheduled Ops", desc: "Timer and automation modes for efficiency" },
        { icon: Users, title: "Multi-user Access", desc: "Device sharing with authorized users" },
      ],
      techTitle: "Technical Highlights",
      techDesc: "Every detail is meticulously crafted to ensure the highest standards of quality and durability.",
      techSpecs: [
        { icon: Shield, title: "Heavy Duty", value: "Brass full-port ball valve" },
        { icon: Settings, title: "IP Rated", value: "Smart actuator for indoor/outdoor" },
        { icon: Battery, title: "Efficiency", value: "Low power, long-term operation" },
        { icon: Zap, title: "Safety", value: "Manual override available" },
      ],
      certs: ['SASO Certified', 'UL Standards', 'IoT Enabled'],
      appTitle: "Applications",
      apps: [
        { icon: Home, title: "Residential", desc: "Smart homes and private buildings" },
        { icon: Building2, title: "Commercial", desc: "Offices and specialized facilities" },
        { icon: Factory, title: "Protection", desc: "Main supply lines and kitchen/bath units" },
      ],
      ctaTitle: "Request a Quote",
      ctaSub: "Contact us for customized smart solutions",
      buttons: {
        learnMore: "Learn More",
        contactUs: "Contact Us"
      },
      systemStatus: {
        label: "System Status",
        active: "Active & Protected"
      },
      footer: "Built for the Future"
    },
    ar: {
      badge: "إصدار مستقبل الذكاء الاصطناعي",
      title: "صمام كروي ذكي (بسن ملولب)",
      subtitle: "نظام التحكم عن بعد و الحماية من التسرب المدعوم بالذكاء الاصطناعي",
      description: "يجمع هذا الصمام الكروي الذكي بين الموثوقية الميكانيكية و التحكم الرقمي الذكي، مما يتيح المراقبة في الوقت الفعلي و التشغيل عن بعد من خلال تطبيق الهاتف المحمول.",
      aiTitle: "ذكاء متكامل بالذكاء الاصطناعي",
      aiLogic: "مدعوماً بمنطق الذكاء الاصطناعي، يمكن للنظام اكتشاف أنماط تدفق المياه غير الطبيعية، أو التسربات المحتملة، أو سلوك الاستخدام غير المتوقع، و يقوم تلقائياً بإغلاق الصمام لمنع التلف لايقاف هدر الماء و التسريب و التلفيات.",
      stats: {
        reaction: { label: "وقت الاستجابة", value: "0.5ث" },
        accuracy: { label: "دقة الكشف", value: "99%" },
        security: { title: "أمان كامل", desc: "اتصال IoT مشفر مع ترخيص الجهاز من طرف إلى طرف." }
      },
      featuresTitle: "الميزات الذكية",
      features: [
        { icon: Smartphone, title: "تحكم عن بعد", desc: "فتح / إغلاق من أي مكان عبر تطبيق الهاتف" },
        { icon: Cpu, title: "كشف ذكي (AI)", desc: "اكتشاف التسرب باستخدام تحليل سلوك التدفق" },
        { icon: AlertCircle, title: "إغلاق تلقائي", desc: "إغلاق آلي في حالة الاستهلاك غير الطبيعي" },
        { icon: Bell, title: "تنبيهات فورية", desc: "إشعارات مباشرة وتنبيهات برمجية دقيقة" },
        { icon: Calendar, title: "تشغيل مجدول", desc: "أوضاع المؤقت والأتمتة لرفع الكفاءة" },
        { icon: Users, title: "وصول متعدد", desc: "مشاركة الجهاز مع مستخدمين مصرح لهم" },
      ],
      techTitle: "أبرز المواصفات التقنية",
      techDesc: "تم تصميم كل التفاصيل بعناية لضمان أعلى معايير الجودة والاستدامة في أقسى الظروف.",
      techSpecs: [
        { icon: Shield, title: "تحمل عالي", value: "صمام نحاسي بفتحة كاملة (Full Port)" },
        { icon: Settings, title: "معيار IP", value: "محرك ذكي للتركيب الداخلي والخارجي" },
        { icon: Battery, title: "كفاءة الطاقة", value: "استهلاك منخفض وتشغيل مستقر" },
        { icon: Zap, title: "الأمان", value: "توفر التحكم اليدوي المباشر" },
      ],
      certs: ['معتمد من SASO', 'معايير UL', 'يدعم IoT'],
      appTitle: "مجالات الاستخدام",
      apps: [
        { icon: Home, title: "سكني", desc: "المنازل الذكية و المباني السكنية الحديثة" },
        { icon: Building2, title: "تجاري", desc: "المكاتب و المرافق و المنشآت التجارية" },
        { icon: Factory, title: "حماية عامة", desc: "خطوط الإمداد الرئيسية و المطابخ و الحمامات" },
      ],
      ctaTitle: "اطلب عرض سعر",
      ctaSub: "تواصل معنا للحصول على حلول ذكية مخصصة",
      buttons: {
        learnMore: "اكتشف المزيد",
        contactUs: "تواصل معنا"
      },
      systemStatus: {
        label: "حالة النظام",
        active: "نشط ومحمي"
      },
      footer: "بُني للمستقبل"
    }
  }

  const t = content[currentLang]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <div className={`min-h-screen bg-[#fafafa] selection:bg-primary/20 ${isRTL ? 'font-cairo rtl' : 'font-sans ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden lg:pt-48 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-6 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{t.badge}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.15]">
                {t.title}
              </h1>
              <p className="text-xl text-primary font-semibold mb-8 lg:max-w-xl">
                {t.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed lg:max-w-xl">
                {t.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-[0.98]">
                  {t.buttons.learnMore}
                </button>
                <Link href="#contact" className="px-8 py-4 bg-white border border-gray-200 text-foreground rounded-xl font-bold hover:bg-gray-50 transition-all active:scale-[0.98]">
                  {t.buttons.contactUs}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: isRTL ? -5 : 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-3xl -z-10 animate-pulse" />
              <div className="relative bg-white/40 backdrop-blur-sm border border-white/60 p-8 rounded-[3rem] shadow-2xl">
                <Image
                  src="/products/30.png"
                  alt="Smart Valve"
                  width={800}
                  height={800}
                  className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Tech Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 bg-white shadow-xl rounded-2xl p-4 border border-gray-100 flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase">{t.systemStatus.label}</div>
                  <div className="text-sm font-bold text-foreground">{t.systemStatus.active}</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* AI AI Logic Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 bg-gray-900 rounded-[3rem] py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{t.stats.reaction.value}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest">{t.stats.reaction.label}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{t.stats.accuracy.value}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest">{t.stats.accuracy.label}</div>
                </div>
                <div className="col-span-2 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div className="text-lg font-bold text-white">{t.stats.security.title}</div>
                  </div>
                  <div className="text-sm text-gray-400 leading-relaxed">{t.stats.security.desc}</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                {t.aiTitle}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.aiLogic}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t.featuresTitle}</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {t.features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
                {t.techTitle}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t.techDesc}
              </p>
              <div className="space-y-4">
                {t.certs.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-bold text-primary">
                    <CheckCircle2 className="w-5 h-5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {t.techSpecs.map((spec, idx) => (
                <motion.div
                  key={idx}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <spec.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground mb-1">{spec.title}</div>
                    <div className="text-sm text-gray-500">{spec.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.appTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.apps.map((app, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                className="relative group p-8 bg-gray-50 rounded-[2.5rem] overflow-hidden hover:bg-gray-100 transition-colors"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-primary mb-6">
                    <app.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{app.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{app.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t.ctaTitle}</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              {t.ctaSub}
            </p>
          </motion.div>

          <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl shadow-primary/10 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full -ml-16 -mb-16" />
            <div className="relative z-10">
              <ContactForm lang={currentLang} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <div className="py-12 text-center border-t border-gray-100">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-1 bg-primary/20" />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">{t.footer}</span>
          <div className="w-8 h-1 bg-primary/20" />
        </div>
      </div>

    </div>
  )
}
