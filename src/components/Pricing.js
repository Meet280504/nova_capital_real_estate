import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { useEnquiryModal } from "./EnquiryModal";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FirstTimeBuyer from "./Homebuyer";

const properties = [
  {
    id: 1,
    image: "../Assets/gallery3.webp",
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
    image: "../Assets/gallery4.webp",
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
    image: "../Assets/gallery5.webp",
    price: "1,200,000 AED",
    beds: "Studio",
    baths: 1,
    sqft: 458,
    title: "Studio Apartment for Sale in Business Bay - MPS-40787",
    location: "Canal Heights 2, Business Bay",
    agent: "Bartus Peter Gerard Aarts",
    agentImg: "../Assets/agent_image.png",
  },
  {
    id: 4,
    image: "../Assets/gallery6.webp",
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
    image: "../Assets/gallery7.webp",
    price: "2,151,200 AED",
    beds: 2,
    baths: 3,
    sqft: 1400,
    title: "2BR Apartment for Sale in Dubai Downtown – MPS-40825",
    location: "Dubai Downtown, Dubai",
    agent: "Metropolitan Premium Properties",
    agentImg: "../Assets/agent_image.png",
  },
  {
    id: 6,
    image: "../Assets/gallery2.webp",
    price: "4,750,300 AED",
    beds: 3,
    baths: 4,
    sqft: 2000,
    title: "3BR Apartment for Sale in Al Marjan Island – MPS-40705",
    location: "Aqua Arc, Al Marjan Island",
    agent: "Metropolitan Premium Properties",
    agentImg: "../Assets/agent_image.png",
  },
];

export default function PropertyCarousel() {
  const navigate = useNavigate();
  const { openModal } = useEnquiryModal();
  
  const handleCardClick = (property) => {
    navigate(`/property/${property.id}`, { state: property });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center md:mb-6 mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] text-center sm:text-left">
            Golden Visa Properties
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <div key={p.id} onClick={() => handleCardClick(p)}
            className="cursor-pointer bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:-translate-y-1">
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  <span className="bg-[#003153] text-white text-xs font-semibold px-2 py-1 rounded">
                    BUY
                  </span>
                  <span className="bg-white text-[#003153] text-xs font-semibold px-2 py-1 rounded">
                    APARTMENT
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-[#003153] font-bold text-lg mb-3">{p.price}</h3>
                <div className="flex items-center gap-4 text-gray-700 text-sm mb-3">
                  <span className="flex items-center">
                    <i className="fa-solid text-[#003153] fa-bed mr-1"></i> {p.beds} Beds
                  </span>
                  <span className="flex items-center">
                    <i className="fa-solid text-[#003153] fa-bath mr-1"></i> {p.baths} Baths
                  </span>
                  <span className="">
                    <i className="fa-solid text-[#003153] fa-ruler-combined mr-1"></i> {p.sqft} Sqft
                  </span>
                </div>
                <p className="text-sm font-medium">{p.title}</p>
                <p className="text-gray-600 text-sm flex items-center mt-1">
                  <i className="fa-solid text-[#003153] fa-location-dot mr-1"></i> {p.location}
                </p>

                <div className="mt-4 border-t pt-4">
                  <div className="flex items-center gap-3">
                    {p.agentImg && (
                      <img
                        src={p.agentImg}
                        alt={p.agent}
                        className="w-16 h-20 rounded-md border"
                      />
                    )}
                    <div>
                      <p className="text-xs text-gray-600">Listing by</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {p.agent}
                      </p>
                    </div>
                  </div>
                </div>

                <button onClick={openModal} className="w-full bg-[#003153] text-white font-semibold py-2 rounded-lg mt-4 hover:bg-[#003153]/80 transition">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* </SwiperSlide>
        ))}
      </Swiper> */}
      </div>
      <FirstTimeBuyer />
      <Footer />
    </>
  );
}
