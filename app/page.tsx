"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

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

export default function GherardPortfolio() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080808] text-neutral-100 selection:bg-[#d9ff3f] selection:text-black">
      {/* Background Glow Effects */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute left-[-10%] top-0 h-[30rem] w-[30rem] rounded-full bg-lime-300/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:38px_38px] opacity-[0.08]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,255,63,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.16),transparent_24%),radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-[#d9ff3f] shadow-[0_0_30px_rgba(217,255,63,0.15)]">
                G
              </div>
              <div>
                <div className="text-sm tracking-[0.35em] text-white/70 uppercase">
                  Gherard
                </div>
                <div className="text-xs text-white/35">creative portfolio</div>
              </div>
            </div>
            <a
              href="https://instagram.com/gheranillos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:-translate-y-0.5 hover:border-[#d9ff3f]/40 hover:text-white"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>

          {/* Hero Content */}
          <div className="grid gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#d9ff3f]" /> Director
                creativo · editor de video · branding
              </div>
              <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-[7.5rem]">
                Diseño <span className="text-[#d9ff3f]">con</span>
                <br />
                <span className="relative inline-block text-white">
                  autenticidad
                  <span className="absolute -bottom-2 left-0 h-3 w-full bg-fuchsia-500/40 blur-md" />
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                Soy Gherard. Me muevo entre edición de video, branding y
                dirección creativa para marcas, artistas y proyectos que
                necesitan verse con personalidad, energía y una estética que no
                se sienta genérica.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#d9ff3f] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
                >
                  Trabajemos juntos <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#proyectos"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-fuchsia-400/50 hover:bg-white/10"
                >
                  Ver portfolio
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid gap-4 self-end"
            >
              <div className="rotate-[-2deg] rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                    Enfoque
                  </div>
                  <div className="rounded-full border border-[#d9ff3f]/30 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#d9ff3f]">
                    visual energy
                  </div>
                </div>
                <p className="text-lg leading-8 text-white/85">
                  Urbano, creativo y con dirección. Construyo piezas que mezclan
                  vibra, estética, narrativa y presencia visual para que una
                  marca se sienta viva y memorable.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6">
                  <div className="text-4xl font-black text-[#d9ff3f]">3</div>
                  <div className="mt-2 text-sm text-white/60">
                    Servicios que vendo
                  </div>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/5 p-6">
                  <div className="text-4xl font-black text-white">1</div>
                  <div className="mt-2 text-sm text-white/60">
                    Lenguaje visual propio
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="absolute left-4 top-16 hidden text-[11rem] font-black uppercase leading-none text-white/[0.03] md:block">
          G
        </div>
        <div className="relative grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-[#d9ff3f]">
              About
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight md:text-5xl">
              No soy solo editor.
              <br />
              Tampoco solo hago branding.
            </h2>
          </div>
          <div className="space-y-5 text-white/72 leading-8">
            <p>
              Me interesa construir piezas con criterio completo: idea, imagen,
              ritmo, dirección y sensación final. No me mueve hacer contenido
              por hacer, sino crear cosas que tengan una vibra clara y una
              identidad que se sienta real.
            </p>
            <p>
              He trabajado en proyectos propios como{" "}
              <span className="text-[#d9ff3f]">El Kiosco</span>, en branding,
              visuales, videos promocionales, conceptos para contenido y
              trabajos freelance donde la imagen y la idea tienen que ir
              pegadas.
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
      <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.25em] text-fuchsia-400">
              Servicios
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight md:text-5xl">
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
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-black/30 p-6 transition hover:-translate-y-2 hover:border-[#d9ff3f]/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d9ff3f]/0 via-fuchsia-500/0 to-cyan-400/0 transition duration-500 group-hover:from-[#d9ff3f]/8 group-hover:via-fuchsia-500/8 group-hover:to-cyan-400/8" />
                <div className="relative">
                  <div className="mb-6 text-[4rem] font-black leading-none text-white/10">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-bold uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
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
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Portfolio
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight md:text-5xl">
              Selected work / visual worlds
            </h2>
          </div>
          <p className="max-w-xl text-white/60 leading-7">
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
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/70 backdrop-blur-md">
                  {project.type}
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black uppercase">{project.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {project.description}
                </p>
                <button className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-[#d9ff3f]/40 hover:text-white">
                  Añadir caso real <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.04))]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-[#d9ff3f]">
                Proceso
              </div>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight md:text-5xl">
                Cómo trabajo
              </h2>
            </div>
            <div className="grid gap-4">
              {process.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-black/30 p-5 transition hover:border-fuchsia-400/30"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-sm font-bold text-[#d9ff3f]">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(217,255,63,0.12),rgba(255,255,255,0.03),rgba(217,70,239,0.10))] p-8 md:p-12">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d9ff3f]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                Contacto
              </div>
              <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase tracking-tight md:text-6xl">
                Si tu proyecto necesita dirección, branding o edición con
                identidad, escríbeme.
              </h2>
              <p className="mt-5 max-w-2xl text-white/65 leading-8">
                Esta web está hecha para presentarte rápido, con personalidad y
                sin mandar PDFs. Aquí puedes mostrar quién eres, qué haces y
                cómo se ve tu trabajo en un formato mucho más vivo.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="#"
                className="rounded-2xl border border-white/15 bg-black/30 px-6 py-4 text-center text-sm font-medium text-white/60 transition hover:border-white/30 hover:text-white"
              >
                Correo próximamente
              </a>
              <a
                href="https://instagram.com/gheranillos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center text-sm font-medium text-white transition hover:border-fuchsia-400/40"
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
