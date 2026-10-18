import Image from "next/image";
import { site } from "@/site.config";

const nav = [
  { href: "#menu", label: "เมนู" },
  { href: "#about", label: "เกี่ยวกับเรา" },
  { href: "#order", label: "วิธีสั่ง" },
];

const baht = (n: number) => `฿${n.toLocaleString("th-TH")}`;

export default function Home() {
  return (
    <>
      {/* แถบบอกว่าเป็นเว็บตัวอย่าง: ลบออกเมื่อใช้กับร้านจริง */}
      <a href={site.demo.hire} target="_blank" rel="noopener" className="block bg-foreground px-4 py-2 text-center text-sm text-background">
        {site.demo.note} · {site.demo.by} <span className="underline underline-offset-2">รับทำเว็บแบบนี้</span>
      </a>

      <header className="sticky top-0 z-20 border-b border-line bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="font-serif text-xl font-bold">
            <span className="text-accent">●</span> {site.name}
          </a>
          <nav className="hidden gap-7 text-sm sm:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-muted hover:text-foreground">{n.label}</a>
            ))}
          </nav>
          <a href={site.hero.cta.href} className="rounded-full bg-line-green px-4 py-2 text-sm font-medium text-white">
            {site.hero.cta.label}
          </a>
        </div>
      </header>

      <main>
        {/* Hero: ข้อความซ้าย รูปขวา (มือถือ: รูปบน ข้อความล่าง) */}
        <section className="grid border-b border-line md:min-h-[600px] md:grid-cols-[1fr_1.05fr]">
          <div className="order-2 flex flex-col justify-center px-4 py-12 md:order-1 md:py-20 md:pr-12 md:pl-[max(1rem,calc((100vw_-_72rem)/2_+_1rem))]">
            <p className="text-sm font-medium tracking-wide text-accent">เบเกอรี่โฮมเมด · ร้านในซอย</p>
            <h1 className="mt-3 font-serif text-5xl leading-tight font-bold md:text-6xl">{site.tagline}</h1>
            <p className="mt-5 max-w-md text-lg text-muted">{site.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.hero.cta.href} className="rounded-full bg-line-green px-6 py-3 font-medium text-white">{site.hero.cta.label}</a>
              <a href="#menu" className="rounded-full border border-foreground/25 px-6 py-3 font-medium hover:bg-card">ดูเมนู</a>
            </div>
          </div>
          <div className="relative order-1 aspect-[4/3] md:order-2 md:aspect-auto">
            <Image src={site.hero.image} alt={site.hero.alt} fill priority sizes="(min-width: 768px) 52vw, 100vw" className="object-cover object-left md:rounded-bl-[2.5rem]" />
          </div>
        </section>

        {/* Highlights */}
        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-px bg-line md:grid-cols-3">
            {site.highlights.map((h) => (
              <div key={h.title} className="bg-background px-6 py-7">
                <h2 className="text-lg font-bold">{h.title}</h2>
                <p className="mt-1 text-muted">{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">เมนูประจำวัน</h2>
            <p className="text-muted">เมนูเปลี่ยนตามของที่อบในวันนั้น</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.menu.map((m) => (
              <article key={m.name} className="overflow-hidden rounded-2xl border border-line bg-card">
                <div className="relative aspect-[4/3]">
                  <Image src={m.image} alt={m.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-bold">{m.name}</h3>
                    <span className="font-bold text-accent">{baht(m.price)}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{m.text}</p>
                </div>
              </article>
            ))}
          </div>
          <ul className="mt-8 grid gap-x-10 gap-y-3 border-t border-line pt-6 sm:grid-cols-2">
            {site.extras.map((e) => (
              <li key={e.name} className="flex justify-between gap-3 border-b border-dashed border-line pb-3">
                <span>{e.name}</span>
                <span className="font-medium">{baht(e.price)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section id="about" className="border-y border-line bg-card">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src={site.about.image} alt="ชั้นวางขนมปังในร้าน" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold md:text-4xl">{site.about.title}</h2>
              <p className="mt-4 text-lg text-muted">{site.about.text}</p>
              <dl className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl bg-background p-4"><dt className="text-sm text-muted">อบต่อวัน</dt><dd className="mt-1 text-2xl font-bold">300+</dd></div>
                <div className="rounded-2xl bg-background p-4"><dt className="text-sm text-muted">หมักแป้ง</dt><dd className="mt-1 text-2xl font-bold">36 ชม.</dd></div>
                <div className="rounded-2xl bg-background p-4"><dt className="text-sm text-muted">ส่งฟรี</dt><dd className="mt-1 text-2xl font-bold">5 กม.</dd></div>
              </dl>
            </div>
          </div>
        </section>

        {/* Order */}
        <section id="order" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">สั่งง่าย 3 ขั้นตอน</h2>
            <ol className="mt-8 space-y-5">
              {site.order.map((o, i) => (
                <li key={o.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent font-bold text-on-accent">{i + 1}</span>
                  <div>
                    <h3 className="font-bold">{o.title}</h3>
                    <p className="text-muted">{o.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl border border-dashed border-line p-5 text-sm text-muted">
              นี่คือเว็บตัวอย่างของร้านสมมติ ปุ่ม LINE และเบอร์โทรจึงยังไม่เชื่อมกับบัญชีจริง
              ถ้าเป็นร้านของคุณ ปุ่มจะเปิดแชท LINE OA และโทรออกได้ทันที ·{" "}
              <a href={site.demo.hire} target="_blank" rel="noopener" className="font-medium text-accent underline underline-offset-2">ดูบริการรับทำเว็บ</a>
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-card p-6 md:p-8">
            <h3 className="text-xl font-bold">เวลาเปิดร้าน</h3>
            <dl className="mt-4">
              {site.hours.map((h) => (
                <div key={h.day} className="flex justify-between border-b border-line py-3">
                  <dt>{h.day}</dt>
                  <dd className="font-medium">{h.time}</dd>
                </div>
              ))}
            </dl>
            <h3 className="mt-8 text-xl font-bold">จัดส่ง</h3>
            <p className="mt-2 text-muted">ส่งฟรีในระยะ 5 กม. จากร้าน สั่งก่อน 10:00 น. ได้รับก่อนเที่ยง เกิน 5 กม. คิดตามระยะทางจริง</p>
            <a href={site.demo.hire} target="_blank" rel="noopener" className="mt-6 inline-flex w-full justify-center rounded-full bg-line-green px-6 py-3 font-medium text-white">
              สั่งผ่าน LINE (เว็บตัวอย่าง)
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.name} · {site.demo.note}</p>
          <p>{site.credits}</p>
        </div>
      </footer>

      {/* ปุ่มลอยมุมจอ (มือถือ) */}
      <div className="fixed right-4 bottom-4 z-30 sm:hidden">
        <a href="#order" aria-label="สั่งผ่าน LINE" className="block rounded-full bg-line-green px-5 py-3 text-sm font-bold text-white shadow-lg">สั่งผ่าน LINE</a>
      </div>
    </>
  );
}
