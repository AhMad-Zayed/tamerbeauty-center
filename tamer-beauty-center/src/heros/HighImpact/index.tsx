'use client'
import React, { useEffect, useRef, useState } from 'react'

const SLIDES = [
  {
    id: 1,
    image: '/hero-clinic.png',
    tag: 'عيادة تامر',
    title: 'للتميز السريري',
    description:
      'صناعة الثقة من خلال العلم والدقة السريرية بأحدث تقنيات الليزر والعناية بالبشرة',
  },
  {
    id: 2,
    image: '/hero-academy.png',
    tag: 'أكاديمية تامر',
    title: 'صناعة القادة',
    description:
      'برامج تدريب مهني عالمية في التجميل، الأمان الرقمي، والتسويق لرفع كفاءة أعمالكم',
  },
  {
    id: 3,
    image: '/hero-groom.png',
    tag: 'تجهيز العريس',
    title: 'بلمسة VIP',
    description:
      'رحلة شهر كامل من التحول والاهتمام بالتفاصيل لتكون في أوج تألقك وثقتك في ليلة العمر',
  },
]

const SLIDE_INTERVAL = 6000

export const HighImpactHero: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [textVisible, setTextVisible] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (index: number) => {
    if (isAnimating || index === current) return
    setIsAnimating(true)
    setTextVisible(false)
    setTimeout(() => {
      setCurrent(index)
      setTextVisible(true)
      setIsAnimating(false)
    }, 600)
  }

  const goNext = () => goTo((current + 1) % SLIDES.length)
  const goPrev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length)

  useEffect(() => {
    intervalRef.current = setInterval(goNext, SLIDE_INTERVAL)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [current])

  const slide = SLIDES[current]

  return (
    <section
      className="relative min-h-[100svh] flex items-end overflow-hidden"
      style={{ marginTop: '-72px', paddingTop: '72px' }}
      dir="rtl"
      aria-label="عرض الصور الرئيسي"
    >
      {/* ── Slide backgrounds (crossfade) ── */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 z-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)',
          }}
          aria-hidden={i !== current}
        >
          {/* Background image with grayscale filter */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${s.image})`,
              filter: 'grayscale(70%) brightness(0.45)',
              transform: i === current ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 8s ease-out',
            }}
          />
          {/* Heavy cinematic vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 70% at 50% 40%, transparent 20%, rgba(5,5,5,0.5) 60%, rgba(5,5,5,0.95) 100%)',
            }}
          />
          {/* Bottom gradient */}
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: '70%',
              background:
                'linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.7) 40%, transparent 100%)',
            }}
          />
          {/* Top gradient for nav readability */}
          <div
            className="absolute inset-x-0 top-0"
            style={{
              height: '30%',
              background:
                'linear-gradient(to bottom, rgba(5,5,5,0.6) 0%, transparent 100%)',
            }}
          />
        </div>
      ))}

      {/* ── Foreground content ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-2xl">

          {/* Slide tag */}
          <div
            className="mb-5"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              transitionDelay: '0.1s',
            }}
          >
            <span className="neon-badge text-sm tracking-widest uppercase">
              <span
                className="w-1.5 h-1.5 rounded-full animate-[urgency-blink_1.5s_ease-in-out_infinite]"
                style={{ backgroundColor: '#c3f400' }}
              />
              {slide.tag}
            </span>
          </div>

          {/* Main title */}
          <h1
            className="section-title mb-4"
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              transitionDelay: '0.2s',
            }}
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p
            className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{
              fontFamily: 'Noto Kufi Arabic, sans-serif',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              transitionDelay: '0.35s',
            }}
          >
            {slide.description}
          </p>

          {/* CTAs */}
          <div
            className="flex items-center gap-4 flex-wrap"
            style={{
              opacity: textVisible ? 1 : 0,
              transition: 'opacity 0.6s ease',
              transitionDelay: '0.5s',
            }}
          >
            <a
              href="https://wa.me/972527815671?text=أرغب في حجز موعد"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button text-base"
            >
              احجز موعدك الآن
            </a>
            <a href="#services" className="ghost-button text-base">
              استكشف خدماتنا
              <span style={{ color: '#c3f400', fontSize: '1.1rem' }}>←</span>
            </a>
          </div>
        </div>

        {/* ── Slide controls ── */}
        <div
          className="flex items-center justify-between mt-14"
          style={{
            opacity: textVisible ? 1 : 0,
            transition: 'opacity 0.5s ease',
            transitionDelay: '0.6s',
          }}
        >
          {/* Dot indicators */}
          <div className="flex items-center gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`الانتقال إلى الشريحة ${i + 1}`}
                className="transition-all duration-400 rounded-full"
                style={{
                  width: i === current ? '2.5rem' : '0.5rem',
                  height: '0.5rem',
                  backgroundColor: i === current ? '#c3f400' : 'rgba(255,255,255,0.25)',
                  boxShadow: i === current ? '0 0 10px rgba(195,244,0,0.5)' : 'none',
                }}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              aria-label="السابق"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.4)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(195,244,0,0.15)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="التالي"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.4)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(195,244,0,0.15)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Slide counter ── */}
      <div
        className="absolute top-1/2 left-6 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
        style={{ transform: 'translateY(-50%) rotate(90deg)', transformOrigin: 'center' }}
      >
        <span
          style={{
            fontFamily: 'Inter, monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  )
}
