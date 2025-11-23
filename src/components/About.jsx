import { motion } from "framer-motion";
import { Target, Handshake, Lightbulb, Zap } from "lucide-react";
import valuesVideo from "../assets/values_new_small.mp4";
import {
  Rocket,
  Users,
  Repeat,
  Heart,
  ShieldCheck,
  DollarSign,
  Award,
  Settings,
} from "lucide-react";

const uniqueValues = [
  { title: "Innovative Solutions", description: "Leveraging the latest advancements.", icon: <Rocket size={28} /> },
  { title: "Expert Team", description: "Experienced professionals.", icon: <Users size={28} /> },
  { title: "Comprehensive Services", description: "End-to-end solutions.", icon: <Repeat size={28} /> },
  { title: "Customer-Centric Approach", description: "Tailored solutions.", icon: <Heart size={28} /> },
  { title: "Reliability and Quality", description: "Proven track record.", icon: <ShieldCheck size={28} /> },
  { title: "Cost-Effective Solutions", description: "Clear pricing.", icon: <DollarSign size={28} /> },
  { title: "Commitment to Excellence", description: "Strict quality control.", icon: <Award size={28} /> },
  { title: "Tailored Solutions", description: "Customizable options.", icon: <Settings size={28} /> },
];
export default function About() {
  return (
    <>
      {/* === Section 1: About Us Hero + Mission, Vision, Story === */}
<section
  id="about"
  className="relative min-h-screen flex items-center justify-center font-[Poppins] pt-24 sm:pt-32 bg-gray-50"
>
  <div className="relative z-10 w-full max-w-6xl px-6 sm:px-10 md:px-16 py-10 space-y-10 mx-auto">
    {/* Vision + Mission in a row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-stretch auto-rows-fr">
      {/* Our Vision */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03, y: -6 }}
        className="bg-white rounded-2xl shadow-md p-8 lg:p-10 flex flex-col items-center text-left justify-center gap-4 h-full"
      >
        <div className="w-full max-w-xl mx-auto space-y-3 text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-red-600 text-center">
            Our Vision
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            To be the leading force in next-generation network infrastructure,
            enabling seamless connectivity from edge to cloud. To be a catalyst
            for positive change through technology, shaping a future where
            innovation and creativity know no bounds.
          </p>
        </div>
      </motion.div>

      {/* Our Mission */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.03, y: -6 }}
        className="bg-white rounded-2xl shadow-md p-8 lg:p-10 flex flex-col items-center text-left justify-center gap-4 h-full"
      >
        <div className="w-full max-w-xl mx-auto space-y-3 text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-red-600 text-center">
            Our Mission
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            Our mission is to create transformative technology solutions that
            empower businesses and individuals to thrive in a rapidly evolving
            digital world. We are committed to delivering innovative,
            user-centric products and services that drive growth, efficiency,
            and success for our clients.
          </p>
        </div>
      </motion.div>
    </div>

    {/* Spiral Story */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      whileHover={{ scale: 1.03, y: -6 }}
      className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-left"
    >
      <div className="w-full max-w-3xl mx-auto space-y-3 text-left">
        <h2 className="text-xl md:text-2xl font-semibold text-red-600 text-center">
          The Spiral Story
        </h2>
        <div className="space-y-3 text-base leading-relaxed text-gray-700">
          <p>
            The spiral of red dots at the heart of 1NETWORKS symbolizes our
            mission: building dynamic, intelligent, ever-expanding networks
            that grow stronger with every connection.
          </p>
          <p>
            Each dot signifies a node of connection—growing stronger and more
            integrated as they converge. The red hue embodies energy, passion,
            and strength, reflecting our commitment to powerful, scalable
            networking solutions.
          </p>
          <p>
            At 1NETWORKS, we don't just connect devices—we connect
            possibilities. Our intelligent, scalable solutions are designed to
            power the next generation of digital infrastructure.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>

     {/* === Section 2: Our Values === */}
<section className="relative min-h-screen flex items-center justify-center font-[Poppins] px-6 py-16 overflow-hidden">
  {/* Background video (no dark overlay) */}
  <video
  className="absolute inset-0 w-full h-full object-cover -z-10"
  autoPlay
  loop
  muted
  playsInline
>
  <source src={valuesVideo} type="video/mp4" />
</video>

  <div className="w-full max-w-4xl relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
      Our Values
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        {
          title: "Customer First",
          description:
            "Your goals shape our solutions. We prioritize your success above all else.",
          icon: Target,
        },
        {
          title: "Integrity",
          description:
            "We build trust through transparency and ethical practices in everything we do.",
          icon: Handshake,
        },
        {
          title: "Innovation",
          description:
            "We challenge norms and push boundaries to create better outcomes for everyone.",
          icon: Lightbulb,
        },
        {
          title: "Reliability",
          description:
            "We deliver what we promise—every time, without compromise.",
          icon: Zap,
        },
      ].map((val, idx) => {
        const Icon = val.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.12 }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md p-8 flex flex-col items-center text-center"
          >
            {/* floating icon */}
            <motion.div
              className="mb-4"
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.4,
                delay: idx * 0.25,
              }}
            >
              <Icon className="w-10 h-10 text-red-600" aria-hidden="true" />
            </motion.div>

            <h3 className="text-lg font-semibold text-black mb-2">
              {val.title}
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              {val.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


{/* === Section 3: What Makes Us Unique === */}
<section className="relative min-h-screen font-[Poppins] px-6 py-16 bg-white">
  <motion.h2
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-3xl md:text-4xl font-bold text-black mb-8 md:mb-16 text-center"
  >
    WHAT MAKES US UNIQUE
  </motion.h2>

  {/* Mobile Layout: Vertical Stack */}
  <div className="flex flex-col space-y-6 md:hidden">
    {uniqueValues.map((val, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        className="flex items-center space-x-4"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 shadow-md">
          {val.icon}
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md border-l-4 border-red-500 flex-1 text-left">
          <h3 className="font-semibold text-black mb-1">{val.title}</h3>
          <p className="text-gray-600 text-sm">{val.description}</p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Desktop Layout */}
  <div className="relative max-w-6xl mx-auto hidden md:flex flex-row justify-between">
    {/* Central vertical line */}
    <div className="absolute left-1/2 top-0 w-1 bg-red-500 h-full"></div>

    {/* Left Column */}
    <div className="flex flex-col justify-between space-y-12 mr-6">
      {uniqueValues.slice(0, 4).map((val, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          className="flex items-center justify-end space-x-4 relative"
        >
          {/* Text box */}
          <div className="bg-white p-4 rounded-2xl shadow-md border-l-4 border-red-500 max-w-xs text-right">
            <h3 className="font-semibold text-black mb-1">{val.title}</h3>
            <p className="text-gray-600 text-sm">{val.description}</p>
          </div>

          {/* Icon on the line */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 shadow-md">
            {val.icon}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Right Column */}
    <div className="flex flex-col justify-between space-y-12 ml-6">
      {uniqueValues.slice(4, 8).map((val, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          className="flex items-center space-x-4 relative"
        >
          {/* Icon on the line */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 shadow-md">
            {val.icon}
          </div>

          {/* Text box */}
          <div className="bg-white p-4 rounded-2xl shadow-md border-r-4 border-red-500 max-w-xs text-left">
            <h3 className="font-semibold text-black mb-1">{val.title}</h3>
            <p className="text-gray-600 text-sm">{val.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

   </>
  );
}
