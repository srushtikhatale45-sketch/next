// app/company/page.jsx (for App Router) or pages/company.js (for Pages Router)
 // Only needed if using App Router and client-side features

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { vol } from "../../assets"; // Adjust path as needed

const Company = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = {
    about: useRef(null),
    quality: useRef(null),
    mission: useRef(null),
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = {};

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            setIsVisible((prev) => ({ ...prev, [key]: entry.isIntersecting }));
          },
          { threshold: 0.2, rootMargin: "0px" },
        );

        observers[key].observe(ref.current);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  // Parallax effect for hero section
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Parallax */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1563795888076-0a720779a453?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-sky-400/60"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              Unique Aqua Systems
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Transforming Water Treatment Solutions Since 2002
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === "about"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-blue-600 hover:bg-blue-50"
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => setActiveTab("quality")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === "quality"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-sky-400 hover:bg-blue-50"
                }`}
              >
                Quality Policy
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === "mission"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-sky-400 hover:bg-blue-50"
                }`}
              >
                Our Mission
              </button>
            </div>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Us Section */}
        <div
          ref={sectionRefs.about}
          className={`mb-24 transition-all duration-1000 transform ${
            isVisible.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="relative h-96 overflow-hidden group">
              <Image
                src={vol}
                alt="Water Treatment Facility"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-400/90 via-blue-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-4xl font-bold text-white mb-2">About Us</h2>
                <div className="flex items-center text-blue-200">
                  <span className="w-12 h-0.5 bg-blue-400 mr-3"></span>
                  <span>Trusted Excellence Since 2002</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sky-400">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-semibold">
                      Two Decades of Excellence
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Unique Aqua Systems and Chemical Industries is a trusted and
                    experienced water treatment company serving customers across
                    the Asian region since 2002. With more than two decades of
                    dedicated service in the field of water treatment, we have
                    built a strong reputation for delivering reliable
                    consultancy, advanced technical support, and high-quality
                    products. Our journey began with a clear vision — to create
                    a complete water treatment solution provider that customers
                    can depend on for efficiency, innovation, and long-term
                    performance.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sky-400">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span className="font-semibold">
                      Complete Solutions Provider
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Water is one of the most valuable natural resources, and
                    managing it properly is essential for industries,
                    institutions, and communities. At Unique Aqua Systems and
                    Chemical Industries, we understand the importance of clean
                    and treated water in daily operations. Whether it is for
                    manufacturing industries, power plants, hospitals,
                    educational institutions, commercial buildings, or
                    residential complexes, we offer complete and customized
                    water treatment solutions that meet specific requirements.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
                <p className="text-gray-800 italic">
                  Our strength lies in our long experience and technical
                  expertise. Over the years, we have gained deep knowledge of
                  various water treatment challenges and industry needs. This
                  experience allows us to understand customer problems quickly
                  and provide practical, cost-effective solutions. We combine
                  innovative technologies with skilled technical representatives
                  who are trained to deliver professional service and guidance.
                  Our team works closely with customers to study their systems,
                  identify areas for improvement, and recommend the best
                  possible treatment approach.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-sky-400 text-white p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">2002+</div>
                  <div className="text-blue-200">Years of Excellence</div>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <div className="text-green-200">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-sky-400 to-sky-400 text-white p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-purple-200">Happy Clients</div>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <p className="text-gray-700 leading-relaxed">
                  One of our major advantages is our commitment to research and
                  development. Through continuous research and innovation, we
                  ensure that our products and solutions remain updated with the
                  latest technological advancements. Our in-house production
                  facilities allow us to manufacture a wide range of specialty
                  chemicals and water treatment products under strict quality
                  control. Because we manage our own production, we can maintain
                  consistency, reliability, and timely delivery.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We offer an extensive range of products, including water
                  treatment chemicals, specialty chemicals, and equipment
                  designed for various industrial and institutional
                  applications. In addition to standard products, we also
                  provide tailor-made solutions. Every industry has unique
                  requirements, and we believe that water treatment systems
                  should be designed according to specific operational needs.
                  Our customized solutions help clients optimize system
                  efficiency, reduce operational costs, and achieve long-term
                  reliability.
                </p>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
                <p className="text-gray-800">
                  Over the years, we have served different types of industries
                  and institutions. This diversified experience has helped us
                  standardize our products according to required specifications
                  while still maintaining flexibility for customization. We
                  carefully study water quality parameters, system design, and
                  operational conditions before recommending any product or
                  program. Our goal is always to improve system performance
                  while ensuring safety and compliance.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  ISO Certified
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  R&D Focused
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  Custom Solutions
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Policy Section */}
        <div
          ref={sectionRefs.quality}
          className={`mb-24 transition-all duration-1000 transform ${
            isVisible.quality
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="relative h-80 overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Quality Control"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-4xl font-bold text-white mb-2">
                  Quality Policy
                </h2>
                <div className="flex items-center text-green-200">
                  <span className="w-12 h-0.5 bg-green-400 mr-3"></span>
                  <span>Excellence Through Standards</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-green-600">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-semibold">
                      Our Quality Commitment
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    At Unique Aqua Systems and Chemical Industries, quality is
                    the foundation of everything we do. We are fully committed
                    to providing our customers with products and services
                    related to specialty chemicals and equipment that meet
                    agreed requirements and exceed expectations. Our quality
                    policy reflects our dedication to maintaining high
                    standards, ensuring compliance, and continuously improving
                    our processes.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-green-600">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" />
                    </svg>
                    <span className="font-semibold">
                      Compliance & Standards
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We understand that our customers depend on us for reliable
                    water treatment solutions. Therefore, we ensure that all our
                    products comply with customer specifications, regulatory
                    requirements, and industry standards. From the initial stage
                    of product development to final delivery, every process is
                    carefully controlled to maintain consistency and
                    performance.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-2xl">
                <p className="text-gray-800">
                  Compliance is a key part of our quality system. We strictly
                  follow applicable laws, safety guidelines, and environmental
                  regulations. Our internal quality assurance system is designed
                  to monitor operations regularly, identify potential
                  improvements, and ensure adherence to established procedures.
                  Being an ISO-certified company strengthens our commitment to
                  structured processes and documented quality control systems.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="bg-white border-2 border-green-500 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800">ISO Certified</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Structured quality processes
                  </p>
                </div>

                <div className="bg-white border-2 border-green-500 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800">
                    Team Responsibility
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Shared quality ownership
                  </p>
                </div>

                <div className="bg-white border-2 border-green-500 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800">
                    Continuous Improvement
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">Always evolving</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Quality is not only the responsibility of a specific
                  department — it is a shared responsibility of every employee
                  in our organization. We actively promote quality awareness
                  among all team members. Through regular training programs and
                  skill development sessions, we ensure that our employees
                  understand quality standards, system requirements, and
                  customer expectations. We believe that a knowledgeable and
                  skilled workforce is essential for delivering superior
                  products and services.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Continuous improvement is a core part of our quality policy.
                  We regularly review our processes, gather customer feedback,
                  and analyze performance data to identify areas for
                  enhancement. By implementing corrective and preventive
                  actions, we work to reduce errors, improve efficiency, and
                  strengthen overall system reliability. Our goal is not only to
                  meet standards but to consistently improve them.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Teamwork plays a vital role in achieving our quality
                  objectives. Collaboration between departments such as
                  production, research and development, technical service, and
                  sales ensures smooth operations and effective communication.
                  This coordinated approach helps us respond quickly to customer
                  needs and maintain high service levels.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We also focus on supplier quality management. By selecting
                  reliable raw material suppliers and maintaining strict
                  inspection procedures, we ensure that the inputs used in our
                  manufacturing process meet required standards. Quality control
                  checks are performed at multiple stages to prevent defects and
                  maintain product integrity.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Customer satisfaction remains the ultimate measure of our
                  quality performance. We value long-term relationships and aim
                  to build trust through consistent service, dependable
                  products, and transparent communication. Any customer concerns
                  are addressed promptly, and corrective actions are implemented
                  to prevent recurrence.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Our quality assurance system is regularly reviewed and updated
                  to align with changing market requirements and technological
                  advancements. By maintaining strict adherence to quality
                  procedures, investing in employee development, and promoting a
                  culture of excellence, Unique Aqua Systems and Chemical
                  Industries continues to deliver products and services that our
                  customers can rely on with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div
          ref={sectionRefs.mission}
          className={`mb-24 transition-all duration-1000 transform ${
            isVisible.mission
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-br from-sky-400 via-sky-400 to-sky-400 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="relative h-64 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/50"></div>
            </div>

            <div className="p-8 md:p-12 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-20 -mr-20"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full -mb-16 -ml-16"></div>

              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Our Mission
                </h2>

                <div className="max-w-4xl">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <p className="text-xl text-white leading-relaxed mb-6">
                      To be a major provider of sustainable water-related
                      solutions and technical services in the Asian Region
                      through long-term partnerships that benefit customers,
                      employees, communities, and the environment, while
                      delivering an effective Total Water Management Program.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-bold mb-1">
                            Vision 2025
                          </h3>
                          <p className="text-blue-200 text-sm">
                            Leading water solutions provider in Asia
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-blue-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-bold mb-1">
                            Community Focus
                          </h3>
                          <p className="text-blue-200 text-sm">
                            Benefiting communities and environment
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-400/20 rounded-xl flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-purple-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-bold mb-1">
                            Sustainability
                          </h3>
                          <p className="text-blue-200 text-sm">
                            Sustainable water solutions for all
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-bold mb-1">
                            Total Water Management
                          </h3>
                          <p className="text-blue-200 text-sm">
                            Comprehensive program delivery
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <div className="text-3xl font-bold text-white">
                            20+
                          </div>
                          <div className="text-blue-300">
                            Years of Excellence
                          </div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-white">
                            10+
                          </div>
                          <div className="text-blue-300">Asian Countries</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-white">
                            100%
                          </div>
                          <div className="text-blue-300">
                            Client Satisfaction
                          </div>
                        </div>
                        <div>
                          <button className="px-6 py-3 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105">
                            Join Our Journey
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer/Contact Section */}
        <div className="text-center mt-16">
          <div className="inline-flex gap-4 p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Contact Us Today
            </button>
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Download Brochure
            </button>
          </div>
          <p className="mt-4 text-gray-600">
            Trusted water treatment solutions across Asia since 2002
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;