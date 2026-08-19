// src/components/FounderBioSection.jsx
import React from 'react';
import { Award, BookOpen, Sparkles, Star, CheckCircle, GraduationCap, Heart, Quote, ArrowRight } from 'lucide-react';

export default function FounderBioSection({ onEnquireClick }) {
  return (
    <section id="founder-bio" className="py-20 relative bg-gradient-to-b from-purple-50/60 via-white to-slate-50 border-t border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <GraduationCap className="w-4 h-4 text-purple-700" />
            <span>Academic Leadership & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-purple-950 tracking-tight">
            Meet Our Founder & Lead Educator
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Personalized mathematical mentorship crafted with academic rigor and passion for visual learning.
          </p>
        </div>

        {/* Bio Card Grid */}
        <div className="glass-card-light rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-xl max-w-5xl mx-auto relative overflow-hidden bg-white">
          
          {/* Subtle Background Accent Blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Allocated Profile Pic Area & Required Bio Text */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              
              {/* Profile Picture Frame Container */}
              <div className="relative group mb-6">
                
                {/* Outer Glowing Gradient Ring */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-tr from-purple-800 via-indigo-600 to-amber-400 p-[4px] shadow-2xl shadow-purple-900/20 group-hover:scale-[1.02] transition-transform">
                  
                  {/* Inner Image Container */}
                  <div className="w-full h-full bg-purple-900 rounded-[22px] overflow-hidden relative flex items-center justify-center">
                    
                    {/* Founder Avatar / Image Placeholder */}
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                      alt="Priyadharshini M.Sc. Math, B.Ed."
                      className="w-full h-full object-cover object-top"
                    />

                    {/* Official Brand Logo Watermark Overlay */}
                    <div className="absolute bottom-2 right-2 w-10 h-10 rounded-xl bg-[#51247A] p-1 border border-white/40 shadow-lg">
                      <img src="/logo.png" alt="LTU Logo" className="w-full h-full object-contain" />
                    </div>

                  </div>
                </div>

                {/* Verified Mentor Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full border border-purple-200 shadow-md text-xs font-black text-purple-900 flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                  <Award className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Master Educator</span>
                </div>
              </div>

              {/* Exact Required User Text below profile picture */}
              <div className="mt-2 text-center flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-black text-purple-950 tracking-tight">
                  Priyadharshini M.Sc. Math, B.Ed.
                </h3>

                {/* Motto Pill */}
                <div className="mt-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20">
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Motto: Learn Beyond Limits</span>
                </div>
              </div>

            </div>

            {/* Right Column: Founder's Story & Teaching Philosophy */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Quote Block */}
              <div className="bg-purple-50/80 p-6 rounded-2xl border border-purple-100 relative">
                <Quote className="w-8 h-8 text-purple-300 absolute top-3 right-4 opacity-50 pointer-events-none" />
                <p className="text-sm sm:text-base text-purple-950 font-semibold italic leading-relaxed">
                  "Mathematics is not a set of rigid formulas to be memorized for exams. It is a universal visual language of patterns and intuition. When students unlearn fear, they begin to Learn Beyond Limits."
                </p>
              </div>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  With advanced post-graduate degrees in Pure & Applied Mathematics (<strong className="text-purple-950">M.Sc. Math</strong>) and Professional Pedagogy (<strong className="text-purple-950">B.Ed.</strong>), Priyadharshini founded <strong className="text-purple-900">LEARNTHEUNLEARN</strong> to revolutionize how students approach mathematics from Grade 1 through Grade 12.
                </p>
                <p>
                  Her signature teaching framework blends visual spatial modeling, speed mental arithmetic techniques, and step-by-step conceptual mastery designed for long-term retention.
                </p>
              </div>

              {/* Credentials & Credentials List */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-purple-700 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">100% Concept First Pedagogy</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-purple-700 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Grade 1 to 12 Mastery</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-purple-700 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Olympiad & Board Prep</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-purple-700 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">1-on-1 Mentorship</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onEnquireClick}
                  className="px-6 py-3.5 bg-purple-800 hover:bg-purple-900 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-purple-900/20 transition-all flex items-center gap-2"
                >
                  <span>Book Free Session with Priyadharshini</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
