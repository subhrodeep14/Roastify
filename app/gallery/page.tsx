"use client"
import { useState } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Single featured AI generated image
  const featuredImage = {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800',
    title: 'AI Generated Masterpiece',
    description: 'A stunning AI-generated artwork that showcases the incredible potential of artificial intelligence in creative expression.',
    date: '2025-01-15',
    likes: 42,
    shares: 8
  };

  const handleShare = (platform: string) => {
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(`Check out this amazing AI-generated image: ${featuredImage.title}`);
    
    let shareLink = '';
    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
        break;
      case 'whatsapp':
        shareLink = `https://wa.me/?text=${shareText}%20${shareUrl}`;
        break;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navbar */}
      <nav className="bg-white/10 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-white">
                Roast My Life
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/gallery" className="text-white font-medium">
                Gallery
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-white/80"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/20">
                <Link href="/" className="block px-3 py-2 text-white/80 hover:text-white">
                  Home
                </Link>
                <Link href="/gallery" className="block px-3 py-2 text-white font-medium">
                  Gallery
                </Link>
                <Link href="#" className="block px-3 py-2 text-white/80 hover:text-white">
                  About
                </Link>
                <Link href="#" className="block px-3 py-2 text-white/80 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Featured AI Creation
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience the power of artificial intelligence in art and creativity.
          </p>
        </div>

        {/* Single Featured Image */}
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">
            {/* Image */}
            <div className="relative">
              <img
                src={featuredImage.imageUrl}
                alt={featuredImage.title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute top-6 right-6">
                <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                {featuredImage.title}
              </h3>
              <p className="text-white/80 text-lg mb-6">
                {featuredImage.description}
              </p>
              
              {/* Stats */}
              <div className="flex items-center justify-between text-white/60 mb-8">
                <span className="text-lg">❤️ {featuredImage.likes}</span>
                <span className="text-lg">📅 {featuredImage.date}</span>
              </div>

              {/* Share Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => handleShare('twitter')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-6 h-6 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Share This Creation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
