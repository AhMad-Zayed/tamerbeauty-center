import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Clock, Tag, ArrowLeft } from 'lucide-react'

export const dynamic = 'force-static'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function OfferLanding({ params }: Args) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'offers',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const offer = result.docs[0]
  if (!offer) return notFound()

  const imgUrl = typeof offer.image === 'object' && offer.image !== null && 'url' in offer.image ? offer.image.url : ''
  
  const calculateDaysLeft = (dateString: string) => {
    if (!dateString) return 0
    const diff = new Date(dateString).getTime() - new Date().getTime()
    return Math.ceil(diff / (1000 * 3600 * 24))
  }
  
  const daysLeft = offer.expirationDate ? calculateDaysLeft(offer.expirationDate) : 0

  return (
    <main className="bg-[#050505] min-h-screen pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Right Col: Image */}
          <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
            {imgUrl && (
              <img src={imgUrl} alt={offer.title} className="w-full h-full object-cover" />
            )}
            
            <div className="absolute top-8 right-8 z-20 flex gap-4">
              {offer.limitedTag && (
                <div className="bg-[#c3f400] text-black px-6 py-3 rounded-full font-black tracking-widest text-sm uppercase">
                  {offer.limitedTag}
                </div>
              )}
              {daysLeft > 0 && (
                <div className="bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center gap-2">
                  <Clock size={18} className="text-[#c3f400]" />
                  <span className="text-white font-bold text-sm">ينتهي خلال {daysLeft} يوم</span>
                </div>
              )}
            </div>
          </div>

          {/* Left Col: Details */}
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              {offer.title}
            </h1>
            <p className="text-2xl text-neutral-400 mb-12 leading-relaxed">
              {offer.description}
            </p>

            <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12 border border-[#c3f400]/20 shadow-[0_0_50px_rgba(195,244,0,0.05)] relative overflow-hidden mb-12">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#c3f400] opacity-5 rounded-full blur-[80px]" />
              
              <div className="flex items-center gap-3 mb-4">
                <Tag className="text-[#c3f400]" size={24} />
                <span className="text-white font-bold tracking-widest uppercase">السعر الحصري</span>
              </div>
              
              <div className="flex items-end gap-6">
                <div className="text-6xl md:text-8xl font-black text-[#c3f400]">
                  {offer.newPrice}
                  <span className="text-3xl ml-3 text-[#c3f400]/50">{offer.currency}</span>
                </div>
                {offer.oldPrice && (
                  <div className="text-3xl text-neutral-600 line-through font-bold mb-2">
                    {offer.oldPrice}
                  </div>
                )}
              </div>
            </div>

            <button className="w-full bg-[#c3f400] hover:bg-white text-black font-black py-6 rounded-[2rem] text-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(195,244,0,0.3)] flex items-center justify-center gap-4 group">
              احجز العرض الآن
              <ArrowLeft size={24} className="transform group-hover:-translate-x-2 transition-transform duration-300" />
            </button>
          </div>

        </div>
      </div>
    </main>
  )
}
