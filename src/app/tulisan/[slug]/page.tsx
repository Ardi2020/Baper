import { getAllTulisan, getTulisanBySlug, getTulisanSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Static params for SSG                                              */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  const slugs = getTulisanSlugs();
  return slugs.map((slug) => ({ slug }));
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tulisan = await getTulisanBySlug(slug);
  if (!tulisan) return { title: "Tidak Ditemukan" };

  return {
    title: `${tulisan.title} — BAPER`,
    description: tulisan.excerpt,
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function TulisanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tulisan = await getTulisanBySlug(slug);

  if (!tulisan) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      {/* Back link */}
      <Link
        href="/#tulisan"
        className="mb-8 inline-flex items-center gap-2 text-sm text-[#a0a0a0] transition-colors hover:text-[#FFD700]"
      >
        ← Kembali
      </Link>

      {/* Header */}
      <header className="mb-10">
        <span className="inline-block rounded-full bg-[#DC143C]/15 px-3 py-1 text-xs font-medium text-[#DC143C]">
          {tulisan.category}
        </span>
        <h1 className="mt-4 font-[var(--font-heading)] text-3xl font-bold leading-tight text-[#ededed] sm:text-4xl lg:text-5xl">
          {tulisan.title}
        </h1>
        <p className="mt-4 text-sm text-[#666]">{tulisan.date}</p>
        {tulisan.excerpt && (
          <p className="mt-4 text-lg leading-relaxed text-[#a0a0a0]">
            {tulisan.excerpt}
          </p>
        )}
      </header>

      {/* Divider */}
      <hr className="mb-10 border-[#222]" />

      {/* Content */}
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: tulisan.contentHtml }}
      />

      {/* Footer */}
      <hr className="my-10 border-[#222]" />
      <div className="flex justify-between">
        <Link
          href="/#tulisan"
          className="text-sm text-[#a0a0a0] transition-colors hover:text-[#FFD700]"
        >
          ← Semua Tulisan
        </Link>
      </div>
    </article>
  );
}
