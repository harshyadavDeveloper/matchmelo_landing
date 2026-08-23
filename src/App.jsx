import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WaitlistModal } from "./components/WaitlistModal";

import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsAndServices } from "./pages/TermsAndServices";
import { RefundPolicy } from "./pages/RefundPolicy";

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const openWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const closeWaitlist = () => {
    setIsWaitlistOpen(false);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);

    // Scroll to top when opening a policy page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "privacy":
        return <PrivacyPolicy />;

      case "terms":
        return <TermsAndServices />;

      case "refund":
        return <RefundPolicy />;

      default:
        return <Home onJoinWaitlist={openWaitlist} />;
    }
  };

  return (
    <>
      {currentPage === "home" && (
        <Navbar onJoinWaitlist={openWaitlist} />
      )}

      <main className="flex-grow z-10 relative">
        {renderPage()}
      </main>

      <Footer onNavigate={navigateTo} />

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={closeWaitlist}
        onJoined={() => { }}
      />
    </>
  );
}