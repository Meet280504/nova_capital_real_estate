// // components/EnquiryModal.jsx
// import { useState, useContext, createContext } from "react";
// import { X } from "lucide-react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import "../components/Style/EnquiryModal.css";
// import { useLeadForm } from "../hooks/useLeadForm";
// import { Link, useNavigate } from "react-router-dom";

// // Context for global modal access
// const EnquiryModalContext = createContext();
// export const useEnquiryModal = () => useContext(EnquiryModalContext);

// export const EnquiryModalProvider = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   return (
//     <EnquiryModalContext.Provider value={{ openModal, closeModal }}>
//       {children}
//       {isOpen && <EnquiryModal onClose={closeModal} />}
//     </EnquiryModalContext.Provider>
//   );
// };

// const EnquiryModal = ({ onClose }) => {
//   const navigate = useNavigate();
//   const {
//     phone,
//     setPhone,
//     dialCode,
//     isoCode,
//     loading,
//     success,
//     setSuccess,
//     submitLead,
//     setDialCode,
//     setIsoCode,
//     setNumberWithoutCountryCode
//   } = useLeadForm();

//   const [consentChecked, setConsentChecked] = useState(true);
//   const [phoneError, setPhoneError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ Phone Validation
//     if (!phone || phone.replace(/\D/g, "").length < 10) {
//       setPhoneError("Please enter a valid 10-digit phone number");
//       return;
//     }
//     setPhoneError("");

//     if (!consentChecked) return;
//     const formData = { name: e.target.name.value };
//     const result = await submitLead(formData, e.target);
//     if (result) {
//       e.target.reset();
//       setConsentChecked(false);
//       onClose();
//       navigate("/thankyou.html");
//     }
//   };

//   return (
//     <>
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
//         <div className="bg-[#ffffff] text-[#003153] p-8 rounded-xl w-full max-w-md relative shadow-xl">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-3 right-3 text-[#003153] hover:text-[#003153]/80"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           <h2 className="text-xl font-semibold mb-6 tracking-wide text-[#003153]">
//             ENQUIRE NOW
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Name Input */}
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               className="w-full px-4 py-3 rounded-md bg-transparent text-[#003153] border border-[#003153] focus:border-[#003153] outline-none"
//               required
//             />

//             {/* Phone Input */}
//             <PhoneInput
//               country={isoCode || "in"}
//               value={phone}
//               onChange={(value, country) => {
//                 setPhone(value);
//                 setDialCode(`${country.dialCode}`);
//                 setIsoCode(country.countryCode);
//                 setNumberWithoutCountryCode(value.replace(country.dialCode, ""));
//               }}
//               inputProps={{ name: "phone", required: true, id: "phone" }}
//               containerClass="w-full"
//               inputClass="!w-full !bg-transparent !text-[#003153] !py-3 !pl-12 !pr-3 !rounded-md !border !border-[#003153] focus:!border-[#003153] !outline-none"
//               buttonClass="!bg-gray-800 !border-none !rounded-l-md"
//               dropdownClass="!bg-black !text-white"
//               searchClass="!bg-black !text-white"
//               enableSearch={true}
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="w-full px-4 py-3 rounded-md bg-transparent text-[#003153] border border-[#003153] focus:border-[#003153] outline-none"
//             // required
//             />

