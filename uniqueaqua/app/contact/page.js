
import Link from "next/link";
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import SocialLinks from '@/components/contact/SocialLinks';
import SeoWrapper from '@/components/SeoWrapper/SeoWrapper';
import { buildMetadata, getBreadcrumbSchema } from '@/utils/seoConfig';




export const metadata = buildMetadata("contact");
export const dynamic = "force-static";
// This page is SSG by default in Next.js 13+ App Router
export default function ContactPage() {
   const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]);
   
  return (
    <SeoWrapper pageUrl="/contact" schemas={[breadcrumb]}>
    <div className="min-h-screen bg-gradient-to-br pt-10 from-sky-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-sky-600 to-blue-500 px-8 py-10 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
            <p className="text-sky-50 text-lg">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          {/* Form Section */}
          <div className="px-8 py-10">
            <ContactForm />
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
    </SeoWrapper>
  );
}