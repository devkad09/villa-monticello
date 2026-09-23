import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { BackNavigation } from '@/components/navigation/BackNavigation';

export const metadata: Metadata = {
  title: 'Villa Monticello | Privacy Policy',
  description: 'Privacy Policy and guest information protection standards for Villa Monticello Boutique Hotel in Accra, Ghana.',
  alternates: {
    canonical: 'https://villamonticello.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="relative w-full bg-[#FAF8F5] pt-32 sm:pt-40">
        <Section spacing="default">
          <Container size="narrow">
            <BackNavigation to="home" variant="dark" className="mb-8" />

            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-2">
              Hospitality Standards
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#121110] font-normal mb-4">
              Privacy Policy
            </h1>
            <p className="font-sans text-xs text-[#8E867A] mb-12">
              Last Updated: 2026 · Standard Hospitality Transparency Statement
            </p>

            <div className="space-y-8 font-sans text-sm sm:text-base text-[#625C53] font-light leading-relaxed">
              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  1. Our Commitment to Discretion
                </h2>
                <p>
                  At Villa Monticello Boutique Hotel, guest privacy is fundamental to our hospitality ethos.
                  Whether you visit for an executive summit, diplomatic residency, or private leisure, we treat all
                  personal and reservation details with absolute discretion.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  2. Information We Collect
                </h2>
                <p>
                  When you make a reservation, submit an event inquiry, or request concierge arrangements, we collect
                  necessary details including:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm text-[#625C53]">
                  <li>Full name, contact telephone, and email address.</li>
                  <li>Arrival and departure dates, suite category, and guest counts.</li>
                  <li>Flight arrival details for coordinated VIP Kotoka airport chauffeur pickup.</li>
                  <li>Dietary preferences or bespoke event requirements communicated to our chefs.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  3. Reservation Processing
                </h2>
                <p>
                  Direct online reservations are processed via our verified reservation provider (Swiftbook).
                  Payment information is encrypted and transmitted in compliance with international financial security
                  standards. Villa Monticello never sells, rents, or monetizes guest personal data to third parties.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  4. Direct Communications
                </h2>
                <p>
                  Communications via email or WhatsApp are used exclusively for reservation confirmations, pre-arrival
                  coordination, and concierge services requested directly by you.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  5. Contact Our Privacy Desk
                </h2>
                <p>
                  For any inquiries regarding data handling or personal records, please contact our management team
                  directly at{' '}
                  <a href="mailto:reservations@villamonticello.com" className="text-[#B89355] underline">
                    reservations@villamonticello.com
                  </a>{' '}
                  or by phone at +233 55 721 6752.
                </p>
              </section>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
