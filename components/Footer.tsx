import { hotelInfo } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-navy text-lg font-bold text-white">
              M
            </div>

            <div>
              <p className="font-luxury text-xl font-bold leading-none">
                {hotelInfo.brandName}
              </p>

              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                {hotelInfo.slogan}
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-md text-sm leading-7 text-muted">
            Website đặt phòng dạng landing page, giúp khách xem nhanh thông tin
            khách sạn, phòng, giá, tiện ích và liên hệ đặt phòng qua Zalo hoặc
            điện thoại.
          </p>
        </div>

        <div>
          <p className="font-bold">Liên kết</p>

          <div className="mt-4 space-y-3 text-sm text-muted">
            <a href="#rooms" className="block hover:text-champagne">
              Phòng
            </a>
            <a href="#offers" className="block hover:text-champagne">
              Ưu đãi
            </a>
            <a href="#faq" className="block hover:text-champagne">
              FAQ
            </a>
            <a href="#contact" className="block hover:text-champagne">
              Liên hệ
            </a>
          </div>
        </div>

        <div>
          <p className="font-bold">Liên hệ</p>

          <div className="mt-4 space-y-3 text-sm text-muted">
            <p>Lễ tân: {hotelInfo.hotlineDisplay}</p>
            <p>Zalo: {hotelInfo.zaloDisplay}</p>
            <p>{hotelInfo.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}