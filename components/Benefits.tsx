"use client";

import { motion } from "framer-motion";
import {
  Award,
  TrendingUp,
  BookOpen,
  Users,
  Trophy,
  Gift,
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "WIN*",
    subtitle: "Scholarship up to 100%",
    description:
      "Get admission to AMRC at the lowest possible fee through AMRC-SAT. Top performers receive full scholarships for offline courses.",
    color: "from-[#d82209] to-[#b91c1c]",
  },
  {
    icon: Users,
    title: "WIN*",
    subtitle: "A Chance to Enroll in AMRC's Top Batch",
    description:
      "Opportunity to study in top batches of AMRC with the best faculty and most competitive peer group.",
    color: "from-[#d82209] to-[#b91c1c]",
  },
  {
    icon: BookOpen,
    title: "WIN*",
    subtitle: "Free Mentorbox.ai Subscription",
    description:
      "Free subscription includes DPP, practice tests, customized study planner, and more to enhance your preparation.",
    color: "from-[#d82209] to-[#b91c1c]",
  },
  {
    icon: TrendingUp,
    title: "WIN*",
    subtitle: "Clear Academic Insights",
    description:
      "Get a clear insight into your academic level and performance to understand where you stand and how to improve.",
    color: "from-[#d82209] to-[#b91c1c]",
  },
  {
    icon: Trophy,
    title: "WIN*",
    subtitle: "Medals and Trophies",
    description:
      "Top performers receive medals and trophies as recognition for their outstanding performance in AMRC-SAT.",
    color: "from-[#d82209] to-[#b91c1c]",
  },
  {
    icon: Gift,
    title: "WIN*",
    subtitle: "Free Books from Dr. Anand Mani",
    description:
      "Top performers get free books directly from Dr. Anand Mani to support their preparation journey.",
    color: "from-[#d82209] to-[#b91c1c]",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 sm:mb-3">
            WIN Big with AMRC-SAT
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Embark on your JEE / NEET journey with AMRC's exclusive advantages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base lg:text-lg font-black text-[#d82209] mb-1">
                      {benefit.title}
                    </h3>
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {benefit.subtitle}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

