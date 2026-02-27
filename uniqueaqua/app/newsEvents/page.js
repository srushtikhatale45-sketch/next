// app/news/page.js or pages/news.js
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { event1, event2 } from "@/assets";

export default function NewsPage() {
  const sectionRefs = {
    events: useRef(null),
    products: useRef(null),
    social: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 text-white py-10  top-0 z-30 shadow-lg">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">News & Events</h1>
          <p className="text-2xl text-sky-100">
            Stay updated with our latest activities and exhibitions
          </p>
        </div>
      </div>

      {/* Floating Navigation */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-md py-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { id: "events", label: "Events" },
              { id: "products", label: "Products" },
              { id: "social", label: "Follow Us" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-6 py-2 rounded-full font-medium transition-all duration-300 
                  bg-sky-50 text-sky-700 
                  hover:bg-sky-600 hover:text-white
                  border-2 border-sky-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full Page Sections */}
      <div className="relative">
        {/* NIMA Exhibition Section */}
        <section
          ref={sectionRefs.events}
          className="min-h-screen py-20 px-4 bg-gradient-to-br from-sky-50 to-white"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold text-sky-600 mb-4">
                    NIMA Exhibition
                  </h2>
                  <p className="text-xl text-sky-500 font-semibold mb-2">
                    Nashik Industries and Manufacturers' Association
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Nashik Industries and Manufacturers' Association (NIMA) is
                    an apex body representing the industries and promotes their
                    interest nationally & internationally. Under the banner of
                    NIMA, various initiatives are organized which give further
                    trust to the industrial activities.
                  </p>

                  <div className="bg-sky-50 rounded-xl p-6 mb-6">
                    <h3 className="text-2xl font-bold text-sky-800 mb-3">
                      NIMA Index Exhibition
                    </h3>
                    <p className="text-gray-700">
                      NIMA has been organizing NIMA Index, an industrial
                      exhibition, once in every three years. Being a major
                      industrial exhibition, NIMA Index is visited by people at
                      large – including the CEOs of various industrial houses,
                      decision makers, decision facilitators, vendors, customers
                      and suppliers from all over India and abroad.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-sky-600 text-xl">✓</span>
                      <p className="text-gray-700">
                        Full support and participation of local and state
                        government
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sky-600 text-xl">✓</span>
                      <p className="text-gray-700">
                        Widely covered by print and electronic media
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border-l-8 border-sky-500">
                  <h3 className="text-2xl font-bold text-sky-800 mb-4">
                    Unique Aqua Systems Participation
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Unique Aqua Systems has taken an active participation with
                    new technological products. The perspective clients visited
                    and admired the quality products and got technical
                    information from our expertise during their visits. NIMA
                    exhibition gave us a platform for the development of our
                    business.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={event2}
                    alt="Exhibition hall"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white">
                      <p className="text-2xl font-bold">
                        NIMA Index Exhibition
                      </p>
                      <p className="text-lg">Once every three years</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="text-3xl mb-2">🏭</div>
                    <div className="text-xl font-bold text-sky-800">500+</div>
                    <div className="text-gray-600">Exhibitors</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="text-3xl mb-2">👥</div>
                    <div className="text-xl font-bold text-sky-800">50K+</div>
                    <div className="text-gray-600">Visitors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IPA & Seminar Section */}
        <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-sky-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={event1}
                  alt="Seminar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
                    <p className="text-2xl text-white font-bold">
                      Technical Seminar
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-sky-600 mb-2">
                    Indian Plumbing Association
                  </h2>
                  <p className="text-gray-600 text-lg">
                    IPA is the apex body of plumbing professionals in India.
                    Established in 1993 with the objective to promote
                    development of plumbing and building services industry.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border-l-8 border-sky-500">
                  <h3 className="text-3xl font-bold text-sky-800 mb-4">
                    Seminar for Electroplating and Phosphating
                  </h3>

                  <div className="space-y-4">
                    <p className="text-gray-700 text-lg">
                      <span className="font-semibold text-sky-600">
                        Nashik Metal Finishers Association
                      </span>{" "}
                      organized a seminar on effect of water quality on metal
                      finishing.
                    </p>

                    <div className="bg-sky-50 rounded-xl p-6">
                      <p className="text-gray-700 mb-3">
                        The trainer of the seminar was{" "}
                        <span className="font-bold text-sky-800">
                          Mr. Amit Rudre
                        </span>
                        , Director of Unique Aqua Systems and Chemical
                        Industries.
                      </p>
                    </div>

                    <p className="text-gray-700">
                      In this seminar he has trained the participants from
                      various electroplating and phosphating industries
                      regarding quality of water and its effects on the metal
                      finishing. Live demonstration of water treatment systems
                      was also organized.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-4">
                      <span className="bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium">
                        #Electroplating
                      </span>
                      <span className="bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium">
                        #Phosphating
                      </span>
                      <span className="bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium">
                        #WaterQuality
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="text-2xl font-bold text-sky-600">1993</div>
                    <div className="text-gray-600">IPA Established</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="text-2xl font-bold text-sky-600">
                      Live Demo
                    </div>
                    <div className="text-gray-600">Water Treatment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section
          ref={sectionRefs.products}
          className="min-h-screen py-20 px-4 bg-gradient-to-br from-sky-50 to-white"
        >
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-5xl font-bold text-sky-600 mb-12 text-center">
              Our Products
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=1200&auto=format&fit=crop"
                  alt="Water testing kits"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-10 shadow-xl text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-7xl mb-6">🧪</div>
                  <h3 className="text-4xl font-bold text-sky-800 mb-4">
                    Water Testing Kits
                  </h3>
                  <p className="text-xl text-gray-600">
                    Comprehensive water analysis solutions for industrial and
                    commercial applications
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { feature: "pH Testing", icon: "📊" },
                    { feature: "TDS Meter", icon: "📏" },
                    { feature: "Hardness Test", icon: "💧" },
                    { feature: "Chlorine Test", icon: "🧪" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium text-gray-700">
                        {item.feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-sky-700 transition-all duration-300 shadow-lg">
                  Request Product Catalog
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Follow Us Section */}
        <section
          ref={sectionRefs.social}
          className="min-h-screen py-20 px-4 bg-gradient-to-br from-sky-50 to-white"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-sky-600 mb-4">
                Follow Us On Facebook
              </h2>
              <p className="text-xl text-gray-600">
                Stay connected for latest updates and news
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
                <div className="text-8xl mb-6 text-blue-600">📘</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Unique Aqua Systems
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Follow us on Facebook for regular updates about exhibitions,
                  seminars, and new product launches
                </p>

                <div className="space-y-4">
                  <button className="w-full bg-[#1877F2] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#166FE5] transition-all duration-300 shadow-lg flex items-center justify-center gap-3">
                    <span className="text-2xl">👍</span>
                    Like our Page
                  </button>

                  <div className="grid grid-cols-3 gap-3">
                    {["Posts", "Followers", "Photos"].map((item, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3">
                        <div className="font-bold text-gray-800">1.2K</div>
                        <div className="text-xs text-gray-600">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-4">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-3xl">
                    📅
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Upcoming Event</h4>
                    <p className="text-sky-600">NIMA Index 2024</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-4">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-3xl">
                    🧪
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">New Product</h4>
                    <p className="text-sky-600">Advanced Testing Kits</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-4">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-3xl">
                    🎤
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Seminar</h4>
                    <p className="text-sky-600">Water Quality Training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-sky-900 to-cyan-900">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "20+", label: "Exhibitions", icon: "🏭" },
                { number: "50+", label: "Seminars", icon: "🎤" },
                { number: "1000+", label: "Attendees", icon: "👥" },
                { number: "30+", label: "Products", icon: "🧪" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center text-white"
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-xl text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-sky-600 to-cyan-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to know more about our events?
            </h3>
            <p className="text-2xl text-sky-100 mb-8">
              Contact us for upcoming exhibition schedules and seminar
              registrations
            </p>
            <button className="bg-white text-sky-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-sky-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
