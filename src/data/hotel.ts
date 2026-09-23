import { HotelConfig, DiningVenue, EventSpace, NavigationItem } from '@/types/hotel';

const defaultBookingUrl =
  'https://www.swiftbook.io/inst/#home?propertyId=981NSDALXuB4F3qmFWcpG0negCD6Dhrf0J3hmREz5isgargubu9SRTQ3MTQ=&JDRN=Y';

const defaultSiteUrl = 'https://villamonticello.com';
const defaultWhatsAppNumber = '233557216752';
const defaultMapsUrl =
  'https://www.google.com/maps/place/Villa+Monticello+Boutique+Hotel/@5.6037,-0.187,17z';

export const hotelConfig: HotelConfig = {
  name: 'Villa Monticello',
  tagline: 'Where exceptional is standard.',
  subTagline: 'An intimate sixteen-suite luxury boutique hotel in Accra’s Airport Residential Area.',
  checkInTime: '14:00',
  checkOutTime: '12:00',
  address: {
    street: 'No 1 Mankata Avenue Link',
    area: 'Airport Residential Area',
    city: 'Accra',
    country: 'Ghana',
    postalCode: 'GA-085-4150',
    displayAddress: 'No 1 Mankata Avenue Link, Airport Residential Area, Accra, Ghana',
  },
  contact: {
    phone: '+233 55 721 6752',
    displayPhone: '+233 55 721 6752',
    reservationsPhone: '+233 24 243 6000',
    conciergePhone: '+233 55 721 6752',
    email: 'info@villamonticello.com',
    reservationsEmail: 'reservations@villamonticello.com',
    conciergeEmail: 'concierge@villamonticello.com',
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || defaultWhatsAppNumber,
    displayNumber: '+233 55 721 6752',
    defaultMessage: 'Hello Villa Monticello, I would like to enquire about a stay.',
    url: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || defaultWhatsAppNumber}?text=${encodeURIComponent(
      'Hello Villa Monticello, I would like to enquire about a stay.'
    )}`,
  },
  bookingEngineUrl: process.env.NEXT_PUBLIC_BOOKING_URL || defaultBookingUrl,
  urls: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl,
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || defaultBookingUrl,
    googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || defaultMapsUrl,
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.835384260384!2d-0.18957492419816047!3d5.603700033333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b0f4d320d0f%3A0x6d8bfa2e2bc13d96!2sVilla%20Monticello%20Boutique%20Hotel!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Villa+Monticello+Boutique+Hotel+Accra',
  },
  coordinates: {
    latitude: 5.6037,
    longitude: -0.187,
  },
  stats: {
    suitesCount: 16,
    airportDistanceMinutes: 5,
    establishedYear: 2011,
  },
  socialLinks: {
    instagram: 'https://instagram.com/villamonticello',
    facebook: 'https://facebook.com/villamonticello',
    linkedin: 'https://linkedin.com/company/villa-monticello',
  },
  restaurant: {
    name: 'The Brasserie',
    hours: {
      breakfast: '06:30 – 10:30',
      lunch: '12:00 – 15:30',
      dinner: '18:30 – 22:30',
      sundayBrunch: '11:30 – 16:00',
    },
    dressCode: 'Smart Casual',
  },
};

// Backward-compatible alias for components importing hotelInfo
export const hotelInfo = hotelConfig;

export const navigationItems: NavigationItem[] = [
  { label: 'Stay', href: '/suites', description: 'Sixteen individually curated suites' },
  { label: 'Dine', href: '/dine', description: 'The Brasserie & private dining' },
  { label: 'Offers', href: '/offers', description: 'Exclusive packages & privileges' },
  { label: 'About', href: '/about', description: 'Our story, villa & philosophy' },
  { label: 'Location', href: '/location', description: 'Airport Residential Area & Accra guide' },
  { label: 'Contact', href: '/contact', description: 'Hotel address & direct desk' },
];

export const diningData: DiningVenue = {
  id: 'the-brasserie',
  name: 'The Brasserie',
  type: 'Fine Dining Restaurant & Lounge',
  tagline: 'Modern culinary artistry rooted in authentic flavors.',
  description:
    'Award-winning dining in an understated, intimate setting. Executive culinary creations pairing seasonal West African produce with refined international gastronomy, accompanied by an extensive cellar.',
  hours: 'Breakfast: 06:30 – 10:30 | Lunch: 12:00 – 15:30 | Dinner: 18:30 – 22:30',
  dressCode: 'Smart Casual',
  imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/03/diner-image-1024x683.jpg',
  features: [
    'Private Chef Table experiences',
    'Sommelier curated global wine cellar',
    'Alfresco courtyard dining under the stars',
    'Bespoke catering for private boardroom sessions',
  ],
};

export const eventSpacesData: EventSpace[] = [
  {
    id: 'boardroom',
    name: 'The Executive Boardroom',
    type: 'Private Meeting Space',
    capacity: 'Up to 12 Guests',
    tagline: 'High-stakes strategy sessions and discreet executive summits.',
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/02/last-emperor1.jpg',
    features: [
      'Full AV & encrypted video conferencing',
      'Artisanal espresso bar & dedicated butler',
      'The Brasserie on-demand culinary service',
      'Natural light with acoustic climate control',
    ],
    defaultGuests: 12,
  },
  {
    id: 'private-dining',
    name: 'Anniversary & Private Dining',
    type: 'Private Dining Room',
    capacity: 'Up to 50 Guests',
    tagline: 'Private dining for occasions that demand perfection.',
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/02/lake-como1.jpg',
    features: [
      'Custom menu design with Executive Chef',
      'Dedicated sommelier wine pairings',
      'Bespoke floral arrangements & ambient lighting',
      'Private terrace access',
    ],
    defaultGuests: 40,
  },
];
