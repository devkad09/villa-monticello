export interface EventSpaceDetail {
  id: string;
  name: string;
  category: 'Meetings' | 'Private Dining' | 'Celebrations & Galas';
  capacity: string;
  tagline: string;
  description: string;
  dimension?: string;
  features: string[];
  imageUrl: string;
  idealFor: string[];
}

export const eventSpaces: EventSpaceDetail[] = [
  {
    id: 'executive-boardroom',
    name: 'The Executive Boardroom',
    category: 'Meetings',
    capacity: 'Up to 12 Guests',
    tagline: 'High-stakes strategy sessions and confidential executive summits.',
    description:
      'A refined, private boardroom designed for executive clarity. Flooded with natural daylight and engineered with acoustic climate control, encrypted high-speed video conferencing, and dedicated butler support.',
    dimension: '35 m²',
    features: [
      'Encrypted high-definition video conferencing & AV',
      'Artisanal espresso bar & dedicated butler service',
      'On-demand dining & refreshments by The Brasserie',
      'Ergonomic leather executive seating and conference table',
      'Soundproofed privacy glazing and climate control',
    ],
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/02/last-emperor1.jpg',
    idealFor: ['Board of Directors Meetings', 'Diplomatic Briefings', 'Investor Presentations'],
  },
  {
    id: 'anniversary-dining',
    name: 'Private Dining & Celebrations Salon',
    category: 'Private Dining',
    capacity: 'Up to 50 Guests',
    tagline: 'Private dining for moments that deserve more than a corner table.',
    description:
      'An intimate and atmospheric venue tailored for milestone anniversary dinners, executive banquets, and celebratory gatherings. Accompanied by bespoke culinary menus and dedicated sommelier service.',
    dimension: '65 m²',
    features: [
      'Custom menu consultations with Executive Chef',
      'Dedicated sommelier wine pairings and champagne service',
      'Acoustic music & bespoke floral coordination',
      'Seamless transition to courtyard terrace for aperitifs',
      'Personal event coordinator assigned to your occasion',
    ],
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/02/lake-como1.jpg',
    idealFor: ['Anniversary Dinners', 'Corporate Banquets', 'Diplomatic Receptions'],
  },
  {
    id: 'courtyard-celebrations',
    name: 'Courtyard Pool Terrace & Galas',
    category: 'Celebrations & Galas',
    capacity: 'Up to 200 Guests',
    tagline: 'Weddings, milestone galas, and bespoke soirées under the stars.',
    description:
      'Full property exclusivity transforms Villa Monticello into your private luxury estate in Accra. Lush tropical gardens, architectural illumination, and impeccable culinary logistics that disappear into the background.',
    dimension: 'Estate Exclusivity',
    features: [
      'Full buyout of 16 bespoke suites for VIP guests',
      'Complete event production, staging, lighting & sound',
      'Outside catering or signature Brasserie banquet service',
      'Private security, valet parking & concierge desk',
      'Bespoke cocktail lounge and dance floor configurations',
    ],
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg',
    idealFor: ['Intimate Weddings', 'Milestone Birthdays', 'Diplomatic Galas', 'Product Launches'],
  },
];
