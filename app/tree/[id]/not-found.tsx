import Link from "next/link";
import { FaTree } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-casse flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <FaTree className="text-6xl text-sapin mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-sapin mb-4">
          Arbre non trouvé
        </h1>
        <p className="text-gray-700 mb-8">
          Désolé, cet identifiant d'arbre n'existe pas dans notre système de
          traçabilité.
        </p>
        <Link
          href="/"
          className="inline-block bg-sapin text-casse px-8 py-4 rounded-lg font-semibold hover:bg-sapin/90 transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

