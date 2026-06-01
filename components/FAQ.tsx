import { faqs } from "@/data/site";

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-champagne">
            Câu hỏi thường gặp
          </p>

          <h2 className="mt-3 font-luxury text-4xl font-bold md:text-5xl">
            Thông tin khách thường cần trước khi đặt phòng.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-navy/10 bg-cream p-5"
            >
              <summary className="cursor-pointer list-none font-bold">
                <div className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-xl text-champagne transition group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>

              <p className="mt-4 text-sm leading-7 text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}