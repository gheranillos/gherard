"use client";

import { useRouter } from "next/navigation";

import {
  CircularGallery,
  type GalleryItem,
} from "../components/CircularGallery";

const portfolioItems: GalleryItem[] = [
  {
    image: "/images/projects/el-kiosco.jpg",
    text: "EL KIOSCO",
    href: "/projects/el-kiosco",
  },
  {
    image: "/images/projects/branding.jpg",
    text: "BRANDING",
    href: "/projects/branding",
  },
  {
    image: "/images/projects/videos.jpg",
    text: "VIDEOS",
    href: "/projects/videos",
  },
  {
    image: "/images/projects/freelance.jpg",
    text: "TRABAJOS FREELANCE",
    href: "/projects/freelance",
  },
  {
    image: "/images/projects/fotografia.jpg",
    text: "FOTOGRAFÍA",
    href: "/projects/fotografia",
  },
  {
    image: "/images/projects/direccion.jpg",
    text: "DIRECCIÓN",
    href: "/projects/direccion",
  },
];

export function SelectedWork() {
  const router = useRouter();

  return (
    <section id="proyectos" className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
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
      </div>

      <div
        className="mt-10 w-full bg-white"
        style={{ height: "min(70vh, 600px)", minHeight: 420, position: "relative" }}
      >
        <CircularGallery
          items={portfolioItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.06}
          scrollSpeed={1.1}
          scrollEase={0.04}
          onItemNavigate={(href) => router.push(href)}
        />
      </div>
    </section>
  );
}
