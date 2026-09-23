import { Review } from '@/types/booking';

export const reviewsData: Review[] = [
  {
    id: 'review-1',
    quote:
      'An absolute oasis of calm in Accra. The team remembered my name and coffee preference from the very first morning. The privacy, tranquil courtyard pool, and culinary standard at The Brasserie are unmatched in West Africa.',
    author: 'David M.',
    origin: 'London, United Kingdom',
    source: 'Tripadvisor',
    rating: 5,
    year: '2026',
    stayType: 'Executive Business Residency',
    highlighted: true,
  },
  {
    id: 'review-2',
    quote:
      'The Kwame Nkrumah Presidential Suite is breathtaking. The hand-loomed Ghanaian textiles, grand ceilings, and discreet hospitality made our stay deeply memorable. This is true boutique luxury at its finest.',
    author: 'Amina K.',
    origin: 'Lagos, Nigeria',
    source: 'Tripadvisor',
    rating: 5,
    year: '2026',
    stayType: 'Leisure & Cultural Discovery',
    highlighted: true,
  },
  {
    id: 'review-3',
    quote:
      'Impeccable from the moment of airport pickup. Just 5 minutes from Kotoka, yet quiet and serene. Every single suite has its own distinct personality. The food is top-notch and the staff embody authentic Ghanaian warmth.',
    author: 'Marcus T.',
    origin: 'Zurich, Switzerland',
    source: 'Booking.com',
    rating: 5,
    year: '2025',
    stayType: 'Diplomatic & Corporate Stay',
    highlighted: false,
  },
  {
    id: 'review-4',
    quote:
      'The Koncierge arranged our private gallery viewings and reservations with effortless precision. Villa Monticello proves that world-class luxury lies in attention to nuance, not massive generic hotel chains.',
    author: 'Elena & Julian R.',
    origin: 'New York, United States',
    source: 'Tripadvisor',
    rating: 5,
    year: '2025',
    stayType: 'Romantic Milestone Getaway',
    highlighted: false,
  },
  {
    id: 'review-5',
    quote:
      'Outstanding boutique hotel in Airport Residential Area. Intimate, beautifully designed, and remarkably secure. The Brasserie terrace under the evening lights is the best dinner spot in Accra.',
    author: 'Kwabena A.',
    origin: 'Accra & Toronto',
    source: 'Google Reviews',
    rating: 5,
    year: '2026',
    stayType: 'Anniversary Stay',
    highlighted: false,
  },
];

export function getAllReviews(): Review[] {
  return reviewsData;
}

export function getHighlightedReviews(): Review[] {
  return reviewsData.filter((r) => r.highlighted);
}
