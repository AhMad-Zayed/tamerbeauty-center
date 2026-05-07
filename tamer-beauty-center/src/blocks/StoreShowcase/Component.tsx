'use client'
import React from 'react'
import { ShoppingBag, Gift, ArrowRight } from 'lucide-react'

export const StoreShowcaseBlock: React.FC<any> = ({ heading, subtitle, giftTitle, giftDesc, categories }) => {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24 relative">
          <ShoppingBag size={80} className="text-[#c3f400] opacity-10 absolute left-1/2 -translate-x-1/2 -top-10" />
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white relative z-10">{heading}</h2>
          {subtitle && (
            <p className="text-neutral-500 tracking-[0.4em] uppercase text-sm relative z-10">{subtitle}</p>
          )}
        </div>

        {categories && categories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((cat: any, i: number) => {
              const imgUrl = typeof cat.image === 'string' ? cat.image : cat.image?.url || ''
              return (
                <div
                  key={i}
                  className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                  {imgUrl && (
                    <img
                      src={imgUrl}
                      className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000"
                      alt={cat.name}
                    />
                  )}
                  <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                    <h3 className="text-2xl font-black text-white">{cat.name}</h3>
                    <div className="w-12 h-12 rounded-full bg-[#c3f400] text-black flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowRight size={24} className="rotate-180" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <div className="bg-gradient-to-r from-neutral-900 to-black p-1 rounded-[3rem] p-px border border-white/10">
          <div className="bg-black rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-8">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Gift size={40} className="text-[#c3f400]" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-3">{giftTitle}</h3>
                {giftDesc && (
                  <p className="text-neutral-400 text-lg">{giftDesc}</p>
                )}
              </div>
            </div>
            <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-[#c3f400] transition-colors whitespace-nowrap">
              تسوق الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
