import { motion } from "framer-motion";
import customer from "../assets/customer.jpg";
import partner from "../assets/Partner_image.jpg";

const customers = [
  { name: "Zenith Healthcare", sector: "Healthcare & IoT Uplift", image: customer },
  { name: "Harbor Logistics", sector: "Logistics Modernization", image: customer },
  { name: "Vista Finance", sector: "FinTech & Secure Cloud", image: customer },
  { name: "Pulse Retail", sector: "Retail Edge Rollouts", image: customer },
  { name: "Sierra Energy", sector: "Energy & Smart Grid", image: customer },
  { name: "Metro Realty", sector: "Smart Buildings & DC", image: customer },
];

const partners = [
  { name: "EdgeWare", logo: partner },
  { name: "Nimbus Cloud", logo: partner },
  { name: "Prime OEM", logo: partner },
  { name: "Helix Data", logo: partner },
  { name: "NorthBridge", logo: partner },
];

export default function ClientsPartners() {
  const marqueeCustomers = [...customers, ...customers];
  const marqueePartners = [...partners, ...partners];

  return (
    <>
      <section
        id="customers"
        className="relative min-h-[50vh] bg-gray-50 px-6 py-8 font-[Poppins] flex items-center"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Current <span className="text-red-600">Customers</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We support ambitious organizations that demand reliable, scalable infrastructure.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-50 via-white to-red-50 shadow-lg shadow-black/10">
            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

            <div className="marquee-track gap-8 items-center py-4 px-2">
              {marqueeCustomers.map((customer, index) => (
                <motion.div
                  key={`${customer.name}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center w-64 h-40 shrink-0 rounded-xl overflow-hidden shadow-md shadow-black/10 bg-transparent"
                >
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="partners"
        className="relative min-h-[50vh] bg-white px-6 py-8 font-[Poppins] flex items-center"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our <span className="text-red-600">Partners</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic allies that help us deliver seamless, modern network experiences.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-50 via-white to-red-50 shadow-lg shadow-black/10">
            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />

            <div className="marquee-track gap-8 items-center py-4 px-2">
              {marqueePartners.map((partnerItem, index) => (
                <motion.div
                  key={`${partnerItem.name}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center w-64 h-40 shrink-0 rounded-xl overflow-hidden shadow-md shadow-black/10 bg-transparent"
                >
                  <img
                    src={partnerItem.logo}
                    alt={partnerItem.name}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
