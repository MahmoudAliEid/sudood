"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ProductHero } from "@/components/products/details/ProductHero"
import { TechSpecs } from "@/components/products/details/TechSpecs"
import { QuoteModal } from "@/components/products/details/QuoteModal"
import { ProductCard, Product } from "@/components/products/ProductCard"
import { translations } from "@/lib/i18n"

import productsData from "@/data/products.json"

// Cast the imported JSON to the Product type
const products: Product[] = productsData as Product[]

// Real Data Service
const getProduct = (id: string): Product => {
    return products.find(p => p.id === id) || products[0];
}

const getSimulatedSpecs = (lang: string, productId: string) => {
    const product = getProduct(productId);

    // Default specs if none in JSON
    if (!product.specifications) {
        return [
            { label: lang === 'ar' ? 'المادة' : 'Material', value: 'Ductile Iron' },
            { label: lang === 'ar' ? 'تصنيف الضغط' : 'Pressure Rating', value: 'PN16' },
            { label: lang === 'ar' ? 'الضمان' : 'Warranty', value: '5 Years' }
        ];
    }

    const specs: Array<{ label: string, value: string }> = [];

    if (product.specifications.material) {
        specs.push({
            label: lang === 'ar' ? 'المادة' : 'Material',
            value: lang === 'ar' ? product.specifications.material.ar : product.specifications.material.en
        });
    }

    if (product.specifications.pressure) {
        specs.push({
            label: lang === 'ar' ? 'تصنيف الضغط' : 'Pressure Rating',
            value: product.specifications.pressure
        });
    }

    if (product.specifications.temperatureRange) {
        specs.push({
            label: lang === 'ar' ? 'نطاق الحرارة' : 'Temperature Range',
            value: lang === 'ar' ? product.specifications.temperatureRange.ar : product.specifications.temperatureRange.en
        });
    }

    // Add models information as a summary spec if available
    if (product.models && product.models.length > 0) {
        const sizes = product.models.map(m => m.size).join(', ');
        specs.push({
            label: lang === 'ar' ? 'الأحجام المتوفرة' : 'Available Sizes',
            value: sizes
        });
    }

    return specs;
}

const getRelatedProducts = (currentProductId: string): Product[] => {
    const currentProduct = getProduct(currentProductId);
    return products
        .filter(p => p.category.en === currentProduct.category.en && p.id !== currentProductId)
        .slice(0, 4);
}

export default function ProductDetailsPage({ params }: { params: Promise<{ lang: string, id: string }> }) {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

    // Safe param handling
    const resolvedParams = React.use(params)
    const lang = resolvedParams?.lang || 'en'
    const id = resolvedParams?.id || '1'

    const product = getProduct(id)
    const specs = getSimulatedSpecs(lang, id)
    const relatedProducts = getRelatedProducts(id)

    // Handle hash navigation manually for Quote Form since it's a modal
    useEffect(() => {
        if (window.location.hash === '#quote-form') {
            setIsQuoteModalOpen(true)
        }
    }, [])

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-12 lg:py-20">

                {/* Breadcrumb (Simplified) */}
                <div className="text-sm text-muted-foreground mb-8">
                    {lang === 'ar' ? 'المنتجات' : 'Products'} / {lang === 'ar' ? product.category.ar : product.category.en} / <span className="text-foreground font-medium">{lang === 'ar' ? product.name.ar : product.name.en}</span>
                </div>

                {/* Hero Section */}
                <ProductHero product={product} lang={lang} onQuoteClick={() => setIsQuoteModalOpen(true)} />

                {/* Details Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mb-24" id="specs">
                    {/* Left Column: Specs */}
                    <div className="lg:col-span-2">
                        <TechSpecs specs={specs} lang={lang} />

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-6">
                                {lang === 'ar' ? translations.ar.products.applications : translations.en.products.applications}
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { en: translations.en.products.waterDistribution, ar: translations.ar.products.waterDistribution },
                                    { en: translations.en.products.waterTreatment, ar: translations.ar.products.waterTreatment },
                                    { en: translations.en.products.pumpStations, ar: translations.ar.products.pumpStations },
                                    { en: translations.en.products.fireProtection, ar: translations.ar.products.fireProtection }
                                ].map(app => (
                                    <li key={app.en} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        <span className="text-gray-700">{lang === 'ar' ? app.ar : app.en}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Sticky Contact/Download */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                                <h4 className="font-bold text-lg mb-2">{lang === 'ar' ? translations.ar.products.needHelp : translations.en.products.needHelp}</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {lang === 'ar' ? translations.ar.products.needHelpDesc : translations.en.products.needHelpDesc}
                                </p>
                                <button
                                    onClick={() => setIsQuoteModalOpen(true)}
                                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                                >
                                    {lang === 'ar' ? translations.ar.products.contactSales : translations.en.products.contactSales}
                                </button>
                            </div>

                            <div className="border rounded-xl p-6">
                                <h4 className="font-bold text-lg mb-4">{lang === 'ar' ? translations.ar.products.downloads : translations.en.products.downloads}</h4>
                                <div className="space-y-3">
                                    {[
                                        { en: translations.en.products.technicalDatasheet, ar: translations.ar.products.technicalDatasheet },
                                        { en: translations.en.products.installationManual, ar: translations.ar.products.installationManual },
                                        { en: translations.en.products.bimObjects, ar: translations.ar.products.bimObjects }
                                    ].map(file => (
                                        <button key={file.en} className="flex items-center gap-3 w-full text-left text-sm text-gray-600 hover:text-primary transition-colors p-2 hover:bg-gray-50 rounded-lg group">
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            {lang === 'ar' ? file.ar : file.en}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications Row */}
                <div className="border-t border-b py-12 mb-16">
                    <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
                        {lang === 'ar' ? translations.ar.products.certifiedBy : translations.en.products.certifiedBy}
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Placeholders for Logos - In real app, use Image component */}
                        {['SASO', 'UL', 'FM Approved', 'CSA', 'ISO 9001', 'WRAS'].map((cert) => (
                            <div key={cert} className="flex flex-col items-center gap-2 group cursor-pointer text-center">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-gray-200 flex items-center justify-center bg-gray-50 group-hover:border-primary/50 group-hover:bg-white transition-all shadow-sm group-hover:shadow-md">
                                    <span className="font-bold text-xs lg:text-sm text-gray-400 group-hover:text-primary">{cert}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related Products */}
                <div className="border-t pt-16">
                    <h2 className="text-3xl font-bold mb-8">
                        {lang === 'ar' ? translations.ar.products.relatedProducts : translations.en.products.relatedProducts}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} product={p} lang={lang} />
                        ))}
                    </div>
                </div>

            </div>

            <QuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
                productName={product.name}
                productData={{
                    id: product.id,
                    category: product.category,
                    series: product.series,
                    certifications: product.certifications
                }}
                lang={lang}
            />
        </div>
    )
}
