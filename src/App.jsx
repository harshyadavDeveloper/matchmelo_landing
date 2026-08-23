import { useState } from "react";

import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsAndServices } from "./pages/TermsAndServices";
import { RefundPolicy } from "./pages/RefundPolicy";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("Home");

  const renderPage = () => {
    switch (page) {
      case "Privacy Policy":
        return <PrivacyPolicy />;

      case "Terms & Services":
        return <TermsAndServices />;

      case "Refund Policy":
        return <RefundPolicy />;

      case "Contact":
        return <Contact />;

      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar page={page} setPage={setPage} />

      <main>
        {renderPage()}
      </main>

      <Footer setPage={setPage} />
    </>
  );
}