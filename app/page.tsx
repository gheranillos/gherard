"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock3, Instagram, MessageCircle } from "lucide-react";

import Footer from "@/components/Footer";
import { projects } from "@/src/data/projects";
import { ReviewsSection } from "@/src/sections/Reviews";
import { splitWords, wordVariants } from "@/src/hooks/useTextReveal";
import { revealVariants, staggerChild, staggerContainer } from "@/src/hooks/useScrollReveal";

/** Imagen en `public/hero.jpg` */
const HERO_IMAGE = "/hero.jpg";

const services = [
  {
    number: "01",
    title: "Branding",
    description:
      "Alineo posicionamiento, mensaje y sistema visual para que tu marca deje de verse improvisada y empiece a vender con claridad.",
    tags: ["Posicionamiento", "Sistema visual", "Claridad", "Consistencia"],
    image: "/picbranding.png",
    fallback: "https://picsum.photos/seed/branding/800/520",
    duration: "2-4 semanas",
  },
  {
    number: "02",
    title: "Edición de Video",
    description:
      "Edito piezas con ritmo y direccion para captar atencion, sostenerla y cerrar con mensaje claro. Menos relleno, mas resultado.",
    tags: ["Retencion", "Narrativa", "Ritmo", "Conversion"],
    image: "/picvideos.png",
    fallback: "https://picsum.photos/seed/videoediting/800/520",
    duration: "3-10 dias por pieza",
  },
  {
    number: "03",
    title: "Diseño Web",
    description:
      "Diseno webs que filtran: dejan claro que haces, para quien es y por que confiar en ti. Tu presencia digital tiene que jugar a favor del negocio.",
    tags: ["Posicionamiento", "Estructura", "Conversion", "Experiencia"],
    image: "/picweb.png",
    fallback: "https://picsum.photos/seed/webdesign/800/520",
    duration: "2-5 semanas",
  },
  {
    number: "04",
    title: "Diseño Gráfico",
    description:
      "Creo piezas que sostienen una misma linea visual en todos tus canales. Nada de diseno suelto: todo responde a una estrategia.",
    tags: ["Sistema", "Campanas", "Contenido", "Escalabilidad"],
    image: "/picdesign.png",
    fallback: "https://picsum.photos/seed/graphic/800/520",
    duration: "3-8 dias",
  },
];

const servicesEase = [0.16, 1, 0.3, 1] as const;
const ABOUT_REVEAL_TEXT =
  "We combine years of branding, design direction, and content execution to build businesses that look sharp, speak clearly, and sell with confidence.";

