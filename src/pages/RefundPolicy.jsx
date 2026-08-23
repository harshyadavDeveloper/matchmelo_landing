import { PolicyPage } from "../components/PolicyPage";
import { Section } from "../components/Section";

export function RefundPolicy({ onNavigate }) {
    return (
        <PolicyPage title="Refund Policy" onNavigate={onNavigate}>
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