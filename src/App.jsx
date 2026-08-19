// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyUnlearn from './components/WhyUnlearn';
import FounderBioSection from './components/FounderBioSection';
import SyllabusExplorer from './components/SyllabusExplorer';
import MathSandbox from './components/MathSandbox';
import InquiryForm from './components/InquiryForm';
import Testimonials from './components/Testimonials';
import AeoFaqSection from './components/AeoFaqSection';
import SeoAuditModal from './components/SeoAuditModal';
import Footer from './components/Footer';
import { getEducationalOrgSchema, getCourseSchemas, getFaqSchema } from './utils/seoSchema';

export default function App() {
  const [activeGrade, setActiveGrade] = useState(1);
  const [inquiryGrade, setInquiryGrade] = useState(null);
  const [seoModalOpen, setSeoModalOpen] = useState(false);

  // Inject JSON-LD Schemas into DOM head
  useEffect(() => {
    const orgSchema = getEducationalOrgSchema();
    const courseSchemas = getCourseSchemas();
    const faqSchema = getFaqSchema();

    const scriptOrg = document.createElement('script');
    scriptOrg.type = 'application/ld+json';
    scriptOrg.id = 'jsonld-org';
    scriptOrg.text = JSON.stringify(orgSchema);

    const scriptCourses = document.createElement('script');
    scriptCourses.type = 'application/ld+json';
    scriptCourses.id = 'jsonld-courses';
    scriptCourses.text = JSON.stringify(courseSchemas);

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.id = 'jsonld-faq';
    scriptFaq.text = JSON.stringify(faqSchema);

    document.head.appendChild(scriptOrg);
    document.head.appendChild(scriptCourses);
    document.head.appendChild(scriptFaq);

    return () => {
      document.getElementById('jsonld-org')?.remove();
      document.getElementById('jsonld-courses')?.remove();
      document.getElementById('jsonld-faq')?.remove();
    };
  }, []);

  const handleSelectGradeForInquiry = (gradeNum) => {
    setActiveGrade(gradeNum);
    setInquiryGrade(gradeNum);

    const formEl = document.getElementById('inquiry-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreSyllabus = () => {
    const el = document.getElementById('syllabus-explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-600 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Header */}
      <Navbar
        onOpenSeoModal={() => setSeoModalOpen(true)}
        onSelectGradeInquiry={handleSelectGradeForInquiry}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          onExploreClick={handleExploreSyllabus}
          onEnquireClick={() => handleSelectGradeForInquiry(activeGrade)}
        />

        {/* Founder & Lead Educator Personal Bio */}
        <FounderBioSection
          onEnquireClick={() => handleSelectGradeForInquiry(activeGrade)}
        />

        {/* Why Unlearn Philosophy */}
        <WhyUnlearn
          onEnquireClick={() => handleSelectGradeForInquiry(activeGrade)}
        />

        {/* Grade 1 to 12 Syllabus Explorer */}
        <SyllabusExplorer
          activeGrade={activeGrade}
          setActiveGrade={setActiveGrade}
          onSelectGradeForInquiry={handleSelectGradeForInquiry}
        />

        {/* Brilliant.org Inspired Interactive Math Sandbox */}
        <MathSandbox />

        {/* Customer Inquiry Form */}
        <InquiryForm
          preselectedGrade={inquiryGrade}
          onGradeChanged={(g) => setActiveGrade(g)}
        />

        {/* Bhanzu Inspired Social Proof & Parent Reviews */}
        <Testimonials
          onEnquireClick={() => handleSelectGradeForInquiry(activeGrade)}
        />

        {/* AEO FAQ Section */}
        <AeoFaqSection
          onOpenSeoModal={() => setSeoModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectGradeInquiry={handleSelectGradeForInquiry}
        onOpenSeoModal={() => setSeoModalOpen(true)}
      />

      {/* Technical SEO & AEO Schema Inspector Modal */}
      <SeoAuditModal
        isOpen={seoModalOpen}
        onClose={() => setSeoModalOpen(false)}
      />
    </div>
  );
}
