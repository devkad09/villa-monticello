import { Metadata } from 'next';
import { getAllSuites } from '@/data/suites';
import { SuitesCatalogClient } from '@/components/suites/SuitesCatalogClient';

export const metadata: Metadata = {
  title: 'Villa Monticello | The 16 Suites Collection',
  description:
    'Browse all 16 individually designed luxury suites at Villa Monticello in Accra, Ghana. From Presidential Suites to Executive retreats, each with its own story.',
  alternates: {
    canonical: 'https://villamonticello.com/suites',
  },
  openGraph: {
    title: 'The 16 Suites Collection | Villa Monticello Accra',
    description:
      '16 suites. 16 different stories. Explore the individually designed suites of Villa Monticello in Accra, Ghana.',
    url: 'https://villamonticello.com/suites',
    siteName: 'Villa Monticello',
    images: [
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/02/kwame-nkrumah1.jpg',
        width: 1200,
        height: 800,
        alt: 'Villa Monticello Luxury Suites Collection',
      },
    ],
    type: 'website',
  },
};

export default function SuitesPage() {
  const allSuites = getAllSuites();
  return <SuitesCatalogClient initialSuites={allSuites} />;
}
