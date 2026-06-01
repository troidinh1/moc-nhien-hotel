import { hotelInfo } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy text-base font-black text-white shadow-sm">
            M
          </div>

          <div>
            <p className="font-luxury text-xl font-bold leading-none text-navy">
              {hotelInfo.brandName}
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.25em] text-muted">
              {hotelInfo.slogan}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold text-navy/70 md:flex">
          <a href="#rooms" className="transition hover:text-champagne">
            Phòng
          </a>
          <a href="#offers" className="transition hover:text-champagne">
            Ưu đãi
          </a>
          <a href="#faq" className="transition hover:text-champagne">
            FAQ
          </a>
          <a href="#contact" className="transition hover:text-champagne">
            Liên hệ
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={hotelInfo.zaloLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full border border-navy/15 bg-white px-5 py-3 text-sm font-black text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-champagne hover:bg-champagne/10 hover:text-navy"
          >
            Chat Zalo
          </a>

          <a
            href={`tel:${hotelInfo.hotline}`}
            className="cursor-pointer rounded-full bg-navy px-5 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-leaf hover:text-white"
          >
            Gọi lễ tân
          </a>
        </div>

        <a
          href={hotelInfo.zaloLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-full bg-navy px-4 py-2 text-sm font-black text-white transition hover:bg-leaf md:hidden"
        >
          Zalo
        </a>
      </div>
    </header>
  );
}