"use client"

import React from "react"
import { motion } from "framer-motion"

interface ComponentItem {
    no: number
    part: { ar: string; en: string }
    material: { ar: string; en: string }
    qty: number
}

interface ComponentsTableProps {
    components: ComponentItem[]
    lang: string
}

export function ComponentsTable({ components, lang }: ComponentsTableProps) {
    const isRTL = lang === 'ar'

    return (
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <div className="p-6 border-b bg-gray-50 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">
                    {isRTL ? 'مكونات المنتج' : 'Product Components'}
                </h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className={`text-xs uppercase bg-gray-50 border-b ${isRTL ? 'text-right' : 'text-left'}`}>
                        <tr>
                            <th className="px-6 py-3 font-bold">{isRTL ? 'الرقم' : 'No.'}</th>
                            <th className="px-6 py-3 font-bold">{isRTL ? 'القطعة' : 'Part'}</th>
                            <th className="px-6 py-3 font-bold">{isRTL ? 'المواد' : 'Material'}</th>
                            <th className="px-6 py-3 font-bold">{isRTL ? 'الكمية' : 'Qty'}</th>
                        </tr>
                    </thead>
                    <tbody className={isRTL ? 'text-right' : 'text-left'}>
                        {components.map((item, index) => (
                            <motion.tr
                                key={index}
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border-b hover:bg-gray-50 transition-colors"
                            >
                                <td className="px-6 py-4 font-medium text-gray-900">{item.no}</td>
                                <td className="px-6 py-4 text-gray-700">{isRTL ? item.part.ar : item.part.en}</td>
                                <td className="px-6 py-4 text-gray-600">{isRTL ? item.material.ar : item.material.en}</td>
                                <td className="px-6 py-4 text-gray-600">{item.qty}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
