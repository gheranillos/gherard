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
    category: "Proyecto propio / Cultura urbana",
    year: "2024",
    client: "El Kiosco",
    role: "Direccion creativa y negocio",
    description:
      "El Kiosco es mi prueba real: una marca propia donde cada decision visual responde a negocio, comunidad y posicionamiento.",
    longDescription:
      "El Kiosco no es un ejercicio de portafolio. Es un proyecto vivo donde construyo marca, contenido y producto con foco comercial. Defini el sistema visual completo, la direccion creativa y la estrategia de comunicacion para conectar con cultura urbana latina y convertir esa energia en una marca consistente.",
    tags: ["Branding", "Dirección de Arte", "Contenido", "Identidad Visual"],
    coverImage: "/images/projects/coverkiosco.webp",
    images: [
      "/images/projects/kiosco1.jpg",
      "https://youtu.be/ItFnhcX-3Us",
      "/images/projects/kiosco2.jpg",
      "https://youtu.be/w9xrjCrzWKo",
      "/images/projects/kiosco3.jpg",
      "https://youtube.com/shorts/6pKUAn1O2_Y?feature=share",
      "/images/projects/kiosco4.jpg",
      "https://youtube.com/shorts/2Q0CYNURF7M?feature=share",
      "/images/projects/kiosco5.jpg",
      "https://youtube.com/shorts/91pYvwxr9J0?feature=share",
      "https://youtu.be/qhkgym3-Ik8",
    ],
    accentColor: "#f7b7ff",
  },
  {
    slug: "mtb-caracas",
    title: "Mtb caracas",
    category: "Contenido / Edicion de video",
    year: "2024 - en curso",
    client: "Mtb Caracas",
    role: "Edicion y direccion de contenido",
    description:
      "Canal con volumen alto de contenido donde el foco es retencion, narrativa clara y consistencia visual en cada entrega.",
    longDescription:
      "En MTB Caracas no se trata solo de cortar videos: se trata de sostener una linea editorial que haga crecer audiencia y marca. Ordeno material, defino ritmo, pulso narrativa y entrego piezas pensadas para mantener atencion y reforzar identidad en cada publicacion.",
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
    category: "Branding y direccion visual",
    year: "2025",
    client: "Branding",
    role: "Direccion creativa y diseno",
    description:
      "Sistema visual para un club en crecimiento que necesitaba verse a la altura de su ambicion y propuesta comercial.",
    longDescription:
      "Padel Cafe necesitaba pasar de idea prometedora a marca clara y confiable. Ordene identidad, tono visual y aplicaciones clave para que cada punto de contacto transmitiera criterio, energia y una propuesta consistente para su publico.",
    tags: ["Branding", "direccion creativa", "Diseño"],
    coverImage: "/images/projects/coverpadelcafe.webp",
    images: [
      "/images/projects/padel 1.png",
      "/images/projects/padel 3.png",
      "/images/projects/padel 4.png",
      "/images/projects/padel 5.png",
      "/images/projects/padel 6.png",
      "/images/projects/padel 7.png",
      "/images/projects/padel 8.png",
      "/images/projects/padel 9.png",
      "/images/projects/padel 10.png",
    ],
    accentColor: "#f7b7ff",
  },
  {
    slug: "freelance",
    title: "Trabajos Freelance",
    category: "Contenido y direccion creativa",
    year: "2024-2026",
    client: "Clientes Independientes",
    role: "Direccion, diseno y produccion",
    description:
      "Seleccion de proyectos para clientes que necesitaban decisiones claras, ejecucion rapida y coherencia visual en serio.",
    longDescription:
      "Este bloque resume trabajos para marcas, emprendedores y equipos creativos que querian subir su nivel visual sin perder tiempo. Cada pieza parte de contexto real: objetivo, publico y posicionamiento. No es producir por producir, es construir imagen que ayude a vender mejor.",
    tags: ["Freelance", "Colaboración", "Branding", "Diseño"],
    coverImage: "/images/projects/coverfreelancer.webp",
    images: [
      "/images/projects/free1.webp",
      "https://youtube.com/shorts/8_0muzhg-74?feature=share",
      "/images/projects/free2.webp",
      "https://youtube.com/shorts/ZDx5rVrPF00?feature=share",
      "/images/projects/free3.webp",
      "https://youtube.com/shorts/GcEDEXxUqHM?feature=share",
      "/images/projects/free4.webp",
      "https://youtu.be/ItFnhcX-3Us",
      "/images/projects/free5.webp",
      "https://youtu.be/5HJHZmgh3ho",
      "/images/projects/free6.webp",
      "https://youtube.com/shorts/kDNuenE-J6A?feature=share",
      "https://www.youtube.com/watch?v=1n8G_QSA8-Q&list=RD1n8G_QSA8-Q&start_radio=1",
    ],
    accentColor: "#f7b7ff",
  },
  {
    slug: "naponino",
    title: "Naponino",
    category: "Branding",
    year: "2025",
    client: "Naponino",
    role: "Diseno y direccion",
    description:
      "Branding pensado para diferenciar la marca con claridad y darle una base visual lista para escalar.",
    longDescription:
      "Con Naponino trabajamos una identidad concreta, sin ruido ni adornos vacios. Se definio direccion visual, sistema grafico y aplicaciones clave para que la marca comunicara valor de forma consistente desde el primer contacto.",
    tags: ["Diseño", "Dirección"],
    coverImage: "/images/projects/covernapo.webp",
    images: [
      "/images/projects/napo1.webp",
      "/images/projects/napo2.webp",
      "/images/projects/napo3.webp",
      "/images/projects/napo4.webp",
      "/images/projects/napo5.webp",
      "/images/projects/napo6.webp",
      "/images/projects/napo7.webp",
      "/images/projects/napo8.webp",
    ],
    accentColor: "#f7b7ff",
  },
  {
    slug: "dtf-lecheria",
    title: "DTF Lecheria",
    category: "Branding",
    year: "2026",
    client: "Naponino",
    role: "Diseno y direccion",
    description:
      "Identidad creada para reforzar presencia local y convertir una propuesta tecnica en una marca facil de reconocer.",
    longDescription:
      "DTF Lecheria necesitaba verse tan solida como su servicio. Definimos un lenguaje visual directo y aplicable a digital y fisico para que cada pieza hablara el mismo idioma y transmitiera confianza comercial.",
    tags: ["Diseño", "Dirección"],
    coverImage: "/images/projects/coverdtf.webp",
    images: [
      "/images/projects/dtf1.webp",
      "/images/projects/dtf2.webp",
      "/images/projects/dtf3.webp",
      "/images/projects/dtf4.webp",
      "/images/projects/dtf5.webp",
      "/images/projects/dtf6.webp",
    ],
    accentColor: "#f7b7ff",
  },
];

