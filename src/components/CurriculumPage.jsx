// src/components/CurriculumPage.jsx
import React from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

/* ─────────────────────────────────────────────
   Inline SVG decorative illustrations
   All purely decorative, pointer-events:none
───────────────────────────────────────────── */
const IllustrationBook = ({ style }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <rect x="8" y="10" width="52" height="72" rx="5" fill="#7C3AED" opacity="0.18"/>
    <rect x="12" y="10" width="4" height="72" rx="2" fill="#5B21B6" opacity="0.25"/>
    <rect x="20" y="22" width="32" height="3" rx="1.5" fill="#7C3AED" opacity="0.30"/>
    <rect x="20" y="30" width="28" height="3" rx="1.5" fill="#7C3AED" opacity="0.30"/>
    <rect x="20" y="38" width="30" height="3" rx="1.5" fill="#7C3AED" opacity="0.30"/>
    <rect x="20" y="46" width="24" height="3" rx="1.5" fill="#7C3AED" opacity="0.30"/>
    <rect x="62" y="18" width="46" height="64" rx="5" fill="#8B5CF6" opacity="0.14"/>
    <rect x="66" y="18" width="4" height="64" rx="2" fill="#6D28D9" opacity="0.20"/>
    <rect x="74" y="30" width="26" height="3" rx="1.5" fill="#8B5CF6" opacity="0.25"/>
    <rect x="74" y="38" width="22" height="3" rx="1.5" fill="#8B5CF6" opacity="0.25"/>
    <rect x="74" y="46" width="24" height="3" rx="1.5" fill="#8B5CF6" opacity="0.25"/>
  </svg>
);

const IllustrationPencil = ({ style }) => (
  <svg viewBox="0 0 40 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <rect x="10" y="10" width="20" height="120" rx="4" fill="#7C3AED" opacity="0.18"/>
    <rect x="10" y="10" width="20" height="20" rx="4" fill="#A78BFA" opacity="0.30"/>
    <polygon points="10,130 30,130 20,155" fill="#FCD34D" opacity="0.35"/>
    <polygon points="14,138 26,138 20,155" fill="#F59E0B" opacity="0.30"/>
    <rect x="10" y="25" width="20" height="3" fill="#6D28D9" opacity="0.15"/>
  </svg>
);

const IllustrationAPlus = ({ style }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <text x="2" y="72" fontSize="80" fontWeight="900" fill="#7C3AED" opacity="0.20" fontFamily="serif">A</text>
    <text x="72" y="28" fontSize="32" fontWeight="900" fill="#F59E0B" opacity="0.30" fontFamily="sans-serif">+</text>
  </svg>
);

const IllustrationMathSymbols = ({ style }) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <text x="4"  y="50"  fontSize="44" fontWeight="700" fill="#7C3AED" opacity="0.18" fontFamily="monospace">∑</text>
    <text x="60" y="50"  fontSize="44" fontWeight="700" fill="#8B5CF6" opacity="0.18" fontFamily="monospace">π</text>
    <text x="4"  y="110" fontSize="44" fontWeight="700" fill="#6D28D9" opacity="0.15" fontFamily="monospace">∞</text>
    <text x="60" y="110" fontSize="44" fontWeight="700" fill="#A78BFA" opacity="0.15" fontFamily="monospace">√</text>
    <text x="112" y="80" fontSize="44" fontWeight="700" fill="#7C3AED" opacity="0.13" fontFamily="monospace">÷</text>
  </svg>
);

const IllustrationCompass = ({ style }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <line x1="50" y1="10" x2="20" y2="100" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" opacity="0.22"/>
    <line x1="50" y1="10" x2="80" y2="100" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" opacity="0.22"/>
    <circle cx="50" cy="10" r="7" fill="#A78BFA" opacity="0.30"/>
    <path d="M22 90 Q50 110 78 90" stroke="#8B5CF6" strokeWidth="3" fill="none" opacity="0.20" strokeLinecap="round"/>
    <circle cx="20" cy="100" r="4" fill="#F59E0B" opacity="0.25"/>
    <circle cx="80" cy="100" r="4" fill="#7C3AED" opacity="0.25"/>
  </svg>
);

const IllustrationRuler = ({ style }) => (
  <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <rect x="0" y="8" width="200" height="26" rx="5" fill="#8B5CF6" opacity="0.15"/>
    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((i) => (
      <line key={i} x1={10 + i * 12} y1="8" x2={10 + i * 12} y2={i % 4 === 0 ? "20" : "14"} stroke="#6D28D9" strokeWidth="1.5" opacity="0.25"/>
    ))}
  </svg>
);

const IllustrationStar = ({ style }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    <polygon points="30,4 36,22 56,22 41,34 47,52 30,40 13,52 19,34 4,22 24,22" fill="#F59E0B" opacity="0.25"/>
  </svg>
);

const IllustrationDots = ({ style }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} aria-hidden="true">
    {[0,1,2,3,4].map(row =>
      [0,1,2,3,4].map(col => (
        <circle key={`${row}-${col}`} cx={12 + col*24} cy={12 + row*24} r="3.5" fill="#7C3AED" opacity={(row+col) % 3 === 0 ? "0.20" : "0.10"}/>
      ))
    )}
  </svg>
);

