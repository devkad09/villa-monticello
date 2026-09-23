export interface ConciergeCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface ExperienceStory {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  duration?: string;
}

export const conciergeCategories: ConciergeCategory[] = [
  {
    id: 'transport',
    title: 'Travel & VIP Transportation',
    tagline: 'Frictionless arrivals and discrete chauffeured mobility.',
    description:
      'From the tarmac at Kotoka International Airport directly to our courtyard sanctuary. The Koncierge coordinates VIP airside assistance, luggage concierge, and private executive drivers knowledgeable of Accra’s optimal routes.',
    features: [
      'Complimentary Kotoka VIP airport transfers for suite guests',
      'Dedicated private executive chauffeured fleet on demand',
      'Flight coordination, fast-track arrangements & itinerary changes',
      'Inter-city travel logistics to Aburi, Cape Coast & Akosombo',
    ],
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/03/villa-koncierge.jpg',
  },
  {
    id: 'dining',
    title: 'Dining & Sommelier Access',
    tagline: 'Priority reservations and private culinary experiences.',
    description:
      'Whether securing prime seating at Accra’s most competitive dining rooms or orchestrating an intimate private chef’s table within your suite or courtyard terrace, we ensure your culinary desires are met without delay.',
    features: [
      'Priority reservations at The Brasserie & Accra’s top culinary tables',
      'Private sommelier wine tastings from our international cellar',
      'Custom celebratory menu design tailored to dietary preferences',
      'In-suite dining orchestrated with fine linen and private service',
    ],
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/03/diner-image-1024x683.jpg',
  },
  {
    id: 'culture',
    title: 'Curated Accra & Contemporary Art',
    tagline: 'Private access to Ghana’s vibrant creative heartbeat.',
    description:
      'Accra is a global nexus of contemporary African art, design, and history. The Koncierge arranges private studio visits with renowned Ghanaian painters, exclusive gallery after-hours access, and tailored architectural walking tours.',
    features: [
      'Private appointments at Nubuke Foundation and Gallery 1957',
      'Curated historic tours of Jamestown, Osu, and Kwame Nkrumah Memorial',
      'Access to bespoke West African fashion ateliers & textile weavers',
      'Artisan jewelry and Ghanaian craftsmanship sourcing',
    ],
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider7.jpg',
  },
  {
    id: 'business',
    title: 'Business & Executive Support',
    tagline: 'Discreet infrastructure for high-stakes decisions.',
    description:
      'High-profile business leaders rely on Villa Monticello as an executive sanctuary. The Koncierge provides seamless meeting orchestration, encrypted video conferencing, and secretarial logistics.',
    features: [
      'Executive Boardroom bookings with full AV integration',
      'Discreet administrative & multi-lingual translation support',
      'Private courier, notarization, and international shipping',
      'High-capacity fiber connectivity with uninterrupted backup power',
    ],
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/02/last-emperor1.jpg',
  },
  {
    id: 'celebrations',
    title: 'Special Occasions & Gifting',
    tagline: 'Bespoke touches that transform moments into memories.',
    description:
      'Milestone anniversaries, intimate proposals, and executive gifts require thoughtful precision. Let The Koncierge curate bespoke floral installations, hand-crafted Ghanaian chocolates, or live acoustic musicians.',
    features: [
      'Curated floral arrangements and personalized suite preparation',
      'Handcrafted artisanal Ghanaian gift boxes and chocolates',
      'Private musicians, sommelier pairings, and bespoke photography',
      'Wardrobe, pressing, and dry cleaning emergency turnaround',
    ],
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/02/lake-como1.jpg',
  },
];

export const experienceStories: ExperienceStory[] = [
  {
    id: 'accra-art',
    category: 'Cultural Immersion',
    title: 'Contemporary Accra Art Journey',
    subtitle: 'Private studio and gallery access beyond guidebooks',
    description:
      'An intimate day exploring Accra’s dynamic art movement. Visit private artist studios, discover emerging Ghanaian sculptors, and enjoy private viewings arranged by The Koncierge.',
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider9.jpg',
    duration: 'Full Day · Personally Arranged',
  },
  {
    id: 'sommelier-table',
    category: 'Gastronomy',
    title: 'The Private Sommelier Table',
    subtitle: 'A multi-course dialogue of wine and West African terroir',
    description:
      'Join our executive chef and sommelier in The Brasserie cellar for an exclusive multi-course tasting menu pairing Old World vintages with Ghanaian ingredients.',
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/03/diner-image-1024x683.jpg',
    duration: 'Evening Service · By Reservation',
  },
  {
    id: 'historic-coastline',
    category: 'Historical Heritage',
    title: 'Coastline to Aburi Hills',
    subtitle: 'From historic Atlantic forts to lush botanical elevations',
    description:
      'Travel in luxury comfort with a dedicated private driver and historical curator. Experience coastal heritage and cool mountain air in the verdant Aburi ridge.',
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider8.jpg',
    duration: 'Full Day · Chauffeured',
  },
  {
    id: 'courtyard-serenity',
    category: 'Wellness & Sanctuary',
    title: 'Courtyard Pool & Aromatherapy',
    subtitle: 'Deep restoration within an intimate boutique enclave',
    description:
      'Unwind in our sheltered courtyard pool sanctuary, accompanied by bespoke aromatherapy bath rituals and fresh botanicals arranged directly in your suite.',
    imageUrl: 'https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg',
    duration: 'On Demand · Resident Privilege',
  },
];
