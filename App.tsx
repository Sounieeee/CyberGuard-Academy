import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ProgressProvider } from './contexts/ProgressContext';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const LessonsPage = lazy(() => import('./pages/LessonsPage'));
const LessonDetailPage = lazy(() => import('./pages/LessonDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('./pages/TermsOfUsePage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const FinalTestPage = lazy(() => import('./pages/FinalTestPage'));
const CompletionPage = lazy(() => import('./pages/CompletionPage'));

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <ProgressProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col bg-primary font-sans">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Suspense fallback={<LoadingSpinner />}>
              <div className="animate-fadeIn">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/lessons" element={<LessonsPage />} />
                  <Route path="/lessons/:id" element={<LessonDetailPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/resources" element={<ResourcesPage />} />
                  <Route path="/glossary" element={<GlossaryPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-of-use" element={<TermsOfUsePage />} />
                  <Route path="/final-test" element={<FinalTestPage />} />
                  <Route path="/completion-certificate" element={<CompletionPage />} />
                </Routes>
              </div>
            </Suspense>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ProgressProvider>
  );
};

export default App;