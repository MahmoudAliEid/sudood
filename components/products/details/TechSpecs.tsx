"use client"

import React from "react"
import { motion } from "framer-motion"

interface TechSpecItem {
    label: string
    value: string
}

interface TechSpecsProps {
    specs: TechSpecItem[]
    lang: string
}

export function TechSpecs({ specs, lang }: TechSpecsProps) {
    return (
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <div className="p-6 border-b bg-gray-50">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    {/* Simple icon SVG */}
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    {lang === 'ar' ? 'المواصفات الفنية' : 'Technical Specifications'}
                </h2>
            </div>
            <div>
                {specs.map((spec, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex flex-col sm:flex-row border-b last:border-0 hover:bg-blue-50/30 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}
                    >
                        <div className={`sm:w-1/3 p-4 font-semibold text-gray-700 ${lang === 'ar' ? 'border-l' : 'border-r'} border-gray-100`}>
                            {spec.label}
                        </div>
                        <div className="sm:w-2/3 p-4 text-gray-600">
                            {spec.value}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
