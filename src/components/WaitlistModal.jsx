import { useState } from "react";
import {
    sendWaitlistEmail,
    incrementWaitlistCount,
} from "../services/waitlistService";

export function WaitlistModal({ isOpen, onClose, onJoined }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState("");

    if (!isOpen) return null;

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const canSubmit = firstName.trim() && lastName.trim() && isValidEmail && status !== "loading";

    const handleClose = () => {
        setFirstName(""); setLastName(""); setEmail("");
        setStatus("idle"); setErrorMsg("");
        onClose();
    };

    const handleSubmit = async () => {
        if (!canSubmit) return;
        setStatus("loading");
        setErrorMsg("");
        try {
            await sendWaitlistEmail({ firstName: firstName.trim(), lastName: lastName.trim(), email: email.trim() });
            setStatus("success");
            // Counter bump shouldn't block the success UI if it's slow/down.
            incrementWaitlistCount().then(onJoined).catch(() => { });
        } catch (err) {
            setStatus("error");
            setErrorMsg("Something went wrong. Please try again in a moment.", err);
        }
    };

    const inputStyle = {
        width: "100%", background: "#00220c", border: "1px solid #3ab52850",
        borderRadius: 12, padding: "12px 14px", color: "#e8f7dd",
        fontFamily: "Nunito, sans-serif", fontSize: "0.95rem", outline: "none",
        marginBottom: "1rem", boxSizing: "border-box"
    };

    return (
        <div
            onClick={handleClose}
            style={{
                position: "fixed", inset: 0, background: "rgba(0,10,4,0.75)",
                backdropFilter: "blur(4px)", zIndex: 200,
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "1.5rem"
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: "#03230f", border: "1px solid #3ab52850",
                    borderRadius: 24, padding: "2.25rem", maxWidth: 440, width: "100%",
                    boxShadow: "0 20px 80px rgba(0,0,0,0.5)", position: "relative"
                }}
            >
                <button onClick={handleClose} style={{
                    position: "absolute", top: 16, right: 18, background: "none",
                    border: "none", color: "#8fbb7a", fontSize: "1.3rem", cursor: "pointer"
                }}>✕</button>

                {status === "success" ? (
                    <div style={{ textAlign: "center", padding: "1rem 0" }}>
                        <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🎉</div>
                        <h2 style={{ color: "#a8e63d", fontWeight: 900, fontSize: "1.4rem", marginBottom: "0.6rem" }}>
                            You're on the list!
                        </h2>
                        <p style={{ color: "#c9e6bb", lineHeight: 1.6, fontSize: "0.95rem" }}>
                            Thanks, {firstName}. We'll email you at <strong>{email}</strong> as soon as beta access opens up.
                        </p>
                    </div>
                ) : (
                    <>
                        <h2 style={{ color: "#a8e63d", fontWeight: 900, fontSize: "1.5rem", marginBottom: "0.4rem" }}>
                            Join the Waitlist
                        </h2>
                        <p style={{ color: "#8fbb7a", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.5 }}>
                            Be first in line for beta access. Drop your details below.
                        </p>

                        <input
                            style={inputStyle}
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            style={inputStyle}
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <input
                            style={inputStyle}
                            placeholder="Email address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => { if (e.key === "Enter" && canSubmit) handleSubmit(); }}
                        />

                        {status === "error" && (
                            <p style={{ color: "#ff8a8a", fontSize: "0.85rem", marginBottom: "1rem" }}>{errorMsg}</p>
                        )}

                        <button
                            onClick={handleSubmit}
                            disabled={!canSubmit}
                            style={{
                                width: "100%", background: canSubmit
                                    ? "linear-gradient(135deg, #7ed321, #3ab528)"
                                    : "#2a4a1f",
                                color: "#fff", fontFamily: "Nunito, sans-serif", fontWeight: 800,
                                fontSize: "1rem", padding: "14px", borderRadius: 50, border: "none",
                                cursor: canSubmit ? "pointer" : "not-allowed",
                                opacity: status === "loading" ? 0.7 : 1,
                                transition: "all 0.2s"
                            }}
                        >
                            {status === "loading" ? "Submitting..." : "Join Waitlist"}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}