"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  reverse?: boolean;
  simple?: boolean;
}

const Container = ({ children, className, delay = 0.2, reverse, simple }: Props) => {
  return (
    <motion.div
      className={cn("h-full w-full", className)}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: simple ? 0.2 : 0.4,
        type: simple ? "keyframes" : "spring",
        stiffness: simple ? 100 : undefined,
      }}
    >
      {children}
    </motion.div>
  );
};

const linksColumn = [
  { label: "Inicio", href: "/" },
  { label: "Casos", href: "/work" },
  { label: "Sobre", href: "/about" },
  { label: "Contacto", href: "/#contacto" },
  { label: "Tienda", href: "/shop" },
];

const socialsColumn = [
  { label: "Instagram", href: "https://instagram.com/gheranillos" },
  { label: "LinkedIn", href: "https://linkedin.com/in/gheranillos" },
  { label: "X / Twitter", href: "https://x.com/gheranillos" },
  { label: "Behance", href: "https://behance.net/gherard" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white">
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.7fr_0.7fr_1fr] md:gap-8">
            <Container delay={0.08} className="h-auto">
              <div className="space-y-4">
                <div>
                  <p className="text-[0.66rem] uppercase tracking-[0.2em] text-white/45">(Email)</p>
                  <a
                    href="mailto:hello@gherad.com"
                    className="mt-2 inline-block text-[clamp(1.3rem,2.1vw,2rem)] font-bold leading-none text-[#ff4a2f] transition-colors duration-200 hover:text-[#d9ff3f]"
                  >
                    hello@gherad.com
                  </a>
                </div>
                <div>
                  <p className="text-[0.66rem] uppercase tracking-[0.2em] text-white/45">(Phone)</p>
                  <a
                    href="tel:+584147613621"
                    className="mt-2 inline-block text-2xl font-semibold leading-none text-white/90 transition-colors duration-200 hover:text-[#d9ff3f]"
                  >
                    +58 414 761 3621
                  </a>
                </div>
              </div>
            </Container>

            <Container delay={0.14} className="h-auto">
              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.2em] text-white/45">(Links)</p>
                <nav className="mt-4 flex flex-col gap-2.5">
                  {linksColumn.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="w-fit text-[1.75rem] font-normal leading-none tracking-[-0.02em] text-white/88 transition-colors duration-200 hover:text-[#d9ff3f]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </Container>

            <Container delay={0.2} className="h-auto">
              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.2em] text-white/45">(Social)</p>
                <div className="mt-4 flex flex-col gap-2.5">
                  {socialsColumn.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-1.5 text-[1.75rem] font-normal leading-none tracking-[-0.02em] text-white/88 transition-colors duration-200 hover:text-[#d9ff3f]"
                    >
                      {item.label}
                      <ArrowUpRight className="size-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </Container>

            <Container delay={0.24} className="h-auto">
              <div className="md:pl-6">
                <p className="max-w-[280px] text-sm leading-[1.45] text-white/65">
                  Si quieres ideas accionables y cero humo, te las mando por correo.
                </p>
                <form className="mt-6 max-w-[320px]">
                  <label className="sr-only" htmlFor="footer-newsletter">
                    Email
                  </label>
                  <input
                    id="footer-newsletter"
                    type="email"
                    placeholder="Tu email"
                    className="h-11 w-full border-b border-white/25 bg-transparent px-0 text-base text-white outline-none placeholder:text-white/38 focus:border-white/55"
                  />
                  <button
                    type="button"
                    className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-full border border-white/20 bg-transparent text-sm font-medium text-white/90 transition-colors duration-200 hover:border-[#d9ff3f] hover:bg-[#d9ff3f] hover:text-black"
                  >
                    Recibir
                  </button>
                </form>
              </div>
            </Container>
          </div>

          <Container delay={0.3} className="h-auto">
            <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.72rem] uppercase tracking-[0.08em] text-white/45 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Gherard. Todos los derechos reservados.</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="transition-colors duration-200 hover:text-white/75">
                  Privacidad
                </Link>
                <Link href="/terms" className="transition-colors duration-200 hover:text-white/75">
                  Terminos
                </Link>
              </div>
              <p className="md:text-right">Hecho por Gherard</p>
            </div>
          </Container>
        </div>
      </div>

      <Container delay={0.34} className="h-auto">
        <div className="bg-[#ff4a2f] px-6 py-10 md:px-10 md:py-12">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[clamp(4rem,16vw,13rem)] font-black uppercase leading-[0.85] tracking-[-0.03em] text-black [font-family:var(--font-helvetica-neue)]">
              Gherard
            </h2>
            <p className="max-w-[300px] text-[clamp(2rem,4vw,4.3rem)] font-black uppercase leading-[0.88] tracking-[-0.025em] text-black md:text-right">
              Criterio real. Sin humo.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
