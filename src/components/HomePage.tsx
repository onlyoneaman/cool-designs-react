import React, { useState } from 'react';
import { Globe, Monitor, Smartphone, Watch, Apple, Phone, Image, Play } from 'lucide-react';
import {Link} from "react-router-dom";

const FilterButton = ({ active, children, onClick }: any) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full transition-colors ${
      active
        ? 'bg-black text-white'
        : 'hover:bg-gray-100 text-gray-700'
    }`}
  >
    {children}
  </button>
);

const DesignCard = ({ title, description, category, imageUrl, backgroundColor, path }: any) => (
  <Link to={path}>
    <div
      className="rounded-3xl overflow-hidden aspect-square relative group cursor-pointer"
      style={{ backgroundColor: backgroundColor || '#000' }}

    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-sm text-gray-300 mb-2 block">{category}</span>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  </Link>
);

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState('Web');

  const filters = [
    { name: 'All', icon: Globe },
    { name: 'Web', icon: Monitor },
    { name: 'Desktop', icon: Monitor },
    { name: 'Mobile', icon: Smartphone },
    { name: 'Watch', icon: Watch },
    { name: 'iOS', icon: Apple },
    { name: 'Android', icon: Phone },
    { name: 'Icon', icon: Image },
    { name: 'Motion', icon: Play }
  ];

  const designs = [
    {
      title: "Donothingforaminute",
      description: "Simple timer app for relaxation",
      category: "Web",
      backgroundColor: "#1A1A1A",
      path: "/donothingforaminute",
      imageUrl: "/src/assets/images/pages/timer/card.png"
    },
    {
      title: "CTA Button",
      description: "Call to action button design",
      category: "Web",
      backgroundColor: "#FFF5EB",
      path: "/cta-buttons",
      imageUrl: "/src/assets/images/pages/cta-button/img_1.png"
    },
    {
      title: "Animated Scroll Page",
      description: "Scroll animation with @react-sprint/web",
      category: "Web",
      backgroundColor: "#F9F9F9",
      path: "animated-scroll-page",
      imageUrl: "/src/components/AnimatedScrollPage/img.png"
    }
  ];

  return (
    <>
      {/* Header */}
      <header className="w-full max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-black rounded-2xl mb-6"></div>
          <h1 className="text-4xl font-semibold mb-2">
            Cool<span className="text-gray-400">UX</span>
          </h1>
          <p className="text-gray-500">UI curated experiences for your inspiration.</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="w-full max-w-5xl mx-auto mb-6 px-4 overflow-x-auto">
        <div className="hidden flex gap-2 min-w-max justify-start md:justify-center">
          {filters.map(({ name, icon: Icon }) => (
            <FilterButton
              key={name}
              active={activeFilter === name}
              onClick={() => setActiveFilter(name)}
            >
              <div className="flex items-center gap-2">
                <Icon size={16} />
                {name}
              </div>
            </FilterButton>
          ))}
        </div>
      </nav>

      {/* Cards Grid */}
      <div className="w-full max-w-5xl mx-auto px-4 pb-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs
            // .filter(design => activeFilter === 'All' || design.category === activeFilter)
            .map((design, index) => (
              <DesignCard
                key={index}
                {...design}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
