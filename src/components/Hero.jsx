// import homeVideo from "../assets/home_video.mp4";
// import homeVideo from "../assets/home_video_new_small.mp4";
const homeVideo = "https://rapid-lab-7fb3.tiwarikush9328.workers.dev/website.mp4";
// import mobileHeroVideo from "../assets/mobile_hero.mp4";
// import mobileHeroVideo from "../assets/mobile_hero_new_small.mp4";
const mobileHeroVideo = "https://rapid-lab-7fb3.tiwarikush9328.workers.dev/mobile.mp4";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 overflow-hidden scroll-mt-24"
    >
      {/* 🔴 Background Video for desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        style={{ objectPosition: "center 0%" }} // increase % to push view further down
      >
        <source src={homeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔴 Background Video for mobile */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      >
        <source src={mobileHeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {/* Left Side Content */}
      <div className="relative z-10 md:w-1/2 text-center md:text-left pt-32 md:pt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-red-700">
          Unified, Intelligent & Scalable Networks
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-800 font-poppins">
          We build dynamic, future-proof infrastructure—from edge to cloud <br />
          —
          that grows stronger with every connection.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 md:mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
          <a 
            href="#services" 
            className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-black transition text-center"
          >
             Explore our services
          </a>
        </div>
      </div>
    </section>
  );
}
