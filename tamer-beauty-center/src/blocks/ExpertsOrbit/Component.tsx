'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const ExpertsOrbitBlock: React.FC<any> = ({ heading, subheading, centerImage, experts }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const centerImgUrl = typeof centerImage === 'string' ? centerImage : centerImage?.url || ''

  return (
    <section className="py-40 relative flex flex-col items-center bg-[#0a0a0a]" dir="rtl">
      <div className="text-center mb-32 px-6">
        <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white">{heading}</h2>
        {subheading && (
          <p className="text-neutral-600 tracking-[0.5em] uppercase text-xs">{subheading}</p>
        )}
      </div>

      <div className="relative w-[360px] h-[360px] md:w-[750px] md:h-[750px] flex items-center justify-center scale-90 md:scale-100">
        <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse" />
        <div className="relative z-20 w-44 h-44 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#c3f400] shadow-[0_0_120px_rgba(195,244,0,0.3)]">
          {centerImgUrl && (
            <img src={centerImgUrl} className="w-full h-full object-cover" alt="Center Orbit Visual" />
          )}
        </div>
        {experts &&
          experts.map((relationData: any, i: number) => {
            // Payload relational fields wrap the document in "value" if depth is used, or sometimes it's direct.
            const expert = relationData.value || relationData
            if (!expert?.name) return null
            
            const angle = (360 / experts.length) * i
            const imgUrl = typeof expert.image === 'string' ? expert.image : expert.image?.url || ''
            
            return (
              <motion.div
                key={i}
                className="absolute flex flex-col items-center gap-3 z-30"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${angle}deg) translate(${
                    isMobile ? 170 : 350
                  }px) rotate(-${angle}deg) translate(-50%, -50%)`,
                }}
                whileHover={{ scale: 1.2, zIndex: 40 }}
              >
                <Link href={`/experts/${expert.slug || ''}`} className="flex flex-col items-center gap-3 group relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-neutral-900 border-2 border-white/10 p-2 cursor-pointer overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-[#c3f400] group-hover:shadow-[0_0_30px_rgba(195,244,0,0.4)]">
                    {imgUrl && (
                      <img
                        src={imgUrl}
                        className="w-full h-full rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        alt={expert.name}
                      />
                    )}
                  </div>
                  {/* Tooltip style label */}
                  <div className="absolute top-[110%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center bg-black/90 backdrop-blur-2xl px-5 py-2.5 rounded-2xl border border-[#c3f400]/20 shadow-2xl whitespace-nowrap">
                    <div className="text-sm md:text-base font-black text-white">{expert.name}</div>
                    <div className="text-[11px] text-[#c3f400] font-bold uppercase tracking-tighter mt-1">
                      {expert.title}
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
      </div>
    </section>
  )
}
