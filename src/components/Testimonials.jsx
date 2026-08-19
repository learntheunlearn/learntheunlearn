// src/components/Testimonials.jsx
import React from 'react';
import { TESTIMONIALS_DATA, STATS_DATA } from '../data/testimonialsData';
import { Star, TrendingUp, Users } from 'lucide-react';

export default function Testimonials({ onEnquireClick }) {
  return (
    <section id="reviews" className="py-20 relative bg-white border-t border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Key Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
              <div className="text-2xl sm:text-4xl font-black text-purple-950 mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[10px] text-purple-800 font-bold mt-1">
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Users className="w-4 h-4 text-purple-700" />
            <span>Parent Trust & Verified Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-purple-950 tracking-tight">
            Loved by Parents & Students Across Grade 1 to 12
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Here is what parents say after switching from conventional school tuition to LEARNTHEUNLEARN’s visual speed math approach.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-3xl p-8 border border-purple-100 glass-card-hover-light relative flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-300"
                    />
                    <div>
                      <h4 className="font-extrabold text-base text-slate-900">{item.name}</h4>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 border border-purple-200 text-purple-900 font-black text-xs rounded-full">
                    {item.grade}
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-black text-amber-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>{item.metrics}</span>
                </div>
                <button
                  onClick={onEnquireClick}
                  className="text-xs font-bold text-purple-800 hover:text-purple-950 underline"
                >
                  Enquire for {item.grade}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
