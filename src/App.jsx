import { useState } from "react";

const NAV_LINKS = ["Home", "Privacy Policy", "Terms & Services", "Refund Policy", "Contact"];

const CONTACT_EMAIL = "matchmelosupport@gmail.com";

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
      <p style={{ marginBottom: "1.5rem", fontStyle: "italic" }}>
        <strong>Effective Date: June 14, 2026</strong><br />
        Welcome to MatchMelo. We are committed to protecting your privacy and ensuring you have a secure experience on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the MatchMelo app, website, and associated services.
      </p>

      <Section heading="1. Information We Collect">
        We collect information you provide directly, information derived from your use of the Platform, and information from third parties.<br /><br />
        <strong>Account Information:</strong> When you register as a Client or Freelancer, we collect your name, email address, password, profile picture, and contact details.<br /><br />
        <strong>Professional Information (Freelancers):</strong> To facilitate AI matchmaking and Proof of Work (PoW) scoring, we collect your portfolio data, education history, work samples, and skills.<br /><br />
        <strong>Financial Information:</strong> To facilitate Trade Credit purchases, we collect payment details. Sensitive payment data is processed directly by third-party providers (e.g., Razorpay, Stripe) and is not stored on our servers.<br /><br />
        <strong>Communication Data:</strong> We collect information from your interactions on our Collaboration Hub, including chat messages, media attachments, and responses.<br /><br />
        <strong>Usage Data:</strong> We automatically collect data about your interactions with the Platform, including IP address, device type, operating system, and browsing behavior.
      </Section>

      <Section heading="2. How We Use Your Information">
        <strong>Providing and Improving Services:</strong> To operate the platform, facilitate freelancer-client matchmaking, and manage the Collaboration Hub.<br /><br />
        <strong>AI and Scoring:</strong> To analyze freelancer Proof of Work submissions using our AI scoring algorithms to generate visibility metrics.<br /><br />
        <strong>Trade Credits and Billing:</strong> To process payments for Trade Credits and maintain your account balance.<br /><br />
        <strong>Communication:</strong> To send you updates, security alerts, support messages, and promotional content (which you can opt out of).<br /><br />
        <strong>Trust and Safety:</strong> To prevent fraud, enforce our Terms of Service, and resolve disputes between users.
      </Section>

      <Section heading="3. How We Share Your Information">
        We do not sell your personal data. We may share your information in the following circumstances:<br /><br />
        <strong>Between Users:</strong> Client profiles are visible to Freelancers they interact with, and Freelancer profiles (including AI scores and portfolios) are visible to prospective Clients.<br /><br />
        <strong>Service Providers:</strong> With third-party vendors who assist us in operating the Platform, such as payment processors (Razorpay/Stripe), cloud hosting, and analytics providers.<br /><br />
        <strong>Legal Requirements:</strong> If required by law, subpoena, or other legal processes, or to protect the rights, property, and safety of MatchMelo, our users, or others.
      </Section>

      <Section heading="4. Data Security">
        We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
      </Section>

      <Section heading="5. Your Rights">
        Depending on your jurisdiction, you may have the right to access, correct, update, or delete your personal information. You can manage your account settings directly within the MatchMelo app or contact us for assistance.
      </Section>

      <Section heading="6. Changes to This Privacy Policy">
        We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on the Platform and updating the Effective Date.
      </Section>

      <Section heading="7. Contact Us">
        If you have any questions about this Privacy Policy, please contact us at:{" "}
        <a href="mailto:matchmelosupport@gmail.com" style={{ color: "#3ab528", fontWeight: 700 }}>
          matchmelosupport@gmail.com
        </a>
      </Section>
    </PolicyPage>
  );
}

