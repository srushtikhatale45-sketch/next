import Layout from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <Layout
      seoProps={{
        title: "Home",
        description: "Welcome to Unique Aqua Systems - Your trusted partner in water treatment and industrial chemical solutions.",
        keywords: "water treatment, industrial chemicals, home page",
        ogUrl: "https://uniqueaqua.com"
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900">Welcome to Unique Aqua Systems</h1>
        <p className="mt-4 text-gray-600">Your trusted partner in chemical solutions.</p>
      </div>
    </Layout>
  );
}