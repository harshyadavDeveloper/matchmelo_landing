export function PolicyPage({ title, children }) {
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