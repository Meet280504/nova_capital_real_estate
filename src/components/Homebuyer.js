import React from "react";
import { useEnquiryModal } from './EnquiryModal';

export default function FirstTimeBuyer() {
  const { openModal } = useEnquiryModal();

  return (
    <section id="homebuyer" className="bg-blue-50 py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto md:p-10 bg-white rounded-xl md:gap-10 shadow-lg flex flex-col md:flex-row items-center md:items-stretch overflow-hidden">
        
        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end md:mr-10 p-6 md:p-0">
          <img
            src="../Assets/homebuyer_logo.svg"
            alt="First time buyer illustration"
            className="w-64 sm:w-80 h-auto object-contain"
          />
        </div>

        {/* Text */}
        <div className="max-w-2xl p-6 sm:p-10 flex flex-col justify-center items-start md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            First time buyer in Dubai?
          </h2>
          <p className="text-black font-medium text-lg mb-6">
            Register your interest and connect to approved developers in Dubai.
          </p>
          <button
            onClick={openModal}
            className="bg-[#003153] text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-[#003153]/80 transition"
          >
            Get in touch →
          </button>
        </div>
      </div>
    </section>
  );
}
