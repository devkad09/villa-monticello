export type SuiteCategory =
  | 'Presidential Suite'
  | 'Executive Plus'
  | 'Executive Suite'
  | 'Junior Suite';

export interface Suite {
  id: string;
  slug: string;
  number: number;
  name: string;
  category: SuiteCategory;
  tagline: string;
  size?: string; // e.g., "72 m²"
  bed?: string; // e.g., "King Bed"
  view?: string;
  description: string;
  editorialStory: string[];
  images: string[];
  featuredImage?: string;
  amenities: string[];
  highlights: string[];
  featured?: boolean;
  ctaLabel?: string;
  bookingRef?: string;
}
