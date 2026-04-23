"use client";

import { useEffect, useRef } from "react";

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

const remap = (v: number, i0: number, i1: number, o0: number, o1: number) => {
  if (i1 - i0 === 0) return o0;
  const mapped = o0 + ((v - i0) / (i1 - i0)) * (o1 - o0);
  return clamp(mapped, Math.min(o0, o1), Math.max(o0, o1));
};

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const posRef = useRef<HTMLDivElement | null>(null);
  const cubeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pos = posRef.current;
    const cube = cubeRef.current;
    if (!section || !pos || !cube) return;

    let ticking = false;

    const updateCube = () => {
      const scrolled = window.scrollY - section.offsetTop;
      const total = section.offsetHeight - window.innerHeight;
      const p = clamp(scrolled / Math.max(total, 1), 0, 1);

      const isMobile = window.innerWidth < 768;
      const startTranslate = isMobile ? 150 : 120;

      const growP = remap(p, 0, 0.2, 0, 1);
      const translateY = startTranslate - startTranslate * growP;
      const scale = 0.3 + 0.7 * growP;
      pos.style.transform = `translateY(${translateY}%) scale(${scale})`;

      let rotateX = 0;
      let rotateY = 0;

      if (p >= 0.35 && p <= 0.6) {
        rotateX = -90 * remap(p, 0.35, 0.6, 0, 1);
      } else if (p > 0.6) {
        rotateX = -90;
      }

      if (p >= 0.65 && p <= 0.9) {
        rotateY = -90 * remap(p, 0.65, 0.9, 0, 1);
      } else if (p > 0.9) {
        rotateY = -90;
      }

      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateCube);
    };

    updateCube();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="relative h-[500vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-white">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-[1] -translate-y-1/2 overflow-hidden whitespace-nowrap">
          <div className="marquee-track inline-flex min-w-[200%] will-change-transform">
            <span className="marquee-text px-6">
              Review · Review · Review · Review · Review · Review ·
            </span>
            <span className="marquee-text px-6">
              Review · Review · Review · Review · Review · Review ·
            </span>
          </div>
        </div>

        <div className="cube-shell relative z-10 flex items-center justify-center [perspective:1200px] [perspective-origin:center_center]">
          <div
            ref={posRef}
            className="will-change-transform"
            style={{ transform: "translateY(120%) scale(0.3)" }}
          >
            <div ref={cubeRef} className="cube relative will-change-transform">
              <div className="face face-front">
                <p className="face-quote">
                  "Gherard entendió desde el principio la vibra que quería para mi marca. El resultado fue
                  exactamente lo que tenía en la cabeza pero mejor ejecutado."
                </p>
                <p className="face-author">
                  — <span className="face-name">Valentina M.</span>,{" "}
                  <span className="face-role">Fundadora</span>
                </p>
              </div>

              <div className="face face-top">
                <p className="face-quote">
                  "Nos ayudó a ordenar la identidad visual y todo empezó a sentirse más profesional.
                  Hubo criterio, detalle y una dirección muy clara en cada entrega."
                </p>
                <p className="face-author">
                  — <span className="face-name">Carla P.</span>,{" "}
                  <span className="face-role">Fundadora de marca</span>
                </p>
              </div>

              <div className="face face-left">
                <p className="face-quote">
                  "Trabajo limpio, criterio claro y entrega rápida. Sabe lo que hace y se nota que le importa el
                  resultado."
                </p>
                <p className="face-author">
                  — <span className="face-name">Lucía F.</span>,{" "}
                  <span className="face-role">Diseñadora Freelance</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 18s linear infinite;
        }

        .marquee-text {
          font-size: clamp(3.5rem, 7vw, 6rem);
          font-weight: 400;
          color: #0a0a0a;
          line-height: 1;
        }

        .cube-shell {
          --cube-size: min(420px, 80vw);
        }

        .cube {
          width: var(--cube-size);
          height: var(--cube-size);
          transform-style: preserve-3d;
          transform: rotateX(0deg) rotateY(0deg);
        }

        .face {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2.5rem;
          background: #0a0a0a;
          color: #ffffff;
          backface-visibility: hidden;
        }

        .face-front {
          transform: translateZ(calc(var(--cube-size) / 2));
        }

        .face-top {
          transform: rotateX(90deg) translateZ(calc(var(--cube-size) / 2));
          transform-origin: center center;
        }

        .face-left {
          transform: rotateY(90deg) translateZ(calc(var(--cube-size) / 2));
          transform-origin: center center;
        }

        .face-quote {
          margin-bottom: auto;
          padding-top: 2rem;
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 1.65;
          font-style: normal;
          font-weight: 400;
          color: #ffffff;
        }

        .face-author {
          font-size: 0.9rem;
          color: #ffffff;
        }

        .face-name {
          font-weight: 400;
          color: #aaaaaa;
        }

        .face-role {
          font-weight: 700;
          color: #ffffff;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 767px) {
          .cube-shell {
            --cube-size: min(300px, 85vw);
          }

          .marquee-text {
            font-size: clamp(2.5rem, 10vw, 4rem);
          }

          .face {
            padding: 1.4rem;
          }

          .face-quote {
            font-size: 0.9rem;
            padding-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
