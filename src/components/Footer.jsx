export function Footer({ setPage }) {
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