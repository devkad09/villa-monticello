export interface BookingSearchCriteria {
  checkIn: string;
  checkOut: string;
  guests: number;
  suiteSlug?: string;
}

export interface OfferBenefit {
  title: string;
  description?: string;
}

export interface Offer {
  id: string;
  slug: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string[];
  startingRate?: string;
  validity?: string;
  benefits: OfferBenefit[];
  terms: string[];
  imageUrl: string;
  featured?: boolean;
  isArchived?: boolean;
  status?: 'active' | 'archived';
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  origin?: string;
  source: 'Tripadvisor' | 'Booking.com' | 'Google Reviews' | 'Direct Guest Book';
  rating: number; // e.g. 5
  year: string;
  stayType?: string;
  highlighted?: boolean;
}

export interface Award {
  id: string;
  organization: string;
  title: string;
  years: string[];
  category: string;
  description: string;
  year?: number | string;
  sourceUrl?: string;
  sourceLabel?: string;
  featured?: boolean;
  honor?: string;
  badgeUrl?: string;
}

export interface YearAwardsGroup {
  year: number | string;
  headline?: string;
  awards: Award[];
}

export interface RatingMetric {
  score: string;
  scale: string;
  platform: string;
  subtitle: string;
}
