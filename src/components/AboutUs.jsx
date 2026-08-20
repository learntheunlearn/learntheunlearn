// src/components/AboutUs.jsx
import React from 'react';
import { Award, Compass, Globe, Heart, Sparkles, Target, Users, BookOpen, Lightbulb } from 'lucide-react';

/* ─── Shared inline SVG decorative illustrations (same as Curriculum page) ─── */
const IllustrationBook = ({ style }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <rect x="8" y="10" width="52" height="72" rx="5" fill="#7C3AED" opacity="0.28"/>
    <rect x="12" y="10" width="4" height="72" rx="2" fill="#5B21B6" opacity="0.38"/>
    <rect x="20" y="22" width="32" height="3" rx="1.5" fill="#7C3AED" opacity="0.40"/>
    <rect x="20" y="30" width="28" height="3" rx="1.5" fill="#7C3AED" opacity="0.40"/>
    <rect x="20" y="38" width="30" height="3" rx="1.5" fill="#7C3AED" opacity="0.40"/>
    <rect x="20" y="46" width="24" height="3" rx="1.5" fill="#7C3AED" opacity="0.40"/>
    <rect x="62" y="18" width="46" height="64" rx="5" fill="#8B5CF6" opacity="0.22"/>
    <rect x="66" y="18" width="4" height="64" rx="2" fill="#6D28D9" opacity="0.30"/>
    <rect x="74" y="30" width="26" height="3" rx="1.5" fill="#8B5CF6" opacity="0.35"/>
    <rect x="74" y="38" width="22" height="3" rx="1.5" fill="#8B5CF6" opacity="0.35"/>
    <rect x="74" y="46" width="24" height="3" rx="1.5" fill="#8B5CF6" opacity="0.35"/>
  </svg>
);

const IllustrationPencil = ({ style }) => (
  <svg viewBox="0 0 40 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <rect x="10" y="10" width="20" height="120" rx="4" fill="#7C3AED" opacity="0.26"/>
    <rect x="10" y="10" width="20" height="20" rx="4" fill="#A78BFA" opacity="0.42"/>
    <polygon points="10,130 30,130 20,155" fill="#FCD34D" opacity="0.50"/>
    <polygon points="14,138 26,138 20,155" fill="#F59E0B" opacity="0.42"/>
    <rect x="10" y="25" width="20" height="3" fill="#6D28D9" opacity="0.22"/>
  </svg>
);

const IllustrationAPlus = ({ style }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <text x="2" y="72" fontSize="80" fontWeight="900" fill="#7C3AED" opacity="0.28" fontFamily="serif">A</text>
    <text x="72" y="28" fontSize="32" fontWeight="900" fill="#F59E0B" opacity="0.42" fontFamily="sans-serif">+</text>
  </svg>
);

const IllustrationMathSymbols = ({ style }) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <text x="4"  y="50"  fontSize="44" fontWeight="700" fill="#7C3AED" opacity="0.26" fontFamily="monospace">∑</text>
    <text x="60" y="50"  fontSize="44" fontWeight="700" fill="#8B5CF6" opacity="0.26" fontFamily="monospace">π</text>
    <text x="4"  y="110" fontSize="44" fontWeight="700" fill="#6D28D9" opacity="0.22" fontFamily="monospace">∞</text>
    <text x="60" y="110" fontSize="44" fontWeight="700" fill="#A78BFA" opacity="0.22" fontFamily="monospace">√</text>
    <text x="112" y="80" fontSize="44" fontWeight="700" fill="#7C3AED" opacity="0.20" fontFamily="monospace">÷</text>
  </svg>
);

const IllustrationCompass = ({ style }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <line x1="50" y1="10" x2="20" y2="100" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" opacity="0.30"/>
    <line x1="50" y1="10" x2="80" y2="100" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" opacity="0.30"/>
    <circle cx="50" cy="10" r="7" fill="#A78BFA" opacity="0.42"/>
    <path d="M22 90 Q50 110 78 90" stroke="#8B5CF6" strokeWidth="3" fill="none" opacity="0.28" strokeLinecap="round"/>
    <circle cx="20" cy="100" r="4" fill="#F59E0B" opacity="0.38"/>
    <circle cx="80" cy="100" r="4" fill="#7C3AED" opacity="0.38"/>
  </svg>
);

