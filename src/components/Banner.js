import React, { useState } from "react";
import NavbarMain from "./NavbarMain";
import Footer from "./Footer";
import FirstTimeBuyer from "./Homebuyer";
import { useEnquiryModal } from "./EnquiryModal";
import PricingComponent from "./PricingComponent";
import OffPlanComponent from "./OffPlanComponent";
import PopularSearches from "./PopularSearches";
import SEO from "./SEO";
import AreaComponent from "./AreaComponent";
import AboutUs from "./AboutUsComponent";
import ReviewCarousel from "./ReviewCarousel";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [propertyType, setPropertyType] = useState("Property Type");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { openModal } = useEnquiryModal();

  return (
    <>
      <SEO
        title="Furnished Apartments & Luxury Villas in UAE"
        description="Nova Capital Real Estate — Find furnished apartments in Dubai, private pool villas, pet-friendly properties and commercial spaces in Business Bay."
        canonical="http://localhost:3000/"
        keywords="furnished apartments dubai, private pool villas, pet-friendly properties uae, commercial space leasing business bay"
      />
      <NavbarMain />
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden">
        {/* Background Video */}
        {/* <video
          className="absolute inset-0 w-full h-full object-cover transform rotate-180"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="../Assets/banner2.mp4" type="video/mp4" />
        </video> */}
        <img
          src="../Assets/area1.webp"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover transform"
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Find your home in Dubai.
          </h1>

          {/* Toggle Buttons */}
          <div className="flex justify-center space-x-3 mb-8">
            {["All", "Ready", "Off Plan"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md border ${activeTab === tab
                  ? "bg-white text-[#003153] font-semibold"
                  : "border-white text-white hover:bg-white/20"
                  } transition`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center bg-white rounded-xl overflow-hidden w-full max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Area, project or community"
              className="flex-grow px-4 py-3 text-gray-800 outline-none text-sm"
            />

            {/* Property Type Dropdown */}
            {/* <div className="relative border-t md:border-t-0 md:border-l">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-full md:w-40 px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              {propertyType}
              <ChevronDown size={18} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-1 w-full bg-white shadow-lg rounded-md text-gray-700">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setPropertyType("Residential");
                    setDropdownOpen(false);
                  }}
                >
                  Residential
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setPropertyType("Commercial");
                    setDropdownOpen(false);
                  }}
                >
                  Commercial
                </button>
              </div>
            )}
          </div> */}

            {/* Beds Dropdown */}
            <select className="border-t md:border-t-0 md:border-l px-4 py-3 text-gray-700 text-sm">
              <option>Property Type</option>
              <option>Residential</option>
              <option>Commercial</option>
              {/* <option>3 Beds</option> */}
              {/* <option>4+ Beds</option> */}
            </select>

            {/* Price Range Dropdown */}
            <select className="border-t md:border-t-0 md:border-l px-3 py-3 text-gray-700 text-sm">
              <option>Price Range</option>
              <option>Below 1M AED</option>
              <option>1M - 5M AED</option>
              <option>5M - 10M AED</option>
              <option>10M+ AED</option>
            </select>

            {/* Search Button */}
            <button className="bg-[#003153] hover:bg-[#003153]/80 px-8 py-3 font-semibold text-white">
              Search
            </button>
          </div>

          {/* Bottom Info Line */}
          <p className="mt-6 text-sm md:text-base text-gray-200">
            4,000 listings · 400+ agents · Serving 80+ countries
          </p>
        </div>

        {/* Scroll Down Arrow */}
        <a
          href="#pricing-component"
          className="absolute items-center justify-center bottom-6 -translate-x-1/2 animate-bounce z-10"
        >
          <i className="ri-arrow-down-circle-fill text-[#ffffff] text-5xl "></i>
        </a>
      </section>
      <PricingComponent />
      <OffPlanComponent />
      <AreaComponent />
      <AboutUs />
      <ReviewCarousel />
      <FirstTimeBuyer />
      <PopularSearches />
      <Footer />
    </>
  );
}
