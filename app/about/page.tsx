"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { splitWords, wordVariants } from "@/src/hooks/useTextReveal";
import { revealVariants } from "@/src/hooks/useScrollReveal";

export default function AboutPage() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    setPrefersReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#d9ff3f] selection:text-black">
      <main className="bg-white">
        <section className="mx-auto w-full max-w-[1200px] px-[5vw] pb-16 pt-10 md:pb-24">
          <div className="flex items-center justify-between border-b border-black/10 pb-5 text-[0.65rem] uppercase tracking-[0.22em] text-black/45">
            <span>Venezuela</span>
            <span className="font-black tracking-[0.08em] text-black">GHERARD</span>
            <a
              href="mailto:hello@site.com"
              className="transition-opacity duration-200 hover:opacity-55"
            >
              hello@site.com
            </a>
          </div>

          <div className="pt-12 md:pt-16">
            <h1 className="text-center text-[clamp(2.8rem,8vw,6.8rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-[#0a0a0a]">
              {splitWords("About me").map((word, index) => (
                <span
                  key={`about-head-${word}-${index}`}
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
            </h1>
          </div>

          <motion.div
            className="mt-10 grid gap-6 rounded-2xl border border-black/10 bg-[#0a0a0a] p-4 sm:p-6 md:mt-14 md:grid-cols-[1fr_1fr] md:gap-8 md:p-8"
            variants={revealVariants.fadeUp}
            initial={prefersReduced ? false : "hidden"}
            animate={prefersReduced ? undefined : "visible"}
          >
            <div className="overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gherabout.jpg"
                alt="Foto de Gherard"
                className="h-full min-h-[360px] w-full object-cover md:min-h-[520px]"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.dataset.fallbackApplied === "1") return;
                  img.dataset.fallbackApplied = "1";
                  img.src = "https://picsum.photos/seed/gherard-about/900/1200";
                }}
              />
            </div>

            <div className="flex flex-col justify-center px-1 py-2 md:px-2">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[#d9ff3f]">
                Sobre mi
              </p>
              <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,3.2rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white">
                Editor y director creativo.
              </h2>
              <p className="mt-6 max-w-[46ch] text-[0.98rem] leading-[1.85] text-white/68">
                Trabajo desde Venezuela construyendo identidad visual, narrativa y
                presencia digital para marcas con criterio. Me enfoco en crear
                piezas que se sientan reales, con una direccion clara en cada
                decision estetica.
              </p>
              <p className="mt-5 max-w-[46ch] text-[0.98rem] leading-[1.85] text-white/60">
                Desarrollo branding, edicion de video, diseno grafico y web con un
                enfoque editorial: menos ruido, mas intencion y resultados que
                representan de verdad a cada proyecto.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
