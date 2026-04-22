import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 text-neutral-900 md:px-10">
      <Link
        href="/"
        className="text-sm uppercase tracking-widest text-teal-600 hover:underline"
      >
        ← Volver al inicio
      </Link>
      <h1 className="mt-8 text-4xl font-black uppercase tracking-tight md:text-6xl">
        Shop
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Esta pagina de tienda queda lista para que agregues tus productos y el
        flujo de compra cuando quieras.
      </p>
    </div>
  );
}
