"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "@/ui-ux-pro-max/motion-config";
import PageTransition from "@/ui-ux-pro-max/page-transition";

/* ------------------------------------------------------------------ */
/*  Placeholder data — replace with real CMS / API data later          */
/* ------------------------------------------------------------------ */

const latestWritings = [
  {
    id: 1,
    title: "Demokrasi di Persimpangan Jalan",
    excerpt:
      "Mengamati evolusi demokrasi di era digital dan tantangan baru yang dihadapi oleh institusi politik modern.",
    category: "Politik",
    date: "28 Apr 2026",
  },
  {
    id: 2,
    title: "Peradaban dan Teknologi: Sebuah Dialektika",
    excerpt:
      "Bagaimana kemajuan teknologi membentuk ulang cara kita memahami peradaban manusia.",
    category: "Peradaban",
    date: "25 Apr 2026",
  },
  {
    id: 3,
    title: "Etika Kekuasaan dalam Konteks Kontemporer",
    excerpt:
      "Refleksi mendalam tentang tanggung jawab moral pemegang kekuasaan di abad ke-21.",
    category: "Opini",
    date: "20 Apr 2026",
  },
];

const videoHighlights = [
  { id: 1, title: "Debat Publik: Masa Depan Demokrasi", platform: "YouTube" },
  { id: 2, title: "60 Detik: Fakta Politik Hari Ini", platform: "TikTok" },
  { id: 3, title: "Podcast: Peradaban Digital", platform: "YouTube" },
];

/* ------------------------------------------------------------------ */
/*  Bento Card — reusable wrapper                                      */
/* ------------------------------------------------------------------ */

