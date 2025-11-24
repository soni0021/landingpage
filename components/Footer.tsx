"use client";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#d82209] text-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10">Contact Us</h3>
          
          <div className="space-y-5 sm:space-y-6 mb-10 sm:mb-12">
            <div className="text-lg sm:text-xl lg:text-2xl">
              <span className="text-2xl sm:text-3xl">📞</span>{" "}
              <a 
                href="tel:+919007002666" 
                className="hover:text-white/80 transition-colors font-bold min-h-[48px] inline-flex items-center"
              >
                +91 9007002666
              </a>
            </div>
            
            <div className="text-lg sm:text-xl lg:text-2xl">
              <span className="text-2xl sm:text-3xl">🌐</span>{" "}
              <a 
                href="https://www.anandmani.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors font-bold min-h-[48px] inline-flex items-center"
              >
                www.anandmani.in
              </a>
            </div>
            
            <div className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-4">
              Dr. Anand Mani Residential School, Plot no. 55, Chauganpur, Knowledge Park V, Greater Noida, Uttar Pradesh 201306
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 sm:pt-8 text-base sm:text-lg text-white/80">
            <p>© 2025 Dr. Anand Mani Residential Coaching • All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

