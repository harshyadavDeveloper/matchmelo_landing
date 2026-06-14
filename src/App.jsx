import { useState } from "react";

const NAV_LINKS = ["Home", "Privacy Policy", "Terms & Services", "Refund Policy", "Contact"];

const CONTACT_EMAIL = "contact@matchmelo.com";

function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(0,40,12,0.92)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid #3ab52840",
      padding: "0 2rem", display: "flex", alignItems: "center",
      justifyContent: "space-between", height: "64px"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} onClick={() => setPage("Home")}>
        <img src="/matchmelo.jpeg" alt="MatchMelo" style={{ width: 36, height: 36, borderRadius: 10 }} />
        <span style={{ fontWeight: 900, fontSize: "1.2rem", color: "#a8e63d", letterSpacing: "-0.5px" }}>MatchMelo</span>
      </div>

      {/* Desktop nav */}
      <div style={{ display: "flex", gap: "0.5rem" }} className="desktop-nav">
        {NAV_LINKS.map(link => (
          <button key={link} onClick={() => setPage(link)} style={{
            background: page === link ? "#3ab528" : "transparent",
            border: "none", color: page === link ? "#fff" : "#8fbb7a",
            fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "0.85rem",
            padding: "6px 14px", borderRadius: 20, cursor: "pointer",
            transition: "all 0.2s"
          }}>{link}</button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen(!open)} style={{
        display: "none", background: "none", border: "none",
        color: "#a8e63d", fontSize: "1.5rem", cursor: "pointer"
      }} className="hamburger">☰</button>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0,
          background: "#003d14", borderBottom: "1px solid #3ab52840",
          display: "flex", flexDirection: "column", padding: "1rem"
        }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => { setPage(link); setOpen(false); }} style={{
              background: "none", border: "none", color: "#a8e63d",
              fontFamily: "Nunito, sans-serif", fontWeight: 700,
              fontSize: "1rem", padding: "12px 0", cursor: "pointer",
              textAlign: "left", borderBottom: "1px solid #3ab52820"
            }}>{link}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "6rem 1.5rem 3rem", textAlign: "center" }}>
      {/* Glow blob */}
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, #3ab52830 0%, transparent 70%)",
        top: "50%", left: "50%", transform: "translate(-50%,-60%)", pointerEvents: "none"
      }} />

      <img src="/matchmelo.jpeg" alt="MatchMelo Logo" style={{
        width: 140, height: 140, borderRadius: 32,
        boxShadow: "0 0 60px #7ed32150, 0 0 120px #3ab52830",
        marginBottom: "2rem", position: "relative"
      }} />

      <div style={{
        display: "inline-block", background: "#3ab528", border: "2px solid #7ed321",
        borderRadius: 20, padding: "8px 22px", marginBottom: "1.2rem",
        boxShadow: "0 4px 20px #3ab52850"
      }}>
        <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.85rem", letterSpacing: 3 }}>🚀 COMING SOON</span>
      </div>

      <h1 style={{
        fontSize: "clamp(2.8rem, 8vw, 5rem)", fontWeight: 900,
        background: "linear-gradient(135deg, #a8e63d 0%, #7ed321 50%, #3ab528 100%)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        lineHeight: 1.1, marginBottom: "1.2rem", position: "relative"
      }}>
        MatchMelo
      </h1>

      <p style={{
        fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "#1a3a0a",
        maxWidth: 520, lineHeight: 1.7, marginBottom: "2.5rem", position: "relative"
      }}>
        Something exciting is on its way. MatchMelo is a brand new experience built to connect people in ways that feel natural, fun, and meaningful. Stay tuned — we're almost ready! 🎉
      </p>

      <a href={`mailto:${CONTACT_EMAIL}`} style={{
        background: "linear-gradient(135deg, #7ed321, #3ab528)",
        color: "#fff", fontFamily: "Nunito, sans-serif", fontWeight: 800,
        fontSize: "1rem", padding: "14px 36px", borderRadius: 50,
        textDecoration: "none", boxShadow: "0 4px 30px #7ed32140",
        transition: "transform 0.2s, box-shadow 0.2s", display: "inline-block"
      }}>
        Get in Touch ✉️
      </a>
    </div>
  );
}

