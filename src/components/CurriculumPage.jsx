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
    <rect x="8" y="10" width="52" height="72" rx="5" fill="#7C3AED" opacity="0.28"/>
    <rect x="12" y="10" width="4" height="72" rx="2" fill="#5B21B6" opacity="0.38"/>
    <rect x="20" y="22" width="32" height="3" rx="1.5" fill="#7C3AED" opacity="0.4"/>
    <rect x="20" y="30" width="28" height="3" rx="1.5" fill="#7C3AED" opacity="0.4"/>
    <rect x="20" y="38" width="30" height="3" rx="1.5" fill="#7C3AED" opacity="0.4"/>
    <rect x="20" y="46" width="24" height="3" rx="1.5" fill="#7C3AED" opacity="0.4"/>
    <rect x="62" y="18" width="46" height="64" rx="5" fill="#8B5CF6" opacity="0.22"/>
    <rect x="66" y="18" width="4" height="64" rx="2" fill="#6D28D9" opacity="0.3"/>
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

/* Card accent colors — cycle through a palette of soft tinted backgrounds */
const CARD_TINTS = [
  { bg: 'rgba(237,233,254,0.75)', border: 'rgba(167,139,250,0.35)' },  // lavender
  { bg: 'rgba(236,252,255,0.75)', border: 'rgba(103,232,249,0.35)' },  // sky
  { bg: 'rgba(255,250,237,0.75)', border: 'rgba(251,191,36,0.35)'  },  // amber
  { bg: 'rgba(240,253,244,0.75)', border: 'rgba(134,239,172,0.40)' },  // mint
];

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
        {/* Bright, vivid lavender-to-white base gradient */}
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
        {/* Top-right indigo/blue glow */}
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
        {/* Top-left: Books */}
        <IllustrationBook style={{ position: 'absolute', top: '60px', left: '16px', width: '200px' }} />
        {/* Top-left: Ruler */}
        <IllustrationRuler style={{ position: 'absolute', top: '205px', left: '8px', width: '180px', transform: 'rotate(-12deg)' }} />
        {/* Top-right: A+ */}
        <IllustrationAPlus style={{ position: 'absolute', top: '28px', right: '28px', width: '160px' }} />
        {/* Top-right: Math symbols */}
        <IllustrationMathSymbols style={{ position: 'absolute', top: '175px', right: '8px', width: '200px' }} />
        {/* Mid-left: Pencil */}
        <IllustrationPencil style={{ position: 'absolute', top: '36%', left: '28px', width: '42px', transform: 'rotate(12deg)' }} />
        {/* Mid-right: Compass */}
        <IllustrationCompass style={{ position: 'absolute', top: '42%', right: '32px', width: '100px' }} />
        {/* Bottom-left: Dots + Star */}
        <IllustrationDots style={{ position: 'absolute', bottom: '60px', left: '18px', width: '130px' }} />
        <IllustrationStar style={{ position: 'absolute', bottom: '185px', left: '78px', width: '60px' }} />
        {/* Bottom-right: Math symbols + Star */}
        <IllustrationMathSymbols style={{ position: 'absolute', bottom: '38px', right: '18px', width: '170px' }} />
        <IllustrationStar style={{ position: 'absolute', bottom: '198px', right: '76px', width: '52px' }} />
        {/* Center subtle dots */}
        <IllustrationDots style={{ position: 'absolute', top: '52%', left: '6%', width: '88px', opacity: 0.65 }} />
        <IllustrationDots style={{ position: 'absolute', top: '62%', right: '5%', width: '88px', opacity: 0.60 }} />
        {/* Top-center faint ruler */}
        <IllustrationRuler style={{ position: 'absolute', top: '86px', left: '30%', width: '155px', opacity: 0.50, transform: 'rotate(2deg)' }} />
      </div>

      {/* ─── SCROLLABLE CONTENT LAYER ─── */}
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

          {/* Grades Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {curriculumItems.map((item, idx) => {
              const tint = CARD_TINTS[idx % CARD_TINTS.length];
              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-between p-6 rounded-3xl hover:-translate-y-1 transition-all duration-300"
                  style={{
                    background: tint.bg,
                    border: `1.5px solid ${tint.border}`,
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 20px rgba(109,40,217,0.08), 0 1px 4px rgba(109,40,217,0.04)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(109,40,217,0.16), 0 2px 8px rgba(109,40,217,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(109,40,217,0.08), 0 1px 4px rgba(109,40,217,0.04)'}
                >
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 mt-2">{item.label}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      Comprehensive modules covering visual reasoning, mental arithmetic strategies, and standard core components.
                    </p>
                  </div>
                  <button
                    onClick={() => handleGradeClick(item.id)}
                    className="w-full py-3 bg-white/60 hover:bg-purple-800 hover:text-white text-purple-900 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 group border border-purple-200/70 cursor-pointer"
                  >
                    <span>Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-700 group-hover:translate-x-0.5 group-hover:text-white transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
