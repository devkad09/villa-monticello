import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { getActiveOffers, getArchivedOffers } from '@/data/offers';
import { ArrowRight, Mail, Phone, Clock } from 'lucide-react';
import { BackNavigation } from '@/components/navigation/BackNavigation';
import { hotelInfo } from '@/data/hotel';

export const metadata: Metadata = {
  title: 'Villa Monticello | Current Offers & Packages in Accra',
  description:
    'Discover current offers, extended stay privileges, and getaway packages at Villa Monticello Boutique Hotel in Accra, Ghana. Direct booking privileges.',
  alternates: {
    canonical: 'https://villamonticello.com/offers',
  },
  openGraph: {
    title: 'Current Offers & Packages | Villa Monticello Accra',
    description:
      'Curated packages including the Suite Escape and Stay Longer privileges at Villa Monticello in Airport Residential Area.',
    url: 'https://villamonticello.com/offers',
    siteName: 'Villa Monticello',
    images: [
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/02/kwame-nkrumah1.jpg',
        width: 1200,
        height: 800,
        alt: 'Villa Monticello Current Offers',
      },
    ],
    type: 'website',
  },
};

export default function OffersPage() {
  const activeOffers = getActiveOffers();
  const archivedOffers = getArchivedOffers();

  return (
    <>
      <Navbar />

      <main className="relative w-full bg-[#FAF8F5]">
        {/* Full-Width Cinematic Header */}
        <section className="relative w-full h-[60vh] min-h-[440px] bg-[#121110] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://villamonticello.com/wp-content/uploads/2026/03/villamonticello-slider7.jpg"
              alt="Current Offers at Villa Monticello"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Layered gentle gradient - photography remains rich and visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121110]/50 via-[#121110]/20 to-[#121110]/80" />
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
              <div className="max-w-4xl">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B89355] font-semibold block mb-3">
                  Direct Privileges
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.05]">
                  Current Offers
                </h1>
                <p className="font-sans text-sm sm:text-base text-white/90 font-light mt-4 max-w-2xl leading-relaxed drop-shadow-sm">
                  Exclusive packages designed for your stay in Accra. From restorative weekend retreats
                  to extended residencies, book directly for verified privileges and dedicated service.
                </p>
              </div>
            </Container>
          </div>
        </section>

        {/* Active Offers Editorial Showcase */}
        <Section spacing="default" className="bg-[#FAF8F5]">
          <Container>
            <div className="space-y-16 lg:space-y-24">
              {activeOffers.map((offer, idx) => (
                <div
                  key={offer.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-b border-[#DCD5C9]/60 pb-16 lg:pb-24 last:border-b-0 last:pb-0"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 relative ${
                      idx % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#1C1A18] shadow-2xl shadow-black/10 group">
                      <Image
                        src={offer.imageUrl}
                        alt={offer.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                      {offer.startingRate && (
                        <div className="absolute bottom-6 left-6 bg-[#121110]/85 backdrop-blur-md px-3.5 py-1.5 font-sans text-xs text-white border border-white/10 flex items-center gap-2">
                          <span className="text-[#B89355] font-serif text-sm">✦</span>
                          <span className="font-medium tracking-wide">{offer.startingRate}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Narrative Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      idx % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <span className="font-sans text-[10px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block mb-2">
                      {offer.eyebrow}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal leading-[1.14]">
                      {offer.title}
                    </h2>
                    <span className="font-serif italic text-base text-[#8E867A] block mt-1">
                      {offer.tagline}
                    </span>

                    <p className="font-sans text-sm sm:text-base text-[#625C53] font-light leading-relaxed mt-4">
                      {offer.description[0]}
                    </p>

                    {/* Key Benefits Preview */}
                    <div className="mt-6 space-y-2">
                      {offer.benefits.slice(0, 4).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-baseline gap-2.5 text-xs text-[#121110]">
                          <span className="text-[#B89355] font-serif">✦</span>
                          <span className="font-sans font-light">
                            <strong>{benefit.title}</strong>
                            {benefit.description && ` — ${benefit.description}`}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#DCD5C9]/60 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/offers/${offer.slug}`}
                        className="inline-flex items-center gap-2 bg-[#121110] text-[#FAF8F5] font-sans text-xs uppercase tracking-[0.2em] px-6 py-3.5 hover:bg-[#1C1A18] transition-colors group"
                      >
                        <span>Explore Offer</span>
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 text-[#B89355]" />
                      </Link>
                      <Link
                        href={`/book?offer=${offer.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#121110] hover:text-[#B89355] py-3.5 transition-colors font-medium"
                      >
                        Book This Package →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Bespoke Arrangements Notice Section */}
        <Section spacing="compact" className="bg-white border-y border-[#DCD5C9]/70">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
              <div className="lg:col-span-8">
                <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B89355] font-semibold block mb-2">
                  Bespoke & Seasonal Arrangements
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#121110] font-normal mb-2">
                  Looking for tailored packages or corporate rates?
                </h3>
                <p className="font-sans text-sm text-[#625C53] font-light leading-relaxed">
                  Our reservations team is delighted to arrange bespoke packages for long-term residencies,
                  diplomatic delegations, private events, or seasonal dining experiences at Villa Monticello.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <a
                  href={`mailto:${hotelInfo.contact.reservationsEmail}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#121110] text-[#FAF8F5] font-sans text-xs uppercase tracking-[0.16em] px-6 py-3.5 hover:bg-[#1C1A18] transition-colors"
                >
                  <Mail size={14} className="text-[#B89355]" />
                  <span>Email Reservations</span>
                </a>
                <a
                  href={`tel:${hotelInfo.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 border border-[#121110] text-[#121110] font-sans text-xs uppercase tracking-[0.16em] px-6 py-3.5 hover:bg-[#121110] hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-[#B89355]" />
                  <span>{hotelInfo.contact.displayPhone}</span>
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* Past Milestone Offers Archive Section */}
        {archivedOffers.length > 0 && (
          <Section spacing="compact" className="bg-[#FAF8F5]">
            <Container>
              <div className="border-t border-[#DCD5C9]/80 pt-10">
                <div className="flex items-center gap-2 text-[#8E867A] mb-6">
                  <Clock size={16} />
                  <span className="font-sans text-xs uppercase tracking-[0.22em] font-medium">
                    Past Commemorative Offers (Archived)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {archivedOffers.map((archived) => (
                    <div
                      key={archived.id}
                      className="p-6 bg-white border border-[#DCD5C9]/60 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8E867A]">
                            {archived.eyebrow}
                          </span>
                          <span className="px-2.5 py-0.5 bg-[#FAF8F5] border border-[#DCD5C9] font-sans text-[10px] text-[#8E867A] uppercase tracking-wider">
                            Concluded
                          </span>
                        </div>
                        <h4 className="font-serif text-xl text-[#121110] font-normal mb-2">
                          {archived.title}
                        </h4>
                        <p className="font-sans text-xs text-[#625C53] font-light leading-relaxed">
                          {archived.description[0]}
                        </p>
                      </div>

                      <div className="pt-4 mt-6 border-t border-[#DCD5C9]/50 flex items-center justify-between">
                        <span className="font-sans text-xs text-[#8E867A]">
                          Valid: April – June 2026
                        </span>
                        <Link
                          href={`/offers/${archived.slug}`}
                          className="font-sans text-xs uppercase tracking-wider text-[#121110] hover:text-[#B89355] transition-colors"
                        >
                          View Details →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        )}
      </main>
    </>
  );
}
