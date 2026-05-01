import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface Tulisan {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  featured: boolean;
  contentHtml: string;
}

export interface Video {
  slug: string;
  title: string;
  platform: string;
  url: string;
  date: string;
  description: string;
}

/* ------------------------------------------------------------------ */
/*  Paths                                                              */
/* ------------------------------------------------------------------ */

const TULISAN_DIR = path.join(process.cwd(), "content/tulisan");
const VIDEO_DIR = path.join(process.cwd(), "content/video");

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

async function markdownToHtml(md: string): Promise<string> {
  const result = await remark().use(html).process(md);
  return result.toString();
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* ------------------------------------------------------------------ */
/*  Tulisan (Articles)                                                 */
/* ------------------------------------------------------------------ */

export async function getAllTulisan(): Promise<Tulisan[]> {
  if (!fs.existsSync(TULISAN_DIR)) return [];

  const files = fs.readdirSync(TULISAN_DIR).filter((f) => f.endsWith(".md"));

  const items = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(TULISAN_DIR, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const contentHtml = await markdownToHtml(content);

      return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        category: data.category ?? "Umum",
        date: formatDate(data.date ?? ""),
        image: data.image ?? "",
        featured: data.featured ?? false,
        contentHtml,
      };
    })
  );

  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getTulisanBySlug(
  slug: string
): Promise<Tulisan | null> {
  const filePath = path.join(TULISAN_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const contentHtml = await markdownToHtml(content);

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    category: data.category ?? "Umum",
    date: formatDate(data.date ?? ""),
    image: data.image ?? "",
    featured: data.featured ?? false,
    contentHtml,
  };
}

export function getTulisanSlugs(): string[] {
  if (!fs.existsSync(TULISAN_DIR)) return [];
  return fs
    .readdirSync(TULISAN_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/* ------------------------------------------------------------------ */
/*  Videos                                                             */
/* ------------------------------------------------------------------ */

export function getAllVideos(): Video[] {
  if (!fs.existsSync(VIDEO_DIR)) return [];

  const files = fs.readdirSync(VIDEO_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(VIDEO_DIR, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        platform: data.platform ?? "YouTube",
        url: data.url ?? "#",
        date: formatDate(data.date ?? ""),
        description: content.trim(),
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}
