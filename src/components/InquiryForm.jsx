// src/components/InquiryForm.jsx
import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, User, Mail, Phone, GraduationCap, MessageSquare, Sparkles, ShieldCheck, Download, AlertCircle, Award } from 'lucide-react';

export default function InquiryForm({ preselectedGrade, onGradeChanged }) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    grade: 'Grade 4',
    preferredTime: 'Evening (5 PM - 8 PM)',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [inquiryHistory, setInquiryHistory] = useState([]);

  useEffect(() => {
    if (preselectedGrade) {
      setFormData((prev) => ({
        ...prev,
        grade: `Grade ${preselectedGrade}`,
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
  };

  return (
    <section id="inquiry-form" className="py-20 relative bg-gradient-to-b from-purple-50/40 via-white to-slate-50 border-t border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-wider self-start shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Admissions & Diagnostic Inquiry</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-purple-950 tracking-tight leading-tight">
              Start Your Child’s Math Transformation Today
            </h2>

            <p className="text-slate-700 text-base leading-relaxed">
              Book a complimentary 1-on-1 visual math diagnostic session for <strong className="text-purple-950 font-black">Grade 1 to Grade 12</strong> guided by <strong className="text-purple-900 font-bold">Priyadharshini M.Sc. Math, B.Ed.</strong>
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
                  <p className="text-xs text-slate-600">Customized learning plan aligning with CBSE, ICSE, IB, and Common Core.</p>
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
                      placeholder="e.g. Rajesh Kumar"
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
                        placeholder="+91 98765 43210"
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
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Student's Current Grade <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.grade}
                        onChange={(e) => {
                          setFormData({ ...formData, grade: e.target.value });
                        }}
                        className="w-full pl-10 pr-8 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-purple-600 appearance-none cursor-pointer font-bold"
                      >
                        {[
                          'Grade 1 Math Syllabus',
                          'Grade 2 Math Syllabus',
                          'Grade 3 Math Syllabus',
                          'Grade 4 Math Syllabus',
                          'Grade 5 Math Syllabus',
                          'Grade 6 Math Syllabus',
                          'Grade 7 Math Syllabus',
                          'Grade 8 Math Syllabus',
                          'Algebra 1 Math Syllabus',
                          'Geometry Math Syllabus',
                          'Algebra 2 Math Syllabus',
                          'Precalculus Math Syllabus',
                          'Statistics Math Syllabus',
                          'Calculus Math Syllabus',
                          'PSAT Math Syllabus',
                          'SAT Math Syllabus'
                        ].map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>
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
                  className="w-full py-4 bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 hover:from-purple-900 hover:to-indigo-950 text-white font-black text-base rounded-2xl shadow-xl shadow-purple-900/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5 fill-white" />
                      <span>Submit Inquiry for {formData.grade}</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  🔒 We respect your privacy. Your info is 100% confidential and used solely to schedule your free diagnostic session.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Submission Modal */}
      {submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full border border-purple-200 shadow-2xl text-center relative">
            <div className="w-16 h-16 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-800 mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-purple-950">Inquiry Received Successfully!</h3>
            <p className="text-xs text-purple-800 font-mono font-bold mt-1">
              Reference ID: {submittedData.id}
            </p>

            <div className="my-6 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Parent Name:</span>
                <strong className="text-slate-900">{submittedData.parentName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Email:</span>
                <strong className="text-slate-900">{submittedData.email}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Number:</span>
                <strong className="text-slate-900">{submittedData.phone}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Grade:</span>
                <strong className="text-purple-800 font-bold">{submittedData.grade}</strong>
              </div>
              {submittedData.details && (
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-slate-500 block mb-0.5">Details:</span>
                  <span className="text-slate-800">{submittedData.details}</span>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-700 mb-6">
              Our lead counselor will contact you at <strong className="text-purple-900">{submittedData.phone}</strong> during <span className="text-purple-800 font-bold">{submittedData.preferredTime}</span>.
            </p>

            <button
              onClick={() => setSubmittedData(null)}
              className="w-full py-3 bg-purple-800 text-white font-extrabold rounded-xl hover:bg-purple-900 transition-colors text-sm shadow-md"
            >
              Done / Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
