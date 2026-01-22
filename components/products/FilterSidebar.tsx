"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronDown, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FilterSidebarProps {
    className?: string
    lang: string
    categories: string[]
    certifications: string[]
    series: string[]
    selectedCategories: string[]
    selectedCertifications: string[]
    selectedSeries: string[]
    onCategoryChange: (categories: string[]) => void
    onCertificationChange: (certifications: string[]) => void
    onSeriesChange: (series: string[]) => void
    onReset: () => void
}

export function FilterSidebar({
    className,
    lang,
    categories,
    certifications,
    series,
    selectedCategories,
    selectedCertifications,
    selectedSeries,
    onCategoryChange,
    onCertificationChange,
    onSeriesChange,
    onReset
}: FilterSidebarProps) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleFilter = (selected: string[], setSelected: (items: string[]) => void, item: string) => {
        const newSelection = selected.includes(item)
            ? selected.filter((i) => i !== item)
            : [...selected, item]
        setSelected(newSelection)
    }

    const FilterSection = ({ title, options, selected, setSelected }: any) => (
        <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">{title}</h3>
            <div className="space-y-2">
                {options.map((option: string) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer group">
                        <div
                            className={cn(
                                "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                                selected.includes(option) ? "bg-primary border-primary text-white" : "border-gray-300 group-hover:border-primary"
                            )}
                            onClick={(e) => {
                                e.preventDefault()
                                toggleFilter(selected, setSelected, option)
                            }}
                        >
                            {selected.includes(option) && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-foreground transition-colors">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    )

    return (
        <>
            {/* Mobile Toggle */}
            <div className="lg:hidden mb-4">
                <Button onClick={() => setIsOpen(true)} className="w-full justify-between" variant="outline">
                    <span className="flex items-center gap-2"><Filter size={16} /> {lang === 'ar' ? 'الفلاتر' : 'Filters'}</span>
                    <ChevronDown size={16} />
                </Button>
            </div>

            {/* Desktop Sidebar (Sticky) */}
            <div className={cn("hidden lg:block w-64 flex-shrink-0 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto pr-4", className)}>
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-bold text-lg">{lang === 'ar' ? 'الفلاتر' : 'Filters'}</h2>
                        <button
                            onClick={onReset}
                            className="text-xs text-primary hover:underline"
                        >
                            {lang === 'ar' ? 'إعادة تعيين' : 'Reset'}
                        </button>
                    </div>

                    <FilterSection
                        title={lang === 'ar' ? 'فئة المنتج' : 'Product Category'}
                        options={categories}
                        selected={selectedCategories}
                        setSelected={onCategoryChange}
                    />
                    <div className="h-px bg-gray-100 my-4" />
                    <FilterSection
                        title={lang === 'ar' ? 'الشهادات' : 'Certifications'}
                        options={certifications}
                        selected={selectedCertifications}
                        setSelected={onCertificationChange}
                    />
                    <div className="h-px bg-gray-100 my-4" />
                    <FilterSection
                        title={lang === 'ar' ? 'السلسلة' : 'Series'}
                        options={series}
                        selected={selectedSeries}
                        setSelected={onSeriesChange}
                    />
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white z-50 p-6 shadow-2xl lg:hidden overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="font-bold text-xl">{lang === 'ar' ? 'الفلاتر' : 'Filters'}</h2>
                                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                    <X size={20} />
                                </Button>
                            </div>

                            <div className="space-y-6">
                                <FilterSection
                                    title={lang === 'ar' ? 'فئة المنتج' : 'Product Category'}
                                    options={categories}
                                    selected={selectedCategories}
                                    setSelected={onCategoryChange}
                                />
                                <FilterSection
                                    title={lang === 'ar' ? 'الشهادات' : 'Certifications'}
                                    options={certifications}
                                    selected={selectedCertifications}
                                    setSelected={onCertificationChange}
                                />
                                <FilterSection
                                    title={lang === 'ar' ? 'السلسلة' : 'Series'}
                                    options={series}
                                    selected={selectedSeries}
                                    setSelected={onSeriesChange}
                                />
                            </div>

                            <div className="mt-8 pt-4 border-t space-y-3">
                                <Button className="w-full" onClick={() => setIsOpen(false)}>
                                    {lang === 'ar' ? 'تطبيق الفلاتر' : 'Apply Filters'}
                                </Button>
                                <Button variant="outline" className="w-full" onClick={() => { onReset(); setIsOpen(false); }}>
                                    {lang === 'ar' ? 'إعادة تعيين الجميع' : 'Reset All'}
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
