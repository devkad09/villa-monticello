import { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Mail, Utensils } from 'lucide-react';
import { brasserieData } from '@/data/dining';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { BackNavigation } from '@/components/navigation/BackNavigation';

export const metadata: Metadata = {
  title: 'Villa Monticello | The Brasserie Fine Dining in Accra',
  description:
    'Experience fine dining at The Brasserie, Villa Monticello’s award-winning restaurant in Airport Residential Area, Accra. Modern gastronomy, curated cellar & seasonal menus.',
  alternates: {
    canonical: 'https://villamonticello.com/dine',
  },
  openGraph: {
    title: 'The Brasserie Fine Dining | Villa Monticello Accra',
    description:
      'Modern culinary artistry rooted in authentic flavors. Breakfast, Lunch, Dinner, and private sommelier pairings in Accra.',
    url: 'https://villamonticello.com/dine',
    siteName: 'Villa Monticello',
    images: [
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/03/diner-image-1024x683.jpg',
        width: 1200,
        height: 800,
        alt: 'The Brasserie Fine Dining at Villa Monticello',
      },
    ],
    type: 'website',
  },
};

export default function DiningPage() {
  const restaurantJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'The Brasserie',
    description: 'Fine dining restaurant at Villa Monticello boutique hotel in Airport Residential Area, Accra.',
    image: 'https://villamonticello.com/wp-content/uploads/2026/03/diner-image-1024x683.jpg',
    url: 'https://villamonticello.com/dine',
    telephone: '+233242436000',
    servesCuisine: ['International', 'Ghanaian Contemporary', 'French Bistro'],
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No 1 Mankata Avenue Link, Airport Residential Area',
      addressLocality: 'Accra',
      addressRegion: 'Greater Accra',
      addressCountry: 'GH',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '06:30',
        closes: '22:30',
      },
    ],
    acceptsReservations: 'True',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <Navbar />

      <main className="relative w-full bg-[#FAF8F5]">
        {/* Full-Width Cinematic Hero Header */}
        <section className="relative w-full h-[75vh] sm:h-[80vh] min-h-[520px] bg-[#121110] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={brasserieData.images.hero}
              alt="The Brasserie Restaurant at Villa Monticello"
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

          {/* Center/Lower Hero Title Overlay */}
          <div className="relative z-10 pb-12 sm:pb-16">
            <Container>
              <div className="max-w-4xl">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B89355] font-semibold block mb-3">
                  The Brasserie
                </span>

                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.05]">
                  {brasserieData.name}
                </h1>

                <p className="font-sans text-sm sm:text-base text-white/90 font-light mt-4 max-w-2xl leading-relaxed drop-shadow-sm">
                  {brasserieData.tagline}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    href="#reserve"
                    icon={<Utensils size={15} />}
                  >
                    Reserve A Table
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    href="#hours"
                  >
                    View Meal Periods
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* The Culinary Story */}
        <Section spacing="spacious" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Editorial Statement */}
              <div className="lg:col-span-5">
                <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block mb-3">
                  Philosophy & Terroir
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#121110] font-normal leading-[1.14]">
                  Modern culinary artistry rooted in authentic flavors.
                </h2>
              </div>

              {/* Right Column: In-Depth Narrative */}
              <div className="lg:col-span-7 flex flex-col gap-6 font-sans text-base sm:text-lg text-[#625C53] font-light leading-relaxed">
                {brasserieData.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                <div className="mt-6 pt-6 border-t border-[#DCD5C9]/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {brasserieData.culinaryHighlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-baseline gap-2.5 text-xs text-[#121110]">
                      <span className="text-[#B89355] font-serif">✦</span>
                      <span className="font-sans font-light">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Asymmetrical Food & Atmosphere Gallery (Avoids Standard 3-Column Grid) */}
        <Section spacing="default" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block mb-2">
                Atmosphere & Ambiance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal">
                The Dining Experience
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Large Feature Visual */}
              <div className="md:col-span-7 relative aspect-[16/11] overflow-hidden bg-[#1C1A18] shadow-xl group">
                <Image
                  src={brasserieData.images.gallery[0].url}
                  alt={brasserieData.images.gallery[0].caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 text-white font-sans text-xs uppercase tracking-widest">
                  {brasserieData.images.gallery[0].caption}
                </div>
              </div>

              {/* Smaller Asymmetrical Visuals Stack */}
              <div className="md:col-span-5 grid grid-cols-1 gap-6">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1A18] shadow-lg group">
                  <Image
                    src={brasserieData.images.gallery[1].url}
                    alt={brasserieData.images.gallery[1].caption}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 text-white font-sans text-xs uppercase tracking-widest">
                    {brasserieData.images.gallery[1].caption}
                  </div>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1A18] shadow-lg group">
                  <Image
                    src={brasserieData.images.gallery[2].url}
                    alt={brasserieData.images.gallery[2].caption}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 text-white font-sans text-xs uppercase tracking-widest">
                    {brasserieData.images.gallery[2].caption}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Dining Information & Verified Hours */}
        <Section id="hours" spacing="default" className="bg-[#FAF8F5] border-b border-[#DCD5C9]/60">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Hours */}
              <div className="lg:col-span-7">
                <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block mb-3">
                  Service Schedule
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal mb-8">
                  Meal Periods & Hours
                </h3>

                <div className="space-y-4">
                  {brasserieData.hours.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 border-b border-[#DCD5C9]/60"
                    >
                      <div>
                        <span className="font-serif text-xl sm:text-2xl text-[#121110]">
                          {h.period}
                        </span>
                        {h.notes && (
                          <span className="font-sans text-xs text-[#8E867A] block sm:inline sm:ml-3">
                            ({h.notes})
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-sm sm:text-base text-[#121110] font-medium mt-1 sm:mt-0">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Location, Dress Code & Contact */}
              <div className="lg:col-span-5 bg-[#121110] text-[#FAF8F5] p-8 sm:p-10 shadow-xl">
                <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#B89355] block mb-2">
                  Restaurant Information
                </span>
                <h4 className="font-serif text-2xl text-white font-normal mb-6">
                  Visiting The Brasserie
                </h4>

                <div className="space-y-4 text-xs font-sans text-white/80">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#B89355] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block uppercase tracking-wider mb-0.5">
                        Location
                      </strong>
                      <span>21 A Mankata Avenue Link, Airport Residential Area, Accra</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                    <Utensils size={16} className="text-[#B89355] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block uppercase tracking-wider mb-0.5">
                        Dress Code
                      </strong>
                      <span>{brasserieData.dressCode}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                    <Phone size={16} className="text-[#B89355] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block uppercase tracking-wider mb-0.5">
                        Direct Desk
                      </strong>
                      <a href={`tel:${brasserieData.contact.phone}`} className="hover:text-white">
                        {brasserieData.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                    <Mail size={16} className="text-[#B89355] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block uppercase tracking-wider mb-0.5">
                        Reservations Email
                      </strong>
                      <a href={`mailto:${brasserieData.contact.email}`} className="hover:text-white">
                        {brasserieData.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Table Reservation Inquiry Form Section */}
        <Section id="reserve" spacing="spacious" className="bg-[#FAF8F5]">
          <Container size="narrow">
            <InquiryForm
              title="Reserve Your Table"
              subtitle="Submit your dining preferences and our maître d' will confirm your reservation promptly."
              defaultType="The Brasserie Table Reservation"
              typeOptions={[
                'The Brasserie Table Reservation',
                'Private Chef Table Experience',
                'Sommelier Cellar Tasting',
                'Outside Catering Consultation',
              ]}
              showDateGuests={true}
            />
          </Container>
        </Section>
      </main>
    </>
  );
}
