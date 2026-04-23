"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Menu,
  MessageCircle,
} from "lucide-react";

import Footer from "@/components/Footer";
import { splitWords, wordVariants } from "@/src/hooks/useTextReveal";
import {
  revealVariants,
  staggerChild,
  staggerContainer,
} from "@/src/hooks/useScrollReveal";

const skills = [
  {
    number: "01",
    title: "Branding",
    description:
      "Identidad visual completa. Naming, logotipo, sistema grafico, paleta y direccion estetica.",
  },
  {
    number: "02",
    title: "Edicion de video",
    description:
      "Narrativa, ritmo y estetica audiovisual para redes, campanas y contenido de marca.",
  },
  {
    number: "03",
    title: "Direccion creativa",
    description:
      "Concepto, estetica y criterio detras de cada proyecto. La idea antes que la ejecucion.",
  },
  {
    number: "04",
    title: "Diseno web",
    description:
      "Sitios y portfolios con estructura limpia y experiencia visual coherente con la marca.",
  },
  {
    number: "05",
    title: "Diseno grafico",
    description:
      "Piezas para redes, print y campanas con coherencia visual y criterio estetico.",
  },
  {
    number: "06",
    title: "Contenido visual",
    description:
      "Estrategia y produccion de contenido para marcas con identidad y direccion de arte.",
  },
];

function CountStat({
  target,
  suffix,
  label,
  prefersReduced,
}: {
  target: number;
  suffix: string;
  label: string;
  prefersReduced: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(prefersReduced ? target : 0);

  useEffect(() => {
    if (prefersReduced) {
      setValue(target);
      return;
    }
    if (!inView) return;

    const duration = 1500;
    const fps = 30;
    const totalFrames = Math.round((duration / 1000) * fps);
    let frame = 0;

    const id = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      setValue(Math.round(target * progress));
      if (progress >= 1) {
        window.clearInterval(id);
      }
    }, 1000 / fps);

    return () => window.clearInterval(id);
  }, [inView, prefersReduced, target]);

  return (
    <div
      ref={ref}
      className="border-white/10 px-8 py-12 text-center md:border-r last:md:border-r-0"
    >
      <div className="text-[clamp(4rem,8vw,7rem)] font-black tracking-[-0.04em] text-white">
        {value}
        {suffix}
      </div>
      <p className="mt-3 text-[0.75rem] uppercase tracking-[0.2em] text-white/40">
        {label}
      </p>
    </div>
  );
}

