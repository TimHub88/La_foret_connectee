"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "ENSTIB - École du Bois",
    category: "Formation",
    description: "École Nationale Supérieure des Technologies et Industries du Bois (Épinal)",
    potential: true,
  },
  {
    name: "ONF Vosges",
    category: "Forestier",
    description: "Office National des Forêts - Gestion forestière durable",
    potential: true,
  },
  {
    name: "Menuiserie Maire",
    category: "Artisan",
    description: "Menuiserie d'agencement (Neufchâteau)",
    potential: true,
  },
  {
    name: "Fibois Grand Est",
    category: "Interprofession",
    description: "Association forêt-bois Grand Est",
    potential: true,
  },
  {
    name: "Parc Naturel Régional des Ballons des Vosges",
    category: "Territoire",
    description: "Protection et valorisation du territoire vosgien",
    potential: true,
  },
  {
    name: "Chambre de Métiers et de l'Artisanat Grand Est",
    category: "Institutionnel",
    description: "Soutien aux artisans locaux",
    potential: true,
  },
  {
    name: "Communes Forestières des Vosges",
    category: "Institutionnel",
    description: "Représentation des communes forestières",
    potential: true,
  },
  {
    name: "Coopérative Forestière Lorraine Grand Est",
    category: "Forestier",
    description: "Regroupement de propriétaires forestiers",
    potential: true,
  },
];

export default function Partners() {
  return (
    <section className="py-20 px-4 bg-white" id="partners">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sapin mb-4">
            Partenaires Potentiels
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Un réseau d'acteurs locaux qui pourraient s'engager pour la valorisation du bois vosgien
          </p>
          <p className="text-sm text-bois mt-2 italic">
            (Liste indicative - aucun partenariat n'est actuellement formalisé)
          </p>
        </motion.div>

        {/* Partners grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-casse rounded-xl p-6 hover:shadow-lg transition-shadow relative"
            >
              {partner.potential && (
                <div className="absolute top-2 right-2">
                  <span className="text-xs bg-dore/20 text-dore px-2 py-1 rounded-full font-semibold">
                    Potentiel
                  </span>
                </div>
              )}
              <div className="mb-2">
                <span className="text-xs font-semibold text-sapin/70 uppercase tracking-wider">
                  {partner.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-sapin mb-2">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-700">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
