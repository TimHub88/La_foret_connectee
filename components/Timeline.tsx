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
    image: "/images/STEP1.jpg",
  },
  {
    id: 2,
    icon: FaCut,
    title: "Traçabilité",
    subtitle: "Suivi numérique",
    description:
      "Proposition d'un système de traçabilité numérique pour chaque arbre, permettant un suivi complet de son origine à sa transformation avec données enregistrées en temps réel.",
    color: "bois",
    image: "/images/STEP2.jpg",
  },
  {
    id: 3,
    icon: FaHammer,
    title: "Atelier",
    subtitle: "Transformation locale",
    description:
      "Le bois est travaillé par des artisans locaux qualifiés : menuisiers, ébénistes, sculpteurs. Savoir-faire traditionnel et techniques modernes combinés.",
    color: "dore",
    image: "/images/STEP3.png",
    hasArtisanProfile: true,
  },
  {
    id: 4,
    icon: FaBox,
    title: "Produit",
    subtitle: "Objet artisanal",
    description:
      "Chaque produit fini serait marqué avec un identifiant relié à son arbre d'origine. Le consommateur pourrait accéder à l'histoire complète : forêt, artisan, transformation.",
    color: "brume",
    image: "/images/STEP4.jpg",
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
            Le Parcours Proposé
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            De la forêt à l'intérieur : le voyage envisagé pour nos ressources forestières
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
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    {/* Image */}
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-sapin">
                          {step.title}
                        </h3>
                        {step.hasArtisanProfile && (
                          <a
                            href="#artisan-profile"
                            className="flex items-center gap-1 bg-dore/20 text-sapin px-3 py-1 rounded-full text-xs font-semibold hover:bg-dore/30 transition-all hover:scale-105 whitespace-nowrap"
                            title="Découvrir Hugo, artisan vosgien"
                          >
                            👤 Hugo
                          </a>
                        )}
                      </div>
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
                        {step.hasArtisanProfile && (
                          <div className="mt-4 p-3 bg-sapin/5 rounded-lg border-l-3 border-dore">
                            <p className="text-xs text-gray-600 italic">
                              💡 Découvrez comment <strong>Hugo NUNGE-THOUVENIN</strong>, 
                              jeune menuisier vosgien, pourrait participer activement à cette initiative.
                              <a 
                                href="#artisan-profile" 
                                className="text-sapin font-semibold hover:underline ml-1"
                              >
                                En savoir plus →
                              </a>
                            </p>
                          </div>
                        )}
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

              <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-md">
                {/* Image */}
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-bold text-sapin">
                      {step.title}
                    </h3>
                    {step.hasArtisanProfile && (
                      <a
                        href="#artisan-profile"
                        className="flex items-center gap-1 bg-dore/20 text-sapin px-2 py-1 rounded-full text-xs font-semibold hover:bg-dore/30 transition-all whitespace-nowrap"
                        title="Découvrir Hugo"
                      >
                        👤 Hugo
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-dore mb-2">{step.subtitle}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {step.hasArtisanProfile && (
                    <div className="mt-3 p-2 bg-sapin/5 rounded-lg">
                      <p className="text-xs text-gray-600">
                        💡 <a href="#artisan-profile" className="text-sapin font-semibold hover:underline">
                          Découvrez Hugo →
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

