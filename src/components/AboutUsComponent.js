import React from "react";
import {
  Users,
  Building2,
  UserCheck,
  Calendar,
  Coins,
  MessageSquare,
  MapPin,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: <Users className="w-10 h-10 text-[#003153]" />,
    title: "120,000 customers",
    desc: "purchased a property from Metropolitan Group in the UAE",
  },
  {
    icon: <Building2 className="w-10 h-10 text-[#003153]" />,
    title: "6000+ properties",
    desc: "sold, rented, and leased throughout the UAE",
  },
  {
    icon: <UserCheck className="w-10 h-10 text-[#003153]" />,
    title: "250+ top performing agents",
    desc: "who specialize in your target area",
  },
  {
    icon: <Calendar className="w-10 h-10 text-[#003153]" />,
    title: "15+ years",
    desc: "of successful work and achievements",
  },
  {
    icon: <Coins className="w-10 h-10 text-[#003153]" />,
    title: "AED 11 Billion",
    desc: "total amount of real estate sold by us in 2022",
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-[#003153]" />,
    title: "40+ languages",
    desc: "spoken by our agents and team",
  },
  {
    icon: <MapPin className="w-10 h-10 text-[#003153]" />,
    title: "18 Offices",
    desc: "including Dubai, Abu Dhabi, and Vienna",
  },
  {
    icon: <Award className="w-10 h-10 text-[#003153]" />,
    title: "Top Selling Partner Partner",
    desc: "with the leading UAE developers",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-[#ffffff] py-0 lg:py-0 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6">
          About Us
        </h2>
        <p className="text-black text-base md:text-lg mb-8 leading-relaxed max-w-4xl mx-auto">
          Established in 2008, Nova Capital Real Estate continues to achieve the
          highest quality service for all clients. Whether the clients are
          local or overseas, Nova Capital Premium Properties provides the
          highest level of support, advice, and assistance with all of your
          property needs.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-black mb-2 text-lg">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
