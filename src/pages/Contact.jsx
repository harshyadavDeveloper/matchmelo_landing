export function Contact() {
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
                <a href="https://www.linkedin.com/company/matchmelo" target="_blank" rel="noopener noreferrer" style={{
                    display: "block", background: "transparent",
                    color: "#a8e63d", fontFamily: "Nunito, sans-serif", fontWeight: 800,
                    fontSize: "1rem", padding: "14px", borderRadius: 50,
                    textDecoration: "none", marginBottom: "1rem",
                    border: "2px solid #3ab52860"
                }}>
                    Follow on LinkedIn 🔗
                </a>
                <p style={{ color: "#3ab528", fontSize: "0.85rem", fontWeight: 600 }}>
                    We typically respond within 24–48 hours.
                </p>
            </div>
        </div>
    );
}