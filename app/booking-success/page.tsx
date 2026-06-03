import Image from "next/image";
import Link from "next/link";
import {
  DurationKey,
  formatPrice,
  getDurationLabel,
  getValidDuration,
  hotelInfo,
  rooms,
} from "@/data/site";

export default async function BookingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{
    room?: string;
    duration?: string;
  }>;
}) {
  const params = await searchParams;

  const selectedRoom =
    rooms.find((room) => room.id === params?.room) ?? rooms[0];

  const selectedDuration = getValidDuration(params?.duration) as DurationKey;
  const durationLabel = getDurationLabel(selectedDuration);
  const price = selectedRoom.prices[selectedDuration];

  return (
    <main className="min-h-screen bg-cream pb-24 text-navy md:pb-0">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-navy/10 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-3 px-4 md:px-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 transition hover:opacity-90"
            aria-label="Về trang chủ Mộc Nhiên Hotel"
          >
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
              <Image
                src="/images/moc-nhien-logo.png"
                alt="Mộc Nhiên Hotel"
                fill
                className="object-contain p-1.5"
                priority
              />
            </div>

            <div className="min-w-0">
              <p className="truncate font-luxury text-xl font-black leading-none text-navy md:text-2xl">
                {hotelInfo.brandName}
              </p>
              <p className="mt-1 truncate text-[10px] font-bold uppercase tracking-[0.18em] text-muted md:text-[11px] md:tracking-[0.22em]">
                Đặt phòng thành công
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="hidden rounded-full border border-navy/10 bg-white px-5 py-3 text-sm font-black text-navy shadow-sm transition hover:border-champagne hover:bg-champagne/10 sm:inline-flex"
          >
            Về trang chủ
          </Link>
        </div>
      </header>

      <div className="h-[76px]" />

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-14">
        <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-soft">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-navy p-6 text-white md:p-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl font-black text-navy shadow-soft">
                ✓
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-champagne">
                Đặt phòng thành công
              </p>

              <h1 className="mt-3 font-luxury text-4xl font-black leading-tight md:text-5xl">
                Cảm ơn quý khách đã đặt phòng tại Mộc Nhiên Hotel.
              </h1>

              <p className="mt-5 text-sm leading-7 text-white/75 md:text-base md:leading-8">
                Yêu cầu đặt phòng của quý khách đã được ghi nhận. Phòng đã chọn
                đang còn chỗ theo thông tin hiển thị trên website. Khách sạn có
                thể liên hệ thêm qua điện thoại hoặc Zalo nếu cần xác nhận lại
                thời gian nhận phòng hoặc yêu cầu đặc biệt.
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
                <p className="text-sm font-black text-white">
                  Thông tin liên hệ khách sạn
                </p>

                <div className="mt-3 grid gap-2 text-sm leading-6 text-white/75">
                  <p>
                    Lễ tân:{" "}
                    <span className="font-black text-white">
                      {hotelInfo.hotlineDisplay}
                    </span>
                  </p>
                  <p>
                    Zalo:{" "}
                    <span className="font-black text-white">
                      {hotelInfo.zaloDisplay}
                    </span>
                  </p>
                  <p>
                    Địa chỉ:{" "}
                    <span className="font-black text-white">
                      {hotelInfo.address}
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${hotelInfo.hotline}`}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-black text-navy transition hover:bg-cream"
                >
                  Gọi lễ tân
                </a>

                <a
                  href={hotelInfo.zaloLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-champagne px-5 text-sm font-black text-navy transition hover:opacity-90"
                >
                  Chat Zalo
                </a>
              </div>
            </div>

            <div className="p-5 md:p-8">
              <div className="overflow-hidden rounded-[1.5rem] border border-navy/10 bg-cream">
                <div className="relative h-64">
                  <Image
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-champagne">
                    Thông tin đặt phòng
                  </p>

                  <h2 className="mt-2 font-luxury text-3xl font-black leading-tight text-navy">
                    {selectedRoom.name}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {selectedRoom.description}
                  </p>

                  <div className="mt-5 grid gap-3">
                    <InfoRow label="Loại phòng" value={selectedRoom.name} />
                    <InfoRow label="Thời lượng lưu trú" value={durationLabel} />
                    <InfoRow label="Giá phòng" value={formatPrice(price)} />
                    <InfoRow
                      label="Tình trạng phòng"
                      value={`Còn ${selectedRoom.available} phòng`}
                    />
                    <InfoRow
                      label="Liên hệ khách sạn"
                      value={hotelInfo.zaloDisplay}
                    />
                  </div>

                  <div className="mt-5 rounded-2xl bg-white p-4">
                    <p className="text-sm font-black text-navy">
                      Ghi chú đặt phòng
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      Quý khách vui lòng giữ điện thoại/Zalo để khách sạn có thể
                      hỗ trợ nhanh khi cần. Nếu muốn đổi giờ nhận phòng, đổi
                      loại phòng hoặc hỏi thêm tiện ích, quý khách có thể liên
                      hệ trực tiếp lễ tân.
                    </p>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <Link
                      href="/#rooms"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-navy/10 bg-white px-5 text-sm font-black text-navy transition hover:border-champagne hover:bg-champagne/10"
                    >
                      Xem phòng khác
                    </Link>

                    <Link
                      href="/"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-navy px-5 text-sm font-black text-white transition hover:bg-leaf"
                    >
                      Về trang chủ
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-navy/10 bg-white p-5">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-champagne">
                  Quy trình sau khi đặt phòng
                </p>

                <div className="mt-4 grid gap-3">
                  <StepItem
                    number="01"
                    title="Thông tin đặt phòng được ghi nhận"
                    description="Khách đã chọn loại phòng, thời lượng lưu trú và giá phòng phù hợp."
                  />
                  <StepItem
                    number="02"
                    title="Khách sạn kiểm tra thông tin"
                    description="Nếu cần thiết, lễ tân sẽ gọi hoặc nhắn Zalo để xác nhận thêm giờ nhận phòng, số khách hoặc yêu cầu đặc biệt."
                  />
                  <StepItem
                    number="03"
                    title="Hoàn tất nhận phòng"
                    description="Quý khách đến khách sạn theo thời gian đã chọn và làm thủ tục nhận phòng tại lễ tân."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-navy/10 bg-white/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_35px_rgba(18,51,43,0.14)] backdrop-blur-xl md:hidden">
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
    </main>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3">
      <p className="text-sm font-bold text-muted">{label}</p>
      <p className="text-right text-sm font-black text-navy">{value}</p>
    </div>
  );
}

function StepItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl bg-cream p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-black text-white">
        {number}
      </div>

      <div>
        <p className="font-black text-navy">{title}</p>
        <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
      </div>
    </div>
  );
}
