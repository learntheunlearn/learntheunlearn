// src/components/SyllabusExplorer.jsx
import React, { useState } from 'react';
import { SYLLABUS_DATA, GRADE_CATEGORIES } from '../data/syllabusData';
import { Search, BookOpen, CheckCircle2, Send, Layers } from 'lucide-react';

export default function SyllabusExplorer({ activeGrade, setActiveGrade, onSelectGradeForInquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGrades = SYLLABUS_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.topics.some(
        (t) =>
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const selectedGradeData = SYLLABUS_DATA.find((g) => g.grade === activeGrade) || SYLLABUS_DATA[0];

  return (
    <section id="syllabus-explorer" className="py-20 relative bg-slate-50 border-t border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <BookOpen className="w-4 h-4 text-purple-700" />
            <span>Complete Roadmap • Grade 1 to 12</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight">
            Explore Grade 1 to Grade 12 Math Syllabus
          </h2>
          <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            Click on any grade to view detailed topic breakdowns, visual learning outcomes, and foundational competencies.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 mb-10 border border-purple-100 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {GRADE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-purple-800 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:text-purple-900 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics (e.g. Fractions, Calculus)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Grade Buttons Grid (1 to 12) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2.5 mb-12">
          {SYLLABUS_DATA.map((item) => {
            const isSelected = item.grade === activeGrade;
            const isVisible = filteredGrades.some((fg) => fg.grade === item.grade);

            return (
              <button
                key={item.grade}
                onClick={() => setActiveGrade(item.grade)}
                disabled={!isVisible}
                className={`py-3.5 px-2 rounded-2xl font-black text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border ${
                  !isVisible
                    ? 'opacity-30 border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
                    : isSelected
                    ? 'bg-gradient-to-b from-purple-800 to-indigo-900 border-purple-900 text-white shadow-xl shadow-purple-900/20 scale-105 z-10'
                    : 'bg-white border-purple-100 text-slate-800 hover:border-purple-300 hover:text-purple-900 hover:bg-purple-50 shadow-sm'
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider font-bold opacity-80">Grade</span>
                <span className="text-xl font-black font-mono leading-none">{item.grade}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Syllabus Card for Selected Grade */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-xl relative overflow-hidden">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-black text-xs">
                  Grade {selectedGradeData.grade} Syllabus
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs">
                  {selectedGradeData.ageGroup}
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-bold text-xs">
                  {selectedGradeData.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-purple-950">
                {selectedGradeData.title}
              </h3>
              <p className="text-sm text-purple-800 font-bold mt-1">
                {selectedGradeData.subtitle}
              </p>
            </div>

            {/* Direct Inquiry Action */}
            <button
              onClick={() => onSelectGradeForInquiry(selectedGradeData.grade)}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <Send className="w-4 h-4 fill-slate-950" />
              <span>Enquire for Grade {selectedGradeData.grade}</span>
            </button>
          </div>

          {/* Overview & Outcomes Grid */}
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-slate-100">
            <div className="lg:col-span-5 flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900">
                Grade Overview
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {selectedGradeData.overview}
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900">
                Key Learning Outcomes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedGradeData.keyOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-purple-50/50 p-3 rounded-xl border border-purple-100">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 font-bold leading-normal">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Topics Header */}
          <div className="pt-8 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-800" />
              <h4 className="text-lg font-black text-purple-950">
                Detailed Topic Modules ({selectedGradeData.topics.length} Modules)
              </h4>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              STEM Standards Aligned
            </span>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedGradeData.topics.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all flex flex-col gap-2 group hover:bg-purple-50/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-800 font-mono">
                    Module {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-purple-700 transition-colors" />
                </div>
                <h5 className="font-extrabold text-sm text-slate-900 group-hover:text-purple-950 transition-colors">
                  {t.title}
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
