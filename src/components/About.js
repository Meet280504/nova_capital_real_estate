import React from "react";
import FirstTimeBuyer from "./Homebuyer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const developers = [
    { id: 1, img: "/Assets/d1.png" },
    { id: 2, img: "/Assets/d2.png" },
    { id: 3, img: "/Assets/d3.png" },
    { id: 4, img: "/Assets/d4.png" },
    { id: 5, img: "/Assets/d5.png" },
    { id: 6, img: "/Assets/d6.png" },
    { id: 7, img: "/Assets/d7.png" },
    { id: 8, img: "/Assets/d8.png" },
    // { id: 9, img: "/Assets/d9.svg" },
    { id: 10, img: "/Assets/d10.svg" },
    // { id: 11, img: "/Assets/d11.svg" },
    { id: 12, img: "/Assets/d12.svg" },
];

const About = () => {
    return (
        <>
            <Navbar />
            {/* --- Top Section: About Nova Capital (Team Image Section) --- */}
            <section className="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-24">
                {/* Heading Section */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        About <span className="text-amber-600">Nova Capital</span>
                    </h2>
                    <p className="text-black font-semibold mt-2 text-sm ">
                        Expertise, Luxury, and Trust in Every Transaction
                    </p>
                </div>

                {/* Team Image */}
                <div className="flex justify-center mb-8">
                    <img
                        src="../Assets/our_team.webp" // Replace with your actual team image path
                        alt="Nova Capital Team"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>

                {/* Description */}
                <p className="text-black leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
                    At Nova Capital Real Estate, we specialize in connecting discerning
                    clients with the finest properties Dubai has to offer. Whether you’re
                    looking to buy, sell, or invest, our team of experienced professionals
                    is dedicated to providing exceptional service tailored to your unique
                    needs.
                </p>
            </section>

            {/* --- Existing Section: Our Story (Left Image + Right Text) --- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center bg-white">
                    {/* Left: Image */}
                    <div>
                        <img
                            src="../Assets/about_i2.webp"
                            alt="Real Estate Agent"
                            className="rounded-lg shadow-lg w-full h-full object-cover"
                        />
                    </div>

                    {/* Right: Text */}
                    <div className="w-full text-gray-800 md:pl-12">
                        <h3 className="text-lg text-amber-600 font-semibold uppercase mb-2">
                            Our Story
                        </h3>
                        <h1 className="text-3xl md:text-4xl font-bold mb-6">
                            Welcome to Nova Capital
                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            It is with immense pride and excitement that I welcome you to Nova
                            Capital Real Estate. Our journey has been defined by dedication,
                            growth, and a commitment to excellence in Dubai’s dynamic real
                            estate market.
                        </p>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            At Nova Capital, we go beyond transactions—we build lasting
                            relationships. Our mission is to provide unparalleled service,
                            expert guidance, and the confidence that comes from partnering
                            with a team deeply rooted in the market. Whether you’re a
                            first-time buyer, seasoned investor, or looking to sell, we ensure
                            a seamless and rewarding experience.
                        </p>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our passionate team stays ahead of trends, embraces innovation,
                            and consistently delivers exceptional results. We are dedicated to
                            elevating your real estate journey with professionalism, integrity,
                            and success.
                        </p>

                        <p className="text-gray-700 font-medium">
                            Thank you for trusting us. Together, let’s unlock the limitless
                            potential of Dubai’s real estate market.
                        </p>

                        {/* Stats Section */}
                        <div className="flex flex-wrap mt-6 gap-8 md:gap-16">
                            <div className="font-semibold">
                                <h2 className="text-4xl md:text-6xl text-center font-bold text-black">750+</h2>
                                <p className="text-black text-center text-sm sm:text-md mt-1">Properties</p>
                            </div>
                            <div className="font-semibold">
                                <h2 className="text-4xl md:text-6xl text-center font-bold text-black">25</h2>
                                <p className="text-black text-center text-sm sm:text-md mt-1">Agents</p>
                            </div>
                            <div className="font-semibold">
                                <h2 className="text-4xl md:text-6xl font-bold text-center text-black">140</h2>
                                <p className="text-black text-center text-sm sm:text-md mt-1">Cities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Existing Section: Our Story (Left Text + Right Image) --- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center bg-white">
                    {/* Left: Text */}
                    <div className="w-full justify-center text-gray-800 md:order-1 order-2 md:pr-6">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Message from the CEO
                        </h1>
                        <h3 className="text-xl text-amber-600 font-semibold uppercase mb-4">
                            MR. KAMIL NAFIS
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            I am thrilled to welcome you to Nova Capital Real Estate, where dedication and excellence define our journey in Dubai’s dynamic real estate market. We go beyond transactions, building lasting relationships through unparalleled service, expert guidance, and a deep understanding of the market.
                        </p>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our passionate team is committed to delivering exceptional results, staying ahead of trends, and ensuring a seamless experience for buyers, sellers, and investors. Thank you for trusting us as your partner in navigating Dubai’s thriving real estate landscape. Together, let’s achieve your goals with professionalism and success.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="order-1 md:order-2">
                        <img
                            src="../Assets/about_i3.webp"
                            alt="Real Estate Agent"
                            className="rounded-lg shadow-lg w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-white pt-0 lg:pt-10 lg:py-0 py-10 pb-4 lg:pb-20 lg:px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
                        Our Developer's Partner
                    </h2>

                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={3000}
                        slidesPerView={6}
                        spaceBetween={40}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 20 },
                            640: { slidesPerView: 3, spaceBetween: 30 },
                            1024: { slidesPerView: 6, spaceBetween: 40 },
                        }}
                        className="flex items-center"
                    >
                        {developers.map((d) => (
                            <SwiperSlide key={d.id}>
                                <div className="flex justify-center items-center hover:opacity-80 transition">
                                    <img
                                        src={d.img}
                                        alt="Developer logo"
                                        className="w-32 sm:w-40 md:w-40 object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <FirstTimeBuyer />
            <Footer />
        </>
    );
};
export default About;
