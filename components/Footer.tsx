"use client";

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#d82209] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <div>
                  <div className="font-semibold">Offline Batch</div>
                  <a href="tel:9007002666" className="text-white/90 hover:text-white">
                    9007002666
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <div>
                  <div className="font-semibold">Online Batch & Books</div>
                  <a href="tel:08042303689" className="text-white/90 hover:text-white">
                    08042303689
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:7303088746" className="text-white/90 hover:text-white">
                  7303088746
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <a
                  href="mailto:support@anandmani.in"
                  className="text-white/90 hover:text-white"
                >
                  support@anandmani.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#registration" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Register Now
                </a>
              </li>
              <li>
                <a href="#test-info" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Test Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Test Instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Syllabus
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Sample Papers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="text-white/90 text-sm">
              <p className="mb-2">Dr. Anand Mani Residential Coaching Institute</p>
              <p>AMRC-SAT Entrance Exam</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p>&copy; 2024 AMRC-SAT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

