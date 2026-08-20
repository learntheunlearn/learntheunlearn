// src/components/CurriculumPage.jsx
import React from 'react';
import { BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

export default function CurriculumPage({ type }) {
  const typeKey = type.toUpperCase();
  const title = typeKey === 'US' ? 'US Curriculum' : 'UK Curriculum';
  const subtitle = typeKey === 'US' 
    ? 'Complete mathematics learning from Grade 1 to Grade 12, aligned with U.S. educational standards. Build strong concepts, problem-solving skills, and confidence at every grade level.'
    : 'Grade 1 through Grade 12 British National Curriculum and Key Stage math pathways, focused on deep mastery.';

  const curriculumItems = CURRICULUM_DATA[typeKey] || [];

  const handleGradeClick = (itemId) => {
    // Navigate via hash route
    window.location.hash = `#/curriculum/${type.toLowerCase()}/grade/${itemId}`;
  };

  return (
    <div className="relative min-h-screen">
      
      {/* Fixed Decorative Background Layer */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/30" />
        
        {/* Large blurred purple blob — top-left */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-3xl" />
        
        {/* Soft lavender blob — top-right */}
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-indigo-100/40 blur-3xl" />
        
        {/* Subtle purple/blue shape — bottom-center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-purple-100/25 blur-3xl" />
        
        {/* Small accent dot — mid-right */}
        <div className="absolute top-1/3 right-16 w-48 h-48 rounded-full bg-violet-200/20 blur-2xl" />
        
        {/* Small accent dot — mid-left */}
        <div className="absolute top-2/3 left-10 w-56 h-56 rounded-full bg-indigo-100/20 blur-2xl" />
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative py-28" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          {/* Breadcrumb / Category pill */}
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
            {curriculumItems.map((item) => {
              return (
                <div 
                  key={item.id}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100/80 p-6 shadow-md shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 mt-2">{item.label}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      Comprehensive modules covering visual reasoning, mental arithmetic strategies, and standard core components.
                    </p>
                  </div>

                  <button
                    onClick={() => handleGradeClick(item.id)}
                    className="w-full py-3 bg-purple-50 hover:bg-purple-800 hover:text-white text-purple-900 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 group border border-purple-200/60 cursor-pointer"
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
