import React from "react";
import { useEnquiryModal } from "./EnquiryModal";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FirstTimeBuyer from "./Homebuyer";
import SEO from "./SEO";

const properties = [
  {
    id: 1,
    image: "../Assets/banner1.webp",
    price: "2,271,180 AED",
    beds: 1,
    baths: 2,
    sqft: 769,
    title: "1BR Apartment for Sale in Al Marjan Island – MPS-40806",
    location: "Acacia, Al Marjan Island",
    agent: "Metropolitan Premium Properties",
    agentImg: "../Assets/agent_image.png",
  },
  {
    id: 2,
    image: "../Assets/banner2.webp",
    price: "5,758,303 AED",
    beds: 2,
    baths: 3,
    sqft: 1994,
    title: "2BR Apartment for Sale in Al Marjan Island – MPS-40805",
    location: "Aqua Arc, Al Marjan Island",
    agent: "Metropolitan Premium Properties",
    agentImg: "../Assets/agent_image.png",
  },
  {
    id: 3,
    image: "../Assets/banner3.webp",
    price: "1,200,000 AED",
    beds: "Studio",
    baths: 1,
    sqft: 458,
    title: "Studio Apartment for Sale in Business Bay – MPS-40787",
    location: "Canal Heights 2, Business Bay",
    agent: "Bartus Peter Gerard Aarts",
    agentImg: "../Assets/agent_image.png",
  },
  {
    id: 4,
    image: "../Assets/banner4.webp",
    price: "3,450,000 AED",
    beds: 3,
    baths: 3,
    sqft: 1500,
    title: "3BR Apartment for Sale in Dubai Downtown - MPS-40875",
    location: "Dubai Marina, Dubai",
    agent: "Metropolitan Premium Properties",
    agentImg: "../Assets/agent_image.png",
  },
  {
    id: 5,
    image: "../Assets/gallery1.webp",
    price: "2,250,100 AED",
    beds: 1,
    baths: 2,
    sqft: 769,
    title: "2BR Apartment for Sale in Al Marjan Island – MPS-40706",
    location: "Acacia, Al Marjan Island",
    agent: "Metropolitan Premium Properties",
    agentImg: "../Assets/agent_image.png",
  },
  {
    id: 6,
    image: "../Assets/gallery2.webp",
    price: "5,750,050 AED",
    beds: 2,
    baths: 3,
    sqft: 1994,
    title: "3BR Apartment for Sale in Al Marjan Island – MPS-40815",
    location: "Aqua Arc, Al Marjan Island",
    agent: "Metropolitan Premium Properties",
    agentImg: "../Assets/agent_image.png",
  },
];

export default function PropertyCarousel() {
  const { openModal } = useEnquiryModal();
  return (
    <>
      <SEO
        title="Off-Plan Projects Dubai 2025"
        description="Explore the best off-plan projects in Dubai for 2025. Compare returns, payment plans and top developers."
        canonical="http://localhost:3000/new-projects"
        keywords="off-plan projects dubai 2025, dubai real estate investment guide 2025, dubai property investment opportunities"
      />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center md:mb-6 mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] text-center sm:text-left">
            Off Plan Latest Launches
          </h2>
          {/* <button className="border-2 border-[#0B1A3C] px-5 py-2 text-[#003153] rounded-lg text-md font-semibold hover:text-white hover:bg-[#003153] transition">
            Explore off-plan projects
          </button> */}
        </div>

        {/* Responsive Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-52 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                  <span className="bg-[#003153] text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded">
                    Off-Plan
                  </span>
                  <span className="bg-white text-[#003153] text-[10px] sm:text-xs font-semibold px-2 py-1 rounded">
                    Delivery: Q1 2029
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-[#003153] font-bold text-lg sm:text-xl mb-2">
                  {p.price}
                </h3>
                <p className="text-sm sm:text-base font-medium leading-snug mb-1">
                  {p.title}
                </p>
                <p className="text-sm text-gray-700 flex items-center gap-1">
                  <i className="fa-solid fa-location-dot text-[#003153]"></i>
                  {p.location}
                </p>
                <button
                  onClick={openModal}
                  className="w-full bg-[#003153] text-white font-semibold py-2 mt-4 rounded-lg text-sm sm:text-md hover:bg-[#003153]/90 transition"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FirstTimeBuyer />
      <Footer />
    </>
  );
}
