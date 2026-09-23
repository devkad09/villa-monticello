import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, CheckCircle2, ShieldCheck, Phone, Mail, Building2, Sparkles } from 'lucide-react';
import { eventSpaces } from '@/data/events';
import { hotelInfo } from '@/data/hotel';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { BackNavigation } from '@/components/navigation/BackNavigation';

export const metadata: Metadata = {
  title: 'Villa Monticello | Meetings, Events & Private Celebrations in Accra',
  description:
    'Host executive meetings, private dining, and bespoke celebrations at Villa Monticello in Accra. Featuring The Boardroom (12 guests), Private Dining (50 guests), and estate galas.',
  alternates: {
    canonical: 'https://villamonticello.com/events',
  },
  openGraph: {
    title: 'Meetings & Celebrations | Villa Monticello Accra',
    description:
      'Executive boardrooms, private dining salons, and intimate courtyard event spaces in Airport Residential Area, Accra.',
    url: 'https://villamonticello.com/events',
    siteName: 'Villa Monticello',
    images: [
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/02/last-emperor1.jpg',
        width: 1200,
        height: 800,
        alt: 'Villa Monticello Executive Event Spaces',
      },
    ],
    type: 'website',
  },
};

export default function EventsPage() {
  return (
    <>
      <Navbar />

      <main className="relative w-full bg-[#FAF8F5]">
        {/* Full-Width Cinematic Events Hero */}
        <section className="relative w-full h-[75vh] sm:h-[80vh] min-h-[520px] bg-[#121110] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://villamonticello.com/wp-content/uploads/2026/02/last-emperor1.jpg"
              alt="Meetings and Celebrations at Villa Monticello"
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
              <div className="max-w-4xl">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B89355] font-semibold block mb-3">
                  Executive Meetings & Private Celebrations
                </span>

                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.05]">
                  Gather in Distinction
                </h1>

                <p className="font-sans text-sm sm:text-base text-white/90 font-light mt-4 max-w-2xl leading-relaxed drop-shadow-sm">
                  From high-stakes board meetings in complete discretion to celebratory private dining,
                  our venue collection combines residential intimacy with flawless hospitality.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    href="#inquiry"
                    icon={<Sparkles size={15} />}
                  >
                    Inquire About An Event
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    href="#spaces"
                  >
                    Explore The Spaces
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Event Spaces Section */}
        <Section id="spaces" spacing="spacious" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60">
          <Container>
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block mb-2">
                Curated Venues
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal">
                Our Spaces & Capacities
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#625C53] font-light mt-3 leading-relaxed">
                Whether you require an executive boardroom with encrypted AV or an open-air
                courtyard gala for 200 guests, every venue is supported by bespoke catering
                and meticulous event coordination.
              </p>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {eventSpaces.map((space, idx) => (
                <div
                  key={space.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-b border-[#DCD5C9]/60 pb-16 lg:pb-24 last:border-b-0 last:pb-0"
                >
                  {/* Space Image */}
                  <div
                    className={`lg:col-span-6 relative ${
                      idx % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#1C1A18] shadow-2xl shadow-black/15 group">
                      <Image
                        src={space.imageUrl}
                        alt={space.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                      <div className="absolute top-6 left-6 bg-[#121110]/80 backdrop-blur-md px-3 py-1 font-sans text-[10px] uppercase tracking-widest text-[#B89355] border border-white/10">
                        {space.category}
                      </div>

                      <div className="absolute bottom-6 left-6 text-white flex items-center gap-2">
                        <Users size={16} className="text-[#B89355]" />
                        <span className="font-serif text-xl sm:text-2xl font-normal">
                          {space.capacity}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Space Details */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      idx % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B89355] block mb-2">
                      {space.capacity}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal leading-[1.1]">
                      {space.name}
                    </h3>
                    <span className="font-serif italic text-base text-[#8E867A] block mt-1">
                      {space.tagline}
                    </span>

                    <p className="font-sans text-base text-[#625C53] font-light leading-relaxed mt-5">
                      {space.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-6 space-y-2">
                      {space.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-baseline gap-2.5 text-xs text-[#121110]">
                          <span className="text-[#B89355] font-serif">✦</span>
                          <span className="font-sans font-light">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#DCD5C9]/60 flex items-center gap-4">
                      <Button
                        variant="primary"
                        size="sm"
                        href="#inquiry"
                        className="!bg-[#121110] !text-[#FAF8F5] hover:!bg-[#1C1A18]"
                      >
                        Book {space.name.split(' ')[1]}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Event Enquiry Form Section */}
        <Section id="inquiry" spacing="spacious" className="bg-[#FAF8F5]">
          <Container size="narrow">
            <InquiryForm
              title="Plan Your Gathering"
              subtitle="Submit your event specifications and our private events coordinator will be in touch directly."
              defaultType="Executive Boardroom Meeting"
              typeOptions={[
                'Executive Boardroom Meeting (Up to 12 Guests)',
                'Private Dining or Anniversary Dinner (Up to 50 Guests)',
                'Celebration or Gala Buyout (Up to 200 Guests)',
                'Diplomatic Briefing or Summit',
                'Wedding or Milestone Celebration',
              ]}
              showDateGuests={true}
            />
          </Container>
        </Section>
      </main>
    </>
  );
}
