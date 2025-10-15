import React, { useState, createContext, useContext } from "react";
import NavbarMain from "./NavbarMain";
import FirstTimeBuyer from "./Homebuyer";
import { useLeadForm } from "../hooks/useLeadForm";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Context for global modal access
const EnquiryModalContext = createContext();
export const useEnquiryModal = () => useContext(EnquiryModalContext);

export const EnquiryModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <EnquiryModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && <Contact onClose={closeModal} />}
    </EnquiryModalContext.Provider>
  );
};

const Contact = ({ onClose }) => {
    const navigate = useNavigate();
    const {
        phone,
        setPhone,
        dialCode,
        isoCode,
        loading,
        success,
        setSuccess,
        submitLead,
        setDialCode,
        setIsoCode,
        setNumberWithoutCountryCode
    } = useLeadForm();

    const [consentChecked, setConsentChecked] = useState(true);
    const [phoneError, setPhoneError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Phone Validation
        if (!phone || phone.replace(/\D/g, "").length < 10) {
            setPhoneError("Please enter a valid 10-digit phone number");
            return;
        }
        setPhoneError("");

        if (!consentChecked) return;
        const formData = { name: e.target.name.value };
        const result = await submitLead(formData, e.target);
        if (result) {
            e.target.reset();
            setConsentChecked(false);
            // onClose();
            if (typeof onClose === "function") onClose();
            navigate("/thankyou.html");
        }
    };
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
                    src="../Assets/banner3.webp"
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover transform"
                />

                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl text-white md:text-6xl font-bold mb-8">
                        Contact Us
                    </h1>
                    {/* Bottom Info Line */}
                    <p className="mt-6 text-sm md:text-base text-gray-200">
                        4,000 listings · 400+ agents · Serving 80+ countries
                    </p>
                </div>
            </section>
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-16">
                <div className="max-w-6xl mx-auto md:p-10 bg-white rounded-xl md:gap-10 shadow-lg flex flex-col md:flex-row items-center md:items-stretch overflow-hidden">

                    {/* Image */}
                    <div className="order-1 md:order-2 rounded-xl flex justify-center md:justify-end md:mr-10 p-6 md:p-0">
                        <img
                            src="../Assets/banner2.webp"
                            alt="First time buyer illustration"
                            className="w-64 sm:w-96 h-auto rounded-xl object-contain"
                        />
                    </div>

                    {/* Text */}
                    <div className="max-w-xl p-6 sm:p-10 flex flex-col justify-center items-start order-2 md:order-1 md:text-left">
                        <h2 className="text-2xl sm:text-4xl font-semibold mb-6 tracking-wide text-[#003153]">
                            ENQUIRE NOW
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Input */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded-md bg-transparent text-[#003153] border border-[#003153] focus:border-[#003153] outline-none"
                                required
                            />

                            {/* Phone Input */}
                            <PhoneInput
                                country={isoCode || "in"}
                                value={phone}
                                onChange={(value, country) => {
                                    setPhone(value);
                                    setDialCode(`${country.dialCode}`);
                                    setIsoCode(country.countryCode);
                                    setNumberWithoutCountryCode(value.replace(country.dialCode, ""));
                                }}
                                inputProps={{ name: "phone", required: true, id: "phone" }}
                                containerClass="w-full"
                                inputClass="!w-full !bg-transparent !text-[#003153] !py-3 !pl-12 !pr-3 !rounded-md !border !border-[#003153] focus:!border-[#003153] !outline-none"
                                buttonClass="!bg-gray-800 !border-none !rounded-l-md"
                                dropdownClass="!bg-black !text-white"
                                searchClass="!bg-black !text-white"
                                enableSearch={true}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-md bg-transparent text-[#003153] border border-[#003153] focus:border-[#003153] outline-none"
                            // required
                            />

                            {/* Consent Text */}
                            <div className="flex items-start space-x-2">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    checked={consentChecked}
                                    onChange={(e) => setConsentChecked(e.target.checked)}
                                    className="mt-1 w-4 h-4 accent-[#003153] cursor-pointer"
                                    required
                                />
                                <label
                                    htmlFor="consent"
                                    className="text-xs text-[#003153] leading-relaxed cursor-pointer"
                                >
                                    I consent to the processing of provided data according to the{" "}
                                    <Link
                                        to="/privacy-policy"
                                        onClick={onClose}
                                        className="underline hover:text-[#003153]/80"
                                    >
                                        Privacy Policy | Terms & Conditions
                                    </Link>{" "}
                                    . I authorize Nova Capital Real Estate and its representatives
                                    to call, SMS, email, or WhatsApp me about its products and
                                    offers. This consent overrides any registration for DNC / DNCR.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#003153] hover:bg-[#004d66] text-white text-md font-semibold py-3 rounded-md transition"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "SUBMIT"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <FirstTimeBuyer />
        </>
    );
};
export default Contact;