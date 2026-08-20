// src/components/HomeSection.jsx
import React from 'react';
import { Sparkles, GraduationCap, Globe, BookCheck } from 'lucide-react';

export default function HomeSection() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Uploaded Banner Image */}
        <div className="w-full overflow-hidden rounded-3xl shadow-xl shadow-purple-950/10 border border-purple-100 mb-12 bg-white">
          <img
            src="/banner.png"
            alt="Learn The Unlearn - Global Online Mathematics Tutoring"
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* Welcome Section */}
        <section id="welcome" className="bg-white rounded-3xl border border-purple-100 p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-700" />
              <span>Learn The Unlearn</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight leading-tight mb-8">
              Welcome
            </h1>

            {/* Welcome Description */}
            <div className="text-slate-700 text-base sm:text-xl leading-relaxed font-normal text-justify sm:text-center space-y-6">
              <p>
                Welcome to <strong className="text-purple-950 font-bold">Learn The Unlearn</strong>, an online mathematics tutoring platform connecting students worldwide with skilled and dedicated Indian teachers.
              </p>
              <p>
                We provide personalized online mathematics classes designed according to each student’s grade, curriculum, learning level and academic goals. Through clear explanations, interactive lessons and structured practice, we help students understand mathematical concepts, overcome learning difficulties and solve problems confidently.
              </p>
            </div>

            {/* Highlight Badges / Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-10 border-t border-purple-100/80">
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex flex-col items-center">
                <Globe className="w-6 h-6 text-purple-700 mb-2" />
                <span className="font-extrabold text-slate-900 text-sm">Global Reach</span>
                <span className="text-xs text-slate-500 mt-0.5">Students Worldwide</span>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex flex-col items-center">
                <GraduationCap className="w-6 h-6 text-purple-700 mb-2" />
                <span className="font-extrabold text-slate-900 text-sm">Dedicated Faculty</span>
                <span className="text-xs text-slate-500 mt-0.5">Expert Indian Educators</span>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex flex-col items-center">
                <BookCheck className="w-6 h-6 text-purple-700 mb-2" />
                <span className="font-extrabold text-slate-900 text-sm">Personalized Learning</span>
                <span className="text-xs text-slate-500 mt-0.5">Custom Curriculum Plans</span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
