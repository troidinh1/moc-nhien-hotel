import { benefits } from "@/data/site";

export default function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-champagne">
          Vì sao nên chọn?
        </p>

        <h2 className="mt-3 font-luxury text-4xl font-bold md:text-5xl">
          Những điểm khách quan tâm trước khi đặt phòng.
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item) => (
          <div
            key={item.title}
            className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-softbeige text-2xl">
              {item.icon}
            </div>

            <h3 className="text-lg font-bold">{item.title}</h3>

            <p className="mt-3 text-sm leading-7 text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}