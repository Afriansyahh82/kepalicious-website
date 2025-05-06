
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Anisa Dewi",
    role: "Pelanggan Setia",
    text: "Nasi kepal di sini benar-benar enak! Isian daging sapinya juicy dan bumbunya meresap sampai ke dalam nasi. Porsinya juga pas untuk makan siang.",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Food Blogger",
    text: "Sebagai pecinta makanan Korea, saya sangat merekomendasikan kimbab di Kepalicious. Rasanya autentik dan harganya sangat terjangkau untuk kualitas sebagus ini.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Citra Lestari",
    role: "Mahasiswa",
    text: "Nasi kepal spicy tuna adalah favorit saya! Pesan online sangat mudah dan cepat sampai. Pasti akan pesan lagi dan lagi.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-kepal-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Mereka?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengarkan pendapat pelanggan kami yang sudah mencoba kelezatan Kepalicious.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-yellow-400" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
