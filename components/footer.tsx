import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/80 px-6 py-6 text-center text-xs uppercase tracking-[0.2em] text-cyan-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-1 sm:gap-2">
        <span className="text-[6px] tracking-[0.12em] sm:text-[8px] sm:tracking-[0.2em]">
          ©HackTheBay
        </span>
        <span className="text-[6px] tracking-[0.12em] sm:text-[8px] sm:tracking-[0.2em]">
          Made with ❤️ by the Hack the Bay team
        </span>

        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/hackthebay2026/"
            aria-label="Instagram"
            className="rounded p-2 transition hover:bg-white/5 hover:text-cyan-200"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="h-6 w-6"
            />
          </Link>
          <Link
            href="#"
            aria-label="Discord"
            className="rounded p-2 transition hover:bg-white/5 hover:text-cyan-200"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/discord.svg" alt="Discord" className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
