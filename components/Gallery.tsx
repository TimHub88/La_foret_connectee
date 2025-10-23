"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    title: "Forêt des Vosges",
    category: "Forêt",
  },
  {
    url: "https://images.unsplash.com/photo-1504624720567-64a41edd4930?w=800&q=80",
    title: "Artisan au travail",
    category: "Atelier",
  },
  {
    url: "https://images.unsplash.com/photo-1550355191-aa8a80b41353?w=800&q=80",
    title: "Bois travaillé",
    category: "Produit",
  },
  {
    url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
    title: "Ébénisterie",
    category: "Atelier",
  },
  {
    url: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80",
    title: "Produit fini",
    category: "Produit",
  },
  {
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    title: "Nature vosgienne",
    category: "Forêt",
  },
];

const testimonials = [
  {
    text: "Une démarche qui valorise notre savoir-faire et notre territoire. Je suis fier de participer à ce projet innovant.",
    author: "Sophie Martin",
    role: "Ébéniste - La Bresse",
  },
  {
    text: "La traçabilité apporte une vraie valeur ajoutée à mes créations. Mes clients apprécient de connaître l'origine du bois.",
    author: "Jean Fournier",
    role: "Sculpteur sur bois - Ventron",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("Tous");
  const categories = ["Tous", "Forêt", "Atelier", "Produit"];

  const filteredImages =
    filter === "Tous"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-casse to-white" id="gallery">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sapin mb-4">
            Galerie
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Découvrez en images notre démarche, de la forêt à l'atelier
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === category
                    ? "bg-sapin text-casse shadow-lg"
                    : "bg-white text-sapin hover:bg-sapin/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Image grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.url}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow aspect-[4/3]"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${image.url}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-semibold mb-1">{image.category}</p>
                  <p className="text-lg">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-sapin text-center mb-8">
            Témoignages
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg relative"
              >
                <svg
                  className="w-10 h-10 text-dore/30 absolute top-4 left-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 italic mb-6 pt-8 relative z-10">
                  {testimonial.text}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-sapin">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

