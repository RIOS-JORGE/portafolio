import { lazy, Suspense } from 'react';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';

const Resume = lazy(() => import('@/components/sections/Resume'));

function ResumeFallback() {
  return (
    <div className="py-28 bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-accent animate-pulse">Loading Resume...</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-white font-body">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Suspense fallback={<ResumeFallback />}>
        <Resume />
      </Suspense>
      <Footer />
    </div>
  );
}
