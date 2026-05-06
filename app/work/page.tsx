import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects, projectsInWorkGridOrder } from "@/src/data/projects";

function getProjectEditorialSubtitle(description: string): string {
  const normalized = description.trim();
  if (!normalized) return "Contexto real, decisiones claras y resultado medible.";
  const firstSentence = normalized.split(".")[0]?.trim();
  return firstSentence ? `${firstSentence}.` : "Contexto real, decisiones claras y resultado medible.";
}

export default function WorkPage() {
  const orderedProjects = projectsInWorkGridOrder(projects);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 selection:bg-[#f7b7ff] selection:text-black">
      <main className="mx-auto w-full max-w-[1200px] px-[5vw] pb-24 pt-[118px]">
        <header className="border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/55">Casos</p>
              <h1 className="mt-3 text-[clamp(2.4rem,8vw,5.8rem)] font-black uppercase leading-[0.9] tracking-[2px] text-[#ece8e2] [font-family:var(--font-helvetica-neue)]">
                Criterio aplicado
              </h1>
            </div>
            <div className="flex flex-col items-start gap-2 text-left sm:items-end sm:text-right">
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/60">
                Disponible para proyectos
              </p>
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/40">
                Actualizado 2026
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#f7b7ff] hover:text-black"
            >
              Todo
            </Link>
            <Link
              href="/branding"
              className="inline-flex items-center rounded-full border border-white/20 bg-transparent px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/90 transition-colors duration-200 hover:bg-[#f7b7ff] hover:text-black"
            >
              Branding
            </Link>
            <Link
              href="/videos"
              className="inline-flex items-center rounded-full border border-white/20 bg-transparent px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/90 transition-colors duration-200 hover:bg-[#f7b7ff] hover:text-black"
            >
              Videos
            </Link>
          </div>
        </header>

        <section className="mt-10 grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-2">
          {orderedProjects.map((project, index) => (
            <article
              key={project.slug}
              className={`group ${index % 2 === 1 ? "md:translate-y-8" : ""}`}
            >
              <Link href={`/work/${project.slug}`} className="block">
                <div className="relative overflow-hidden border border-white/10 bg-[#0f0f0f]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-90 transition-opacity duration-200 group-hover:opacity-100" />
                  <span className="absolute right-4 top-4 inline-flex items-center rounded-full border border-white/25 bg-black/30 px-3 py-1 text-[0.58rem] uppercase tracking-[0.16em] text-white/85 backdrop-blur-sm">
                    Ver caso
                  </span>
                </div>

                <div className="mt-4 border-b border-white/10 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-[clamp(1.4rem,2.2vw,2rem)] font-bold leading-[1.05] text-white [font-family:var(--font-helvetica-neue)]">
                      {project.title}
                    </h2>
                    <ArrowUpRight className="mt-1 size-5 shrink-0 text-white/65 transition-colors duration-200 group-hover:text-[#f7b7ff]" />
                  </div>
                  <p className="mt-1 text-[0.66rem] uppercase tracking-[0.17em] text-white/45">
                    {project.category} / {project.year}
                  </p>
                  <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-white/72">
                    {getProjectEditorialSubtitle(project.description)}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
