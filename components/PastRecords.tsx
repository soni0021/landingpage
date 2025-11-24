"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, Award, Users } from "lucide-react";

export default function PastRecords() {
  return (
    <section className="py-12 sm:py-16 bg-white text-gray-900 relative">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
            Our Past Records
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Proven track record of excellence in NEET/JEE preparation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Achievement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#d82209] to-[#b91c1c] rounded-xl p-6 sm:p-8 lg:p-10 border border-[#d82209] mb-8 sm:mb-10 text-center shadow-lg"
          >
            <div className="flex items-center justify-center mb-5 sm:mb-6">
              <Trophy className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white" />
            </div>
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-5">
              28%
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Selection for NEET 2025
            </div>
            <div className="text-base sm:text-lg text-white/90 mt-4">
              Best Selection Ratio in the Whole Industry
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gradient-to-br from-[#d82209] to-[#b91c1c] rounded-xl p-6 sm:p-7 border border-[#d82209] text-center shadow-md"
            >
              <TrendingUp className="w-12 h-12 sm:w-14 sm:h-14 text-white mx-auto mb-4" />
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-white">80%+</div>
              <div className="text-base sm:text-lg text-white/90">Success Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gradient-to-br from-[#d82209] to-[#b91c1c] rounded-xl p-6 sm:p-7 border border-[#d82209] text-center shadow-md"
            >
              <Award className="w-12 h-12 sm:w-14 sm:h-14 text-white mx-auto mb-4" />
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-white">#1</div>
              <div className="text-base sm:text-lg text-white/90">Industry Leader</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-gradient-to-br from-[#d82209] to-[#b91c1c] rounded-xl p-6 sm:p-7 border border-[#d82209] text-center shadow-md"
            >
              <Users className="w-12 h-12 sm:w-14 sm:h-14 text-white mx-auto mb-4" />
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-white">1000+</div>
              <div className="text-base sm:text-lg text-white/90">Successful Students</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

