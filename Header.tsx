'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-tools-fill text-white text-lg"></i>
            </div>
            <span className="font-['Pacifico'] text-xl text-blue-600">Kashif Digital Tools</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">
              Home
            </Link>
            <Link href="/tools" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">
              All Tools
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <i className={isMenuOpen ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                Home
              </Link>
              <Link href="/tools" className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                All Tools
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                About Us
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}