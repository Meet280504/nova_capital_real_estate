import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "Shariq",
        rating: 5,
        daysAgo: "5 days ago",
        review:
            "Many thanks to Vian Dunja for her efforts. She is an excellent communicator and helped me purchase my property leveraging her knowledge exceptionally well.",
    },
    {
        id: 2,
        name: "Amanda A",
        rating: 5,
        daysAgo: "6 days ago",
        review:
            "Working with the team at Metropolitan Premium Properties has been nothing short of exceptional. They're professional, responsive, and truly understand how to build strong, lasting partnerships.",
    },
    {
        id: 3,
        name: "Celine Hrg",
        rating: 5,
        daysAgo: "6 days ago",
        review:
            "I had an amazing experience working with Vian Dunja as my real estate agent! She was professional, knowledgeable, and always went above and beyond to make the process smooth and stress-free.",
    },
    {
        id: 4,
        name: "Rahul M",
        rating: 5,
        daysAgo: "1 week ago",
        review:
            "Very smooth experience! The process was well-guided and transparent from start to finish.",
    },
    {
        id: 5,
        name: "Emily R",
        rating: 5,
        daysAgo: "2 weeks ago",
        review:
            "The team was extremely professional and responsive. Highly recommend them!",
    },
    {
        id: 6,
        name: "John D",
        rating: 5,
        daysAgo: "3 weeks ago",
        review:
            "Great communication and support throughout the property purchase process.",
    },
];

export default function ReviewCarousel() {
    return (
        <section className="bg-[#ffffff] py-0 lg:py-0 px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
                {/* Header */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] text-left mb-8">
                    Reviews About Our Company
                </h2>

                {/* Swiper Section */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviews.map((r) => (
                        <SwiperSlide key={r.id}>
                            <div className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition duration-300 p-6 h-64 flex flex-col justify-between">
                                <div>
                                    {/* Rating + Days */}
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center">
                                            <span className="text-xl font-semibold mr-1">{r.rating}</span>
                                            {[...Array(r.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                                />
                                            ))}
                                        </div>
                                        <span className="text-gray-500 text-sm">{r.daysAgo}</span>
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                                        {r.review}
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="flex justify-between items-center border-t pt-3">
                                    <span className="font-medium text-gray-900">{r.name}</span>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                        alt="Google"
                                        className="w-14"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
