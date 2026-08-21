// src/components/Footer.jsx
import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck, GraduationCap } from 'lucide-react';

export default function Footer({ onSelectGradeInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 text-xs relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#51247A] p-1 border border-purple-400/40 shadow-sm shrink-0">
                <img src="/logo.png" alt="Learn The Unlearn Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                Learn<span className="text-purple-400">The</span>Unlearn
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm font-medium">
              Transforming the way students learn mathematics through visual, intuitive, and concept-based learning.
            </p>

            <div className="inline-flex items-center gap-2 text-amber-400 font-extrabold text-xs">
              <span>Motto: Learn Beyond Limits</span>
            </div>

            <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs pt-1">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>SEO & AEO Schema Validated • Global STEM Standard</span>
            </div>
          </div>

          {/* Grades 1-6 */}
          <div>
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-3">
              Primary Math (1-6)
            </h4>
            <ul className="space-y-2 text-slate-400">
              {[1, 2, 3, 4, 5, 6].map((g) => (
                <li key={g}>
                  <a
                    href={`#/curriculum/us/grade/${g}`}
                    className="hover:text-purple-300 transition-colors text-left inline-block"
                  >
                    Grade {g} Math Syllabus
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Grades 7-12 */}
          <div>
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-3">
              Advanced Math (7-12)
            </h4>
            <ul className="space-y-2 text-slate-400">
              {[
                { id: '7', label: 'Grade 7' },
                { id: '8', label: 'Grade 8' },
                { id: '9', label: 'Algebra 1' },
                { id: '10', label: 'Geometry' },
                { id: '11', label: 'Algebra 2' },
                { id: '12', label: 'Precalculus' },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#/curriculum/us/grade/${item.id}`}
                    className="hover:text-purple-300 transition-colors text-left inline-block"
                  >
                    {item.label} Syllabus
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-3">
              Contact
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>learntheunlearn.math@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 73584 84736</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Online Global Virtual Campus (Live Interactive)</span>
              </li>
            </ul>


          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} LEARNTHEUNLEARN. Founded by Priyadharshini M.Sc. Math, B.Ed.</p>
          <div className="flex items-center gap-4">
            <a href="#syllabus-explorer" className="hover:text-slate-300">Curriculum</a>
            <a href="#reviews" className="hover:text-slate-300">Reviews</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700 flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
