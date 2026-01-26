"use client"

import React from "react"
import { motion } from "framer-motion"

interface ModelItem {
    code: string
    size: string
    diameter: number | string
}

interface DimensionsTableProps {
    models: ModelItem[]
    lang: string
}

export function DimensionsTable({ models, lang }: DimensionsTableProps) {
    const isRTL = lang === 'ar'

    return (
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <div className="p-6 border-b bg-gray-50">
                <h2 className="text-2xl font-bold text-foreground">
                    {isRTL ? 'الموديل و الأبعاد الهيكلية' : 'Model & Structural Dimensions'}
                </h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className={`text-xs uppercase bg-gray-50 border-b ${isRTL ? 'text-right' : 'text-left'}`}>
                        <tr>
                            <th className="px-6 py-3 font-bold">{isRTL ? 'الموديل' : 'Model'}</th>
                            <th className="px-6 py-3 font-bold">{isRTL ? 'المقاس' : 'Size'}</th>
                            <th className="px-6 py-3 font-bold">
                                {isRTL ? 'قطر الفتحة (مم)' : 'Bore Diameter (mm)'}
                            </th>
                        </tr>
                    </thead>
                    <tbody className={isRTL ? 'text-right' : 'text-left'}>
                        {models.map((model, index) => (
                            <motion.tr
                                key={index}
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border-b hover:bg-gray-50 transition-colors"
                            >
                                <td className="px-6 py-4 font-bold text-primary">{model.code}</td>
                                <td className="px-6 py-4 text-gray-700">{model.size}</td>
                                <td className="px-6 py-4 text-gray-600">{model.diameter}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
