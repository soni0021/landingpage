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
  "Any date from 1st Dec to 15th Dec",
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
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi",
  "Jammu and Kashmir", "Ladakh", "Puducherry",
];

export default function HeroWithForm() {
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
  const [dummyOTP, setDummyOTP] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "testMode") {
      setFormData({ ...formData, [name]: value, testDate: "", timeSlot: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setError("");
  };

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
        headers: { "Content-Type": "application/json" },
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
        headers: { "Content-Type": "application/json" },
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
      
      setFormData({
        mobile: "", otp: "", name: "", email: "", dob: "",
        testMode: "", testDate: "", timeSlot: "", course: "", state: "",
      });
      setOtpSent(false);
      setDummyOTP("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error: any) {
      setError("Network error. Please check your connection and try again.");
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-white overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* Background with Image - Using exact Anand Mani hero image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://www.anandmani.in/BROCHURE%2025-26%20-%2011.png')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#d82209]/90 via-[#b91c1c]/85 to-[#991b1b]/80"></div>
      </div>

      <div className="relative container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10 lg:py-16 min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 w-full">
          {/* Left Side - Hero Content (8 columns on desktop) */}
          <div className="lg:col-span-8 order-1 lg:order-1 px-2 sm:px-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              {/* Badge */}
              <div className="mb-3 sm:mb-4">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  AMRC-SAT
                </span>
              </div>
              
              {/* Main Heading - Enhanced for desktop */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-3 sm:mb-4">
                Take AMRC-SAT. Take Off
                <br />
                <span className="text-yellow-300">to Your JEE / NEET Dreams!</span>
              </h1>
              
              {/* Subheading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 text-white">
                Dr. Anand Mani Residential Coaching
              </h2>
              
              {/* Tagline */}
              <p className="text-base sm:text-lg md:text-xl text-white/95 mb-5 sm:mb-8 leading-relaxed max-w-2xl">
                Big on Incentives, Bigger on Shaping Futures
                <br />
                <span className="text-white/90 text-sm sm:text-base md:text-lg">
                  Focus, discipline and expert mentorship— all inside a mobile‑free, 24×7 academic campus led by Dr. Anand Mani.
                </span>
              </p>

              {/* Stats Cards - Enhanced for desktop */}
              <div className="grid grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8">
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-5 lg:p-6 text-center border-2 border-white/30 shadow-lg hover:bg-white/20 transition-all">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-yellow-300 mb-2">100%</div>
                  <div className="text-xs sm:text-sm md:text-base text-white font-semibold">Scholarship</div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-5 lg:p-6 text-center border-2 border-white/30 shadow-lg hover:bg-white/20 transition-all">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-yellow-300 mb-2">28%</div>
                  <div className="text-xs sm:text-sm md:text-base text-white font-semibold">Selection</div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-5 lg:p-6 text-center border-2 border-white/30 shadow-lg hover:bg-white/20 transition-all">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-yellow-300 mb-2">#1</div>
                  <div className="text-xs sm:text-sm md:text-base text-white font-semibold">Best faculty</div>
                </div>
              </div>
              
              {/* Additional CTA for desktop */}
              <div className="hidden lg:flex gap-4 mt-6">
                <a
                  href="#registration"
                  className="inline-flex items-center justify-center bg-white text-[#d82209] px-8 py-4 rounded-full font-black text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Register Now
                </a>
                <a
                  href="#test-info"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold border-2 border-white/40 transition-all"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Registration Form (4 columns on desktop) */}
          <div className="lg:col-span-4 order-2 lg:order-2 flex items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-2xl p-4 sm:p-5 lg:p-6 w-full lg:sticky lg:top-8"
            >
              {/* Form Header - Matching competitor */}
              <div className="mb-4 sm:mb-5">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-1">
                  <span className="text-[#d82209]">AMRC-SAT</span>{" "}
                  <span className="text-yellow-500">Registration</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">*All fields are mandatory</p>
              </div>

              {/* Scholarship Info - Like competitor */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-5 border border-yellow-200">
                <div className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-1">
                  Up to 100% scholarship*
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <span>📊</span>
                  <span>Thousands of students already registered</span>
                </div>
              </div>

              {error && (
                <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-3 rounded text-sm">
                  <p className="text-red-700 font-semibold">{error}</p>
                </div>
              )}

              {success && (
                <div className="mb-4 bg-green-50 border-l-4 border-green-500 p-3 rounded text-sm">
                  <p className="text-green-700 font-semibold">{success}</p>
                </div>
              )}

              {dummyOTP && (
                <div className="mb-4 bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded text-sm">
                  <p className="text-yellow-800 font-semibold">
                    Development Mode: OTP is {dummyOTP}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Mobile Number */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Mobile/WhatsApp Number *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      maxLength={10}
                      required
                      className="flex-1 px-3 py-2.5 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#d82209] focus:outline-none transition-all"
                      placeholder="10-digit number"
                    />
                    <button
                      type="button"
                      onClick={handleSendOTP}
                      disabled={otpSent || isSendingOTP}
                      className="px-3 sm:px-4 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold text-xs sm:text-sm transition-all disabled:opacity-50 whitespace-nowrap"
                    >
                      {isSendingOTP ? "Sending..." : otpSent ? "Sent" : "Verify OTP"}
                    </button>
                  </div>
                </div>

                {/* OTP */}
                {otpSent && (
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      Enter OTP *
                    </label>
                    <input
                      type="text"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      maxLength={6}
                      required
                      className="w-full px-3 py-2.5 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#d82209] focus:outline-none transition-all"
                      placeholder="6-digit OTP"
                    />
                  </div>
                )}

                {/* Student Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#d82209] focus:outline-none transition-all"
                    placeholder="Full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#d82209] focus:outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* DOB */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    DOB *
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#d82209] focus:outline-none transition-all"
                  />
                </div>

                {/* Test Mode */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Select Test Mode *
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
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
                      <div className="px-3 sm:px-4 py-2.5 rounded-lg border-2 border-gray-300 peer-checked:border-[#d82209] peer-checked:bg-[#d82209]/10 cursor-pointer transition-all text-center font-semibold text-xs sm:text-sm">
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
                      <div className="px-3 sm:px-4 py-2.5 rounded-lg border-2 border-gray-300 peer-checked:border-[#d82209] peer-checked:bg-[#d82209]/10 cursor-pointer transition-all text-center font-semibold text-xs sm:text-sm">
                        Offline
                      </div>
                    </label>
                  </div>
                </div>

                {/* Test Date */}
                {formData.testMode && (
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      Test Date *
                    </label>
                    <select
                      name="testDate"
                      value={formData.testDate}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#d82209] focus:outline-none transition-all bg-white"
                    >
                      <option value="">Select test date</option>
                      {getAvailableDates().map((date) => (
                        <option key={date} value={date}>{date}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Time Slot */}
                {formData.testDate && formData.testDate !== "Any date from 1st Dec to 15th Dec" && (
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      Select Time Slot *
                    </label>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#d82209] focus:outline-none transition-all bg-white"
                    >
                      <option value="">Select time slot</option>
                      {getAvailableTimeSlots().map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Course */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Select Course *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#d82209] focus:outline-none transition-all bg-white"
                  >
                    <option value="">Select course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                {/* State */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Select Student State *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#d82209] focus:outline-none transition-all bg-white"
                  >
                    <option value="">Select your state</option>
                    {states.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                {/* Registration Fee Display - Like competitor */}
                

                {/* Submit Button - Matching competitor */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 sm:py-3.5 rounded-full font-black text-base sm:text-lg shadow-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? "Registering..." : "Register Now"}
                </button>

                {/* Terms */}
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By clicking "Register Now" you agree to our Terms & Conditions & I authorize AMRC to send information time to time via SMS, Call, WhatsApp, E-mail.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
