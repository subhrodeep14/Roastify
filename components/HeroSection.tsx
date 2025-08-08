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
      <main className="flex items-center flex-col justify-between bg-gradient-to-br from-[#F9FAFB] via-white to-[#F9FAFB] text-sm text-gray-800 max-md:px-4 text-center h-[785px] relative overflow-hidden">
        
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#eedcad] to-[#FF9671] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-[#FF9671] to-[#FF6A3D] rounded-full blur-3xl"></div>
        </div> */}
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
        <div className="flex flex-col items-center justify-center w-full relative z-10">
          <h1 className="text-4xl md:text-[40px] font-bold text-gray-900 mb-6">
          Make Them Laugh. Every. Single. Time.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Roastify transforms plain ideas into clever, scroll-stopping roasts — instantly.
          </p>

          {/* Textarea Box */}
          <div className="max-w-xl w-full  rounded-xl overflow-hidden bg-transparent mt-4 ">
            <div className="bg-white/60 rounded-2xl">
            <label className="flex flex-col items-center justify-center w-full mb-5 h-40 rounded-xl cursor-pointer bg-white/60 backdrop-blur-md hover:border-amber-400 hover:bg-amber-50 transition">
            <input type="file" accept="image/*" className="hidden" />
            <div className="flex flex-col items-center gap-2">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
            >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h3l2-3h6l2 3h3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
        <p className="text-sm font-medium text-gray-700">Click or drag image here</p>
        <p className="text-xs text-gray-500">PNG, JPG, WebP — max 5MB</p>
        </div>
        </label>

            </div>
          <div className=" bg-white/90 rounded-2xl">
            <textarea
              className="w-full p-4 pb-0 resize-none outline-none bg-transparent text-gray-800 placeholder-gray-500"
              placeholder="Tell us about your idea"
              rows={3}
            />
            <div className="flex items-center justify-between pb-4 px-4">
              <button
                className="flex items-center justify-center bg-gray-100 p-2 rounded-full size-8 hover:bg-gray-200 transition-colors"
                aria-label="Add"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5h9M5.5 1v9"
                    stroke="#9CA3AF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="flex items-center justify-center p-2 rounded-full size-8 bg-gradient-to-r from-[#FF6A3D] to-[#FF9671] hover:from-[#FF5A2D] hover:to-[#FF8671] transition-all shadow-md hover:shadow-lg"
                aria-label="Send"
              >
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5 5.5 1 10 5.5m-4.5 5.143V1"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          </div>

          {/* Suggestions */}
          {/* <div className="grid grid-cols-2 gap-4 mt-8 text-gray-500 max-w-2xl">
            <p className="cursor-pointer hover:text-[#FF6A3D] transition-colors">
              How do I write a resume or cover letter?
            </p>
            <p className="cursor-pointer hover:text-[#FF6A3D] transition-colors">How do I improve my writing skills?</p>
            <div className="w-full h-px bg-gray-200"></div>
            <div className="w-full h-px bg-gray-200"></div>
            <p className="cursor-pointer hover:text-[#FF6A3D] transition-colors">Can you translate something for me?</p>
            <p className="cursor-pointer hover:text-[#FF6A3D] transition-colors">How can I be more productive?</p>
          </div> */}

          {/* Gallery CTA */}
          <div className="mt-8">
            <Link 
              href="/gallery" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF6A3D] to-[#FF9671] text-white rounded-lg hover:from-[#FF5A2D] hover:to-[#FF8671] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Roast It
            </Link>
          </div>
        </div>

        
      </main>
    </section>
  );
}
