import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { getAllOffers, getOfferBySlug } from '@/data/offers';
import { hotelInfo } from '@/data/hotel';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Phone, Mail, Calendar } from 'lucide-react';
import { BackNavigation } from '@/components/navigation/BackNavigation';

interface OfferDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const offers = getAllOffers();
  return offers.map((offer) => ({
    slug: offer.slug,
  }));
}

export async function generateMetadata({ params }: OfferDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);

  if (!offer) {
    return {
      title: 'Offer Not Found | Villa Monticello',
    };
  }

  return {
    title: `Villa Monticello | ${offer.title}`,
    description: offer.tagline,
    alternates: {
      canonical: `https://villamonticello.com/offers/${offer.slug}`,
    },
    openGraph: {
      title: `${offer.title} | Villa Monticello Accra`,
      description: offer.tagline,
      url: `https://villamonticello.com/offers/${offer.slug}`,
      siteName: 'Villa Monticello',
      images: [
        {
          url: offer.imageUrl,
          width: 1200,
          height: 800,
          alt: offer.title,
        },
      ],
      type: 'website',
    },
  };
}

export default async function OfferDetailPage({ params }: OfferDetailPageProps) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);

  if (!offer) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="relative w-full bg-[#FAF8F5]">
        {/* Full-Width Cinematic Header */}
        <section className="relative w-full h-[65vh] min-h-[480px] bg-[#121110] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={offer.imageUrl}
              alt={offer.title}
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
              <BackNavigation to="offers" />
            </Container>
          </div>

          {/* Hero Overlay Title */}
          <div className="relative z-10 pb-12 sm:pb-16">
            <Container>
              <div className="max-w-4xl">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B89355] font-semibold block mb-3">
                  {offer.eyebrow}
                </span>

                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light tracking-tight leading-[1.05]">
                  {offer.title}
                </h1>

                <p className="font-sans text-sm sm:text-base text-white/90 font-light mt-4 max-w-2xl leading-relaxed drop-shadow-sm">
                  {offer.tagline}
                </p>

                {offer.startingRate && (
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F5]/10 backdrop-blur-md border border-white/20 text-white font-sans text-xs uppercase tracking-wider">
                    <span className="text-[#B89355] font-serif">✦</span>
                    <span>{offer.startingRate}</span>
                  </div>
                )}
              </div>
            </Container>
          </div>
        </section>

        {/* Archived Notice Banner */}
        {offer.isArchived && (
          <div className="bg-[#1C1A18] text-[#FAF8F5] border-b border-[#B89355]/40 py-4 px-4">
            <Container>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#B89355] shrink-0" />
                  <span className="font-light text-white/90">
                    <strong className="font-medium text-white">Past Milestone Offer:</strong> Stays under this promotional package concluded on June 30, 2026.
                  </span>
                </div>
                <Link
                  href="/offers"
                  className="text-[#B89355] hover:text-white uppercase tracking-wider font-sans text-[11px] underline underline-offset-4 shrink-0 transition-colors"
                >
                  View Current Offers →
                </Link>
              </div>
            </Container>
          </div>
        )}

        {/* Narrative & Inclusions Grid */}
        <Section spacing="default" className="bg-[#FAF8F5]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Narrative Details */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#121110] font-normal mb-4">
                    The Experience
                  </h3>
                  <div className="space-y-4 font-sans text-base text-[#625C53] font-light leading-relaxed">
                    {offer.description.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="pt-8 border-t border-[#DCD5C9]/60">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#121110] font-normal mb-6">
                    What’s Included
                  </h3>

                  <div className="space-y-4">
                    {offer.benefits.map((benefit, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-5 bg-white border border-[#DCD5C9]/70 flex items-start gap-4 shadow-sm"
                      >
                        <Sparkles size={18} className="text-[#B89355] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-sm font-sans font-medium text-[#121110] block">
                            {benefit.title}
                          </strong>
                          {benefit.description && (
                            <span className="font-sans text-xs text-[#625C53] font-light mt-0.5 block">
                              {benefit.description}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terms & Conditions (Strict transparency) */}
                <div className="pt-8 border-t border-[#DCD5C9]/60">
                  <h4 className="font-serif text-xl text-[#121110] font-normal mb-4 flex items-center gap-2">
                    <ShieldAlert size={16} className="text-[#B89355]" />
                    <span>Terms & Conditions</span>
                  </h4>

                  <ul className="space-y-2 text-xs font-sans text-[#8E867A]">
                    {offer.terms.map((term, tIdx) => (
                      <li key={tIdx} className="flex items-baseline gap-2">
                        <span className="text-[#B89355] font-serif">·</span>
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Booking Box & Concierge Desk */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#121110] text-[#FAF8F5] p-8 sm:p-10 shadow-2xl border border-white/10">
                  <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-2">
                    {offer.isArchived ? 'Milestone Archive' : 'Direct Booking'}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3">
                    {offer.isArchived ? 'Archived Package' : 'Reserve This Package'}
                  </h3>
                  <p className="font-sans text-xs text-[#8E867A] font-light leading-relaxed mb-6">
                    {offer.validity || 'Direct website privilege. Subject to suite availability.'}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    {offer.isArchived ? (
                      <div className="space-y-3">
                        <div className="p-3.5 bg-white/5 border border-white/15 text-xs text-white/80 leading-relaxed font-light">
                          This milestone offer concluded on June 30, 2026. Explore our active packages or contact reservations for custom arrangements.
                        </div>
                        <Link
                          href="/offers"
                          className="w-full inline-flex items-center justify-center gap-2.5 bg-[#B89355] hover:bg-[#c9a66d] text-[#121110] font-sans text-xs uppercase tracking-[0.22em] font-semibold py-4 transition-colors group"
                        >
                          <span>Explore Current Offers</span>
                          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    ) : (
                      <>
                        <Link
                          href={`/book?offer=${offer.slug}`}
                          className="w-full inline-flex items-center justify-center gap-2.5 bg-[#B89355] hover:bg-[#c9a66d] text-[#121110] font-sans text-xs uppercase tracking-[0.22em] font-semibold py-4 transition-colors group"
                        >
                          <span>Book This Package</span>
                          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        <a
                          href={hotelInfo.bookingEngineUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 border border-white/20 text-white/90 hover:text-white hover:border-white font-sans text-xs uppercase tracking-[0.2em] py-3.5 transition-colors"
                        >
                          <span>Check Swiftbook Directly →</span>
                        </a>
                      </>
                    )}
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 text-xs font-sans text-white/70 space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone size={13} className="text-[#B89355]" />
                      <a href={`tel:${hotelInfo.contact.phone}`} className="hover:text-white">
                        {hotelInfo.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={13} className="text-[#B89355]" />
                      <a href={`mailto:${hotelInfo.contact.reservationsEmail}`} className="hover:text-white">
                        {hotelInfo.contact.reservationsEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
