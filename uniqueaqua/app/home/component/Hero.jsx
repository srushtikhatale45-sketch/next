// components/Hero.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { c1, c2, c3 } from "@/assets";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("right");

  const slides = [
    {
      id: 1,
      image: c1,
      title: "Unique Aqua & Chemical Industries",
      subtitle:
        "Leading Manufacturer of High-Quality Water Treatment Solutions",
      description:
        "Providing innovative chemical solutions for industrial and commercial applications since 1995",
      cta: "Explore Products",
      features: [
        "Water Treatment Chemicals",
        "Industrial Solutions",
        "Expert Support",
      ],
    },
    {
      id: 2,
      image: c2,
      title: "Premium Chemical Solutions",
      subtitle: "Comprehensive Range of Industrial Chemicals",
      description:
        "From water purification to specialized industrial applications, we deliver excellence",
      cta: "View Catalog",
      features: ["Quality Assured", "ISO Certified", "Eco-Friendly"],
    },
    {
      id: 3,
      image: c3,
      title: "Innovation & Excellence",
      subtitle: "25+ Years of Industry Leadership",
      description:
        "Trusted by leading industries across India for reliable chemical solutions",
      cta: "Contact Us",
      features: ["Pan-India Delivery", "Technical Support", "Custom Solutions"],
    },
  ];
  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection("right");
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Resume auto-play after user inactivity
  useEffect(() => {
    let timeout;
    if (!isAutoPlaying) {
      timeout = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);
    }
    return () => clearTimeout(timeout);
  }, [isAutoPlaying]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out
              ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : direction === "right"
                    ? index < currentSlide
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                    : index < currentSlide
                      ? "opacity-0 translate-x-full"
                      : "opacity-0 -translate-x-full"
              }`}
          >
            {/* Background Image with dark overlay for better text readability */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
              {/* Optional: Add a simple dark overlay if you want better text contrast */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Removed the gradient overlay that was causing color changes */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h1
                  className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 
                    transition-all duration-1000 delay-300 transform
                    ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-xl sm:text-2xl mb-10 max-w-2xl mx-auto
                    transition-all duration-1000 delay-500 transform
                    ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                >
                  {slide.subtitle}
                </p>
                <button
                  className={`px-8 py-4 bg-white text-gray-900 rounded-full 
                    font-semibold text-lg hover:bg-opacity-90 
                    transform transition-all duration-1000 delay-700
                    hover:scale-105 hover:shadow-xl
                    ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rest of the component remains the same */}
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 
          w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm
          flex items-center justify-center text-white
          hover:bg-black/50 transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 
          w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm
          flex items-center justify-center text-white
          hover:bg-black/50 transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative w-16 h-1 rounded-full overflow-hidden
              transition-all duration-300
              ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div
                className="absolute top-0 left-0 h-full bg-white/80
                  animate-progress-bar"
                style={{ animationDuration: "5000ms" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-8 right-8 p-3 rounded-full 
          bg-black/30 backdrop-blur-sm text-white
          hover:bg-black/50 transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-white"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 9v6m4-6v6"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
          </svg>
        )}
      </button>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
        flex flex-col items-center space-y-2 text-white"
      >
        <span className="text-sm uppercase tracking-wider opacity-70">
          Scroll
        </span>
        <div
          className="w-5 h-10 border-2 border-white/50 rounded-full 
          flex justify-center"
        >
          <div
            className="w-1 h-2 bg-white rounded-full mt-2 
            animate-scroll-indicator"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
