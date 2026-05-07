'use client'
import React from 'react'
import { ShieldCheck, Sparkles, UserCheck, Zap, Star, Activity, CheckCircle2 } from 'lucide-react'

const iconMap: Record<string, React.FC<any>> = {
  ShieldCheck,
  Sparkles,
  UserCheck,
  Zap,
  Star,
  Activity,
  CheckCircle2,
}

export const WhyChooseUsBlock: React.FC<any> = ({ heading, description, features }) => {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white">
            {heading}
          </h2>
          {description && (
            <p className="text-xl text-neutral-400 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature: any, i: number) => {
              const IconComponent = iconMap[feature.icon] || CheckCircle2
              return (
                <div
                  key={i}
                  className="bg-[#0a0a0a] p-10 rounded-3xl border border-white/5 hover:border-[#c3f400]/50 transition-all duration-500 group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#c3f400]/10 flex items-center justify-center mb-8 group-hover:bg-[#c3f400] transition-colors duration-500 text-[#c3f400] group-hover:text-black">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{feature.text}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
