"use client";

import { FaGithub, FaTree, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sapin text-casse py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaTree className="text-2xl text-dore" />
              <h3 className="text-xl font-bold">La Forêt Connectée</h3>
            </div>
            <p className="text-casse/80 text-sm leading-relaxed">
              Proposition concrète de traçabilité et valorisation du bois vosgien.
              Connecter la forêt aux artisans, les artisans aux consommateurs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#hero"
                  className="text-casse/80 hover:text-dore transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="text-casse/80 hover:text-dore transition-colors"
                >
                  Le Parcours
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-casse/80 hover:text-dore transition-colors"
                >
                  Impact Potentiel
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-casse/80 hover:text-dore transition-colors"
                >
                  Comment ça marche
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-casse/80 hover:text-dore transition-colors"
                >
                  Notre Impact
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-casse/80 hover:text-dore transition-colors"
                >
                  Partenaires
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:contact@vosjinnove.fr"
                className="flex items-center gap-2 text-casse/80 hover:text-dore transition-colors"
              >
                <FaEnvelope />
                contact@vosjinnove.fr
              </a>
              <a
                href="https://github.com/votre-compte/la-foret-connectee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-casse/80 hover:text-dore transition-colors"
              >
                <FaGithub />
                Voir le projet sur GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-casse/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-casse/70">
            <p>© 2025 La Forêt Connectée. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-dore transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-dore transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-xs text-casse/60">
            <p>
              Projet prototype - Images par{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-dore transition-colors"
              >
                Unsplash
              </a>
            </p>
            <p className="mt-2">
              Développé avec Next.js, Tailwind CSS et Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

