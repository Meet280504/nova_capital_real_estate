import React from "react";
import { useLocation, Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { FaMapMarkerAlt, FaBed, FaBath, FaCheckCircle } from "react-icons/fa";
import { LuGrid2X2 } from "react-icons/lu";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FirstTimeBuyer from "./Homebuyer";

export default function CardPage() {
    const { state: property } = useLocation();

    if (!property) {
        return (
            <div className="p-10 text-center text-xl text-gray-600">
                Property details not found. Please go back to the listing page.
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
                <div className="container justify-between items-center">
                    {/* Breadcrumb */}
                    <div className="flex space-x-2 text-[#003153]">
                        <Link to="/" className="hover:underline text-xl">
                            Home
                        </Link>
                        <GoDotFill size={10} className="mt-2.5 text-[#003153]" />
                        {/* <span className="text-[#003153] text-xl">Property</span> */}
                        <Link to="/new-projects" className="hover:underline text-[#003153] text-xl">
                            New Projects
                        </Link>
                        <GoDotFill size={10} className="mt-2.5 text-[#003153]" />
                        <span className="text-[#003153] font-medium text-xl">{property.location}</span>
                    </div>

                    {/* Title and Price */}
                    <div className="flex flex-col md:flex-row justify-between mt-6">
                        <h1 className="text-[#000000] font-bold lg:text-4xl text-2xl">{property.title}</h1>
                        {/* <h4 className="text-3xl text-[#003153] font-bold mt-4 md:mt-0">{property.price}</h4> */}
                    </div>

                    {/* Image Section */}
                    <div className="mt-10 flex flex-col lg:flex-row gap-6">
                        <img
                            src={property.image}
                            alt={property.title}
                            className="rounded-xl w-full lg:w-2/3 h-[350px] object-cover"
                        />
                        <div className="flex flex-col gap-4 w-full lg:w-1/3">
                            <img src="../Assets/gallery2.webp" alt="DL1" className="rounded-xl h-[170px] object-cover" />
                            <img src="../Assets/gallery3.webp" alt="DL2" className="rounded-xl h-[170px] object-cover" />
                        </div>
                    </div>

                    {/* Property Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                        <div>
                            <h4 className="text-3xl text-[#003153] font-bold md:mt-0">{property.price}</h4>
                            <button className="mt-4 text-lg bg-[#003153] text-white px-8 py-2 rounded-lg hover:bg-[#003153]/70 transition">
                                Request Visit Now!
                            </button>
                        </div>
                        <div>
                            <p className="flex items-center text-[#333333] text-lg mt-4">
                                <FaMapMarkerAlt size={20} className="mr-2 text-[#003153]" /> {property.location}
                            </p>
                            {/* <div className="flex gap-8 text-[#333333] mt-4 text-lg">
                                <span className="flex flex-col md:flex-row items-center">
                                    <LuGrid2X2 size={20} className="mr-2 text-[#003153]" />
                                    {property.sqft} Sq Ft
                                </span>
                                <span className="flex flex-col md:flex-row items-center">
                                    <FaBed size={20} className="mr-2 text-[#003153]" />
                                    {property.beds} Bedroom
                                </span>
                                <span className="flex flex-col md:flex-row items-center">
                                    <FaBath size={20} className="mr-2 text-[#003153]" />
                                    {property.baths} Bathroom
                                </span>
                            </div> */}
                        </div>
                    </div>

                    <div className="lg:p-10 p-4 mt-10 bg-white shadow rounded-lg">
                        <h1 className="text-[#333333] font-bold lg:text-4xl text-2xl">{property.title}</h1>
                        <hr className="my-4" />

                        {/* Property Details */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex justify-between text-[#333333] text-lg">
                                    <h4 className="text-left">{property.label}</h4>
                                    <h4 className="text-right">{property.value}</h4>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        {/* <h2 className="text-[#003153] text-2xl font-semibold mt-6">Description</h2>
                        <hr className="my-4" />
                        <p className="text-[#333333] text-lg"></p> */}

                        {/* Price History */}
                        <h2 className="text-[#003153] text-2xl font-semibold mt-6">Price History</h2>
                        <hr className="my-4" />
                        <div className="space-y-2">
                            <div className="flex justify-between text-[#333333] text-lg">
                                <h4>{property.title}</h4>
                                <h4>{property.price}</h4>
                            </div>
                        </div>

                        {/* Other Demographics */}
                        <h2 className="text-[#003153] text-2xl font-semibold mt-6">Other Demographics</h2>
                        <hr className="my-4" />
                        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            <div className="space-y-4">
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Backyard</h2>
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Garage</h2>
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Outdoor Kitchen</h2>
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Storage Units</h2>
                            </div>
                            <div className="space-y-4">
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Pet Friendly</h2>
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Laundry</h2>
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Family Room</h2>
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Wi-fi</h2>
                            </div>
                            <div className="space-y-4">
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Balcony</h2>
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Fitness Center</h2>
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Barbeque</h2>
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Sauna</h2>
                            </div>
                            <div className="space-y-4">
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Swimming Pool</h2>
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Studio</h2>
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Soccer Field</h2>
                                <h2 className="flex items-center text-[#333333] text-lg"><FaCheckCircle className="text-[#003153] mr-2" /> Gym</h2>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            {/* <PricingComponent /> */}
            <FirstTimeBuyer />
            <Footer />
        </>
    );
}
