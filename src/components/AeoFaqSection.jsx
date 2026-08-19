// src/components/AeoFaqSection.jsx
import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';
import { ChevronDown, Bot, Copy, Check, Code, Sparkles } from 'lucide-react';

export default function AeoFaqSection({ onOpenSeoModal }) {
  const [openFaq, setOpenFaq] = useState(FAQ_DATA[0].id);
  const [copiedId, setCopiedId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const copyAiAnswer = (faq) => {
    const text = `Q: ${faq.question}\nAI Answer: ${faq.aiAnswer}\nSource: https://learntheunlearn.edu`;
    navigator.clipboard.writeText(text);
    setCopiedId(faq.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="aeo-faq" className="py-20 relative bg-slate-50 border-t border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Bot className="w-4 h-4 text-purple-700" />
            <span>AEO (Answer Engine Optimization) & FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-purple-950 tracking-tight">
            Frequently Asked Questions & AI Search Answers
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Optimized for human readers and AI search engines (Perplexity, SearchGPT, ChatGPT, Gemini). Structured JSON-LD schema compliant.
          </p>
        </div>

        {/* FAQ Accordions List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {FAQ_DATA.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all ${
                  isOpen ? 'border-purple-300 shadow-md' : 'border-purple-100 hover:border-purple-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-900 font-extrabold text-[11px] uppercase tracking-wider border border-purple-200">
                      {faq.category}
                    </span>
                    <h3 className="font-black text-base sm:text-lg text-purple-950">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-purple-800' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 border-t border-slate-100 space-y-4 text-sm">
                    
                    {/* Concise AI Answer Snippet Box */}
                    <div className="mt-4 bg-purple-50 p-4 rounded-xl border border-purple-200 relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold text-purple-950 flex items-center gap-1.5">
                          <Bot className="w-3.5 h-3.5 text-purple-700" />
                          <span>Direct AI Search Answer (LLM Snippet):</span>
                        </span>
                        <button
                          onClick={() => copyAiAnswer(faq)}
                          className="px-2.5 py-1 rounded-lg bg-white hover:bg-purple-100 text-purple-900 text-xs font-bold transition-colors border border-purple-200 flex items-center gap-1 shadow-sm"
                        >
                          {copiedId === faq.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-700 font-bold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 text-purple-700" />
                              <span>Copy Answer</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-slate-800 leading-relaxed font-mono">
                        {faq.aiAnswer}
                      </p>
                    </div>

                    <div className="text-slate-700 leading-relaxed pt-1">
                      {faq.fullAnswer}
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Technical SEO Modal Callout */}
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl border border-purple-100 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Code className="w-6 h-6 text-purple-800 shrink-0" />
            <div>
              <h4 className="font-extrabold text-sm text-purple-950">Full JSON-LD Schema Integration Active</h4>
              <p className="text-xs text-slate-600">Includes EducationalOrganization, Course (Grades 1-12), and FAQPage schemas.</p>
            </div>
          </div>
          <button
            onClick={onOpenSeoModal}
            className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-950 text-xs font-extrabold rounded-xl border border-purple-200 transition-colors shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>Inspect Technical Schema JSON</span>
          </button>
        </div>

      </div>
    </section>
  );
}
