import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import cloudImage from "../assets/cloud.jpg";
import pcoImage from "../assets/pco.jpg";
import dataCenter from "../assets/datacenter.jpg";
import amcImage from "../assets/amc.jpg";
import cablesImage from "../assets/cables.jpg";
import serversImage from "../assets/servers.jpg";
import itImage from "../assets/it.jpg";
import corporateImage from "../assets/corporateGifting.jpg";
import Footer from "../components/Footer";

export default function AllServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  const services = [
    {
      id: "cloud-ai",
      title: "Cloud & AI Management Platform",
      image: cloudImage,
      desc: [
        "Our Advanced Cloud & AI Management Platform services take cloud cost optimization to the next level with cutting-edge AI-driven analytics and predictive modeling.",
        "Beyond basic cost management, our advanced services include real-time monitoring, anomaly detection, and intelligent resource allocation.",
        "We integrate advanced AI tools to provide deep insights into your cloud operations, enabling data-driven decisions that optimize performance and reduce waste.",
        "For organizations seeking the most sophisticated cloud financial management solutions, our services provide the intelligence and automation needed to stay ahead."
      ]
    },
    {
      id: "public-and-cloud-offerings",
      title: "Public & Cloud Offerings",
      image: pcoImage,
      desc: [
        "Our Public & Cloud Offerings services provide tailored solutions and seamless integrations for Original Equipment Manufacturer (PCO) partners.",
        "By working closely with PCO partners, we ensure that their products integrate smoothly with your systems, reducing compatibility issues.",
        "We offer end-to-end support for Public & Cloud Offeringss, including API development, data synchronization, and ongoing maintenance.",
        "Whether you're expanding your product ecosystem or enhancing existing capabilities, we deliver seamless integrations that drive growth."
      ]
    },
    {
      id: "data-center",
      title: "Modern Data Center Infrastructure",
      image: dataCenter,
      desc: [
        "Our Modern Data Center Infrastructure services deliver high-performance, scalable, and secure designs.",
        "We leverage cutting-edge technologies and best practices to build energy-efficient and adaptable infrastructures.",
        "Our solutions include advanced cooling, redundant power, and strong security to protect critical data.",
        "Whether building new or modernizing, we ensure a reliable foundation for your digital operations."
      ]
    },
    {
      id: "amc",
      title: "AMC (Annual Maintenance Contracts)",
      image: amcImage,
      desc: [
        "Our AMCs provide proactive maintenance and reliable support to keep your IT running smoothly.",
        "We conduct regular inspections, preventive maintenance, and timely repairs to reduce downtime.",
        "Flexible AMC packages range from basic to 24/7 monitoring, tailored to your business.",
        "Choosing AMC lets you focus on business while we extend your IT equipment’s life."
      ]
    },
    {
      id: "cabling",
      title: "Structured Cabling Solutions",
      image: cablesImage,
      desc: [
        "We design and implement structured cabling systems for reliable connectivity.",
        "Our solutions use industry-standard materials for durability and easy maintenance.",
        "We handle everything from site survey to installation and testing.",
        "Expect improved performance, reduced downtime, and future scalability."
      ]
    },
    {
      id: "servers",
      title: "Servers / Storage",
      image: serversImage,
      desc: [
        "We provide servers and storage solutions from desktops to enterprise-grade clusters.",
        "Our hardware balances performance, reliability, and cost-effectiveness.",
        "We assist with selection, deployment, and ongoing support.",
        "Get the hardware foundation to scale your operations."
      ]
    },
    {
      id: "it-consulting",
      title: "IT Consulting",
      image: itImage,
      desc: [
        "Our IT Consulting helps you align technology with your business goals.",
        "We analyze your IT landscape and recommend scalable improvements.",
        "From digital transformation to cybersecurity, we provide expert strategies.",
        "We enable innovation, governance, and competitive advantage."
      ]
    },
    {
      id: "corporate-gifting",
      title: "Corporate Gifting",
      image: corporateImage,
      desc: [
        "Thoughtfully curated gifting solutions for clients, partners, and teams.",
        "Tech-forward hampers, premium essentials, and customized bundles that align with your brand.",
        "End-to-end fulfillment, including branding, packaging, and doorstep delivery.",
        "Make every occasion memorable while reinforcing lasting relationships."
      ]
    }
  ];

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="pt-28 pb-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-red-600">Our Services</h1>
      </div>

      <div className="max-w-6xl mx-auto space-y-16 pb-24 px-6">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 scroll-mt-24"
          >
            <h2 className="text-3xl font-semibold text-red-600 text-center mb-8">
              {service.title}
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Left: Image */}
              <div className="flex-1">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-xl shadow-md"
                />
              </div>

              {/* Right: Text */}
              <div className="flex-1 text-lg text-gray-700 leading-relaxed space-y-4">
                {service.desc.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
}
