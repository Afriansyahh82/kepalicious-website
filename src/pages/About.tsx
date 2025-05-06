
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const About = () => {
  return (
    <CartProvider>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Tentang Kepalicious</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cerita di balik nasi kepal dan kimbab terlezat yang pernah Anda cicipi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in">
              <h2 className="text-2xl font-semibold mb-4">Cerita Kami</h2>
              <p className="text-gray-600 mb-4">
                Kepalicious berawal dari dapur kecil dengan mimpi besar. Didirikan pada tahun 2019, kami memulai perjalanan kami dengan visi sederhana: menyajikan nasi kepal dan kimbab berkualitas terbaik dengan harga terjangkau.
              </p>
              <p className="text-gray-600 mb-4">
                Nama "Kepalicious" sendiri adalah gabungan dari kata "Kepal" yang berarti cara pembuatan nasi yang ditekan dan dibentuk dengan tangan, dan "Delicious" yang berarti lezat. Filosofi nama ini menggambarkan komitmen kami untuk selalu menyajikan makanan yang dibuat dengan penuh ketekunan dan cinta.
              </p>
              <p className="text-gray-600">
                Seiring berjalannya waktu, dari mulut ke mulut, pelanggan kami terus bertambah. Kami bersyukur atas dukungan dari komunitas yang memungkinkan kami untuk terus berkembang dan berinovasi.
              </p>
            </div>
            
            <div className="relative animate-bounce-in">
              <img 
                src="/images/about-image.jpg" 
                alt="Kisah Kepalicious" 
                className="rounded-lg shadow-lg object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-kepal-yellow p-4 rounded-lg shadow-lg text-kepal-dark font-medium">
                Sejak 2019
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-kepal-light p-6 rounded-lg animate-slide-in">
              <h3 className="text-xl font-semibold mb-3">Visi</h3>
              <p className="text-gray-600">
                Menjadi destinasi kuliner terdepan untuk nasi kepal dan kimbab di Indonesia, dikenal dengan kualitas, inovasi, dan layanan terbaik.
              </p>
            </div>
            
            <div className="bg-kepal-light p-6 rounded-lg animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold mb-3">Misi</h3>
              <p className="text-gray-600">
                Kami berkomitmen untuk menyajikan pengalaman kuliner yang memadukan tradisi dan inovasi, dengan bahan-bahan berkualitas terbaik dan layanan ramah yang mencerminkan nilai-nilai kami.
              </p>
            </div>
            
            <div className="bg-kepal-light p-6 rounded-lg animate-slide-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-semibold mb-3">Nilai</h3>
              <p className="text-gray-600">
                Kualitas, Inovasi, Keramahan, Kejujuran, dan Keberlanjutan adalah nilai-nilai yang mendorong setiap aspek bisnis kami setiap hari.
              </p>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Bergabunglah dengan Keluarga Kepalicious</h2>
            <p className="text-gray-600 mb-8">
              Kami mengundang Anda untuk menjadi bagian dari perjalanan kuliner kami. Cobalah menu kami, bagikan pengalaman Anda, dan jadilah bagian dari komunitas pecinta makanan sehat dan lezat.
            </p>
            <button className="bg-kepal-yellow hover:bg-kepal-orange text-kepal-dark font-semibold px-8 py-3 rounded-full shadow-lg hover-scale">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </CartProvider>
  );
};

export default About;
