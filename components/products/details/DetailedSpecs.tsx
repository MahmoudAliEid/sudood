"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface PerformanceSpecItem {
    label: { ar: string; en: string }
    value: { ar: string; en: string } | string
}

interface DetailedSpecsProps {
    technical: string[]
    performance: PerformanceSpecItem[]
    lang: string
}

export function DetailedSpecs({ technical, performance, lang }: DetailedSpecsProps) {
    const isRTL = lang === 'ar'

    return (
        <div className="space-y-12">
            {/* Technical Specifications List */}
            <div className="bg-white rounded-[2rem] border p-8 lg:p-12 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04 المعالجة العلمية" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                        {isRTL ? 'المواصفات الفنية' : 'Technical Specifications'}
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {technical.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                        >
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                            <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Performance Specifications Table */}
            <div className="bg-white rounded-[2rem] border shadow-sm overflow-hidden">
                <div className="p-8 lg:p-12 border-b bg-gray-50">
                    <h2 className="text-3xl font-bold text-foreground">
                        {isRTL ? 'مواصفات الأداء' : 'Performance Specifications'}
                    </h2>
                </div>
                <div className="divide-y">
                    {performance.map((spec, index) => (
                        <div key={index} className="flex flex-col sm:flex-row hover:bg-gray-50 transition-colors">
                            <div className={`sm:w-1/2 p-6 font-bold text-gray-900 bg-gray-50/50 ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
                                {isRTL ? spec.label.ar : spec.label.en}
                            </div>
                            <div className={`sm:w-1/2 p-6 text-gray-600 ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
                                {typeof spec.value === 'string'
                                    ? spec.value
                                    : (isRTL ? spec.value.ar : spec.value.en)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
