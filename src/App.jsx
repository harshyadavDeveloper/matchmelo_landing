import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WaitlistModal } from "./components/WaitlistModal";
import { Home } from "./pages/Home";

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const closeWaitlist = () => {
    setIsWaitlistOpen(false);
  };

  return (
    <>
      <Navbar onJoinWaitlist={openWaitlist} />

      <main className="flex-grow z-10 relative">
        <Home onJoinWaitlist={openWaitlist} />
      </main>

      <Footer />

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={closeWaitlist}
        onJoined={() => { }}
      />
    </>
  );
}