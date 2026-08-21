// src/utils/seoSchema.js
import { SYLLABUS_DATA } from '../data/syllabusData';
import { FAQ_DATA } from '../data/faqData';

export function getEducationalOrgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'LEARNTHEUNLEARN',
    alternateName: 'Learn The Unlearn Math Institution',
    url: 'https://learntheunlearn.edu',
    logo: 'https://learntheunlearn.edu/logo.png',
    slogan: 'Learn Beyond Limits',
    founder: {
      '@type': 'Person',
      name: 'Priyadharshini',
      honorificSuffix: 'M.Sc. Math, B.Ed.',
      jobTitle: 'Founder & Chief Educator',
    },
    description: 'Premier online math institution offering visual, intuitive math learning for Grade 1 through Grade 12. Founded by Priyadharshini M.Sc. Math, B.Ed. Motto: Learn Beyond Limits.',
    sameAs: [
      'https://facebook.com/learntheunlearn',
      'https://twitter.com/learntheunlearn',
      'https://instagram.com/learntheunlearn',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India',
      addressLocality: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 73584 84736',
      contactType: 'Customer Inquiry & Admissions',
      availableLanguage: ['English', 'Spanish', 'Hindi'],
    },
    offers: {
      '@type': 'Offer',
      category: 'Online Math Classes Grade 1 to 12',
      price: '0.00',
      priceCurrency: 'USD',
      itemOffered: {
        '@type': 'Service',
        name: 'Free Diagnostic Math Evaluation & Trial Class by Priyadharshini M.Sc. Math, B.Ed.',
      },
    },
  };
}

export function getCourseSchemas() {
  return SYLLABUS_DATA.map((item) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `LEARNTHEUNLEARN Grade ${item.grade} Math Syllabus`,
    description: `${item.subtitle} - Learn Beyond Limits with Priyadharshini M.Sc. Math, B.Ed.`,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'LEARNTHEUNLEARN',
      sameAs: 'https://learntheunlearn.edu',
    },
    educationalLevel: `Grade ${item.grade}`,
    courseCode: `LTU-G${item.grade}`,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online Live Interactive',
      duration: 'P1Y',
    },
    hasPart: item.topics.map((t) => ({
      '@type': 'Syllabus',
      name: t.title,
      description: t.desc,
    })),
  }));
}

export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.aiAnswer,
      },
    })),
  };
}
