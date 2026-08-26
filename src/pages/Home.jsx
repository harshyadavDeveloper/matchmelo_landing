import { useState } from "react";
import { sendBetaUpdatesEmail, incrementWaitlistCount } from "../services/waitlistService";

export function Home({ onJoinWaitlist }) {
    const [betaEmail, setBetaEmail] = useState("");
    const [betaStatus, setBetaStatus] = useState("idle"); // idle | submitting | success | error
    const [betaError, setBetaError] = useState("");

    async function handleBetaSubmit(e) {
        e.preventDefault();
        if (!betaEmail.trim()) return;

        setBetaStatus("submitting");
        setBetaError("");
        try {
            await sendBetaUpdatesEmail({ email: betaEmail.trim() });
            await incrementWaitlistCount().catch(() => { }); // don't fail the signup over counter issues
            setBetaStatus("success");
            setBetaEmail("");
        } catch (err) {
            setBetaStatus("error");
            setBetaError(err.message || "Something went wrong. Try again?");
        }
    }

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="relative px-margin-mobile md:px-margin-desktop py-xl min-h-[80vh] flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-fixed rounded-full mix-blend-multiply opacity-50 blur-3xl -z-10" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-container rounded-full mix-blend-multiply opacity-50 blur-2xl -z-10" />

                <div className="text-center max-w-4xl mx-auto z-10 flex flex-col items-center">
                    <h1 className="font-display-lg text-display-lg text-on-background uppercase mb-sm relative inline-block">
                        <span className="relative z-10">LOOKING FOR A GIG?</span>
                        <span className="absolute -bottom-2 left-0 w-full h-1/3 bg-primary-container -z-10 rotate-1" />
                    </h1>
                    <h2 className="font-headline-md text-headline-md text-on-surface-variant mb-lg rotate-neg-2 bg-surface p-sm border-2 border-on-background shadow-hard inline-block">
                        TIRED OF SPENDING HOURS SEARCHING?
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-background max-w-2xl mx-auto mb-xl bg-surface-container-lowest p-md border-2 border-outline-variant shadow-hard rotate-1">
                        Existing talent marketplaces are slow, manual, lack security and heavily favour clients, exposing freelancers to mid-project ghosting, unpaid deliverables, and asset theft all while these platforms extract predatory 20% commission fees.
                    </p>
                    <div className="flex flex-col md:flex-row gap-md">
                        <button
                            type="button"
                            onClick={onJoinWaitlist}
                            className="bg-primary-container text-on-primary-container font-headline-md text-headline-md px-xl py-md border-2 border-on-background shadow-hard btn-press transition-all rounded flex items-center justify-center gap-sm"
                        >
                            <span
                                className="material-symbols-outlined"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                rocket_launch
                            </span>
                            JOIN NOW
                        </button>
                    </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-20 right-10 md:right-32 rotate-12 opacity-80 z-0">
                    <img
                        alt="MatchMelo Promotional Image 1"
                        className="w-48 h-auto border-4 border-white shadow-hard-primary grayscale hover:grayscale-0 transition-all duration-300"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkSJm3RnorlZotMm7wZjkbwT1hs3sTP4h0s_wYmm7aSH0pUYzLhGUXpI-hl6yLPW5msc4U63rgopRvwfueLVitpVioWCPdaF113gmjl4npOEkHuFaGzdxhqJYT5ivr3KsfYMNNHnHwzy8hdhw3NVK-2Onzu8497eo_THaNFB8VKcc1xr2Fp1HxtdHYTN3S8EIrGSUao7B2yEeNiBMeV8j2VwfhMja9vxEd_Bd-D6LF4z3rPYEkQ8idmKqbx0HWVr4lvw"
                    />
                    <svg className="absolute -top-4 -left-4 w-12 h-12 text-error rotate-45" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full px-margin-desktop py-lg">
                <div className="divider-stitched w-full" />
            </div>

            {/* Value Prop 1: AI Matchmaking */}
            <section id="problem-solution" className="px-margin-mobile md:px-margin-desktop py-xl relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
                    <div className="md:col-span-5 order-2 md:order-1 relative">
                        <div className="bg-halftone absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-xl" />
                        <img
                            alt="MatchMelo Review System"
                            className="w-full h-auto border-2 border-on-background shadow-hard rounded-xl rotate-neg-2"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY8ObAenNeQyOuwzwupg6zKeeO13zb1XNyw2AO_5bAOFwW03SdpRF7MGoSccbYLSxQUN43E1gxBl75Oaka-wkI3GM-6fbLg069Rk9ycdqlwJ4n7oX8toaOIvbpITYJmnXkO91uFCKit_rG1HFtZgdJNQ_Pwm30HUWQ8PRjShlAAmVwdOmPSHX0a4IL9tiOQc6hZEGbJUWyZRC-HzVigKXIxWqKJQDNXiBwy0hevMt7Gi_6I8ZFdNfyAH3sjbBaViaX2g"
                        />
                    </div>
                    <div className="md:col-span-7 order-1 md:order-2">
                        <div className="inline-block bg-inverse-surface text-surface-container-lowest font-label-mono text-label-mono px-sm py-xs mb-sm uppercase tracking-widest shadow-hard-primary rotate-1">
                            Flawed 5-Star Reviews? Cancelled.
                        </div>
                        <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-md">
                            Confident in your skills and tired of broken reviews?
                        </h3>
                        <div className="bg-surface-container p-md border-l-4 border-primary">
                            <p className="font-body-lg text-body-lg text-on-surface-variant mb-sm">
                                Let your work speak for itself. MatchMelo's AI analyzes your actual portfolio, code, and designs to give you an objective score out of 10 that top clients trust.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Prop 2: Trade System */}
            <section id="theft-proof" className="px-margin-mobile md:px-margin-desktop py-xl bg-tertiary-fixed-dim relative overflow-hidden mt-xl">
                <div className="absolute inset-0 bg-grain opacity-50 mix-blend-overlay" />
                <div className="max-w-5xl mx-auto relative z-10 text-center mb-lg">
                    <h3 className="font-display-lg text-display-lg text-on-tertiary-fixed uppercase">THEFT-PROOF TRADE SYSTEM</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-md max-w-6xl mx-auto relative z-10">
                    <div className="bg-surface p-lg border-2 border-on-background shadow-hard rotate-1 flex flex-col h-full hover:rotate-0 transition-transform duration-300">
                        <div className="bg-primary-container w-16 h-16 rounded-full flex items-center justify-center mb-md border-2 border-on-background shadow-[2px_2px_0px_0px_#1c1b1b]">
                            <span className="material-symbols-outlined text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                        </div>
                        <h4 className="font-headline-md text-headline-md text-on-surface mb-sm uppercase">Escrow Lock</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">Our secure trade system locks client funds in escrow upfront, so you know the money is there before you start.</p>
                    </div>
                    <div className="bg-surface p-lg border-2 border-on-background shadow-hard rotate-neg-2 flex flex-col h-full hover:rotate-0 transition-transform duration-300 mt-md md:mt-0">
                        <div className="bg-secondary-container w-16 h-16 rounded-full flex items-center justify-center mb-md border-2 border-on-background shadow-[2px_2px_0px_0px_#1c1b1b]">
                            <span className="material-symbols-outlined text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                        </div>
                        <h4 className="font-headline-md text-headline-md text-on-surface mb-sm uppercase">Auto-Contracts</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">Auto-generates a legally binding contract instantly, protecting both parties without the legal fees.</p>
                    </div>
                    <div className="bg-surface p-lg border-2 border-on-background shadow-hard rotate-3 flex flex-col h-full hover:rotate-0 transition-transform duration-300 mt-md md:mt-0">
                        <div className="bg-tertiary-container w-16 h-16 rounded-full flex items-center justify-center mb-md border-2 border-on-background shadow-[2px_2px_0px_0px_#1c1b1b]">
                            <span className="material-symbols-outlined text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                        </div>
                        <h4 className="font-headline-md text-headline-md text-on-surface mb-sm uppercase">Watermarked Previews</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">Automatically creates watermarked previews of finished deliverables so freelancers never risk unpaid work or ghosting.</p>
                    </div>
                </div>
                <div className="text-center mt-lg relative z-10">
                    <span className="inline-block bg-inverse-surface text-surface-container-lowest font-label-bold text-label-bold px-md py-sm uppercase tracking-widest shadow-hard-primary rotate-neg-2">
                        All backed by a fair 5% platform fee.
                    </span>
                </div>
            </section>

            {/* Final CTA: Beta updates opt-in */}
            <section id="get-started" className="px-margin-mobile md:px-margin-desktop py-xl min-h-[60vh] flex flex-col items-center justify-center relative mt-xl">
                <div className="absolute inset-0 bg-halftone opacity-10" />
                <div className="bg-surface-container-lowest p-xl border-4 border-on-background shadow-[12px_12px_0px_0px_#446900] rotate-1 max-w-4xl w-full text-center relative z-10">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-outline-variant opacity-80 rotate-neg-2" />
                    <h2 className="font-display-lg text-display-lg text-on-background uppercase mb-md">
                        Get In Before<br />Everyone Else.
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-xl mx-auto">
                        Drop your email and we'll ping you the second the beta goes live — with first dibs on founding-member perks before anyone else gets in.
                    </p>

                    {betaStatus === "success" ? (
                        <p className="font-headline-md text-headline-md text-primary max-w-lg mx-auto">
                            You're on the list. Watch your inbox. 🤘
                        </p>
                    ) : (
                        <form className="flex flex-col md:flex-row gap-sm justify-center max-w-lg mx-auto" onSubmit={handleBetaSubmit}>
                            <input
                                className="flex-grow bg-surface border-2 border-on-background px-md py-sm font-body-md text-body-md focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container transition-colors shadow-inner"
                                placeholder="Enter your email"
                                type="email"
                                value={betaEmail}
                                onChange={(e) => setBetaEmail(e.target.value)}
                                required
                                disabled={betaStatus === "submitting"}
                            />
                            <button
                                className="bg-primary text-on-primary font-label-bold text-label-bold px-lg py-sm border-2 border-on-background shadow-hard btn-press transition-all uppercase tracking-wider disabled:opacity-60"
                                type="submit"
                                disabled={betaStatus === "submitting"}
                            >
                                {betaStatus === "submitting" ? "Sending..." : "Notify Me"}
                            </button>
                        </form>
                    )}

                    {betaStatus === "error" && (
                        <p className="font-body-md text-body-md text-error mt-sm">{betaError}</p>
                    )}
                </div>
                <div className="absolute bottom-10 left-10 md:left-32 rotate-neg-2 opacity-90 z-20">
                    <img
                        alt="MatchMelo Promotional Image 2"
                        className="w-64 h-auto border-4 border-white shadow-hard-primary"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOo3NxoGMHMrfSYgUX4cTA4k9zG8eu8_upde0j_DhXqUQ03MwYoaaQxPgLapY1kUz-3S73xNH2Ze7Oj55pBgrwoWLLP0_ujJ9-2xP3Ze_L19kFkIc5I-3Jwp8a_nwaQoq6RPCSP_IBpMTQz9LNRePbj3yNoa648l-UY-vJWJHpbIzLHZ-tiZFSj0X9Bkr-i132WO7hgmH44_qPckf00Mpc11esvfVA_GUtURaRJo_mnDdA1s7F4FTGk-VzO1lPM59YtA"
                    />
                    <svg className="absolute -top-6 -right-6 w-16 h-16 text-primary rotate-12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                </div>
            </section>
        </>
    );
}