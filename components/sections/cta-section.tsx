'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/content/siteContent';

export function CTASection() {
  const { id, heading, body, button, buttonHref } = siteContent.cta;

  return (
    <section
      id={id}
      className="relative flex w-full items-center justify-center px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-3xl rounded-2xl border border-cyan-400/60 bg-slate-900/70 px-8 py-12 text-center text-white backdrop-blur"
      >
        <h2 className="text-3xl font-black text-cyan-200 sm:text-4xl">{heading}</h2>
        <p className="mt-4 text-lg text-cyan-100/85">{body}</p>
        <div className="mt-8 flex justify-center">
          <a
            href={buttonHref}
            className="rounded-full bg-cyan-400 px-8 py-3 text-lg font-bold text-black shadow-lg transition hover:scale-105 hover:shadow-cyan-400/40"
          >
            {button}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

