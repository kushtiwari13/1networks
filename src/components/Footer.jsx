import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">1NETWORKS</h3>
          <p className="text-sm mb-4">
            Unified, Intelligent & Scalable Networks
          </p>
          <p className="text-sm mb-4">
            We build dynamic, future-proof infrastructure—from edge to cloud— that grows stronger with every connection.
          </p>
          <p className="text-xs">&copy; 2023 1NETWORKS. All rights reserved.</p>
        </div>

        {/* Pages Section */}
        <div>
          <h4 className="font-bold text-lg mb-2">Pages</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:text-red-600 underline">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-600 underline">About</Link></li>
            <li><Link to="/services" className="hover:text-red-600 underline">Services</Link></li>
            <li><Link to="/contact" className="hover:text-red-600 underline">Contact</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="font-bold text-lg mb-2">Services</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/all-services#cloud-ai" className="hover:text-red-600 underline">Cloud & AI Management Platform</Link></li>
            <li><Link to="/all-services#public-and-cloud-offerings" className="hover:text-red-600 underline">Public & Cloud Offerings</Link></li>
            <li><Link to="/all-services#data-center" className="hover:text-red-600 underline">Modern Data Center Infrastructure</Link></li>
            <li><Link to="/all-services#amc" className="hover:text-red-600 underline">AMC</Link></li>
            <li><Link to="/all-services#cabling" className="hover:text-red-600 underline">Structured Cabling Solutions</Link></li>
            <li><Link to="/all-services#servers" className="hover:text-red-600 underline">Servers / Storage</Link></li>
            <li><Link to="/all-services#it-consulting" className="hover:text-red-600 underline">IT Consulting</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-2 text-sm items-end">
          <Link to="/contact" className="hover:text-red-600 underline">Contact Us</Link>
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="bg-white text-black p-2 rounded hover:bg-red-600 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7 0h3.6v1.7h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.5 4.45 5.75V20h-4v-5.5c0-1.3-.03-3-1.85-3-1.85 0-2.13 1.45-2.13 2.9V20h-4V8z"/></svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="bg-white text-black p-2 rounded hover:bg-red-600 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/></svg>
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="bg-white text-black p-2 rounded hover:bg-red-600 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.87v-6.99h-2.5v-2.88h2.5v-2.2c0-2.48 1.5-3.85 3.8-3.85 1.1 0 2.25.2 2.25.2v2.5h-1.27c-1.25 0-1.63.77-1.63 1.56v1.8h2.78l-.44 2.88h-2.34v6.99A10 10 0 0022 12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
