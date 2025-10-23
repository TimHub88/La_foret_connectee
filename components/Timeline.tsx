"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaTree, FaCut, FaHammer, FaBox } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: FaTree,
    title: "Forêt",
    subtitle: "Récolte durable",
    description:
      "Chaque arbre est identifié et inventorié selon des critères stricts de gestion forestière durable. Respect de la biodiversité et de l'écosystème vosgien.",
    color: "sapin",
  },
  {
    id: 2,
    icon: FaCut,
    title: "Traçabilité",
    subtitle: "Suivi numérique",
    description:
      "Un QR code unique est généré pour chaque arbre, permettant un suivi complet de son origine à sa transformation. Données enregistrées en temps réel.",
    color: "bois",
  },
  {
    id: 3,
    icon: FaHammer,
    title: "Atelier",
    subtitle: "Transformation locale",
    description:
      "Le bois est travaillé par des artisans locaux qualifiés : menuisiers, ébénistes, sculpteurs. Savoir-faire traditionnel et techniques modernes combinés.",
    color: "dore",
  },
  {
    id: 4,
    icon: FaBox,
    title: "Produit",
    subtitle: "Objet artisanal",
    description:
      "Chaque produit fini porte le QR code de son arbre d'origine. Le consommateur accède à l'histoire complète : forêt, artisan, transformation.",
    color: "brume",
  },
];

export default function Timeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-casse" id="timeline">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sapin mb-4">
            Le Parcours
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            De la forêt à votre intérieur, suivez le voyage de nos ressources forestières
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-sapin via-bois via-dore to-brume" />

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Icon circle */}
                  <motion.div
                    className={`w-24 h-24 rounded-full bg-${step.color} flex items-center justify-center mx-auto mb-6 cursor-pointer relative z-10 shadow-lg`}
                    style={{ backgroundColor: `var(--${step.color})` }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() =>
                      setActiveStep(activeStep === step.id ? null : step.id)
                    }
                  >
                    <step.icon className="text-4xl text-casse" />
                  </motion.div>

                  {/* Card */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-sapin mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-dore mb-3">{step.subtitle}</p>

                    <motion.div
                      initial={false}
                      animate={{
                        height: activeStep === step.id ? "auto" : "0px",
                        opacity: activeStep === step.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>

                    <button
                      onClick={() =>
                        setActiveStep(activeStep === step.id ? null : step.id)
                      }
                      className="text-sapin text-sm font-semibold mt-3 hover:text-bois transition-colors"
                    >
                      {activeStep === step.id ? "Voir moins" : "En savoir plus"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}
                  style={{ backgroundColor: `var(--${step.color})` }}
                  whileTap={{ scale: 0.95 }}
                >
                  <step.icon className="text-2xl text-casse" />
                </motion.div>
                {index < steps.length - 1 && (
                  <div
                    className="w-1 flex-1 mt-2"
                    style={{ backgroundColor: `var(--${step.color})` }}
                  />
                )}
              </div>

              <div className="flex-1 bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold text-sapin mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-dore mb-2">{step.subtitle}</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

