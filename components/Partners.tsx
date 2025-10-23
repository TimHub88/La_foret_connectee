"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

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
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, just show an alert
    alert(
      "Merci pour votre intérêt ! Cette démo n'envoie pas réellement le formulaire. En production, ceci enverrait vos informations."
    );
    setShowForm(false);
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border-l-4 border-sapin relative overflow-hidden"
            >
              {partner.potential && (
                <div className="absolute top-2 right-2">
                  <span className="text-xs bg-dore/20 text-dore px-2 py-1 rounded-full font-semibold">
                    Potentiel
                  </span>
                </div>
              )}
              <div className="mb-3">
                <h3 className="text-lg font-bold text-sapin pr-16">{partner.name}</h3>
                <span className="inline-block text-xs bg-sapin/10 text-sapin px-2 py-1 rounded-full mt-2">
                  {partner.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-sapin to-sapin/80 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez la proposition
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Vous êtes artisan, forestier, élu local ou simplement intéressé par cette
            proposition concrète ? Partagez votre intérêt et vos idées.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-dore text-sapin px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dore/90 transition-all hover:scale-105 shadow-lg"
            >
              Manifester mon intérêt
            </button>
            <a
              href="mailto:contact@vosjinnove.fr"
              className="bg-white text-sapin px-8 py-4 rounded-lg font-semibold text-lg hover:bg-casse transition-all hover:scale-105 shadow-lg"
            >
              Nous contacter
            </a>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowForm(false)}
            className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative"
            >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-sapin/10 hover:bg-sapin/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Fermer"
            >
              <FaTimes className="text-sapin text-xl" />
            </button>

            <h3 className="text-2xl md:text-3xl font-bold text-sapin mb-6">
              Manifester votre intérêt
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sapin focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sapin focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Organisation (optionnel)
                </label>
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sapin focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sapin focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sapin text-casse py-4 rounded-lg font-semibold text-lg hover:bg-sapin/90 transition-colors"
              >
                Envoyer
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              Vos coordonnées seront utilisées uniquement pour échanger sur cette proposition.
              Cette version de démonstration n'envoie pas réellement les données.
            </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </section>
  );
}