/** Orden en `/work`: ritmo editorial (no altera rutas de los proyectos). */
export const WORK_PAGE_PROJECT_SLUGS = [
  "el-kiosco",
  "mtb-caracas",
  "padelcafe",
  "freelance",
  "naponino",
  "dtf-lecheria",
] as const;

export function projectsInWorkGridOrder(all: Project[] = projects): Project[] {
  const bySlug = new Map(all.map((p) => [p.slug, p]));
  return WORK_PAGE_PROJECT_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (p): p is Project => Boolean(p),
  );
}

function normalizeTag(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function projectMatchesAnyKeyword(project: Project, keywords: readonly string[]): boolean {
  const normalizedKeywords = keywords.map(normalizeTag);
  const normalizedTags = project.tags.map(normalizeTag);
  return normalizedTags.some((tag) =>
    normalizedKeywords.some((keyword) => tag.includes(keyword)),
  );
}

export function getBrandingProjects(all: Project[] = projects): Project[] {
  const brandingKeywords = [
    "branding",
    "diseno",
    "identidad",
    "direccion de arte",
    "direccion creativa",
  ] as const;
  return projectsInWorkGridOrder(all).filter((project) =>
    projectMatchesAnyKeyword(project, brandingKeywords),
  );
}

export function getVideoProjects(all: Project[] = projects): Project[] {
  const videoKeywords = [
    "edicion",
    "youtube",
    "video",
    "contenido",
    "produccion",
    "audiovisual",
  ] as const;
  return projectsInWorkGridOrder(all).filter(
    (project) =>
      project.slug === "freelance" || projectMatchesAnyKeyword(project, videoKeywords),
  );
}
