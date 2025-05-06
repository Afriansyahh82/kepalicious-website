
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    
    // Format WhatsApp message
    const whatsappMessage = `Halo, saya ${name} (${email}). ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
    
    // Show success message
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespons.",
    });
    
    // Reset form
    form.reset();
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-kepal-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami siap melayani pertanyaan, saran, atau pesanan Anda. Jangan ragu untuk menghubungi kami!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">
                    Nama Lengkap
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Masukkan nama lengkap Anda" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Masukkan email Anda" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="font-medium">
                  Subjek
                </label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Apa yang ingin Anda diskusikan?" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="font-medium">
                  Pesan
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tulis pesan Anda di sini..." 
                  rows={5} 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full bg-kepal-yellow hover:bg-kepal-orange text-kepal-dark">
                Kirim Pesan
              </Button>
            </form>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-kepal-yellow mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Alamat</h3>
                    <p className="text-gray-600">Jl. Makanan Enak No. 123, Jakarta</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-kepal-yellow mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">info@kepalicious.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="h-6 w-6 text-kepal-yellow mr-3 mt-0.5"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z" />
                    <path d="M14 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z" />
                    <path d="M12 16a4 4 0 0 0 4-4v-2a4 4 0 0 0-8 0v2a4 4 0 0 0 4 4Z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">WhatsApp</h3>
                    <p className="text-gray-600">+62 812-3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-kepal-yellow mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Minggu: 10:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2954393401066!2d106.82971231476928!3d-6.2295771954833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJalan%20Blora%2C%20Menteng%2C%20Kecamatan%20Menteng%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1623903296283!5m2!1sid!2sid"
                style={{ border: 0 }}
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                title="Lokasi Kepalicious"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
