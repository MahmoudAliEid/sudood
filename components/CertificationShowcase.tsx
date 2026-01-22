'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

interface CertificationShowcaseProps {
  lang: Language
}

export function CertificationShowcase({ lang }: CertificationShowcaseProps) {
  const t = translations[lang]
  const isRTL = lang === 'ar'

  const certifications = [
    {
      name: 'SASO',
      image: '/333.png',
      alt: 'SASO Quality Mark - Saudi Standards',
    },
    {
      name: 'UL Listed',
      image: '/C-US-UL-listed.webp',
      alt: 'UL Listed Certification',
    },
    {
      name: 'CSA',
      image: '/CSA-C-US-Mark.png',
      alt: 'CSA C-US Certification',
    },
    {
      name: 'FM Approved',
      image: '/FM Kapak.jpg',
      alt: 'FM Approved Certification',
    },
    {
      name: 'ISO 9001:2015',
      image: '/QAssurance-logos-4.png',
      alt: 'ISO 9001:2015 Quality Management',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section
      className={`py-20 bg-gradient-to-b from-white to-purple-50 ${isRTL ? 'rtl' : 'ltr'
        }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t.certifications.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.certifications.description}
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl  shadow-md hover:shadow-xl transition-all hover:scale-105 flex flex-col items-center justify-center min-h-40"
              variants={itemVariants}
            >
              <div className="relative w-full h-full mb-4 ">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                />
              </div>
            
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
           {
            isRTL ? "جميع منتجات سودود تخضع لاختبارات صارمة ومراقبة جودة لضمان الامتثال للمعايير الدولية ورضا العملاء." : "All SUDOOD products undergo rigorous testing and quality control to ensure compliance with international standards and customer satisfaction."
           }
          </p>
        </motion.div>
      </div>
    </section>
  )
}
