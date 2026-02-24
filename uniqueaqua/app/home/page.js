"use client";
import React from 'react';
import Image from 'next/image';

// For local images (if stored in public folder)
import backgroundImage from '../public/images/background.jpg'; // Alternative import method

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Option 1: Using Next.js Image component (recommended) */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[800px]">
        <Image
          src="/images/background.jpg" // Image from public folder
          alt="Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Option 2: Using regular img tag (if you prefer) */}
      {/* <img
        className="w-full h-auto"
        src="/images/background.jpg"
        alt="Background"
      /> */}

      {/* Your other home page content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}