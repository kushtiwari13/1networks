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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/all-services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-6 py-2 z-50 transition-all duration-300 bg-white border-b border-gray-200 shadow-md`}
    >
      {/* Logo + Title */}
      <Link to="/" className="flex items-center space-x-3">
        <img
          src={logo}
          alt="1NETWORKS Logo"
          className="object-contain w-12 h-12 sm:w-12 sm:h-12 animate-slowspin"
        />
        <div className="leading-tight">
          <h1
            ref={titleRef}
            className={`text-2xl sm:text-4xl font-bold tracking-tight leading-none ${
              isHero ? "text-black drop-shadow" : "text-black"
            }`}
          >
            1NETWORKS
          </h1>

          <p
            className={`text-[10px] sm:text-xs lg:text-sm whitespace-nowrap leading-none mt-0.5 pl-[2px]
              ${
                isHero ? "text-red-500" : "text-red-600"
              }
            `}
          >
            Powering Connections{" "}
            <span className="inline sm:hidden"><br /></span>
          </p>
        </div>
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden space-x-4 font-medium md:flex lg:space-x-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className="px-6 py-2 text-base text-white transition-all duration-300 bg-black rounded-full shadow-md hover:bg-red-600 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="flex items-center space-x-3 md:hidden">
        <button
          className="p-2 text-white bg-black rounded-full shadow-md shadow-black/20"
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
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-red-600">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col p-6 space-y-3">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-lg font-semibold text-center text-white transition-all bg-gray-900 shadow-lg rounded-xl shadow-black/20 hover:bg-red-600"
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
