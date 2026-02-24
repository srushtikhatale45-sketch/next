
import Link from "next/link";
import { buildMetadata, getBreadcrumbSchema } from '@/utils/seoConfig';
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";
import Client from "./component/Client";



export const metadata = buildMetadata("client");
const clientStats = [
  { label: "Total Clients", value: "500+" },
  { label: "Industries Served", value: "15+" },
  { label: "Repeat Business", value: "95%" },
  { label: "Years of Trust", value: "25+" },
];
export const dynamic = "force-static";
// This page is SSG by default in Next.js 13+ App Router
export default function clientPage() {
   const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Client", href: "/client" },
  ]);
   
  return (
    <SeoWrapper pageUrl="/client" schemas={[breadcrumb]}>
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Valued Clients
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Trusted by industry leaders across pharmaceuticals, manufacturing, FMCG, 
            and more. We've helped 500+ businesses achieve their goals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Companies That Trust Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From pharmaceutical giants to manufacturing leaders, we are proud 
              to partner with the best in the industry.
            </p>
          </div>
          
          {/* Client Component */}
          <Client />
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent service and outstanding results. They have been a 
                  valuable partner in our growth journey."
                </p>
                <div className="font-semibold text-gray-900">
                  - Client Name {i}
                </div>
                <div className="text-sm text-gray-500">
                  CEO, Leading Company
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/client"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
            >
              Read All Testimonials
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with us and experience the difference of working with industry experts.
          </p>
          <Link
            href="/client"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 hover:scale-105 transition-all"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
    </SeoWrapper>
  );
}