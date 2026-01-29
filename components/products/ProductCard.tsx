"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star } from "lucide-react"

export interface Product {
    id: string;
    name: {
        ar: string;
        en: string;
    };
    description: {
        ar: string;
        en: string;
    };
    image: string[];
    category: {
        ar: string;
        en: string;
    };
    series: string;
    certifications: string[];
    specifications?: {
        pressure?: string;
        temperatureRange?: {
            ar: string;
            en: string;
        };
        material?: {
            ar: string;
            en: string;
        };
    };
    technicalSpecs?: {
        ar: string[];
        en: string[];
    };
    performanceSpecs?: {
        label: {
            ar: string;
            en: string;
        };
        value: string | {
            ar: string;
            en: string;
        };
    }[];
    components?: {
        no: number;
        part: {
            ar: string;
            en: string;
        };
        material: {
            ar: string;
            en: string;
        };
        qty: number;
    }[];
    sectionalDrawing?: string;
    models?: {
        code: string;
        size: string;
        diameter: number;
    }[];
}


interface ProductCardProps {
    product: Product
    lang: string
}

export function ProductCard({ product, lang }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full"
        >
            <Card className="group relative h-full border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col hover:border-primary/20">
                {/* Gradient Background Overlay */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-purple-100/0 rounded-full -mr-20 -mt-20 pointer-events-none" />

                {/* Image Container */}
                <div className="relative w-full aspect-square  bg-white border-b overflow-hidden flex items-center justify-center">
                    {/* Subtle grid pattern background */}
                    <div className="absolute inset-0 bg-grid-gray-100/50  opacity-30" />

                    {/* Floating accent elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 opacity-0 group-hover:opacity-5"
                    >
                        <div className="w-full h-full border border-primary/10 rounded-2xl" />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full z-10 flex items-center justify-center p-8"
                    >
                        <Image
                            src={product.image[0]}
                            alt={product.name.en}
                            width={300}
                            height={260}
                            className="object-contain  w-full h-full"
                            priority
                        />
                    </motion.div>

                    {/* Certifications Badge Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-20">
                        {product.certifications.slice(0, 2).map((cert) => (
                            <motion.div
                                key={cert}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Badge variant="secondary" className="text-xs font-semibold px-3 py-1 bg-white/90 backdrop-blur-md text-primary border border-primary/20 hover:border-primary/40 hover:bg-white transition-all shadow-lg">
                                    ✓ {cert}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Card Header */}
                <CardHeader className="pb-3 relative z-20">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {lang === 'ar' ? product.name.ar : product.name.en}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                        {lang === 'ar' ? product.description.ar : product.description.en}
                    </CardDescription>
                </CardHeader>

                {/* Card Content */}
                <CardContent className="flex-grow pb-4 relative z-20">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="font-medium">{lang === 'ar' ? product.category.ar : product.category.en}</span>
                        <span className="text-gray-400">{product.series}</span>
                    </div>
                </CardContent>

                {/* Card Footer with Button */}
                <div className="px-6 pb-6 relative z-20">
                    <Link href={`/${lang}/products/${product.id}`} className="block w-full">
                        <motion.div
                            whileHover={{ x: lang === 'ar' ? -4 : 4 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200">
                                <span className="flex-1">
                                    {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                                </span>
                                <motion.div
                                    animate={{ x: lang === 'ar' ? -2 : 2 }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                                >
                                    <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                                </motion.div>
                            </Button>
                        </motion.div>
                    </Link>
                </div>

                {/* Premium Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-4 right-4 z-30"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur opacity-75" />
                        <div className="relative bg-white rounded-full p-2 shadow-lg">
                            <Star className="w-5 h-5 text-primary fill-primary" />
                        </div>
                    </div>
                </motion.div>
            </Card>
        </motion.div>
    )
}