export default function AboutPage() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [canHover, setCanHover] = useState(true);
  const [imageOffset, setImageOffset] = useState(0);

  useEffect(() => {
    setPrefersReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    const onResize = () =>
      setCanHover(window.matchMedia("(hover: hover)").matches);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;
    const onScroll = () => {
      const raw = window.scrollY * 0.08;
      const clamped = Math.max(-40, Math.min(40, raw));
      setImageOffset(clamped);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReduced]);

  return (
    <div className="bg-white text-neutral-900 selection:bg-[#d9ff3f] selection:text-black">
      <section className="relative min-h-[100dvh] overflow-hidden bg-[#0a0a0a]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about-hero.jpg"
          alt="Gherard portrait"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.fallbackApplied === "1") return;
            img.dataset.fallbackApplied = "1";
            img.src = "https://picsum.photos/seed/gherard-about/1400/900";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <header className="pointer-events-none absolute left-0 right-0 top-6 z-20 flex justify-center px-4">
          <motion.div
            className="pointer-events-auto flex h-12 items-center overflow-hidden border border-white/20 bg-white/12 px-3 backdrop-blur-md"
            animate={{
              width: menuOpen ? (canHover ? 420 : "90vw") : 48,
              borderRadius: menuOpen ? 999 : 50,
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setMenuOpen((v) => !v)}
            onMouseEnter={() => {
              if (canHover) setMenuOpen(true);
            }}
            onMouseLeave={() => {
              if (canHover) setMenuOpen(false);
            }}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={18} className="text-white" />
            </motion.div>
            <motion.div
              className="flex w-full items-center justify-center gap-2 whitespace-nowrap"
              animate={{ opacity: menuOpen ? 1 : 0 }}
              transition={{ duration: 0.2, delay: menuOpen ? 0.12 : 0 }}
            >
              {[
                { label: "Inicio", href: "/" },
                { label: "About", href: "/about", active: true },
                { label: "Work", href: "/work" },
                { label: "Tienda", href: "/shop" },
                { label: "Contacto", href: "/#contacto" },
              ].map((link, index, arr) => (
                <div key={link.label} className="flex items-center gap-2">
                  <a
                    href={link.href}
                    className={`text-[0.65rem] uppercase tracking-[0.2em] transition-colors ${
                      link.active ? "text-[#f7b7ff]" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                  {index < arr.length - 1 && <span className="h-3 w-px bg-white/20" />}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </header>

        <div className="absolute bottom-0 z-10 w-full px-[5vw] pb-16 pt-20">
          <div className="relative">
            <div className="max-w-[55%] min-w-[280px]">
              <motion.div
                variants={revealVariants.fadeUp}
                initial={prefersReduced ? false : "hidden"}
                animate={prefersReduced ? undefined : "visible"}
              >
                <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#d9ff3f]">
                  SOBRE MI
                </span>
                <span className="ml-3 text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                  · Venezuela
                </span>
              </motion.div>

              <h1
                className="mt-[1.2rem] text-white"
                style={{
                  fontSize: "clamp(4rem, 10vw, 9rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.88,
                }}
              >
                <div className="uppercase">
                  {splitWords("Editor.").map((word, index) => (
                    <span
                      key={`hero-about-1-${word}-${index}`}
                      style={{ display: "inline-block", overflow: "hidden" }}
                    >
                      <motion.span
                        style={{ display: "inline-block", marginRight: "0.25em" }}
                        variants={wordVariants}
                        custom={index}
                        initial={prefersReduced ? false : "hidden"}
                        animate={prefersReduced ? undefined : "visible"}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </div>
                <div className="uppercase">
                  {splitWords("Director.").map((word, index) => (
                    <span
                      key={`hero-about-2-${word}-${index}`}
                      style={{ display: "inline-block", overflow: "hidden" }}
                    >
                      <motion.span
                        style={{ display: "inline-block", marginRight: "0.25em" }}
                        variants={wordVariants}
                        custom={index + 1}
                        initial={prefersReduced ? false : "hidden"}
                        animate={prefersReduced ? undefined : "visible"}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </div>
              </h1>

              <motion.p
                className="mt-8 max-w-[420px] text-base leading-[1.7] text-white/55"
                variants={revealVariants.fadeUp}
                initial={prefersReduced ? false : "hidden"}
                animate={prefersReduced ? undefined : "visible"}
                transition={{ delay: 0.5 }}
              >
                Venezolano. Creador de identidades visuales, contenido con criterio
                y marcas que dicen algo.
              </motion.p>
            </div>

            <div className="absolute bottom-0 right-0 hidden md:block">
              <div className="flex flex-col items-center text-white/40">
                <motion.div
                  className="w-px bg-white/30"
                  initial={prefersReduced ? false : { height: 0 }}
                  animate={prefersReduced ? undefined : { height: 60 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
                <span className="mt-5 text-[0.65rem] uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180">
                  scroll
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-[5vw] py-[10vh]">
        <motion.p
          className="mx-auto max-w-[1000px] text-[#0a0a0a]"
          style={{ fontSize: "clamp(1.6rem, 3.2vw, 3rem)", fontWeight: 500, lineHeight: 1.3 }}
          variants={staggerContainer}
          initial={prefersReduced ? false : "hidden"}
          whileInView={prefersReduced ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {splitWords(
            "Me interesa construir piezas con criterio completo: idea, imagen, ritmo, direccion y sensacion final. No me mueve hacer contenido por hacer, sino crear cosas que tengan una vibra clara y una identidad que se sienta real.",
          ).map((word, index) => (
            <span
              key={`statement-${word}-${index}`}
              style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}
            >
              <motion.span style={{ display: "inline-block" }} variants={wordVariants} custom={index * 0.57} />
            </span>
          ))}
        </motion.p>

        <div className="mx-auto mt-12 max-w-[1000px] border-t border-[#e8e8e8] pt-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Disponible para proyectos
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#d9ff3f]" />
              <p className="text-xs uppercase tracking-[0.2em]">Activo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid min-h-[80vh] bg-[#0f0f0f] lg:grid-cols-2">
        <div className="relative min-h-[55vh] overflow-hidden lg:min-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about-profile.jpg"
            alt="Perfil de Gherard"
            className="h-full w-full object-cover will-change-transform"
            style={{
              transform: prefersReduced ? undefined : `translateY(${imageOffset}px)`,
            }}
            onError={(e) => {
              const img = e.currentTarget;
              if (img.dataset.fallbackApplied === "1") return;
              img.dataset.fallbackApplied = "1";
              img.src = "https://picsum.photos/seed/gherard-profile/800/1000";
            }}
          />
        </div>
        <motion.div
          className="flex flex-col justify-center px-[5vw] py-16"
          variants={staggerContainer}
          initial={prefersReduced ? false : "hidden"}
          whileInView={prefersReduced ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.span
            variants={revealVariants.fadeUp}
            className="text-[0.65rem] uppercase tracking-[0.25em] text-[#f7b7ff]"
          >
            TRAYECTORIA
          </motion.span>

          <h2
            className="mt-4 uppercase text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
            }}
          >
            {splitWords("De las ideas al resultado.").map((word, index) => (
              <span
                key={`trayectoria-${word}-${index}`}
                style={{ display: "inline-block", overflow: "hidden" }}
              >
                <motion.span
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                  variants={wordVariants}
                  custom={index}
                  initial={prefersReduced ? false : "hidden"}
                  whileInView={prefersReduced ? undefined : "visible"}
                  viewport={{ once: true, margin: "-60px" }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          <div className="mt-6 space-y-5">
            <motion.p variants={staggerChild} className="text-base leading-[1.8] text-white/60">
              He trabajado en proyectos propios como El Kiosco, donde construi
              una marca completa desde el nombre hasta la estetica visual, el
              contenido y la comunidad.
            </motion.p>
            <motion.p variants={staggerChild} className="text-base leading-[1.8] text-white/60">
              Tambien desarrollo branding, edito videos con criterio narrativo,
              diseno piezas graficas y construyo sitios web. Mi enfoque mezcla
              estetica urbana, sensibilidad visual y direccion creativa.
            </motion.p>
            <motion.p variants={staggerChild} className="text-base leading-[1.8] text-white/60">
              Trabajo desde Venezuela con clientes y proyectos en toda
              Latinoamerica. Si tenes una idea y queres que se vea y se sienta
              real, hablemos.
            </motion.p>
          </div>

          <motion.div variants={staggerChild} className="mt-8">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white transition duration-200 hover:border-[#d9ff3f] hover:bg-[#d9ff3f] hover:text-black"
            >
              Trabajemos juntos <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white px-[5vw] py-[10vh]">
        <div className="mx-auto max-w-[1200px]">
          <motion.span
            className="text-[0.65rem] uppercase tracking-[0.25em] text-[#58d6c2]"
            variants={revealVariants.fadeUp}
            initial={prefersReduced ? false : "hidden"}
            whileInView={prefersReduced ? undefined : "visible"}
            viewport={{ once: true, margin: "-60px" }}
          >
            DISCIPLINAS
          </motion.span>

          <h2
            className="mt-4 uppercase text-[#0a0a0a]"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
            }}
          >
            {splitWords("Lo que domino.").map((word, index) => (
              <span
                key={`skills-head-${word}-${index}`}
                style={{ display: "inline-block", overflow: "hidden" }}
              >
                <motion.span
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                  variants={wordVariants}
                  custom={index}
                  initial={prefersReduced ? false : "hidden"}
                  whileInView={prefersReduced ? undefined : "visible"}
                  viewport={{ once: true, margin: "-60px" }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.div
            className="mt-10 grid grid-cols-1 gap-px bg-[#e8e8e8] md:grid-cols-2"
            variants={staggerContainer}
            initial={prefersReduced ? false : "hidden"}
            whileInView={prefersReduced ? undefined : "visible"}
            viewport={{ once: true, margin: "-60px" }}
          >
            {skills.map((skill) => (
              <motion.article
                key={skill.number}
                variants={staggerChild}
                className="flex flex-col gap-3 bg-white px-8 py-10"
              >
                <span className="font-mono text-[0.65rem] font-bold text-[#d9ff3f]">
                  {skill.number}
                </span>
                <h3 className="text-[1.4rem] font-extrabold uppercase text-[#0a0a0a]">
                  {skill.title}
                </h3>
                <p className="text-sm leading-[1.7] text-[#666]">{skill.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-[5vw] py-[10vh]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 md:grid-cols-3">
          <CountStat
            target={3}
            suffix="+"
            label="Anos de experiencia"
            prefersReduced={prefersReduced}
          />
          <CountStat
            target={40}
            suffix="+"
            label="Proyectos completados"
            prefersReduced={prefersReduced}
          />
          <CountStat
            target={100}
            suffix="%"
            label="Enfoque en identidad"
            prefersReduced={prefersReduced}
          />
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white px-[5vw] py-[12vh] text-center">
        <h2
          className="uppercase text-[#0a0a0a]"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
          }}
        >
          {splitWords("Tenes un proyecto?").map((word, index) => (
            <span
              key={`final-cta-${word}-${index}`}
              style={{ display: "inline-block", overflow: "hidden" }}
            >
              <motion.span
                style={{ display: "inline-block", marginRight: "0.25em" }}
                variants={wordVariants}
                custom={index}
                initial={prefersReduced ? false : "hidden"}
                whileInView={prefersReduced ? undefined : "visible"}
                viewport={{ once: true, margin: "-60px" }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h2>

        <motion.p
          className="mt-4 text-[1.1rem] text-neutral-500"
          variants={revealVariants.fadeUp}
          initial={prefersReduced ? false : "hidden"}
          whileInView={prefersReduced ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          Hablemos y construimos algo con identidad real.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-[#d9ff3f] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition duration-200 hover:bg-black hover:text-[#d9ff3f]"
          >
            Escribime <MessageCircle className="h-4 w-4" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-8 py-4 text-sm uppercase tracking-[0.15em] text-neutral-700 transition duration-200 hover:border-black hover:text-black"
          >
            Ver mi trabajo <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <AnimatePresence>
          {false ? (
            <motion.div exit={{ opacity: 0 }}>
              <Instagram />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
}
