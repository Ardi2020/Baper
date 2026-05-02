"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  fadeIn,
} from "@/ui-ux-pro-max/motion-config";
import Link from "next/link";
import YouTubeEmbed from "./youtube-embed";
import TikTokEmbed from "./tiktok-embed";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface TulisanItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  featured: boolean;
}

interface VideoItem {
  slug: string;
  title: string;
  platform: string;
  url: string;
  date: string;
}

interface Props {
  tulisan: TulisanItem[];
  videos: VideoItem[];
}

/* ------------------------------------------------------------------ */
/*  Bento Card                                                         */
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
/*  BentoGrid (Client Component)                                       */
/* ------------------------------------------------------------------ */

export default function BentoGrid({ tulisan, videos }: Props) {
  const featured = tulisan.find((t) => t.featured) ?? tulisan[0];
  const restTulisan = tulisan.filter((t) => t.slug !== featured?.slug);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6">
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
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex justify-center gap-4"
          >
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
          {/* Featured article */}
          {featured && (
            <BentoCard className="col-span-1 row-span-2 sm:col-span-2 sm:row-span-2 flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-[#DC143C]/15 px-3 py-1 text-xs font-medium text-[#DC143C]">
                  Sorotan
                </span>
                <h2 className="mt-4 font-[var(--font-heading)] text-2xl font-bold leading-snug text-[#ededed] sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#a0a0a0]">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#666]">{featured.date}</span>
                <Link
                  href={`/tulisan/${featured.slug}`}
                  className="text-sm font-medium text-[#FFD700] transition-colors hover:text-[#FFE44D]"
                >
                  Baca →
                </Link>
              </div>
            </BentoCard>
          )}

          {/* YouTube Embed */}
          {videos.filter(v => v.platform === "YouTube").slice(0, 1).map((v) => (
            <BentoCard key={v.slug} className="col-span-1 row-span-1 sm:col-span-1 overflow-hidden p-0">
              <YouTubeEmbed url={v.url} title={v.title} />
            </BentoCard>
          ))}

          {/* TikTok Embed - latest video */}
          {videos.filter(v => v.platform === "TikTok").slice(0, 1).map((v) => (
            <BentoCard key={v.slug} className="col-span-1 row-span-1 sm:col-span-1 overflow-hidden p-0">
              <TikTokEmbed url={v.url} title={v.title} />
            </BentoCard>
          ))}

          {/* Stats */}
          <BentoCard className="col-span-1 row-span-1 flex flex-col justify-between">
            <p className="text-xs font-medium uppercase tracking-wider text-[#666]">
              Total Tulisan
            </p>
            <p className="font-[var(--font-heading)] text-4xl font-bold text-[#FFD700]">
              {tulisan.length}
            </p>
            <p className="text-xs text-[#666]">terbaru</p>
          </BentoCard>

          {/* Quote */}
          <BentoCard className="col-span-1 row-span-1 flex flex-col justify-between sm:col-span-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#DC143C]"
            >
              <path
                d="M3 21c3-3 4-7 4-10C7 8 5 6 3 6s4-2 6 0 3 5 3 8c0 4-2 7-5 10"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M15 21c3-3 4-7 4-10 0-3-2-5-4-5s4-2 6 0 3 5 3 8c0 4-2 7-5 10"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
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
              {restTulisan.map((w) => (
                <li key={w.slug} className="group flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#DC143C]" />
                  <div>
                    <Link
                      href={`/tulisan/${w.slug}`}
                      className="text-sm font-medium text-[#ededed] transition-colors group-hover:text-[#FFD700]"
                    >
                      {w.title}
                    </Link>
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
              {videos.map((v) => (
                <li key={v.slug} className="group flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#FFD700]" />
                  <div>
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#ededed] transition-colors group-hover:text-[#DC143C]"
                    >
                      {v.title}
                    </a>
                    <p className="mt-0.5 text-xs text-[#666]">
                      {v.platform} · {v.date}
                    </p>
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
          <motion.h2
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="font-[var(--font-heading)] text-3xl font-bold text-[#ededed] sm:text-4xl"
          >
            Tentang <span className="text-[#FFD700]">Baper</span>
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#a0a0a0]">
            BAPER — Bicara Politik &amp; Peradaban — adalah platform editorial
            independen yang berdedikasi untuk menyajikan wacana intelektual
            tentang politik, peradaban, dan gagasan besar yang membentuk
            Indonesia dan dunia.
          </p>
        </div>
      </section>
    </>
  );
}
