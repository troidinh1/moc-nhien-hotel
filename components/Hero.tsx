import { heroData, hotelInfo } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-champagne/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-softbeige blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-champagne/40 bg-white px-4 py-2 text-sm font-black text-navy shadow-sm">
            <span className="h-2 w-2 rounded-full bg-champagne" />
            {heroData.badge}
          </div>

          <h1 className="max-w-2xl font-luxury text-4xl font-black leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl lg:text-[72px]">
            {heroData.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
            {heroData.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#rooms"
              className="cursor-pointer rounded-full bg-navy px-7 py-4 text-center text-sm font-black text-white shadow-soft transition hover:-translate-y-1 hover:bg-leaf"
            >
              {heroData.primaryCta}
            </a>

            <a
              href={hotelInfo.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full border border-navy/15 bg-white px-7 py-4 text-center text-sm font-black text-navy shadow-sm transition hover:-translate-y-1 hover:border-champagne hover:bg-champagne/10"
            >
              {heroData.secondaryCta}
            </a>
          </div>

          <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
            {heroData.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-navy/10 bg-white p-4 text-center shadow-sm"
              >
                <p className="font-luxury text-2xl font-black text-navy">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-bold text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-3 shadow-soft">
            <div
              className="min-h-[360px] rounded-[1.5rem] bg-cover bg-center sm:min-h-[460px] md:min-h-[560px]"
              style={{
                backgroundImage: `url('${heroData.image}')`,
              }}
            />

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroData.locations.map((location) => (
                <a
                  href="#contact"
                  key={location}
                  className="cursor-pointer rounded-2xl border border-navy/10 bg-cream px-3 py-3 text-center text-xs font-black text-navy transition hover:border-champagne hover:bg-champagne/15"
                >
                  {location}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}