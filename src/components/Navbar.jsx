import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.ico";

export default function Navbar() {
  const [isHero, setIsHero] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsHero(window.scrollY < heroBottom - 80);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/all-services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-6 py-3 z-50 transition-all duration-300 bg-white border-b border-gray-200 shadow-md`}
    >
      {/* Logo + Title */}
      <Link to="/" className="flex items-center space-x-3">
        <img
          src={logo}
          alt="1NETWORKS Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
        <div>
          <h1
            ref={titleRef}
            className={`text-2xl sm:text-4xl font-bold tracking-tight ${
              isHero ? "text-black drop-shadow" : "text-black"
            }`}
          >
            1NETWORKS
          </h1>
          <p
            className={`text-xs sm:text-sm lg:text-base whitespace-nowrap ${
              isHero ? "text-red-500" : "text-red-600"
            }`}
          >
            Powering Connections{" "}
            <span className="inline sm:hidden"><br /></span>
          </p>
        </div>
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-4 lg:space-x-6 font-medium">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className="px-6 py-2 rounded-full text-base shadow-md transition-all duration-300 bg-black text-white hover:bg-red-600 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center space-x-3">
        <button
          className="p-2 rounded-full bg-black text-white shadow-md shadow-black/20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full Screen Drawer */}
      <div
        className={`fixed inset-0 bg-white text-black w-full h-full transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden z-50 flex flex-col`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-red-600">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col space-y-3 p-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl bg-gray-900 text-white text-lg font-semibold shadow-lg shadow-black/20 hover:bg-red-600 transition-all text-center"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
