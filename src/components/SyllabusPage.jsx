// src/components/SyllabusPage.jsx
import React from 'react';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

export default function SyllabusPage({ type, gradeNum }) {
  const typeKey = type.toUpperCase();
  const curriculum = CURRICULUM_DATA[typeKey] || [];
  const gradeData = curriculum.find((g) => g.grade === gradeNum);
  const modules = gradeData ? gradeData.modules : [];

  const curriculumLabel = typeKey === 'US' ? 'US Curriculum' : 'UK Curriculum';
  let gradeLabel = `Grade ${gradeNum}`;
  if (gradeNum === 9) gradeLabel = "Algebra 1";
  else if (gradeNum === 10) gradeLabel = "Geometry";
  else if (gradeNum === 11) gradeLabel = "Algebra 2";
  else if (gradeNum === 12) gradeLabel = "Precalculus";

  const handleBackClick = (e) => {
    e.preventDefault();
    window.location.hash = `#/curriculum/${type.toLowerCase()}`;
  };

  return (
    <div className="py-28 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <a
            href={`#/curriculum/${type.toLowerCase()}`}
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-sm font-bold text-purple-900 hover:text-purple-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to {curriculumLabel}</span>
          </a>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <BookOpen className="w-4 h-4 text-purple-700" />
            <span>Syllabus Overview</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black text-purple-950 tracking-tight leading-none">
            {curriculumLabel} — {gradeLabel}
          </h1>
        </div>

        {/* Detailed Topic Modules Header */}
        <div className="border-b border-purple-100 pb-4 mb-8 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-purple-950 flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span>Detailed Topic Modules</span>
          </h2>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod) => (
            <div
              key={mod.moduleNumber}
              className="bg-white rounded-2xl border border-purple-100/70 p-5 shadow-sm hover:shadow-md hover:border-purple-300/80 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle top decorative border on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left" />

              <div>
                <div className="flex items-center justify-between mb-3.5">
                  {/* Module Number badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-lg bg-purple-50 border border-purple-100 text-purple-800 text-[10px] font-black uppercase tracking-wider">
                    Module {mod.moduleNumber}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-purple-900 transition-colors">
                  {mod.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
