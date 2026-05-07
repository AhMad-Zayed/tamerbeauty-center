'use client'
import React from 'react'
import { Star, MessageCircle } from 'lucide-react'

export const ReviewsBlockComponent: React.FC<any> = ({ heading, reviews }) => {
  if (!reviews || reviews.length === 0) return null

  return (
    <section className="py-32 bg-[#0a0a0a]" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 relative">
          <MessageCircle size={80} className="text-white/5 absolute left-1/2 -translate-x-1/2 -top-10" />
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white relative z-10">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((relationData: any, i: number) => {
            const review = relationData.value || relationData
            if (!review?.name) return null
            
            return (
              <div
                key={i}
                className="bg-[#050505] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#c3f400]/30 transition-colors"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(review.rating || 5)].map((_, idx) => (
                    <Star key={idx} size={20} className="text-[#c3f400] fill-[#c3f400]" />
                  ))}
                </div>
                <p className="text-xl text-neutral-300 leading-relaxed font-medium mb-10">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-black text-xl text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    {review.service && (
                      <span className="text-xs text-[#c3f400] font-bold tracking-wider">
                        {review.service}
                      </span>
                    )}
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
