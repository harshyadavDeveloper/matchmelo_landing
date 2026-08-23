import { useEffect, useState } from "react";
import { WaitlistModal } from "../components/WaitlistModal";

async function getWaitlistCount() {
    const res = await fetch(`${COUNTAPI_BASE}/get/${COUNTAPI_KEY}`);
    if (res.status === 404) return 0; // key doesn't exist yet — nobody's joined
    if (!res.ok) throw new Error("Failed to fetch waitlist count");
    const data = await res.json();
    return Number(data.value) || 0;
}

export function Home() {
    const [waitlistOpen, setWaitlistOpen] = useState(false);
    const [waitlistCount, setWaitlistCount] = useState(null);

    useEffect(() => {
        getWaitlistCount().then(setWaitlistCount).catch(() => { });
    }, []);

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "6rem 1.5rem 3rem", textAlign: "center", position: "relative" }}>
            {/* Glow blob */}
            <div style={{
                position: "absolute", width: 400, height: 400, borderRadius: "50%",
                background: "radial-gradient(circle, #3ab52830 0%, transparent 70%)",
                top: "50%", left: "50%", transform: "translate(-50%,-60%)", pointerEvents: "none"
            }} />

            <img src="/matchmelo.jpeg" alt="MatchMelo Logo" style={{
                width: 140, height: 140,
                borderRadius: 32,
                // boxShadow: "0 0 60px #7ed32150, 0 0 120px #3ab52830",
                marginBottom: "2rem", position: "relative"
            }} />

            {/* <p style={{
        fontSize: "0.85rem", color: "#3ab528", fontWeight: 800,
        letterSpacing: 2, textTransform: "uppercase",
        marginBottom: "0.75rem", position: "relative"
      }}>
        AI Powered Talent Marketplace
      </p> */}

            <h1 style={{
                fontSize: "clamp(2.8rem, 8vw, 5rem)", fontWeight: 900,
                background: "linear-gradient(135deg, #a8e63d 0%, #7ed321 50%, #3ab528 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                lineHeight: 1.1, marginBottom: "1.2rem", position: "relative"
            }}>
                MatchMelo
            </h1>

            <h3 style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "#1a3a0a",
                maxWidth: 560, lineHeight: 1.7, marginBottom: "1rem", position: "relative"
            }}>
                AI Powered Talent Marketplace
            </h3>

            <p style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "#1a3a0a",
                maxWidth: 560, lineHeight: 1.7, marginBottom: "1rem", position: "relative"
            }}>
                AI matchmaking, portfolio scoring, and more.
            </p>

            <p style={{
                fontSize: "0.95rem", color: "#2f5c1f",
                maxWidth: 540, lineHeight: 1.7, marginBottom: "2.5rem", position: "relative"
            }}>
                Be first to experience the future of freelancing. Join the MatchMelo Beta and unlock
                exclusive early access perks before our official launch.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", position: "relative" }}>
                <button onClick={() => setWaitlistOpen(true)} style={{
                    background: "linear-gradient(135deg, #7ed321, #3ab528)",
                    color: "#fff", fontFamily: "Nunito, sans-serif", fontWeight: 800,
                    fontSize: "1rem", padding: "14px 36px", borderRadius: 50,
                    border: "none", boxShadow: "0 4px 30px #7ed32140",
                    transition: "transform 0.2s, box-shadow 0.2s", display: "inline-block",
                    cursor: "pointer"
                }}>
                    🎉 Join the Waitlist
                </button>

                {/* <a href="https://www.linkedin.com/company/matchmelo" target="_blank" rel="noopener noreferrer" style={{
          background: "transparent",
          color: "#a8e63d", fontFamily: "Nunito, sans-serif", fontWeight: 800,
          fontSize: "1rem", padding: "14px 36px", borderRadius: 50,
          textDecoration: "none", border: "2px solid #3ab52860",
          transition: "all 0.2s", display: "inline-block"
        }}>
          Follow on LinkedIn 🔗
        </a> */}
            </div>

            {waitlistCount >= 200 && (
                <p style={{
                    marginTop: "1.25rem", color: "#3ab528", fontSize: "0.85rem",
                    fontWeight: 700, position: "relative"
                }}>
                    🎉 {waitlistCount.toLocaleString()}+ waiting
                </p>
            )}

            <p style={{
                marginTop: "1.5rem", color: "#4a7a34", fontSize: "0.8rem",
                fontStyle: "italic", maxWidth: 480, lineHeight: 1.6, position: "relative"
            }}>
                NOTE: All Beta participants get 3 months of FREE Premium access to every feature
                when MatchMelo officially drops!
            </p>

            <WaitlistModal
                isOpen={waitlistOpen}
                onClose={() => setWaitlistOpen(false)}
                onJoined={(newCount) => setWaitlistCount(newCount)}
            />
        </div>
    );
}