"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaTools, FaGraduationCap } from "react-icons/fa";

export default function ArtisanProfile() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-casse" id="artisan-profile">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sapin mb-4">
            Portrait d'un Jeune Artisan Vosgien
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez comment cette initiative pourrait bénéficier aux artisans de demain
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto"
        >
          <div className="md:flex">
            {/* Photo et informations de base */}
            <div className="md:w-1/3 bg-gradient-to-br from-sapin to-sapin/80 p-8 text-white flex flex-col items-center justify-center">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGColW9b8EAKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714129578140?e=1762992000&v=beta&t=NzGtD1vA_RSPlhNQJySHoYU_-IbjxEvm2THMV0RBo9M"
                  alt="Hugo Nunge-Thouvenin"
                  className="w-40 h-40 rounded-full object-cover border-4 border-dore shadow-lg"
                />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-center">
                Hugo Nunge-Thouvenin
              </h3>
              <p className="text-dore font-semibold mb-4 text-center">
                Apprenti Technicien Menuisier
              </p>
              <div className="w-full space-y-3 mt-4">
                <a
                  href="mailto:nunge.thouv@gmail.com"
                  className="flex items-center gap-2 text-casse/90 hover:text-dore transition-colors justify-center"
                >
                  <FaEnvelope />
                  <span className="text-sm">nunge.thouv@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hugo-nunge-thouvenin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-casse/90 hover:text-dore transition-colors justify-center"
                >
                  <FaLinkedin />
                  <span className="text-sm">Profil LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Contenu principal */}
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-sapin mb-3 flex items-center gap-2">
                  <FaGraduationCap className="text-dore" />
                  Parcours
                </h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-dore rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Menuiserie Maire</p>
                      <p className="text-sm text-gray-600">
                        Apprenti technicien menuisier (2022 - aujourd'hui)
                      </p>
                      <p className="text-sm mt-1">
                        Neufchâteau · Fabrication de mobilier d'agencement et menuiseries bois
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-dore rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">ENSTIB, Épinal</p>
                      <p className="text-sm text-gray-600">
                        Licence pro. Bois & Ameublement (2024-2025)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-dore rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">BTS Développement et Réalisation Bois</p>
                      <p className="text-sm text-gray-600">AFPIA Est-Nord (2022-2024)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-sapin mb-3 flex items-center gap-2">
                  <FaTools className="text-dore" />
                  Créations Artisanales Sur Mesure
                </h4>
                <p className="text-gray-700 mb-3">
                  En parallèle de son activité chez Menuiserie Maire, Hugo réalise des{" "}
                  <strong className="text-sapin">créations sur mesure en tant qu'indépendant</strong>{" "}
                  destinées aux particuliers :
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-sapin/10 text-sapin rounded-full text-sm font-medium">
                    Toupies en bois
                  </span>
                  <span className="px-3 py-1 bg-sapin/10 text-sapin rounded-full text-sm font-medium">
                    Plateaux personnalisés
                  </span>
                  <span className="px-3 py-1 bg-sapin/10 text-sapin rounded-full text-sm font-medium">
                    Objets décoratifs
                  </span>
                </div>
                <p className="text-sm text-gray-600 italic">
                  Contactez-le pour vos projets de menuiserie sur mesure !
                </p>
              </div>

              {/* Comment il pourrait participer */}
              <div className="bg-gradient-to-br from-dore/10 to-sapin/10 rounded-xl p-6 border-l-4 border-sapin">
                <h4 className="text-lg font-bold text-sapin mb-3">
                  💡 Comment Hugo pourrait s'intégrer à la démarche
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-dore mt-1">▸</span>
                    <span>
                      <strong>Tracer ses créations :</strong> Chaque toupie, plateau ou meuble qu'il fabrique 
                      pourrait porter un identifiant relié au bois d'origine
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dore mt-1">▸</span>
                    <span>
                      <strong>Valoriser son savoir-faire :</strong> Les clients pourraient découvrir son 
                      parcours, sa formation à l'ENSTIB et ses compétences
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dore mt-1">▸</span>
                    <span>
                      <strong>Attirer une clientèle engagée :</strong> Les particuliers recherchant des 
                      produits locaux et traçables seraient naturellement attirés
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dore mt-1">▸</span>
                    <span>
                      <strong>Ambassadeur jeune génération :</strong> En tant que jeune artisan en formation, 
                      il représente l'avenir de l'artisanat vosgien
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bannière call-to-action */}
          <div className="bg-sapin text-casse p-6 text-center">
            <p className="text-lg">
              <strong>Hugo</strong> est un exemple concret d'artisan qui pourrait bénéficier 
              de cette initiative de traçabilité et de valorisation du bois vosgien.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

