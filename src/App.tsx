'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import TechDomain from '@/components/TechDomain';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={`min-h-screen bg-background text-foreground dark`}>
      <Header scrolled={scrolled} />
      <About />
      <TechDomain />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
