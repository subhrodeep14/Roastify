"use client"
import { Eraser, FireExtinguisher, Image, ImageDown, Sparkles } from 'lucide-react';

import React, { useState } from 'react'
import axios from 'axios'
import Link from "next/link";
import Images from "next/image";
import { useRouter } from "next/navigation";



//axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Roast = () => {


  
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')
   const [file, setFile] = useState<File | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]); // ✅ file state matches type File | null
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   // try {
  //   //   setLoading(true)

  //   //   const fromData = new FormData()

  //   //   fromData.append('image',inputValue);

  //   //   const { data } = await axios.post('/api/ai/remove-image-background', fromData,
  //   //     { headers: { Authorization: `Bearer ${await getToken()}` } }
  //   //   )

  //   //   if (data.success) {
  //   //     setContent(data.content)
  //   //   } else {
  //   //     toast.error(data.message)
  //   //   }
  //   // } catch (error) {
  //   //   toast.error(data.message)
  //   // }
  //   // setLoading(false)
  // }
  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start justify-center flex-wrap gap-4 text-slate-700 bg-[#F9FAFB] min-h-screen'>
      <nav className="flex items-center justify-between  w-full md:px-16 lg:px-24 xl:px-32  relative z-10">
           
        <a onClick={() => router.push("/")}>
            {/* Logo */}
            <Images src="/roastify logo.png" alt="Roast My Life" width={157} height={40} className="w-full h-[90px]" />
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
            Get Stared
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
      
      {/* left col */}
      <form  className='w-full  md:w-1/3 p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 font-bold text-[#FF4938]' /> 
          <h1 className='text-xl font-semibold'>Make Fun</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Upload Image</p>
         <div className="bg-white/60 rounded-2xl">
            <label className="flex flex-col items-center justify-center w-full mb-5 h-40 rounded-xl cursor-pointer bg-white/60 backdrop-blur-md hover:border-amber-400 hover:bg-amber-50 transition">
            <input onChange={handleChange} type="file" accept="image/*" className="hidden" />
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

        <button disabled={loading} className='w-full flex items-center justify-center gap-2 px-4 py-2 mt-6 text-sm text-white  bg-gradient-to-r from-[#F6AB41] to-[#FF4938] rounded-lg cursor-pointer'>
          {loading?<span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span>:
          <Image className='w-5' />}
          Roast It
        </button>

      </form>


      {/* right col */}
      <div className='w-full md:w-1/2  bg-white rounded-lg flex flex-col border border-gray-200 p-4 min-h-96 '>
        <div className='flex items-center gap-3'>
          <ImageDown className='size-5 text-[#FF4938]' />
          <h1 className='text-xl font-semibold'>Processes Image</h1>
        </div>
            {
              !content ?( <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-500'>
            <Image className='w-9 h-9' />
            <p>Upload a image and click "Roast It" to process your image</p>
          </div>
        </div>):(
          <img src={content} alt="image" className='mt-3  w-full h-full' />
        )
            }
       

      </div>
    </div>
  )
}

export default Roast