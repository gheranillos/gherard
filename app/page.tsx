"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, ShoppingBag } from "lucide-react";

import { useCart } from "@/lib/cart-context";
import { renderCanvas } from "@/components/ui/canvas";
import { SelectedWork } from "../src/sections/SelectedWork";

/** Imagen en `public/hero.jpg` */
const HERO_IMAGE = "/hero.jpg";

const services = [
  {
    number: "01",
    title: "Branding",
    description:
      "Desarrollo de identidad visual completa: naming, paleta, tipografía, logotipo y sistema gráfico. Marcas que se ven sólidas, actuales y con personalidad propia.",
    tags: ["Identidad", "Logotipo", "Sistema Visual", "Estrategia"],
    image: "/images/services/branding.jpg",
    fallback: "https://picsum.photos/seed/branding/800/520",
  },
  {
    number: "02",
    title: "Edición de Video",
    description:
      "Piezas para redes, campañas y contenido audiovisual. Edición con criterio narrativo, ritmo y estética cuidada para que cada video comunique algo real.",
    tags: ["Redes", "Narrativa", "Ritmo", "Contenido"],
    image: "/images/services/video.jpg",
    fallback: "https://picsum.photos/seed/videoediting/800/520",
  },
  {
    number: "03",
    title: "Diseño Web",
    description:
      "Sitios y portfolios con diseño limpio, buena estructura y atención al detalle. Enfocado en que la experiencia visual refleje la identidad de la marca.",
    tags: ["Responsive", "UI", "Portfolio", "Webflow"],
    image: "/images/services/web.jpg",
    fallback: "https://picsum.photos/seed/webdesign/800/520",
  },
  {
    number: "04",
    title: "Diseño Gráfico",
    description:
      "Piezas gráficas para redes, print y campañas. Flyers, presentaciones, contenido visual y todo lo que necesite verse bien y tener coherencia.",
    tags: ["Gráfica", "Print", "Redes", "Campaña"],
    image: "/images/services/grafico.jpg",
    fallback: "https://picsum.photos/seed/graphic/800/520",
  },
];

const process = [
  "Entiendo tu marca y su contexto",
  "Bajo ideas a una dirección visual clara",
  "Diseño o edito con intención, no por relleno",
  "Entrego piezas pensadas para verse bien y funcionar",
];

const navLink =
  "rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10 hover:text-white";

const navLinkActive =
  "rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#f7b7ff]";

