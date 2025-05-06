
import React, { useState } from 'react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductMenu: React.FC = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="menu" className="py-16 bg-kepal-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Menu Kepalicious</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nikmati berbagai pilihan menu nasi kepal dan kimbab kami yang lezat dan dibuat dengan bahan berkualitas terbaik.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white p-1 rounded-full shadow-md">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'all' ? 'bg-kepal-yellow text-kepal-dark' : 'hover:bg-gray-100'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setActiveCategory('nasi-kepal')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'nasi-kepal' ? 'bg-kepal-yellow text-kepal-dark' : 'hover:bg-gray-100'
              }`}
            >
              Nasi Kepal
            </button>
            <button
              onClick={() => setActiveCategory('kimbab')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'kimbab' ? 'bg-kepal-yellow text-kepal-dark' : 'hover:bg-gray-100'
              }`}
            >
              Kimbab
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md product-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    // Fallback images based on category
                    const target = e.target as HTMLImageElement;
                    if (product.category === 'nasi-kepal') {
                      target.src = 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
                    } else {
                      target.src = 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
                    }
                  }}
                />
                <div className="absolute top-2 right-2 bg-kepal-yellow text-kepal-dark px-2 py-1 rounded-full text-xs font-semibold">
                  {product.category === 'nasi-kepal' ? 'Nasi Kepal' : 'Kimbab'}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 h-12 overflow-hidden">
                  {product.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <p className="font-bold text-kepal-dark">
                    Rp {product.price.toLocaleString('id-ID')}
                  </p>
                  
                  <Button
                    size="sm"
                    onClick={() => addToCart(product)}
                    className="bg-kepal-yellow hover:bg-kepal-orange text-kepal-dark rounded-full"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Keranjang
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductMenu;
