export interface Suite {
  id: string;
  name: string;
  category: 'Junior Suite' | 'Executive Suite' | 'Executive Plus' | 'Presidential Suite';
  tagline: string;
  description: string;
  sizeSqm: number;
  maxGuests: number;
  bedType: string;
  highlights: string[];
  imageUrl: string;
  galleryUrls?: string[];
  view: string;
  featured?: boolean;
}

export interface DiningVenue {
  id: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  hours: string;
  dressCode?: string;
  imageUrl: string;
  features: string[];
}

export interface EventSpace {
  id: string;
  name: string;
  type: string;
  capacity: string;
  tagline: string;
  imageUrl: string;
  features: string[];
  defaultGuests: number;
}

export interface Experience {
  id: string;
  title: string;
  category: string;
  description: string;
  duration?: string;
  imageUrl: string;
}

export interface HotelInfo {
  name: string;
  tagline: string;
  subTagline: string;
  checkInTime: string;
  checkOutTime: string;
  address: {
    street: string;
    area: string;
    city: string;
    country: string;
    postalCode: string;
    displayAddress: string;
  };
  contact: {
    phone: string;
    displayPhone: string;
    reservationsPhone: string;
    conciergePhone: string;
    email: string;
    reservationsEmail: string;
    conciergeEmail: string;
  };
  whatsapp: {
    number: string;
    displayNumber: string;
    defaultMessage: string;
    url: string;
  };
  bookingEngineUrl: string;
  urls: {
    siteUrl: string;
    bookingUrl: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
    directionsUrl: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  stats: {
    suitesCount: number;
    airportDistanceMinutes: number;
    establishedYear: number;
  };
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  restaurant: {
    name: string;
    hours: {
      breakfast: string;
      lunch: string;
      dinner: string;
      sundayBrunch: string;
    };
    dressCode: string;
  };
}

export type HotelConfig = HotelInfo;

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
}
