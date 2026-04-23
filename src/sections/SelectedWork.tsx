"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  CircularGallery,
  type GalleryItem,
} from "../components/CircularGallery";
import { splitWords, wordVariants } from "../hooks/useTextReveal";
import { revealVariants } from "../hooks/useScrollReveal";

const portfolioItems: GalleryItem[] = [
  {
    image: "/images/projects/el-kiosco.jpg",
    name: "El Kiosco",
    category: "Branding e identidad",
    href: "/projects/el-kiosco",
  },
  {
    image: "/images/projects/branding.jpg",
    name: "Branding",
    category: "Sistema visual",
    href: "/projects/branding",
  },
  {
    image: "/images/projects/videos.jpg",
    name: "Videos",
    category: "Edición y motion",
    href: "/projects/videos",
  },
  {
    image: "/images/projects/freelance.jpg",
    name: "Trabajos freelance",
    category: "Piezas y campañas",
    href: "/projects/freelance",
  },
  {
    image: "/images/projects/fotografia.jpg",
    name: "Fotografía",
    category: "Dirección de arte",
    href: "/projects/fotografia",
  },
  {
    image: "/images/projects/direccion.jpg",
    name: "Dirección",
    category: "Creatividad",
    href: "/projects/direccion",
  },
];

export function SelectedWork() {
  const router = useRouter();
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReduced(reduced);
  }, []);

  return (
    <section id="proyectos" className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div
              className="text-sm uppercase tracking-[0.25em] text-cyan-700"
              variants={revealVariants.fadeIn}
              initial={prefersReduced ? false : "hidden"}
              whileInView={prefersReduced ? undefined : "visible"}
              viewport={{ once: true, margin: "-40px" }}
            >
              Portfolio
            </motion.div>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-neutral-900 md:text-5xl">
              {splitWords("Selected work / visual worlds").map((word, index) => (
                <span
                  key={`portfolio-head-${word}-${index}`}
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
            </h2>
          </div>
          <motion.p
            className="max-w-xl leading-7 text-neutral-600"
            variants={revealVariants.fadeUp}
            initial={prefersReduced ? false : "hidden"}
            whileInView={prefersReduced ? undefined : "visible"}
            viewport={{ once: true, margin: "-40px" }}
          >
            Te dejé esta sección más visual para que metas covers, frames,
            thumbnails, logos, renders o links reales a proyectos que quieras
            enseñar.
          </motion.p>
        </div>
      </div>

      <div
        className="mt-10 w-full bg-white"
        style={{ height: "min(70vh, 600px)", minHeight: 420, position: "relative" }}
      >
        <CircularGallery
          items={portfolioItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.06}
          scrollSpeed={1.1}
          scrollEase={0.04}
          onItemNavigate={(href) => router.push(href)}
        />
      </div>
    </section>
  );
}