function TermsAndServices() {
  return (
    <PolicyPage title="Terms of Service">
      <p style={{ marginBottom: "1.5rem", fontStyle: "italic" }}>
        <strong>Effective Date: June 14, 2026</strong><br />
        Welcome to MatchMelo. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully.
      </p>

      <Section heading="1. Acceptance of Terms">
        By creating an account and using the MatchMelo platform, you agree to these Terms. If you do not agree, you may not use our services.
      </Section>

      <Section heading="2. Description of Service">
        MatchMelo is a platform that connects clients with independent professionals (Freelancers) for project collaboration. We provide tools including AI matchmaking, a Collaboration Hub, and Proof of Work (PoW) scoring. MatchMelo operates on a "Trade Credits" system to facilitate platform interactions. MatchMelo is not a party to the independent contracts formed directly between Clients and Freelancers.
      </Section>

      <Section heading="3. User Accounts">
        <strong>Eligibility:</strong> You must be at least 18 years old to use the Platform.<br /><br />
        <strong>Account Types:</strong> You may register as a Client, a Freelancer, or both. You are responsible for maintaining the confidentiality of your account credentials.<br /><br />
        <strong>Accuracy of Information:</strong> You agree to provide accurate and up-to-date information, including for your profile and portfolio.
      </Section>

      <Section heading="4. Platform Rules and Conduct">
        When using MatchMelo, you agree NOT to:<br /><br />
        • Submit false, misleading, or plagiarized Proof of Work (PoW) samples to inflate your AI score.<br />
        • Engage in harassment, abusive language, or unprofessional conduct within the Collaboration Hub.<br />
        • Use the Platform for any illegal activities or to distribute malicious content.
      </Section>

      <Section heading="5. Trade Credits and Payments">
        <strong>Trade Credits:</strong> To utilize certain premium features or connect with users, you may be required to use MatchMelo Trade Credits.<br /><br />
        <strong>Purchasing Credits:</strong> Trade Credits can be purchased via our integrated payment gateways (e.g., Razorpay, Stripe).<br /><br />
        <strong>Nature of Credits:</strong> Trade Credits are digital utility tokens intended solely for use within the MatchMelo platform. They have no real-world cash value, do not accrue interest, and cannot be withdrawn, redeemed, or exchanged for fiat currency.<br /><br />
        <strong>Project Payments:</strong> Any monetary compensation for freelance work is arranged independently between the Client and the Freelancer. MatchMelo does not hold escrow for project deliverables.
      </Section>

      <Section heading="6. Intellectual Property">
        You retain ownership of the content you upload to your profile, including PoW samples. By uploading, you grant MatchMelo a license to display this content and use it for AI scoring and matchmaking purposes.
      </Section>

      <Section heading="7. Limitation of Liability">
        MatchMelo provides the Platform "as is." We are not responsible for the quality, safety, or legality of services provided by Freelancers, nor the ability of Clients to fulfill independent payment agreements. To the maximum extent permitted by law, MatchMelo shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Platform or the Trade Credits system.
      </Section>

      <Section heading="8. Termination">
        MatchMelo reserves the right to suspend or terminate your account, and forfeit any remaining Trade Credits, at any time for violations of these Terms or for any other reason deemed necessary to protect the integrity of the Platform.
      </Section>

      <Section heading="9. Contact Information">
        For questions regarding these Terms, please contact us at:{" "}
        <a href="mailto:matchmelosupport@gmail.com" style={{ color: "#3ab528", fontWeight: 700 }}>
          matchmelosupport@gmail.com
        </a>
      </Section>
    </PolicyPage>
  );
}

function RefundPolicy() {
  return (
    <PolicyPage title="Refund Policy">
      <p style={{ marginBottom: "1.5rem", fontStyle: "italic" }}>
        <strong>Effective Date: June 14, 2026</strong><br />
        MatchMelo operates on a "Trade Credits" system to facilitate interactions, feature access, and collaborations between Clients and Freelancers. This Refund Policy outlines the conditions regarding the purchase and use of Trade Credits.
      </p>

      <Section heading="1. Trade Credit Purchases are Final">
        All purchases of MatchMelo Trade Credits are considered final and non-refundable once the credits have been successfully credited to your account. Because Trade Credits are digital utility tokens granting immediate access to platform features, we cannot offer refunds for buyer's remorse or if you decide not to use the platform after purchasing them.
      </Section>

      <Section heading="2. Exceptions and Eligibility for Refunds">
        We may, at our sole discretion, issue a refund for Trade Credit purchases under the following exceptional circumstances:<br /><br />
        <strong>Billing Errors & Duplicate Charges:</strong> If you are accidentally charged multiple times for a single Trade Credit package due to a technical error.<br /><br />
        <strong>System Failure:</strong> If a verifiable technical issue on the MatchMelo platform prevents the Trade Credits from being delivered to your account after a successful payment.<br /><br />
        <strong>Unauthorized Transactions:</strong> If a purchase was made fraudulently using your payment information (subject to verification by our payment providers and your bank).
      </Section>

      <Section heading="3. How to Request a Refund">
        If you believe you meet the criteria in Section 2, you must submit a refund request within <strong>7 days</strong> of the transaction.<br /><br />
        • Contact our support team at{" "}
        <a href="mailto:matchmelosupport@gmail.com" style={{ color: "#3ab528", fontWeight: 700 }}>matchmelosupport@gmail.com</a><br />
        • Include your MatchMelo account email, the transaction date, and the receipt/transaction ID.<br />
        • Provide a brief explanation of the issue (e.g., "I was double-charged for the 100 Credit pack").<br /><br />
        Our team will review your request and respond within <strong>3–5 business days</strong>.
      </Section>

      <Section heading="4. Unused Credits">
        Trade Credits do not expire as long as your account remains active. However, if you choose to close your MatchMelo account, or if your account is terminated due to a violation of our Terms of Service, any remaining unused Trade Credits will be forfeited and are not eligible for a refund or cash payout.
      </Section>

      <Section heading="5. Independent Project Payments">
        MatchMelo does not hold escrow for independent project deliverables. Any monetary transactions made directly between a Client and a Freelancer outside of the Trade Credits system are strictly between those two parties. MatchMelo cannot mediate, refund, or reverse payments made independently for freelance services.
      </Section>

      <Section heading="6. Contact Us">
        If you have questions regarding this policy or your Trade Credits balance, please contact us at:{" "}
        <a href="mailto:matchmelosupport@gmail.com" style={{ color: "#3ab528", fontWeight: 700 }}>
          matchmelosupport@gmail.com
        </a>
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
        <a href="mailto:matchmelosupport@gmail.com" style={{
          display: "block", background: "linear-gradient(135deg, #7ed321, #3ab528)",
          color: "#fff", fontFamily: "Nunito, sans-serif", fontWeight: 800,
          fontSize: "1.1rem", padding: "16px", borderRadius: 50,
          textDecoration: "none", marginBottom: "1rem",
          boxShadow: "0 4px 30px #7ed32140"
        }}>
          ✉️ matchmelosupport@gmail.com
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