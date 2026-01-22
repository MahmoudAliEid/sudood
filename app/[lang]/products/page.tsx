"use client"

import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { FilterSidebar } from "@/components/products/FilterSidebar"
import { ProductCard, Product } from "@/components/products/ProductCard"
import productsData from "@/data/products.json"

// Cast the imported JSON to the Product type
export const products: Product[] = productsData as Product[]

export default function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = React.use(params)
  const lang = resolvedParams?.lang || 'en'

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([])
  const [selectedSeries, setSelectedSeries] = useState<string[]>([])

  // Pagination state
  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = 6

  // Extract unique filter options from products
  const uniqueCategories = useMemo(() => {
    const categoriesSet = new Set<string>()
    products.forEach(product => {
      categoriesSet.add(product.category.en)
    })
    return Array.from(categoriesSet).sort()
  }, [])

  const uniqueCertifications = useMemo(() => {
    const certificationsSet = new Set<string>()
    products.forEach(product => {
      product.certifications.forEach(cert => certificationsSet.add(cert))
    })
    return Array.from(certificationsSet).sort()
  }, [])

  const uniqueSeries = useMemo(() => {
    const seriesSet = new Set<string>()
    products.forEach(product => {
      seriesSet.add(product.series)
    })
    return Array.from(seriesSet).sort()
  }, [])

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      const categoryMatch = selectedCategories.length === 0 ||
        selectedCategories.includes(product.category.en)

      // Certification filter (product must have at least one of the selected certifications)
      const certificationMatch = selectedCertifications.length === 0 ||
        selectedCertifications.some(cert => product.certifications.includes(cert))

      // Series filter
      const seriesMatch = selectedSeries.length === 0 ||
        selectedSeries.includes(product.series)

      return categoryMatch && certificationMatch && seriesMatch
    })
  }, [selectedCategories, selectedCertifications, selectedSeries])

  // Reset pagination when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategories, selectedCertifications, selectedSeries])

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategories([])
    setSelectedCertifications([])
    setSelectedSeries([])
  }

  return (
    <div className="min-h-screen bg-gray-50/50">

      {/* Page Header */}
      <div className="bg-white border-b py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {lang === 'ar' ? 'منتجاتنا' : 'Our Products'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {lang === 'ar'
                ? 'صمامات مياه عالية الجودة مصممة للموثوقية والأداء العالي للمشاريع السكنية والتجارية والصناعية'
                : 'High-quality water valves engineered for reliability and performance for residential, commercial, and industrial projects.'}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <FilterSidebar
            lang={lang}
            categories={uniqueCategories}
            certifications={uniqueCertifications}
            series={uniqueSeries}
            selectedCategories={selectedCategories}
            selectedCertifications={selectedCertifications}
            selectedSeries={selectedSeries}
            onCategoryChange={setSelectedCategories}
            onCertificationChange={setSelectedCertifications}
            onSeriesChange={setSelectedSeries}
            onReset={handleResetFilters}
          />

          {/* Product Grid */}
          <div className="flex-1">

            {/* Results Count & Sort */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-muted-foreground text-sm">
                {lang === 'ar'
                  ? `عرض ${startIndex + 1}-${Math.min(endIndex, filteredProducts.length)} من ${filteredProducts.length} النتائج`
                  : `Showing ${startIndex + 1}-${Math.min(endIndex, filteredProducts.length)} of ${filteredProducts.length} results`
                }
              </span>
            </div>

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} lang={lang} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  {lang === 'ar' ? 'لا توجد منتجات تطابق الفلاتر المحددة' : 'No products match the selected filters'}
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {lang === 'ar' ? 'إعادة تعيين الفلاتر' : 'Reset Filters'}
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {lang === 'ar' ? 'السابق' : 'Previous'}
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded transition-colors ${currentPage === page
                          ? 'bg-primary text-white'
                          : 'border hover:bg-gray-50'
                        }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {lang === 'ar' ? 'التالي' : 'Next'}
                  </button>
                </nav>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
