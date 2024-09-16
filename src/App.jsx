
import React, { useState } from 'react';
import { Menu, Search, ChevronDown, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('Gaming Report');
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu toggle

  // Sections content
  const sections = {
    'Gaming Report': {
      title: 'Gaming Report 2024',
      img: '/assets/1.jpg',
    },
    'Sustainability Guide': {
      title: 'Sustainability Guide',
      img: '/assets/2.jpg',
    },
    'Healthcare Private Equity': {
      title: 'Healthcare Private Equity',
      img: '/assets/3.jpg',
    },
    'AI Survey': {
      title: 'AI Survey',
      img: '/assets/4.jpg',
    }
  };

  const handleSectionChange = (section) => {
    if (activeSection !== section) {
      setActiveSection(section); // Change the background image immediately
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="relative h-screen">
        {/* Background Section */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${sections[activeSection].img})` }}
        >
          {/* Navigation Bar */}
          <nav className="flex items-center justify-between p-4 bg-transparent text-white hover:bg-white hover:text-black transition duration-300">
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <h2>Zillion Solution</h2>
              <img src="public/vite.svg" alt="Logo" className="h-10" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:underline">Industries</a>
              <a href="#" className="hover:underline">Consulting Services</a>
              <a href="#" className="hover:underline">Digital</a>
              <a href="#" className="hover:underline">Insights</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Careers</a>
            </div>

            <div className="flex items-center space-x-4">
              <span>Explore</span>
              <Search className="h-6 w-6" />
            </div>
          </nav>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="md:hidden flex flex-col items-start bg-white text-black p-4 space-y-2">
              <a href="#" className="hover:underline">Industries</a>
              <a href="#" className="hover:underline">Consulting Services</a>
              <a href="#" className="hover:underline">Digital</a>
              <a href="#" className="hover:underline">Insights</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Careers</a>
            </div>
          )}

          {/* Main Content Section */}
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-2xl sm:text-4xl mb-4">{activeSection}</h2>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8">{sections[activeSection].title}</h1>
            <button className="bg-white text-black px-6 py-2 rounded-full flex items-center">
              READ THE REPORT
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Tabs to switch between sections */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 text-sm">
          {Object.keys(sections).map((section) => (
            <span
              key={section}
              onClick={() => handleSectionChange(section)}
              className={`cursor-pointer ${activeSection === section ? 'font-bold' : ''} hover:underline`}
            >
              {section}
            </span>
          ))}
        </div>
        {/* <div className="absolute bottom-4 right-4">
          <ChevronDown className="h-6 w-6" />
        </div> */}
      </main>

      {/* Other content */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-16 text-center">
            We work with India's largest companies--helping several become global champions--and with smaller,
            dynamic ones looking to mobilize change and <a href="#" className="text-blue-600 underline">accelerate sustainable and inclusive growth</a>. We partner
            with government leaders to help drive growth and build capabilities. Our insights are shaped by leading
            industry experts, cutting-edge digital and analytics tools, and our decades of experience serving the
            world's largest corporations.
          </p>

          <h2 className="text-2xl font-bold text-center mb-12 text-black">OUR IMPACT</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border-r border-gray-300 last:border-r-0">
              <h3 className="text-6xl font-bold text-blue-600 mb-2">30+</h3>
              <p className="text-xl mb-2 text-black">years in India,</p>
              <p className="text-sm text-gray-600">opening our first office in Mumbai in 1992</p>
            </div>
            <div className="border-r border-gray-300 last:border-r-0">
              <h3 className="text-6xl font-bold text-blue-600 mb-2">900+</h3>
              <p className="text-xl mb-2 text-black">engagements</p>
              <p className="text-sm text-gray-600">completed since 2017</p>
            </div>
            <div className="border-r border-gray-300 last:border-r-0">
              <h3 className="text-6xl font-bold text-blue-600 mb-2">850+</h3>
              <p className="text-xl mb-2 text-black">partners and consultants</p>
              <p className="text-sm text-gray-600">across four locations</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mt-16 text-black">FEATURED INSIGHTS</h2>
        </div>
      </div>
    </div>
  );
}

export default App;




