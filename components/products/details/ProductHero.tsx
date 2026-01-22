"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Product } from "@/components/products/ProductCard"
import { ProductGallery } from "./ProductGallery"

interface ProductHeroProps {
    product: Product
    lang: string
    onQuoteClick?: () => void
}

export function ProductHero({ product, lang, onQuoteClick }: ProductHeroProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
            {/* Image Gallery Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:sticky lg:top-20"
            >
                <ProductGallery images={product.image} productName={lang === 'ar' ? product.name.ar : product.name.en} />
            </motion.div>

            {/* Info Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <div className="mb-4">
                    <span className="text-secondary-foreground font-semibold tracking-wider text-sm uppercase">
                        {lang === 'ar' ? product.category.ar : product.category.en}
                    </span>
                </div>

                <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                    {lang === 'ar' ? product.name.ar : product.name.en}
                </h1>

                <div className="flex flex-wrap gap-2 mb-6">
                    {product.certifications.map((cert) => (
                        <Badge key={cert} variant="outline" className="border-primary/20 text-primary py-1 px-3">
                            {cert}
                        </Badge>
                    ))}
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {lang === 'ar' ? product.description.ar : product.description.en}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                        onClick={onQuoteClick}
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 text-center"
                    >
                        {lang === 'ar' ? 'اطلب عرض سعر' : 'Request Quote'}
                    </button>
                    <a href="#specs" className="px-8 py-4 rounded-lg font-bold text-foreground border hover:text-white border-input hover:bg-accent transition-all active:scale-95 text-center">
                        {lang === 'ar' ? 'المواصفات الفنية' : 'View Specifications'}
                    </a>
                </div>

                <div className="mt-8 pt-8 border-t border-border/40">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-4">
                        {lang === 'ar' ? 'معتمد من قبل:' : 'Certified by:'}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                        <div className="relative h-12 w-12 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                            <Image src="/333.png" alt="Certification" fill className="object-contain" />
                        </div>
                        <div className="relative h-12 w-20 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                            <Image src="/C-US-UL-listed.webp" alt="UL Listed" fill className="object-contain" />
                        </div>
                        <div className="relative h-12 w-16 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                            <Image src="/CSA-C-US-Mark.jpg" alt="CSA Mark" fill className="object-contain" />
                        </div>
                        <div className="relative h-12 w-16 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                            <Image src="/FM Kapak.jpg" alt="FM Approved" fill className="object-contain" />
                        </div>
                        <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                            <Image src="/QAssurance-logos-4.png" alt="QAssurance" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
