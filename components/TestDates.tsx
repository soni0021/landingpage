"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const testDates = [
  { date: "07", day: "Dec", weekday: "Sun", mode: "Offline" },
  { date: "14", day: "Dec", weekday: "Sun", mode: "Online" },
  { date: "21", day: "Dec", weekday: "Sun", mode: "Offline" },
  { date: "28", day: "Dec", weekday: "Sun", mode: "Online" },
];

export default function TestDates() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Test Date Cards - Matching competitor exact layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto mb-6 sm:mb-8">
          {testDates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-lg p-4 sm:p-5 lg:p-6 shadow-md border-2 border-yellow-300 hover:border-yellow-400 hover:shadow-lg transition-all text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#d82209] mb-1 sm:mb-2">
                {item.date}
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-1">
                {item.day}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                {item.weekday}
              </div>
              <div className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold">
                <Clock className="w-3 h-3" />
                Mode : {item.mode}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notice - Matching competitor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 sm:p-5 max-w-4xl mx-auto"
        >
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
            <span className="font-bold">If you want admission in the top batches, or you want to get a higher scholarship, you must appear for the Offline AMRC-SAT Test only.</span>
            <br />
            <span className="text-xs sm:text-sm text-gray-600 italic mt-2 block">
              (Top batches are for bright and serious students targeting Top Ranks in JEE Main & JEE Advanced.)
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

