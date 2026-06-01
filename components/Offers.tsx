import { offers } from "@/data/site";

export default function Offers() {
  return (
    <section id="offers" className="bg-navy py-14 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-champagne">
              Gói lưu trú
            </p>

            <h2 className="mt-3 font-luxury text-4xl font-bold md:text-5xl">
              Linh hoạt cho nhiều nhu cầu đặt phòng.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/70">
              Phần này giúp khách dễ chọn nhu cầu: ở theo ngày, thuê theo giờ,
              khách công tác hoặc đặt nhanh qua Zalo.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur"
              >
                <p className="font-luxury text-2xl font-bold">{offer.title}</p>

                <p className="mt-3 text-3xl font-black text-champagne">
                  {offer.price}
                </p>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}