const IllustrationRuler = ({ style }) => (
  <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <rect x="0" y="8" width="200" height="26" rx="5" fill="#8B5CF6" opacity="0.22"/>
    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((i) => (
      <line key={i} x1={10 + i * 12} y1="8" x2={10 + i * 12} y2={i % 4 === 0 ? "20" : "14"} stroke="#6D28D9" strokeWidth="1.5" opacity="0.35"/>
    ))}
  </svg>
);

const IllustrationStar = ({ style }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <polygon points="30,4 36,22 56,22 41,34 47,52 30,40 13,52 19,34 4,22 24,22" fill="#F59E0B" opacity="0.38"/>
  </svg>
);

const IllustrationDots = ({ style }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    {[0,1,2,3,4].map(row =>
      [0,1,2,3,4].map(col => (
        <circle key={`${row}-${col}`} cx={12 + col*24} cy={12 + row*24} r="3.5" fill="#7C3AED" opacity={(row+col) % 3 === 0 ? "0.30" : "0.16"}/>
      ))
    )}
  </svg>
);

export default function AboutUs() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>

      {/* ─── FIXED EDUCATIONAL BACKGROUND LAYER ─── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {/* Bright lavender-to-white base gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #ede9fe 0%, #f5f3ff 25%, #ffffff 50%, #eef2ff 75%, #faf5ff 100%)',
        }} />

        {/* Top-left vivid purple glow */}
        <div style={{
          position: 'absolute', top: '-80px', left: '-80px',
          width: '480px', height: '480px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.38) 0%, rgba(139,92,246,0.12) 55%, transparent 80%)',
        }} />
        {/* Top-right indigo glow */}
        <div style={{
          position: 'absolute', top: '-40px', right: '-40px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.28) 0%, rgba(139,92,246,0.10) 55%, transparent 80%)',
        }} />
        {/* Mid-left accent */}
        <div style={{
          position: 'absolute', top: '40%', left: '-60px',
          width: '280px', height: '280px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,181,253,0.30) 0%, transparent 70%)',
        }} />
        {/* Bottom-center glow */}
        <div style={{
          position: 'absolute', bottom: '-60px', left: '30%',
          width: '600px', height: '380px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.20) 0%, transparent 70%)',
        }} />
        {/* Bottom-right accent */}
        <div style={{
          position: 'absolute', bottom: '8%', right: '-30px',
          width: '280px', height: '280px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,181,253,0.28) 0%, transparent 70%)',
        }} />

        {/* ── SVG Illustrations ── */}
        <IllustrationBook style={{ position: 'absolute', top: '60px', left: '16px', width: '200px' }} />
        <IllustrationRuler style={{ position: 'absolute', top: '205px', left: '8px', width: '180px', transform: 'rotate(-12deg)' }} />
        <IllustrationAPlus style={{ position: 'absolute', top: '28px', right: '28px', width: '160px' }} />
        <IllustrationMathSymbols style={{ position: 'absolute', top: '175px', right: '8px', width: '200px' }} />
        <IllustrationPencil style={{ position: 'absolute', top: '36%', left: '28px', width: '42px', transform: 'rotate(12deg)' }} />
        <IllustrationCompass style={{ position: 'absolute', top: '42%', right: '32px', width: '100px' }} />
        <IllustrationDots style={{ position: 'absolute', bottom: '60px', left: '18px', width: '130px' }} />
        <IllustrationStar style={{ position: 'absolute', bottom: '185px', left: '78px', width: '60px' }} />
        <IllustrationMathSymbols style={{ position: 'absolute', bottom: '38px', right: '18px', width: '170px' }} />
        <IllustrationStar style={{ position: 'absolute', bottom: '198px', right: '76px', width: '52px' }} />
        <IllustrationDots style={{ position: 'absolute', top: '52%', left: '6%', width: '88px', opacity: 0.65 }} />
        <IllustrationDots style={{ position: 'absolute', top: '62%', right: '5%', width: '88px', opacity: 0.60 }} />
        <IllustrationRuler style={{ position: 'absolute', top: '86px', left: '30%', width: '155px', opacity: 0.50, transform: 'rotate(2deg)' }} />
      </div>

      {/* ─── SCROLLABLE CONTENT LAYER ─── */}
      <div style={{ position: 'relative', zIndex: 1, paddingTop: '112px', paddingBottom: '96px' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-black uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-700" />
              <span>Our Journey &amp; Philosophy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-purple-950 tracking-tight leading-tight">
              About Learn The Unlearn
            </h1>
            <p className="mt-6 text-slate-700 text-lg sm:text-xl leading-relaxed font-medium">
              Learn The Unlearn is a global online mathematics tutoring institute committed to making mathematics clear, engaging and achievable for every student.
            </p>
          </div>

          {/* Story Section: Since 2021 */}
          <div
            className="rounded-3xl p-8 sm:p-12 mb-10 relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.82)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1.5px solid rgba(167,139,250,0.30)',
              boxShadow: '0 4px 24px rgba(109,40,217,0.08)',
            }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-extrabold mb-4">
                <Compass className="w-4 h-4 text-amber-600" />
                <span>Started in 2021</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">Our Journey</h2>
              <div className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  Our teaching journey started in 2021 with online mathematics classes for students in the United States. The experience of teaching students from another country helped us understand the importance of flexible teaching, curriculum awareness, cultural understanding and personalized academic support.
                </p>
                <p>
                  Today, we are opening <strong className="text-purple-900 font-bold">Learn The Unlearn</strong> to students worldwide. Learners from any country can connect with our Indian mathematics teachers and receive structured online instruction from the comfort of their homes.
                </p>
              </div>
            </div>
          </div>

          {/* Two Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

            {/* Card 1: Personalized Attention */}
            <div
              className="rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              style={{
                background: 'rgba(237,233,254,0.80)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1.5px solid rgba(167,139,250,0.35)',
                boxShadow: '0 4px 20px rgba(109,40,217,0.08)',
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">Personalized Attention</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We understand that every student has a different learning style, academic background and level of confidence. Our teachers adapt their lessons to meet individual needs, identify learning gaps and guide students patiently through each concept.
                </p>
              </div>
            </div>

            {/* Card 2: Philosophy */}
            <div
              className="rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              style={{
                background: 'rgba(255,250,237,0.80)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1.5px solid rgba(251,191,36,0.35)',
                boxShadow: '0 4px 20px rgba(109,40,217,0.08)',
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-5">
                  <Lightbulb className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">The "Learn The Unlearn" Philosophy</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  The name <strong className="text-purple-900 font-bold">Learn The Unlearn</strong> reflects our educational philosophy. We help students unlearn their fear of mathematics, move beyond limiting beliefs and develop more effective ways of thinking and learning.
                </p>
              </div>
            </div>
          </div>

          {/* Dark card: Core Pedagogy (kept as-is — dark card looks great over the light BG) */}
          <div className="bg-gradient-to-br from-purple-900 via-purple-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-800/80 border border-purple-600/50 text-purple-200 text-xs font-bold uppercase tracking-wider mb-5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Core Pedagogy</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Understanding Rather Than Memorization
              </h2>
              <p className="text-purple-100 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                We focus on understanding rather than memorization. Students learn not only how to solve a problem but also why the method works and how to apply it independently.
              </p>
              <div className="pt-6 border-t border-purple-800/60">
                <h3 className="text-lg font-bold text-amber-300 mb-2">Our Goal</h3>
                <p className="text-purple-200 text-sm sm:text-base leading-relaxed">
                  Our goal is to help students become confident, curious and responsible learners who are prepared for both academic assessments and future challenges.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
