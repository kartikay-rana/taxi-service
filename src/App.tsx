import { useState, useEffect } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import EnquiryForm from "./EnquiryForm";
import LogoMark from "./LogoMark";
import { PHONES, LOCATION, cars, features, services, routes } from "./data";

/* Animated road divider with a driving taxi */
function RoadDivider() {
  return (
    <div className="relative mx-auto h-14 max-w-7xl overflow-hidden px-5 lg:px-8" aria-hidden>
      <div className="road-line absolute inset-x-5 top-1/2 h-[3px] -translate-y-1/2 rounded-full lg:inset-x-8" />
      <div className="animate-drive top-1/2 -translate-y-1/2 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]">
        <Icon name="car" className="h-9 w-9" />
      </div>
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Fleet", href: "#fleet" },
  { label: "Services", href: "#services" },
  { label: "Routes", href: "#routes" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

/* Decorative animated glowing orbs for the dark background */
function Orbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-amber-500/20 blur-[140px] animate-float-slow" />
      <div className="absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-yellow-600/15 blur-[150px] animate-float" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-orange-600/10 blur-[140px] animate-float-slow" />
    </div>
  );
}

function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const img = size === "lg" ? "h-14 w-14 sm:h-16 sm:w-16" : "h-10 w-10 sm:h-11 sm:w-11";
  const title = size === "lg" ? "text-lg sm:text-2xl" : "text-sm sm:text-lg";
  return (
    <a href="#home" className="group flex items-center gap-3">
      <div className="relative shrink-0 transition duration-300 group-hover:scale-105">
        {/* soft glow behind the mark */}
        <span className="absolute inset-0 rounded-full bg-amber-400/30 blur-md transition group-hover:bg-amber-400/50" />
        <LogoMark className={`relative ${img} drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]`} />
      </div>
      <div className="leading-tight">
        <span className={`block ${title} font-extrabold tracking-tight text-white whitespace-nowrap`}>
          AMIT{" "}
          <span className="animate-shimmer bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            TAXI
          </span>{" "}
          SERVICE
        </span>
        <span className="block text-[9px] font-bold uppercase tracking-[0.35em] text-zinc-400">
          Kumarhatti · Solan
        </span>
      </div>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 lg:px-6 lg:pt-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 lg:px-6 ${
          scrolled
            ? "border-white/10 bg-zinc-950/70 shadow-xl shadow-black/40 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-amber-400"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={`tel:${PHONES[0]}`}
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-yellow-600 px-5 py-2.5 text-sm font-bold text-zinc-900 shadow-lg shadow-amber-500/30 transition hover:scale-[1.04] lg:flex"
        >
          <Icon name="phone" className="h-4 w-4" /> Call Now
        </a>
        <button
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-zinc-950/90 p-3 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-200 hover:bg-white/5 hover:text-amber-400"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONES[0]}`}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-600 px-5 py-3 text-sm font-bold text-zinc-900"
            >
              <Icon name="phone" className="h-4 w-4" /> Call {PHONES[0]}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Premium taxi on a mountain highway"
        className="animate-kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-32 pb-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="fade-up-1 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              24×7 • All India Tourist Permit
            </span>
            <a
              href={LOCATION.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-zinc-200 backdrop-blur-md transition hover:border-amber-400/40 hover:text-amber-300"
            >
              <Icon name="pin" className="h-3.5 w-3.5 text-amber-400" />
              {LOCATION.short}, HP
            </a>
          </div>
          <h1 className="fade-up-2 mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Travel in
            <br />
            <span className="animate-shimmer bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Premium Comfort.
            </span>
          </h1>
          <p className="fade-up-3 mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Experience luxury on every journey with a spotless fleet,
            professional chauffeurs and crystal-clear fares. Local rides,
            airport transfers and outstation tours — across all of India.
          </p>
          <div className="fade-up-4 mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONES[0]}`}
              className="animate-glow group flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-yellow-600 px-7 py-3.5 text-base font-bold text-zinc-900 transition hover:scale-[1.04]"
            >
              <Icon name="phone" className="h-5 w-5" /> Book a Cab
            </a>
            <a
              href="#fleet"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              View Our Fleet <Icon name="arrow" className="h-5 w-5" />
            </a>
          </div>

          {/* Glass stat bar */}
          <div className="fade-up-5 mt-12 grid max-w-lg grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            {[
              ["5+", "Vehicle Types"],
              ["24/7", "Availability"],
              ["All India", "Permit"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="text-xl font-black text-amber-400 sm:text-3xl">{n}</div>
                <div className="text-[11px] text-zinc-400 sm:text-xs">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <a
          href="#why"
          className="animate-soft-bounce absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/15 bg-white/5 p-3 text-amber-300 backdrop-blur-md lg:block"
          aria-label="Scroll down"
        >
          <Icon name="arrow" className="h-5 w-5 rotate-90" />
        </a>
      </div>
    </section>
  );
}

function FeatureStrip() {
  return (
    <section id="why" className="relative z-10 -mt-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
          {features.map((f, i) => (
            <Reveal key={f.title} from={i % 2 === 0 ? "left" : "right"} delay={i * 120}>
              <div className="group flex gap-4 rounded-2xl p-4 transition hover:bg-white/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300/20 to-yellow-600/20 text-amber-300 ring-1 ring-amber-400/30 transition group-hover:scale-110">
                  <Icon name={f.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
        {kicker}
      </span>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-zinc-400">{sub}</p>}
    </div>
  );
}

function Fleet() {
  return (
    <section id="fleet" className="py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal from="up">
          <SectionTitle
            kicker="Our Fleet"
            title="Choose Your Perfect Ride"
            sub="From economical sedans to spacious tempo travellers — a clean, well-maintained vehicle for every trip."
          />
        </Reveal>
        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, i) => (
            <Reveal
              key={car.name}
              from={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
              delay={(i % 3) * 140}
              className="h-full"
            >
            <article
              className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={car.img}
                  alt={car.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur-md">
                  {car.tag}
                </span>
                <span className="absolute bottom-3 right-4 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-bold text-zinc-900 backdrop-blur">
                  Best for {car.best}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-white">{car.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{car.desc}</p>
                <div className="mt-5 flex items-center gap-5 border-t border-white/10 pt-4 text-sm text-zinc-300">
                  <span className="flex items-center gap-1.5">
                    <Icon name="seat" className="h-5 w-5 text-amber-400" /> {car.seats}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="bag" className="h-5 w-5 text-amber-400" /> {car.luggage}
                  </span>
                </div>
                <a
                  href={`tel:${PHONES[0]}`}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-bold text-white transition hover:bg-gradient-to-r hover:from-amber-300 hover:to-yellow-600 hover:text-zinc-900"
                >
                  <Icon name="phone" className="h-4 w-4" /> Book {car.name}
                </a>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal from="up">
          <SectionTitle
            kicker="What We Offer"
            title="Services Built Around You"
            sub="Whatever the occasion, we've got the right ride and route for you."
          />
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              from={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "zoom"}
              delay={(i % 3) * 130}
              className="h-full"
            >
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/10">
                <span className="bg-gradient-to-br from-white/10 to-transparent bg-clip-text text-6xl font-black text-transparent transition group-hover:from-amber-400/40">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
                <Icon
                  name="arrow"
                  className="absolute bottom-6 right-6 h-5 w-5 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-amber-400"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Routes() {
  return (
    <section id="routes" className="py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal from="up">
          <SectionTitle
            kicker="Popular Routes"
            title={`Rides from ${LOCATION.short}`}
            sub="Based near Kumarhatti on the Kalka–Shimla highway — quick pickups for all nearby hill stations and beyond."
          />
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((r, i) => (
            <Reveal
              key={r.to}
              from={i % 2 === 0 ? "left" : "right"}
              delay={(i % 4) * 100}
              className="h-full"
            >
              <a
                href={`tel:${PHONES[0]}`}
                className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300/20 to-yellow-600/20 text-amber-300 ring-1 ring-amber-400/30 transition group-hover:scale-110">
                  <Icon name="route" className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Kumarhatti <Icon name="arrow" className="h-3 w-3 text-amber-400" />
                  </div>
                  <h3 className="truncate font-bold text-white transition group-hover:text-amber-300">
                    {r.to}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {r.dist} • {r.time}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal from="up" delay={150}>
          <p className="mt-8 text-center text-sm text-zinc-500">
            Don't see your destination? With our All India Tourist Permit we go{" "}
            <span className="font-semibold text-amber-400">anywhere in India</span> — just call us.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-5 py-10 lg:px-8">
      <Reveal from="zoom">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10">
        <img src="/images/cta.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-[2px]" />
        <div className="relative px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Need a cab <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">right now?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-300">
            We're available 24×7. Call us and get a comfortable, safe ride within minutes.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            {PHONES.map((p) => (
              <a
                key={p}
                href={`tel:${p}`}
                className="flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-300 to-yellow-600 px-6 py-4 text-base font-extrabold text-zinc-900 shadow-xl shadow-amber-500/40 transition hover:scale-[1.04] sm:w-auto sm:px-8 sm:text-lg"
              >
                <Icon name="phone" className="h-5 w-5" /> {p}
              </a>
            ))}
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="left">
          <div>
            <SectionTitle kicker="Get In Touch" title="Book Your Ride Today" />
            <p className="mt-6 text-lg text-zinc-400">
              Reach out anytime — for bookings, fare enquiries or custom tour
              packages. Amit Taxi Service is just a call away.
            </p>
            <div className="mt-8 space-y-4">
              {PHONES.map((p) => (
                <a
                  key={p}
                  href={`tel:${p}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-amber-400/40 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-yellow-600 text-zinc-900">
                    <Icon name="phone" className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Call / WhatsApp
                    </div>
                    <div className="text-xl font-extrabold text-white">{p}</div>
                  </div>
                </a>
              ))}
              <a
                href={LOCATION.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-amber-400/40 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-yellow-600 text-zinc-900">
                  <Icon name="pin" className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Our Location
                  </div>
                  <div className="text-lg font-extrabold text-white">{LOCATION.full}</div>
                  <div className="text-xs font-semibold text-amber-400">Open in Google Maps →</div>
                </div>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {["24×7 Available", "All India Permit", "Trusted Drivers"].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300"
                >
                  <Icon name="check" className="h-4 w-4" /> {t}
                </span>
              ))}
            </div>
          </div>
          </Reveal>

          <Reveal from="right" delay={150}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:p-10">
            <h3 className="text-2xl font-extrabold text-white">Quick Enquiry</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Fill in your trip details and we'll call you back.
            </p>
            <EnquiryForm />
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-8 md:flex-row">
          <Logo size="lg" />
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-amber-400">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
            © {new Date().getFullYear()} Amit Taxi Service ·
            <a
              href={LOCATION.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-zinc-300 hover:text-amber-400"
            >
              <Icon name="pin" className="h-4 w-4 text-amber-400" /> {LOCATION.full}
            </a>
          </p>
          <p className="flex flex-wrap items-center justify-center gap-2">
            24×7 Helpline:
            {PHONES.map((p) => (
              <a key={p} href={`tel:${p}`} className="font-semibold text-amber-400 hover:underline">
                {p}
              </a>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingCall() {
  return (
    <a
      href={`tel:${PHONES[0]}`}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/40 transition hover:scale-110 lg:hidden"
      aria-label="Call now"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500/50" />
      <Icon name="phone" className="relative h-6 w-6" />
    </a>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 font-sans text-white">
      <Orbs />
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <RoadDivider />
        <Fleet />
        <RoadDivider />
        <Services />
        <Routes />
        <CTA />
        <RoadDivider />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
