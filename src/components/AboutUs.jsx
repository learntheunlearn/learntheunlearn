// src/components/AboutUs.jsx
import React from 'react';
import { Award, Compass, Globe, Heart, Sparkles, Target, Users, BookOpen, Lightbulb } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="pt-28 pb-24 bg-gradient-to-b from-purple-50/40 via-slate-50 to-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-black uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-700" />
            <span>Our Journey & Philosophy</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-purple-950 tracking-tight leading-tight">
            About Learn The Unlearn
          </h1>
          <p className="mt-6 text-slate-700 text-lg sm:text-xl leading-relaxed font-medium">
            Learn The Unlearn is a global online mathematics tutoring institute committed to making mathematics clear, engaging and achievable for every student.
          </p>
        </div>

        {/* Story Section: Since 2021 */}
        <div className="bg-white rounded-3xl border border-purple-100 p-8 sm:p-12 shadow-sm mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-extrabold mb-4">
              <Compass className="w-4 h-4 text-amber-600" />
              <span>Started in 2021</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Our Journey
            </h2>

            <div className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Our teaching journey started in 2021 with online mathematics classes for students in the United States. The experience of teaching students from another country helped us understand the importance of flexible teaching, curriculum awareness, cultural understanding and personalized academic support.
              </p>
              <p>
                Today, we are opening <strong className="text-purple-900 font-bold">Learn The Unlearn</strong> to students worldwide. Learners from any country can connect with our Indian mathematics teachers and receive structured online instruction from the comfort of their homes.
              </p>
            </div>
          </div>
        </div>

        {/* Two Highlight Cards: Personalized Approach & The Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Card 1: Meeting Individual Needs */}
          <div className="bg-white rounded-3xl border border-purple-100 p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-purple-200 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                Personalized Attention
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We understand that every student has a different learning style, academic background and level of confidence. Our teachers adapt their lessons to meet individual needs, identify learning gaps and guide students patiently through each concept.
              </p>
            </div>
          </div>

          {/* Card 2: Philosophy Behind the Name */}
          <div className="bg-white rounded-3xl border border-purple-100 p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-purple-200 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-5">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                The "Learn The Unlearn" Philosophy
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The name <strong className="text-purple-900 font-bold">Learn The Unlearn</strong> reflects our educational philosophy. We help students unlearn their fear of mathematics, move beyond limiting beliefs and develop more effective ways of thinking and learning.
              </p>
            </div>
          </div>

        </div>

        {/* Card 3: Understanding Rather Than Memorization */}
        <div className="bg-gradient-to-br from-purple-900 via-purple-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-800/80 border border-purple-600/50 text-purple-200 text-xs font-bold uppercase tracking-wider mb-5">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Core Pedagogy</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Understanding Rather Than Memorization
            </h2>
            
            <p className="text-purple-100 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              We focus on understanding rather than memorization. Students learn not only how to solve a problem but also why the method works and how to apply it independently.
            </p>

            <div className="pt-6 border-t border-purple-800/60">
              <h3 className="text-lg font-bold text-amber-300 mb-2">Our Goal</h3>
              <p className="text-purple-200 text-sm sm:text-base leading-relaxed">
                Our goal is to help students become confident, curious and responsible learners who are prepared for both academic assessments and future challenges.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
