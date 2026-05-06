import Link from "next/link";
import { notFound } from "next/navigation";

const titles: Record<string, string> = {
  "el-kiosco": "El Kiosco",
  branding: "Branding",
  videos: "Videos",
  freelance: "Trabajos freelance",
  fotografia: "Fotografia",
  direccion: "Direccion",
};

type PageProps = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const title = titles[slug];
  if (!title) notFound();

  return (
    <div className="min-h-screen bg-white px-6 py-16 text-neutral-900 md:px-10">
      <Link
        href="/#proyectos"
        className="text-sm uppercase text-teal-600 hover:underline"
      >
        ← Volver a casos
      </Link>
      <h1 className="mt-8 text-4xl font-black uppercase md:text-6xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl font-medium text-neutral-600">
        Este caso todavia esta en construccion. Si quieres ver proyectos
        completos con contexto y decisiones, revisa la seccion Work.
      </p>
    </div>
  );
}
