// src/components/AboutUs.jsx
import React from 'react';
import { Compass, Sparkles, Users, BookOpen, Lightbulb, Globe, GraduationCap, Award, CheckCircle2, HeartHandshake } from 'lucide-react';
import founderImg from '../assets/founder image.png';

export default function AboutUs() {
  const whyChoosePoints = [
    {
      title: "Global Access",
      desc: "Students can attend our online mathematics classes from anywhere in the world.",
      icon: Globe
    },
    {
      title: "Experienced Indian Teachers",
      desc: "Learn from dedicated Indian mathematics teachers with strong subject knowledge and clear communication skills.",
      icon: GraduationCap
    },
    {
      title: "Personalized Classes",
      desc: "Lessons are designed according to each student’s grade, curriculum, pace and learning requirements.",
      icon: Users
    },
    {
      title: "Grades 1–12 Support",
      desc: "We support students from primary-level mathematics through advanced secondary-level concepts.",
      icon: Award
    },
    {
      title: "International Curriculum Support",
      desc: "Our teachers adapt lessons according to the student’s school syllabus, textbooks and academic objectives.",
      icon: BookOpen
    },
    {
      title: "Flexible Time Zones",
      desc: "Class schedules can be arranged according to student requirements and teacher availability across different time zones.",
      icon: Compass
    },
    {
      title: "Concept-Based Learning",
      desc: "We help students understand why mathematical methods work instead of relying only on memorization.",
      icon: Lightbulb
    },
    {
      title: "Interactive Online Teaching",
      desc: "Students actively participate, ask questions, solve problems and receive immediate guidance.",
      icon: Sparkles
    },
    {
      title: "Customized Practice Materials",
      desc: "Worksheets and revision exercises are prepared according to the student’s current topic and level.",
      icon: CheckCircle2
    },
    {
      title: "Regular Parent Feedback",
      desc: "Parents receive updates about participation, progress, strengths and areas that require further improvement.",
      icon: HeartHandshake
    }
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>

      {/* Scrollable Content */}
      <div className="pt-28 pb-24" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-black uppercase tracking-wider mb-6 shadow-lg shadow-purple-950/50 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Our Journey &amp; Philosophy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-indigo-200 tracking-tight leading-tight">
              About Learn The Unlearn
            </h1>
            <p className="mt-6 text-purple-200/90 text-lg sm:text-xl leading-relaxed font-normal">
              Learn The Unlearn is a global online mathematics tutoring institute committed to making mathematics clear, engaging and achievable for every student.
            </p>
          </div>

          {/* Main Grid: Founder Image (Left) + Our Journey & Philosophy Cards (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-stretch">

            {/* Left Column: Founder Card (Image Standalone, White Box for Name/Studies) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="w-full overflow-hidden">
                <img
                  src={founderImg}
                  alt="Mrs. Priyadharshini M.Sc., B.Ed in Mathematics"
                  className="w-full h-auto block"
                />
              </div>
              <div className="bg-white border border-purple-100 shadow-sm p-6 sm:p-7 text-center rounded-none">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                  Mrs. Priyadharshini
                </h3>
                <p className="text-sm font-extrabold text-purple-900 mb-4">
                  M.Sc., B.Ed in Mathematics
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-950 text-amber-300 text-xs sm:text-sm font-black tracking-wide shadow-lg shadow-purple-950/20 border border-purple-700/50">
                  <Award className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                  <span>Founder &amp; Lead Educator</span>
                </div>
              </div>
            </div>

            {/* Right Column: Our Journey, Personalized Attention, & Philosophy (Sharp Edges, Stretched Height) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">

              {/* Card 1: Our Journey */}
              <div className="bg-white rounded-none border border-purple-100 p-6 sm:p-8 shadow-sm relative overflow-hidden flex-1 flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-extrabold mb-3">
                    <Compass className="w-4 h-4 text-amber-600" />
                    <span>Started in 2021</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Our Journey</h2>
                  <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3">
                    <p>
                      Our teaching journey started in 2021 with online mathematics classes for students in the United States. The experience of teaching students from another country helped us understand the importance of flexible teaching, curriculum awareness, cultural understanding and personalized academic support.
                    </p>
                    <p>
                      Today, we are opening <strong className="text-purple-900 font-bold">Learn The Unlearn</strong> to students worldwide. Learners from any country can connect with our Indian mathematics teachers and receive structured online instruction from the comfort of their homes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cards 2 & 3: Personalized Attention & Philosophy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-none border border-purple-100 p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-purple-200 transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-none bg-purple-50 border border-purple-100 flex items-center justify-center mb-4">
                      <Users className="w-5 h-5 text-purple-700" />
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">Personalized Attention</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      We understand that every student has a different learning style, academic background and level of confidence. Our teachers adapt their lessons to meet individual needs, identify learning gaps and guide students patiently through each concept.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-none border border-purple-100 p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-purple-200 transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-none bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-4">
                      <Lightbulb className="w-5 h-5 text-amber-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">The "Learn The Unlearn" Philosophy</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      The name <strong className="text-purple-900 font-bold">Learn The Unlearn</strong> reflects our educational philosophy. We help students unlearn their fear of mathematics, move beyond limiting beliefs and develop more effective ways of thinking and learning.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Why Choose Learn The Unlearn? Section */}
          <div className="bg-white rounded-3xl sm:rounded-[36px] border border-purple-100/80 p-8 sm:p-12 lg:p-14 shadow-xl shadow-purple-900/5 mb-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-purple-700" />
                <span>Our Key Strengths</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-purple-950 tracking-tight">
                Why Choose Learn The Unlearn?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyChoosePoints.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-purple-100/70 hover:border-purple-300 hover:bg-purple-50/40 transition-all duration-300 flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                      <IconComponent className="w-5 h-5 text-purple-800" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base mb-1.5 group-hover:text-purple-900 transition-colors">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dark card: Core Pedagogy */}
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
    </div>
  );
}
