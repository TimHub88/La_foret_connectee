"use client";

import { motion } from "framer-motion";
import { FaTree, FaUsers, FaHandHoldingHeart } from "react-icons/fa";

const stats = [
  {
    icon: FaTree,
    number: "~3,000",
    label: "Arbres/an",
    description: "Objectif de traçabilité annuel",
    color: "sapin",
  },
  {
    icon: FaUsers,
    number: "40+",
    label: "Artisans potentiels",
    description: "Menuisiers, ébénistes, sculpteurs",
    color: "bois",
  },
  {
    icon: FaHandHoldingHeart,
    number: "x2",
    label: "Replantation",
    description: "Deux arbres replantés par arbre récolté",
    color: "dore",
  },
];

const impacts = [
  {
    title: "Valorisation",
    value: "90%+",
    description: "objectif de valorisation par arbre",
    gradient: "from-sapin to-sapin/70",
  },
  {
    title: "Emplois locaux",
    value: "100+",
    description: "emplois potentiellement soutenus",
    gradient: "from-bois to-bois/70",
  },
  {
    title: "CO₂ séquestré",
    value: "~1000t",
    description: "par an via replantation (estimation)",
    gradient: "from-dore to-dore/70",
  },
];

export default function Impact() {
  return (
    <section className="py-20 px-4 bg-white" id="impact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sapin mb-4">
            Impact Potentiel
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Les bénéfices attendus pour l'écosystème vosgien et l'économie
            locale
          </p>
        </motion.div>

        {/* Main stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg`}
                style={{ backgroundColor: `var(--${stat.color})` }}
              >
                <stat.icon className="text-4xl text-casse" />
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-sapin mb-2"
              >
                {stat.number}
              </motion.h3>
              <p className="text-xl font-semibold text-bois mb-2">
                {stat.label}
              </p>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact details */}
        <div className="grid md:grid-cols-3 gap-6">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${impact.gradient} rounded-xl p-8 text-white shadow-lg`}
            >
              <h4 className="text-lg font-semibold mb-3 opacity-90">
                {impact.title}
              </h4>
              <p className="text-5xl font-bold mb-2">{impact.value}</p>
              <p className="opacity-90">{impact.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-casse rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-12 h-12 text-dore mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
              "Une telle initiative redonnerait du sens à notre métier. Chaque pièce
              raconterait l'histoire d'un arbre, d'une forêt, d'un territoire.
              Ce serait une fierté de pouvoir transmettre cela aux clients."
            </p>
            <p className="text-lg font-semibold text-sapin">
              Témoignage d'un artisan vosgien
            </p>
            <p className="text-gray-600">Menuisier - Secteur de Gérardmer</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

