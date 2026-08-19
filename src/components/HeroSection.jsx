// src/components/HeroSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowRight, Star, Zap, Compass, CheckCircle2, Award } from 'lucide-react';

export default function HeroSection({ onExploreClick, onEnquireClick }) {
  const canvasRef = useRef(null);
  const [activeDemo, setActiveDemo] = useState('visual');
  const [speedVal, setSpeedVal] = useState(12);

  // Animated Math Canvas Engine for Light Theme
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.015;

      const width = canvas.width;
      const height = canvas.height;

      // Draw Sine / Cosine Wave Grid in Purple/Indigo
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(88, 44, 131, 0.12)';
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x += 4) {
        const y = height * 0.5 + Math.sin(x * 0.008 + t) * 40 + Math.cos(x * 0.015 + t * 0.5) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Secondary Wave in Amber/Gold
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.15)';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < width; x += 6) {
        const y = height * 0.5 + Math.cos(x * 0.006 - t * 0.8) * 60;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Orbiting Purple/Gold Math Nodes
      const centerX = width * 0.75;
      const centerY = height * 0.45;
      const radius = Math.min(width, height) * 0.25;

      for (let i = 0; i < 6; i++) {
        const angle = t * 0.5 + (i * Math.PI) / 3;
        const px = centerX + Math.cos(angle) * radius;
        const py = centerY + Math.sin(angle * 1.2) * (radius * 0.5);

        ctx.beginPath();
        ctx.arc(px, py, 4 + Math.sin(t + i) * 2, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? 'rgba(88, 44, 131, 0.7)' : 'rgba(245, 158, 11, 0.8)';
        ctx.shadowColor = i % 2 === 0 ? '#582C83' : '#F59E0B';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(px, py);
        ctx.strokeStyle = 'rgba(88, 44, 131, 0.08)';
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-radial-gradient-light">
      {/* Background Canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-90">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Radial Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            
            {/* Top Pill Badge highlighting Founder & Motto */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-purple-200 text-xs font-bold text-purple-900 self-center lg:self-start shadow-md shadow-purple-900/5">
              <img src="/logo.png" alt="Logo" className="w-5 h-5 rounded-md object-contain bg-[#51247A] p-0.5" />
              <span>Founded by <strong className="text-purple-950 font-black">Priyadharshini M.Sc. Math, B.Ed.</strong></span>
              <span className="bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase">
                Learn Beyond Limits
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-purple-950 leading-[1.15]">
              Don't Just Memorize Math.{' '}
              <span className="text-gradient-purple block mt-1">Unlearn to Master It.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl font-normal leading-relaxed">
              Visual intuition & mental speed math for <strong className="text-purple-900 font-bold">Grade 1 through Grade 12</strong>. Empowering students to build lifelong numerical confidence.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-bold text-slate-800 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                <span>Visual Intuition First</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Speed Mental Math</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                <span>Full Grade 1-12 Syllabus</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onEnquireClick}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 hover:from-purple-900 hover:to-indigo-950 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-purple-900/20 hover:shadow-purple-900/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300" />
                <span>Book Free Trial Class</span>
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-slate-100 text-purple-950 font-extrabold text-base rounded-2xl border border-purple-200 transition-all flex items-center justify-center gap-2 shadow-sm group"
              >
                <span>Explore Grades 1-12</span>
                <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-purple-100 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-500 font-black text-lg">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>4.9 / 5.0</span>
                </div>
                <div className="text-xs text-slate-600 font-medium">Parent Trust Rating</div>
              </div>
              <div>
                <div className="font-black text-lg text-purple-950">45,000+</div>
                <div className="text-xs text-slate-600 font-medium">Active Students</div>
              </div>
              <div>
                <div className="font-black text-lg text-purple-800">4.2x Speed</div>
                <div className="text-xs text-slate-600 font-medium">Problem Solving Gain</div>
              </div>
            </div>

          </div>

          {/* Right Column: Inspired Interactive Learning Card (Light Theme) */}
          <div className="lg:col-span-5">
            <div className="glass-card-light rounded-3xl p-6 border border-purple-100 shadow-xl relative overflow-hidden bg-white">
              
              {/* Card Header Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-purple-600 animate-pulse" />
                  <span className="text-xs font-bold text-purple-950 uppercase tracking-wider">
                    Teaching Style Preview
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-[11px] font-bold">
                  <button
                    onClick={() => setActiveDemo('visual')}
                    className={`px-3 py-1 rounded-lg transition-colors ${
                      activeDemo === 'visual'
                        ? 'bg-purple-800 text-white shadow'
                        : 'text-slate-600 hover:text-purple-900'
                    }`}
                  >
                    Visual (Brilliant)
                  </button>
                  <button
                    onClick={() => setActiveDemo('speed')}
                    className={`px-3 py-1 rounded-lg transition-colors ${
                      activeDemo === 'speed'
                        ? 'bg-amber-400 text-slate-950 shadow'
                        : 'text-slate-600 hover:text-purple-900'
                    }`}
                  >
                    Speed Math (Bhanzu)
                  </button>
                </div>
              </div>

              {/* Demo Mode 1: Visual Fraction & Geometry */}
              {activeDemo === 'visual' && (
                <div className="py-6 flex flex-col gap-4">
                  <div className="text-xs font-bold text-purple-900 flex items-center justify-between">
                    <span>Grade 4-9 Concept: Visualizing Area Fractions</span>
                    <span className="text-[10px] bg-purple-100 text-purple-900 px-2 py-0.5 rounded font-extrabold border border-purple-200">
                      Interactive
                    </span>
                  </div>

                  <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 flex flex-col gap-3">
                    <div className="text-sm font-bold text-slate-900 flex justify-between">
                      <span>Area Fraction Representation:</span>
                      <span className="text-purple-800 font-mono font-bold">3 / 4 = 75%</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 h-16">
                      {[1, 2, 3].map((idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-tr from-purple-700 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-white text-sm shadow-sm"
                        >
                          1/4
                        </div>
                      ))}
                      <div className="bg-white rounded-xl border border-dashed border-purple-300 flex items-center justify-center font-bold text-slate-400 text-sm">
                        1/4
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      💡 <strong>Intuition:</strong> No rote division memorization needed. Students visually connect fractions to spatial geometry in seconds.
                    </p>
                  </div>

                  <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 flex items-center gap-3">
                    <Compass className="w-5 h-5 text-amber-600 shrink-0" />
                    <span className="text-xs text-slate-800 font-medium">
                      Curriculum authored by <strong className="text-purple-950 font-bold">Priyadharshini M.Sc. Math, B.Ed.</strong>
                    </span>
                  </div>
                </div>
              )}

              {/* Demo Mode 2: Mental Speed Math Simulator */}
              {activeDemo === 'speed' && (
                <div className="py-6 flex flex-col gap-4">
                  <div className="text-xs font-bold text-amber-800 flex items-center justify-between">
                    <span>Grade 3-8 Concept: Speed Multiplication</span>
                    <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold border border-amber-200">
                      Live Slider
                    </span>
                  </div>

                  <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-800">Multiply {speedVal} × 25:</span>
                      <span className="text-xl font-black text-amber-600 font-mono">
                        {speedVal * 25}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="4"
                      max="48"
                      step="4"
                      value={speedVal}
                      onChange={(e) => setSpeedVal(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />

                    <div className="bg-white p-3 rounded-xl border border-amber-200 text-xs text-slate-700 flex flex-col gap-1 shadow-sm">
                      <span className="font-bold text-slate-900 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        Unlearn Shortcut Method:
                      </span>
                      <span>
                        Divide by 4: <code className="text-purple-900 font-mono font-bold">{speedVal} ÷ 4 = {speedVal / 4}</code> then append <code className="text-purple-900 font-mono font-bold">00</code> ➔ <strong className="text-amber-600 font-mono">{(speedVal / 4) * 100}</strong>!
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 text-center">
                    ⚡ Mental algorithms designed to build speed math confidence!
                  </p>
                </div>
              )}

              {/* Quick Inquiry Button */}
              <button
                onClick={onEnquireClick}
                className="w-full py-3 bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs rounded-xl transition-colors border border-purple-200 flex items-center justify-center gap-2"
              >
                <span>Select Grade 1-12 to Book Trial</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-700" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
