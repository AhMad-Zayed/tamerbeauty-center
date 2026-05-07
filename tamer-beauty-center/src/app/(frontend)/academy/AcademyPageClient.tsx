'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { COURSES } from '@/data/courses'

const STATS = [
  { value: '+500', label: 'خريج محترف' },
  { value: '9', label: 'برامج تدريبية' },
  { value: '+15', label: 'سنة خبرة' },
  { value: '100%', label: 'توظيف الخريجين' },
]

export const AcademyPageClient: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'جميع البرامج' },
    { id: 'foundation', label: 'التأسيسي' },
    { id: 'masterclass', label: 'Masterclass' },
    { id: 'technical', label: 'الفني' },
    { id: 'clinical', label: 'السريري' },
    { id: 'business', label: 'الأعمال' },
  ]

  return (
    <div
      dir="rtl"
      style={{
        background: '#0e0e0e',
        minHeight: '100vh',
        fontFamily: "'Noto Kufi Arabic', 'Manrope', sans-serif",
      }}
    >
      {/* ── HERO SECTION ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: '716px', paddingTop: '100px', paddingBottom: '80px' }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0" style={{ opacity: 0.35 }}>
          <Image
            src="/academy-hero.png"
            alt="أكاديمية تامر للتدريب"
            fill
            className="object-cover object-center"
            style={{ filter: 'grayscale(30%) contrast(1.1)' }}
            priority
          />
        </div>

        {/* RTL gradient overlay — فades from left (content side) to right */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to left, #0e0e0e 0%, rgba(14,14,14,0.92) 40%, rgba(14,14,14,0.5) 70%, transparent 100%)',
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 z-0"
          style={{ height: '200px', background: 'linear-gradient(to top, #0e0e0e, transparent)' }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl grid gap-7">
            {/* Tag line */}
            <div className="flex items-center gap-3">
              <span className="w-12 h-px" style={{ backgroundColor: '#c3f400' }} />
              <span
                style={{
                  fontFamily: 'Inter, monospace',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: '#c3f400',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                أكاديمية تامر للتدريب الاحترافي
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontFamily: "'Epilogue', 'Noto Kufi Arabic', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              اصنع مستقبلك في{' '}
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(90deg, #c3f400, #abd600)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                عالم العناية والمظهر
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.55)',
                maxWidth: '580px',
                lineHeight: 1.8,
                fontFamily: "'Manrope', 'Noto Kufi Arabic', sans-serif",
              }}
            >
              تجمع أكاديميتنا الرائدة بين المهارة التقنية ومعايير الضيافة الفاخرة. نحن نؤهل نخبة المحترفين لإعادة صياغة مفاهيم العناية بالرجل والجمال السريري وفق أعلى المستويات العالمية.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="https://wa.me/972527815671?text=أرغب في الاستفسار عن دورات الأكاديمية"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button text-base"
              >
                استكشف البرامج التدريبية
              </a>
              <a
                href="https://wa.me/972527815671"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-8 py-4 font-bold text-sm transition-all duration-300"
                style={{
                  fontFamily: "'Epilogue', sans-serif",
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#c3f400',
                  border: '1px solid rgba(195,244,0,0.2)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(195,244,0,0.08)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
              >
                <span style={{ fontSize: '1.3rem' }}>▶</span>
                جولة افتراضية
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div
        className="w-full"
        style={{ borderTop: '1px solid rgba(195,244,0,0.08)', borderBottom: '1px solid rgba(195,244,0,0.08)' }}
      >
        <div
          className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                style={{
                  fontFamily: 'Inter, monospace',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#c3f400',
                  letterSpacing: '-0.03em',
                  textShadow: '0 0 20px rgba(195,244,0,0.4)',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.4)',
                  fontFamily: 'Noto Kufi Arabic',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── COURSES SECTION ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        {/* Section header */}
        <div className="mb-10">
          <p className="section-subtitle mb-4">التدريب المهني الاحترافي</p>
          <h2 className="section-title mb-6">البرامج التدريبية</h2>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  fontFamily: 'Noto Kufi Arabic',
                  background: activeFilter === f.id ? '#c3f400' : 'rgba(255,255,255,0.06)',
                  color: activeFilter === f.id ? '#1a2600' : 'rgba(255,255,255,0.55)',
                  boxShadow: activeFilter === f.id ? '0 0 16px rgba(195,244,0,0.35)' : 'none',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSES.map((course) => (
            <Link href={`/academy/${course.slug}`} key={course.id} className={`block group${course.colSpan ? ' md:col-span-2 lg:col-span-1' : ''}`}>
              <div
                className="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500 h-full"
                style={{
                  background: course.dark ? 'rgba(10,10,10,0.95)' : 'rgba(18,18,18,0.95)',
                  boxShadow: hoveredCard === course.id
                    ? '0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(195,244,0,0.06), inset 0 1px 0 rgba(255,255,255,0.06)'
                    : '0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)',
                  transform: hoveredCard === course.id ? 'translateY(-4px)' : 'translateY(0)',
                  border: hoveredCard === course.id
                    ? '1px solid rgba(195,244,0,0.12)'
                    : '1px solid rgba(255,255,255,0.04)',
                }}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Decorative icon watermark */}
                <div
                  className="absolute top-0 right-0 p-5 pointer-events-none transition-opacity duration-300"
                  style={{ opacity: hoveredCard === course.id ? 0.15 : 0.06 }}
                  aria-hidden="true"
                >
                  <span style={{ fontSize: '4rem', lineHeight: 1 }}>{course.icon}</span>
                </div>

                {/* Card image (only for courses with hasImage) */}
                {course.hasImage && course.image && (
                  <div className="relative overflow-hidden" style={{ height: '196px', flexShrink: 0 }}>
                    {/* Play overlay */}
                    <div
                      className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300"
                      style={{
                        background: 'rgba(0,0,0,0.45)',
                        opacity: hoveredCard === course.id ? 1 : 0,
                      }}
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(195,244,0,0.15)',
                          boxShadow: '0 0 20px rgba(195,244,0,0.4)',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        <span style={{ fontSize: '1.5rem', color: '#c3f400' }}>▶</span>
                      </div>
                    </div>
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover object-center"
                      style={{
                        filter: hoveredCard === course.id ? 'grayscale(0%)' : 'grayscale(60%)',
                        transition: 'filter 0.7s ease',
                      }}
                    />
                  </div>
                )}

                {/* Card content */}
                <div className="flex flex-col flex-1 p-7">
                  {/* Tag */}
                  <span
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{
                      fontFamily: 'Inter, monospace',
                      color: course.tagColor,
                      letterSpacing: '0.15em',
                    }}
                  >
                    {course.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-bold text-xl mb-3 leading-snug"
                    style={{
                      fontFamily: "'Epilogue', 'Noto Kufi Arabic', sans-serif",
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed flex-1 mb-7"
                    style={{
                      fontFamily: "'Manrope', 'Noto Kufi Arabic', sans-serif",
                      color: 'rgba(255,255,255,0.45)',
                      lineHeight: 1.75,
                    }}
                  >
                    {course.description}
                  </p>

                  {/* CTA button (now a visual div instead of a button to avoid nested interactive elements) */}
                  <div
                    className="w-full py-3 rounded-xl font-bold text-sm uppercase tracking-tight transition-all duration-300 flex justify-center items-center"
                    style={{
                      fontFamily: "'Epilogue', 'Noto Kufi Arabic', sans-serif",
                      letterSpacing: '-0.01em',
                      background: hoveredCard === course.id ? '#c3f400' : 'transparent',
                      color: hoveredCard === course.id ? '#1a2600' : '#c3f400',
                      border: '1px solid rgba(195,244,0,0.25)',
                      boxShadow: hoveredCard === course.id ? '0 0 20px rgba(195,244,0,0.3)' : 'none',
                    }}
                  >
                    تفاصيل الدورة
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATION STRIP ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0e0e0e, #0a0a0a)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(195,244,0,0.04) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <p className="section-subtitle mb-4">ضمان الجودة</p>
          <h2 className="section-title mb-6">شهادات معتمدة دولياً</h2>
          <p
            className="text-white/45 text-base max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: 'Noto Kufi Arabic' }}
          >
            جميع برامجنا التدريبية معتمدة ومعترف بها دولياً، تمنحك شهادة احترافية مؤهلة للعمل في أرقى المؤسسات حول العالم.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '🏆', title: 'اعتماد دولي', desc: 'شهاداتنا معترف بها في أوروبا والخليج العربي' },
              { icon: '👨‍🏫', title: 'مدربون خبراء', desc: 'طاقم تدريسي من المحترفين بخبرة تتجاوز 15 عاماً' },
              { icon: '💼', title: 'فرص توظيف', desc: 'شبكة شراكات مع صالونات وفنادق فاخرة' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-8 text-center"
                style={{
                  background: 'rgba(18,18,18,0.8)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{item.icon}</span>
                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: 'Noto Kufi Arabic' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-white/40 text-sm leading-relaxed"
                  style={{ fontFamily: 'Noto Kufi Arabic' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/972527815671?text=أرغب في الاستفسار عن دورات الأكاديمية وشهاداتها"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button text-base"
          >
            سجّل الآن وابدأ رحلتك
          </a>
        </div>
      </section>
    </div>
  )
}
