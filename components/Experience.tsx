import { experiences } from "@/data/site";

export default function Experience() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2 md:px-8 md:py-24">
      <div
        className="min-h-[420px] rounded-[2rem] bg-cover bg-center shadow-soft"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1400&auto=format&fit=crop')",
        }}
      />

      <div className="flex flex-col justify-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-champagne">
          Trải nghiệm lưu trú
        </p>

        <h2 className="mt-3 font-luxury text-4xl font-bold md:text-5xl">
          Một nơi nghỉ ngơi gọn gàng, dễ tìm và tiện liên hệ.
        </h2>

        <p className="mt-5 text-base leading-8 text-muted">
          Landing page này giúp khách xem nhanh thông tin cần thiết trước khi
          đặt phòng: vị trí, tiện ích, số liên hệ, Zalo và loại phòng.
        </p>

        <div className="mt-7 space-y-4">
          {experiences.map((item) => (
            <div key={item} className="flex gap-3 rounded-3xl bg-white p-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-champagne text-sm font-bold text-navy">
                ✓
              </div>

              <p className="text-sm font-medium leading-7">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}