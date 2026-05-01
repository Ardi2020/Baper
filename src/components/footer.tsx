export default function Footer() {
  return (
    <footer className="border-t border-[#222] bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <span className="text-lg font-bold tracking-tight text-[#FFD700]">
            BAPER
          </span>
          <p className="mt-1 text-xs text-[#666]">
            Bicara Politik & Peradaban
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          >
            YouTube
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          >
            TikTok
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          >
            X / Twitter
          </a>
        </div>

        <p className="text-xs text-[#666]">
          © {new Date().getFullYear()} Baper. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
