import Navbar from "../components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: " Unique Aqua",
  description: "Created with Next.js",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar />
      
      </body>
    </html>
  );
}