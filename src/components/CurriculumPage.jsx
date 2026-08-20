// src/components/CurriculumPage.jsx
import React from 'react';
import { BookOpen, GraduationCap, ArrowRight } from 'lucide-react';

export default function CurriculumPage({ type, onSelectGrade }) {
  // type can be 'US' or 'UK'
  const title = type === 'US' ? 'US Curriculum' : 'UK Curriculum';
  const subtitle = type === 'US' 
    ? 'Grade 1 through Grade 12 complete mathematics standards, optimized for conceptual understanding and speed.'
    : 'Year 1 through Year 12 British National Curriculum and Key Stage math pathways, focused on deep mastery.';

  const handleGradeClick = (gradeNum) => {
    // Navigate via hash route
    window.location.hash = `#/curriculum/${type.toLowerCase()}/grade/${gradeNum}`;
  };

  return (
    <div className="py-28 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Category pill */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <GraduationCap className="w-4 h-4 text-purple-700" />
            <span>International Standard • 12-Grade Roadmap</span>
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
          {Array.from({ length: 12 }, (_, i) => i + 1).map((gradeNum) => {
            let label = `Grade ${gradeNum}`;
            if (gradeNum === 9) label = "Algebra 1";
            else if (gradeNum === 10) label = "Geometry";
            else if (gradeNum === 11) label = "Algebra 2";
            else if (gradeNum === 12) label = "Precalculus";
            return (
              <div 
                key={gradeNum}
                className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4">
                    <span className="font-extrabold text-purple-800 text-lg">{gradeNum}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{label}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    Comprehensive modules covering visual reasoning, mental arithmetic strategies, and standard core components.
                  </p>
                </div>

                <button
                  onClick={() => handleGradeClick(gradeNum)}
                  className="w-full py-3 bg-purple-50 hover:bg-purple-800 hover:text-white text-purple-900 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 group border border-purple-200/60"
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
  );
}