function PolicyPage({ title, children }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "8rem 1.5rem 4rem" }}>
      <div style={{
        background: "#3ab52810", border: "1px solid #3ab52830",
        borderRadius: 24, padding: "2.5rem"
      }}>
        <h1 style={{
          fontSize: "2rem", fontWeight: 900, color: "#a8e63d", marginBottom: "0.5rem"
        }}>{title}</h1>
        <p style={{ color: "#3ab528", fontSize: "0.85rem", marginBottom: "2rem", fontWeight: 600 }}>
          Last updated: June 2026
        </p>
        <div style={{ color: "#1a3a0a", lineHeight: 1.85, fontSize: "0.97rem" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function Section({ heading, children }) {
  return (
    <div style={{ marginBottom: "1.8rem" }}>
      <h2 style={{ color: "#7ed321", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{heading}</h2>
      <p>{children}</p>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <PolicyPage title="Privacy Policy">
      <Section heading="1. Information We Collect">
        We may collect personal information such as your name, email address, and usage data when you interact with MatchMelo. This helps us provide a better experience for all our users.
      </Section>
      <Section heading="2. How We Use Your Information">
        Your information is used solely to operate, improve, and personalize the MatchMelo experience. We do not sell your data to third parties under any circumstances.
      </Section>
      <Section heading="3. Data Security">
        We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.
      </Section>
      <Section heading="4. Cookies">
        MatchMelo may use cookies to enhance your experience. You can control cookie settings through your browser at any time.
      </Section>
      <Section heading="5. Contact Us">
        For any privacy-related questions, please reach out to us at <a href="mailto:contact@matchmelo.com" style={{ color: "#a8e63d" }}>contact@matchmelo.com</a>.
      </Section>
    </PolicyPage>
  );
}

function TermsAndServices() {
  return (
    <PolicyPage title="Terms & Services">
      <Section heading="1. Acceptance of Terms">
        By accessing or using MatchMelo, you agree to be bound by these Terms & Services. If you do not agree, please do not use our platform.
      </Section>
      <Section heading="2. Use of the Platform">
        You agree to use MatchMelo only for lawful purposes and in a manner that does not infringe on the rights of others or restrict their use of the platform.
      </Section>
      <Section heading="3. Intellectual Property">
        All content, branding, and features of MatchMelo are the exclusive property of MatchMelo and are protected by applicable intellectual property laws.
      </Section>
      <Section heading="4. Account Responsibility">
        You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.
      </Section>
      <Section heading="5. Termination">
        We reserve the right to suspend or terminate access to MatchMelo for any user who violates these terms, without prior notice.
      </Section>
      <Section heading="6. Changes to Terms">
        MatchMelo reserves the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms.
      </Section>
    </PolicyPage>
  );
}

function RefundPolicy() {
  return (
    <PolicyPage title="Refund Policy">
      <Section heading="1. General Policy">
        At MatchMelo, we strive to ensure complete satisfaction. If you are not satisfied with a purchase, you may be eligible for a refund under the conditions outlined below.
      </Section>
      <Section heading="2. Eligibility for Refund">
        Refund requests must be made within 7 days of the original purchase date. Requests made after this period will not be eligible for a refund.
      </Section>
      <Section heading="3. Non-Refundable Items">
        Certain digital products or services that have been fully consumed or activated may not be eligible for a refund.
      </Section>
      <Section heading="4. How to Request a Refund">
        To request a refund, please contact us at <a href="mailto:contact@matchmelo.com" style={{ color: "#a8e63d" }}>contact@matchmelo.com</a> with your order details. We will process eligible refunds within 5–7 business days.
      </Section>
      <Section heading="5. Processing Time">
        Once a refund is approved, it will be credited back to your original payment method within 5–7 business days, depending on your bank or payment provider.
      </Section>
    </PolicyPage>
  );
}

function Contact() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 1.5rem 3rem" }}>
      <div style={{
        background: "#3ab52810", border: "1px solid #3ab52840",
        borderRadius: 28, padding: "3rem 2.5rem", maxWidth: 520,
        width: "100%", textAlign: "center"
      }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💬</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, color: "#a8e63d", marginBottom: "0.75rem" }}>Contact Us</h1>
        <p style={{ color: "#1a3a0a", lineHeight: 1.7, marginBottom: "2rem" }}>
          Have a question, suggestion, or just want to say hi? We'd love to hear from you. Drop us an email and we'll get back to you as soon as possible.
        </p>
        <a href="mailto:contact@matchmelo.com" style={{
          display: "block", background: "linear-gradient(135deg, #7ed321, #3ab528)",
          color: "#fff", fontFamily: "Nunito, sans-serif", fontWeight: 800,
          fontSize: "1.1rem", padding: "16px", borderRadius: 50,
          textDecoration: "none", marginBottom: "1rem",
          boxShadow: "0 4px 30px #7ed32140"
        }}>
          ✉️ contact@matchmelo.com
        </a>
        <p style={{ color: "#3ab528", fontSize: "0.85rem", fontWeight: 600 }}>
          We typically respond within 24–48 hours.
        </p>
      </div>
    </div>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{
      borderTop: "1px solid #3ab52830", padding: "2rem 1.5rem",
      textAlign: "center", color: "#3ab528"
    }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        {["Privacy Policy", "Terms & Services", "Refund Policy", "Contact"].map(link => (
          <button key={link} onClick={() => setPage(link)} style={{
            background: "none", border: "none", color: "#3ab528",
            fontFamily: "Nunito, sans-serif", fontWeight: 700,
            fontSize: "0.85rem", cursor: "pointer", textDecoration: "underline"
          }}>{link}</button>
        ))}
      </div>
      <p style={{ fontSize: "0.8rem" }}>© 2026 MatchMelo. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");

  const renderPage = () => {
    switch (page) {
      case "Privacy Policy": return <PrivacyPolicy />;
      case "Terms & Services": return <TermsAndServices />;
      case "Refund Policy": return <RefundPolicy />;
      case "Contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
      <Navbar page={page} setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} />
    </>
  );
}