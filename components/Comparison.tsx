"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Study Environment",
    regular: "Noisy PG/hostel with inconsistent study atmosphere",
    amrc: "Dedicated study halls with academic ambience 24/7",
  },
  {
    feature: "Faculty Access",
    regular: "Limited to class hours only; no evening doubt solving",
    amrc: "Faculty stays on campus with early morning & evening doubt sessions",
  },
  {
    feature: "Device Usage",
    regular: "Unlimited mobile/laptop usage causing frequent distractions",
    amrc: "Regulated device time to ensure focused preparation",
  },
  {
    feature: "Peer Group",
    regular: "Mixed influence from various PG roommates with different goals",
    amrc: "Surrounded by motivated NEET aspirants creating healthy competition",
  },
  {
    feature: "Supervision",
    regular: "Minimal supervision after class hours; easy to develop poor habits",
    amrc: "Round-the-clock academic mentoring and daily routine monitoring",
  },
  {
    feature: "Travel Time",
    regular: "1–2 hours daily wasted in commute between PG and coaching center",
    amrc: "Zero travel time — classes and accommodation in same campus",
  },
];

export default function Comparison() {
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
            Regular Coaching vs AMRC 
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            See why thousands of students choose our residential program
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md border-collapse">
              <thead>
                <tr className="bg-[#d82209] text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Comparison Point</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Regular Coaching + PG</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold bg-[#b91c1c]">
                    Dr. Anand Mani Residential
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-sm text-gray-900">{item.feature}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.regular}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 bg-[#d82209]/10">
                      {item.amrc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4 sm:space-y-5">
            {comparisonData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-gray-200"
              >
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-4">{item.feature}</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-400 pl-4">
                    <div className="flex items-start gap-2 mb-2">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="font-semibold text-base text-gray-700">Regular Coaching + PG</span>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed">{item.regular}</p>
                  </div>
                  <div className="border-l-4 border-[#d82209] pl-4">
                    <div className="flex items-start gap-2 mb-2">
                      <Check className="w-5 h-5 text-[#d82209] flex-shrink-0 mt-0.5" />
                      <span className="font-semibold text-base text-gray-700">AMRC Residential</span>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed">{item.amrc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

