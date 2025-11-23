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
    <section id="test-info" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            AMRC-SAT Information
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the entrance exam
          </p>
        </motion.div>

        {/* Test Dates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-[#d82209]/10 rounded-lg p-6 border border-[#d82209]/20">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-[#d82209]" />
              <h3 className="text-xl font-bold text-gray-900">
                Available Test Dates
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {testDates.map((date, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 text-center font-medium text-sm text-gray-800 shadow-sm border border-gray-200"
                >
                  {date}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 text-center">
              <span className="font-medium">Flexible Option (Online only):</span> Any date
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
          className="mb-6"
        >
          <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#d82209]" />
              <h3 className="text-lg font-bold text-gray-900">
                Online Test Time Slots
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {onlineTimeSlots.map((slot, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 text-center font-medium text-sm text-gray-800 shadow-sm border border-gray-200"
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
          className="mb-8"
        >
          <div className="bg-[#d82209]/10 rounded-lg p-5 border border-[#d82209]/20">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#d82209]" />
              <h3 className="text-lg font-bold text-gray-900">
                Offline Test Time Slots
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {offlineTimeSlots.map((slot, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 text-center font-medium text-sm text-gray-800 shadow-sm border border-gray-200"
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {infoSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg p-5 border border-gray-200 hover:border-[#d82209] transition-colors shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 shadow-md`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{section.description}</p>
                <button className="flex items-center gap-2 text-[#d82209] font-medium hover:text-[#b91c1c] transition-colors text-sm">
                  <Download className="w-4 h-4" />
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
          className="mt-12 text-center"
        >
          <a
            href="#registration"
            className="inline-block bg-[#d82209] hover:bg-[#b91c1c] text-white px-6 py-2.5 rounded-lg font-semibold text-base shadow-md transition-colors"
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

