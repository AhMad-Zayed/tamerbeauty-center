'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Course } from '@/data/courses'

interface Props {
  course: Course
}

export const CourseLandingClient: React.FC<Props> = ({ course }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    window.open(`https://wa.me/972527815671?text=أرغب في الاستفسار عن والتسجيل في دورة: ${course.title}`, '_blank')
  }

  const handlePhone = () => {
    window.open('tel:+972527815671', '_self')
  }

  return (
    <div
      dir="rtl"
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        fontFamily: "'Noto Kufi Arabic', 'Manrope', sans-serif",
        color: '#ffffff',
      }}
    >
      {/* ── HERO SECTION ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '85vh', paddingTop: '120px' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src={course.heroImage}
            alt={course.title}
            fill
            className="object-cover object-center mix-blend-luminosity"
            style={{ filter: 'opacity(0.4) contrast(1.2)' }}
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.8) 40%, rgba(10,10,10,0.4) 100%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 flex flex-col justify-center h-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-3 text-sm text-white/50 mb-8 font-medium">
            <Link href="/academy" className="hover:text-white transition-colors">الأكاديمية</Link>
            <span>/</span>
            <span style={{ color: course.tagColor }}>{course.tag}</span>
          </nav>

          <div className="max-w-4xl">
            <span
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '2rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              {course.icon}
            </span>
            <h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight"
              style={{ fontFamily: "'Epilogue', 'Noto Kufi Arabic', sans-serif" }}
            >
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed max-w-3xl">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={handleWhatsApp}
                className="px-10 py-5 rounded-xl font-bold text-lg flex items-center gap-3 transition-all duration-300"
                style={{
                  background: '#c3f400',
                  color: '#1a2600',
                  boxShadow: '0 0 30px rgba(195,244,0,0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(195,244,0,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(195,244,0,0.2)'
                }}
              >
                احجز مقعدك الآن (واتساب)
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
              <button
                onClick={handlePhone}
                className="px-10 py-5 rounded-xl font-bold text-lg flex items-center gap-3 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#ffffff',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              >
                الاتصال هاتفياً
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSE INFO STRIP ── */}
      <div className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/5">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#c3f400]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p className="text-sm text-white/40 mb-1">مدة البرنامج</p>
              <p className="font-bold text-lg">{course.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 md:px-8 pt-8 md:pt-0">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#c3f400]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div>
              <p className="text-sm text-white/40 mb-1">المستوى</p>
              <p className="font-bold text-lg">{course.level}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 md:px-8 pt-8 md:pt-0">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#c3f400]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div>
              <p className="text-sm text-white/40 mb-1">الشهادة</p>
              <p className="font-bold text-lg">{course.certification}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Col (Main content) */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* Target Audience */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-[#c3f400] rounded-full"></span>
              لمن هذا البرنامج؟
            </h2>
            <p className="text-lg text-white/60 leading-relaxed bg-white/5 p-8 rounded-2xl border border-white/5">
              {course.targetAudience}
            </p>
          </section>

          {/* Curriculum */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-[#c3f400] rounded-full"></span>
              ماذا ستتعلم؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.curriculum.map((module, idx) => (
                <div key={idx} className="bg-[#121212] p-8 rounded-2xl border border-white/5 shadow-2xl">
                  <h3 className="text-xl font-bold mb-6 text-[#c3f400]">{module.title}</h3>
                  <ul className="space-y-4">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70">
                        <svg className="w-5 h-5 text-[#c3f400] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Col (Sidebar) */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-8">
            
            {/* Benefits */}
            <div className="bg-[#121212] p-8 rounded-2xl border border-[#c3f400]/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c3f400] opacity-5 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-6">المميزات الإضافية</h3>
              <ul className="space-y-5">
                {course.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-[#c3f400]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#c3f400]"></div>
                    </div>
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-center text-sm text-white/40 mb-4">المقاعد محدودة لضمان جودة التدريب</p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-4 rounded-xl font-bold text-base transition-all duration-300"
                  style={{
                    background: '#c3f400',
                    color: '#1a2600',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                >
                  استفسر الآن
                </button>
              </div>
            </div>

            {/* Support / Contact */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 text-center">
              <p className="text-white/60 mb-2">لديك استفسار إضافي؟</p>
              <button onClick={handlePhone} className="text-[#c3f400] font-bold text-xl hover:underline">
                052-7815671
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── STICKY BOTTOM BAR (MOBILE) ── */}
      <div 
        className={`fixed bottom-0 left-0 right-0 p-4 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 z-50 md:hidden transition-transform duration-500 flex gap-3 ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <button
          onClick={handleWhatsApp}
          className="flex-1 py-3 rounded-lg font-bold text-sm bg-[#c3f400] text-[#1a2600]"
        >
          تسجيل واتساب
        </button>
        <button
          onClick={handlePhone}
          className="w-12 h-[44px] rounded-lg border border-white/20 flex items-center justify-center bg-white/5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </button>
      </div>

    </div>
  )
}
