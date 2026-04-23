"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/src/data/projects";
import { staggerChild, staggerContainer } from "@/src/hooks/useScrollReveal";
import { splitWords, wordVariants } from "@/src/hooks/useTextReveal";

const navLink =
  "rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10 hover:text-white transition-opacity duration-200 hover:opacity-50";

const navLinkActive =
  "rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#f7b7ff] transition-opacity duration-200 hover:opacity-50";

export default function WorkPage() {
  const [prefersReduced, setPrefersReduced] = useState(false);

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

      <main className="pb-10 pt-[140px]">
        <section className="px-6 pb-[60px] md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <motion.p
              className="text-sm uppercase tracking-[0.25em] text-cyan-700"
              initial={prefersReduced ? false : "hidden"}
              whileInView={prefersReduced ? undefined : "visible"}
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerChild}
            >
              WORK
            </motion.p>
            <h1 className="mt-4 text-[clamp(3rem,7vw,7rem)] font-black uppercase tracking-[-0.03em] text-black leading-[0.92]">
              {splitWords("Selected Work").map((word, index) => (
                <span
                  key={`work-head-${word}-${index}`}
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
              ))}
            </h1>
            <motion.p
              className="mt-4 text-neutral-400"
              initial={prefersReduced ? false : "hidden"}
              whileInView={prefersReduced ? undefined : "visible"}
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerChild}
            >
              Todos los proyectos.
            </motion.p>
          </div>
        </section>

        <motion.section
          className="grid grid-cols-1 gap-[2px] bg-neutral-200 md:grid-cols-2"
          variants={staggerContainer}
          initial={prefersReduced ? false : "hidden"}
          whileInView={prefersReduced ? undefined : "visible"}
          viewport={{ once: true, margin: "-20px" }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              className="group relative aspect-[4/3] overflow-hidden bg-[#111]"
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
                  className="absolute right-4 top-4 size-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ color: project.accentColor }}
                />
                <div className="absolute bottom-0 p-6">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h2 className="mt-2 text-[clamp(1.2rem,2vw,1.8rem)] font-extrabold uppercase text-white">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-xs text-white/50">{project.year}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.section>
      </main>
    </div>
  );
}