function BentoCard({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      variants={scaleIn}
      className={`rounded-2xl border border-[#222] bg-[#141414] p-6 transition-colors hover:border-[#333] ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <PageTransition>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6">
        {/* Subtle gradient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DC143C]/10 blur-[120px]" />
          <div className="absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-[#FFD700]/8 blur-[100px]" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#FFD700]"
          >
            Bicara Politik &amp; Peradaban
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-[var(--font-heading)] text-5xl font-bold leading-tight tracking-tight text-[#ededed] sm:text-6xl lg:text-7xl"
          >
            Ketajaman Pikiran{" "}
            <span className="text-[#DC143C]">untuk</span>{" "}
            <span className="text-[#FFD700]">Indonesia</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#a0a0a0]"
          >
            Wacana intelektual seputar politik, peradaban, dan gagasan besar
            yang membentuk masa depan bangsa.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 flex justify-center gap-4">
            <a
              href="#tulisan"
              className="rounded-full bg-[#DC143C] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#FF2D55]"
            >
              Baca Tulisan
            </a>
            <a
              href="#video"
              className="rounded-full border border-[#333] px-8 py-3 text-sm font-semibold text-[#ededed] transition-colors hover:border-[#FFD700] hover:text-[#FFD700]"
            >
              Tonton Video
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ BENTO GRID ============ */}
      <section id="konten" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
          className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Featured article — spans 2 cols, 2 rows */}
          <BentoCard className="col-span-1 row-span-2 sm:col-span-2 sm:row-span-2 flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-full bg-[#DC143C]/15 px-3 py-1 text-xs font-medium text-[#DC143C]">
                Sorotan
              </span>
              <h2 className="mt-4 font-[var(--font-heading)] text-2xl font-bold leading-snug text-[#ededed] sm:text-3xl">
                Demokrasi di Persimpangan Jalan
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#a0a0a0]">
                Mengamati evolusi demokrasi di era digital dan tantangan baru
                yang dihadapi oleh institusi politik modern. Sebuah analisis
                mendalam tentang arah perjalanan bangsa.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#666]">28 Apr 2026</span>
              <a
                href="#"
                className="text-sm font-medium text-[#FFD700] transition-colors hover:text-[#FFE44D]"
              >
                Baca →
              </a>
            </div>
          </BentoCard>

          {/* YouTube Embed Placeholder */}
          <BentoCard className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-3 sm:col-span-1">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="4" stroke="#DC143C" strokeWidth="1.5" />
              <path d="M10 9L15 12L10 15V9Z" fill="#DC143C" />
            </svg>
            <p className="text-sm font-medium text-[#ededed]">YouTube</p>
            <p className="text-xs text-[#666]">Video Terbaru</p>
          </BentoCard>

          {/* TikTok Embed Placeholder */}
          <BentoCard className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-sm font-medium text-[#ededed]">TikTok</p>
            <p className="text-xs text-[#666]">60 Detik Politik</p>
          </BentoCard>

          {/* Stats card */}
          <BentoCard className="col-span-1 row-span-1 flex flex-col justify-between">
            <p className="text-xs font-medium uppercase tracking-wider text-[#666]">
              Total Tulisan
            </p>
            <p className="font-[var(--font-heading)] text-4xl font-bold text-[#FFD700]">
              48
            </p>
            <p className="text-xs text-[#666]">+5 bulan ini</p>
          </BentoCard>

          {/* Quote card */}
          <BentoCard className="col-span-1 row-span-1 flex flex-col justify-between sm:col-span-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#DC143C]">
              <path d="M3 21c3-3 4-7 4-10C7 8 5 6 3 6s4-2 6 0 3 5 3 8c0 4-2 7-5 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M15 21c3-3 4-7 4-10 0-3-2-5-4-5s4-2 6 0 3 5 3 8c0 4-2 7-5 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <blockquote className="font-[var(--font-heading)] text-lg italic leading-relaxed text-[#ededed]">
              &ldquo;Peradaban tidak runtuh dalam satu malam, melainkan dalam
              kebisuhan kolektif.&rdquo;
            </blockquote>
            <p className="text-xs text-[#666]">— Redaksi Baper</p>
          </BentoCard>

          {/* Writings list */}
          <BentoCard
            id="tulisan"
            className="col-span-1 row-span-2 sm:col-span-2 sm:row-span-1 overflow-auto"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#FFD700]">
              Tulisan Terbaru
            </h3>
            <ul className="space-y-4">
              {latestWritings.map((w) => (
                <li key={w.id} className="group flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#DC143C]" />
                  <div>
                    <p className="text-sm font-medium text-[#ededed] transition-colors group-hover:text-[#FFD700]">
                      {w.title}
                    </p>
                    <p className="mt-0.5 text-xs text-[#666]">
                      {w.category} · {w.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* Video highlights */}
          <BentoCard
            id="video"
            className="col-span-1 row-span-2 overflow-auto"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#DC143C]">
              Video Pilihan
            </h3>
            <ul className="space-y-4">
              {videoHighlights.map((v) => (
                <li key={v.id} className="group flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#FFD700]" />
                  <div>
                    <p className="text-sm font-medium text-[#ededed] transition-colors group-hover:text-[#DC143C]">
                      {v.title}
                    </p>
                    <p className="mt-0.5 text-xs text-[#666]">{v.platform}</p>
                  </div>
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* Newsletter CTA */}
          <BentoCard className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-3 sm:col-span-2">
            <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#ededed]">
              Tetap Terhubung
            </h3>
            <p className="text-sm text-[#a0a0a0]">
              Dapatkan wacana terbaru langsung di inbox Anda.
            </p>
            <div className="mt-2 flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="email@anda.com"
                className="flex-1 rounded-full border border-[#333] bg-[#0a0a0a] px-5 py-2.5 text-sm text-[#ededed] placeholder-[#666] outline-none transition-colors focus:border-[#FFD700]"
              />
              <button className="rounded-full bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[#FFE44D]">
                Langganan
              </button>
            </div>
          </BentoCard>
        </motion.div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="tentang" className="border-t border-[#222] bg-[#111]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[#ededed] sm:text-4xl">
            Tentang <span className="text-[#FFD700]">Baper</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#a0a0a0]">
            BAPER — Bicara Politik &amp; Peradaban — adalah platform editorial
            independen yang berdedikasi untuk menyajikan wacana intelektual
            tentang politik, peradaban, dan gagasan besar yang membentuk
            Indonesia dan dunia. Kami percaya bahwa pikiran yang tajam adalah
            fondasi demokrasi yang sehat.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
