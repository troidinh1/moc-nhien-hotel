import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-24">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-champagne">
          Đánh giá khách hàng
        </p>

        <h2 className="mt-3 font-luxury text-4xl font-bold md:text-5xl">
          Tăng niềm tin trước khi khách đặt phòng.
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm"
          >
            <div className="text-xl text-champagne">★★★★★</div>

            <p className="mt-4 text-sm leading-7 text-muted">
              “{item.content}”
            </p>

            <p className="mt-5 font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}