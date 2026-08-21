// src/components/SyllabusPage.jsx
import React from 'react';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

export default function SyllabusPage({ type, gradeNum }) {
  const typeKey = type.toUpperCase();
  const curriculum = CURRICULUM_DATA[typeKey] || [];
  const gradeData = curriculum.find((g) => g.id.toString() === (gradeNum || '').toString());
  const modules = gradeData ? gradeData.modules : [];

  const curriculumLabel = typeKey === 'US' ? 'USA Curriculum' : 'UK Curriculum';
  const gradeLabel = gradeData ? gradeData.label : `Grade ${gradeNum}`;

  const handleBackClick = (e) => {
    e.preventDefault();
    window.location.hash = `#/curriculum/${type.toLowerCase()}`;
  };

  return (
    <div className="py-28 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <a
            href={`#/curriculum/${type.toLowerCase()}`}
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-xs font-bold text-purple-300 hover:text-white px-4 py-2 rounded-full bg-purple-950/80 border border-purple-500/30 hover:border-purple-400/60 backdrop-blur-md transition-all shadow-lg shadow-purple-950/50 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-purple-400" />
            <span>Back to {curriculumLabel}</span>
          </a>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-lg shadow-purple-950/50 backdrop-blur-md">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>Syllabus Overview</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-indigo-200 tracking-tight leading-none flex items-center gap-3 sm:gap-4">
            <img
              src={typeKey === 'US' ? 'https://flagcdn.com/w80/us.png' : 'https://flagcdn.com/w80/gb.png'}
              alt={typeKey === 'US' ? 'USA Flag' : 'UK Flag'}
              className="w-9 sm:w-12 h-auto rounded shadow-lg object-contain inline-block shrink-0"
              style={{
                animation: 'flagWave 1.8s ease-in-out infinite',
                transformOrigin: 'bottom left',
              }}
            />
            <span>{curriculumLabel} — {gradeLabel}</span>
          </h1>

          <style>{`
            @keyframes flagWave {
              0%, 100% { transform: rotate(0deg) scale(1); }
              25% { transform: rotate(-8deg) scale(1.05); }
              50% { transform: rotate(4deg) scale(1.02); }
              75% { transform: rotate(-4deg) scale(1.04); }
            }
          `}</style>
        </div>

        {/* Detailed Topic Modules Header */}
        <div className="border-b border-purple-500/20 pb-4 mb-8 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span>Detailed Topic Modules</span>
          </h2>
        </div>

        {/* Modules Grid */}
        {modules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod) => (
              <div
                key={mod.moduleNumber}
                className="bg-slate-900/80 rounded-2xl border border-purple-500/20 hover:border-purple-400/60 p-6 backdrop-blur-xl shadow-xl shadow-slate-950/60 hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Glowing top decorative border on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    {/* Module Number badge */}
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] font-bold uppercase tracking-wider">
                      Module {mod.moduleNumber}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-white mb-2 leading-snug group-hover:text-purple-200 transition-colors">
                    {mod.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-slate-300/80 leading-relaxed font-normal">
                    {mod.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-900/80 rounded-3xl border border-purple-500/20 p-12 text-center max-w-xl mx-auto shadow-xl backdrop-blur-xl">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Modules Coming Soon</h3>
            <p className="text-xs text-slate-300/80">The detailed curriculum modules for {gradeLabel} will be updated soon.</p>
          </div>
        )}

      </div>
    </div>
  );
}
