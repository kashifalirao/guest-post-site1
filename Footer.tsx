'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-tools-fill text-white text-lg"></i>
              </div>
              <span className="font-['Pacifico'] text-xl text-blue-400">Kashif Digital Tools</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Free online tools for digital marketing, SEO, content creation and productivity enhancement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/tools" className="text-gray-400 hover:text-white transition-colors text-sm">All Tools</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/tools/pdf-to-word" className="text-gray-400 hover:text-white transition-colors text-sm">PDF to Word</Link></li>
              <li><Link href="/tools/image-compressor" className="text-gray-400 hover:text-white transition-colors text-sm">Image Compressor</Link></li>
              <li><Link href="/tools/backlink-checker" className="text-gray-400 hover:text-white transition-colors text-sm">Backlink Checker</Link></li>
              <li><Link href="/tools/qr-generator" className="text-gray-400 hover:text-white transition-colors text-sm">QR Code Generator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-mail-line text-blue-400"></i>
                </div>
                <span className="text-gray-400 text-sm">guestpost@smartsavezone.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-blue-400"></i>
                </div>
                <span className="text-gray-400 text-sm">+92 312 6020316</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Kashif Digital Tools Service. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">Disclaimer</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}