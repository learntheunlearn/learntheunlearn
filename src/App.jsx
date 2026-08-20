// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutUs from './components/AboutUs';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import CurriculumPage from './components/CurriculumPage';
import SyllabusPage from './components/SyllabusPage';
import { getEducationalOrgSchema, getCourseSchemas, getFaqSchema } from './utils/seoSchema';

const getRoute = (hash) => {
  if (!hash || hash === '#/' || hash.startsWith('#hero') || hash === '#' || hash === '#welcome') {
    return { type: 'home', section: 'welcome' };
  }
  if (hash === '#/about-us' || hash === '#about-us') {
    return { type: 'about-us' };
  }
  if (hash === '#/contact-us' || hash === '#contact-us' || hash === '#inquiry-form') {
    return { type: 'contact-us' };
  }
  if (hash === '#/curriculum/us') {
    return { type: 'curriculum', curriculumType: 'US' };
  }
  if (hash === '#/curriculum/uk') {
    return { type: 'curriculum', curriculumType: 'UK' };
  }
  
  const usGradeMatch = hash.match(/^#\/curriculum\/us\/grade\/([^/]+)$/);
  if (usGradeMatch) {
    return { type: 'syllabus', curriculumType: 'US', grade: usGradeMatch[1] };
  }

  const ukGradeMatch = hash.match(/^#\/curriculum\/uk\/grade\/([^/]+)$/);
  if (ukGradeMatch) {
    return { type: 'syllabus', curriculumType: 'UK', grade: ukGradeMatch[1] };
  }

  return { type: 'home', section: 'welcome' };
};

export default function App() {
  const [activeGrade, setActiveGrade] = useState(1);
  const [inquiryGrade, setInquiryGrade] = useState(null);
  const [route, setRoute] = useState(getRoute(window.location.hash));

  // Listen to hash change routing
  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = getRoute(window.location.hash);
      setRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-600 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Header */}
      <Navbar />

      <main>
        {route.type === 'home' && (
          <HomeSection />
        )}

        {route.type === 'about-us' && (
          <AboutUs />
        )}

        {route.type === 'contact-us' && (
          <div className="pt-20 min-h-screen bg-slate-50">
            <InquiryForm />
          </div>
        )}

        {route.type === 'curriculum' && (
          <CurriculumPage 
            type={route.curriculumType}
            onSelectGrade={(gradeNum) => {
              window.location.hash = `#/curriculum/${route.curriculumType.toLowerCase()}/grade/${gradeNum}`;
            }}
          />
        )}

        {route.type === 'syllabus' && (
          <SyllabusPage 
            type={route.curriculumType}
            gradeNum={route.grade}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectGradeInquiry={handleSelectGradeForInquiry}
      />
    </div>
  );
}
