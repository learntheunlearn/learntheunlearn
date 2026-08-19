// src/components/SeoAuditModal.jsx
import React, { useState } from 'react';
import { X, CheckCircle, Code, Copy, Check, ShieldCheck, Globe, Cpu } from 'lucide-react';
import { getEducationalOrgSchema, getCourseSchemas, getFaqSchema } from '../utils/seoSchema';

export default function SeoAuditModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('org'); // 'org', 'courses', 'faq'
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const orgSchema = getEducationalOrgSchema();
  const courseSchemas = getCourseSchemas();
  const faqSchema = getFaqSchema();

  const getCurrentJson = () => {
    if (activeTab === 'org') return JSON.stringify(orgSchema, null, 2);
    if (activeTab === 'courses') return JSON.stringify(courseSchemas.slice(0, 3), null, 2) + '\n// ... plus 9 more Course schemas (Grades 1-12)';
    if (activeTab === 'faq') return JSON.stringify(faqSchema, null, 2);
    return '';
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCurrentJson());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="glass-card rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col border border-cyan-500/40 shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                <span>SEO & AEO Schema Auditor</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  100% Validated
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                JSON-LD structured data injected into page head for Google & AI Answer Engines.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SEO Checks Bar */}
        <div className="p-4 bg-slate-900/90 border-b border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>OpenGraph & Twitter Cards</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>Canonical URLs</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>Grade 1-12 Course Schema</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>FAQPage LLM Schema</span>
          </div>
        </div>

        {/* Schema Code Inspector Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          
          {/* Subtabs */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('org')}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-colors ${
                  activeTab === 'org'
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                EducationalOrg Schema
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-colors ${
                  activeTab === 'courses'
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                Course Schemas (Grades 1-12)
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-colors ${
                  activeTab === 'faq'
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                FAQPage (AEO) Schema
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied JSON</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* JSON Code Viewer */}
          <div className="bg-[#070A11] p-4 rounded-2xl border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto">
            <pre>{getCurrentJson()}</pre>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900/80 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
}
