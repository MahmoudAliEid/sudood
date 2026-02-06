'use client'

import React, { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import type { Language } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

interface ContactFormProps {
  lang: Language
}

export function ContactForm({ lang }: ContactFormProps) {
  const t = translations[lang]
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const isRTL = lang === 'ar'

  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    address: '',
    notes: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const email = "info@sudood.sa"
      const subject = lang === 'ar' 
        ? `رسالة تواصل جديدة من ${formData.company}`
        : `New Contact Message from ${formData.company}`
      
      const body = lang === 'ar'
        ? `الاسم: ${formData.contact}\n` +
          `الشركة: ${formData.company}\n` +
          `الايميل: ${formData.email}\n` +
          `الهاتف: ${formData.phone}\n` +
          `المنتج: ${formData.product || 'غير محدد'}\n` +
          `الكمية: ${formData.quantity || '1'}\n` +
          `العنوان: ${formData.address || 'غير محدد'}\n\n` +
          `الرسالة/الملاحظات: ${formData.notes}`
        : `Name: ${formData.contact}\n` +
          `Company: ${formData.company}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n` +
          `Product: ${formData.product || 'Not specified'}\n` +
          `Quantity: ${formData.quantity || '1'}\n` +
          `Address: ${formData.address || 'Not specified'}\n\n` +
          `Message/Notes: ${formData.notes}`;

      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Use window.location.href to trigger the default email client
      window.location.href = mailtoUrl

      setSubmitted(true)
      setFormData({
        company: '',
        contact: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        address: '',
        notes: '',
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err: any) {
      console.error('Email redirect error:', err)
      setError(lang === 'ar' ? 'فشل فتح تطبيق البريد الإلكتروني' : 'Failed to open email client')
    } finally {
      setIsLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`max-w-4xl mx-auto ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Success Message */}
      {submitted && (
        <motion.div
          className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-semibold">{t.contact.form.success}</p>
        </motion.div>
      )}

      {/* Error Message */}
      {error && (
        <motion.div
          className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-semibold">{error}</p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground mb-2">
            {t.contact.form.company}
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white hover:border-gray-300"
            placeholder={lang === 'ar' ? 'اسم الشركة' : 'Your Company'}
          />
        </motion.div>

        {/* Contact Person */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground mb-2">
            {t.contact.form.contact}
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white hover:border-gray-300"
            placeholder={lang === 'ar' ? 'الاسم' : 'Contact Person'}
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground mb-2">
            {t.contact.form.email}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white hover:border-gray-300"
            placeholder="your@email.com"
          />
        </motion.div>

        {/* Phone */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground mb-2">
            {t.contact.form.phone}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white hover:border-gray-300"
            placeholder="+966 XX XXX XXXX"
          />
        </motion.div>

        {/* Product */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground mb-2">
            {t.contact.form.product}
          </label>
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white hover:border-gray-300"
            placeholder={lang === 'ar' ? 'اسم المنتج' : 'Product Name'}
          />
        </motion.div>

        {/* Quantity */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground mb-2">
            {t.contact.form.quantity}
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white hover:border-gray-300"
            placeholder="0"
          />
        </motion.div>
      </div>

      {/* Address */}
      <motion.div variants={itemVariants} className="mt-6">
        <label className="block text-sm font-semibold text-foreground mb-2">
          {t.contact.form.address}
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white hover:border-gray-300"
          placeholder={lang === 'ar' ? 'عنوان المشروع' : 'Project Address'}
        />
      </motion.div>

      {/* Notes */}
      <motion.div variants={itemVariants} className="mt-6">
        <label className="block text-sm font-semibold text-foreground mb-2">
          {t.contact.form.notes}
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white hover:border-gray-300 resize-none"
          placeholder={lang === 'ar' ? 'أخبرنا المزيد عن مشروعك...' : 'Tell us more about your project...'}
        />
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isLoading}
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-8 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
      >
        {isLoading ? (lang === 'ar' ? 'جاري الإرسال...' : 'Sending...') : t.contact.form.submit}
        {!isLoading && <Send className="w-5 h-5" />}
      </motion.button>
    </motion.form>
  )
}
