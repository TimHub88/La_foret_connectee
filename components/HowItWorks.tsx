"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaLeaf, FaQrcode, FaHammer, FaRecycle, FaChevronRight } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: FaLeaf,
    title: "Collecte responsable",
    shortDesc: "Identifier et respecter chaque arbre de nos forêts",
    points: [
      "Inventaire et identification de chaque arbre",
      "Respect des cycles naturels de la forêt",
      "Sélection selon critères de gestion durable (PEFC)",
    ],
    color: "from-green-500 to-emerald-600",
    image: "https://www.birdsandbicycles.fr/files/2022/11/balade-vosges-automne-blog-2.jpg",
  },
  {
    id: 2,
    icon: FaQrcode,
    title: "Traçabilité numérique",
    shortDesc: "Un système d'identification unique pour chaque arbre",
    points: [
      "Proposition d'un système d'identification unique par arbre",
      "Enregistrement digital de toutes les étapes de transformation",
      "Accès aux données via interface web ou application mobile",
    ],
    color: "from-blue-500 to-indigo-600",
    image: "https://images.squarespace-cdn.com/content/v1/62e10ddba9c14f70bea9783c/4b98db05-34c1-4cc6-9620-ca035d62b27b/Tablettes.jpg",
  },
  {
    id: 3,
    icon: FaHammer,
    title: "Transformation locale",
    shortDesc: "Artisans vosgiens : savoir-faire et modernité",
    points: [
      "Collaboration avec artisans vosgiens qualifiés",
      "Conservation du savoir-faire traditionnel",
      "Application de techniques modernes durables",
    ],
    color: "from-amber-500 to-orange-600",
    image: "https://helce.fr/wp-content/uploads/2022/12/sans-titre-5-sur-11-scaled.jpg",
  },
  {
    id: 4,
    icon: FaRecycle,
    title: "Bénéfices écologiques",
    shortDesc: "Impact positif sur l'environnement et l'économie locale",
    points: [
      "Réduction de l'empreinte carbone par circuit court",
      "Valorisation des forêts locales et gestion durable",
      "Sensibilisation du consommateur à l'origine du produit",
    ],
    color: "from-teal-500 to-cyan-600",
    image: "https://cdn.pixabay.com/photo/2022/02/22/13/22/vosges-7028782_1280.jpg",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-casse overflow-hidden" id="how-it-works" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-sapin mb-6">
            Comment ça fonctionnerait ?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Une proposition de système complet pour valoriser et tracer nos ressources forestières vosgiennes
          </p>
        </motion.div>

        {/* Interactive Flow Design */}
        <div className="relative mb-20">
          {/* Desktop: Horizontal scroll effect */}
          <div className="hidden lg:block">
            <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-80 snap-center"
                >
                  <div 
                    className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer group"
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Background Image with overlay */}
                    <div className="absolute inset-0">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-b ${step.color} opacity-85 group-hover:opacity-90 transition-opacity`} />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-8 text-white">
                      <div>
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <step.icon className="text-3xl" />
                        </div>
                        <div className="text-xl font-bold mb-2 opacity-70">
                          Étape {index + 1}
                        </div>
                        <h3 className="text-3xl font-bold mb-4 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-lg opacity-90 mb-6">
                          {step.shortDesc}
                        </p>
                      </div>

                      {/* Points appear on hover */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="bg-white/10 backdrop-blur-md rounded-xl p-4 space-y-2"
                      >
                        {step.points.map((point, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <FaChevronRight className="mt-1 flex-shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet: Vertical cards */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Background Image with overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${step.color} opacity-85`} />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div>
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                      <step.icon className="text-2xl" />
                    </div>
                    <div className="text-lg font-bold mb-2 opacity-70">
                      Étape {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-base opacity-90 mb-4">
                      {step.shortDesc}
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 space-y-2">
                    {step.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <FaChevronRight className="mt-0.5 flex-shrink-0 text-xs" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conclusion section with parallax */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-r from-sapin via-bois to-sapin text-white p-10 md:p-16 rounded-3xl text-center shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: "url('https://www.forumbrico.fr/wp-content/uploads/2019/02/Outils-pour-le-bois-menuiserie.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Une proposition innovante et responsable
            </h3>
            <p className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed">
              Ce système proposé combinerait <strong>technologies modernes</strong> et <strong>savoir-faire traditionnel</strong> pour offrir une traçabilité complète et valoriser le patrimoine forestier vosgien tout en soutenant l'économie locale.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
