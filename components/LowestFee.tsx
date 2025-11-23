"use client";

import { motion } from "framer-motion";
import { Target, AlertCircle, Clock } from "lucide-react";

export default function LowestFee() {
  return (
    <section className="py-12 sm:py-16 bg-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md border-2 border-yellow-300">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5">
                  Lowest Academic Fee of the Year
                </h2>
                <p className="text-sm sm:text-base text-gray-700">
                  Participate in AMRC-SAT to get admission at AMRC at the lowest
                  possible fee
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500 mb-5"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-red-900 mb-1.5">
                    Important Notice
                  </h3>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    Those who wait for future tests may have to pay a higher
                    fee. Register now to secure your spot at the lowest
                    academic fee available this year.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#d82209] rounded-lg p-4 text-white"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold text-sm sm:text-base">
                  Limited Time Offer
                </span>
              </div>
              <a
                href="#registration"
                className="bg-white text-[#d82209] px-5 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-md text-sm sm:text-base"
              >
                Register Now
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

