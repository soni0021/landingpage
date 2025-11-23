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
          <div className="bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-md border-2 border-yellow-300">
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Lowest Academic Fee of the Year
                </h2>
                <p className="text-base sm:text-lg text-gray-700">
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
              className="bg-red-50 rounded-xl p-5 sm:p-6 border-l-4 border-red-500 mb-6 sm:mb-8"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-red-900 mb-2 sm:mb-3">
                    Important Notice
                  </h3>
                  <p className="text-base text-gray-800 leading-relaxed">
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
              className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#d82209] rounded-xl p-5 sm:p-6 text-white"
            >
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="font-semibold text-base sm:text-lg">
                  Limited Time Offer
                </span>
              </div>
              <a
                href="#registration"
                className="bg-white text-[#d82209] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold hover:bg-gray-50 transition-all shadow-md text-base sm:text-lg min-h-[48px] flex items-center justify-center w-full sm:w-auto"
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

