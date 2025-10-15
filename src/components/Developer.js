import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import NavbarMain from "./NavbarMain";
import Footer from "./Footer";
import FirstTimeBuyer from "./Homebuyer";
import { useEnquiryModal } from "./EnquiryModal";

const developers = [
    { id: 1, name: "Emaar", img: "../Assets/d1.png" },
    { id: 2, name: "Nakheel", img: "../Assets/d2.png" },
    { id: 3, name: "Meraas", img: "../Assets/d3.png" },
    { id: 4, name: "Damac", img: "../Assets/d4.png" },
    { id: 5, name: "Azizi Developments", img: "../Assets/d5.png" },
    { id: 6, name: "Danube Property", img: "../Assets/d6.png" },
    { id: 7, name: "Sobha Realty", img: "../Assets/d7.png" },
    { id: 8, name: "Binghati", img: "../Assets/d8.png" },
    { id: 9, name: "Deyaar", img: "../Assets/d9.svg" },
    { id: 10, name: "Nishma Group", img: "../Assets/d10.svg" },
    { id: 11, name: "MAG", img: "../Assets/d11.svg" },
    { id: 12, name: "Select Group", img: "../Assets/d12.svg" },
];

export default function Developer() {
    const [activeTab, setActiveTab] = useState("Buy");
    const [propertyType, setPropertyType] = useState("Property Type");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { openModal } = useEnquiryModal();

    return (
        <>
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
                    src="../Assets/banner4.webp"
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover transform"
                />

                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">
                        Developers in Dubai.
                    </h1>

                    {/* Toggle Buttons */}
                    {/* <div className="flex justify-center space-x-3 mb-8">
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
          </div> */}

                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row items-stretch md:items-center bg-white rounded-xl overflow-hidden w-full max-w-4xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search Developer Name"
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
                        {/* <select className="border-t md:border-t-0 md:border-l px-4 py-3 text-gray-700 text-sm">
              <option>Property Type</option>
              <option>Residential</option>
              <option>Commercial</option> */}
                        {/* <option>3 Beds</option> */}
                        {/* <option>4+ Beds</option> */}
                        {/* </select> */}

                        {/* Price Range Dropdown */}
                        <select className="border-t md:border-t-0 md:border-l px-3 py-3 text-gray-700 text-sm">
                            <option>Area</option>
                            <option>Dubai Marina</option>
                            <option>Downtown Dubai</option>
                            <option>Business Bay</option>
                            <option>Al Marjan Island</option>
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
                {/* <a
                    href="#developer-section"
                    className="absolute items-center justify-center bottom-6 -translate-x-1/2 animate-bounce z-10"
                >
                    <i className="ri-arrow-down-circle-fill text-[#ffffff] text-5xl "></i>
                </a> */}
            </section>
            <div id="developer-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 sm:pb-16">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {developers.map((dev) => (
                        <div
                            key={dev.id}
                            className="border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition duration-300 bg-white"
                        >
                            <img
                                src={dev.img}
                                alt={dev.name}
                                className="h-16 object-contain mb-4"
                            />
                            <p className="text-sm font-medium text-gray-700 text-center">
                                {dev.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <FirstTimeBuyer />
            <Footer />
        </>
    );
}
