export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] text-[#121110] transition-opacity duration-300"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] uppercase text-[#121110] animate-pulse">
          Villa Monticello
        </span>
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#B89355]">
          Accra · Ghana
        </span>
        {/* Subtle gold hairline indeterminate progress bar */}
        <div className="w-24 h-[1px] bg-[#DCD5C9] overflow-hidden relative mt-2">
          <div className="absolute inset-0 bg-[#B89355] animate-[shimmer_1.5s_infinite]" />
        </div>
      </div>
      <span className="sr-only">Loading Villa Monticello...</span>
    </div>
  );
}
