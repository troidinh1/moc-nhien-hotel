import Link from "next/link";
import {
  DurationKey,
  formatPrice,
  getDurationLabel,
  rooms,
} from "@/data/site";

export default function Rooms({ duration }: { duration: DurationKey }) {
  return (
    <section id="rooms" className="bg-white py-14 pb-28 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-champagne md:tracking-[0.25em]">
              Phòng còn trống
            </p>

            <h2 className="mt-3 max-w-3xl font-luxury text-4xl font-black leading-tight text-navy md:text-5xl">
              Chọn phòng phù hợp với nhu cầu lưu trú.
            </h2>
          </div>

          <div className="rounded-3xl bg-cream px-5 py-4 text-sm leading-7 text-muted md:max-w-md">
            Đang hiển thị giá cho:{" "}
            <span className="font-black text-navy">
              {getDurationLabel(duration)}
            </span>
            . Vui lòng gọi lễ tân hoặc chat Zalo để được xác nhận phòng trống
            nhanh nhất.
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => {
            const price = room.prices[duration];
            const oldPrice = room.oldPrices[duration];

            return (
              <article
                key={room.id}
                className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-navy/10 bg-cream shadow-sm transition hover:-translate-y-1 hover:border-champagne/50 hover:shadow-soft md:rounded-[2rem]"
              >
                <div
                  className="h-56 bg-cover bg-center md:h-64"
                  style={{
                    backgroundImage: `url('${room.image}')`,
                  }}
                />

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-luxury text-2xl font-black leading-tight text-navy">
                      {room.name}
                    </h3>

                    <div className="shrink-0 text-right">
                      <p className="text-xs font-bold text-muted line-through">
                        {formatPrice(oldPrice)}
                      </p>
                      <p className="text-lg font-black text-navy md:text-xl">
                        {formatPrice(price)}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {room.description}
                  </p>

                  <div className="mt-5 grid gap-2">
                    {room.features.slice(0, 5).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm font-semibold text-navy"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="mb-4 flex items-center justify-between rounded-2xl bg-white px-4 py-3">
                      <p className="text-sm font-bold text-muted">
                        Tình trạng
                      </p>
                      <p className="text-sm font-black text-navy">
                        Còn {room.available} phòng
                      </p>
                    </div>

                    <Link
                      href={`/booking/${room.id}?duration=${duration}`}
                      className="inline-flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-navy px-5 text-base font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-leaf active:scale-95"
                    >
                      Đặt phòng trực tuyến
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-muted">
          Giá trên website là giá tham khảo theo thời lượng lưu trú. Khách sạn
          sẽ xác nhận lại phòng trống và giá chính xác qua điện thoại hoặc Zalo.
        </p>
      </div>
    </section>
  );
}