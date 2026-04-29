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
    coverImage: "/images/projects/coverkiosco.webp",
    images: [
      "/projects/el-kiosco/01.jpg",
      "/projects/el-kiosco/02.jpg",
      "/projects/el-kiosco/03.jpg",
    ],
    accentColor: "#d9ff3f",
  },
  {
    slug: "mtb-caracas",
    title: "Mtb caracas",
    category: "Canal de youtube | Edicion",
    year: "2024 - en curso",
    client: "Mtb Caracas",
    role: "Editor de videos",
    description:
      "Diseño de marcas, sistemas visuales, piezas gráficas y conceptos que buscan verse sólidos, actuales y con personalidad.",
    longDescription:
      "Me encargo de editar, filtrar y gestionar el contenido del canal de youtube. Buscando mostrar el MTB en Venezuela y Caracas.",
    tags: ["Youtube", "Edicion", "Dirección"],
    coverImage: "/images/projects/covermtb.webp",
    images: [
      "https://www.youtube.com/watch?v=u6CZna11jGE&t=885s",
      "https://www.youtube.com/watch?v=LbnLk-tDUM4&t=4s",
      "https://www.youtube.com/watch?v=iwsh9kQaL-A",
      "https://www.youtube.com/watch?v=9JdqWfUkwp0&t=1424s",
      "https://www.youtube.com/watch?v=Ez-fszUFfqk&t=5s",
    ],
    accentColor: "#f7b7ff",
  },
  {
    slug: "padelcafe",
    title: "Padel Cafe",
    category: "Edición y Contenido",
    year: "2024",
    client: "Contenido para Redes",
    role: "Editor / Dirección Visual",
    description:
      "Piezas para redes, campañas, promos y contenido audiovisual pensado para retener, comunicar y elevar la imagen del proyecto.",
    longDescription:
      "Edición de video con criterio narrativo y estética cuidada. Desde reels y shorts hasta piezas de campaña. Cada video tiene ritmo, propósito y coherencia visual con la marca que lo respalda.",
    tags: ["Edición", "Redes", "Narrativa", "Campaña"],
    coverImage: "/images/projects/coverpadelcafe.webp",
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
    coverImage: "/images/projects/coverfreelancer.webp",
    images: ["/projects/freelance/01.jpg", "/projects/freelance/02.jpg"],
    accentColor: "#f7b7ff",
  },
];
