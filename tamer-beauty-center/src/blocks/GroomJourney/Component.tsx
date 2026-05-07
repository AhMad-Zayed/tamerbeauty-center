'use client'
import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const GroomJourneyBlock: React.FC<any> = ({ subtitle, heading, description, checklist, ctaText, image }) => {
  const imgUrl = typeof image === 'string' ? image : image?.url || ''

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            {subtitle && (
              <span className="text-[#c3f400] font-bold tracking-[0.4em] uppercase text-sm mb-6 block">
                {subtitle}
              </span>
            )}
            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] text-white">
              {heading}
            </h2>
            {description && (
              <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
                {description}
              </p>
            )}

            <div className="space-y-6 mb-16">
              {checklist && checklist.map((item: any, i: number) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="mt-1 bg-[#c3f400]/10 p-2 rounded-full">
                    <CheckCircle2 className="text-[#c3f400]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-neutral-500">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {ctaText && (
              <button className="bg-white text-black px-12 py-6 rounded-full font-black text-2xl hover:bg-[#c3f400] transition-colors flex items-center gap-4">
                {ctaText} <ArrowRight />
              </button>
            )}
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#c3f400] to-transparent opacity-20 blur-[100px] rounded-full" />
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              {imgUrl && (
                <img
                  src={imgUrl}
                  alt={heading}
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
