'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

const NAV_ITEMS = [
  { label: 'الرئيسية', href: '/' },
  { label: 'الخدمات', href: '#services' },
  { label: 'العروض', href: '#offers' },
  { label: 'الأكاديمية', href: '/academy' },
  { label: 'المتجر', href: '/store' },
]

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(5,5,5,0.88)'
            : 'rgba(5,5,5,0.55)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          boxShadow: scrolled
            ? '0 1px 0 rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.7)'
            : '0 1px 0 rgba(255,255,255,0.03)',
        }}
        data-theme="dark"
      >
        <div
          className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between"
          style={{ height: '72px' }}
        >
          {/* ── CTA — احجز موعدك (rightmost in RTL) ── */}
          <a
            href="https://wa.me/972527815671?text=أرغب في حجز موعد"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button text-sm hidden md:inline-flex"
            aria-label="احجز موعدك"
          >
            احجز موعدك
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-8" dir="rtl" aria-label="القائمة الرئيسية">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 group"
              >
                {item.label}
                <span
                  className="absolute -bottom-1 right-0 w-0 h-[1.5px] bg-primary-neon group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          {/* ── Logotype (leftmost in RTL = LTR right) ── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span
              className="text-xl font-bold text-white leading-none"
              style={{ fontFamily: 'Inter, monospace', letterSpacing: '-0.03em' }}
            >
              TAMER
              <span style={{ color: '#c3f400' }}> BEAUTY</span>
            </span>
            {/* Neon dot accent */}
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0 animate-[neon-pulse_2s_ease-in-out_infinite]"
              style={{ backgroundColor: '#c3f400' }}
              aria-hidden="true"
            />
          </Link>

          {/* ── Mobile: Hamburger ── */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.06)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-5 h-0.5 bg-white rounded-full transition-all duration-300"
              style={{ transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}
            />
            <span
              className="block w-5 h-0.5 bg-white rounded-full transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 bg-white rounded-full transition-all duration-300"
              style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-500"
        style={{
          pointerEvents: menuOpen ? 'all' : 'none',
          opacity: menuOpen ? 1 : 0,
        }}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(5,5,5,0.92)', backdropFilter: 'blur(20px)' }}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className="absolute inset-y-0 right-0 w-full max-w-xs flex flex-col pt-24 pb-8 px-8"
          style={{
            background: 'rgba(10,10,10,0.98)',
            boxShadow: '-8px 0 32px rgba(0,0,0,0.8)',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <nav className="flex flex-col gap-1" dir="rtl">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 py-4 text-xl font-bold text-white/80 hover:text-white transition-colors"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => setMenuOpen(false)}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: '#c3f400' }}
                />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <a
              href="https://wa.me/972527815671?text=أرغب في حجز موعد"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button w-full text-base"
              onClick={() => setMenuOpen(false)}
            >
              احجز موعدك
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
