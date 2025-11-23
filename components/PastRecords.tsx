"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, Award, Users } from "lucide-react";

export default function PastRecords() {
  return (
    <section className="py-12 sm:py-16 bg-[#d82209] text-white relative">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Our Past Records
          </h2>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
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
            className="bg-[#b91c1c] rounded-lg p-6 sm:p-8 border border-[#991b1b] mb-8 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-12 h-12 sm:w-14 sm:h-14 text-yellow-400" />
            </div>
            <div className="text-5xl sm:text-6xl font-bold text-yellow-400 mb-3">
              28%
            </div>
            <div className="text-xl sm:text-2xl font-bold mb-2">
              Selection for NEET 2025
            </div>
            <div className="text-base text-white/80 mt-3">
              Best Selection Ratio in the Whole Industry
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-[#b91c1c] rounded-lg p-5 border border-[#991b1b] text-center"
            >
              <TrendingUp className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">80%+</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[#b91c1c] rounded-lg p-5 border border-[#991b1b] text-center"
            >
              <Award className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">#1</div>
              <div className="text-sm text-white/80">Industry Leader</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-[#b91c1c] rounded-lg p-5 border border-[#991b1b] text-center"
            >
              <Users className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">1000+</div>
              <div className="text-sm text-white/80">Successful Students</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

