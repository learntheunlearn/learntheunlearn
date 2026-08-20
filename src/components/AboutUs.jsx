// src/components/AboutUs.jsx
import React from 'react';
import { Award, Compass, Globe, Heart, Sparkles, Target, Users, BookOpen, Lightbulb } from 'lucide-react';
import { EduBackground } from './CurriculumPage';

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

      {/* Shared educational background from CurriculumPage */}
      <EduBackground />

      {/* Scrollable Content — original card styles preserved */}
      <div className="pt-28 pb-24" style={{ position: 'relative', zIndex: 1 }}>
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

          {/* Story Section */}
          <div className="bg-white rounded-3xl border border-purple-100 p-8 sm:p-12 shadow-sm mb-10 relative overflow-hidden">
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
            <div className="bg-white rounded-3xl border border-purple-100 p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-purple-200 transition-all duration-300">
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

            <div className="bg-white rounded-3xl border border-purple-100 p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-purple-200 transition-all duration-300">
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

          {/* Dark card: Core Pedagogy */}
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
