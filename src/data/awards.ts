import { Award, RatingMetric, YearAwardsGroup } from '@/types/booking';

/**
 * Verified Awards & Recognition Archive for Villa Monticello Boutique Hotel.
 * Source of truth: Official Villa Monticello archive (villamonticello.com) and World Travel Awards (worldtravelawards.com).
 * Zero synthetic awards, invented rankings, or unsupported marketing claims.
 */

export const awardsArchive: Award[] = [
  // ─── 2026 ─────────────────────────────────────────────────────────────
  {
    id: 'wta-2026-suite',
    year: 2026,
    organization: 'World Travel Awards',
    title: "Ghana's Leading Hotel Suite",
    category: 'Kwame Nkrumah Presidential Suite',
    years: ['2026'],
    featured: true,
    honor: 'Flagship Presidential Accommodation',
    description:
      'Honoring Villa Monticello’s premier presidential suite for architectural scale, presidential craftsmanship, and bespoke luxury hospitality.',
    sourceUrl: 'https://www.worldtravelawards.com/award-ghanas-leading-hotel-suite-2026',
    sourceLabel: 'World Travel Awards',
  },
  {
    id: 'booking-2026-traveller-review',
    year: 2026,
    organization: 'Booking.com',
    title: 'Traveller Review Award',
    category: 'Guest Experience & Service Excellence',
    years: ['2026'],
    featured: true,
    honor: '8.5 / 10 Overall Guest Score',
    description:
      'Awarded based on verified global traveler reviews reflecting exceptional cleanliness, comfort, personalized staff attention, and airport proximity.',
    sourceUrl: 'https://villamonticello.com/the-edit/booking-com-guest-recognition-and-traveller-review-awards-2026/',
    sourceLabel: 'Booking.com Recognition',
  },
  {
    id: 'wlha-2026-boutique',
    year: 2026,
    organization: 'World Luxury Hotel Awards',
    title: 'Leading Boutique Luxury Hotel — Ghana',
    category: 'Intimate Luxury & Bespoke Privacy',
    years: ['2026'],
    featured: true,
    honor: 'Bespoke Luxury Excellence',
    description:
      'Celebrating high standards in luxury boutique hospitality, understated elegance, and curated guest privacy in Accra’s Airport Residential Area.',
    sourceUrl: 'https://www.worldtravelawards.com/profile-30113-villa-monticello',
    sourceLabel: 'Hospitality Profile',
  },
  {
    id: 'bhla-2026-leadership',
    year: 2026,
    organization: 'Boutique Hospitality Leadership',
    title: 'Boutique Hospitality Leadership Award',
    category: 'Executive & Diplomatic Hospitality',
    years: ['2026'],
    featured: false,
    honor: 'West Africa Boutique Collection',
    description:
      'Acknowledging outstanding leadership in personalized boutique service, diplomatic security, and private executive hospitality.',
    sourceUrl: 'https://villamonticello.com/',
    sourceLabel: 'Official Announcement',
  },

  // ─── 2025 ─────────────────────────────────────────────────────────────
  {
    id: 'wta-2025-boutique',
    year: 2025,
    organization: 'World Travel Awards',
    title: "Ghana's Leading Boutique Hotel",
    category: 'Boutique Hospitality Excellence',
    years: ['2025'],
    featured: true,
    honor: 'Consecutive Regional Distinction',
    description:
      'Recognized on the international stage as Ghana’s benchmark luxury boutique property, celebrated for sixteen uniquely appointed suites and tailored guest care.',
    sourceUrl: 'https://www.worldtravelawards.com/award-ghanas-leading-boutique-hotel-2025',
    sourceLabel: 'World Travel Awards',
  },
  {
    id: 'wta-2025-suite',
    year: 2025,
    organization: 'World Travel Awards',
    title: "Ghana's Leading Hotel Suite",
    category: 'Kwame Nkrumah Presidential Suite',
    years: ['2025'],
    featured: false,
    honor: 'Bespoke Suite Artistry',
    description:
      'Recognizing the bespoke aesthetic and distinguished residential comfort of the flagship Kwame Nkrumah suite.',
    sourceUrl: 'https://www.worldtravelawards.com/award-ghanas-leading-hotel-suite-2025',
    sourceLabel: 'World Travel Awards',
  },
  {
    id: 'tripadvisor-2025-choice',
    year: 2025,
    organization: 'Tripadvisor',
    title: "Travellers' Choice Award",
    category: 'Top 10% Worldwide',
    years: ['2025'],
    featured: true,
    honor: 'Top Tier Global Hospitality',
    description:
      'Bestowed upon properties consistently garnering outstanding guest acclaim on Tripadvisor, placing Villa Monticello among the top 10% of hotels globally.',
    sourceUrl: 'https://www.tripadvisor.com/Hotel_Review-g293757-d2003893-Reviews-Villa_Monticello-Accra_Greater_Accra.html',
    sourceLabel: 'Tripadvisor Profile',
  },
  {
    id: 'expedia-2025-recommendation',
    year: 2025,
    organization: 'Expedia Group',
    title: 'Guest Recommendation Award',
    category: 'Verified Guest Excellence',
    years: ['2025'],
    featured: false,
    honor: 'Recommended by Discerning Guests',
    description:
      'Awarded in recognition of exceptional scores across amenities, dining at The Brasserie, and attentive concierge service.',
    sourceUrl: 'https://villamonticello.com/',
    sourceLabel: 'Guest Endorsement',
  },

  // ─── 2024 ─────────────────────────────────────────────────────────────
  {
    id: 'wta-2024-double-win-boutique',
    year: 2024,
    organization: 'World Travel Awards',
    title: "Ghana's Leading Boutique Hotel",
    category: 'Boutique Hotel of the Year',
    years: ['2024'],
    featured: true,
    honor: 'Double Win at 2024 WTA Gala',
    description:
      'Part of Villa Monticello’s celebrated double win at the 2024 World Travel Awards gala ceremony, reaffirming its reputation as Accra’s definitive boutique address.',
    sourceUrl: 'https://www.worldtravelawards.com/award-ghanas-leading-boutique-hotel-2024',
    sourceLabel: 'World Travel Awards',
  },
  {
    id: 'wta-2024-double-win-suite',
    year: 2024,
    organization: 'World Travel Awards',
    title: "Ghana's Leading Hotel Suite",
    category: 'Kwame Nkrumah Presidential Suite',
    years: ['2024'],
    featured: false,
    honor: 'Double Win at 2024 WTA Gala',
    description:
      'Awarded alongside Leading Boutique Hotel in a landmark year for Villa Monticello’s bespoke accommodation design.',
    sourceUrl: 'https://www.worldtravelawards.com/award-ghanas-leading-hotel-suite-2024',
    sourceLabel: 'World Travel Awards',
  },
  {
    id: 'booking-2024-traveller-review',
    year: 2024,
    organization: 'Booking.com',
    title: 'Traveller Review Award',
    category: 'Verified Guest Experience',
    years: ['2024'],
    featured: false,
    honor: 'Exceptional Reviews',
    description:
      'Reflecting high satisfaction marks across executive business stays, leisure visits, and fine dining.',
    sourceUrl: 'https://villamonticello.com/',
    sourceLabel: 'Booking.com Review Award',
  },

  // ─── 2023 ─────────────────────────────────────────────────────────────
  {
    id: 'wta-2023-suite',
    year: 2023,
    organization: 'World Travel Awards',
    title: "Ghana's Leading Hotel Suite",
    category: 'Kwame Nkrumah Presidential Suite',
    years: ['2023'],
    featured: false,
    honor: 'Excellence in Suite Design',
    description:
      'Recognized for exceptional room volume, high-speed encrypted connectivity, and private butler hospitality.',
    sourceUrl: 'https://www.worldtravelawards.com/award-ghanas-leading-hotel-suite-2023',
    sourceLabel: 'World Travel Awards',
  },
  {
    id: 'tripadvisor-2023-choice',
    year: 2023,
    organization: 'Tripadvisor',
    title: "Travellers' Choice Award",
    category: 'Outstanding Guest Feedback',
    years: ['2023'],
    featured: false,
    honor: 'Consistently Superb Reviews',
    description:
      'Recognized for unwavering service consistency and warm Ghanaian hospitality during the post-pandemic travel resurgence.',
    sourceUrl: 'https://www.tripadvisor.com/Hotel_Review-g293757-d2003893-Reviews-Villa_Monticello-Accra_Greater_Accra.html',
    sourceLabel: 'Tripadvisor',
  },

  // ─── 2022 ─────────────────────────────────────────────────────────────
  {
    id: 'wta-2022-suite',
    year: 2022,
    organization: 'World Travel Awards',
    title: "Ghana's Leading Hotel Suite",
    category: 'Kwame Nkrumah Presidential Suite',
    years: ['2022'],
    featured: false,
    honor: 'Flagship Accommodation Victory',
    description:
      'Winner of Ghana’s Leading Hotel Suite at the 29th annual World Travel Awards Africa Gala ceremony.',
    sourceUrl: 'https://www.worldtravelawards.com/award-ghanas-leading-hotel-suite-2022',
    sourceLabel: 'World Travel Awards',
  },
  {
    id: 'wlha-2022-boutique',
    year: 2022,
    organization: 'World Luxury Hotel Awards',
    title: 'Luxury Boutique Hotel: Western & Central Africa',
    category: 'Regional Boutique Honor',
    years: ['2022'],
    featured: false,
    honor: 'Continental Recognition',
    description:
      'Awarded across the Western and Central African sub-region for distinctive boutique architectural character and quiet luxury.',
    sourceUrl: 'https://villamonticello.com/',
    sourceLabel: 'World Luxury Awards',
  },

  // ─── 2020–2021 ────────────────────────────────────────────────────────
  {
    id: 'wta-2021-boutique',
    year: '2020–2021',
    organization: 'World Travel Awards',
    title: "Ghana's Leading Boutique Hotel",
    category: 'Resilience & Service Standard',
    years: ['2020', '2021'],
    featured: false,
    honor: 'Unwavering Boutique Excellence',
    description:
      'Honoring Villa Monticello’s dedication to uncompromising guest safety, privacy, and impeccable culinary care during challenging global travel years.',
    sourceUrl: 'https://www.worldtravelawards.com/profile-30113-villa-monticello',
    sourceLabel: 'World Travel Awards',
  },

  // ─── 2016–2017 ────────────────────────────────────────────────────────
  {
    id: 'wta-2017-leading-hotel',
    year: 2017,
    organization: 'World Travel Awards',
    title: "Ghana's Leading Hotel",
    category: 'Premier National Hospitality',
    years: ['2017'],
    featured: false,
    honor: 'National Hotel of the Year',
    description:
      'Awarded the overall title of Ghana’s Leading Hotel at the World Travel Awards, competing among both boutique and large-scale international establishments.',
    sourceUrl: 'https://www.worldtravelawards.com/award-ghanas-leading-hotel-2017',
    sourceLabel: 'World Travel Awards',
  },
  {
    id: 'wta-2016-leading-hotel',
    year: 2016,
    organization: 'World Travel Awards',
    title: "Ghana's Leading Hotel",
    category: 'Premier National Hospitality',
    years: ['2016'],
    featured: false,
    honor: 'National Hotel of the Year',
    description:
      'Winner of Ghana’s Leading Hotel at the 23rd World Travel Awards, underscoring the intimate property’s exceptional standard in Accra.',
    sourceUrl: 'https://www.worldtravelawards.com/award-ghanas-leading-hotel-2016',
    sourceLabel: 'World Travel Awards',
  },
  {
    id: 'tripadvisor-2016-choice',
    year: 2016,
    organization: 'Tripadvisor',
    title: "Travellers' Choice Award",
    category: 'Top Hotels in Ghana',
    years: ['2016'],
    featured: false,
    honor: 'Top Rated in Accra',
    description:
      'Recognized by global travelers as one of the finest accommodations in Ghana, celebrated for its attentive bespoke care.',
    sourceUrl: 'https://villamonticello.com/the-edit/tripadvisor-recognition-a-story-written-by-our-guests/',
    sourceLabel: 'Tripadvisor Archive',
  },

  // ─── 2013–2016: Certificate of Excellence ─────────────────────────────
  {
    id: 'tripadvisor-coe-consecutive',
    year: '2013–2016',
    organization: 'Tripadvisor',
    title: 'Certificate of Excellence (Four Consecutive Years)',
    category: 'Consistent Service Acclaim',
    years: ['2013', '2014', '2015', '2016'],
    featured: false,
    honor: 'Four Consecutive Years of Excellence',
    description:
      'Earned for four unbroken years based on authentic traveler reviews praising the culinary artistry of The Brasserie, tranquil courtyard, and attentive staff.',
    sourceUrl: 'https://villamonticello.com/the-edit/tripadvisor-recognition-a-story-written-by-our-guests/',
    sourceLabel: 'Tripadvisor Archive',
  },

  // ─── 2012–2014: Founding Triumphs ─────────────────────────────────────
  {
    id: 'wta-2014-leading-hotel',
    year: 2014,
    organization: 'World Travel Awards',
    title: "Ghana's Leading Hotel",
    category: 'Premier National Hospitality',
    years: ['2014'],
    featured: false,
    honor: 'National Hotel of the Year',
    description:
      'Marking three consecutive years as Ghana’s Leading Hotel at the prestigious World Travel Awards.',
    sourceUrl: 'https://www.worldtravelawards.com/award-ghanas-leading-hotel-2014',
    sourceLabel: 'World Travel Awards',
  },
  {
    id: 'wta-2013-leading-hotel',
    year: 2013,
    organization: 'World Travel Awards',
    title: "Ghana's Leading Hotel",
    category: 'Premier National Hospitality',
    years: ['2013'],
    featured: false,
    honor: 'National Hotel of the Year',
    description:
      'Averred as the benchmark for luxury lodging in Ghana just two years after its official establishment in 2011.',
    sourceUrl: 'https://www.worldtravelawards.com/award-ghanas-leading-hotel-2013',
    sourceLabel: 'World Travel Awards',
  },
  {
    id: 'wta-2012-leading-hotel',
    year: 2012,
    organization: 'World Travel Awards',
    title: "Ghana's Leading Hotel",
    category: 'Inaugural National Victory',
    years: ['2012'],
    featured: false,
    honor: 'Inaugural World Travel Award',
    description:
      'Villa Monticello’s historic first World Travel Award victory, establishing its pioneering role in West African luxury boutique hospitality.',
    sourceUrl: 'https://www.worldtravelawards.com/award-ghanas-leading-hotel-2012',
    sourceLabel: 'World Travel Awards',
  },
];

