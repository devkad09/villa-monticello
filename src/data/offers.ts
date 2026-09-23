import { Offer } from '@/types/booking';

export const offersData: Offer[] = [
  {
    id: 'suite-escape',
    slug: 'suite-escape',
    eyebrow: '2-Night Stay Privilege',
    title: 'Suite Escape',
    tagline: 'A restorative two-night stay featuring dinner at The Brasserie and airport transfers.',
    description: [
      'Designed for guests seeking a relaxing weekend retreat or an effortless transit stay in Accra. The Suite Escape combines our individually designed suites with seamless arrivals and dining at The Brasserie.',
      'Includes a three-course dinner for two, private airport transfers directly to and from Kotoka International Airport (5 minutes), daily breakfast, and a complimentary suite upgrade when available upon check-in.',
    ],
    startingRate: 'From $265 / night',
    validity: 'Year-Round Privilege',
    benefits: [
      {
        title: 'Complimentary Suite Upgrade',
        description: 'Automatic room upgrade to the next suite category (subject to availability).',
      },
      {
        title: '3-Course Dinner for Two',
        description: 'Chef-crafted dinner at The Brasserie included during your stay.',
      },
      {
        title: 'VIP Kotoka Airport Transfers',
        description: 'Private chauffeur transfer to and from Kotoka International Airport (5 minutes).',
      },
      {
        title: 'Daily Full Breakfast',
        description: 'Fresh local tropical fruits, artisanal pastries, and warm à la carte specialties.',
      },
    ],
    terms: [
      'Requires a minimum length of stay of two consecutive nights.',
      'Dinner reservation must be confirmed with the maître d’ upon check-in.',
      'Airport transfer flight details must be provided at least 24 hours prior to arrival.',
    ],
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/03/diner-image-1024x683.jpg',
    featured: true,
    isArchived: false,
    status: 'active',
  },
  {
    id: 'stay-longer-free-4th-night',
    slug: 'stay-longer-free-4th-night',
    eyebrow: 'Extended Stay Privilege',
    title: 'Stay Longer — 4th Night Complimentary',
    tagline: 'Extend your time in Accra. Reserve four consecutive nights, pay for three.',
    description: [
      'Whether traveling for diplomatic engagements, executive residencies, or leisure in Accra, enjoy more time at Villa Monticello with our compliments.',
      'Book four consecutive nights in any suite category and receive your fourth night complimentary. Includes high-speed business Wi-Fi, peaceful courtyard access, and daily gourmet breakfast.',
    ],
    startingRate: 'Stay 4 Nights, Pay 3',
    validity: 'Direct Bookings Only',
    benefits: [
      {
        title: 'Complimentary 4th Night',
        description: 'Every fourth consecutive night of your stay is entirely complimentary.',
      },
      {
        title: 'Daily Breakfast Included',
        description: 'Full à la carte breakfast included throughout your stay.',
      },
      {
        title: 'High-Speed Fiber Wi-Fi',
        description: 'Reliable business-grade connectivity throughout the property.',
      },
      {
        title: '24/7 Front Desk & Concierge',
        description: 'Assistance with executive car arrangements, local dining, and city bookings.',
      },
    ],
    terms: [
      'Minimum stay of four (4) consecutive nights required.',
      'Complimentary night applies to the lowest nightly rate within the stay.',
      'Valid exclusively for direct bookings made via our website or reservation desk.',
    ],
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg',
    featured: true,
    isArchived: false,
    status: 'active',
  },
  {
    id: 'koncierge-special-occasion',
    slug: 'koncierge-special-occasion',
    eyebrow: 'Special Occasions',
    title: 'The Celebration Experience',
    tagline: 'Birthdays, anniversaries, and milestones arranged with personalized care.',
    description: [
      'Celebrate life’s special milestones in Accra. Our concierge team coordinates every detail prior to your arrival to prepare an intimate, memorable stay at Villa Monticello.',
      'Includes chilled champagne and artisanal chocolates upon arrival, custom fresh floral styling in your suite, and a candlelit four-course dinner in the courtyard garden.',
    ],
    startingRate: 'Bespoke Package Rate',
    validity: 'Year-Round Upon Request',
    benefits: [
      {
        title: 'Chilled Champagne & Chocolates',
        description: 'Bottle of champagne and artisanal chocolates awaiting in-suite upon arrival.',
      },
      {
        title: 'Fresh Floral Arrangement',
        description: 'Custom tropical floral design prepared specifically for your suite.',
      },
      {
        title: 'Candlelit 4-Course Dinner',
        description: 'Private 4-course dinner for two at The Brasserie courtyard.',
      },
      {
        title: 'Personalized Concierge Care',
        description: 'Pre-arrival itinerary planning, private chauffeurs, or city recommendations.',
      },
    ],
    terms: [
      'Requires reservation at least 48 hours prior to arrival.',
      'Dietary preferences and special requests accommodated with advance notice.',
    ],
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider7.jpg',
    featured: true,
    isArchived: false,
    status: 'active',
  },
  {
    id: '15th-anniversary-package',
    slug: '15th-anniversary-package',
    eyebrow: 'Past Milestone Package · April – June 2026',
    title: '15th Anniversary Celebration Package',
    tagline: 'Commemorating fifteen years of boutique hospitality in Accra.',
    description: [
      'In celebration of fifteen years of service in Accra, Villa Monticello hosted guests with this special commemorative package between April and June 2026.',
      'This seasonal package included bespoke suite accommodation, handcrafted welcome cocktails, a commemorative gift, daily gourmet breakfast, and an extended 2:00 PM late checkout.',
    ],
    startingRate: 'Concluded · April – June 2026',
    validity: 'Concluded (Ended June 30, 2026)',
    benefits: [
      {
        title: 'Bespoke Suite Stay',
        description: 'Accommodation in an individually themed luxury suite.',
      },
      {
        title: 'Welcome Cocktail',
        description: 'Signature cocktail upon arrival at The Brasserie Lounge.',
      },
      {
        title: 'Daily Gourmet Breakfast',
        description: 'Full à la carte breakfast served in The Brasserie or suite.',
      },
      {
        title: 'Commemorative Artisan Gift',
        description: 'Villa Monticello keepsake presented upon check-in.',
      },
      {
        title: 'Late Checkout Privilege',
        description: 'Guaranteed 2:00 PM departure on check-out day.',
      },
    ],
    terms: [
      'This promotional offer has concluded. Stays were valid from April 1 to June 30, 2026.',
      'Refer to our active packages above or contact reservations for current seasonal arrangements.',
    ],
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/02/kwame-nkrumah1.jpg',
    featured: false,
    isArchived: true,
    status: 'archived',
  },
];

export function getAllOffers(): Offer[] {
  return offersData;
}

export function getActiveOffers(): Offer[] {
  return offersData.filter((o) => !o.isArchived);
}

export function getArchivedOffers(): Offer[] {
  return offersData.filter((o) => o.isArchived);
}

export function getOfferBySlug(slug: string): Offer | undefined {
  return offersData.find((o) => o.slug === slug);
}

export function getFeaturedOffers(): Offer[] {
  return offersData.filter((o) => o.featured && !o.isArchived);
}