function ScrollCategories() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [globalProgress, setGlobalProgress] = useState(0);

  const items = projects.map((project, index) => ({
    number: String(index + 1),
    label: project.title,
    href: `/work/${project.slug}`,
    image: project.coverImage,
  }));

  useEffect(() => {
    const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const scrolled = window.scrollY - section.offsetTop;
      const total = section.offsetHeight - window.innerHeight;
      const progress = clamp(scrolled / Math.max(total, 1), 0, 1);
      const segmentSize = 1 / items.length;
      const idx = Math.min(Math.floor(progress / segmentSize), items.length - 1);
      setGlobalProgress(progress);
      setActiveIndex(idx);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items.length]);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="bg-neutral-950"
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {items.map((item, i) => {
          const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
          const segmentSize = 1 / items.length;
          const segmentProgress = clamp(
            (globalProgress - activeIndex * segmentSize) / segmentSize,
            0,
            1,
          );
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;
          const isNext = i === activeIndex + 1;

          if (!isPast && !isActive && !isNext) return null;

          let scale = 0;
          let translateYVh = 100;
          let borderRadius = "0px";
          let darkOverlay = 0.2;

          if (isActive) {
            const hasNext = activeIndex < items.length - 1;
            scale = hasNext ? 1 - segmentProgress * 0.24 : 1;
            translateYVh = hasNext ? -segmentProgress * 10 : 0;
            borderRadius = hasNext && segmentProgress > 0.05 ? "16px" : "0px";
          } else if (isNext) {
            scale = 1;
            translateYVh = (1 - segmentProgress) * 100;
            borderRadius = "0px";
          } else if (isPast) {
            const depth = activeIndex - i;
            scale = Math.max(0.68, 0.76 - (depth - 1) * 0.08);
            translateYVh = -(depth * 2);
            borderRadius = "16px";
            darkOverlay = 0.3;
          }

          return (
            <div
              key={item.label}
              style={{
                position: "absolute",
                inset: 0,
                transform: `translateY(${translateYVh}vh) scale(${scale})`,
                transformOrigin: "top center",
                borderRadius,
                zIndex: i + 1,
                transition: "border-radius 0.3s ease",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.dataset.fallbackApplied === "1") return;
                  img.dataset.fallbackApplied = "1";
                  img.src = `https://picsum.photos/seed/${item.label}/1600/900`;
                }}
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: `rgba(0,0,0,${darkOverlay})` }}
              />
              <div style={{ position: "absolute", bottom: 40, left: 24, right: 24 }}>
                <div className="mb-4 h-px w-full bg-white/40" />
                <div className="flex items-end justify-between">
                  <span
                    style={{ fontFamily: "var(--font-helvetica-neue), sans-serif" }}
                    className="text-2xl font-light text-white"
                  >
                    {item.number}
                  </span>
                  <span
                    className="font-black uppercase text-white"
                    style={{
                      fontFamily: "helveticaNeue",
                      lineHeight: 0.9,
                      fontWeight: 100,
                      letterSpacing: "-0.5px",
                      fontSize: "clamp(1.85rem, 10vw, 50px)",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        <Link
          href={items[Math.max(activeIndex, 0)]?.href ?? "/work"}
          className="absolute inset-0 z-10 block"
          aria-label="Ir al proyecto activo"
        />
      </div>
    </section>
  );
}

export default function GherardPortfolio() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [aboutProgress, setAboutProgress] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    need: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [contactFeedback, setContactFeedback] = useState("");
  const aboutSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReduced(reduced);
  }, []);

  useEffect(() => {
    const section = aboutSectionRef.current;
    if (!section) return;

    const clamp = (v: number, min: number, max: number) =>
      Math.min(Math.max(v, min), max);

    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
      const scrolled = window.scrollY - section.offsetTop;
      const total = section.offsetHeight - window.innerHeight;
      const progress = clamp(scrolled / Math.max(total, 1), 0, 1);
      setAboutProgress(progress);
      raf = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const aboutWords = ABOUT_REVEAL_TEXT.split(" ");
  const aboutOverlayOpacity = 0.95 - aboutProgress * 0.35;
  const isContactLoading = contactStatus === "loading";

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactStatus("error");
      setContactFeedback("Completa nombre, email y mensaje.");
      return;
    }

    setContactStatus("loading");
    setContactFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error || "No se pudo enviar el mensaje.");
      }

      setContactStatus("success");
      setContactFeedback("Mensaje enviado. Te respondere pronto.");
      setContactForm({ name: "", email: "", need: "", message: "" });
    } catch (error) {
      setContactStatus("error");
      setContactFeedback(
        error instanceof Error ? error.message : "Error inesperado al enviar el mensaje.",
      );
    }
  };

  return (
    <div className="bg-white text-neutral-900 selection:bg-[#f7b7ff] selection:text-black">
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

        {/* Hero copy layout */}
        <div className="relative z-10 mx-auto flex h-[100dvh] w-full max-w-[1537px] flex-col justify-end px-5 pb-10 pt-28 md:h-[810px] md:px-10 md:pb-20 md:pt-32">
          <div className="pointer-events-none absolute right-4 top-22 text-[20px] font-thin [font-family:var(--font-helvetica)] md:right-10 md:top-[142px] md:text-[29px]">
            <motion.p
              className="max-w-[250px] text-right text-[20px] font-bold leading-[1.05] tracking-[-0.5px] text-white [font-family:var(--font-helvetica)] md:max-w-[360px] md:text-[29px]"
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              Visual con intención.
              <br />
              Resultado con criterio.
            </motion.p>
          </div>

          <div className="mx-auto flex w-full max-w-7xl items-end justify-start">
            <motion.h1
              className="max-w-[300px] text-left text-[clamp(1.45rem,7vw,2rem)] font-bold leading-[1.08] tracking-[-1px] text-white drop-shadow-sm [font-family:var(--font-helvetica-neue)] md:max-w-[360px] md:text-[clamp(1.2rem,2vw,1.85rem)]"
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Diseño, edición y dirección para marcas que quieren verse a la altura de lo que ya
              venden.
            </motion.h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutSectionRef} className="relative h-[300vh] bg-[#0a0a0a]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-black transition-opacity duration-200"
            style={{ opacity: aboutOverlayOpacity }}
          />
          <div className="relative z-10 mx-auto grid h-full w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-[130px_minmax(0,1fr)] md:px-10">
            <div className="self-start pt-24 md:pt-28">
              <p className="text-xs text-white/35">(ABOUT)</p>
            </div>

            <div>
              <p
                className="max-w-[1050px] text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.04] [font-family:var(--font-helvetica)]"
              >
                {aboutWords.map((word, index) => {
                  const revealedIndex = Math.floor(aboutWords.length * aboutProgress);
                  const isRevealed = index <= revealedIndex;

                  return (
                    <span
                      key={`about-reveal-${word}-${index}`}
                      className="transition-colors duration-300 ease-out"
                      style={{
                        color: isRevealed ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.25)",
                      }}
                    >
                      {word}
                      {" "}
                    </span>
                  );
                })}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <motion.p
              className="text-[0.72rem] uppercase text-[#f7b7ff]"
              variants={revealVariants.fadeIn}
              initial={prefersReduced ? false : "hidden"}
              whileInView={prefersReduced ? undefined : "visible"}
              viewport={{ once: true, margin: "-40px" }}
            >
              ✦ Servicios
            </motion.p>
            <h2 className="mt-4 text-[clamp(2rem,7vw,4.6rem)] font-black uppercase leading-[0.92] text-white [font-family:var(--font-helvetica-neue)]">
              {splitWords("Lo que resuelvo.").map((word, index) => (
                <span
                  key={`services-head-editorial-${word}-${index}`}
                  className="inline-block overflow-hidden"
                >
                  <motion.span
                    className="mr-[0.28em] inline-block text-[34px] font-bold tracking-[0px] [font-family:helvetica] md:text-[55px]"
                    initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                    whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.38,
                      delay: index * 0.08,
                      ease: servicesEase,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] md:gap-14">
            <div className="flex flex-col border-t border-white/20">
              {services.map((service, index) => {
                const isActive = index === activeServiceIndex;
                return (
                  <div key={service.title} className="border-b border-white/15">
                    <button
                      type="button"
                      onClick={() => setActiveServiceIndex(index)}
                      className="flex w-full items-center justify-between py-5 text-left transition-colors duration-200 md:py-6"
                      aria-expanded={isActive}
                    >
                      <span
                        className={`text-[1.05rem] uppercase transition-colors duration-200 md:text-[1.35rem] ${
                          isActive ? "text-white" : "text-white/45"
                        }`}
                      >
                        ({service.number}) {service.title.toUpperCase()}
                      </span>
                      <ArrowRight
                        className={`size-4 shrink-0 transition-all duration-200 ${
                          isActive
                            ? "translate-x-0 opacity-100 text-white"
                            : "-translate-x-1 opacity-0 text-white/50"
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive ? (
                        <motion.div
                          key={`service-mobile-${service.number}`}
                          className="overflow-hidden md:hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: servicesEase }}
                        >
                          <div className="pb-5 pr-1">
                            <p className="text-sm leading-relaxed text-white/75">
                              {service.description}
                            </p>
                            <p className="mt-4 text-[0.72rem] uppercase text-white/55">
                              {service.tags.join(" · ")}
                            </p>
                            <div className="mt-3 flex items-center gap-2 text-[0.72rem] uppercase text-white/60">
                              <Clock3 className="size-3.5" />
                    <span>Tiempo estimado: {service.duration}</span>
                            </div>
                            <div className="mt-5 overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={service.image}
                                alt={service.title}
                                className="aspect-[16/10] w-full object-cover"
                                onError={(e) => {
                                  const img = e.currentTarget;
                                  if (img.dataset.fallbackApplied === "1") return;
                                  img.dataset.fallbackApplied = "1";
                                  img.src = service.fallback;
                                }}
                              />
                            </div>
                            <Link
                              href="/#contacto"
                              className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-[0.72rem] font-semibold uppercase text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f7b7ff]"
                            >
                              Ver alcance
                            </Link>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="hidden md:block">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={`service-panel-${services[activeServiceIndex]?.number}`}
                  initial={prefersReduced ? false : { opacity: 0, y: 18 }}
                  animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                  exit={prefersReduced ? undefined : { opacity: 0, y: -18 }}
                  transition={{ duration: 0.28, ease: servicesEase }}
                  className="rounded-[26px] border border-white/15 bg-white/[0.03] p-7"
                >
                  <h3 className="text-[clamp(1.6rem,2.6vw,2.4rem)] font-bold uppercase text-white [font-family:var(--font-helvetica-neue)]">
                    {services[activeServiceIndex]?.title}
                  </h3>
                  <p className="mt-4 max-w-[62ch] text-base leading-5 tracking-[0px] text-white/80">
                    {services[activeServiceIndex]?.description}
                  </p>
                  <p className="mt-5 text-[0.72rem] uppercase text-white/55">
                    {services[activeServiceIndex]?.tags.join(" · ")}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[0.72rem] uppercase text-white/60">
                    <Clock3 className="size-3.5" />
                    <span>Tiempo estimado: {services[activeServiceIndex]?.duration}</span>
                  </div>
                  <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={services[activeServiceIndex]?.image}
                      alt={services[activeServiceIndex]?.title}
                      className="aspect-[16/10] w-full object-cover"
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (img.dataset.fallbackApplied === "1") return;
                        img.dataset.fallbackApplied = "1";
                        img.src = services[activeServiceIndex]?.fallback ?? "";
                      }}
                    />
                  </div>
                  <Link
                    href="/#contacto"
                    className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-[0.72rem] font-semibold uppercase text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f7b7ff]"
                  >
                    Ver alcance
                  </Link>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <ScrollCategories />

      <ReviewsSection />

      {/* Contact Section */}
      <section id="contacto" className="border-t border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <motion.div
            className="text-xs uppercase text-[#f7b7ff]"
            variants={revealVariants.fadeIn}
            initial={prefersReduced ? false : "hidden"}
            whileInView={prefersReduced ? undefined : "visible"}
            viewport={{ once: true, margin: "-40px" }}
          >
            Contacto
          </motion.div>
          <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase leading-[0.94] md:text-7xl">
            {splitWords("Si tu negocio ya crece, tu imagen tiene que estar a la altura.").map(
              (word, index) => (
                <span
                  key={`contact-refresh-head-${word}-${index}`}
                  style={{ display: "inline-block", overflow: "hidden" }}
                >
                  <motion.span
                    style={{ display: "inline-block", marginRight: "0.25em" }}
                    variants={wordVariants}
                    custom={index}
                    initial={prefersReduced ? false : "hidden"}
                    whileInView={prefersReduced ? undefined : "visible"}
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    {word}
                  </motion.span>
                </span>
              ),
            )}
          </h2>

          <motion.div
            className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
            variants={staggerContainer}
            initial={prefersReduced ? false : "hidden"}
            whileInView={prefersReduced ? undefined : "visible"}
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.div
              variants={staggerChild}
              className="rounded-[30px] border border-white/15 bg-white/[0.04] p-7 backdrop-blur-sm md:p-9"
            >
              <p className="text-sm uppercase text-white/60">
                Contacto directo
              </p>
              <div className="mt-7 space-y-5">
                <div className="border-b border-white/15 pb-4">
                  <p className="text-xs uppercase text-white/45">
                    Base
                  </p>
                  <p className="mt-2 text-lg tracking-wide text-white/90">
                    Venezuela
                  </p>
                </div>
                <div className="border-b border-white/15 pb-4">
                  <p className="text-xs uppercase text-white/45">
                    Email
                  </p>
                  <a
                    href="mailto:hello@gheranillos.com"
                    className="mt-2 inline-block text-lg tracking-wide text-white transition hover:text-[#f7b7ff]"
                  >
                    hello@gheranillos.com
                  </a>
                </div>
                <div className="border-b border-white/15 pb-4">
                  <p className="text-xs uppercase text-white/45">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/gheranillos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-lg tracking-wide text-white transition hover:text-[#f7b7ff]"
                  >
                    <Instagram className="h-4 w-4" /> @gheranillos
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase text-white/45">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/584147613621"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-lg tracking-wide text-white transition hover:text-[#f7b7ff]"
                  >
                    <MessageCircle className="h-4 w-4" /> +58 414 761 3621
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form
              variants={staggerChild}
              onSubmit={handleContactSubmit}
              className="rounded-[30px] border border-white/15 bg-white/[0.03] p-7 md:p-9"
            >
              <p className="text-sm uppercase text-white/60">
                Cuentame que estas construyendo
              </p>
              <div className="mt-7 grid gap-5">
                <label className="grid gap-2 text-xs uppercase text-white/45">
                  Nombre
                  <input
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="h-12 rounded-xl border border-white/15 bg-black/20 px-4 text-sm tracking-wide text-white placeholder:text-white/35 outline-none transition focus:border-[#f7b7ff]"
                  />
                </label>
                <label className="grid gap-2 text-xs uppercase text-white/45">
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="h-12 rounded-xl border border-white/15 bg-black/20 px-4 text-sm tracking-wide text-white placeholder:text-white/35 outline-none transition focus:border-[#f7b7ff]"
                  />
                </label>
                <label className="grid gap-2 text-xs uppercase text-white/45">
                  En que necesitas criterio
                  <input
                    name="need"
                    type="text"
                    placeholder="Marca, contenido, web o direccion visual"
                    value={contactForm.need}
                    onChange={handleContactChange}
                    className="h-12 rounded-xl border border-white/15 bg-black/20 px-4 text-sm tracking-wide text-white placeholder:text-white/35 outline-none transition focus:border-[#f7b7ff]"
                  />
                </label>
                <label className="grid gap-2 text-xs uppercase text-white/45">
                  Mensaje
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Que vendes, en que punto estas y que necesitas resolver"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    className="min-h-[136px] rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm leading-relaxed tracking-wide text-white placeholder:text-white/35 outline-none transition focus:border-[#f7b7ff]"
                  />
                </label>
              </div>
              {contactFeedback ? (
                <p
                  className={`mt-4 text-xs ${
                    contactStatus === "success" ? "text-[#9cffc7]" : "text-[#ffb4b4]"
                  }`}
                >
                  {contactFeedback}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={isContactLoading}
                className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#f7b7ff] px-8 text-xs font-semibold uppercase text-black [font-family:var(--font-helvetica-neue)] transition hover:translate-y-[-1px] hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isContactLoading ? "Enviando..." : "Quiero trabajar contigo"}
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
