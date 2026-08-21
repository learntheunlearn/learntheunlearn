// src/components/CurriculumPage.jsx
import React from 'react';
import { GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

/* Shared educational background component */
export function EduBackground({ dark = false }) {
  if (dark) {
    return (
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-slate-950 bg-gradient-to-br from-slate-950 via-purple-950/80 to-slate-950" />

        {/* Ambient blurred glowing blobs */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[130px]" />
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-700/15 blur-[140px]" />
        <div className="absolute top-1/3 right-16 w-64 h-64 rounded-full bg-purple-500/15 blur-[100px]" />
        <div className="absolute top-2/3 left-10 w-64 h-64 rounded-full bg-indigo-500/15 blur-[100px]" />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/30" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-3xl" />
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-indigo-100/40 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-purple-100/25 blur-3xl" />
      <div className="absolute top-1/3 right-16 w-48 h-48 rounded-full bg-violet-200/20 blur-2xl" />
      <div className="absolute top-2/3 left-10 w-56 h-56 rounded-full bg-indigo-100/20 blur-2xl" />
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
    <div className="relative min-h-screen">

      {/* Fixed static dark background */}
      <EduBackground dark={true} />

      {/* Scrollable Content */}
      <div className="relative py-28" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-lg shadow-purple-950/50 backdrop-blur-md">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span>International Standard • Core Roadmaps</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-indigo-200 tracking-tight leading-none">
              {title}
            </h1>

            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Grades Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {curriculumItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between p-6 rounded-3xl bg-slate-900/80 border border-purple-500/20 hover:border-purple-400/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-slate-950/60 hover:shadow-purple-500/20 overflow-hidden"
              >
                {/* Glowing Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] font-bold uppercase tracking-wider">
                      {typeKey} Standard
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-purple-200 transition-colors mb-2">
                    {item.label}
                  </h3>

                  <p className="text-xs text-slate-300/80 leading-relaxed mb-6">
                    Comprehensive modules covering visual reasoning, mental arithmetic strategies, and standard core components.
                  </p>
                </div>

                <button
                  onClick={() => handleGradeClick(item.id)}
                  className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs rounded-2xl transition-all shadow-md shadow-purple-950/40 flex items-center justify-center gap-2 group/btn border border-purple-400/30 cursor-pointer"
                >
                  <span>View Detailed Syllabus</span>
                  <ArrowRight className="w-4 h-4 text-purple-200 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
