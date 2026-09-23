import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navigation/Navbar';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="relative w-full min-h-screen bg-[#121110] text-[#FAF8F5] flex flex-col justify-center items-center py-32 overflow-hidden">
        {/* Atmospheric Background with dark scrim */}
        <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
          <Image
            src="https://villamonticello.com/wp-content/uploads/2026/06/VM_IMG_2286_20250815sk-1-1024x683.jpg"
            alt="Villa Monticello Sanctuary"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-radial from-transparent via-[#121110]/80 to-[#121110]" />
        </div>

        <div className="relative z-10 text-center max-w-2xl px-6">
          <span className="font-serif text-6xl sm:text-7xl md:text-8xl text-[#B89355] font-light block mb-2 tracking-tight">
            404
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-tight leading-[1.1] mb-6">
            Page not found.
          </h1>

          <p className="font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-lg mx-auto mb-10">
            The suite or page you are looking for is no longer available. Allow us to escort you back to
            the calm sanctuary of Villa Monticello.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B89355] hover:bg-[#c9a66d] text-[#121110] font-sans text-xs uppercase tracking-[0.18em] font-semibold px-8 py-4 transition-all duration-300 shadow-xl group cursor-pointer"
            >
              <span>RETURN TO VILLA MONTICELLO</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/suites"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-sans text-xs uppercase tracking-[0.18em] px-8 py-4 transition-all duration-300 group"
            >
              <span>EXPLORE THE SUITES</span>
              <ArrowRight size={15} className="text-[#B89355] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
