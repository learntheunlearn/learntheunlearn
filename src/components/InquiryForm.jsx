// src/components/InquiryForm.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle2, User, Mail, Phone, GraduationCap, MessageSquare, Sparkles, ShieldCheck, Download, AlertCircle, Award, ChevronDown } from 'lucide-react';

const GRADE_OPTIONS = [
  'Grade 1',
  'Grade 2',
  'Grade 3',
  'Grade 4',
  'Grade 5',
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Algebra 1',
  'Geometry',
  'Algebra 2',
  'Precalculus',
  'Statistics',
  'Calculus',
  'PSAT',
  'SAT'
];

export default function InquiryForm({ preselectedGrade, onGradeChanged }) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    grade: 'Grade 4',
    preferredTime: 'Evening (5 PM - 8 PM)',
    details: '',
  });

  const [gradeDropdownOpen, setGradeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [inquiryHistory, setInquiryHistory] = useState([]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setGradeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    if (preselectedGrade) {
      const match = GRADE_OPTIONS.find((g) => g.toLowerCase() === `grade ${preselectedGrade}`.toLowerCase() || g.toLowerCase() === `${preselectedGrade}`.toLowerCase());
      setFormData((prev) => ({
        ...prev,
        grade: match || `Grade ${preselectedGrade}`,
      }));
    }
  }, [preselectedGrade]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('LTU_INQUIRIES');
      if (saved) setInquiryHistory(JSON.parse(saved));
    } catch (e) {}
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent/Student Name is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email ID is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid Email ID.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact Number is required.';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Contact Number must contain at least 7 digits.';
    }

    if (!formData.grade) newErrors.grade = 'Please select a Grade.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const submission = {
        id: `INQ-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toLocaleString(),
        ...formData,
      };

      const updated = [submission, ...inquiryHistory];
      setInquiryHistory(updated);
      try {
        localStorage.setItem('LTU_INQUIRIES', JSON.stringify(updated));
      } catch (err) {}

      setIsSubmitting(false);
      setSubmittedData(submission);
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        grade: 'Grade 4',
        preferredTime: 'Evening (5 PM - 8 PM)',
        details: '',
      });
      setErrors({});
    }, 800);
  };

  const exportInquiries = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(inquiryHistory, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "LTU_Customer_Inquiries.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    downloadAnchor.remove();
  };

  return (
    <section id="inquiry-form" className="py-20 pb-36 relative bg-gradient-to-b from-purple-50/40 via-white to-slate-50 border-t border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider self-start shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Admissions & Diagnostic Inquiry</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-purple-950 tracking-tight leading-tight">
              Start Your Child’s Math Transformation Today
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Book a complimentary 1-on-1 visual math diagnostic session.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-purple-100 shadow-md">
                <ShieldCheck className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-extrabold text-purple-950">Free Diagnostic Evaluation</h4>
                  <p className="text-xs text-slate-600">Zero commitment. Identify conceptual gaps across school syllabus.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-purple-100 shadow-md">
                <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-extrabold text-purple-950">Learn Beyond Limits Roadmap</h4>
                  <p className="text-xs text-slate-600">Customized learning plan aligning with US, UK, and International standards.</p>
                </div>
              </div>
            </div>

            {inquiryHistory.length > 0 && (
              <div className="pt-2">
                <button
                  onClick={exportInquiries}
                  className="text-xs text-purple-800 hover:text-purple-950 font-bold flex items-center gap-1.5 underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Saved Inquiries ({inquiryHistory.length} logged)</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-xl relative">
              
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-purple-950 flex items-center gap-2">
                    <span>Book Free Trial Class</span>
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#51247A] p-1 shadow-sm shrink-0">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Parent / Student Full Name <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.parentName ? 'border-red-500' : 'border-slate-200 focus:border-purple-600'
                      }`}
                    />
                  </div>
                  {errors.parentName && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.parentName}
                    </p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-slate-200 focus:border-purple-600'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Contact Number <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="+1 461 555-5679"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-purple-600'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Grade Selector & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Student Grade Custom Downward-Opening Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Student's Current Grade <span className="text-amber-600">*</span>
                    </label>
                    
                    <button
                      type="button"
                      onClick={() => setGradeDropdownOpen(!gradeDropdownOpen)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-purple-600 flex items-center justify-between text-left font-bold transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{formData.grade}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${gradeDropdownOpen ? 'rotate-180 text-purple-700' : ''}`} />
                    </button>

                    {/* Guaranteed Downward Menu */}
                    {gradeDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 z-50 mt-1.5 bg-white border border-purple-100 rounded-2xl shadow-2xl max-h-60 overflow-y-auto py-2">
                        {GRADE_OPTIONS.map((g) => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, grade: g });
                              setGradeDropdownOpen(false);
                              if (onGradeChanged) {
                                const num = parseInt(g.replace(/\D/g, ''), 10);
                                if (num) onGradeChanged(num);
                              }
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors flex items-center justify-between ${
                              formData.grade === g 
                                ? 'bg-purple-50 text-purple-950 font-black' 
                                : 'text-slate-700 hover:bg-slate-50 hover:text-purple-900'
                            }`}
                          >
                            <span>{g}</span>
                            {formData.grade === g && (
                              <CheckCircle2 className="w-4 h-4 text-purple-700" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Call Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-purple-600 appearance-none cursor-pointer"
                    >
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Other Details / Specific Learning Goals
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <textarea
                      rows={3}
                      placeholder="Tell us about your student's math challenges (e.g. struggles with Fractions in Grade 4, wants AP Calculus prep, fast speed mental math)..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 hover:from-purple-900 hover:to-indigo-950 text-white font-black text-base rounded-2xl shadow-xl shadow-purple-900/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5 fill-white" />
                      <span>Book Free Trial Class for {formData.grade}</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  🔒 We respect your privacy. Your info is 100% confidential and used solely to schedule your free diagnostic session.
                </p>

              </form>

              {/* Success Notification Modal */}
              {submittedData && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in">
                  <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-purple-100 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Class Booked Successfully!</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Thank you <strong className="text-purple-950">{submittedData.parentName}</strong>. We have received your booking for <strong className="text-purple-950">{submittedData.grade}</strong>. Our academic team will contact you at <strong className="text-purple-950">{submittedData.phone}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmittedData(null)}
                      className="w-full py-3 bg-purple-900 text-white rounded-xl font-bold text-sm hover:bg-purple-950 transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
