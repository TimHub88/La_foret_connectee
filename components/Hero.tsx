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
            backgroundImage: "url('https://vosgesphoto.com/wp-content/uploads/2023/01/20131230-002.jpg')",
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
          className="text-xl md:text-2xl text-casse/90 mb-8 font-light"
        >
          Transmettons la nature vosgienne
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-casse/80 mb-12 max-w-2xl mx-auto"
        >
          Une proposition concrète pour tracer, valoriser et transformer chaque arbre de nos forêts vosgiennes en objets artisanaux uniques.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#how-it-works"
            className="inline-block bg-dore text-sapin px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dore/90 transition-all hover:scale-105 shadow-lg"
          >
            Découvrir le projet
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}

