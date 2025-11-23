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
    title: "Scholarship up to 100%",
    description:
      "Get admission to AMRC at the lowest possible fee through AMRC-SAT. Top performers receive full scholarships for offline courses.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: TrendingUp,
    title: "Clear Academic Insights",
    description:
      "Get a clear insight into your academic level and performance to understand where you stand and how to improve.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: BookOpen,
    title: "Free Mentorkor.ai Subscription",
    description:
      "Free subscription includes DPP, practice tests, customized study planner, and more to enhance your preparation.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Users,
    title: "Top Batch Opportunities",
    description:
      "Opportunity to study in top batches of AMRC with the best faculty and most competitive peer group.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Trophy,
    title: "Medals and Trophies",
    description:
      "Top performers receive medals and trophies as recognition for their outstanding performance in AMRC-SAT.",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Gift,
    title: "Free Books from Anand Mani Sir",
    description:
      "Top performers get free books directly from Anand Mani Sir to support their preparation journey.",
    color: "from-pink-400 to-pink-600",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Benefits of Joining Through AMRC-SAT
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Unlock exclusive opportunities and maximize your NEET/JEE
            preparation potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 sm:mb-5 shadow-md`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

