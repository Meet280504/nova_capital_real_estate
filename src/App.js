import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { EnquiryModalProvider } from "./components/EnquiryModal";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ThankYouPage from "./components/ThankyouPage";
import PriceSection from "./components/Pricing";
import Areas from "./components/Areas";
import OffPlanProjects from "./components/OffPlanProjects";
import FirstTimeBuyer from "./components/Homebuyer";
import Developer from "./components/Developer";
import Contact from "./components/Contact";
import CardPage from "./components/PricingCardPage";
import OffPlanCardPage from "./components/OffPlanCardPage";
import "./App.css";
import About from "./components/About";

// DemoButton to test modal anywhere
// function DemoButton() {
//   const { openModal } = useEnquiryModal();
//   return (
//     <button
//       onClick={openModal}
//       className="px-4 py-2 bg-yellow-600 text-black rounded-md hover:bg-yellow-500 transition"
//     >
//       Open Enquiry Modal
//     </button>
//   );
// }

function AppContent() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <PriceSection />                   
      <OffPlanProjects />
      <Areas />
      <FirstTimeBuyer />
      <Footer />
      {/* Example Demo Button for testing modal anywhere */}
      {/* <div className="fixed bottom-4 right-4 z-50">
        <DemoButton />
      </div> */}
    </div>
  );
}

function App() {
  return (
    <EnquiryModalProvider>
      {/* <AppContent /> */}
      {/* <Router> */}
        <Routes>
          {/* <Route path="/" element={<AppContent />} /> */}
          <Route path="/" element={<Banner />} />
          <Route path="/pricing" element={<PriceSection />} />
          <Route path="/property/:id" element={<CardPage />} />
          <Route path="/new-projects/:id" element={<OffPlanCardPage />} />
          <Route path="/new-projects" element={<OffPlanProjects />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/thankyou.html" element={<ThankYouPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      {/* </Router>/ */}
    </EnquiryModalProvider>
  );
}

export default App;
