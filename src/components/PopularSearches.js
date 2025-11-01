import React, { useState } from "react";

const data = {
  dubai: {
    apartments: [
      { text: "Apartments for sale in Dubai", href: "/apartments-for-sale-in-dubai" },
      { text: "Apartments for sale in Downtown Dubai", href: "/apartments-for-sale-in-downtown-dubai" },
      { text: "Apartments for sale in Jumeirah Village Circle", href: "/apartments-for-sale-in-jvc" },
      { text: "Apartments for sale in Dubai Marina", href: "/apartments-for-sale-in-dubai-marina" },
      { text: "Apartments for sale in Dubai Creek Harbour", href: "/apartments-for-sale-in-dubai-creek" },
    ],
    villas: [
      { text: "Villas for sale in Dubai", href: "/villas-for-sale-in-dubai" },
      { text: "Villas for sale in Palm Jumeirah", href: "/villas-for-sale-in-palm-jumeirah" },
      { text: "Villas for sale in Dubai Hills Estate", href: "/villas-for-sale-in-dubai-hills-estate" },
      { text: "Villas for sale in DAMAC Hills 2 (Akoya by DAMAC)", href: "/villas-for-sale-in-damac-hills-2" },
      { text: "Villas for sale in Al Furjan", href: "/villas-for-sale-in-al-furjan" },
      { text: "Villas for sale in Arabian Ranches", href: "/villas-for-sale-in-arabian-ranches" },
      { text: "Villas for sale in The Meadows", href: "/villas-for-sale-in-the-meadows" },
    ],
    other: [
      { text: "Properties for sale in Dubai", href: "/properties-for-sale-in-dubai" },
      { text: "Townhouses for sale in Dubai", href: "/townhouses-for-sale-in-dubai" },
      { text: "Penthouses for sale in Dubai", href: "/penthouses-for-sale-in-dubai" },
      { text: "Hotel Apartments for sale in Dubai", href: "/hotel-apartments-for-sale-in-dubai" },
      { text: "Residential Plots for sale in Dubai", href: "/residential-plots-for-sale-in-dubai" },
      { text: "Commercial Properties for sale in Dubai", href: "/commercial-for-sale-in-dubai" },
      { text: "Off Plan Projects in Dubai", href: "/off-plan-projects-in-dubai" },
    ],
  },
  abuDhabi: {
    apartments: [
      { text: "Apartments for sale in Dubai", href: "/apartments-for-sale-in-dubai" },
      { text: "Apartments for sale in Downtown Dubai", href: "/apartments-for-sale-in-downtown-dubai" },
      { text: "Apartments for sale in Jumeirah Village Circle", href: "/apartments-for-sale-in-jvc" },
      { text: "Apartments for sale in Dubai Marina", href: "/apartments-for-sale-in-dubai-marina" },
      { text: "Apartments for sale in Business Bay", href: "/apartments-for-sale-in-business-bay" },
      { text: "Apartments for sale in Jumeirah Beach Residence (JBR)", href: "/apartments-for-sale-in-jbr" },
      { text: "Apartments for sale in Dubai Creek Harbour", href: "/apartments-for-sale-in-dubai-creek" },
    ],
    villas: [
      { text: "Villas for sale in Dubai", href: "/villas-for-sale-in-dubai" },
      { text: "Villas for sale in Palm Jumeirah", href: "/villas-for-sale-in-palm-jumeirah" },
      { text: "Villas for sale in Dubai Hills Estate", href: "/villas-for-sale-in-dubai-hills-estate" },
      { text: "Villas for sale in Al Furjan", href: "/villas-for-sale-in-al-furjan" },
      { text: "Villas for sale in Arabian Ranches", href: "/villas-for-sale-in-arabian-ranches" },
      { text: "Villas for sale in The Meadows", href: "/villas-for-sale-in-the-meadows" },
    ],
    other: [
      { text: "Properties for sale in Dubai", href: "/properties-for-sale-in-dubai" },
      { text: "Townhouses for sale in Dubai", href: "/townhouses-for-sale-in-dubai" },
      { text: "Hotel Apartments for sale in Dubai", href: "/hotel-apartments-for-sale-in-dubai" },
      { text: "Residential Plots for sale in Dubai", href: "/residential-plots-for-sale-in-dubai" },
      { text: "Commercial Properties for sale in Dubai", href: "/commercial-for-sale-in-dubai" },
      { text: "Off Plan Projects in Dubai", href: "/off-plan-projects-in-dubai" },
    ],
  },
  otherEmirates: {
    apartments: [
      { text: "Apartments for sale in Dubai", href: "/apartments-for-sale-in-dubai" },
      { text: "Apartments for sale in Downtown Dubai", href: "/apartments-for-sale-in-downtown-dubai" },
      { text: "Apartments for sale in Jumeirah Village Circle", href: "/apartments-for-sale-in-jvc" },
      { text: "Apartments for sale in Dubai Marina", href: "/apartments-for-sale-in-dubai-marina" },
      { text: "Apartments for sale in Business Bay", href: "/apartments-for-sale-in-business-bay" },
      { text: "Apartments for sale in Dubai Creek Harbour", href: "/apartments-for-sale-in-dubai-creek" },
    ],
    villas: [
      { text: "Villas for sale in Dubai", href: "/villas-for-sale-in-dubai" },
      { text: "Villas for sale in Palm Jumeirah", href: "/villas-for-sale-in-palm-jumeirah" },
      { text: "Villas for sale in Dubai Hills Estate", href: "/villas-for-sale-in-dubai-hills-estate" },
      { text: "Villas for sale in Al Furjan", href: "/villas-for-sale-in-al-furjan" },
      { text: "Villas for sale in Arabian Ranches", href: "/villas-for-sale-in-arabian-ranches" },
      { text: "Villas for sale in The Meadows", href: "/villas-for-sale-in-the-meadows" },
    ],
    other: [
      { text: "Properties for sale in Dubai", href: "/properties-for-sale-in-dubai" },
      { text: "Townhouses for sale in Dubai", href: "/townhouses-for-sale-in-dubai" },
      { text: "Penthouses for sale in Dubai", href: "/penthouses-for-sale-in-dubai" },
      { text: "Hotel Apartments for sale in Dubai", href: "/hotel-apartments-for-sale-in-dubai" },
      { text: "Residential Plots for sale in Dubai", href: "/residential-plots-for-sale-in-dubai" },
      { text: "Commercial Properties for sale in Dubai", href: "/commercial-for-sale-in-dubai" },
      { text: "Off Plan Projects in Dubai", href: "/off-plan-projects-in-dubai" },
    ],
  },
};

