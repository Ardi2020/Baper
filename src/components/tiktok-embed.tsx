"use client";

interface TikTokEmbedProps {
  url: string;
  title?: string;
}

function getTikTokVideoId(url: string): string | null {
  const match = url.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/);
  return match ? match[1] : null;
}

export default function TikTokEmbed({ url, title = "TikTok Video" }: TikTokEmbedProps) {
  const videoId = getTikTokVideoId(url);

  if (!videoId) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-[#666]">
        Video tidak tersedia
      </div>
    );
  }

  return (
    <iframe
      src={`https://www.tiktok.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="h-full w-full rounded-xl border-0"
      style={{ minHeight: "300px" }}
    />
  );
}
