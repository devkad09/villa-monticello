import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { LocationHero } from '@/components/location/LocationHero';
import { InteractiveMapSection } from '@/components/location/InteractiveMapSection';
import { DiscoverAccraSection } from '@/components/location/DiscoverAccraSection';
import { GettingHereSection } from '@/components/location/GettingHereSection';

export const metadata: Metadata = {
  title: 'Villa Monticello | Location & Discover Accra, Ghana',
  description:
    'Discover the serene setting of Airport Residential Area in Accra. 5 minutes from Kotoka International Airport. Location guide, arrival directions, and city guidance.',
  alternates: {
    canonical: 'https://villamonticello.com/location',
  },
  openGraph: {
    title: 'Location & Discover Accra | Villa Monticello',
    description:
      'Discover our tranquil address at 21 A Mankata Avenue Link in Airport Residential Area, Accra, Ghana. 5 minutes from Kotoka International Airport.',
    url: 'https://villamonticello.com/location',
    siteName: 'Villa Monticello',
    images: [
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider8.jpg',
        width: 1200,
        height: 800,
        alt: 'Villa Monticello Location in Airport Residential Area, Accra',
      },
    ],
    type: 'website',
  },
};

export default function LocationPage() {
  return (
    <>
      <Navbar />

      <main className="relative w-full bg-[#FAF8F5]">
        {/* Section 05: Location Hero */}
        <LocationHero />

        {/* Section 05: Interactive Map & Sanctuary Details */}
        <InteractiveMapSection />

        {/* Section 06: Discover Accra */}
        <DiscoverAccraSection />

        {/* Section 07: Getting Here Transit Guidance */}
        <GettingHereSection />
      </main>
    </>
  );
}
