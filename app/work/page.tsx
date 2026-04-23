"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/src/data/projects";
import { staggerChild, staggerContainer } from "@/src/hooks/useScrollReveal";

const navLink =
  "rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10 hover:text-white transition-opacity duration-200 hover:opacity-50";

const navLinkActive =
  "rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#f7b7ff] transition-opacity duration-200 hover:opacity-50";

export default function WorkPage() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReduced(reduced);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#d9ff3f] selection:text-black">
      <header className="pointer-events-none fixed left-0 right-0 top-6 z-30 flex justify-center px-4">
        <div className="pointer-events-auto flex max-w-[95vw] flex-wrap items-center justify-center gap-1 rounded-full border border-white/15 bg-black/85 px-2 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
          <Link href="/" className={navLink}>
            Inicio
          </Link>
          <span className="hidden h-5 w-px bg-white/25 sm:block" aria-hidden />
          <Link href="/#about" className={navLink}>
            About
          </Link>
          <Link href="/work" className={navLinkActive}>
            Work
          </Link>
          <Link href="/shop" className={navLink}>
            Tienda
          </Link>
          <Link href="/#contacto" className={navLink}>
            Contacto
          </Link>
        </div>
      </header>

      <main className="pb-14 pt-[110px]">
        <section ref={heroRef} className="relative h-[180vh]">
          <div className="sticky top-0 h-screen overflow-hidden bg-[#0a0a0a]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src={projects[0]?.coverImage}
              alt="Work hero"
              className="absolute inset-0 h-full w-full object-cover"
              style={prefersReduced ? undefined : { scale: imageScale }}
              onError={(e) => {
                const img = e.currentTarget;
                if (img.dataset.fallbackApplied === "1") return;
                img.dataset.fallbackApplied = "1";
                img.src = "https://picsum.photos/seed/work-hero/1600/1000";
              }}
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />
            <motion.div
              className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-10 md:pb-20"
              style={
                prefersReduced
                  ? undefined
                  : { y: titleY, scale: titleScale, opacity: titleOpacity }
              }
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#d9ff3f]">Work</p>
              <h1 className="mt-3 max-w-6xl text-[clamp(3rem,9vw,9rem)] font-black uppercase leading-[0.9] tracking-[-0.035em] text-white">
                Selected Work
              </h1>
              <p className="mt-4 max-w-xl text-sm uppercase tracking-[0.18em] text-white/60">
                Proyectos visuales, identidad y contenido con dirección creativa.
              </p>
            </motion.div>
          </div>
        </section>

        <motion.section
          className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-[2px] bg-neutral-200 px-0 md:grid-cols-2"
          variants={staggerContainer}
          initial={prefersReduced ? false : "hidden"}
          whileInView={prefersReduced ? undefined : "visible"}
          viewport={{ once: true, margin: "-20px" }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              className="group relative aspect-[4/3] overflow-hidden bg-[#111] md:aspect-[16/11]"
              variants={staggerChild}
            >
              <Link href={`/work/${project.slug}`} className="block h-full w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.dataset.fallbackApplied === "1") return;
                    img.dataset.fallbackApplied = "1";
                    img.src = `https://picsum.photos/seed/${project.slug}/1200/800`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.85] via-black/10 to-transparent transition-colors duration-300 group-hover:from-black/90 group-hover:via-black/20" />
                <ArrowUpRight
                  className="absolute right-5 top-5 size-7 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ color: project.accentColor }}
                />
                <div className="absolute bottom-0 p-6 md:p-8">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h2 className="mt-3 text-[clamp(1.4rem,2.4vw,2.1rem)] font-extrabold uppercase text-white">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
                    {project.year}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.section>
      </main>
    </div>
  );
}
