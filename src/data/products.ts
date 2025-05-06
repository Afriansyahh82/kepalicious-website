
import { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: "nk1",
    name: "Nasi Kepal Original",
    description: "Nasi kepal dengan isian daging sapi cincang dan sayuran segar",
    price: 15000,
    image: "/images/nasikepal-original.jpg",
    category: "nasi-kepal"
  },
  {
    id: "nk2",
    name: "Nasi Kepal Spicy Tuna",
    description: "Nasi kepal dengan isian tuna pedas dan mayones",
    price: 18000,
    image: "/images/nasikepal-tuna.jpg",
    category: "nasi-kepal"
  },
  {
    id: "nk3",
    name: "Nasi Kepal Ayam Teriyaki",
    description: "Nasi kepal dengan isian ayam bumbu teriyaki yang manis gurih",
    price: 17000,
    image: "/images/nasikepal-teriyaki.jpg",
    category: "nasi-kepal"
  },
  {
    id: "nk4",
    name: "Nasi Kepal Kimchi",
    description: "Nasi kepal dengan isian kimchi asam pedas khas Korea",
    price: 16000,
    image: "/images/nasikepal-kimchi.jpg",
    category: "nasi-kepal"
  },
  {
    id: "kb1",
    name: "Kimbab Classic",
    description: "Kimbab dengan isian telur, wortel, timun dan daging",
    price: 25000,
    image: "/images/kimbab-classic.jpg",
    category: "kimbab"
  },
  {
    id: "kb2",
    name: "Kimbab Tuna Mayo",
    description: "Kimbab dengan isian tuna mayo, timun dan selada",
    price: 28000,
    image: "/images/kimbab-tuna.jpg",
    category: "kimbab"
  },
  {
    id: "kb3",
    name: "Kimbab Cheese",
    description: "Kimbab dengan isian keju, ham, dan sayuran segar",
    price: 27000,
    image: "/images/kimbab-cheese.jpg",
    category: "kimbab"
  },
  {
    id: "kb4",
    name: "Kimbab Bulgogi",
    description: "Kimbab premium dengan isian daging bulgogi Korea",
    price: 32000,
    image: "/images/kimbab-bulgogi.jpg",
    category: "kimbab"
  }
];

export const getProductsByCategory = (category: 'nasi-kepal' | 'kimbab') => {
  return products.filter(product => product.category === category);
};
