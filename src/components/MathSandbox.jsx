// src/components/MathSandbox.jsx
import React, { useState } from 'react';
import { Calculator, PieChart, Activity } from 'lucide-react';

export default function MathSandbox() {
  const [activeTab, setActiveTab] = useState('fraction');

  // Fraction State
  const [numerator, setNumerator] = useState(3);
  const [denominator, setDenominator] = useState(8);

  // Quadratic State (y = ax^2 + bx + c)
  const [a, setA] = useState(1);
  const [b, setB] = useState(-2);
  const [c, setC] = useState(-3);

  const fractionVal = (numerator / denominator).toFixed(3);
  const percentVal = ((numerator / denominator) * 100).toFixed(1);

  const vertexX = (-b / (2 * (a || 0.001))).toFixed(2);
  const vertexY = (c - (b * b) / (4 * (a || 0.001))).toFixed(2);
  const discriminant = b * b - 4 * a * c;

  return (
    <section id="math-sandbox" className="py-20 relative bg-white border-t border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Calculator className="w-4 h-4 text-amber-600" />
            <span>Brilliant.org Inspired Interactive Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-purple-950 tracking-tight">
            Interactive Visual Math Sandbox
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Test the LEARNTHEUNLEARN visual learning experience. Play with real-time sliders and watch geometric math principles unfold instantly.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          <button
            onClick={() => setActiveTab('fraction')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'fraction'
                ? 'bg-purple-800 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:text-purple-900 border border-slate-200'
            }`}
          >
            <PieChart className="w-4 h-4" />
            <span>1. Primary (Grade 1-5): Fraction & Decimal Visualizer</span>
          </button>
          <button
            onClick={() => setActiveTab('quadratic')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'quadratic'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-slate-100 text-slate-700 hover:text-purple-900 border border-slate-200'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>2. High School (Grade 8-12): Quadratic Parabola Grapher</span>
          </button>
        </div>

        {/* Container */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-xl max-w-5xl mx-auto">
          
          {/* TAB 1: Fraction Visualizer */}
          {activeTab === 'fraction' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-black text-purple-950">Visual Fraction Engine</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Adjust numerator and denominator to see live spatial slice breakdown.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col gap-2 shadow-sm">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Numerator (Selected Slices):</span>
                    <span className="text-purple-800 font-mono text-base">{numerator}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={denominator}
                    value={numerator}
                    onChange={(e) => setNumerator(Number(e.target.value))}
                    className="w-full accent-purple-800 cursor-pointer"
                  />
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col gap-2 shadow-sm">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Denominator (Total Equal Parts):</span>
                    <span className="text-indigo-800 font-mono text-base">{denominator}</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="12"
                    value={denominator}
                    onChange={(e) => {
                      const newDenom = Number(e.target.value);
                      setDenominator(newDenom);
                      if (numerator > newDenom) setNumerator(newDenom);
                    }}
                    className="w-full accent-indigo-800 cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Fraction</div>
                    <div className="text-base font-black text-purple-900 font-mono">
                      {numerator}/{denominator}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Decimal</div>
                    <div className="text-base font-black text-indigo-900 font-mono">
                      {fractionVal}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Percentage</div>
                    <div className="text-base font-black text-amber-600 font-mono">
                      {percentVal}%
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-purple-100 flex flex-col items-center justify-center gap-6 shadow-sm">
                <div className="relative w-56 h-56">
                  <svg viewBox="-1 -1 2 2" className="w-full h-full -rotate-90 transform">
                    {Array.from({ length: denominator }, (_, i) => {
                      const sliceAngle = (2 * Math.PI) / denominator;
                      const startAngle = i * sliceAngle;
                      const endAngle = (i + 1) * sliceAngle;

                      const x1 = Math.cos(startAngle);
                      const y1 = Math.sin(startAngle);
                      const x2 = Math.cos(endAngle);
                      const y2 = Math.sin(endAngle);

                      const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;
                      const pathData = `M 0 0 L ${x1} ${y1} A 1 1 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                      const isSelected = i < numerator;

                      return (
                        <path
                          key={i}
                          d={pathData}
                          fill={isSelected ? '#6B21A8' : '#F1F5F9'}
                          stroke="#FFFFFF"
                          strokeWidth="0.04"
                          className="transition-colors duration-300"
                        />
                      );
                    })}
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white px-3 py-1 rounded-full border border-purple-200 text-xs font-black text-purple-950 shadow-md">
                      {numerator} of {denominator} Slices
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-600 text-center max-w-sm">
                  ✨ Visualizing <code className="text-purple-900 font-bold">{numerator}/{denominator}</code> as active geometric area slices. Eliminates fraction division confusion for Grade 1-5 students!
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Quadratic Parabola Grapher */}
          {activeTab === 'quadratic' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-black text-purple-950">Quadratic Function Grapher</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Function: <code className="text-purple-900 font-bold font-mono">y = {a}x² + ({b})x + ({c})</code>
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 flex flex-col gap-1.5 shadow-sm">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Curvature (a):</span>
                    <span className="text-purple-800 font-mono">{a}</span>
                  </div>
                  <input
                    type="range"
                    min="-3"
                    max="3"
                    step="0.5"
                    value={a}
                    onChange={(e) => setA(Number(e.target.value))}
                    className="w-full accent-purple-800 cursor-pointer"
                  />
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 flex flex-col gap-1.5 shadow-sm">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Linear Slope Shift (b):</span>
                    <span className="text-indigo-800 font-mono">{b}</span>
                  </div>
                  <input
                    type="range"
                    min="-6"
                    max="6"
                    step="1"
                    value={b}
                    onChange={(e) => setB(Number(e.target.value))}
                    className="w-full accent-indigo-800 cursor-pointer"
                  />
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 flex flex-col gap-1.5 shadow-sm">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Y-Intercept (c):</span>
                    <span className="text-amber-600 font-mono">{c}</span>
                  </div>
                  <input
                    type="range"
                    min="-8"
                    max="8"
                    step="1"
                    value={c}
                    onChange={(e) => setC(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 grid grid-cols-2 gap-3 text-xs shadow-sm">
                  <div>
                    <span className="text-slate-500 block">Vertex (h, k):</span>
                    <strong className="text-purple-950 font-mono">({vertexX}, {vertexY})</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Discriminant (Δ):</span>
                    <strong className="text-amber-600 font-mono">{discriminant}</strong>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-purple-100 flex flex-col items-center justify-center gap-4 shadow-sm">
                <div className="relative w-full h-64 bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center">
                  <svg viewBox="-10 -10 20 20" className="w-full h-full transform scale-y-[-1]">
                    <line x1="-10" y1="0" x2="10" y2="0" stroke="#475569" strokeWidth="0.2" />
                    <line x1="0" y1="-10" x2="0" y2="10" stroke="#475569" strokeWidth="0.2" />

                    <path
                      d={Array.from({ length: 41 }, (_, i) => {
                        const x = (i - 20) * 0.5;
                        const y = a * x * x + b * x + c;
                        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="0.6"
                      strokeLinecap="round"
                    />

                    <circle cx={vertexX} cy={vertexY} r="0.6" fill="#C084FC" />
                  </svg>
                </div>

                <div className="text-xs text-slate-600 text-center">
                  📈 <strong className="text-purple-950">High School Algebra II / Calculus:</strong> Seeing parabola transformations live turns equations into intuitive curves.
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
