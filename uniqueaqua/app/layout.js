import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";
import Navbar from "../components/Navbar/Navbar";
import "./globals.css";

export const metadata={
  title:{
    template:"%s | Unique Aqua Systems and Chemical Industries",
    default:"Unique Aqua Systems and Chemical Industries Nashik | All Services",
  },
  description:
  "Unique Aqua Systems and Chemical Industries, as the name suggest we are a water treatment company. Who has been providing professional and value added consultancy and technical service to customers in Asian region since 2002. With the long experience in the water treatment, we combines innovative technologies and services provided by our high skilled representatives.",

}
export default function RootLayout() {
  return (
    <html lang="en">
      <body>
      
        <Navbar />
       
      </body>
    </html>
  );
}