
export function Section({ heading, children }) {
    return (
        <div style={{ marginBottom: "1.8rem" }}>
            <h2 style={{ color: "#7ed321", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{heading}</h2>
            <p>{children}</p>
        </div>
    );
}