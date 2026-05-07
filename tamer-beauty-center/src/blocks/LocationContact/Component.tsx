'use client'
import React from 'react'
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react'

export const LocationContactComponent: React.FC<any> = ({ 
  heading, 
  locationTitle, locationText, 
  contactTitle, contactText, 
  hoursTitle, weekdaysText, weekdaysHours, fridayText, fridayHours,
  mapEmbedUrl
}) => {
  return (
    <section className="py-32 bg-[#050505] border-t border-white/5" dir="rtl">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-8xl font-black mb-20 tracking-tighter text-white text-center">
          {heading}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="bg-[#0a0a0a] p-12 rounded-[3rem] border border-white/5 space-y-12">
            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="text-[#c3f400]" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{locationTitle}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">{locationText}</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Phone className="text-[#c3f400]" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{contactTitle}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed" dir="ltr">{contactText}</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Clock className="text-[#c3f400]" size={28} />
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-bold text-white mb-4">{hoursTitle}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-neutral-400 text-lg border-b border-white/5 pb-3">
                    <span>{weekdaysText}</span>
                    <span className="font-bold text-white">{weekdaysHours}</span>
                  </div>
                  <div className="flex justify-between items-center text-neutral-400 text-lg">
                    <span>{fridayText}</span>
                    <span className="font-bold text-red-400">{fridayHours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex gap-4">
              <button className="flex-1 py-4 bg-white/5 hover:bg-[#c3f400] hover:text-black text-white rounded-2xl flex items-center justify-center gap-3 transition-colors font-bold">
                <Instagram size={20} /> Instagram
              </button>
              <button className="flex-1 py-4 bg-white/5 hover:bg-[#c3f400] hover:text-black text-white rounded-2xl flex items-center justify-center gap-3 transition-colors font-bold">
                <Facebook size={20} /> Facebook
              </button>
            </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden border border-white/5 h-[600px] grayscale hover:grayscale-0 transition-all duration-1000">
            {mapEmbedUrl && (
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
