'use client';

import Link from 'next/link';

const featuredTools = [
  {
    id: 'pdf-to-word',
    name: 'PDF to Word Converter',
    description: 'Convert PDF files to editable Word documents instantly',
    icon: 'ri-file-pdf-line',
    color: 'bg-red-100 text-red-600',
    image: 'https://readdy.ai/api/search-image?query=PDF%20document%20conversion%20to%20Word%20file%20illustration%2C%20digital%20transformation%20concept%2C%20clean%20minimal%20design%20with%20PDF%20and%20Word%20icons%2C%20professional%20blue%20and%20white%20color%20scheme%2C%20modern%20flat%20design%20style%2C%20document%20processing%20visualization&width=300&height=200&seq=pdf-word-001&orientation=landscape'
  },
  {
    id: 'image-compressor',
    name: 'Image Compressor',
    description: 'Compress images without losing quality, reduce file size',
    icon: 'ri-image-line',
    color: 'bg-green-100 text-green-600',
    image: 'https://readdy.ai/api/search-image?query=image%20compression%20and%20optimization%20concept%2C%20before%20and%20after%20file%20size%20comparison%2C%20digital%20image%20processing%2C%20clean%20minimal%20design%2C%20blue%20and%20white%20professional%20color%20scheme%2C%20modern%20illustration%20style&width=300&height=200&seq=image-comp-001&orientation=landscape'
  },
  {
    id: 'backlink-checker',
    name: 'Backlink Checker',
    description: 'Analyze your website backlinks and SEO performance',
    icon: 'ri-links-line',
    color: 'bg-blue-100 text-blue-600',
    image: 'https://readdy.ai/api/search-image?query=SEO%20backlink%20analysis%20dashboard%2C%20website%20connection%20network%20visualization%2C%20digital%20marketing%20analytics%2C%20clean%20professional%20interface%2C%20blue%20and%20white%20color%20scheme%2C%20modern%20web%20design%20elements&width=300&height=200&seq=backlink-001&orientation=landscape'
  },
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Create custom QR codes for URLs, text, and contact info',
    icon: 'ri-qr-code-line',
    color: 'bg-purple-100 text-purple-600',
    image: 'https://readdy.ai/api/search-image?query=QR%20code%20generator%20interface%20with%20smartphone%20scanning%20QR%20code%2C%20digital%20connectivity%20concept%2C%20clean%20minimal%20design%2C%20blue%20and%20white%20professional%20color%20scheme%2C%20modern%20technology%20illustration&width=300&height=200&seq=qr-gen-001&orientation=landscape'
  },
  {
    id: 'text-to-speech',
    name: 'Text to Speech',
    description: 'Convert text to natural-sounding speech with AI voices',
    icon: 'ri-volume-up-line',
    color: 'bg-orange-100 text-orange-600',
    image: 'https://readdy.ai/api/search-image?query=text%20to%20speech%20AI%20technology%20concept%2C%20sound%20waves%20and%20text%20conversion%20visualization%2C%20clean%20minimal%20design%2C%20blue%20and%20white%20professional%20color%20scheme%2C%20modern%20digital%20interface%20elements&width=300&height=200&seq=tts-001&orientation=landscape'
  },
  {
    id: 'plagiarism-checker',
    name: 'Plagiarism Checker',
    description: 'Check content originality and detect duplicate text',
    icon: 'ri-shield-check-line',
    color: 'bg-teal-100 text-teal-600',
    image: 'https://readdy.ai/api/search-image?query=plagiarism%20detection%20and%20content%20verification%20interface%2C%20document%20authenticity%20checking%2C%20clean%20professional%20dashboard%20design%2C%20blue%20and%20white%20color%20scheme%2C%20modern%20security%20elements&width=300&height=200&seq=plagiarism-001&orientation=landscape'
  }
];

export default function FeaturedTools() {
  return (
    <section id="featured" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Popular Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most used and highly rated free tools for digital productivity and content creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${tool.icon} text-xl`}></i>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tool.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  Use Tool
                  <div className="w-4 h-4 ml-2 flex items-center justify-center">
                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/tools"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg inline-block whitespace-nowrap cursor-pointer"
          >
            View All 10+ Tools
          </Link>
        </div>
      </div>
    </section>
  );
}