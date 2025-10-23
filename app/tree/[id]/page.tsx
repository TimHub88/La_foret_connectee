import treesData from "@/data/trees.json";
import { FaMapMarkerAlt, FaCalendar, FaUser, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return treesData.map((tree) => ({
    id: tree.id,
  }));
}

export default function TreePage({ params }: { params: { id: string } }) {
  const tree = treesData.find((t) => t.id === params.id);

  if (!tree) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-casse py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sapin hover:text-bois transition-colors mb-8 font-semibold"
        >
          <FaArrowLeft />
          Retour à l'accueil
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-sapin mb-3">
              {tree.species}
            </h1>
            <p className="text-2xl text-dore font-semibold">{tree.id}</p>
          </div>

          {/* Info cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4 bg-casse p-6 rounded-xl">
              <FaMapMarkerAlt className="text-sapin text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-sapin mb-2 text-lg">Origine</h3>
                <p className="text-gray-700 mb-1">{tree.origin}</p>
                <p className="text-sm text-gray-500">{tree.coordinates}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-casse p-6 rounded-xl">
              <FaCalendar className="text-sapin text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-sapin mb-2 text-lg">
                  Date d'inventaire
                </h3>
                <p className="text-gray-700">
                  {new Date(tree.date_inventory).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-casse p-6 rounded-xl md:col-span-2">
              <FaUser className="text-sapin text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-sapin mb-2 text-lg">
                  Artisan responsable
                </h3>
                <p className="text-gray-700">{tree.artisan}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-sapin mb-4">À propos</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {tree.description}
            </p>
          </div>

          {/* Products */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-sapin mb-4">
              Produits fabriqués
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {tree.products.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-sapin/10 to-dore/10 p-5 rounded-lg border-l-4 border-sapin"
                >
                  <p className="text-gray-800 font-semibold">{product}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholders */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video bg-gradient-to-br from-sapin to-sapin/70 rounded-xl flex flex-col items-center justify-center p-6 text-center">
              <p className="text-casse font-bold text-xl mb-2">
                Photo : Forêt d'origine
              </p>
              <p className="text-casse/80 text-sm">{tree.origin}</p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-bois to-bois/70 rounded-xl flex flex-col items-center justify-center p-6 text-center">
              <p className="text-casse font-bold text-xl mb-2">
                Photo : Produit fini
              </p>
              <p className="text-casse/80 text-sm">Transformation artisanale</p>
            </div>
          </div>
        </div>

        {/* Trust badge */}
        <div className="bg-sapin text-casse rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-3">
            Traçabilité certifiée 🌲
          </h3>
          <p className="opacity-90">
            Cette traçabilité garantit l'origine locale et durable de votre
            produit artisanal vosgien. Chaque étape du parcours de cet arbre a
            été documentée pour assurer transparence et qualité.
          </p>
        </div>
      </div>
    </main>
  );
}

