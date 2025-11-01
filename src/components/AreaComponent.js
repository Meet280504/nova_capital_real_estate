import React from "react";
import SEO from "./SEO";

const areas = [
    { id: 1, name: "Palm Jebel Ali", price: "From 1.9M AED", img: "./Assets/area1.webp" },
    { id: 2, name: "Dubai Marina", price: "From 650K AED", img: "./Assets/area2.jpg" },
    { id: 3, name: "Downtown Dubai", price: "From 1.05M AED", img: "./Assets/area3.jpg" },
    { id: 4, name: "Palm Jumeirah", price: "From 750K AED", img: "./Assets/area4.jpg" },
    { id: 5, name: "Business Bay", price: "From 699K AED", img: "./Assets/area5.webp" },
    { id: 6, name: "Dubai Hills Estate", price: "From 1.45M AED", img: "./Assets/area6.jpg" },
      { id: 7, name: "Emaar Beachfront", price: "From 1.5M AED", img: "./Assets/area7.jpg" },
];

const PopularAreas = () => {
    return (
        <>
            <SEO
                title="Best Family Neighborhoods in Dubai & Areas"
                description="Neighborhood guides: Dubai Marina, Business Bay, Palm Jumeirah and Sharjah — best family neighborhoods and affordable housing options."
                canonical="http://localhost:3000/areas"
                keywords="best family neighborhoods dubai, affordable housing options sharjah families, villas close to ibn battuta mall"
            />
            <div id="areas" className="py-0 lg:py-0 px-4 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    <div className="flex justify-between items-center gap-4 mb-6">
                        <h2 className="md:text-4xl text-2xl text-black font-bold">Popular Areas in Dubai</h2>
                        <button className="border-2 text-[#0B2B4C] text-md border-[#0B2B4C] px-4 py-2 font-semibold rounded-lg hover:bg-[#0B2B4C] hover:text-white transition">
                            Show All Areas
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {/* Large Left Card */}
                        <div className="md:col-span-2">
                            <div className="relative overflow-hidden rounded-xl group cursor-pointer h-full">
                                <img
                                    src="./Assets/area1.webp"
                                    alt="Masterplan"
                                    className="w-full h-64 md:h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white transition-all duration-500 group-hover:bottom-6">
                                    <h3 className="text-lg font-bold">Palm Jebel Ali</h3>
                                    <p className="text-sm opacity-90">Price from 19,400,000 AED</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative overflow-hidden rounded-xl group cursor-pointer h-full">
                            <img
                                src="./Assets/area2.jpg"
                                alt="Dubai Marina"
                                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white transition-all duration-500 group-hover:bottom-6">
                                <h3 className="text-lg font-bold">Dubai Marina</h3>
                                <p className="text-sm opacity-90">Price from 650,000 AED</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative overflow-hidden rounded-xl group cursor-pointer h-full">
                            <img
                                src="./Assets/area3.jpg"
                                alt="Downtown Dubai"
                                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white transition-all duration-500 group-hover:bottom-6">
                                <h3 className="text-lg font-bold">Downtown Dubai</h3>
                                <p className="text-sm opacity-90">Price from 1,050,000 AED</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
                        <div className="relative overflow-hidden rounded-xl group cursor-pointer h-full">
                            <img
                                src="./Assets/area4.jpg"
                                alt="Dubai Marina"
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white transition-all duration-500 group-hover:bottom-6">
                                <h3 className="text-lg font-bold">Palm Jumeirah</h3>
                                <p className="text-sm opacity-90">Price from 750,000 AED</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-xl group cursor-pointer h-full">
                            <img
                                src="./Assets/area5.webp"
                                alt="Dubai Marina"
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white transition-all duration-500 group-hover:bottom-6">
                                <h3 className="text-lg font-bold">Business Bay</h3>
                                <p className="text-sm opacity-90">Price from 699,000 AED</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-xl group cursor-pointer h-full">
                            <img
                                src="./Assets/area6.jpg"
                                alt="Dubai Marina"
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white transition-all duration-500 group-hover:bottom-6">
                                <h3 className="text-lg font-bold">Dubai Hills Estate</h3>
                                <p className="text-sm opacity-90">Price from 1,450,000 AED</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-xl group cursor-pointer h-full">
                            <img
                                src="./Assets/area7.jpg"
                                alt="Dubai Marina"
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white transition-all duration-500 group-hover:bottom-6">
                                <h3 className="text-lg font-bold">Emaar Beachfront</h3>
                                <p className="text-sm opacity-90">Price from 1,500,000 AED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularAreas;
