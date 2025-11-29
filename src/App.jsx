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

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let in-page anchors handle their own scroll
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
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
