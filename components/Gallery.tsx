"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  {
    url: "https://www.birdsandbicycles.fr/files/2022/11/balade-vosges-automne-blog-2.jpg",
    title: "Forêt des Vosges en automne",
    category: "Forêt",
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/02/22/13/22/vosges-7028782_1280.jpg",
    title: "Forêt enneigée",
    category: "Forêt",
  },
  {
    url: "https://cdn-s-www.leprogres.fr/images/F69186D5-16D6-4F9F-95D1-73AA99BDB0E3/NW_raw/si-le-bois-de-sapin-est-utilise-en-menuiserie-les-bourgeons-permettent-eux-de-preparer-une-tisane-benefique-pour-les-bronches-photo-c-michel-pnrbv-1614159741.jpg",
    title: "Sapins des Vosges",
    category: "Forêt",
  },
  {
    url: "https://helce.fr/wp-content/uploads/2022/12/sans-titre-5-sur-11-scaled.jpg",
    title: "Artisan ébéniste vosgien",
    category: "Atelier",
  },
  {
    url: "https://cdn-s-www.vosgesmatin.fr/images/64e2f171-6e46-48ca-92fa-7933f38f725f/NW_raw/gerbamont-le-25-11-2020-portrait-d-adam-etienne-dans-son-atelier-photo-vm-jerome-humbrecht-1606745130.jpg",
    title: "Artisan dans son atelier",
    category: "Atelier",
  },
  {
    url: "https://www.forumbrico.fr/wp-content/uploads/2019/02/Outils-pour-le-bois-menuiserie.jpg",
    title: "Outils de menuiserie",
    category: "Atelier",
  },
  {
    url: "https://static.wixstatic.com/media/e3ce5d_b954f104ed5d44b58905ac2d3dbe13df~mv2.jpg/v1/fill/w_528,h_708,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e3ce5d_b954f104ed5d44b58905ac2d3dbe13df~mv2.jpg",
    title: "Chaise design en bois",
    category: "Produit",
  },
  {
    url: "https://www.meuble-house.fr/media/catalog/product/cache/fbdf6eab5d71d83d9b1e1c285d3b915e/t/a/table-chene-massif-allonges_1.jpg",
    title: "Table en chêne massif",
    category: "Produit",
  },
  {
    url: "https://ebenistedart.ca/wp-content/uploads/2024/04/ebeniste-dart_projet-le-gout-des-boiseries_salon_1.jpg",
    title: "Marqueterie artisanale",
    category: "Produit",
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

