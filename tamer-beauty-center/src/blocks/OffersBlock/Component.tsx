'use client'
import React from 'react'
import { Percent, Clock } from 'lucide-react'
import Link from 'next/link'

export const OffersBlockComponent: React.FC<any> = ({ heading, subheading, offers }) => {
  const calculateDaysLeft = (dateString: string) => {
    if (!dateString) return 0
    const diff = new Date(dateString).getTime() - new Date().getTime()
    return Math.ceil(diff / (1000 * 3600 * 24))
  }

  return (
    <section className="py-32 bg-black relative" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-24">
          <div>
            <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-white">{heading}</h2>
            {subheading && (
              <p className="text-[#c3f400] font-bold tracking-[0.3em] uppercase text-sm">
                {subheading}
              </p>
            )}
          </div>
          <Percent size={80} className="text-[#c3f400] opacity-20 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers &&
            offers.map((relationData: any, i: number) => {
              const offer = relationData.value || relationData
              if (!offer?.title) return null
              
              const imgUrl = typeof offer.image === 'string' ? offer.image : offer.image?.url || ''
              const daysLeft = calculateDaysLeft(offer.expirationDate)
              
              return (
                <Link
                  href={`/offers/${offer.slug || ''}`}
                  key={i}
                  className="group relative bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#c3f400]/50 transition-all duration-700 hover:-translate-y-4 block"
                >
                  <div className="absolute top-6 left-6 z-20 bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-2">
                    <Clock size={16} className="text-[#c3f400]" />
                    <span className="text-white font-bold text-xs">
                      {daysLeft > 0 ? `ينتهي خلال ${daysLeft} يوم` : 'ينتهي قريباً'}
                    </span>
                  </div>
                  {offer.limitedTag && (
                    <div className="absolute top-6 right-6 z-20 bg-[#c3f400] text-black px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-tighter">
                      {offer.limitedTag}
                    </div>
                  )}
                  <div className="h-80 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                    {imgUrl && (
                      <img
                        src={imgUrl}
                        alt={offer.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <div className="p-10 relative z-20">
                    <h3 className="text-3xl font-black mb-4 text-white group-hover:text-[#c3f400] transition-colors">{offer.title}</h3>
                    {offer.description && (
                      <p className="text-neutral-400 mb-6">{offer.description}</p>
                    )}
                    <div className="flex items-end gap-6">
                      <div className="text-5xl font-black text-[#c3f400]">
                        {offer.newPrice}
                        <span className="text-2xl ml-2 text-[#c3f400]/60">{offer.currency}</span>
                      </div>
                      {offer.oldPrice && (
                        <div className="text-2xl text-neutral-600 line-through font-bold mb-1">
                          {offer.oldPrice}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>
      </div>
    </section>
  )
}
