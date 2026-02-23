
import Link from "next/link";
import { buildMetadata, getBreadcrumbSchema } from '@/utils/seoConfig';
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";


export const metadata = buildMetadata("product");
export const dynamic = "force-static";
// This page is SSG by default in Next.js 13+ App Router
export default function productPage() {
   const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
  ]);
   
  return (
    <SeoWrapper pageUrl="/product" schemas={[breadcrumb]}>
    <div className="min-h-screen bg-gradient-to-br pt-10 from-sky-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-sky-600 to-blue-500 px-8 py-10 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Product</h1>
            <p className="text-sky-50 text-lg">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          {/* Form Section */}
          <div className="px-8 py-10">
          </div>
        </div>
      </div>
    </div>
    </SeoWrapper>
  );
}