/* Shared fixed background layer — exported so AboutUs can reuse it */
export function EduBackground() {
  return (
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
      {/* Soft lavender-to-white base gradient (original subtle version) */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #f5f0ff 0%, #faf8ff 40%, #eef2ff 70%, #f8f5ff 100%)',
      }} />

      {/* Top-left purple glow */}
      <div style={{
        position: 'absolute', top: '-120px', left: '-120px',
        width: '520px', height: '520px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 70%)',
      }} />
      {/* Top-right indigo glow */}
      <div style={{
        position: 'absolute', top: '-60px', right: '-60px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
      }} />
      {/* Mid-left accent */}
      <div style={{
        position: 'absolute', top: '40%', left: '-60px',
        width: '280px', height: '280px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,181,253,0.18) 0%, transparent 70%)',
      }} />
      {/* Bottom-center glow */}
      <div style={{
        position: 'absolute', bottom: '-80px', left: '35%',
        width: '600px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
      }} />
      {/* Bottom-right accent */}
      <div style={{
        position: 'absolute', bottom: '5%', right: '-40px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,181,253,0.18) 0%, transparent 70%)',
      }} />

      {/* ── SVG Illustrations ── */}
      <IllustrationBook style={{ position: 'absolute', top: '60px', left: '16px', width: '200px', opacity: 0.7 }} />
      <IllustrationRuler style={{ position: 'absolute', top: '200px', left: '10px', width: '180px', opacity: 0.6, transform: 'rotate(-15deg)' }} />
      <IllustrationAPlus style={{ position: 'absolute', top: '30px', right: '30px', width: '160px', opacity: 0.8 }} />
      <IllustrationMathSymbols style={{ position: 'absolute', top: '180px', right: '10px', width: '200px', opacity: 0.7 }} />
      <IllustrationPencil style={{ position: 'absolute', top: '35%', left: '30px', width: '42px', opacity: 0.65, transform: 'rotate(12deg)' }} />
      <IllustrationCompass style={{ position: 'absolute', top: '40%', right: '35px', width: '100px', opacity: 0.65 }} />
      <IllustrationDots style={{ position: 'absolute', bottom: '60px', left: '20px', width: '130px', opacity: 0.9 }} />
      <IllustrationStar style={{ position: 'absolute', bottom: '180px', left: '80px', width: '60px', opacity: 0.7 }} />
      <IllustrationMathSymbols style={{ position: 'absolute', bottom: '40px', right: '20px', width: '170px', opacity: 0.6 }} />
      <IllustrationStar style={{ position: 'absolute', bottom: '200px', right: '80px', width: '50px', opacity: 0.6 }} />
      <IllustrationDots style={{ position: 'absolute', top: '50%', left: '6%', width: '90px', opacity: 0.5 }} />
      <IllustrationDots style={{ position: 'absolute', top: '60%', right: '5%', width: '90px', opacity: 0.45 }} />
      <IllustrationRuler style={{ position: 'absolute', top: '88px', left: '30%', width: '160px', opacity: 0.35, transform: 'rotate(3deg)' }} />
    </div>
  );
}

export default function CurriculumPage({ type }) {
  const typeKey = type.toUpperCase();
  const title = typeKey === 'US' ? 'US Curriculum' : 'UK Curriculum';
  const subtitle = typeKey === 'US'
    ? 'Complete mathematics learning from Grade 1 to Grade 12, aligned with U.S. educational standards. Build strong concepts, problem-solving skills, and confidence at every grade level.'
    : 'Grade 1 through Grade 12 British National Curriculum and Key Stage math pathways, focused on deep mastery.';

  const curriculumItems = CURRICULUM_DATA[typeKey] || [];

  const handleGradeClick = (itemId) => {
    window.location.hash = `#/curriculum/${type.toLowerCase()}/grade/${itemId}`;
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>

      {/* Fixed Educational Background */}
      <EduBackground />

      {/* Scrollable Content */}
      <div style={{ position: 'relative', zIndex: 1, paddingTop: '112px', paddingBottom: '80px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <GraduationCap className="w-4 h-4 text-purple-700" />
              <span>International Standard • Core Roadmaps</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-purple-950 tracking-tight leading-none">
              {title}
            </h1>
            <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Grades Grid — all cards same lavender tint */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {curriculumItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 rounded-3xl hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: 'rgba(237,233,254,0.75)',
                  border: '1.5px solid rgba(167,139,250,0.35)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 20px rgba(109,40,217,0.07), 0 1px 4px rgba(109,40,217,0.04)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(109,40,217,0.14), 0 2px 8px rgba(109,40,217,0.08)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(109,40,217,0.07), 0 1px 4px rgba(109,40,217,0.04)'}
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 mt-2">{item.label}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    Comprehensive modules covering visual reasoning, mental arithmetic strategies, and standard core components.
                  </p>
                </div>
                <button
                  onClick={() => handleGradeClick(item.id)}
                  className="w-full py-3 bg-white/60 hover:bg-purple-800 hover:text-white text-purple-900 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 group border border-purple-200/60 cursor-pointer"
                >
                  <span>Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-700 group-hover:translate-x-0.5 group-hover:text-white transition-transform" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
