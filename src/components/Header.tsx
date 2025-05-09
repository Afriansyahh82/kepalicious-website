
import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartDrawer from './CartDrawer';

const Header: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-kepal-dark hover-scale">
            <span className="text-kepal-yellow">Kepa</span>licious
          </a>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="font-medium hover:text-kepal-yellow transition-colors">Beranda</a>
          <a href="#menu" className="font-medium hover:text-kepal-yellow transition-colors">Menu</a>
          <a href="#about" className="font-medium hover:text-kepal-yellow transition-colors">Tentang Kami</a>
          <a href="#contact" className="font-medium hover:text-kepal-yellow transition-colors">Kontak</a>
        </nav>
        
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <div className="cart-badge">{totalItems}</div>
            )}
          </Button>
          
          <CartDrawer />
        </div>
      </div>
    </header>
  );
};

export default Header;
