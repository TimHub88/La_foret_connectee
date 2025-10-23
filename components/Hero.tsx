"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      id="hero"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2022/02/22/13/22/vosges-7028782_1280.jpg')",
          }}
        />
        {/* Dark overlay with green gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sapin/70 via-sapin/50 to-sapin/80" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-casse mb-6 leading-tight"
        >
          La Forêt Connectée
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-white mb-6 font-bold drop-shadow-lg"
        >
          Transmettons la nature vosgienne
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white font-semibold mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
        >
          Une proposition concrète pour tracer, valoriser et transformer chaque arbre de nos forêts vosgiennes en objets artisanaux uniques.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#how-it-works"
            className="inline-block bg-dore text-sapin px-8 py-4 rounded-lg font-bold text-lg hover:bg-dore/90 transition-all hover:scale-105 shadow-lg"
          >
            Découvrir le projet
          </a>
          <a
            href="#quiz"
            className="inline-block bg-white text-sapin px-8 py-4 rounded-lg font-bold text-lg hover:bg-casse transition-all hover:scale-105 shadow-lg"
          >
            Jouer au quiz
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}

