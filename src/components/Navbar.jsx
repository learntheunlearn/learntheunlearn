// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCurriculumOpen, setMobileCurriculumOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    if (target === 'hero') {
      window.location.hash = '#/';
    } else if (target === 'about-us') {
      window.location.hash = '#/about-us';
    } else if (target === 'reviews' || target === 'inquiry-form') {
      window.location.hash = `#${target}`;
    }
  };

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'About Us', target: 'about-us' },
    { label: 'Curriculum', target: 'curriculum' },
    { label: 'Feedback & Review', target: 'reviews' },
    { label: 'Contact Us', target: 'inquiry-form' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-purple-100 py-3 shadow-md shadow-purple-900/5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-2xl overflow-hidden shadow-md border border-purple-200 group-hover:scale-105 transition-transform bg-[#51247A] flex items-center justify-center p-1">
              <img src="/logo.png" alt="Learn The Unlearn Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-purple-950 flex items-center gap-1">
                Learn<span className="text-purple-700">The</span>Unlearn
              </span>
              <span className="text-[10px] uppercase tracking-widest text-purple-800 font-bold">
                Math Institution • Grade 1-12
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-purple-100">
            {navLinks.map((link) => {
              if (link.target === 'curriculum') {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-purple-900 transition-colors rounded-full hover:bg-white flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3 h-3 text-slate-500" />
                    </button>
                    
                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-44 bg-white rounded-2xl p-2 shadow-lg border border-purple-100 flex flex-col gap-1 z-50">
                        <button
                          onClick={() => {
                            setDropdownOpen(false);
                            window.location.hash = '#/curriculum/us';
                          }}
                          className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-purple-50 hover:text-purple-900 rounded-xl transition-all"
                        >
                          US Curriculum
                        </button>
                        <button
                          onClick={() => {
                            setDropdownOpen(false);
                            window.location.hash = '#/curriculum/uk';
                          }}
                          className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-purple-50 hover:text-purple-900 rounded-xl transition-all"
                        >
                          UK Curriculum
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-purple-900 transition-colors rounded-full hover:bg-white"
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('inquiry-form')}
              className="px-5 py-2.5 bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 hover:from-purple-900 hover:to-indigo-950 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-purple-900/30 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Book Free Trial Class</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('inquiry-form')}
              className="px-3 py-1.5 text-xs font-bold bg-purple-800 text-white rounded-lg"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 bg-slate-100 border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white mt-2 mx-4 p-4 rounded-2xl border border-purple-100 shadow-xl flex flex-col gap-2.5">
          {navLinks.map((link) => {
            if (link.target === 'curriculum') {
              return (
                <div key={link.label} className="flex flex-col gap-1">
                  <button
                    onClick={() => setMobileCurriculumOpen(!mobileCurriculumOpen)}
                    className="text-left py-2 px-3 text-sm font-bold text-slate-700 hover:bg-purple-50 rounded-lg flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCurriculumOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileCurriculumOpen && (
                    <div className="pl-6 flex flex-col gap-1 border-l border-purple-100 ml-3 py-1">
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          window.location.hash = '#/curriculum/us';
                        }}
                        className="text-left py-2 px-3 text-xs font-bold text-slate-600 hover:text-purple-900 rounded-lg"
                      >
                        US Curriculum
                      </button>
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          window.location.hash = '#/curriculum/uk';
                        }}
                        className="text-left py-2 px-3 text-xs font-bold text-slate-600 hover:text-purple-900 rounded-lg"
                      >
                        UK Curriculum
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-left py-2 px-3 text-sm font-medium text-slate-700 hover:bg-purple-50 rounded-lg"
              >
                {link.label}
              </button>
            );
          })}

          <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('inquiry-form')}
              className="w-full py-3 bg-purple-800 text-white font-bold text-sm text-center rounded-xl shadow-md"
            >
              Book Free Trial Class
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
