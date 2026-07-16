import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-white font-body">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
