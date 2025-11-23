"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  FileText,
  BookOpen,
  Download,
  Info,
} from "lucide-react";

const testDates = [
  "7th December 2024",
  "14th December 2024",
  "21st December 2024",
  "28th December 2024",
];

const onlineTimeSlots = [
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const offlineTimeSlots = [
  "11:30 AM",
  "12:30 PM",
  "1:30 PM - 2:30 PM",
  "2:30 PM - 3:30 PM",
  "3:30 PM - 4:30 PM",
  "4:30 PM - 5:30 PM",
];

const infoSections = [
  {
    icon: Info,
    title: "Test Instructions",
    description: "Detailed instructions for the AMRC-SAT exam",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: BookOpen,
    title: "AMRC-SAT Syllabus",
    description: "Complete syllabus for NEET/JEE preparation",
    color: "from-green-500 to-green-700",
  },
  {
    icon: FileText,
    title: "Sample Papers",
    description: "Download sample papers to practice",
    color: "from-purple-500 to-purple-700",
  },
];

export default function TestInfo() {
  return (
    <section id="test-info" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            AMRC-SAT Information
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Everything you need to know about the entrance exam
          </p>
        </motion.div>

        {/* Test Dates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <div className="bg-[#d82209]/10 rounded-xl p-5 sm:p-6 lg:p-8 border border-[#d82209]/20">
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-[#d82209]" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Available Test Dates
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
              {testDates.map((date, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 sm:p-5 text-center font-semibold text-base text-gray-800 shadow-sm border border-gray-200"
                >
                  {date}
                </div>
              ))}
            </div>
            <p className="text-sm sm:text-base text-gray-600 text-center px-2">
              <span className="font-semibold">Flexible Option (Online only):</span> Any date
              from 1st December to 15th December 2024
            </p>
          </div>
        </motion.div>

        {/* Time Slots - Online */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="bg-blue-50 rounded-xl p-5 sm:p-6 lg:p-8 border border-blue-200">
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-[#d82209]" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Online Test Time Slots
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {onlineTimeSlots.map((slot, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 sm:p-5 text-center font-semibold text-base text-gray-800 shadow-sm border border-gray-200"
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Time Slots - Offline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 sm:mb-10"
        >
          <div className="bg-[#d82209]/10 rounded-xl p-5 sm:p-6 lg:p-8 border border-[#d82209]/20">
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-[#d82209]" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Offline Test Time Slots
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {offlineTimeSlots.map((slot, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 sm:p-5 text-center font-semibold text-base text-gray-800 shadow-sm border border-gray-200"
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {infoSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200 hover:border-[#d82209] transition-colors shadow-sm"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-5 shadow-md`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-base text-gray-600 mb-4 leading-relaxed">{section.description}</p>
                <button className="flex items-center gap-2 text-[#d82209] font-semibold hover:text-[#b91c1c] transition-colors text-base min-h-[44px]">
                  <Download className="w-5 h-5" />
                  View Details
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Registration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a
            href="#registration"
            className="inline-block bg-[#d82209] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-colors min-h-[56px] flex items-center justify-center"
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

