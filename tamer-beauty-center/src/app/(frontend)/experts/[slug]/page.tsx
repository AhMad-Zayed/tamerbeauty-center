import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Calendar, Clock, Image as ImageIcon } from 'lucide-react'

export const dynamic = 'force-static'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function ExpertProfile({ params }: Args) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'experts',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const expert = result.docs[0]
  if (!expert) return notFound()

  const imgUrl = typeof expert.image === 'object' && expert.image !== null && 'url' in expert.image ? expert.image.url : ''

  return (
    <main className="bg-[#050505] min-h-screen pt-32 pb-24" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="relative w-64 h-64 md:w-96 md:h-96 shrink-0">
            <div className="absolute inset-0 bg-[#c3f400] rounded-full blur-[100px] opacity-20" />
            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
              {imgUrl && (
                <img src={imgUrl} alt={expert.name} className="w-full h-full object-cover" />
              )}
            </div>
          </div>
          <div className="flex-1 text-center md:text-right">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
              {expert.name}
            </h1>
            <div className="text-[#c3f400] text-xl font-bold tracking-widest uppercase mb-8">
              {expert.title}
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-white/80">
                <Clock size={18} className="text-[#c3f400]" />
                <span>{expert.experienceYears} سنوات خبرة</span>
              </div>
            </div>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
              {expert.bio}
            </p>
          </div>
        </div>

        {expert.gallery && expert.gallery.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-12">
              <ImageIcon size={32} className="text-[#c3f400]" />
              <h2 className="text-4xl font-black text-white">معرض الأعمال</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expert.gallery.map((item: any, i: number) => {
                const galImgUrl = typeof item.image === 'object' && item.image !== null && 'url' in item.image ? item.image.url : ''
                return (
                  <div key={i} className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-square">
                    <img src={galImgUrl} alt={item.caption || 'Gallery Image'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    {item.caption && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white font-bold">{item.caption}</span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
