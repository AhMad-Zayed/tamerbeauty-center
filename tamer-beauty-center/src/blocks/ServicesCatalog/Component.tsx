'use client'
import React from 'react'
import { Activity, Smile, Scissors, Gem, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const iconMap: Record<string, React.FC<any>> = {
  Activity,
  Smile,
  Scissors,
  Gem,
}

export const ServicesCatalogBlock: React.FC<any> = ({ heading, subheading, services }) => {
  return (
    <section className="py-32 bg-[#050505] border-t border-white/5 relative" dir="rtl">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-[#c3f400]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white">
            {heading}
          </h2>
          {subheading && (
            <p className="text-[#c3f400] font-bold tracking-[0.3em] uppercase text-sm">
              {subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services &&
            services.map((relationData: any, i: number) => {
              const service = relationData.value || relationData
              if (!service?.title) return null
              
              const IconComponent = iconMap[service.icon || 'Activity'] || Activity
              
              return (
                <Link
                  href={`/services/${service.slug || ''}`}
                  key={i}
                  className="group relative bg-[#0a0a0a] p-10 rounded-[2rem] border border-white/5 overflow-hidden block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                  
                  {/* Sliding hover effect background */}
                  <div className="absolute inset-0 bg-[#c3f400] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-8 text-[#c3f400] group-hover:bg-black/20 group-hover:border-black/10 group-hover:text-black transition-colors duration-500">
                      <IconComponent size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-black transition-colors duration-500">
                      {service.title}
                    </h3>
                    
                    <p className="text-neutral-400 group-hover:text-black/70 transition-colors duration-500 mb-8 flex-grow">
                      {service.shortDescription}
                    </p>
                    
                    <div className="flex items-center gap-2 text-[#c3f400] font-bold group-hover:text-black transition-colors duration-500 mt-auto">
                      <span>اكتشف المزيد</span>
                      <ArrowRight size={18} className="transform group-hover:-translate-x-2 transition-transform duration-300" />
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
