import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Footer } from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#121110',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Villa Monticello | Luxury Boutique Hotel in Accra',
  description:
    'An intimate sixteen-suite luxury boutique hotel in Accra’s Airport Residential Area, five minutes from Kotoka International Airport. Authentic Ghanaian hospitality, individually designed suites, and fine dining at The Brasserie.',
  authors: [{ name: 'Villa Monticello' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://villamonticello.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Villa Monticello | Luxury Boutique Hotel in Accra',
    description:
      'Where exceptional is standard. Sixteen individually designed suites, fine dining at The Brasserie, and attentive hospitality in Accra’s Airport Residential Area.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://villamonticello.com',
    siteName: 'Villa Monticello',
    images: [
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg',
        width: 1200,
        height: 800,
        alt: 'Villa Monticello Boutique Hotel Courtyard in Accra',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Villa Monticello | Luxury Boutique Hotel in Accra',
    description:
      'Where exceptional is standard. Sixteen bespoke suites and discreet luxury in Accra, Ghana.',
    images: ['https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg'],
  },
  icons: {
    icon: 'https://villamonticello.com/wp-content/uploads/2025/10/villa-monticello-fav-white.svg',
    apple: 'https://villamonticello.com/wp-content/uploads/2025/10/villa-monticello-fav-white.svg',
  },
};

// Verified Schema.org Hotel & Organization data (no arbitrary unverified ratings)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Hotel', 'Organization'],
  '@id': 'https://villamonticello.com/#organization',
  name: 'Villa Monticello',
  url: 'https://villamonticello.com',
  logo: 'https://villamonticello.com/wp-content/uploads/2025/10/villa-monticello-fav-white.svg',
  image: 'https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg',
  telephone: '+233 55 721 6752',
  email: 'reservations@villamonticello.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '21 A Mankata Avenue Link',
    addressLocality: 'Airport Residential Area',
    addressRegion: 'Greater Accra',
    postalCode: 'GA-085-4150',
    addressCountry: 'GH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 5.6037,
    longitude: -0.187,
  },
  priceRange: '$$$$',
  numberOfRooms: 16,
  petsAllowed: false,
  checkinTime: '15:00',
  checkoutTime: '12:00',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${jakarta.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Conditional Analytics: Only loaded when configured in environment, no fake tracking IDs */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#121110]">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
