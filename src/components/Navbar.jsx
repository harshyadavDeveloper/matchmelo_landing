import { useState } from "react";

const NAV_LINKS = ["Home", "Privacy Policy", "Terms & Services", "Refund Policy", "Contact"];

export function Navbar({ page, setPage }) {
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