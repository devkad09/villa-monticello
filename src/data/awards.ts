import { Award, RatingMetric } from '@/types/booking';

export const awardsData: Award[] = [
  {
    id: 'wta-boutique-hotel',
    organization: 'World Travel Awards',
    title: "Ghana's Leading Boutique Hotel",
    years: ['2012–2026', 'Consecutive Winner'],
    category: 'Hospitality Excellence',
    description:
      'Recognized at the prestigious World Travel Awards as the pinnacle of bespoke boutique hospitality in Ghana for over a decade.',
  },
  {
    id: 'wta-hotel-suite',
    organization: 'World Travel Awards',
    title: "Ghana's Leading Hotel Suite",
    years: ['2025', '2026'],
    category: 'Kwame Nkrumah Presidential Suite',
    description:
      'Awarded to Villa Monticello’s flagship Kwame Nkrumah Presidential Suite for extraordinary architectural proportion, craftsmanship, and bespoke luxury.',
  },
  {
    id: 'tripadvisor-travelers-choice',
    organization: 'Tripadvisor',
    title: "Travelers' Choice Award",
    years: ['2016–2026'],
    category: 'Top 10% Worldwide',
    description:
      'Awarded continuously to properties that consistently earn outstanding traveler reviews, placing Villa Monticello in the top tier globally.',
  },
  {
    id: 'booking-traveller-review',
    organization: 'Booking.com',
    title: 'Traveller Review Award',
    years: ['2024–2026'],
    category: 'Guest Satisfaction',
    description:
      'Honoring exceptional guest satisfaction, attention to detail, and personalized service in the heart of Accra.',
  },
];

export const ratingMetrics: RatingMetric[] = [
  {
    score: '4.7',
    scale: '/ 5.0',
    platform: 'Tripadvisor',
    subtitle: "Travelers' Choice Best of the Best",
  },
  {
    score: '8.8',
    scale: '/ 10',
    platform: 'Booking.com',
    subtitle: 'Exceptional Guest Review Rating',
  },
  {
    score: '14+',
    scale: 'Years',
    platform: 'World Travel Awards',
    subtitle: "Ghana's Leading Boutique Hotel",
  },
  {
    score: '16',
    scale: 'Suites',
    platform: 'Bespoke Design',
    subtitle: 'Zero Cookie-Cutter Rooms',
  },
];

export function getAllAwards(): Award[] {
  return awardsData;
}

export function getRatingMetrics(): RatingMetric[] {
  return ratingMetrics;
}
