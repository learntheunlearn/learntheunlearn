// src/components/WhyUnlearn.jsx
import React from 'react';
import { RefreshCw, CheckCircle, XCircle, Eye, Zap, Target, BookCheck, ArrowRight } from 'lucide-react';

export default function WhyUnlearn({ onEnquireClick }) {
  return (
    <section id="why-unlearn" className="py-20 relative bg-white border-t border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <RefreshCw className="w-3.5 h-3.5 text-purple-700" />
            <span>The Unlearning Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-purple-950 tracking-tight">
            Why Traditional Rote Math Fails — And How We Fix It
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Most students don't hate math; they hate memorizing rules they can't visualize. We strip away mechanical repetition and replace it with geometric intuition and speed math algorithms.
          </p>
        </div>

        {/* Side by Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Traditional Method Card */}
          <div className="glass-card-light rounded-3xl p-8 border border-red-200 bg-red-50/40 relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center text-red-600 font-bold">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900">Traditional Rote Method</h3>
                  <span className="text-xs text-red-600 font-bold">Memorize rules without understanding</span>
                </div>
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider bg-red-100 text-red-700 px-3 py-1 rounded-full border border-red-200">
                High Anxiety
              </span>
            </div>

            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Forces students to memorize static formulas (e.g., <code className="text-red-700 bg-red-100 px-1 rounded font-mono">a² + b² = c²</code>) without knowing why.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Calculations rely on slow, step-by-step column work prone to careless arithmetic mistakes.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Word problems feel intimidating because formulas don't connect to visual reality.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Knowledge is forgotten within days after writing term exams.</span>
              </li>
            </ul>
          </div>

          {/* LEARNTHEUNLEARN Method Card */}
          <div className="glass-card-light rounded-3xl p-8 border border-purple-300 bg-purple-50/50 relative shadow-xl shadow-purple-900/5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-800 text-white flex items-center justify-center font-bold">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-purple-950">The LEARNTHEUNLEARN Method</h3>
                  <span className="text-xs text-purple-800 font-bold">Visual Intuition + Speed Math</span>
                </div>
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider bg-purple-800 text-white px-3 py-1 rounded-full shadow-sm">
                Recommended
              </span>
            </div>

            <ul className="space-y-4 text-sm text-slate-800">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <span><strong className="text-purple-950">Visual Geometric Proofs:</strong> Students see squares built on triangle sides, retaining concepts permanently.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <span><strong className="text-purple-950">Mental Speed Algorithms:</strong> Rapid calculation tricks cut computation time by up to 75%.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <span><strong className="text-purple-950">Interactive Playground:</strong> Hands-on digital widgets allow real-time math exploration.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <span><strong className="text-purple-950">Grade 1 to 12 Mastery:</strong> Seamless roadmap from primary number sense to university-level Calculus.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Pillars of Learning */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card-light p-6 rounded-2xl glass-card-hover-light border border-slate-200 bg-white">
            <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-800 mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-base text-purple-950 mb-2">1. Visual Intuition</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every math concept from fractions to calculus derivatives is represented visually before equations are introduced.
            </p>
          </div>

          <div className="glass-card-light p-6 rounded-2xl glass-card-hover-light border border-slate-200 bg-white">
            <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-base text-purple-950 mb-2">2. Speed Math Patterns</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mental arithmetic shortcuts that build incredible speed, accuracy, and numerical confidence for school & competitive exams.
            </p>
          </div>

          <div className="glass-card-light p-6 rounded-2xl glass-card-hover-light border border-slate-200 bg-white">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-base text-purple-950 mb-2">3. Grade 1-12 Standard</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strictly structured curricula covering primary fundamentals, middle school algebra, and advanced high school calculus.
            </p>
          </div>

          <div className="glass-card-light p-6 rounded-2xl glass-card-hover-light border border-slate-200 bg-white">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4">
              <BookCheck className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-base text-purple-950 mb-2">4. AEO & SEO Ready</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Structured JSON-LD schema integration for search engines and AI engines like ChatGPT, Gemini, and Perplexity.
            </p>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onEnquireClick}
            className="px-8 py-3.5 bg-purple-800 hover:bg-purple-900 text-white font-extrabold text-sm rounded-xl transition-all shadow-lg shadow-purple-900/20 inline-flex items-center gap-2"
          >
            <span>Experience the Unlearning Method</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
