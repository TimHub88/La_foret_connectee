"use client";

import { motion } from "framer-motion";
import {
  FaLeaf,
  FaQrcode,
  FaIndustry,
  FaRecycle,
  FaSeedling,
} from "react-icons/fa";

const features = [
  {
    icon: FaLeaf,
    title: "Collecte Responsable",
    points: [
      "Respect des cycles naturels de la forêt",
      "Sélection rigoureuse des arbres à récolter",
      "Préservation de la biodiversité locale",
      "Certification de gestion durable",
    ],
  },
  {
    icon: FaQrcode,
    title: "Traçabilité Numérique",
    points: [
      "Identifiant unique pour chaque arbre",
      "Données enregistrées en temps réel",
      "Transparence totale du parcours",
      "Accès instantané à l'historique complet",
    ],
  },
  {
    icon: FaIndustry,
    title: "Transformation Locale",
    points: [
      "Réseau d'artisans vosgiens qualifiés",
      "Savoir-faire traditionnel préservé",
      "Création d'emplois dans la région",
      "Réduction de l'empreinte carbone",
    ],
  },
  {
    icon: FaRecycle,
    title: "Valorisation Complète",
    points: [
      "Aucun gaspillage de matière",
      "Utilisation de chaque partie de l'arbre",
      "Économie circulaire appliquée",
      "Sous-produits valorisés localement",
    ],
  },
  {
    icon: FaSeedling,
    title: "Bénéfices Écologiques",
    points: [
      "Programme de replantation actif",
      "Contribution à la séquestration du CO₂",
      "Maintien des écosystèmes forestiers",
      "Sensibilisation à l'environnement",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-casse to-white" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sapin mb-4">
            Comment ça fonctionnerait ?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Une proposition de système complet pour valoriser et tracer nos ressources
            forestières vosgiennes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-t-4 border-sapin"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-sapin to-sapin/80 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <feature.icon className="text-4xl text-casse" />
              </div>
              <h3 className="text-2xl font-bold text-sapin mb-5 leading-tight">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-dore mt-1 text-lg font-bold">▸</span>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-sapin text-casse rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Une proposition innovante et responsable
          </h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Ce système proposé combinerait technologies modernes et savoir-faire
            traditionnel pour offrir une traçabilité complète et valoriser le
            patrimoine forestier vosgien tout en soutenant l'économie locale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

