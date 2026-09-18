import { useEffect, useState } from "react";

const SECTIONS = [
    { id: "hero", label: "Overview" },
    { id: "problem-solution", label: "The Problem" },
    { id: "theft-proof", label: "Theft-Proof System" },
    { id: "get-started", label: "Get Started" },
];

export function Navbar({ onJoinWaitlist }) {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: "-80px 0px -20% 0px",
                threshold: [0.1, 0.25, 0.5, 0.75],
            }
        );

        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);

            if (el) {
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className="bg-surface border-b-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(58,105,44,1)] sticky top-0 z-50 w-full">
            <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-base max-w-full">
                <button
                    type="button"
                    onClick={() => scrollToSection("hero")}
                    className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter flex items-center gap-2"
                >
                    <img
                        src="/matchmelo-logo.jpeg"
                        alt="MM"
                        style={{
                            height: "70px",
                            width: "auto",
                            maxWidth: "none",
                            objectFit: "contain",
                            flexShrink: 0,
                        }}
                    />
                    MATCHMELO
                </button>

                <div className="hidden md:flex gap-md font-label-bold text-label-bold text-on-surface-variant">
                    {SECTIONS.map(({ id, label }) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => scrollToSection(id)}
                            className={
                                activeSection === id
                                    ? "text-primary border-b-2 border-primary pb-1 transition-transform"
                                    : "hover:text-primary hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                            }
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={onJoinWaitlist}
                    className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-md py-sm border-2 border-on-background shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded"
                >
                    Try Now
                </button>
            </div>
        </nav>
    );
}