"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
    const router = useRouter();
    return (
        <footer className="w-full bg-gradient-to-b from-[#1B004D] to-[#2E0A6F] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <a onClick={() => router.push("/")}>
            {/* Logo */}
            <Image src="/roastify logo.png" alt="Roast My Life" width={157} height={40} className="w-full h-[90px]" />
             </a>
                    
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Roast My Life is a platform that allows you to roast your life.
                </p>
            </div>
            <div className="border-t border-[#3B1A7A]">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://prebuiltui.com">prebuiltui</a> ©2025. All rights reserved.
                </div>
            </div>
        </footer>
    );
};