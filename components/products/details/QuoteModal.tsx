"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Loader } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuoteModalProps {
    isOpen: boolean
    onClose: () => void
    productName: { ar: string; en: string } | string
    productData?: {
        id: string
        category: { ar: string; en: string }
        series: string
        certifications: string[]
    }
    lang: string
}

export function QuoteModal({ isOpen, onClose, productName, productData, lang }: QuoteModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        productName: typeof productName === 'string' ? productName : (lang === 'ar' ? productName.ar : productName.en),
        productId: productData?.id || "",
        category: productData?.category ? (lang === 'ar' ? productData.category.ar : productData.category.en) : "",
        series: productData?.series || "",
        quantity: "1",
        notes: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const email = "info@sudood.sa"
            const subject = lang === 'ar' 
                ? `طلب عرض سعر جديد: ${formData.productName}`
                : `New Quote Request: ${formData.productName}`
            
            const body = lang === 'ar' 
                ? `المنتج: ${formData.productName}\n` +
                  `الفئة: ${formData.category}\n` +
                  `السلسلة: ${formData.series || 'N/A'}\n` +
                  `الكمية: ${formData.quantity}\n\n` +
                  `بيانات العميل:\n` +
                  `الاسم: ${formData.name}\n` +
                  `الشركة: ${formData.company || 'N/A'}\n` +
                  `الايميل: ${formData.email}\n` +
                  `الهاتف: ${formData.phone}\n\n` +
                  `ملاحظات: ${formData.notes || 'لا يوجد'}`
                : `Product: ${formData.productName}\n` +
                  `Category: ${formData.category}\n` +
                  `Series: ${formData.series || 'N/A'}\n` +
                  `Quantity: ${formData.quantity}\n\n` +
                  `Customer Info:\n` +
                  `Name: ${formData.name}\n` +
                  `Company: ${formData.company || 'N/A'}\n` +
                  `Email: ${formData.email}\n` +
                  `Phone: ${formData.phone}\n\n` +
                  `Notes: ${formData.notes || 'None'}`;

            const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

            // Open default email client
            window.location.href = mailtoUrl

            setIsSubmitting(false)
            setIsSuccess(true)

            setTimeout(() => {
                setIsSuccess(false)
                onClose()
                setFormData({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    productName: typeof productName === 'string' ? productName : (lang === 'ar' ? productName.ar : productName.en),
                    productId: productData?.id || "",
                    category: productData?.category ? (lang === 'ar' ? productData.category.ar : productData.category.en) : "",
                    series: productData?.series || "",
                    quantity: "1",
                    notes: ""
                })
            }, 5000)
        } catch (error) {
            console.error("Error sending quote request:", error)
            setIsSubmitting(false)
            alert(lang === 'ar' ? 'حدث خطأ أثناء فتح تطبيق البريد الإلكتروني. يرجى المحاولة مرة أخرى.' : 'Error opening email client. Please try again.')
        }
    }

    return (
        <AnimatePresence >
            {isOpen && (
                <>
                    <motion.div
                    
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed overflow-y-auto inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg  pointer-events-auto h-[90vh] overflow-y-auto ">
                            {/* Header */}
                            <div className="bg-primary px-6 py-4 flex items-center justify-between text-primary-foreground">
                                <h3 className="font-bold text-lg">
                                    {lang === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                                </h3>
                                <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 ">
                                {isSuccess ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Send size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">Request Sent!</h4>
                                        <p className="text-muted-foreground">We will contact you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Product Info Display */}
                                        {productData && (
                                            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-sm space-y-1">
                                                <p className="font-semibold text-blue-900">{formData.productName}</p>
                                                <p className="text-blue-700">
                                                    <span className="font-medium">{lang === 'ar' ? 'الفئة:' : 'Category:'}</span> {formData.category}
                                                </p>
                                                {formData.series && (
                                                    <p className="text-blue-700">
                                                        <span className="font-medium">{lang === 'ar' ? 'السلسلة:' : 'Series:'}</span> {formData.series}
                                                    </p>
                                                )}
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">{lang === 'ar' ? 'اسمك' : 'Name'}</label>
                                                <input
                                                    required
                                                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 outline-none"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder={lang === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">{lang === 'ar' ? 'الشركة' : 'Company'}</label>
                                                <input
                                                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 outline-none"
                                                    value={formData.company}
                                                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                                                    placeholder={lang === 'ar' ? 'اسم الشركة' : 'Company name'}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 outline-none"
                                                    value={formData.email}
                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder={lang === 'ar' ? 'بريدك الإلكتروني' : 'your@email.com'}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">{lang === 'ar' ? 'الهاتف' : 'Phone'}</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 outline-none"
                                                    value={formData.phone}
                                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                    placeholder={lang === 'ar' ? '+966...' : '+1...'}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">{lang === 'ar' ? 'الكمية' : 'Quantity'}</label>
                                            <input
                                                type="number"
                                                min="1"
                                                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 outline-none"
                                                value={formData.quantity}
                                                onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">{lang === 'ar' ? 'ملاحظات إضافية' : 'Message / Notes'}</label>
                                            <textarea
                                                rows={3}
                                                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                                                value={formData.notes}
                                                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                                placeholder={lang === 'ar' ? 'أضف أي متطلبات إضافية...' : 'Any additional requirements...'}
                                            />
                                        </div>

                                        <div className="pt-2">
                                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader className="w-4 h-4 mr-2 animate-spin" />
                                                        {lang === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4 mr-2" />
                                                        {lang === 'ar' ? 'إرسال الطلب' : 'Submit Request'}
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
