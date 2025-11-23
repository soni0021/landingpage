"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Target } from "lucide-react";

const targetClasses = [
  { grade: "9th", description: "Foundation Preparation" },
  { grade: "10th", description: "Early Start Advantage" },
  { grade: "11th", description: "Core Preparation" },
  { grade: "12th", description: "Final Year Push" },
  { grade: "Dropper", description: "Second Chance Success" },
];

const exams = [
  { name: "JEE", fullName: "Joint Entrance Examination" },
  { name: "NEET", fullName: "National Eligibility cum Entrance Test" },
];

export default function TargetAudience() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Who Can Join?
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            AMRC-SAT is designed for serious aspirants aiming for top ranks
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Target Classes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-12"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#d82209]" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  For Students Presently In
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {targetClasses.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 sm:p-5 text-center border-2 border-gray-200 hover:border-[#d82209] transition-colors shadow-sm"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#d82209] mb-2">
                      {item.grade}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      {item.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Exams */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#d82209] rounded-xl p-6 sm:p-8 shadow-md text-white">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Target className="w-6 h-6 sm:w-7 sm:h-7" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Target Exams</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {exams.map((exam, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20"
                  >
                    <div className="text-3xl sm:text-4xl font-bold mb-2">{exam.name}</div>
                    <div className="text-sm sm:text-base text-white/80">{exam.fullName}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

