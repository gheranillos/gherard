import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getBrandingProjects } from "@/src/data/projects";

export default function BrandingPage() {
  const brandingProjects = getBrandingProjects();

  return (
    <div className="min-h-screen bg-[#0b0f14] text-neutral-100 selection:bg-[#f7b7ff] selection:text-black">
      <main className="mx-auto w-full max-w-[1680px] px-6 pb-14 pt-[120px] md:px-10">
        <header className="mb-10">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/45">Portfolio</p>
          <h1 className="mt-3 text-[clamp(2.2rem,5vw,4.2rem)] font-black uppercase tracking-[1.2px] text-white">
            Branding
          </h1>
          <p className="mt-3 max-w-[640px] text-sm uppercase tracking-[0.12em] text-white/55">
            Proyectos filtrados por tags de diseno y direccion creativa.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {brandingProjects.map((project) => (
            <article key={project.slug} className="group relative overflow-hidden bg-[#161616]">
              <Link href={`/work/${project.slug}`} className="block h-full w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="aspect-[16/11] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.85] via-black/10 to-transparent transition-colors duration-300 group-hover:from-black/90 group-hover:via-black/20" />
                <ArrowUpRight
                  className="absolute right-5 top-5 size-7 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ color: project.accentColor }}
                />
                <div className="absolute bottom-0 p-5 md:p-6">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h2 className="mt-3 text-[17px] font-extrabold uppercase tracking-[0.8px] text-white [font-family:CoolveticaBook]">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
                    {project.year}
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
