import { hotelInfo } from "@/data/site";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-navy/10 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(18,51,43,0.12)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={`tel:${hotelInfo.hotline}`}
          className="rounded-full border border-navy/15 bg-white px-4 py-3 text-center text-sm font-black text-navy transition active:scale-95"
        >
          Gọi lễ tân
        </a>

        <a
          href={hotelInfo.zaloLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-champagne px-4 py-3 text-center text-sm font-black text-navy shadow-sm transition active:scale-95"
        >
          Chat Zalo
        </a>
      </div>
    </div>
  );
}