export default function GherardPortfolio() {
  const { count, setOpen } = useCart();
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const aboutBgRef = useRef<HTMLDivElement | null>(null);
  const aboutCardRef = useRef<HTMLDivElement | null>(null);
  const aboutLine1Ref = useRef<HTMLHeadingElement | null>(null);
  const aboutLine2Ref = useRef<HTMLHeadingElement | null>(null);
  const aboutMicroWrapRef = useRef<HTMLSpanElement | null>(null);
  const aboutMicroTextRef = useRef<HTMLSpanElement | null>(null);
  const aboutBtnWrapRef = useRef<HTMLSpanElement | null>(null);
  const aboutBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    renderCanvas();
  }, []);
  useEffect(() => {
    const section = aboutSectionRef.current;
    const bg = aboutBgRef.current;
    const card = aboutCardRef.current;
    const line1 = aboutLine1Ref.current;
    const line2 = aboutLine2Ref.current;
    const microWrap = aboutMicroWrapRef.current;
    const microText = aboutMicroTextRef.current;
    const btnWrap = aboutBtnWrapRef.current;
    const btn = aboutBtnRef.current;
    if (
      !section ||
      !bg ||
      !card ||
      !line1 ||
      !line2 ||
      !microWrap ||
      !microText ||
      !btnWrap ||
      !btn
    )
      return;

    const clamp = (v: number, min: number, max: number) =>
      Math.min(Math.max(v, min), max);
    const remap = (v: number, i0: number, i1: number, o0: number, o1: number) => {
      if (i1 - i0 === 0) return o0;
      const mapped = o0 + ((v - i0) / (i1 - i0)) * (o1 - o0);
      return clamp(mapped, Math.min(o0, o1), Math.max(o0, o1));
    };

    const onScroll = () => {
      const scrolled = window.scrollY - section.offsetTop;
      const total = section.offsetHeight - window.innerHeight;
      const progress = clamp(scrolled / Math.max(total, 1), 0, 1);
      const splitP = remap(progress, 0, 0.45, 0, 1);
      line1.style.transform = "translateY(0px)";
      line2.style.transform = "translateY(0px)";
      microWrap.style.width = `${155 * splitP}px`;
      microWrap.style.marginLeft = `${10 * splitP}px`;
      microWrap.style.marginRight = `${10 * splitP}px`;
      microText.style.opacity = String(splitP);
      microText.style.transform = `translateY(${(1 - splitP) * 8}px)`;
      btnWrap.style.width = `${180 * splitP}px`;
      btnWrap.style.marginLeft = `${14 * splitP}px`;
      btnWrap.style.marginRight = `${14 * splitP}px`;
      btn.style.opacity = String(splitP);
      btn.style.transform = `scale(${0.8 + 0.2 * splitP})`;

      const zoomP = remap(progress, 0.6, 1, 0, 1);
      card.style.transform = `scale(${1 - 0.22 * zoomP})`;
      card.style.borderRadius = `${28 * zoomP}px`;
      bg.style.opacity = String(zoomP);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="bg-white text-neutral-900 selection:bg-[#d9ff3f] selection:text-black">
      {/* Hero — full viewport, reference layout */}
      <section className="relative min-h-[100dvh] overflow-hidden border-b border-neutral-900/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/25" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Floating nav pill */}
        <header className="pointer-events-none absolute left-0 right-0 top-6 z-20 flex justify-center px-4">
          <div className="pointer-events-auto flex max-w-[95vw] flex-wrap items-center justify-center gap-1 rounded-full border border-white/15 bg-black/85 px-2 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <a href="#" className={navLinkActive}>
              Inicio
            </a>
            <span className="hidden h-5 w-px bg-white/25 sm:block" aria-hidden />
            <a href="#about" className={navLink}>
              about
            </a>
            <a href="#proyectos" className={navLink}>
              work
            </a>
            <a href="/shop" className={navLink}>
              Tienda
            </a>
            <a href="#contacto" className={navLink}>
              Contacto
            </a>
            <span className="hidden h-5 w-px bg-white/25 sm:block" aria-hidden />
            <a
              href="https://instagram.com/gheranillos"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-white/85 transition hover:bg-white/10 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative rounded-full p-2 text-white/85 transition hover:bg-white/10 hover:text-white"
              aria-label="Abrir carrito"
            >
              <ShoppingBag className="size-4" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-teal-400 px-1 text-[10px] font-bold text-black">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </button>
          </div>
        </header>

        {/* Bottom-centered headline + CTA */}
        <div className="relative z-10 flex min-h-[100dvh] flex-col justify-end px-6 pb-14 pt-32 md:px-10 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
          >
            <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-7xl">
              Diseño <span className="text-[#f7b7ff]">con</span> autenticidad
            </h1>
          </motion.div>
        </div>
        <canvas
          className="pointer-events-none absolute inset-0 mx-auto"
          id="canvas"
        />
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutSectionRef}
        className="relative h-[300vh]"
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <div
            ref={aboutBgRef}
            className="absolute inset-0 bg-cover bg-center opacity-0"
            style={{
              backgroundImage:
                "url('/images/about-bg.jpg'), url('https://picsum.photos/seed/gherard-about/1600/900')",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="pointer-events-none absolute left-6 top-10 z-20 text-sm uppercase tracking-[0.25em] text-[#f7b7ff] md:left-10">
            About
          </div>

          <div
            ref={aboutCardRef}
            className="relative z-10 w-full max-w-full bg-white px-[6vw] py-[8vh] text-center"
            style={{ transformOrigin: "center center" }}
          >
            <h2
              ref={aboutLine1Ref}
              className="about-book whitespace-nowrap font-black tracking-[-0.03em] text-[#0a0a0a]"
              style={{
                fontFamily: "CoolveticaBook, sans-serif",
                fontSize: "clamp(2.6rem, 12vw, 9rem)",
                lineHeight: 0.92,
                transition: "transform 0.1s",
              }}
            >
              No soy{" "}
              <span
                ref={aboutMicroWrapRef}
                className="inline-flex items-center justify-center overflow-hidden align-middle"
                style={{ width: 0, marginLeft: 0, marginRight: 0 }}
              >
                <span
                  ref={aboutMicroTextRef}
                  className="about-light inline-block text-left tracking-[-0.015em] text-[#222]"
                  style={{
                    fontSize: "clamp(0.72rem, 1.1vw, 1.15rem)",
                    lineHeight: 0.92,
                    opacity: 0,
                    transform: "translateY(8px)",
                    transition: "opacity 0.1s, transform 0.1s",
                    whiteSpace: "nowrap",
                  }}
                >
                  saquemos el
                  <br />
                  potencial de
                  <br />
                  tu marca
                </span>
              </span>
              {" "}editor,
            </h2>

            <h2
              ref={aboutLine2Ref}
              className="about-book whitespace-nowrap font-black tracking-[-0.03em] text-[#0a0a0a]"
              style={{
                fontFamily: "CoolveticaBook, sans-serif",
                fontSize: "clamp(2.6rem, 12vw, 9rem)",
                lineHeight: 0.92,
                transition: "transform 0.1s",
              }}
            >
              Construyo{" "}
              <span
                ref={aboutBtnWrapRef}
                className="inline-flex items-center justify-center overflow-hidden align-middle"
                style={{ width: 0, marginLeft: 0, marginRight: 0 }}
              >
                <button
                  ref={aboutBtnRef}
                  type="button"
                  onClick={() => {
                    const target =
                      document.querySelector("#contact") ??
                      document.querySelector("#contacto");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="about-light rounded-full bg-[#0a0a0a] px-8 py-3 text-base font-semibold text-white transition hover:border-2 hover:border-[#0a0a0a] hover:bg-white hover:text-[#0a0a0a] md:px-11 md:py-4"
                  style={{
                    opacity: 0,
                    transform: "scale(0.8)",
                    transition: "opacity 0.1s, transform 0.1s",
                    whiteSpace: "nowrap",
                  }}
                >
                  Hablemos
                </button>
              </span>
              {" "}identidad.
            </h2>
          </div>
          <style jsx global>{`
            @font-face {
              font-family: "CoolveticaBook";
              src: url("/fonts/coolvetica/Coolvetica-Book-Regular.otf")
                format("opentype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: "CoolveticaLight";
              src: url("/fonts/coolvetica/Coolvetica-Light-Regular.otf")
                format("opentype");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }
            .about-book {
              font-family: "CoolveticaBook", sans-serif;
            }
            .about-light {
              font-family: "CoolveticaLight", sans-serif;
            }
          `}</style>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className="border-y border-neutral-200 bg-white"
      >
        <div className="mx-auto max-w-7xl overflow-visible px-6 pb-0 pt-24 md:px-10">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.25em] text-[#f7b7ff]">
              Servicios
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-neutral-900 md:text-5xl">
              Lo que hago.
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-0 overflow-visible pb-14">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`group min-h-[420px] w-full rounded-2xl border border-[#e8e8e8] bg-white px-6 py-8 shadow-[0_-2px_20px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[0_-4px_26px_rgba(0,0,0,0.1)] md:px-14 md:py-12 sticky ${
                  index === 0
                    ? "md:top-[80px] top-[60px]"
                    : index === 1
                      ? "md:top-[98px] top-[72px]"
                      : index === 2
                        ? "md:top-[116px] top-[84px]"
                        : "md:top-[134px] top-[96px]"
                }`}
                style={{ zIndex: index + 1 }}
              >
                <div className="grid gap-8 md:grid-cols-[1fr_380px] md:gap-10">
                  <div className="min-w-0">
                    <div className="flex items-baseline">
                      <span className="mr-4 align-super font-mono text-[0.75rem] font-bold text-[#f7b7ff]">
                        {`{${service.number}}`}
                      </span>
                      <h3 className="text-[clamp(1.6rem,8vw,2.4rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-[#0a0a0a] md:text-[clamp(2rem,3.5vw,3rem)]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-5 max-w-[520px] text-base leading-[1.75] text-[#555555]">
                      {service.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={`${service.title}-${tag}`}
                          className="rounded-full bg-[#f2f2f2] px-3.5 py-1 text-[0.78rem] font-medium text-[#333333]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="relative h-[260px] overflow-hidden rounded-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.03]"
                        onError={(e) => {
                          const img = e.currentTarget;
                          if (img.dataset.fallbackApplied === "1") return;
                          img.dataset.fallbackApplied = "1";
                          img.src = service.fallback;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SelectedWork />

      {/* Process Section */}
      <section className="border-y border-neutral-200 bg-[linear-gradient(180deg,rgba(0,0,0,0.015),rgba(0,0,0,0.03))]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-[#f7b7ff]">
                Proceso
              </div>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-neutral-900 md:text-5xl">
                Cómo trabajo
              </h2>
            </div>
            <div className="grid gap-4">
              {process.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[24px] border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-fuchsia-400/35"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-sm font-bold text-[#f7b7ff]">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="relative overflow-hidden rounded-[36px] border border-neutral-200 bg-[linear-gradient(135deg,rgba(217,255,63,0.18),rgba(255,255,255,0.9),rgba(217,70,239,0.08))] p-8 md:p-12">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d9ff3f]/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                Contacto
              </div>
              <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase tracking-tight text-neutral-900 md:text-6xl">
                Si tu proyecto necesita dirección, branding o edición con
                identidad, escríbeme.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-neutral-600">
                Esta web está hecha para presentarte rápido, con personalidad y
                sin mandar PDFs. Aquí puedes mostrar quién eres, qué haces y
                cómo se ve tu trabajo en un formato mucho más vivo.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="#"
                className="rounded-2xl border border-neutral-200 bg-neutral-100/80 px-6 py-4 text-center text-sm font-medium text-neutral-500 transition hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-800"
              >
                Correo próximamente
              </a>
              <a
                href="https://instagram.com/gheranillos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-6 py-4 text-center text-sm font-medium text-neutral-900 transition hover:border-fuchsia-400/40 hover:bg-neutral-50"
              >
                <Instagram className="h-4 w-4" /> Ver Instagram
              </a>
              <a
                href="https://wa.me/584147613621"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d9ff3f] px-6 py-4 text-center text-sm font-semibold text-black transition hover:scale-[1.01]"
              >
                <MessageCircle className="h-4 w-4" /> Escribirme por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
