import { PolicyPage } from "../components/PolicyPage";
import { Section } from "../components/Section";

export function PrivacyPolicy({ onNavigate }) {
    return (
        <PolicyPage title="Privacy Policy" onNavigate={onNavigate}>
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
