import Link from "next/link";
import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";

export const metadata = buildMetadata("service");
export const dynamic = "force-static";

export default function servicePage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
  ]);

  return (
    <SeoWrapper pageUrl="/service" schemas={[breadcrumb]}>
      <div className="min-h-screen bg-gradient-to-br pt-10 from-sky-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {" "}
          {/* Increased width for better readability */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-sky-600 to-blue-500 px-8 py-10 text-center text-white">
              <h1 className="text-4xl font-extrabold mb-2">Our Services</h1>
              <p className="text-sky-100 text-lg">
                Understanding the value of professional solutions
              </p>
            </div>

            {/* Theory & Content Section */}
            <div className="px-8 py-12 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  What is a Service?
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  In economics and business, a <strong>service</strong> is an
                  intangible transaction where a provider uses their resources,
                  skill, or assets to benefit a consumer. Unlike physical goods,
                  services are performances rather than objects.
                </p>
              </section>

              {/* Core Pillars of Service Theory */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 border border-sky-100 rounded-xl bg-sky-50/50">
                  <h3 className="font-bold text-sky-700 mb-2">
                    1. Intangibility
                  </h3>
                  <p className="text-sm text-slate-600">
                    Services cannot be seen, tasted, or touched before they are
                    purchased. You are buying an outcome, not a product.
                  </p>
                </div>

                <div className="p-5 border border-sky-100 rounded-xl bg-sky-50/50">
                  <h3 className="font-bold text-sky-700 mb-2">
                    2. Inseparability
                  </h3>
                  <p className="text-sm text-slate-600">
                    Services are produced and consumed simultaneously. The
                    provider is part of the service experience.
                  </p>
                </div>

                <div className="p-5 border border-sky-100 rounded-xl bg-sky-50/50">
                  <h3 className="font-bold text-sky-700 mb-2">
                    3. Perishability
                  </h3>
                  <p className="text-sm text-slate-600">
                    Services cannot be stored for later use. An empty seat on a
                    flight or an unbooked hour for a consultant is lost revenue
                    forever.
                  </p>
                </div>

                <div className="p-5 border border-sky-100 rounded-xl bg-sky-50/50">
                  <h3 className="font-bold text-sky-700 mb-2">
                    4. Variability
                  </h3>
                  <p className="text-sm text-slate-600">
                    The quality of a service depends on who provides it, when,
                    and where. Consistency is the hallmark of a great service
                    brand.
                  </p>
                </div>
              </div>

              <section className="bg-slate-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h2 className="text-xl font-bold text-slate-800 mb-2">
                  The Service-Dominant Logic
                </h2>
                <p className="text-slate-600 italic">
                  "Modern business theory suggests that even physical products
                  are just delivery mechanisms for services. A car provides
                  'transportation services'; a phone provides 'communication
                  services'."
                </p>
              </section>
            </div>

            {/* Footer / CTA */}
            <div className="bg-slate-100 px-8 py-6 text-center">
              <Link
                href="/"
                className="text-sky-600 hover:text-sky-800 font-semibold transition-colors"
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SeoWrapper>
  );
}
