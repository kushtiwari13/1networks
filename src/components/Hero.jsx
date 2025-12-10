// import homeVideo from "../assets/home_video.mp4";
// import homeVideo from "../assets/home_video_new_small.mp4";
const homeVideo = "https://rapid-lab-7fb3.tiwarikush9328.workers.dev/website.mp4";
// import mobileHeroVideo from "../assets/mobile_hero.mp4";
// import mobileHeroVideo from "../assets/mobile_hero_new_small.mp4";
const mobileHeroVideo = "https://rapid-lab-7fb3.tiwarikush9328.workers.dev/mobile.mp4";
import mobile_hero_bg from "../assets/mobile_hero_bg.mp4";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-between w-full h-screen px-6 overflow-hidden md:flex-row md:px-12 scroll-mt-24"
    >
      {/* 🔴 Background Video for desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 hidden object-cover w-full h-full md:block"
        style={{ objectPosition: "center 0%" }}
      >
        <source src={homeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔴 Mobile Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full md:hidden"
      >
        <source src={mobile_hero_bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* LEFT SIDE CONTENT — width adjusted for breakpoint-based wrapping control */}
      <div className="
          relative z-10 w-full
          md:w-[45%] 
          lg:w-[40%] 
          xl:w-[40%] 
          text-center md:text-left pt-40 md:pt-0 flex flex-col"
      >
        <h1 className="text-3xl font-bold leading-tight text-red-700 sm:text-4xl md:text-5xl">
          Unified, Intelligent & Scalable Networks
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-800 font-poppins max-w-[95%] md:max-w-[90%] lg:max-w-[85%]">
          We build dynamic, future-proof infrastructure—from edge to cloud 
          —
          that grows stronger with every connection.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 mt-6 md:mt-10 sm:flex-row sm:justify-center md:justify-start">
          <a 
            href="#services" 
            className="px-6 py-3 text-center text-white transition bg-red-600 rounded-lg shadow-lg hover:bg-black"
          >
            Explore our services
          </a>
        </div>
      </div>
    </section>
  );
}
