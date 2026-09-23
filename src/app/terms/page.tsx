import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { BackNavigation } from '@/components/navigation/BackNavigation';

export const metadata: Metadata = {
  title: 'Villa Monticello | Terms of Stay',
  description: 'Terms of Stay, check-in policies, and reservation conditions for Villa Monticello Boutique Hotel in Accra, Ghana.',
  alternates: {
    canonical: 'https://villamonticello.com/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="relative w-full bg-[#FAF8F5] pt-32 sm:pt-40">
        <Section spacing="default">
          <Container size="narrow">
            <BackNavigation to="home" variant="dark" className="mb-8" />

            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-2">
              Guest Guidelines
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#121110] font-normal mb-4">
              Terms of Stay
            </h1>
            <p className="font-sans text-xs text-[#8E867A] mb-12">
              Standard Hospitality Terms & Reservation Guidelines · Villa Monticello Boutique Hotel
            </p>

            <div className="space-y-8 font-sans text-sm sm:text-base text-[#625C53] font-light leading-relaxed">
              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  1. Check-In & Departure Hours
                </h2>
                <p>
                  Standard check-in commences from <strong>15:00 (3:00 PM)</strong>. Departure check-out is requested
                  by <strong>12:00 (12:00 PM)</strong> noon. Early check-in or late departure requests are accommodated
                  based upon suite availability or guaranteed through select direct booking packages.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  2. Reservations & Best Rate Guarantee
                </h2>
                <p>
                  All suite reservations are confirmed directly via our official Swiftbook engine or with our front
                  desk team. Direct reservations guarantee our best available rates and personalized welcome privileges.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  3. Cancellation & Modification
                </h2>
                <p>
                  Because Villa Monticello operates as an intimate 16-suite boutique hotel, cancellations affect our
                  accommodations substantially. Cancellations made 48 hours prior to arrival are refunded in accordance
                  with rate plan terms. Non-refundable promotional rates are clearly demarcated during booking.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  4. Sanctuary Etiquette & Atmosphere
                </h2>
                <p>
                  Villa Monticello is dedicated to tranquility. Guests are requested to maintain a discreet volume in
                  courtyard and pool areas. All sixteen interior suites are strictly non-smoking. Designated outdoor
                  courtyard smoking zones are provided.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  5. Contact & Assistance
                </h2>
                <p>
                  For questions regarding specific reservation terms or special group accommodations, please contact
                  the management desk at{' '}
                  <a href="mailto:reservations@villamonticello.com" className="text-[#B89355] underline">
                    reservations@villamonticello.com
                  </a>.
                </p>
              </section>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
