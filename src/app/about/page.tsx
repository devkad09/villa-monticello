import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { AboutHero } from '@/components/about/AboutHero';
import { StorySection } from '@/components/about/StorySection';
import { VillaCollage } from '@/components/about/VillaCollage';
import { PhilosophySection } from '@/components/about/PhilosophySection';

export const metadata: Metadata = {
  title: 'Villa Monticello | About Our Boutique Hotel in Accra, Ghana',
  description:
    'Learn the story and philosophy behind Villa Monticello. Established in 2011, featuring sixteen individually designed suites in Accra’s Airport Residential Area.',
  alternates: {
    canonical: 'https://villamonticello.com/about',
  },
  openGraph: {
    title: 'About Villa Monticello | Luxury Boutique Hotel in Accra',
    description:
      'A distinctive stay in the heart of Accra. Intimacy, character, and service defined across sixteen bespoke suites.',
    url: 'https://villamonticello.com/about',
    siteName: 'Villa Monticello',
    images: [
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg',
        width: 1200,
        height: 800,
        alt: 'Villa Monticello Boutique Hotel Sanctuary',
      },
    ],
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative w-full bg-[#FAF8F5]">
        {/* Section 01: Hero */}
        <AboutHero />

        {/* Section 02: Story */}
        <StorySection />

        {/* Section 03: The Villa Visual Collage */}
        <VillaCollage />

        {/* Section 04: Philosophy */}
        <PhilosophySection />
      </main>
    </>
  );
}
