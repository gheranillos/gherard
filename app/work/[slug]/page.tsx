import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import ProjectImage from "@/src/components/ProjectImage";
import { projects } from "@/src/data/projects";

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.replace("www.", "");
    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      const videoId = parsed.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      if (parsed.pathname.startsWith("/embed/")) return url;
    }
    if (hostname === "youtu.be") {
      const videoId = parsed.pathname.slice(1);
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch {
    return null;
  }
  return null;
}

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
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#f7b7ff] selection:text-black">
      <main className="bg-white pt-[108px]">
        <section className="mx-auto w-full max-w-[1200px] px-[5vw] pb-10 pt-8">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-black/35">
            Work / Project
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <h1 className="text-[clamp(2.6rem,8vw,6.8rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-[#0a0a0a]">
                {project.title}
              </h1>
              <p className="mt-4 max-w-[620px] text-[1.02rem] leading-[1.75] text-black/70">
                {project.description}
              </p>
            </div>
            <div className="grid gap-4 rounded-2xl border border-black/10 bg-[#f7f7f7] p-6">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.22em] text-black/45">Cliente</p>
                <p className="mt-1 text-[0.95rem] font-semibold text-black">{project.client}</p>
              </div>
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.22em] text-black/45">Rol</p>
                <p className="mt-1 text-[0.95rem] font-semibold text-black">{project.role}</p>
              </div>
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.22em] text-black/45">Año</p>
                <p className="mt-1 text-[0.95rem] font-semibold text-black">{project.year}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-[70vh] w-full overflow-hidden bg-[#111]">
          <ProjectImage
            src={project.coverImage}
            alt={project.title}
            slug={project.slug}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="absolute bottom-0 left-0 z-10 px-[5vw] pb-12">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1200px] gap-10 px-[5vw] py-20 md:grid-cols-[60%_40%]">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#f7b7ff]">
              Sobre el proyecto
            </p>
            <p className="mt-6 max-w-[620px] text-[clamp(1rem,1.5vw,1.15rem)] leading-[1.85] text-[#333333]">
              {project.longDescription}
            </p>
            <p className="mt-7 max-w-[620px] text-[0.98rem] leading-[1.85] text-black/65">
              Cada entrega se trabaja desde concepto, sistema visual y ejecucion para
              mantener una narrativa consistente entre piezas graficas, contenido y
              presencia digital.
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
                      className="rounded-full bg-[#161616] px-3 py-[0.3rem] text-[0.72rem] font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/#contacto"
              className="mt-6 inline-flex w-fit items-center rounded-full bg-[#f7b7ff] px-8 py-3.5 font-bold text-[#161616] transition-colors duration-200 hover:bg-[#161616] hover:text-[#f7b7ff]"
            >
              Trabajemos juntos &rarr;
            </Link>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-[5vw] pb-24 pt-6">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#f7b7ff]">
            Imágenes y videos del proyecto
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.images.map((media, index) => {
              const youtubeEmbed = getYouTubeEmbedUrl(media);

              return (
                <div
                  key={`${project.slug}-media-${index}`}
                  className={`${index === 0 ? "md:col-span-2" : ""} group overflow-hidden rounded-md bg-neutral-100`}
                >
                  {youtubeEmbed ? (
                    <iframe
                      src={youtubeEmbed}
                      title={`${project.title} video ${index + 1}`}
                      className="aspect-[16/9] w-full"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <ProjectImage
                      src={media}
                      alt={`${project.title} ${index + 1}`}
                      slug={project.slug}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.02]"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <Link
          href={`/work/${nextProject.slug}`}
          className="group block w-full bg-[#161616] px-[5vw] py-20 transition-colors duration-200"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
            Siguiente proyecto
          </p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase text-white transition-colors duration-200 group-hover:text-[#f7b7ff]">
              {nextProject.title}
            </h2>
            <ArrowUpRight className="size-8 text-[#f7b7ff]" />
          </div>
        </Link>
      </main>
    </div>
  );
}
