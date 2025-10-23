"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const partners = [
  {
    name: "École d'Art d'Épinal",
    category: "Formation",
    description: "Partenaire formation et design",
  },
  {
    name: "Imprimerie Vosgienne",
    category: "Technique",
    description: "Impression des QR codes",
  },
  {
    name: "Menuiserie Dubois",
    category: "Artisan",
    description: "Transformation du bois",
  },
  {
    name: "Atelier Martin",
    category: "Artisan",
    description: "Ébénisterie d'art",
  },
  {
    name: "ONF Vosges",
    category: "Forestier",
    description: "Gestion forestière",
  },
  {
    name: "Coopérative Locale",
    category: "Distribution",
    description: "Vente et distribution",
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
            Nos Partenaires
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Un réseau local engagé pour la valorisation du bois vosgien
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
              className="bg-casse rounded-lg p-6 hover:shadow-lg transition-shadow border-l-4 border-sapin"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-sapin">{partner.name}</h3>
                <span className="text-xs bg-dore text-white px-2 py-1 rounded-full">
                  {partner.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{partner.description}</p>
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
            Rejoignez l'initiative
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Vous êtes artisan, forestier, ou simplement intéressé par notre
            démarche ? Contactez-nous pour en savoir plus.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-dore text-sapin px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dore/90 transition-all hover:scale-105 shadow-lg"
            >
              Participer au projet
            </button>
            <a
              href="mailto:contact@foret-connectee.fr"
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
            className="fixed inset-0 bg-black/70 z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl z-50 p-8 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-sapin/10 hover:bg-sapin/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Fermer"
            >
              <FaTimes className="text-sapin text-xl" />
            </button>

            <h3 className="text-2xl md:text-3xl font-bold text-sapin mb-6">
              Participer au projet
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
              Cette démo n'envoie pas réellement de formulaire. En production,
              un email serait envoyé.
            </p>
          </motion.div>
        </>
      )}
    </section>
  );
}

