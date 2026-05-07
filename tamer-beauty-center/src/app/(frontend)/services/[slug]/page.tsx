import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Activity, Smile, Scissors, Gem, ArrowLeft, Tag } from 'lucide-react'
import RichText from '@/components/RichText'

export const dynamic = 'force-static'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

const iconMap: Record<string, React.FC<any>> = {
  Activity,
  Smile,
  Scissors,
  Gem,
}

export default async function ServiceLanding({ params }: Args) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'services',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const service = result.docs[0]
  if (!service) return notFound()

  const IconComponent = iconMap[service.icon || 'Activity'] || Activity

  return (
    <main className="bg-[#050505] min-h-screen pt-32 pb-24" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 border-b border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c3f400]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="w-24 h-24 rounded-3xl bg-[#c3f400]/10 flex items-center justify-center mb-8 border border-[#c3f400]/20 text-[#c3f400] shadow-[0_0_50px_rgba(195,244,0,0.1)]">
            <IconComponent size={48} />
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            {service.title}
          </h1>
          <p className="text-2xl text-neutral-400 max-w-3xl leading-relaxed font-light">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-2">
              {service.fullDescription && (
                <div className="prose prose-invert prose-lg max-w-none">
                  <RichText data={service.fullDescription} enableGutter={false} />
                </div>
              )}
            </div>

            {/* Right Sidebar (Pricing & Packages) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c3f400] opacity-5 rounded-full blur-3xl" />
                  
                  <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                    <Tag className="text-[#c3f400]" />
                    دليل الأسعار
                  </h3>

                  {service.basePrice && (
                    <div className="mb-8 pb-8 border-b border-white/10">
                      <div className="text-sm text-neutral-500 font-bold mb-2 uppercase tracking-widest">السعر الأساسي</div>
                      <div className="text-4xl font-black text-[#c3f400]">
                        {service.basePrice}
                        <span className="text-xl ml-2 text-[#c3f400]/60">{service.currency}</span>
                      </div>
                    </div>
                  )}

                  {service.packages && service.packages.length > 0 && (
                    <div className="space-y-4">
                      {service.packages.map((pkg: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                          <span className="font-bold text-white">{pkg.name}</span>
                          <span className="font-black text-[#c3f400]">{pkg.price} {service.currency}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button className="w-full mt-8 bg-[#c3f400] hover:bg-white text-black font-black py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(195,244,0,0.3)] flex items-center justify-center gap-3">
                    احجز موعدك الآن
                    <ArrowLeft size={20} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
