import { motion } from "framer-motion";
import customer_bial from "../assets/customer_BIAL.png";
import customer_navigator from "../assets/customer_Navigator.png";
import customer_nxtgen from "../assets/customer_NxtGen.png";
import customer_phonepe from "../assets/customer_PhonePe.png";
import customer_deluxe from "../assets/customer_Deluxe.png";
import customer_keysights from "../assets/customer_Keysight.png";
import customer_ntt from "../assets/customer_NTT.png";
import partner_aquila_clouds from "../assets/partners_Aquila_clouds.png";
import partner_RandM from "../assets/partners_R&M.png";
import partner_navigator from "../assets/partners_Navigator.png";
import partner_hp from "../assets/partners_Hp.png";
import partner_dell from "../assets/partners_dell.jpg";
import partner_samsung from "../assets/partners_Samsung.jpeg";
import partner_versa from "../assets/partner_versa.svg";

const customers = [
  { name: "BIAL", sector: "Aviation & Smart Infrastructure", image: customer_bial },
  { name: "Navigator", sector: "Networking & Integration", image: customer_navigator },
  { name: "NxtGen", sector: "Cloud & Data Center", image: customer_nxtgen },
  { name: "PhonePe", sector: "FinTech & Digital Payments", image: customer_phonepe },
  { name: "Deluxe", sector: "Media & Entertainment", image: customer_deluxe },
  { name: "Keysight", sector: "Testing & Measurement", image: customer_keysights },
  { name: "NTT", sector: "Telecom & Data Center", image: customer_ntt },
];

const partners = [
  { name: "Aquila Clouds", logo: partner_aquila_clouds },
  { name: "R&M", logo: partner_RandM },
  { name: "Navigator", logo: partner_navigator },
  { name: "HP", logo: partner_hp },
  { name: "Dell", logo: partner_dell },
  { name: "Samsung", logo: partner_samsung },
  { name: "Versa", logo: partner_versa },
];

export default function ClientsPartners() {
  const marqueeCustomers = [...customers, ...customers];
  const marqueePartners = [...partners, ...partners];

  return (
    <>
      <section
        id="customers"
        className="relative bg-gray-50 px-6 py-12 font-[Poppins]"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="mb-6 space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our <span className="text-red-600">Clients</span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              We support ambitious organizations that demand reliable, scalable infrastructure.
            </p>
          </div>

          <div className="relative overflow-hidden shadow-lg rounded-2xl bg-gradient-to-r from-red-50 via-white to-red-50 shadow-black/10">
            <div className="absolute top-0 left-0 w-12 h-full pointer-events-none bg-gradient-to-r from-gray-50 to-transparent" />
            <div className="absolute top-0 right-0 w-12 h-full pointer-events-none bg-gradient-to-l from-gray-50 to-transparent" />

            <div className="items-center gap-8 px-2 py-4 marquee-track">
              {marqueeCustomers.map((customer, index) => (
                <motion.div
                  key={`${customer.name}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center w-64 h-40 overflow-hidden bg-transparent shadow-md shrink-0 rounded-xl shadow-black/10"
                >
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="partners"
        className="relative bg-white px-6 py-12 font-[Poppins]"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="mb-6 space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our <span className="text-red-600">Partners</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Strategic allies that help us deliver seamless, modern network experiences.
            </p>
          </div>

          <div className="relative overflow-hidden shadow-lg rounded-2xl bg-gradient-to-r from-red-50 via-white to-red-50 shadow-black/10">
            <div className="absolute top-0 left-0 w-12 h-full pointer-events-none bg-gradient-to-r from-white to-transparent" />
            <div className="absolute top-0 right-0 w-12 h-full pointer-events-none bg-gradient-to-l from-white to-transparent" />

            <div className="items-center gap-8 px-2 py-4 marquee-track">
              {marqueePartners.map((partnerItem, index) => (
                <motion.div
                  key={`${partnerItem.name}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center w-64 h-40 overflow-hidden bg-transparent shadow-md shrink-0 rounded-xl shadow-black/10"
                >
                  <img
                    src={partnerItem.logo}
                    alt={partnerItem.name}
                    className="object-contain w-full h-full"
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
