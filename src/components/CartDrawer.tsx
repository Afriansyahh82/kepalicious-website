
import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, X, WhatsApp } from 'lucide-react';
import { formatRupiah } from '@/lib/utils';

const CartDrawer: React.FC = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    totalItems, 
    totalPrice, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "Halo, saya ingin memesan:\n\n";
    
    cartItems.forEach(item => {
      message += `${item.quantity}x ${item.product.name} (Rp ${item.product.price.toLocaleString('id-ID')}) = Rp ${(item.product.price * item.quantity).toLocaleString('id-ID')}\n`;
    });
    
    message += `\nTotal: Rp ${totalPrice.toLocaleString('id-ID')}`;
    
    // WhatsApp API URL with predefined message
    const waNumber = "6281234567890"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;
    
    window.open(waUrl, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Cart panel */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl flex flex-col z-10 animate-slide-in">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Keranjang Belanja</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCartOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="bg-kepal-light p-6 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-kepal-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-gray-500 mb-4">Keranjang belanja Anda kosong</p>
              <Button
                onClick={() => setIsCartOpen(false)}
                className="bg-kepal-yellow hover:bg-kepal-orange text-kepal-dark"
              >
                Belanja Sekarang
              </Button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.product.id} className="flex border rounded-lg p-2 hover:shadow-md transition-shadow">
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (item.product.category === 'nasi-kepal') {
                        target.src = 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
                      } else {
                        target.src = 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
                      }
                    }}
                  />
                </div>
                
                <div className="ml-3 flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">{item.product.name}</h3>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-6 w-6 text-gray-400 hover:text-red-500"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-0.5">{formatRupiah(item.product.price)}</p>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded-md">
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="px-2 text-sm">{item.quantity}</span>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <p className="font-medium">
                      {formatRupiah(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-3">
              <span className="font-medium">Subtotal</span>
              <span className="font-medium">{formatRupiah(totalPrice)}</span>
            </div>
            
            <div className="space-y-2">
              <Button 
                className="w-full bg-kepal-yellow hover:bg-kepal-orange text-kepal-dark flex items-center gap-2"
                onClick={handleCheckout}
              >
                <WhatsApp className="h-5 w-5" />
                Checkout via WhatsApp
              </Button>
              
              <Button 
                className="w-full" 
                variant="outline"
                onClick={clearCart}
              >
                Kosongkan Keranjang
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
