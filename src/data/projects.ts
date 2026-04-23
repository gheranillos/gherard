export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  description: string;
  longDescription: string;
  tags: string[];
  coverImage: string;
  images: string[];
  accentColor: string;
};

export const projects: Project[] = [
  {
    slug: "el-kiosco",
    title: "El Kiosco",
    category: "Proyecto Propio / Cultura Visual",
    year: "2024",
    client: "El Kiosco",
    role: "Dirección Creativa",
    description:
      "Marca y universo creativo donde mezclo ropa, audiovisual, storytelling, comunidad y dirección estética con una energía urbana marcada.",
    longDescription:
      "El Kiosco nació como un proyecto personal para explorar la intersección entre moda urbana, contenido visual y comunidad. Desarrollé la identidad completa: naming, sistema gráfico, paleta, dirección de arte y estrategia de contenido para redes. Cada pieza comunica una estética coherente y con personalidad propia.",
    tags: ["Branding", "Dirección de Arte", "Contenido", "Identidad Visual"],
    coverImage: "/projects/el-kiosco/cover.jpg",
    images: [
      "/projects/el-kiosco/01.jpg",
      "/projects/el-kiosco/02.jpg",
      "/projects/el-kiosco/03.jpg",
    ],
    accentColor: "#d9ff3f",
  },
  {
    slug: "branding",
    title: "Branding",
    category: "Identidad Visual",
    year: "2024",
    client: "Marcas y Emprendedores",
    role: "Brand Designer",
    description:
      "Diseño de marcas, sistemas visuales, piezas gráficas y conceptos que buscan verse sólidos, actuales y con personalidad.",
    longDescription:
      "Proyectos de branding para clientes y marcas propias. Desde el briefing hasta el manual de marca: logotipo, paleta, tipografía, aplicaciones y sistema gráfico completo. El objetivo siempre es que la marca se vea real, no genérica.",
    tags: ["Logotipo", "Sistema Visual", "Paleta", "Tipografía"],
    coverImage: "/projects/branding/cover.jpg",
    images: ["/projects/branding/01.jpg", "/projects/branding/02.jpg"],
    accentColor: "#f7b7ff",
  },
  {
    slug: "videos",
    title: "Videos",
    category: "Edición y Contenido",
    year: "2024",
    client: "Contenido para Redes",
    role: "Editor / Dirección Visual",
    description:
      "Piezas para redes, campañas, promos y contenido audiovisual pensado para retener, comunicar y elevar la imagen del proyecto.",
    longDescription:
      "Edición de video con criterio narrativo y estética cuidada. Desde reels y shorts hasta piezas de campaña. Cada video tiene ritmo, propósito y coherencia visual con la marca que lo respalda.",
    tags: ["Edición", "Redes", "Narrativa", "Campaña"],
    coverImage: "/projects/videos/cover.jpg",
    images: ["/projects/videos/01.jpg", "/projects/videos/02.jpg"],
    accentColor: "#d9ff3f",
  },
  {
    slug: "freelance",
    title: "Trabajos Freelance",
    category: "Clientes y Colaboraciones",
    year: "2023–2024",
    client: "Clientes Independientes",
    role: "Diseño y Producción",
    description:
      "Trabajos desarrollados para marcas y proyectos en áreas como contenido, visuales, branding y dirección creativa.",
    longDescription:
      "Colaboraciones con marcas, emprendedores y estudios creativos. Proyectos variados que van desde identidad visual hasta dirección de contenido, pasando por diseño gráfico y producción audiovisual.",
    tags: ["Freelance", "Colaboración", "Branding", "Diseño"],
    coverImage: "/projects/freelance/cover.jpg",
    images: ["/projects/freelance/01.jpg", "/projects/freelance/02.jpg"],
    accentColor: "#f7b7ff",
  },
];
