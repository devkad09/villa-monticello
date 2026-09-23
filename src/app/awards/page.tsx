import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { BackNavigation } from '@/components/navigation/BackNavigation';
import { getAwardsByYear, getRatingMetrics } from '@/data/awards';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Awards & Recognition | Villa Monticello Accra',
  description:
    'Explore Villa Monticello’s awards and recognitions from leading hospitality and travel organisations across more than a decade of bespoke boutique excellence in Accra, Ghana.',
  alternates: {
    canonical: 'https://villamonticello.com/awards',
  },
  openGraph: {
    title: 'Awards & Recognition | Villa Monticello Boutique Hotel',
    description:
      'A record worth noting. Over a decade of verified recognitions from the World Travel Awards, Tripadvisor, and Booking.com.',
    url: 'https://villamonticello.com/awards',
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
    title: 'Awards & Recognition | Villa Monticello Accra',
    description:
      'A record worth noting. Over a decade of verified recognitions from the World Travel Awards, Tripadvisor, and Booking.com.',
    images: ['https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg'],
  },
};

export default function AwardsPage() {
  const yearGroups = getAwardsByYear();
  const metrics = getRatingMetrics();

  return (
    <>
      <Navbar />

      <main className="relative w-full bg-[#FAF8F5] text-[#121110] pt-32 sm:pt-40">
        {/* Editorial Header */}
        <Section spacing="default" className="border-b border-[#DCD5C9]/60 pb-16 sm:pb-24">
          <Container>
            <BackNavigation to="home" variant="dark" className="mb-10 sm:mb-12" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-4">
                  A record worth noting.
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#121110] font-normal leading-[1.06] tracking-tight">
                  AWARDS & ACHIEVEMENTS
                </h1>
              </div>

              <div className="lg:col-span-4">
                <p className="font-sans text-sm sm:text-base text-[#625C53] font-light leading-relaxed">
                  Villa Monticello has been recognised by leading hospitality and travel organisations across the years.
                  From consecutive World Travel Awards to sustained global guest acclaim, each honor reflects our commitment
                  to personalized hospitality, bespoke design, and quiet luxury in Accra.
                </p>
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="mt-16 sm:mt-20 pt-10 border-t border-[#DCD5C9]/60 grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric) => (
                <div key={metric.platform} className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-3xl sm:text-4xl text-[#121110] font-light">
                      {metric.score}
                    </span>
                    <span className="font-sans text-xs text-[#B89355] font-medium tracking-wider">
                      {metric.scale}
                    </span>
                  </div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#121110] font-semibold mt-2">
                    {metric.platform}
                  </span>
                  <span className="font-sans text-xs text-[#8E867A] font-light mt-0.5">
                    {metric.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Chronological Archive */}
        <Section spacing="spacious" className="border-b border-[#DCD5C9]/60">
          <Container>
            <div className="space-y-20 sm:space-y-28">
              {yearGroups.map((group) => (
                <div
                  key={String(group.year)}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
                >
                  {/* Left Column: Year Badge & Headline */}
                  <div className="lg:col-span-3 lg:sticky lg:top-36">
                    <div className="inline-block border-l-2 border-[#B89355] pl-4">
                      <span className="font-serif text-4xl sm:text-5xl text-[#121110] font-light block leading-none">
                        {group.year}
                      </span>
                      {group.headline && (
                        <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#8E867A] font-medium block mt-3">
                          {group.headline}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Awards Collection */}
                  <div className="lg:col-span-9 space-y-6">
                    {group.awards.map((award) => (
                      <article
                        key={award.id}
                        className="bg-white border border-[#DCD5C9]/80 p-8 sm:p-10 shadow-sm hover:shadow-md hover:border-[#B89355]/60 transition-all duration-300 group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                          <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#B89355] font-semibold">
                            {award.organization}
                          </span>
                          {award.honor && (
                            <span className="font-mono text-[11px] text-[#8E867A]">
                              {award.honor}
                            </span>
                          )}
                        </div>

                        <h2 className="font-serif text-2xl sm:text-3xl text-[#121110] font-normal leading-snug mb-3 group-hover:text-[#B89355] transition-colors">
                          {award.title}
                        </h2>

                        <p className="font-sans text-sm text-[#625C53] font-light leading-relaxed mb-6 max-w-3xl">
                          {award.description}
                        </p>

                        <div className="pt-6 border-t border-[#DCD5C9]/50 flex flex-wrap items-center justify-between gap-4 text-xs">
                          <div className="flex items-center gap-2 text-[#8E867A]">
                            <ShieldCheck size={14} className="text-[#B89355]" />
                            <span className="font-sans text-[11px] uppercase tracking-wider">
                              Category: {award.category}
                            </span>
                          </div>

                          {award.sourceUrl && (
                            <a
                              href={award.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.18em] text-[#121110] hover:text-[#B89355] font-medium transition-colors"
                              aria-label={`Verify award: ${award.title} on ${award.sourceLabel || award.organization} (opens in new tab)`}
                            >
                              <span>VERIFY AWARD</span>
                              <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5" />
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial Authenticity Footnote */}
            <div className="mt-24 pt-10 border-t border-[#DCD5C9]/60 text-center max-w-2xl mx-auto">
              <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#B89355] font-semibold block mb-2">
                Integrity & Authenticity
              </span>
              <p className="font-sans text-xs text-[#8E867A] font-light leading-relaxed">
                All recognitions recorded on this page reflect official published records from the World Travel Awards,
                Tripadvisor, Booking.com, and recognized international luxury hotel collections. Villa Monticello presents only
                independently verified honors.
              </p>
            </div>
          </Container>
        </Section>

        {/* Closing Sanctuary Invitation CTA */}
        <Section spacing="spacious" className="bg-[#121110] text-[#FAF8F5]">
          <Container size="narrow" className="text-center">
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-4">
              Experience The Distinction
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-tight leading-[1.1] mb-6">
              Discover Villa Monticello in Person
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-xl mx-auto mb-10">
              Each of our sixteen individually designed suites offers a tranquil, bespoke sanctuary just five minutes
              from Kotoka International Airport.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/suites"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B89355] hover:bg-[#c9a66d] text-[#121110] font-sans text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-all duration-300"
              >
                <span>EXPLORE THE SUITES</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300"
              >
                <span>CHECK AVAILABILITY</span>
                <ArrowRight size={14} className="text-[#B89355]" />
              </Link>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
