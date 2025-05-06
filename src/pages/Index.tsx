
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductMenu from '@/components/ProductMenu';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <CartProvider>
      <Header />
      <main className="pt-16">
        <Hero />
        <ProductMenu />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </CartProvider>
  );
};

export default Index;
