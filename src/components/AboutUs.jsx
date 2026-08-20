// src/components/AboutUs.jsx
import React from 'react';
import { Award, GraduationCap, Heart, Target } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 relative bg-white border-t border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Award className="w-4 h-4 text-purple-700" />
            <span>About Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight">
            Who We Are
          </h2>
          <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            Learn The Unlearn is a modern math institution founded by <strong className="text-purple-900">Priyadharshini M.Sc. Math, B.Ed.</strong>, dedicated to transforming how students understand and master mathematics from Grade 1 to Grade 12.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Mission */}
          <div className="bg-slate-50 rounded-3xl border border-purple-100 p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To empower every student to move beyond rote memorization and develop deep visual intuition, speed, and confidence in mathematics — preparing them for academic excellence and real-world problem solving.
            </p>
          </div>

          {/* Approach */}
          <div className="bg-slate-50 rounded-3xl border border-purple-100 p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-5">
              <GraduationCap className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-3">Our Approach</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We combine visual learning techniques, mental speed math strategies, and structured curriculum frameworks — covering both US and UK standards — to deliver an interactive and deeply effective learning experience.
            </p>
          </div>

          {/* Values */}
          <div className="bg-slate-50 rounded-3xl border border-purple-100 p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center mb-5">
              <Heart className="w-6 h-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-3">Our Values</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Student-first pedagogy, mathematical curiosity over fear, personalized learning paths, and a lifelong love for numbers. We believe every child can become confident in math with the right guidance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
