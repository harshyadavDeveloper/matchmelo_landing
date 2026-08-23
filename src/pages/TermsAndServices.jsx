import { PolicyPage } from "../components/PolicyPage";
import { Section } from "../components/Section";

export function TermsAndServices({ onNavigate }) {
    return (
        <PolicyPage title="Terms of Service" onNavigate={onNavigate}>
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