
import { useState } from 'react';
import React from 'react';
import { Menu, Search, ChevronDown } from 'lucide-react';

function App() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('Gaming Report');

  // Sections content
  const sections = {
    'Gaming Report': {
      title: 'Gaming Report 2024',
      img: '/assets/gaming.png',
    },
    'Sustainability Guide': {
      title: 'Sustainability Guide',
      img: 'src/assets/sustainability.png',
    },
    'Healthcare Private Equity': {
      title: 'Healthcare Private Equity',
      img: 'src/assets/healthcare.png',
    },
    'AI Survey': {
      title: 'AI Survey',
      img: 'src/assets/ai.png',
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4 bg-white text-black">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6" />
          <img src="/api/placeholder/120/40" alt="Logo" className="h-10" />
        </div>
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

      {/* Main Content */}
      <main className="relative h-screen">
        {/* Background Section that transitions */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-black/70 to-transparent transition-opacity ease-in-out duration-1000 bg-[url(${sections[activeSection].img})] bg-cover bg-center`}
        >
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-2xl mb-4">{activeSection}</h2>
            <h1 className="text-6xl font-bold mb-8">{sections[activeSection].title}</h1>
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
              onClick={() => setActiveSection(section)}
              className={`cursor-pointer ${activeSection === section ? 'font-bold' : ''} hover:underline`}
            >
              {section}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 right-4">
          <ChevronDown className="h-6 w-6" />
        </div>
      </main>
    </div>
  );
}

export default App;