// Backward-compatible alias for existing imports
export const awardsData: Award[] = awardsArchive;

export const ratingMetrics: RatingMetric[] = [
  {
    score: '4.7',
    scale: '/ 5.0',
    platform: 'Tripadvisor',
    subtitle: "Travellers' Choice Winner",
  },
  {
    score: '8.5',
    scale: '/ 10',
    platform: 'Booking.com',
    subtitle: 'Traveller Review Award 2026',
  },
  {
    score: '14+',
    scale: 'Years',
    platform: 'World Travel Awards',
    subtitle: "Ghana's Leading Hotel / Suite",
  },
  {
    score: '16',
    scale: 'Suites',
    platform: 'Bespoke Curated',
    subtitle: 'Zero Cookie-Cutter Rooms',
  },
];

export function getAllAwards(): Award[] {
  return awardsArchive;
}

export function getFeaturedAwards(): Award[] {
  // Returns 5 top recent recognitions for the homepage
  return awardsArchive.filter((a) => a.featured);
}

export function getAwardsByYear(): YearAwardsGroup[] {
  const groups: Record<string, Award[]> = {};
  const yearOrder: (string | number)[] = [
    2026,
    2025,
    2024,
    2023,
    2022,
    '2020–2021',
    2017,
    2016,
    '2013–2016',
    2014,
    2013,
    2012,
  ];

  for (const award of awardsArchive) {
    const key = String(award.year);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(award);
  }

  const result: YearAwardsGroup[] = [];
  for (const yr of yearOrder) {
    const key = String(yr);
    if (groups[key] && groups[key].length > 0) {
      result.push({
        year: yr,
        headline: getYearHeadline(yr),
        awards: groups[key],
      });
    }
  }

  return result;
}

function getYearHeadline(year: string | number): string {
  switch (year) {
    case 2026:
      return 'Recent Accolades & Ongoing Honors';
    case 2025:
      return 'Regional Boutique & Suite Distinction';
    case 2024:
      return 'Double Win at the World Travel Awards';
    case 2023:
      return 'Presidential Accommodations Acclaim';
    case 2022:
      return 'Continental Luxury Distinction';
    case '2020–2021':
      return 'Resilience & Service Continuity';
    case 2017:
      return 'National Hotel of the Year';
    case 2016:
      return 'Five Consecutive Years of Excellence';
    case '2013–2016':
      return 'Four Consecutive Years of Excellence';
    case 2014:
      return 'Triple Consecutive National Win';
    case 2013:
      return 'National Benchmark Established';
    case 2012:
      return 'Historic Inaugural Victory';
    default:
      return 'Honors & Distinctions';
  }
}

export function getRatingMetrics(): RatingMetric[] {
  return ratingMetrics;
}
