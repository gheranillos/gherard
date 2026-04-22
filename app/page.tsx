"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Instagram,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart, type ShopProduct } from "@/lib/cart-context";

/** Imagen en `public/hero.jpg` */
const HERO_IMAGE = "/hero.jpg";

const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "pack-luts",
    name: "Pack LUTs / color mood (10 presets)",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "consultoria",
    name: "Sesión de dirección creativa (1 h, videollamada)",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "reel-pack",
    name: "Pack edición: 3 reels cortos (hasta 45 s c/u)",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mini-brand",
    name: "Mini identidad: logo + paleta + tipografías",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
  },
];

const services = [
  {
    title: "Edición de video",
    description:
      "Edición short form y long form con ritmo, intención y una estética que haga que la pieza se sienta viva, moderna y bien pensada.",
  },
  {
    title: "Branding",
    description:
      "Construcción visual para marcas que necesitan una identidad con carácter, criterio estético y presencia real en digital.",
  },
  {
    title: "Dirección creativa",
    description:
      "Conceptos, campañas, mood visual y decisiones creativas para aterrizar una idea en algo coherente, atractivo y auténtico.",
  },
];

const projects = [
  {
    name: "El Kiosco",
    type: "Proyecto propio / Cultura visual",
    description:
      "Marca y universo creativo donde mezclo ropa, audiovisual, storytelling, comunidad y dirección estética con una energía urbana marcada.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Branding",
    type: "Identidad visual",
    description:
      "Diseño de marcas, sistemas visuales, piezas gráficas y conceptos que buscan verse sólidos, actuales y con personalidad.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Videos",
    type: "Edición y contenido",
    description:
      "Piezas para redes, campañas, promos y contenido audiovisual pensado para retener, comunicar y elevar la imagen del proyecto.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Trabajos freelance",
    type: "Clientes y colaboraciones",
    description:
      "Trabajos desarrollados para marcas y proyectos en áreas como contenido, visuales, branding y dirección creativa aplicada.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
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
  "rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-teal-400";

export default function GherardPortfolio() {
  const { addToCart, count, setOpen } = useCart();

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
              Sobre
            </a>
            <a href="#proyectos" className={navLink}>
              Proyectos
            </a>
            <a href="#servicios" className={navLink}>
              Servicios
            </a>
            <a href="#shop" className={navLink}>
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
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-white/90 md:text-xs">
              Trabajo <span className="text-teal-400">●</span> disponible para
              colaborar
            </p>
            <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-7xl">
              Diseño <span className="text-[#d9ff3f]">con</span> autenticidad
            </h1>
            <a
              href="#contacto"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white"
            >
              <span className="border-b-2 border-teal-400 pb-0.5 transition group-hover:border-teal-300">
                Contrátame
              </span>
              <ArrowUpRight className="size-4 text-teal-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="absolute left-4 top-16 hidden text-[11rem] font-black uppercase leading-none text-neutral-900/[0.05] md:block">
          G
        </div>
        <div className="relative grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-[#7a8500]">
              About
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-neutral-900 md:text-5xl">
              No soy solo editor.
              <br />
              Tampoco solo hago branding.
            </h2>
          </div>
          <div className="space-y-5 leading-8 text-neutral-600">
            <p>
              Me interesa construir piezas con criterio completo: idea, imagen,
              ritmo, dirección y sensación final. No me mueve hacer contenido
              por hacer, sino crear cosas que tengan una vibra clara y una
              identidad que se sienta real.
            </p>
            <p>
              He trabajado en proyectos propios como{" "}
              <span className="font-medium text-[#5c6200]">El Kiosco</span>, en
              branding, visuales, videos promocionales, conceptos para
              contenido y trabajos freelance donde la imagen y la idea tienen
              que ir pegadas.
            </p>
            <p>
              Mi enfoque mezcla estética urbana, sensibilidad visual, cultura
              digital, storytelling y dirección creativa para que una marca no
              solo se vea dura, sino que también diga algo.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className="border-y border-neutral-200 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.01))]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.25em] text-fuchsia-600">
              Servicios
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-neutral-900 md:text-5xl">
              Qué puedo hacer por tu proyecto
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[30px] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-[#d9ff3f]/50 hover:shadow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d9ff3f]/0 via-fuchsia-500/0 to-cyan-400/0 transition duration-500 group-hover:from-[#d9ff3f]/10 group-hover:via-fuchsia-500/8 group-hover:to-cyan-400/8" />
                <div className="relative">
                  <div className="mb-6 text-[4rem] font-black leading-none text-neutral-200">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-bold uppercase text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="proyectos"
        className="mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-700">
              Portfolio
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-neutral-900 md:text-5xl">
              Selected work / visual worlds
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-neutral-600">
            Te dejé esta sección más visual para que metas covers, frames,
            thumbnails, logos, renders o links reales a proyectos que quieras
            enseñar.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-72 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/90 backdrop-blur-md">
                  {project.type}
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black uppercase text-neutral-900">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {project.description}
                </p>
                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition hover:border-[#d9ff3f]/60 hover:text-neutral-900"
                >
                  Añadir caso real <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="border-y border-neutral-200 bg-[linear-gradient(180deg,rgba(0,0,0,0.015),rgba(0,0,0,0.03))]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-[#7a8500]">
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
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-sm font-bold text-[#7a8500]">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="border-b border-neutral-200 bg-neutral-50/80">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-teal-600">
                Tienda
              </div>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-neutral-900 md:text-5xl">
                Servicios y packs digitales
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-neutral-600">
              Añade al carrito. El pago y la coordinación los cierras por
              WhatsApp con un resumen automático del pedido.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {SHOP_PRODUCTS.map((product) => (
              <article
                key={product.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold leading-snug text-neutral-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-lg font-bold tabular-nums text-neutral-900">
                    {product.price}€
                  </p>
                  <Button
                    type="button"
                    className="mt-4 w-full"
                    onClick={() => addToCart(product)}
                  >
                    Añadir al carrito
                  </Button>
                </div>
              </article>
            ))}
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
