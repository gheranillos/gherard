"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Globe } from "lucide-react";

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
      className={cn("w-full h-full", className)}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: delay,
        duration: simple ? 0.2 : 0.4,
        type: simple ? "keyframes" : "spring",
        stiffness: simple ? 100 : undefined,
      }}
    >
      {children}
    </motion.div>
  );
};

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacto", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/gheranillos", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com/in/gheranillos", icon: Linkedin },
  { label: "X", href: "https://x.com/gheranillos", icon: Twitter },
  { label: "Behance", href: "https://behance.net/gherard", icon: Globe },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e8e8e8] bg-white px-6 py-16 md:px-[5vw] md:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <Container delay={0.1} className="h-auto">
            <p className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.02em] text-[#0a0a0a]">
              GHERARD
            </p>
          </Container>

          <Container delay={0.2} className="h-auto">
            <nav className="flex flex-wrap gap-x-4 gap-y-3 md:justify-end md:gap-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[0.85rem] text-[#888888] transition-colors duration-200 hover:text-[#0a0a0a]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>

        <Container delay={0.25} className="h-auto">
          <div className="mt-8 flex flex-col items-center justify-between gap-6 border-y border-[#f0f0f0] py-12 text-center md:mt-10 md:flex-row md:text-left">
            <p className="text-[clamp(1rem,2vw,1.2rem)] font-medium text-[#0a0a0a]">
              Diseño. Identidad. Movimiento.
            </p>

            <div className="flex items-center gap-6">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="text-[#888888] transition-all duration-200 hover:scale-110 hover:text-[#0a0a0a]"
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>

        <Container delay={0.35} className="h-auto">
          <div className="mt-8 flex flex-col items-center justify-between gap-2 text-center md:flex-row md:gap-4 md:text-left">
            <p className="text-[0.8rem] text-[#aaaaaa]">
              © 2025 Gherard. Todos los derechos reservados.
            </p>
            <p className="text-[0.8rem] text-[#aaaaaa]">
              Diseñado y desarrollado por Gherard
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
