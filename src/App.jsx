import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AllServicesPage from './pages/AllServicesPage';


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
      <Routes>
        <Route path="/" element={
          <div className="font-poppins">
            <Navbar />

            <section id="hero" className="min-h-screen relative z-0">
              <Hero />
            </section>

            <section id="about" className="min-h-screen relative z-0">
              <About />
            </section>

            <section id="services" className="min-h-screen relative z-0">
              <Services />
            </section>

            <section id="contact" className="min-h-screen relative z-0">
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
