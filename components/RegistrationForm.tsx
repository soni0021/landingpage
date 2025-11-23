"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, Calendar, MapPin, BookOpen, Clock } from "lucide-react";

// Online test dates and slots
const onlineTestDates = [
  "7th December 2024",
  "14th December 2024",
  "21st December 2024",
  "28th December 2024",
  "Any date from 1st Dec to 15th Dec", // Flexible option only for online
];

const onlineTimeSlots = [
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

// Offline test dates and slots
const offlineTestDates = [
  "7th December 2024",
  "14th December 2024",
  "21st December 2024",
  "28th December 2024",
];

const offlineTimeSlots = [
  "11:30 AM",
  "12:30 PM",
  "1:30 PM - 2:30 PM",
  "2:30 PM - 3:30 PM",
  "3:30 PM - 4:30 PM",
  "4:30 PM - 5:30 PM",
];

const courses = ["Foundation Batch", "Dropper Batch"];

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Puducherry",
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    mobile: "",
    otp: "",
    name: "",
    email: "",
    dob: "",
    testMode: "",
    testDate: "",
    timeSlot: "",
    course: "",
    state: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [dummyOTP, setDummyOTP] = useState(""); // For development - remove in production

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Reset test date and time slot when test mode changes
    if (name === "testMode") {
      setFormData({ ...formData, [name]: value, testDate: "", timeSlot: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setError(""); // Clear error on input change
  };

  // Get available dates and slots based on test mode
  const getAvailableDates = () => {
    return formData.testMode === "online" ? onlineTestDates : offlineTestDates;
  };

  const getAvailableTimeSlots = () => {
    return formData.testMode === "online" ? onlineTimeSlots : offlineTimeSlots;
  };

  const handleSendOTP = async () => {
    if (!formData.mobile || formData.mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSendingOTP(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: formData.mobile }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to send OTP");
        setIsSendingOTP(false);
        return;
      }

      setOtpSent(true);
      setSuccess("OTP sent successfully! Check your mobile or console for the OTP.");
      
      // For development: store the dummy OTP (remove this in production)
      if (data.otp) {
        setDummyOTP(data.otp);
        console.log(`OTP for ${formData.mobile}: ${data.otp}`);
      }
    } catch (error: any) {
      setError("Network error. Please check your connection and try again.");
      console.error("OTP error:", error);
    } finally {
      setIsSendingOTP(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: formData.mobile,
          otp: formData.otp,
          name: formData.name,
          email: formData.email,
          dob: formData.dob,
          testMode: formData.testMode,
          testDate: formData.testDate,
          timeSlot: formData.timeSlot,
          course: formData.course,
          state: formData.state,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setSuccess(data.message || "Registration successful! We will contact you soon.");
      
      // Reset form
      setFormData({
        mobile: "",
        otp: "",
        name: "",
        email: "",
        dob: "",
        testMode: "",
        testDate: "",
        timeSlot: "",
        course: "",
        state: "",
      });
      setOtpSent(false);
      setDummyOTP("");

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error: any) {
      setError("Network error. Please check your connection and try again.");
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              AMRC-SAT Registration
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Fill in your details to register for the entrance exam
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 lg:p-10 border border-gray-200">
            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-red-700 font-semibold">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                <p className="text-green-700 font-semibold">{success}</p>
              </div>
            )}

            {/* Development OTP Display (remove in production) */}
            {dummyOTP && (
              <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                <p className="text-yellow-800 font-semibold">
                  Development Mode: OTP is {dummyOTP}
                </p>
                <p className="text-yellow-700 text-sm mt-1">
                  (This will be removed when SMS API is integrated)
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Mobile Number */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 sm:mb-2.5 text-base">
                  <Phone className="w-5 h-5 text-[#d82209]" />
                  Mobile Number *
                </label>
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength={10}
                    required
                    className="flex-1 px-4 py-3.5 sm:py-3 text-base rounded-xl border-2 border-gray-300 focus:border-[#d82209] focus:outline-none focus:ring-2 focus:ring-[#d82209]/20 transition-all min-h-[48px]"
                    placeholder="10-digit mobile number"
                  />
                  <button
                    type="button"
                    onClick={handleSendOTP}
                    disabled={otpSent || isSendingOTP}
                    className="px-5 sm:px-6 py-3.5 sm:py-3 bg-[#d82209] text-white rounded-full text-base font-semibold hover:bg-[#b91c1c] transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] whitespace-nowrap"
                  >
                    {isSendingOTP ? "Sending..." : otpSent ? "Sent" : "Send OTP"}
                  </button>
                </div>
              </div>

              {/* OTP Verification */}
              {otpSent && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="overflow-hidden"
                >
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 sm:mb-2.5 text-base">
                    <Phone className="w-5 h-5 text-[#d82209]" />
                    Verify OTP *
                  </label>
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    maxLength={6}
                    required
                    className="w-full px-4 py-3.5 sm:py-3 text-base rounded-xl border-2 border-gray-300 focus:border-[#d82209] focus:outline-none focus:ring-2 focus:ring-[#d82209]/20 transition-all min-h-[48px]"
                    placeholder="6-digit OTP"
                  />
                </motion.div>
              )}

              {/* Student Name */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 sm:mb-2.5 text-base">
                  <User className="w-5 h-5 text-[#d82209]" />
                  Student Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 sm:py-3 text-base rounded-xl border-2 border-gray-300 focus:border-[#d82209] focus:outline-none focus:ring-2 focus:ring-[#d82209]/20 transition-all min-h-[48px]"
                  placeholder="Full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 sm:mb-2.5 text-base">
                  <Mail className="w-5 h-5 text-[#d82209]" />
                  Email ID *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 sm:py-3 text-base rounded-xl border-2 border-gray-300 focus:border-[#d82209] focus:outline-none focus:ring-2 focus:ring-[#d82209]/20 transition-all min-h-[48px]"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 sm:mb-2.5 text-base">
                  <Calendar className="w-5 h-5 text-[#d82209]" />
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 sm:py-3 text-base rounded-xl border-2 border-gray-300 focus:border-[#d82209] focus:outline-none focus:ring-2 focus:ring-[#d82209]/20 transition-all min-h-[48px]"
                />
              </div>

              {/* Test Mode */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 sm:mb-2.5 text-base">
                  <Clock className="w-5 h-5 text-[#d82209]" />
                  Select Test Mode *
                </label>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <label className="relative">
                    <input
                      type="radio"
                      name="testMode"
                      value="online"
                      checked={formData.testMode === "online"}
                      onChange={handleChange}
                      required
                      className="peer sr-only"
                    />
                    <div className="px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl border-2 border-gray-300 peer-checked:border-[#d82209] peer-checked:bg-[#d82209]/10 cursor-pointer transition-all text-center font-semibold text-base min-h-[48px] flex items-center justify-center">
                      Online
                    </div>
                  </label>
                  <label className="relative">
                    <input
                      type="radio"
                      name="testMode"
                      value="offline"
                      checked={formData.testMode === "offline"}
                      onChange={handleChange}
                      required
                      className="peer sr-only"
                    />
                    <div className="px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl border-2 border-gray-300 peer-checked:border-[#d82209] peer-checked:bg-[#d82209]/10 cursor-pointer transition-all text-center font-semibold text-base min-h-[48px] flex items-center justify-center">
                      Offline
                    </div>
                  </label>
                </div>
              </div>

              {/* Test Date - Only show if test mode is selected */}
              {formData.testMode && (
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 sm:mb-2.5 text-base">
                    <Calendar className="w-5 h-5 text-[#d82209]" />
                    Test Date *
                  </label>
                  <select
                    name="testDate"
                    value={formData.testDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 sm:py-3 text-base rounded-xl border-2 border-gray-300 focus:border-[#d82209] focus:outline-none focus:ring-2 focus:ring-[#d82209]/20 transition-all bg-white min-h-[48px]"
                  >
                    <option value="">Select test date</option>
                    {getAvailableDates().map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                  {formData.testMode === "online" && formData.testDate === "Any date from 1st Dec to 15th Dec" && (
                    <p className="text-sm text-gray-500 mt-2">
                      Flexible option available for online mode
                    </p>
                  )}
                </div>
              )}

              {/* Time Slot - Only show if test date is selected and not flexible date */}
              {formData.testDate && formData.testDate !== "Any date from 1st Dec to 15th Dec" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="overflow-hidden"
                >
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 sm:mb-2.5 text-base">
                    <Clock className="w-5 h-5 text-[#d82209]" />
                    Select Time Slot *
                  </label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 sm:py-3 text-base rounded-xl border-2 border-gray-300 focus:border-[#d82209] focus:outline-none focus:ring-2 focus:ring-[#d82209]/20 transition-all bg-white min-h-[48px]"
                  >
                    <option value="">Select time slot</option>
                    {getAvailableTimeSlots().map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </motion.div>
              )}

              {/* Course */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 sm:mb-2.5 text-base">
                  <BookOpen className="w-5 h-5 text-[#d82209]" />
                  Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 sm:py-3 text-base rounded-xl border-2 border-gray-300 focus:border-[#d82209] focus:outline-none focus:ring-2 focus:ring-[#d82209]/20 transition-all bg-white min-h-[48px]"
                >
                  <option value="">Select course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              {/* State */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 sm:mb-2.5 text-base">
                  <MapPin className="w-5 h-5 text-[#d82209]" />
                  State *
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 sm:py-3 text-base rounded-xl border-2 border-gray-300 focus:border-[#d82209] focus:outline-none focus:ring-2 focus:ring-[#d82209]/20 transition-all bg-white min-h-[48px]"
                >
                  <option value="">Select your state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-[#d82209] hover:bg-[#b91c1c] text-white py-4 sm:py-4 rounded-full font-bold text-lg shadow-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4 min-h-[56px]"
              >
                {isSubmitting ? "Registering..." : "Register Now"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

