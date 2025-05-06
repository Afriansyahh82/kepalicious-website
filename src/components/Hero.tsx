import React from 'react';
import { Button } from '@/components/ui/button';
const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative pt-20 lg:pt-24 pb-10 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-kepal-dark">Nikmatnya</span>
              <br />
              <span className="text-kepal-yellow">Nasi Kepal & Kimbab</span>
              <br />
              <span className="text-kepal-dark">Buat Harimu Spesial</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Cita rasa autentik dalam setiap gigitan. Dibuat dengan bahan-bahan segar dan berkualitas terbaik untuk memanjakan lidahmu.
            </p>
            <div className="flex space-x-4">
              <Button onClick={scrollToMenu} className="bg-kepal-yellow hover:bg-kepal-orange text-kepal-dark font-semibold px-8 py-6 rounded-full shadow-lg hover-scale">
                Lihat Menu
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/about'} className="text-kepal-dark border-kepal-dark hover:bg-kepal-light px-8 py-6 rounded-full hover-scale">
                Tentang Kami
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative animate-bounce-in">
              <img src="/images/hero-image.jpg" alt="Kepalicious Nasi Kepal dan Kimbab" className="rounded-3xl shadow-2xl object-cover" onError={e => {
              // Fallback image if the custom image is not available
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
            }} />
              
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-lg animate-fade-in mx-0">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-kepal-dark">Bahan Segar</p>
                    <p className="text-sm text-gray-500">Dipilih Langsung Setiap Hari</p>
                  </div>
                </div>
              </div>
              
              <div style={{
              animationDelay: '0.3s'
            }} className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-lg animate-fade-in my-0 px-[16px] mx-0">
                <div className="flex items-center">
                  <div className="bg-red-100 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-kepal-dark">Dibuat dengan Cinta</p>
                    <p className="text-sm text-gray-500">Resep Rahasia Spesial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};
export default Hero;