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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 px-2">
            Start Your NEET/JEE Preparation Journey from
            <br className="hidden sm:block" />
            <span className="text-white block sm:inline"> Dr. Anand Mani Residential Coaching Institute</span>
          </h1>
          
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-white/90 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed px-4">
            Focus, discipline and expert mentorship— all inside a mobile‑free, 24×7 academic campus led by Dr. Anand Mani.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a
              href="#registration"
              className="inline-flex items-center justify-center bg-white text-[#d82209] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all text-base sm:text-lg min-h-[48px] w-full sm:w-auto"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#test-info"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold border-2 border-white/30 transition-all text-base sm:text-lg min-h-[48px] w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

