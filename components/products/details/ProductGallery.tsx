"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductGalleryProps {
    images: string[]
    productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handlePrevious = () => {
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    // Generate thumbnail images if only one is provided
    const displayImages = images.length > 0 ? images : ["/products/19.png"]
    const thumbnails = displayImages.length === 1 ? Array(7).fill(displayImages[0]) : displayImages

    return (
        <div className="w-full">
            {/* Main Image Display */}
            <div className="relative w-full aspect-square lg:aspect-4/3 border-2 border-gray-100 rounded-2xl overflow-hidden flex items-center justify-center p-4 lg:p-8 group mb-6">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/50 to-transparent z-10" />

                {/* Navigation Arrows */}
                {displayImages.length > 1 && (
                    <>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-foreground p-2 rounded-full shadow-lg backdrop-blur-md transition-all"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-foreground p-2 rounded-full shadow-lg backdrop-blur-md transition-all"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </>
                )}

                {/* Image Counter */}
                <div className="absolute top-4 right-4 z-30 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-md">
                    {selectedIndex + 1} / {displayImages.length}
                </div>

                {/* Main Image */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full z-20"
                    >
                        <Image
                            src={displayImages[selectedIndex]}
                            alt={`${productName} - View ${selectedIndex + 1}`}
                            fill
                            priority
                            className="object-contain "
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Decorative elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-5"
                >
                    <div className="w-full h-full border border-primary/10 rounded-2xl" />
                </motion.div>
            </div>

            {/* Thumbnail Gallery */}
            {displayImages.length > 1 && (
                <div className="relative">
                    <div className="flex gap-3 overflow-x-auto pb-2 scroll-smooth">
                        {thumbnails.map((image, index) => (
                            <motion.button
                                key={index}
                             
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedIndex(index % displayImages.length)}
                                className={`relative aspect-square h-20 lg:h-24 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                                    selectedIndex === (index % displayImages.length)
                                        ? "border-primary shadow-lg"
                                        : "border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100"
                                }`}
                            >
                                <Image
                                    src={thumbnails[index]}
                                    alt={`${productName} thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="96px"
                                />
                            </motion.button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
