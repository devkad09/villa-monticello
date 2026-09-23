import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { BackNavigation } from '@/components/navigation/BackNavigation';

export const metadata: Metadata = {
  title: 'Villa Monticello | Cookie Policy',
  description: 'Cookie policy and digital browsing preferences for Villa Monticello Boutique Hotel website.',
  alternates: {
    canonical: 'https://villamonticello.com/cookies',
  },
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />

      <main className="relative w-full bg-[#FAF8F5] pt-32 sm:pt-40">
        <Section spacing="default">
          <Container size="narrow">
            <BackNavigation to="home" variant="dark" className="mb-8" />

            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#B89355] font-semibold block mb-2">
              Digital Browsing
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#121110] font-normal mb-4">
              Cookie Policy
            </h1>
            <p className="font-sans text-xs text-[#8E867A] mb-12">
              Transparency Regarding Website Cookies & Storage Technologies
            </p>

            <div className="space-y-8 font-sans text-sm sm:text-base text-[#625C53] font-light leading-relaxed">
              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  1. How We Use Cookies
                </h2>
                <p>
                  Villa Monticello uses minimal, non-invasive cookies and local browser storage to provide a seamless
                  browsing and reservation experience. We do not use third-party behavioral advertising cookies that
                  track your activity across unrelated websites.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  2. Essential Cookies
                </h2>
                <p>
                  These cookies are required for fundamental site functions, such as remembering your selected check-in
                  dates, guest count, and suite selection as you navigate to our reservation system.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  3. Performance & Anonymous Analytics
                </h2>
                <p>
                  We may collect aggregated, non-personally identifiable telemetry to evaluate page load speeds, verify
                  button accessibility, and optimize our digital guest journeys across mobile and desktop devices.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-[#121110] font-normal mb-3">
                  4. Managing Your Preferences
                </h2>
                <p>
                  You can modify or disable cookie storage at any time via your browser settings. Please note that
                  disabling session cookies may prevent dates and selected suites from automatically populating into
                  the booking interface.
                </p>
              </section>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
