import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import ProjectImage from "@/src/components/ProjectImage";
import { projects } from "@/src/data/projects";

const navLink =
  "rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10 hover:text-white transition-opacity duration-200 hover:opacity-50";

const navLinkActive =
  "rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#f7b7ff] transition-opacity duration-200 hover:opacity-50";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function WorkProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length]!;

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#d9ff3f] selection:text-black">
      <header className="pointer-events-none fixed left-0 right-0 top-6 z-40 flex justify-center px-4">
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

      <main className="bg-white pt-[96px]">
        <section className="relative h-[70vh] w-full overflow-hidden bg-[#111]">
          <ProjectImage
            src={project.coverImage}
            alt={project.title}
            slug={project.slug}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
          <div className="absolute bottom-0 left-0 z-10 px-[4vw] pb-12">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              {project.category}
            </span>
            <h1 className="mt-3 text-[clamp(2.5rem,7vw,7rem)] font-black uppercase tracking-[-0.03em] leading-[0.92] text-white">
              {project.title}
            </h1>
            <p className="mt-2 text-[0.85rem] text-white/50">{project.year}</p>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1200px] gap-10 px-[5vw] py-20 md:grid-cols-[60%_40%]">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#d9ff3f]">
              Sobre el proyecto
            </p>
            <p className="mt-6 max-w-[620px] text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.8] text-[#333333]">
              {project.longDescription}
            </p>
          </div>

          <div className="flex flex-col">
            <div className="rounded-[20px] bg-[#f5f5f5] p-8">
              <div className="border-b border-black/10 pb-4">
                <p className="text-xs uppercase tracking-[0.16em] text-black/40">Categoría</p>
                <p className="mt-1 font-semibold text-black">{project.category}</p>
              </div>
              <div className="border-b border-black/10 py-4">
                <p className="text-xs uppercase tracking-[0.16em] text-black/40">Año</p>
                <p className="mt-1 font-semibold text-black">{project.year}</p>
              </div>
              <div className="pt-4">
                <p className="text-xs uppercase tracking-[0.16em] text-black/40">Tags</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.slug}-${tag}`}
                      className="rounded-full bg-[#0a0a0a] px-3 py-[0.3rem] text-[0.72rem] font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/#contacto"
              className="mt-6 inline-flex w-fit items-center rounded-full bg-[#d9ff3f] px-8 py-3.5 font-bold text-[#0a0a0a] transition-colors duration-200 hover:bg-[#0a0a0a] hover:text-[#d9ff3f]"
            >
              Trabajemos juntos &rarr;
            </Link>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-[5vw] pb-24 pt-8">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#d9ff3f]">
            Imágenes del proyecto
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.images.map((image, index) => (
              <div
                key={`${project.slug}-image-${index}`}
                className={`${index === 0 ? "md:col-span-2" : ""} group overflow-hidden rounded-xl bg-neutral-100`}
              >
                <ProjectImage
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  slug={project.slug}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </section>

        <Link
          href={`/work/${nextProject.slug}`}
          className="group block w-full bg-[#0a0a0a] px-[5vw] py-16 transition-colors duration-200"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
            Siguiente proyecto
          </p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase text-white transition-colors duration-200 group-hover:text-[#d9ff3f]">
              {nextProject.title}
            </h2>
            <ArrowUpRight className="size-8 text-[#d9ff3f]" />
          </div>
        </Link>
      </main>
    </div>
  );
}
