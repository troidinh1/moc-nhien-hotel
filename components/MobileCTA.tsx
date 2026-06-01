import { hotelInfo } from "@/data/site";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] border-t border-navy/10 bg-white/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_35px_rgba(18,51,43,0.14)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={`tel:${hotelInfo.hotline}`}
          className="inline-flex h-12 items-center justify-center rounded-full border border-navy/15 bg-white px-4 text-sm font-black text-navy shadow-sm active:scale-95"
        >
          Gọi lễ tân
        </a>

        <a
          href={hotelInfo.zaloLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-full bg-champagne px-4 text-sm font-black text-navy shadow-sm active:scale-95"
        >
          Chat Zalo
        </a>
      </div>
    </div>
  );
}