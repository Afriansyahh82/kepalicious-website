
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductMenu from '@/components/ProductMenu';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Handle hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about' && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#contact' && contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#menu' && menuRef.current) {
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Call once on mount in case there's already a hash in the URL
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <CartProvider>
      <Header />
      <main className="pt-16">
        <Hero />
        <div ref={menuRef} id="menu">
          <ProductMenu />
        </div>
        <Features />
        <Testimonials />
        <div ref={aboutRef} id="about">
          <AboutSection />
        </div>
        <div ref={contactRef} id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </CartProvider>
  );
};

export default Index;
