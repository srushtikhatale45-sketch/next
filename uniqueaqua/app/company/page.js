// app/company/page.js or pages/company.js
"use client";

import Image from "next/image";
import { useRef } from "react";

export default function CompanyPage() {
  const sectionRefs = {
    about: useRef(null),
    quality: useRef(null),
    mission: useRef(null),
    services: useRef(null),
    benefits: useRef(null),
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Unique Aqua Systems
          </h1>
          <p className="text-2xl text-sky-100">
            Your Complete Water Treatment Partner Since 2002
          </p>
        </div>
      </div>

      {/* Floating Navigation */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-md py-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { id: "about", label: "About Us" },
              { id: "quality", label: "Quality Policy" },
              { id: "mission", label: "Our Mission" },
              { id: "services", label: "Services" },
              { id: "benefits", label: "Benefits" },
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
        {/* About Section */}
        <section
          ref={sectionRefs.about}
          className="min-h-screen py-20 px-4 bg-gradient-to-br from-sky-50 to-white"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-sky-600 mb-8">
                  About The Company
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <span className="font-semibold text-sky-600">
                    Unique Aqua Systems and Chemical Industries
                  </span>{" "}
                  is a comprehensive water treatment company and expert
                  consultant, providing professional advice and technical
                  support to businesses across the Asian region since 2002.
                </p>

                <div className="grid gap-4 mt-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-8 border-sky-500">
                    <h3 className="text-2xl font-bold text-sky-800 mb-2">
                      💧 Consultancy & Service
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Professional advice and technical support, not just
                      products.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-8 border-sky-500">
                    <h3 className="text-2xl font-bold text-sky-800 mb-2">
                      ⚙️ Customized Solutions
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Standard and tailor-made products from our own R&D
                      facilities.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-8 border-sky-500">
                    <h3 className="text-2xl font-bold text-sky-800 mb-2">
                      🎯 Our Goal
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Efficient water processes, cost savings, and reliable
                      equipment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092335871-4c7b2f6d9e3f?w=1200&auto=format&fit=crop"
                  alt="Water treatment facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white">
                    <p className="text-2xl font-bold">
                      ISO Certified Since 2005
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section
          ref={sectionRefs.quality}
          className="min-h-screen py-20 px-4 bg-gradient-to-br from-sky-50 to-white"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&auto=format&fit=crop"
                  alt="Quality control"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
              </div>

              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-sky-600 mb-8">
                  Quality Policy
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      num: 1,
                      title: "Customer First",
                      desc: "Meeting exact customer requirements for chemicals & equipment",
                    },
                    {
                      num: 2,
                      title: "Following the Rules",
                      desc: "Compliance with all necessary rules and regulations",
                    },
                    {
                      num: 3,
                      title: "Skilled Team",
                      desc: "Quality awareness and continuous employee training",
                    },
                    {
                      num: 4,
                      title: "Continuous Improvement",
                      desc: "Teamwork and strict adherence to quality systems",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg"
                    >
                      <div className="w-14 h-14 bg-sky-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                        {item.num}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-lg">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-sky-100 border-l-8 border-sky-600 p-6 rounded-2xl mt-8">
                  <p className="text-xl text-gray-800 font-medium">
                    <span className="font-bold">The Bottom Line:</span> They
                    deliver on promises through teamwork and continuous
                    improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section
          ref={sectionRefs.mission}
          className="min-h-screen py-20 px-4 bg-gradient-to-br from-sky-50 to-white"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-sky-600 mb-8">
                  Our Mission
                </h2>

                <div className="bg-white rounded-3xl p-10 shadow-xl text-center mb-8">
                  <p className="text-3xl text-sky-900 font-semibold italic">
                    "To become a leading provider of sustainable water solutions
                    and technical services in Asia."
                  </p>
                </div>

                <div className="bg-sky-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    🤝 How We'll Achieve It
                  </h3>
                  <p className="text-xl text-gray-700">
                    Long-term partnerships with Technical Service Providers,
                    creating a network that benefits everyone.
                  </p>
                </div>
              </div>

              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop"
                  alt="Sustainability"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Who Benefits
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: "👥",
                        title: "Customers",
                        desc: "Effective solutions",
                      },
                      {
                        icon: "👨‍💼",
                        title: "Employees",
                        desc: "Good opportunities",
                      },
                      {
                        icon: "🏘️",
                        title: "Communities",
                        desc: "Responsible ops",
                      },
                      {
                        icon: "🌍",
                        title: "Environment",
                        desc: "Sustainable focus",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white"
                      >
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-sm text-white/80">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={sectionRefs.services}
          className="min-h-screen py-20 px-4 bg-gradient-to-br from-sky-50 to-white"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e6cfd5?w=1200&auto=format&fit=crop"
                  alt="Consulting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
              </div>

              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-sky-600 mb-8">
                  What We Do
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      title: "🔬 Water Treatment Chemicals",
                      desc: "Speciality chemicals for boilers, cooling systems, and RO plants",
                    },
                    {
                      title: "⚙️ Equipment & Filters",
                      desc: "Sand filters, DM plants, UV systems, and filter cartridges",
                    },
                    {
                      title: "🏭 Industrial Solutions",
                      desc: "Sugar process chemicals, paper industry, and wastewater treatment",
                    },
                    {
                      title: "📋 Technical Consulting",
                      desc: "Expert advice and value-added technical services",
                    },
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 shadow-lg border-l-8 border-sky-500 hover:translate-x-2 transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold text-sky-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-lg">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          ref={sectionRefs.benefits}
          className="min-h-screen py-20 px-4 bg-gradient-to-br from-sky-50 to-white"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-sky-600 mb-8">
                  Who Benefits
                </h2>

                <div className="grid gap-4">
                  {[
                    {
                      title: "Industrial Clients",
                      benefits: [
                        "Boiler efficiency",
                        "Scale prevention",
                        "Cost savings",
                      ],
                      icon: "🏭",
                    },
                    {
                      title: "Commercial Businesses",
                      benefits: [
                        "Water quality",
                        "Equipment longevity",
                        "Expert support",
                      ],
                      icon: "🏢",
                    },
                    {
                      title: "Communities",
                      benefits: [
                        "Clean water",
                        "Responsible practices",
                        "Sustainable solutions",
                      ],
                      icon: "👥",
                    },
                    {
                      title: "Environment",
                      benefits: [
                        "Eco-friendly",
                        "Sustainable focus",
                        "Green technology",
                      ],
                      icon: "🌿",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 shadow-lg border-l-8 border-sky-500"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{item.icon}</span>
                        <h3 className="text-2xl font-bold text-sky-800">
                          {item.title}
                        </h3>
                      </div>
                      <ul className="grid grid-cols-3 gap-2">
                        {item.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-700 bg-sky-50 rounded-lg p-2"
                          >
                            <span className="text-sky-500 text-xl">✓</span>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&auto=format&fit=crop"
                  alt="Community"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
                    <p className="text-2xl text-white font-bold">
                      Making a Difference Together
                    </p>
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
                { number: "2002", label: "Established", icon: "📅" },
                { number: "20+", label: "Years Experience", icon: "⭐" },
                { number: "1000+", label: "Clients Served", icon: "🤝" },
                { number: "ISO", label: "Certified", icon: "✅" },
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
              Ready to optimize your water treatment?
            </h3>
            <p className="text-2xl text-sky-100 mb-8">
              Contact us for professional consultation and customized solutions
            </p>
            <button className="bg-white text-sky-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-sky-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Get in Touch Today
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