export default function PopularSearches() {
  const [activeTab, setActiveTab] = useState("sale");
  const [activeCity, setActiveCity] = useState("dubai");
  const [showMore, setShowMore] = useState(false);

  const renderLinks = (title, links) => {
    const visibleLinks = showMore ? links : links.slice(0, 5);
    return (
      <div className="flex-1 mb-8 md:mb-0">
        <h3 className="font-semibold text-[#000000] mb-3 uppercase text-md tracking-wide">{title}</h3>
        <ul className="space-y-1 transition-all duration-300">
          {visibleLinks.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-[#003153] hover:underline text-sm md:text-base">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Map city buttons to data keys
  const cityMap = {
    Dubai: "dubai",
    "Abu Dhabi": "abuDhabi",
    "Other Emirates": "otherEmirates",
  };

  return (
    <section className="max-w-7xl mx-auto py-6 sm:py-10 px-4 md:px-12">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#003153] mb-8">Popular Real Estate Searches</h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-8 mb-6 border-b border-gray-300">
        {["Sale", "Rent"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 text-lg font-medium ${
              activeTab === tab.toLowerCase() ? "text-[#003153] border-b-2 border-[#003153]" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* City Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {Object.keys(cityMap).map((city) => (
          <button
            key={city}
            className={`px-4 py-2 font-semibold rounded-md border text-sm md:text-base transition-all ${
              activeCity === cityMap[city] ? "bg-[#003153]/10 text-[#003153] border-[#003153]" : "border-gray-300 text-gray-600 hover:border-[#003153]"
            }`}
            onClick={() => setActiveCity(cityMap[city])}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="text-center text-lg font-semibold text-black mb-6">
        All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </div>

      {/* Links Section */}
      <div className="flex flex-col md:flex-row md:space-x-10">
        {renderLinks("Apartments", data[activeCity]?.apartments || [])}
        {renderLinks("Villas", data[activeCity]?.villas || [])}
        {renderLinks("Other Properties", data[activeCity]?.other || [])}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[#003153] text-sm md:text-base font-medium hover:underline"
        >
          {showMore ? "View Less ↑" : "View More ↓"}
        </button>
      </div>
    </section>
  );
}
