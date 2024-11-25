import React, {useState} from 'react';
import {Globe, Monitor, Smartphone, Watch, Apple, Phone, Image, Play} from 'lucide-react';
import {Link} from "react-router-dom";
import paths from "@/constants/paths.js";
import categories from "@/constants/categories.js";

import imageDoNothing from "/src/components/Timer/img.png";
import imageCtaBtn from "/src/components/CTAButtons/img.png";
import imageScrollPage from "/src/components/AnimatedScrollPage/img.png";
import imageTagging from '/src/components/TaggingPage/img.png';
import imageTabsContent from '/src/components/TabsContent/img.png';
import imageRevealHeading from '/src/components/UnblurHeadingPage/img.png';
import imageImpossibleCheckbox from '/src/components/ImpossibleCheckbox/img.png';
import imageMotionSidebar from '/src/components/MotionSidebar/img.png';
import imageDashboard1 from '/src/components/DashboardConcepts/1.png';

const FilterButton = ({active, children, onClick}: any) => (
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

const DesignCard = (
  {
    title,
    description,
    category,
    imageUrl,
    backgroundColor = '#000',
    path
  }: any) => (
  <Link to={path}>
    <div
      className="rounded-3xl overflow-hidden aspect-square relative group cursor-pointer"
      style={{backgroundColor: backgroundColor || '#000'}}

    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"/>
      <div
        className="absolute bottom-0 left-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
    {name: 'All', icon: Globe},
    {name: 'Web', icon: Monitor},
    {name: 'Desktop', icon: Monitor},
    {name: 'Mobile', icon: Smartphone},
    {name: 'Watch', icon: Watch},
    {name: 'iOS', icon: Apple},
    {name: 'Android', icon: Phone},
    {name: 'Icon', icon: Image},
    {name: 'Motion', icon: Play}
  ];

  const designs = [
    {
      title: "Donothingforaminute",
      description: "Simple timer app for relaxation",
      category: categories.WEB,
      path: paths.Donothingforaminute,
      imageUrl: imageDoNothing
    },
    {
      title: "CTA Button",
      description: "Call to action button design",
      category: categories.WEB,
      path: paths.CTA_BUTTONS,
      imageUrl: imageCtaBtn
    },
    {
      title: "Animated Scroll Page",
      description: "Scroll animation with @react-sprint/web",
      category: categories.WEB,
      path: paths.AnimatedScrollPage,
      imageUrl: imageScrollPage
    },
    {
      title: 'Tagging',
      description: 'Tagging system for organizing tasks',
      category: categories.WEB,
      path: paths.tagging,
      imageUrl: imageTagging
    },
    {
      title: "Tabs Content",
      description: "Tabs content with react-router-dom",
      category: categories.WEB,
      path: paths.tabsContent,
      imageUrl: imageTabsContent
    },
    {
      title: "Unblur Heading",
      description: "Unblur heading on scroll",
      category: categories.WEB,
      path: paths.UnblurHeading,
      imageUrl: imageRevealHeading
    },
    {
      title: "Impossible Checkbox",
      description: "Checkbox with impossible state",
      category: categories.WEB,
      path: paths.ImpossibleCheckbox,
      imageUrl: imageImpossibleCheckbox
    },
    {
      title: "Motion Sidebar",
      description: "Sidebar with motion animation",
      category: categories.WEB,
      path: paths.MotionSidebar,
      imageUrl: imageMotionSidebar
    },
    {
      title: 'Dashboard 1',
      description: 'Dashboard concept with lucide icons',
      category: categories.WEB,
      path: paths.dashboard1,
      imageUrl: imageDashboard1
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
          {filters.map(({name, icon: Icon}) => (
            <FilterButton
              key={name}
              active={activeFilter === name}
              onClick={() => setActiveFilter(name)}
            >
              <div className="flex items-center gap-2">
                <Icon size={16}/>
                {name}
              </div>
            </FilterButton>
          ))}
        </div>
      </nav>

      {/* Cards Grid */}
      <div className="w-full max-w-5xl mx-auto px-4 pb-9">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
