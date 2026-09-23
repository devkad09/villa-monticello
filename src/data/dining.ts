export interface DiningDetails {
  name: string;
  tagline: string;
  subheading: string;
  description: string[];
  hours: {
    period: string;
    time: string;
    notes?: string;
  }[];
  culinaryHighlights: string[];
  features: string[];
  dressCode: string;
  reservationPolicy: string;
  images: {
    hero: string;
    gallery: {
      url: string;
      caption: string;
      aspect: 'portrait' | 'landscape' | 'square';
    }[];
  };
  contact: {
    phone: string;
    email: string;
    directBookingUrl?: string;
  };
}

export const brasserieData: DiningDetails = {
  name: 'The Brasserie',
  tagline: 'Modern culinary artistry rooted in authentic flavors.',
  subheading: 'Award-Winning Fine Dining in Airport Residential Area',
  description: [
    'The Brasserie at Villa Monticello is an acclaimed culinary destination in Accra, celebrated for pairing seasonal West African produce with refined European and international gastronomy.',
    'Set within an intimate dining salon and extending outward to our candlelit courtyard terrace, each service is choreographed to deliver memorable sensory experiences. From leisurely breakfasts to discreet executive lunches and bespoke private dinners, our culinary team crafts every plate with exacting technique.',
    'Our sommelier curates an evolving cellar featuring vintage selections from renowned global terroirs, offering thoughtful pairings that elevate each course.',
  ],
  hours: [
    { period: 'Breakfast', time: '06:30 – 10:30', notes: 'Full gourmet & continental selection' },
    { period: 'Lunch', time: '12:00 – 15:30', notes: 'Executive à la carte & light salon menus' },
    { period: 'Dinner', time: '18:30 – 22:30', notes: 'Chef tasting menus & evening dining' },
    { period: 'Sunday Brunch', time: '11:30 – 16:00', notes: 'Special weekend curated service' },
  ],
  culinaryHighlights: [
    'Locally sourced Atlantic seafood and Ghanaian heirloom herbs',
    'Private Chef Table experiences customized to guest palate',
    'Sommelier-curated global cellar with Old and New World vintages',
    'Alfresco courtyard dining under Accra’s evening canopy',
    'Bespoke outside catering for diplomatic and private residencies',
  ],
  features: [
    'Private Dining Salons',
    'Courtyard Terrace',
    'Sommelier Wine Cellar',
    'Executive Outside Catering',
    'Takeaway & Private Delivery',
    'Custom Menu Consultations',
  ],
  dressCode: 'Smart Casual',
  reservationPolicy: 'Advance reservations are recommended, particularly for evening dinner and private dining suites.',
  images: {
    hero: 'https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg',
    gallery: [
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg',
        caption: 'The Brasserie Courtyard & Pool Veranda',
        aspect: 'landscape',
      },
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/03/diner-image-1024x683.jpg',
        caption: 'Culinary Artistry & Artisanal Flavors',
        aspect: 'landscape',
      },
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/02/lake-como1.jpg',
        caption: 'Private Dining & Sommelier Pairings',
        aspect: 'portrait',
      },
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider7.jpg',
        caption: 'Courtyard Architecture & Evening Ambiance',
        aspect: 'landscape',
      },
    ],
  },
  contact: {
    phone: '+233 55 721 6752',
    email: 'reservations@villamonticello.com',
  },
};
