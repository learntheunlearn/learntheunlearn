// src/components/Testimonials.jsx
import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Star, Quote, MessageSquareHeart } from 'lucide-react';

export default function Testimonials() {
  // Generate initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  // Assign a gradient based on index
  const gradients = [
    'from-purple-500 to-indigo-600',
    'from-amber-500 to-orange-600',
    'from-emerald-500 to-teal-600',
    'from-rose-500 to-pink-600',
    'from-cyan-500 to-blue-600',
  ];

  return (
    <section id="reviews" className="pt-[72px] pb-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-extrabold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <MessageSquareHeart className="w-4 h-4 text-purple-400" />
            <span>What Parents Say</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-white via-purple-100 to-indigo-200 bg-clip-text text-transparent tracking-tight">
            Testimonials
          </h2>
          <p className="mt-5 text-purple-200/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Real feedback from parents who trusted Learn The Unlearn to transform their children's learning journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="group relative bg-white/[0.06] backdrop-blur-md rounded-3xl p-8 border border-purple-400/15 hover:border-purple-400/30 transition-all duration-500 flex flex-col justify-between shadow-xl shadow-purple-950/20 hover:shadow-purple-900/30 hover:-translate-y-1"
            >
              {/* Top gradient accent bar */}
              <div className={`absolute top-0 left-8 right-8 h-[3px] rounded-b-full bg-gradient-to-r ${gradients[idx % gradients.length]} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-purple-400/40" />
              </div>

              {/* Review text */}
              <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed mb-8 flex-grow italic">
                "{item.quote}"
              </p>

              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Author */}
              <div className="pt-5 border-t border-purple-400/10 flex items-center gap-4">
                {/* Avatar with initials */}
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${gradients[idx % gradients.length]} flex items-center justify-center text-white font-bold text-sm shadow-lg shrink-0`}>
                  {getInitials(item.name)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base flex items-center gap-2 flex-wrap">
                    <span>{item.name}</span>
                    {item.country && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-400/30 text-purple-200 text-xs font-semibold shadow-sm">
                        <img
                          src={`https://flagcdn.com/w40/${item.flagCode}.png`}
                          alt={item.country}
                          className="w-4 h-auto rounded-sm inline-block object-contain"
                        />
                        <span>{item.country}</span>
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-purple-300/70">Parent</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
