"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface EngineeringDrawingProps {
    src: string
    lang: string
}

export function EngineeringDrawing({ src, lang }: EngineeringDrawingProps) {
    const isRTL = lang === 'ar'

    return (
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden h-full flex flex-col">
            <div className="p-6 border-b bg-gray-50">
                <h2 className="text-2xl font-bold text-foreground">
                    {isRTL ? 'الرسم الهندسي المقطعي' : 'Sectional Engineering Drawing'}
                </h2>
            </div>
            <div className="flex-1 p-8 flex items-center justify-center bg-white min-h-[300px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full min-h-[300px]"
                >
                    <Image
                        src={src}
                        alt="Sectional Drawing"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </div>
        </div>
    )
}
