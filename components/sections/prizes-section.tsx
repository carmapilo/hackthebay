export function PrizesSection() {
  return (
    <section
      id="prizes"
      className="relative flex min-h-[55vh] w-full items-center justify-center px-6 py-16"
    >
      <div className="relative flex w-full max-w-4xl flex-col items-center gap-6 text-center">
        <p className="text-4xl font-black uppercase tracking-[0.25em] text-cyan-200">
          Prizes
        </p>
        <p className="text-3xl font-black uppercase tracking-[0.22em] text-amber-300 drop-shadow-[0_0_16px_rgba(251,191,36,0.55)] sm:text-4xl">
          To Be Announced
        </p>
      </div>
    </section>
  );
}
