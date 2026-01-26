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

                {/* Detailed Specifications Section */}
                {product.technicalSpecs && product.performanceSpecs ? (
                    <div className="mb-24" id="specs">
                        <DetailedSpecs
                            technical={lang === 'ar' ? product.technicalSpecs.ar : product.technicalSpecs.en}
                            performance={product.performanceSpecs}
                            lang={lang}
                        />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mb-24" id="specs">
                        {/* Fallback for products without detailed JSON structure */}
                        <div className="lg:col-span-2">
                            <TechSpecs specs={specs} lang={lang} />
                        </div>
                    </div>
                )}

                {/* Components & Drawings Grid */}
                {product.components && product.sectionalDrawing && (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-24">
                        <ComponentsTable components={product.components} lang={lang} />
                        <EngineeringDrawing src={product.sectionalDrawing} lang={lang} />
                    </div>
                )}

                {/* Dimensions Table */}
                {product.models && product.models.length > 0 && (
                    <div className="mb-24">
                        <DimensionsTable models={product.models} lang={lang} />
                    </div>
                )}

                {/* Downloads & Support Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
                        <h4 className="font-bold text-xl mb-3">{lang === 'ar' ? translations.ar.products.needHelp : translations.en.products.needHelp}</h4>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            {lang === 'ar' ? translations.ar.products.needHelpDesc : translations.en.products.needHelpDesc}
                        </p>
                        <button
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
                        >
                            {lang === 'ar' ? translations.ar.products.contactSales : translations.en.products.contactSales}
                        </button>
                    </div>

                    <div className="lg:col-span-2 border rounded-xl p-8">
                        <h4 className="font-bold text-xl mb-6">{lang === 'ar' ? translations.ar.products.downloads : translations.en.products.downloads}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { en: translations.en.products.technicalDatasheet, ar: translations.ar.products.technicalDatasheet },
                                { en: translations.en.products.installationManual, ar: translations.ar.products.installationManual },
                                { en: translations.en.products.bimObjects, ar: translations.ar.products.bimObjects }
                            ].map(file => (
                                <button key={file.en} className="flex items-center gap-4 w-full text-left p-4 hover:bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 transition-all group">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <svg className="w-5 h-5 text-gray-500 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-gray-700 group-hover:text-primary">{lang === 'ar' ? file.ar : file.en}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Certifications Row */}
                <div className="border-t border-b py-16 mb-20 bg-gray-50/50 rounded-[3rem]">
                    <h3 className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10">
                        {lang === 'ar' ? translations.ar.products.certifiedBy : translations.en.products.certifiedBy}
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Use dynamic certifications based on product data if available, or fallback */}
                        {(product.certifications || ['SASO', 'ISO 9001']).map((cert) => (
                            <div key={cert} className="flex flex-col items-center gap-3 group cursor-pointer text-center hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-xl group-hover:border-primary/20 transition-all">
                                    <span className="font-bold text-sm lg:text-base text-gray-400 group-hover:text-primary px-2">{cert}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related Products */}
                <div>
                    <h2 className="text-3xl font-bold mb-10">
                        {lang === 'ar' ? translations.ar.products.relatedProducts : translations.en.products.relatedProducts}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
