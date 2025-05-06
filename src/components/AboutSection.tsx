
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Kepalicious</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kisah kami dimulai dari kecintaan akan makanan Korea dan Jepang yang dikombinasikan dengan cita rasa lokal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/images/about-image.jpg" 
              alt="Kisah Kepalicious" 
              className="rounded-xl shadow-lg object-cover w-full h-[400px]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
              }}
            />
            <div className="absolute -bottom-5 -right-5 bg-kepal-yellow rounded-xl p-4 shadow-lg lg:w-48">
              <p className="font-semibold text-kepal-dark">Berdiri sejak 2022</p>
              <p className="text-sm text-kepal-dark mt-1">Melayani dengan sepenuh hati</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-kepal-dark">Visi Kami</h3>
              <p className="text-gray-600">
                Menjadi pionir kuliner nasi kepal dan kimbab dengan inovasi rasa dan pelayanan terbaik untuk kepuasan pelanggan.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-kepal-dark">Misi Kami</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-kepal-yellow mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Menghadirkan cita rasa autentik dengan bahan berkualitas terbaik
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-kepal-yellow mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Memberikan pelayanan ramah dan cepat kepada setiap pelanggan
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-kepal-yellow mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Menciptakan inovasi menu yang selalu menarik dan berbeda
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-kepal-yellow mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Membangun hubungan jangka panjang dengan pelanggan setia
                </li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-kepal-dark">Nilai-Nilai Kami</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-kepal-light p-4 rounded-lg">
                  <h4 className="font-semibold text-kepal-dark">Kualitas</h4>
                  <p className="text-sm text-gray-600">Tidak pernah berkompromi dengan kualitas bahan dan rasa</p>
                </div>
                <div className="bg-kepal-light p-4 rounded-lg">
                  <h4 className="font-semibold text-kepal-dark">Pelayanan</h4>
                  <p className="text-sm text-gray-600">Kepuasan pelanggan adalah prioritas utama kami</p>
                </div>
                <div className="bg-kepal-light p-4 rounded-lg">
                  <h4 className="font-semibold text-kepal-dark">Inovasi</h4>
                  <p className="text-sm text-gray-600">Selalu menciptakan menu baru yang menarik</p>
                </div>
                <div className="bg-kepal-light p-4 rounded-lg">
                  <h4 className="font-semibold text-kepal-dark">Kebersihan</h4>
                  <p className="text-sm text-gray-600">Menjaga standar kebersihan tertinggi dalam proses pembuatan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
