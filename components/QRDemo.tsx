"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import treesData from "@/data/trees.json";
import { FaTimes, FaMapMarkerAlt, FaCalendar, FaUser } from "react-icons/fa";

export default function QRDemo() {
  const [selectedTree, setSelectedTree] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQRClick = (treeId: string) => {
    setSelectedTree(treeId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTree(null), 300);
  };

  const currentTree = treesData.find((tree) => tree.id === selectedTree);

  return (
    <section className="py-20 px-4 bg-white" id="qr-demo">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sapin mb-4">
            Démonstration QR
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Scannez ou cliquez sur un QR code pour découvrir l'histoire complète
            d'un arbre
          </p>
          <p className="text-sm text-bois mt-2">
            (QR codes actifs uniquement sur cette démonstration en ligne)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {treesData.map((tree, index) => (
            <motion.div
              key={tree.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-casse rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-sapin mb-2">
                  {tree.species}
                </h3>
                <p className="text-sm text-gray-600">{tree.id}</p>
              </div>

              <div
                className="bg-white p-4 rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleQRClick(tree.id)}
              >
                <QRCodeSVG
                  value={`${typeof window !== 'undefined' ? window.location.origin : ''}/tree/${tree.id}`}
                  size={200}
                  level="M"
                  includeMargin
                  className="mx-auto"
                />
              </div>

              <button
                onClick={() => handleQRClick(tree.id)}
                className="w-full bg-sapin text-casse py-3 rounded-lg font-semibold hover:bg-sapin/90 transition-colors"
              >
                Voir les détails
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && currentTree && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/70 z-40"
            />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-sapin/10 hover:bg-sapin/20 rounded-full flex items-center justify-center z-10 transition-colors"
                aria-label="Fermer"
              >
                <FaTimes className="text-sapin text-xl" />
              </button>

              <div className="overflow-y-auto max-h-[90vh] p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-sapin mb-2">
                    {currentTree.species}
                  </h2>
                  <p className="text-xl text-dore">{currentTree.id}</p>
                </div>

                {/* Info grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3 bg-casse p-4 rounded-lg">
                    <FaMapMarkerAlt className="text-sapin text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sapin mb-1">Origine</h4>
                      <p className="text-gray-700">{currentTree.origin}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {currentTree.coordinates}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-casse p-4 rounded-lg">
                    <FaCalendar className="text-sapin text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sapin mb-1">
                        Date d'inventaire
                      </h4>
                      <p className="text-gray-700">
                        {new Date(currentTree.date_inventory).toLocaleDateString(
                          "fr-FR",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-casse p-4 rounded-lg md:col-span-2">
                    <FaUser className="text-sapin text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sapin mb-1">Artisan</h4>
                      <p className="text-gray-700">{currentTree.artisan}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-sapin mb-3">
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {currentTree.description}
                  </p>
                </div>

                {/* Products */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-sapin mb-4">
                    Produits fabriqués
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentTree.products.map((product, idx) => (
                      <div
                        key={idx}
                        className="bg-casse p-4 rounded-lg border-l-4 border-dore"
                      >
                        <p className="text-gray-700 font-medium">{product}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Placeholder for images */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="aspect-video bg-gradient-to-br from-sapin to-sapin/70 rounded-lg flex items-center justify-center">
                    <p className="text-casse font-semibold">
                      Photo : Forêt d'origine
                    </p>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-bois to-bois/70 rounded-lg flex items-center justify-center">
                    <p className="text-casse font-semibold">
                      Photo : Produit fini
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600">
                    Cette traçabilité garantit l'origine locale et durable de
                    votre produit artisanal vosgien.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

