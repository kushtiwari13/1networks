import Navbar from '../components/Navbar';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCloud,
  FaCogs,
  FaBuilding,
  FaTools,
  FaNetworkWired,
  FaServer,
  FaLightbulb
} from "react-icons/fa";
import Footer from '../components/Footer';

// ✅ Import video from src
import servicesVideo from "../assets/services.mp4";

const items = [
  { title: "Cloud & AI FinOps", desc: "Optimize cloud costs and operations.", icon: <FaCloud className="text-red-600" />, link: "/all-services#cloud-finops" },
  { title: "OEM Integration", desc: "Tailored solutions and integrations for OEM partners.", icon: <FaCogs className="text-red-600" />, link: "/all-services#oem-integration" },
  { title: "Modern Data Center Infrastructure", desc: "High-performance, scalable, and secure DC designs.", icon: <FaBuilding className="text-red-600" />, link: "/all-services#data-center" },
  { title: "AMC (Annual Maintenance Contracts)", desc: "Proactive maintenance and reliable support.", icon: <FaTools className="text-red-600" />, link: "/all-services#amc" },
  { title: "Structured Cabling Solutions", desc: "Organized, reliable connectivity with easy scalability.", icon: <FaNetworkWired className="text-red-600" />, link: "/all-services#cabling" },
  { title: "Servers / Storage", desc: "From desktops to servers—network-ready resources.", icon: <FaServer className="text-red-600" />, link: "/all-services#servers" },
  { title: "IT Consulting", desc: "Use technology effectively to achieve growth.", icon: <FaLightbulb className="text-red-600" />, link: "/all-services#it-consulting" },
  { title: "Cloud & AI FinOps", desc: "Optimize cloud costs and operations.", icon: <FaCloud className="text-red-600" />, link: "/all-services#cloud-finops-2" },
];

export default function ServicesPage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <section
        className="relative pt-28 pb-24 px-8 font-[Poppins] overflow-hidden"
      >
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={servicesVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Section heading */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative, reliable, and future-ready solutions for modern businesses.
          </p>
        </div>

        {/* Grid of services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
          {items.map((item, index) => (
            <Link key={index} to={item.link}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg shadow-black/20 hover:scale-105 hover:shadow-2xl transition transform duration-300 text-center cursor-pointer h-48 flex flex-col justify-between"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2 break-words">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm break-words">{item.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
