'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import type { Page } from '@/payload-types'

export const HeroSlider: React.FC<Page['hero']> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!slides || slides.length === 0) return
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 7000)
    return () => clearInterval(timer)
  }, [slides])

  if (!slides || slides.length === 0) return null

  const activeSlide = slides[currentSlide]
  // @ts-expect-error payload media type might be string or object
  const imgUrl = typeof activeSlide.img === 'string' ? activeSlide.img : activeSlide.img?.url || ''

  return (
    <section className="relative h-[95vh] flex items-center overflow-hidden bg-black" dir="rtl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2.5 }}
          className="absolute inset-0"
        >
          {imgUrl && (
            <img
              src={imgUrl}
              className="w-full h-full object-cover grayscale brightness-[0.25]"
              alt={activeSlide.title || 'Hero'}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          key={`text-${currentSlide}`}
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <span className="text-[#c3f400] font-bold tracking-[0.6em] text-sm mb-8 block uppercase">
            — THE NEON SANCTUARY
          </span>
          <h1 className="text-7xl md:text-[11rem] font-black leading-[0.85] mb-12 tracking-tighter text-white">
            {activeSlide.title} <br />
            {activeSlide.subtitle && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 italic">
                {activeSlide.subtitle}
              </span>
            )}
          </h1>
          {activeSlide.desc && (
            <p className="text-neutral-400 max-w-3xl text-2xl md:text-3xl mb-14 leading-tight border-r-4 border-[#c3f400] pr-10">
              {activeSlide.desc}
            </p>
          )}
          <button className="bg-[#c3f400] text-black px-16 py-7 rounded-3xl font-black text-3xl hover:scale-105 transition-all shadow-2xl shadow-[#c3f400]/30 flex items-center gap-6">
            ابدأ رحلتك <ArrowRight size={40} />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-20 right-12 flex gap-6 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 transition-all duration-700 ${
              currentSlide === i ? 'w-32 bg-[#c3f400]' : 'w-12 bg-white/10'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
