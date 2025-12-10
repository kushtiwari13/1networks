import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="px-6 py-10 text-white bg-black">
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-4">
        {/* Left Section */}
        <div>
          <h3 className="mb-2 text-lg font-bold">1NETWORKS</h3>
          <p className="mb-4 text-sm">
            Unified, Intelligent & Scalable Networks
          </p>
          <p className="mb-4 text-sm">
            We build dynamic, future-proof infrastructure—from edge to cloud— that grows stronger with every connection.
          </p>
        </div>

        {/* Pages Section */}
        <div>
          <h4 className="mb-2 text-lg font-bold">Pages</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="underline hover:text-red-600">Home</Link></li>
            <li><Link to="/about" className="underline hover:text-red-600">About</Link></li>
            <li><Link to="/all-services" className="underline hover:text-red-600">Services</Link></li>
            <li><Link to="/contact" className="underline hover:text-red-600">Contact</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="mb-2 text-lg font-bold">Services</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/all-services#cloud-ai" className="underline hover:text-red-600">Cloud & AI Management Platform</Link></li>
            <li><Link to="/all-services#public-and-cloud-offerings" className="underline hover:text-red-600">Public & Cloud Offerings</Link></li>
            <li><Link to="/all-services#data-center" className="underline hover:text-red-600">Modern Data Center Infrastructure</Link></li>
            <li><Link to="/all-services#amc" className="underline hover:text-red-600">AMC</Link></li>
            <li><Link to="/all-services#cabling" className="underline hover:text-red-600">Structured Cabling Solutions</Link></li>
            <li><Link to="/all-services#servers" className="underline hover:text-red-600">Servers / Storage</Link></li>
            <li><Link to="/all-services#it-consulting" className="underline hover:text-red-600">IT Consulting</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        {/* <div className="flex flex-col items-end space-y-2 text-sm">
          <Link to="/contact" className="underline hover:text-red-600">Contact Us</Link>
          <div className="flex mt-4 space-x-4">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 text-black transition bg-white rounded hover:bg-red-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7 0h3.6v1.7h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.5 4.45 5.75V20h-4v-5.5c0-1.3-.03-3-1.85-3-1.85 0-2.13 1.45-2.13 2.9V20h-4V8z"/></svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="p-2 text-black transition bg-white rounded hover:bg-red-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/></svg>
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="p-2 text-black transition bg-white rounded hover:bg-red-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.87v-6.99h-2.5v-2.88h2.5v-2.2c0-2.48 1.5-3.85 3.8-3.85 1.1 0 2.25.2 2.25.2v2.5h-1.27c-1.25 0-1.63.77-1.63 1.56v1.8h2.78l-.44 2.88h-2.34v6.99A10 10 0 0022 12z"/></svg>
            </a>
          </div>
        </div> */}
      </div>

      <div className="flex flex-col items-center justify-between max-w-6xl pt-4 mx-auto mt-8 text-xs text-gray-300 border-t border-white/10 md:flex-row md:items-start">
        <span className="mt-2 md:mt-0">
          &copy; 2025{" "}
          <a href="/" target="_blank" rel="noreferrer" className="font-semibold text-red-400 hover:text-gray-300">
            1NETWORKS
          </a>
          . All rights reserved.
        </span>
        <span className="mt-2 md:mt-0">
          Designed &amp; Developed by{" "}
          <a href="https://www.mindsahead.in/" target="_blank" rel="noreferrer" className="font-semibold text-red-400 hover:text-gray-300">
            MindsAhead Digital
          </a>
        </span>
      </div>
    </footer>
  );
}
