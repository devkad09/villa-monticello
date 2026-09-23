import { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { BookingGatewayClient } from './BookingGatewayClient';
import { BackNavigation } from '@/components/navigation/BackNavigation';

export const metadata: Metadata = {
  title: 'Villa Monticello | Book Your Stay in Accra',
  description:
    'Reserve your bespoke suite at Villa Monticello Boutique Hotel in Accra, Ghana. Best rate guarantee, VIP Kotoka airport transfers, and dedicated Koncierge care.',
  alternates: {
    canonical: 'https://villamonticello.com/book',
  },
  openGraph: {
    title: 'Book Your Stay | Villa Monticello Accra',
    description:
      'Direct reservations for all 16 bespoke suites at Villa Monticello. Airport Residential Area, Accra, Ghana.',
    url: 'https://villamonticello.com/book',
    siteName: 'Villa Monticello',
    images: [
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/02/kwame-nkrumah1.jpg',
        width: 1200,
        height: 800,
        alt: 'Villa Monticello Reservations',
      },
    ],
    type: 'website',
  },
};

export default function BookingPage() {
  return (
    <>
      <Navbar />

      <main className="relative w-full bg-[#FAF8F5]">
        {/* Full-Width Cinematic Header */}
        <section className="relative w-full h-[65vh] min-h-[460px] bg-[#121110] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg"
              alt="Villa Monticello Courtyard Sanctuary"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Layered gentle gradient - photography remains rich and visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121110]/40 via-[#121110]/20 to-[#121110]/80" />
          </div>

          {/* Top Breadcrumb */}
          <div className="relative z-10 pt-28 sm:pt-32">
            <Container>
              <BackNavigation to="home" />
            </Container>
          </div>

          {/* Hero Overlay Title */}
          <div className="relative z-10 pb-12 sm:pb-16">
            <Container>
              <div className="max-w-3xl">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B89355] font-semibold block mb-3">
                  Direct Reservations
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight leading-[1.05]">
                  Your stay starts here.
                </h1>
                <p className="font-sans text-sm sm:text-base text-white/90 font-light mt-4 max-w-2xl leading-relaxed drop-shadow-sm">
                  Reserve directly for exclusive privileges, transparent rates, and personalized arrival care
                  at Villa Monticello in Accra.
                </p>
              </div>
            </Container>
          </div>
        </section>

        {/* Booking Gateway Interface with Suspense */}
        <Suspense
          fallback={
            <div className="py-24 text-center text-[#8E867A] font-sans text-sm">
              Loading reservation gateway...
            </div>
          }
        >
          <BookingGatewayClient />
        </Suspense>
      </main>
    </>
  );
}
