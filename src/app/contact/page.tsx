import { Metadata } from 'next';
import Image from 'next/image';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { hotelInfo } from '@/data/hotel';
import { BackNavigation } from '@/components/navigation/BackNavigation';
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Villa Monticello | Contact & Location in Accra',
  description:
    'Contact Villa Monticello Boutique Hotel in Airport Residential Area, Accra. Direct phone, email, WhatsApp, and location guidance.',
  alternates: {
    canonical: 'https://villamonticello.com/contact',
  },
  openGraph: {
    title: 'Contact & Location | Villa Monticello Accra',
    description:
      'Connect with our reservations desk or visit us at 21 A Mankata Avenue Link in Airport Residential Area, Accra, Ghana.',
    url: 'https://villamonticello.com/contact',
    siteName: 'Villa Monticello',
    images: [
      {
        url: 'https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg',
        width: 1200,
        height: 800,
        alt: 'Villa Monticello Boutique Hotel Accra Entrance',
      },
    ],
    type: 'website',
  },
};

export default function ContactPage() {
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.835384260384!2d-0.18957492419816047!3d5.603700033333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b0f4d320d0f%3A0x6d8bfa2e2bc13d96!2sVilla%20Monticello%20Boutique%20Hotel!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh';

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Villa+Monticello+Boutique+Hotel+Accra';

  return (
    <>
      <Navbar />

      <main className="relative w-full bg-[#FAF8F5]">
        {/* Full-Width Cinematic Header */}
        <section className="relative w-full h-[65vh] min-h-[460px] bg-[#121110] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg"
              alt="Villa Monticello Sanctuary Entrance"
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
                  Direct Connection
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.05]">
                  Contact & Location
                </h1>
                <p className="font-sans text-sm sm:text-base text-white/90 font-light mt-4 max-w-2xl leading-relaxed drop-shadow-sm">
                  We look forward to welcoming you to Airport Residential Area. Connect directly with our
                  reservations desk, executive team, or dedicated Koncierge.
                </p>
              </div>
            </Container>
          </div>
        </section>

        {/* Split Editorial Contact Layout */}
        <Section spacing="default" className="bg-[#FAF8F5]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Editorial Directory & Location Details */}
              <div className="lg:col-span-5 space-y-10">
                {/* Physical Sanctuary Location */}
                <div className="pb-8 border-b border-[#DCD5C9]/60">
                  <span className="font-sans text-[10px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block mb-2">
                    Physical Address
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal mb-4">
                    The Hotel
                  </h2>
                  <div className="space-y-3 font-sans text-sm text-[#625C53] font-light leading-relaxed">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-[#B89355] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#121110] block font-medium">Villa Monticello Boutique Hotel</strong>
                        <span>21 A Mankata Avenue Link</span><br />
                        <span>Airport Residential Area, Accra</span><br />
                        <span>Greater Accra Region (GA-085-4150), Ghana</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-[#8E867A] pt-2">
                      <Navigation size={14} className="text-[#B89355] shrink-0" />
                      <span>5.6037° N, 0.1870° W · 5 Minutes from Kotoka (ACC)</span>
                    </div>

                    <div className="pt-3">
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider text-[#121110] hover:text-[#B89355] font-medium transition-colors"
                      >
                        <span>Get Directions on Google Maps</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Communications Strip */}
                <div className="pb-8 border-b border-[#DCD5C9]/60">
                  <span className="font-sans text-[10px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block mb-2">
                    Get in Touch
                  </span>
                  <h3 className="font-serif text-2xl text-[#121110] font-normal mb-4">
                    Direct Contact Lines
                  </h3>

                  <div className="space-y-4 font-sans text-sm text-[#625C53] font-light">
                    <div className="flex items-start gap-3">
                      <Phone size={17} className="text-[#B89355] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#8E867A] block">
                          General Desk & Reservations
                        </span>
                        <a href={`tel:${hotelInfo.contact.phone}`} className="text-[#121110] font-medium hover:text-[#B89355]">
                          {hotelInfo.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail size={17} className="text-[#B89355] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#8E867A] block">
                          Suite Reservations
                        </span>
                        <a href={`mailto:${hotelInfo.contact.reservationsEmail}`} className="text-[#121110] font-medium hover:text-[#B89355]">
                          {hotelInfo.contact.reservationsEmail}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail size={17} className="text-[#B89355] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#8E867A] block">
                          The Koncierge & VIP Transfers
                        </span>
                        <a href="mailto:koncierge@villamonticello.com" className="text-[#121110] font-medium hover:text-[#B89355]">
                          koncierge@villamonticello.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct Concierge Card */}
                <div className="p-6 bg-[#121110] text-[#FAF8F5] border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#B89355]/20 flex items-center justify-center text-[#B89355]">
                      <MessageCircle size={16} />
                    </div>
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#B89355] font-semibold">
                      Instant WhatsApp Channel
                    </span>
                  </div>
                  <p className="font-sans text-xs text-white/80 font-light leading-relaxed mb-4">
                    Require immediate transfer confirmation, table reservation, or presidential suite availability?
                    Connect in real-time with The Koncierge.
                  </p>
                  <a
                    href={hotelInfo.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#B89355] hover:bg-[#c9a66d] text-[#121110] font-sans text-xs uppercase tracking-[0.2em] font-medium px-5 py-3 transition-colors w-full justify-center"
                  >
                    <span>Chat With The Koncierge</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                {/* Interactive Map Embed */}
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.26em] text-[#B89355] font-semibold block mb-2">
                    Location & Surroundings
                  </span>
                  <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#DCD5C9] bg-[#1C1A18] shadow-md">
                    <iframe
                      title="Villa Monticello Location Map"
                      src={mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive General & Concierge Inquiry Form */}
              <div className="lg:col-span-7">
                <InquiryForm
                  title="Send Us a Message"
                  subtitle="Submit your inquiry, arrival preferences, or event request. Our concierge desk will respond promptly."
                  defaultType="General Concierge Inquiry"
                  typeOptions={[
                    'General Concierge Inquiry',
                    'Suite Availability & Booking Assistance',
                    'The Brasserie Table Reservation',
                    'VIP Kotoka Airport Transfer Arrangement',
                    'Executive Boardroom Meeting',
                    'Private Dining or Celebration',
                  ]}
                  showDateGuests={true}
                />
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
