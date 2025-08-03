'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.open(`/tools?search=${encodeURIComponent(searchTerm)}`, '_self');
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20digital%20workspace%20with%20tools%2C%20laptops%2C%20charts%2C%20and%20graphs%20in%20a%20clean%20minimalist%20office%20environment%20with%20blue%20and%20white%20color%20scheme%2C%20professional%20lighting%2C%20high-tech%20atmosphere%2C%20productivity%20concept%2C%20organized%20desk%20setup&width=1200&height=600&seq=hero-bg-001&orientation=landscape')`
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Free Digital Tools for
            <span className="text-blue-600 block">Everyone</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            10+ powerful online tools for PDF conversion, SEO analysis, image optimization, and content creation. All completely free!
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search tools... (e.g., PDF, Image, SEO)"
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-search-line text-lg"></i>
                </div>
              </button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/tools"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg whitespace-nowrap cursor-pointer"
            >
              View All Tools
            </Link>
            <Link
              href="#featured"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Featured Tools
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}