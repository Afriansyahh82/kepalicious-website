import React from 'react';
const Features: React.FC = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Kepalicious?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami berkomitmen untuk menyajikan makanan terbaik dengan kualitas terjamin dan rasa lezat yang tidak terlupakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="rounded-xl p-6 text-center hover-scale bg-kepal-light">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-kepal-yellow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kepal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Bahan Berkualitas</h3>
            <p className="text-gray-600">
              Semua bahan baku kami dipilih langsung setiap hari untuk menjamin kesegaran dan kualitas terbaik.
            </p>
          </div>

          <div className="bg-kepal-light rounded-xl p-6 text-center hover-scale mx-[20px]">
            <div className="bg-kepal-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kepal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Pelayanan Cepat</h3>
            <p className="text-gray-600">
              Kami memproses pesanan dengan cepat dan tepat. Waktu adalah hal berharga bagi Anda.
            </p>
          </div>

          <div className="bg-kepal-light rounded-xl p-6 text-center hover-scale">
            <div className="bg-kepal-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kepal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Rasa Terjamin</h3>
            <p className="text-gray-600">
              Resep spesial kami dijamin membuat Anda ketagihan dan ingin memesan lagi.
            </p>
          </div>

          <div className="bg-kepal-light rounded-xl p-6 text-center hover-scale">
            <div className="bg-kepal-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kepal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Pembayaran Mudah</h3>
            <p className="text-gray-600">
              Kami menerima berbagai metode pembayaran untuk kenyamanan Anda dalam memesan.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;