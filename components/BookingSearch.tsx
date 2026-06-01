import { DurationKey, durationOptions } from "@/data/site";

const checkinTimeOptions = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

export default function BookingSearch({
  duration,
}: {
  duration: DurationKey;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
      <form
        action="/"
        className="rounded-[2rem] border border-navy/10 bg-white p-4 shadow-soft md:p-5"
      >
        <div className="grid gap-4 md:grid-cols-[1fr_0.8fr_0.9fr_auto]">
          <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-muted">
              Ngày nhận phòng
            </label>

            <input
              type="date"
              name="checkinDate"
              className="min-h-[56px] w-full rounded-2xl border border-navy/10 bg-cream px-4 text-base font-bold text-navy outline-none transition focus:border-champagne"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-muted">
              Giờ nhận
            </label>

            <select
              name="checkinTime"
              defaultValue="10:00"
              className="min-h-[56px] w-full cursor-pointer rounded-2xl border border-navy/10 bg-cream px-4 text-base font-bold text-navy outline-none transition focus:border-champagne"
            >
              {checkinTimeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-muted">
              Thời lượng
            </label>

            <select
              name="duration"
              defaultValue={duration}
              className="min-h-[56px] w-full cursor-pointer rounded-2xl border border-navy/10 bg-cream px-4 text-base font-bold text-navy outline-none transition focus:border-champagne"
            >
              {durationOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="min-h-[56px] w-full cursor-pointer rounded-2xl bg-navy px-6 text-center text-base font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-leaf active:scale-95 md:w-auto"
            >
              Tìm phòng
            </button>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-cream px-4 py-3">
          <p className="text-sm leading-6 text-muted">
            Giá phòng sẽ tự thay đổi theo thời lượng bạn chọn. Số phòng trống
            hiện là dữ liệu demo, phần quản lý thật sẽ làm ở backend.
          </p>
        </div>
      </form>
    </section>
  );
}