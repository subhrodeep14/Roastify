"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <section className="bg-[#F9FAFB] min-h-screen">
      <main className="flex items-center flex-col  bg-gradient-to-br from-[#F9FAFB] via-white to-[#F9FAFB] text-sm text-gray-800 max-md:px-4 text-center h-[785px] relative overflow-hidden">
        
        {/* Background Pattern */}
      
        <div className="absolute inset-0 opacity-40 pointer-events-none">
  {/* Top Left Glow */}
  <div className="absolute top-16 left-12 w-80 h-80 bg-gradient-to-br from-[#fef3c7] via-[#fbcfe8] to-[#fca5a5] rounded-full blur-3xl animate-pulse"></div>

  {/* Bottom Right Glow */}
  <div className="absolute bottom-16 right-12 w-[28rem] h-[28rem] bg-gradient-to-tl from-[#fca5a5] via-[#fdba74] to-[#fcd34d] rounded-full blur-3xl animate-pulse delay-300"></div>

  {/* Center Glow for Depth */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-[#fde68a] via-[#fbbf24] to-[#f97316] rounded-full blur-[120px] opacity-50"></div>
</div>

        
        {/* Navbar */}
        <nav className="flex items-center justify-between  w-full md:px-16 lg:px-24 xl:px-32 py-4 relative z-10">
           
        <a onClick={() => router.push("/")}>
            {/* Logo */}
            <Image src="/roastify logo.png" alt="Roast My Life" width={157} height={40} className="w-full h-[90px]" />
          </a>

          {/* Menu */}
          <div
            id="menu"
            className={`max-md:absolute max-md:bg-white/95 max-md:h-[785px] ${
              isMenuOpen ? "max-md:w-full" : "max-md:w-0"
            } max-md:overflow-hidden max-md:transition-[width] max-md:duration-300 max-md:top-0 max-md:left-0 max-md:flex-col max-md:justify-center max-md:text-lg max-md:backdrop-blur flex items-center gap-8 font-medium`}
          >
            <Link href="/" className="text-gray-700 text-xl font-semibold hover:text-[#FF6A3D] transition-colors">Home</Link>
            <Link href="/gallery" className="text-gray-700  text-xl font-semibold hover:text-[#FF6A3D] transition-colors">Gallery</Link>
            {/* <a href="#" className="text-gray-700 hover:text-[#FF6A3D] transition-colors">Team</a>
            <a href="#" className="text-gray-700 hover:text-[#FF6A3D] transition-colors">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-[#FF6A3D] transition-colors">Docs</a> */}

            {/* Close Button */}
            <button
              aria-label="close menu"
              className="size-6 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-[#FF6A3D]">
                  Home
                </Link>
                <Link href="/gallery" className="block px-3 py-2 text-gray-700 hover:text-[#FF6A3D]">
                  Gallery
                </Link>
                {/* <a href="#" className="block px-3 py-2 text-gray-700 hover:text-[#FF6A3D]">
                  Team
                </a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-[#FF6A3D]">
                  Pricing
                </a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-[#FF6A3D]">
                  Docs
                </a> */}
              </div>
            </div>
          )}

          {/* Get Started Button */}
          <button className="max-md:hidden px-6 py-2 bg-gradient-to-r from-[#FF6A3D] to-[#FF9671] text-white hover:from-[#FF5A2D] hover:to-[#FF8671] transition-all active:scale-95 rounded-full border border-transparent shadow-lg hover:shadow-xl">
            Get Started
          </button>

          {/* Menu Open Button */}
          <button
            aria-label="menu burger"
            className="size-6 md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 18h18M3 6h18" />
            </svg>
          </button>

        </nav>
        

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center mt-20 w-full relative z-10">
          
        <div className="flex items-center space-x-2.5 border border-orange-500/30 rounded-full mb-20 bg-orange-500/10 p-1 text-sm text-gray-800">
            <div className="bg-white border bg-gradient-to-r from-[#FF6A3D] to-[#FF9671] text-white border-gray-500/30 rounded-2xl px-3 py-1">
                <p >Puch AI</p>
            </div>
            <p className="pr-3">Ready to roast, let's try</p>
        </div>
          <h1 className="text-4xl md:text-[40px] font-bold text-gray-900 mb-6">
          Turn Your Pic Into a Comedy Masterpiece
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Upload. Roast. Laugh till you cry — all in seconds.
          </p>

    

          {/* Gallery CTA */}
          <div className="mt-8">
            <Link 
              href="/gallery" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF6A3D] to-[#FF9671] text-white rounded-lg hover:from-[#FF5A2D] hover:to-[#FF8671] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Try it Now
            </Link>
          </div>
        </div>

        
      </main>
    </section>
  );
}
