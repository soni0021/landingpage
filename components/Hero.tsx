"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative bg-cover bg-center min-h-screen flex items-center text-white"
      style={{
        backgroundImage: "url('https://www.anandmani.in/BROCHURE%2025-26%20-%2011.png')"
      }}
    >
      {/* Gradient Overlay - Exact match from anandmani.in */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d82209]/90 via-[#b91c1c]/75 to-[#6b0d0d]/70"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
            Start Your NEET/JEE Preparation Journey from
            <br />
            <span className="text-white">Dr. Anand Mani Residential Coaching Institute</span>
          </h1>
          
          <p className="mt-3 max-w-2xl text-white/90 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
            Focus, discipline and expert mentorship— all inside a mobile‑free, 24×7 academic campus led by Dr. Anand Mani.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2.5">
            <a
              href="#registration"
              className="inline-flex items-center justify-center bg-white text-[#d82209] px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition text-sm sm:text-base"
            >
              Register Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#test-info"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg font-medium border border-white/30 transition text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

