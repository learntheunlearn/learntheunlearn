// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import SyllabusExplorer from './components/SyllabusExplorer';
import InquiryForm from './components/InquiryForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CurriculumPage from './components/CurriculumPage';
import SyllabusPage from './components/SyllabusPage';
import { getEducationalOrgSchema, getCourseSchemas, getFaqSchema } from './utils/seoSchema';

const getRoute = (hash) => {
  if (!hash || hash === '#/' || hash.startsWith('#hero') || hash === '#') {
    return { type: 'home', section: 'hero' };
  }
  if (hash === '#about-us') {
    return { type: 'home', section: 'about-us' };
  }
  if (hash === '#reviews') {
    return { type: 'home', section: 'reviews' };
  }
  if (hash === '#inquiry-form') {
    return { type: 'home', section: 'inquiry-form' };
  }
  if (hash === '#/curriculum/us') {
    return { type: 'curriculum', curriculumType: 'US' };
  }
  if (hash === '#/curriculum/uk') {
    return { type: 'curriculum', curriculumType: 'UK' };
  }
  
  const usGradeMatch = hash.match(/^#\/curriculum\/us\/grade\/(\d+)$/);
  if (usGradeMatch) {
    return { type: 'syllabus', curriculumType: 'US', grade: parseInt(usGradeMatch[1], 10) };
  }

  const ukGradeMatch = hash.match(/^#\/curriculum\/uk\/grade\/(\d+)$/);
  if (ukGradeMatch) {
    return { type: 'syllabus', curriculumType: 'UK', grade: parseInt(ukGradeMatch[1], 10) };
  }

  return { type: 'home', section: 'hero' };
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

      if (newRoute.type === 'home') {
        setTimeout(() => {
          const el = document.getElementById(newRoute.section);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Init scroll check if initial hash is set
    if (route.type === 'home' && route.section !== 'hero') {
      setTimeout(() => {
        const el = document.getElementById(route.section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }

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
      <Navbar />

      <main>
        {route.type === 'home' && (
          <>
            {/* Hero Section (Home) */}
            <HeroSection
              onExploreClick={handleExploreSyllabus}
              onEnquireClick={() => handleSelectGradeForInquiry(activeGrade)}
            />

            {/* About Us */}
            <AboutUs />

            {/* Grade 1 to 12 Syllabus Explorer (Curriculum) */}
            <SyllabusExplorer
              activeGrade={activeGrade}
              setActiveGrade={setActiveGrade}
              onSelectGradeForInquiry={handleSelectGradeForInquiry}
            />

            {/* Feedback & Reviews */}
            <Testimonials
              onEnquireClick={() => handleSelectGradeForInquiry(activeGrade)}
            />

            {/* Contact Us - Inquiry Form */}
            <InquiryForm
              preselectedGrade={inquiryGrade}
              onGradeChanged={(g) => setActiveGrade(g)}
            />
          </>
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
