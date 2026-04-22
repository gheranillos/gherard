"use client";

type Review = {
  quote: string;
  name: string;
  role: string;
  seed: string;
};

const leftColumnReviews: Review[] = [
  {
    quote:
      "Gherard entendió desde el principio la vibra que quería para mi marca. El resultado fue exactamente lo que tenía en la cabeza pero mejor ejecutado.",
    name: "Valentina M.",
    role: "Fundadora · El Kiosco",
    seed: "valentina",
  },
  {
    quote:
      "Trabajo limpio, criterio claro y entrega rápida. Sabe lo que hace y se nota que le importa el resultado final.",
    name: "Lucía F.",
    role: "Diseñadora · Freelance",
    seed: "lucia",
  },
  {
    quote:
      "Muy buena comunicación durante todo el proceso. Entrega prolija y con detalles que no pedí pero que hacen la diferencia.",
    name: "Sofía B.",
    role: "Content Creator",
    seed: "sofia",
  },
];

const rightColumnReviews: Review[] = [
  {
    quote:
      "La edición del video para el lanzamiento superó todas las expectativas. Ritmo, estética y mensaje alineados perfectamente.",
    name: "Matías R.",
    role: "Director Creativo",
    seed: "matias",
  },
  {
    quote:
      "El branding que desarrolló para nuestro proyecto tiene identidad real. No es solo bonito, comunica algo.",
    name: "Andrés C.",
    role: "Emprendedor",
    seed: "andres",
  },
  {
    quote:
      "Le mandé referencias sueltas y supo armar algo coherente con la estética que buscaba. Recomendado 100%.",
    name: "Tomás V.",
    role: "Músico · Productor",
    seed: "tomas",
  },
];

function ReviewCard({ quote, name, role, seed }: Review) {
  return (
    <article className="cursor-default rounded-[20px] border border-[#222222] bg-[#161616] p-8 transition-colors duration-300 hover:border-[#444444] md:px-[2.2rem] md:py-8">
      <div className="mb-[1.2rem] text-[0.9rem] tracking-[0.08em] text-[#d9ff3f]">★★★★★</div>
      <p className="mb-[1.8rem] text-[0.98rem] italic leading-[1.75] text-[#cccccc]">"{quote}"</p>
      <div className="flex items-center gap-[0.9rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${seed}`}
          alt={name}
          className="h-11 w-11 rounded-full bg-[#2a2a2a]"
          loading="lazy"
        />
        <div>
          <p className="text-[0.95rem] font-bold text-white">{name}</p>
          <p className="mt-[0.1rem] text-[0.8rem] text-[#666666]">{role}</p>
        </div>
      </div>
    </article>
  );
}

export function ReviewsSection() {
  const handleContactScroll = () => {
    const contactTarget =
      document.querySelector("#contact") ?? document.querySelector("#contacto");
    contactTarget?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#0a0a0a] px-[5vw] py-32">
      <div className="mx-auto mb-20 max-w-[700px] text-center">
        <p className="text-xs uppercase tracking-[0.15em] text-[#d9ff3f]">REVIEWS</p>
        <h2 className="mt-4 text-[clamp(2rem,10vw,3rem)] font-extrabold leading-[0.95] text-white md:text-[clamp(2.8rem,5vw,5rem)]">
          Lo que dicen.
        </h2>
        <p className="mt-3 text-base text-[#888888]">Clientes y colaboradores con los que trabajé.</p>
      </div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          {leftColumnReviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
        <div className="flex flex-col gap-6 pt-0 md:pt-12">
          {rightColumnReviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-[1.1rem] text-white">¿Trabajamos juntos?</p>
        <button
          type="button"
          onClick={handleContactScroll}
          className="mt-[1.2rem] rounded-full bg-white px-10 py-[0.9rem] font-bold text-[#0a0a0a] transition-colors duration-300 hover:bg-[#d9ff3f] hover:text-white"
        >
          Hablemos
        </button>
      </div>
    </section>
  );
}
