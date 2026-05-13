"use client";

import { motion } from "framer-motion";
import StarsBackground from "./StarsBackground";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6">

      <StarsBackground />

      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-cyan-500/20 blur-3xl rounded-full top-[-200px]" />

      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full bottom-[-150px] right-[-100px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >

        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-tight">
          Aerospace
          <span className="block text-cyan-400">
            3D Printing
          </span>
          Platform
        </h1>

        <p className="mt-8 text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
          Intelligent manufacturing platform for satellite models,
          engineering prototypes, rapid production, and advanced
          3D print optimization.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300">
            Upload Your Model
          </button>

          <button className="px-8 py-4 rounded-2xl border border-cyan-400 hover:bg-cyan-400/10 transition duration-300">
            Explore Products
          </button>

        </div>

      </motion.div>

    </section>
  );
}