//             {/* Consent Text */}
//             <div className="flex items-start space-x-2">
//               <input
//                 type="checkbox"
//                 id="consent"
//                 checked={consentChecked}
//                 onChange={(e) => setConsentChecked(e.target.checked)}
//                 className="mt-1 w-4 h-4 accent-[#003153] cursor-pointer"
//                 required
//               />
//               <label
//                 htmlFor="consent"
//                 className="text-xs text-[#003153] leading-relaxed cursor-pointer"
//               >
//                 I consent to the processing of provided data according to the{" "}
//                 <Link
//                   to="/privacy-policy"
//                   onClick={onClose}
//                   className="underline hover:text-[#003153]/80"
//                 >
//                   Privacy Policy | Terms & Conditions
//                 </Link>{" "}
//                 . I authorize Nova Capital Real Estate and its representatives
//                 to call, SMS, email, or WhatsApp me about its products and
//                 offers. This consent overrides any registration for DNC / DNCR.
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-[#003153] hover:bg-[#004d66] text-white text-md font-semibold py-3 rounded-md transition"
//               disabled={loading}
//             >
//               {loading ? "Submitting..." : "SUBMIT"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };
// export default EnquiryModal;
import { useState, useContext, createContext } from "react";
import { X } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../components/Style/EnquiryModal.css";
import { useLeadForm } from "../hooks/useLeadForm";
import { Link, useNavigate } from "react-router-dom";

const EnquiryModalContext = createContext();
export const useEnquiryModal = () => useContext(EnquiryModalContext);

export const EnquiryModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <EnquiryModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && <EnquiryModal onClose={closeModal} />}
    </EnquiryModalContext.Provider>
  );
};

const EnquiryModal = ({ onClose }) => {
  const navigate = useNavigate();
  const {
    phone,
    setPhone,
    dialCode,
    isoCode,
    loading,
    submitLead,
    setDialCode,
    setIsoCode,
    setNumberWithoutCountryCode,
  } = useLeadForm();

  const [consentChecked, setConsentChecked] = useState(true);
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      onClose();
      navigate("/thankyou.html");
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
        <div className="bg-white rounded-2xl w-full max-w-4xl mx-4 flex flex-col md:flex-row relative shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-700 hover:text-black z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Form */}
          <div className="w-full md:w-1/2 p-8 text-[#003153]">
            <h2 className="text-2xl font-semibold mb-6">
              Contact us to find your perfect property
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 text-black">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-md border border-[#003153] focus:ring-1 focus:ring-[#003153] outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md border border-[#003153] focus:ring-1 focus:ring-[#003153] outline-none"
                required
              />

              <PhoneInput
                country={isoCode || "in"}
                value={phone}
                onChange={(value, country) => {
                  setPhone(value);
                  setDialCode(`${country.dialCode}`);
                  setIsoCode(country.countryCode);
                  setNumberWithoutCountryCode(
                    value.replace(country.dialCode, "")
                  );
                }}
                inputProps={{ name: "phone", required: true, id: "phone" }}
                containerClass="w-full"
                inputClass="!w-full !py-3 !pl-12 !pr-3 !rounded-md !border !border-[#003153] focus:!border-[#003153] !outline-none"
                buttonClass="!bg-gray-200 !border-none !rounded-l-md"
                dropdownClass="!bg-black !text-white"
                enableSearch
              />

              {phoneError && (
                <p className="text-sm text-red-600 -mt-3">{phoneError}</p>
              )}

              {/* Checkboxes */}
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
                    className="underline hover:text-[#004d66]"
                  >
                    Privacy Policy | Terms & Conditions
                  </Link>{" "}
                  . I authorize Nova Capital Real Estate and its representatives
                  to call, SMS, email, or WhatsApp me about its products and
                  offers. This consent overrides any registration for DNC / DNCR.
                </label>
              </div>

              {/* <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="offers"
                  className="mt-1 w-4 h-4 accent-[#003153] cursor-pointer"
                />
                <label
                  htmlFor="offers"
                  className="text-xs text-[#003153] leading-relaxed cursor-pointer"
                >
                  I agree to receive information about offers, deals, and
                  services from this website (optional).
                </label>
              </div> */}

              <button
                type="submit"
                className="w-full bg-[#003153] hover:bg-[#004d66] text-white font-semibold py-3 rounded-md transition"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Enquire now"}
              </button>
            </form>
          </div>

          {/* Right: Image (hidden on mobile) */}
          <div className="hidden md:flex w-1/2 bg-[#f8fbff] border justify-center items-center">
            <img
              src="../Assets/enquiry-agent.jpg"
              alt="Agent"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryModal;
