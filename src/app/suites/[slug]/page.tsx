import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSuites, getSuiteBySlug, getRelatedSuites } from '@/data/suites';
import { SuiteDetailView } from '@/components/suites/SuiteDetailView';

interface SuitePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allSuites = getAllSuites();
  return allSuites.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: SuitePageProps): Promise<Metadata> {
  const { slug } = await params;
  const suite = getSuiteBySlug(slug);

  if (!suite) {
    return {
      title: 'Suite Not Found | Villa Monticello',
      description: 'The requested suite could not be found.',
    };
  }

  return {
    title: `Villa Monticello | ${suite.name} Suite`,
    description: suite.description,
    alternates: {
      canonical: `https://villamonticello.com/suites/${suite.slug}`,
    },
    openGraph: {
      title: `${suite.name} Suite | Villa Monticello Accra`,
      description: suite.description,
      url: `https://villamonticello.com/suites/${suite.slug}`,
      siteName: 'Villa Monticello',
      images: [
        {
          url: suite.images[0],
          width: 1200,
          height: 800,
          alt: `${suite.name} Suite at Villa Monticello`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Villa Monticello | ${suite.name} Suite`,
      description: suite.description,
      images: [suite.images[0]],
    },
  };
}

export default async function SuitePage({ params }: SuitePageProps) {
  const { slug } = await params;
  const suite = getSuiteBySlug(slug);

  if (!suite) {
    notFound();
  }

  const relatedSuites = getRelatedSuites(slug, 3);

  const roomJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    name: `${suite.name} Suite`,
    description: suite.description,
    image: suite.images,
    bed: suite.bed
      ? {
          '@type': 'BedDetails',
          numberOfBeds: 1,
          typeOfBed: suite.bed,
        }
      : undefined,
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: 2,
    },
    floorSize: suite.size
      ? {
          '@type': 'QuantitativeValue',
          value: suite.size,
        }
      : undefined,
    amenityFeature: suite.amenities?.map((f: string) => ({
      '@type': 'LocationFeatureSpecification',
      name: f,
      value: true,
    })),
    containedInPlace: {
      '@type': 'Hotel',
      name: 'Villa Monticello',
      url: 'https://villamonticello.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No 1 Mankata Avenue Link, Airport Residential Area',
        addressLocality: 'Accra',
        addressRegion: 'Greater Accra',
        addressCountry: 'GH',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomJsonLd) }}
      />
      <SuiteDetailView suite={suite} relatedSuites={relatedSuites} />
    </>
  );
}
