// src/components/HomeSection.jsx
import React from 'react';
import { Sparkles, GraduationCap, Globe, BookOpen, CheckCircle2, ArrowRight, Award, Compass, HeartHandshake } from 'lucide-react';

export default function HomeSection() {
  const handleCurriculumNav = (type) => {
    window.location.hash = `#/curriculum/${type}`;
  };

  return (
    <div className="pt-[72px] pb-24 bg-gradient-to-b from-purple-50/30 via-slate-50 to-white min-h-screen">
      
      {/* 1. Full-Window-Width Edge-to-Edge Banner */}
      <div className="w-full bg-slate-900 overflow-hidden shadow-xl border-b border-purple-100/60">
        <img
          src="/banner.png"
          alt="Learn The Unlearn - Global Online Mathematics Tutoring"
          className="w-full h-auto object-cover block mx-auto max-h-[85vh]"
          loading="eager"
        />
      </div>

      {/* 2. Elevated Welcome Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        
        {/* Welcome Card Container */}
        <section id="welcome" className="relative overflow-hidden bg-white rounded-3xl sm:rounded-[36px] border border-purple-100/80 p-8 sm:p-14 lg:p-20 shadow-xl shadow-purple-900/5">
          
          {/* Subtle decorative background gradients */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-xs font-black uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-700" />
              <span>Learn The Unlearn</span>
            </div>

            {/* Welcome Heading */}
            <h1 className="text-4xl sm:text-6xl font-black text-purple-950 tracking-tight leading-none mb-8">
              Welcome
            </h1>

            {/* Welcome Body Description */}
            <div className="text-slate-700 text-lg sm:text-2xl leading-relaxed font-medium space-y-6 text-center sm:text-center">
              <p>
                Welcome to <span className="text-purple-900 font-extrabold underline decoration-purple-300 underline-offset-4">Learn The Unlearn</span>, an online mathematics tutoring platform connecting students worldwide with skilled and dedicated Indian teachers.
              </p>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                We provide personalized online mathematics classes designed according to each student’s grade, curriculum, learning level and academic goals. Through clear explanations, interactive lessons and structured practice, we help students understand mathematical concepts, overcome learning difficulties and solve problems confidently.
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 pt-12 border-t border-purple-100/70 text-left">
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-purple-50 hover:border-purple-200 hover:bg-purple-50/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-purple-800" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1.5">Worldwide Reach</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Connecting learners across the globe with premier one-on-one attention.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-purple-50 hover:border-purple-200 hover:bg-purple-50/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1.5">Expert Indian Faculty</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Dedicated math educators specializing in clear conceptual pedagogy.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-purple-50 hover:border-purple-200 hover:bg-purple-50/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Compass className="w-6 h-6 text-purple-800" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1.5">Custom Curriculum</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Tailored specifically to US, UK, and International mathematical standards.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-purple-50 hover:border-purple-200 hover:bg-purple-50/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1.5">Confidence & Mastery</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Overcoming learning barriers with structured visual problem-solving.</p>
              </div>

            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              <button
                onClick={() => handleCurriculumNav('us')}
                className="px-8 py-4 rounded-2xl bg-purple-900 hover:bg-purple-950 text-white font-extrabold text-sm shadow-lg shadow-purple-950/20 hover:-translate-y-0.5 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore US Curriculum</span>
                <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleCurriculumNav('uk')}
                className="px-8 py-4 rounded-2xl bg-white hover:bg-purple-50 text-purple-950 border border-purple-200 font-extrabold text-sm shadow-sm hover:-translate-y-0.5 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore UK Curriculum</span>
                <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
