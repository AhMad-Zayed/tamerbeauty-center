'use client'
import React from 'react'
import { ArrowRight, Scissors, Wind, LayoutGrid, Palette, Sparkles, Stethoscope, Zap, ShieldCheck, Languages } from 'lucide-react'

const iconMap: Record<string, React.FC<any>> = {
  Scissors,
  Wind,
  LayoutGrid,
  Palette,
  Sparkles,
  Stethoscope,
  Zap,
  ShieldCheck,
  Languages,
}

export const AcademyGridBlock: React.FC<any> = ({ subtitle, heading, description, courses }) => {
  if (!courses || courses.length === 0) return null

  return (
    <section className="py-32 bg-black relative" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-3xl">
            {subtitle && (
              <span className="text-[#c3f400] font-bold tracking-[0.4em] uppercase text-sm mb-6 block">
                {subtitle}
              </span>
            )}
            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
              {heading}
            </h2>
            {description && (
              <p className="text-xl text-neutral-400 border-r-2 border-[#c3f400] pr-6">
                {description}
              </p>
            )}
          </div>
          <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-[#c3f400] transition-colors shrink-0 flex items-center gap-3">
            استكشف الأكاديمية <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course: any, i: number) => {
            const IconComponent = iconMap[course.icon] || LayoutGrid
            return (
              <div
                key={i}
                className={`group p-10 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between min-h-[320px]
                  ${
                    course.special
                      ? 'bg-[#c3f400] border-[#c3f400] shadow-[0_0_50px_rgba(195,244,0,0.2)]'
                      : 'bg-[#0a0a0a] border-white/5 hover:border-white/20'
                  }`}
              >
                <div className="flex justify-between items-start mb-12">
                  <div
                    className={`p-4 rounded-2xl ${
                      course.special ? 'bg-black text-[#c3f400]' : 'bg-white/5 text-[#c3f400]'
                    }`}
                  >
                    <IconComponent size={32} />
                  </div>
                  <div
                    className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${
                      course.special ? 'bg-black/10 text-black' : 'bg-white/5 text-white/50'
                    }`}
                  >
                    {course.category}
                  </div>
                </div>
                <div>
                  <h3
                    className={`text-3xl font-black mb-6 ${
                      course.special ? 'text-black' : 'text-white'
                    }`}
                  >
                    {course.title}
                  </h3>
                  <div
                    className={`flex items-center gap-3 font-bold text-lg transition-transform group-hover:translate-x-[-10px] ${
                      course.special ? 'text-black/70' : 'text-white/40'
                    }`}
                  >
                    التفاصيل <ArrowRight size={20} className="rotate-180" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
