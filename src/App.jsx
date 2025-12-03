import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ClientsPartners from "./components/ClientsPartners";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AllServicesPage from './pages/AllServicesPage';

const homeVideo = "https://rapid-lab-7fb3.tiwarikush9328.workers.dev/website.mp4";
const mobileHeroVideo = "https://rapid-lab-7fb3.tiwarikush9328.workers.dev/mobile.mp4";
const servicesVideo = "https://rapid-lab-7fb3.tiwarikush9328.workers.dev/services_new.mp4";
const valuesVideo = "https://rapid-lab-7fb3.tiwarikush9328.workers.dev/values_new_small.mp4";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let in-page anchors handle their own scroll
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

function TitleManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles = {
      "/": "1NETWORKS - Home",
      "/about": "1NETWORKS - About",
      "/all-services": "1NETWORKS - Services",
      "/contact": "1NETWORKS - Contact",
    };
    document.title = titles[pathname] || "1NETWORKS";
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const preloadVideo = (src) =>
      new Promise((resolve) => {
        const video = document.createElement("video");
        let settled = false;
        let timeoutId;

        const settle = () => {
          if (settled) return;
          settled = true;
          clearTimeout(timeoutId);
          video.oncanplaythrough = null;
          video.onloadeddata = null;
          video.onerror = null;
          resolve();
        };

        timeoutId = setTimeout(settle, 6000);
        video.preload = "auto";
        video.oncanplaythrough = settle;
        video.onloadeddata = settle;
        video.onerror = settle;
        video.src = src;
        video.load();
      });

    const videoSources = [homeVideo, mobileHeroVideo, servicesVideo, valuesVideo];

    Promise.all(videoSources.map(preloadVideo)).then(() => {
      if (!isCancelled) {
        setLoading(false);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <TitleManager />
      <Routes>
        <Route path="/" element={
          <div className="font-poppins">
            <Navbar />

            <section className="relative z-0">
              <Hero />
            </section>

            <section className="relative z-0">
              <About />
            </section>

            <section className="relative z-0">
              <Services />
            </section>

            <ClientsPartners />

            <section className="relative z-0">
              <Contact />
            </section>

            <Footer />
          </div>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/all-services" element={<AllServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
