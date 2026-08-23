export function PolicyPage({ title, children, onNavigate }) {
    return (
        <div className="relative min-h-screen overflow-hidden px-margin-mobile md:px-margin-desktop py-xl">

            {/* Background decoration */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-fixed rounded-full mix-blend-multiply opacity-20 blur-3xl -z-10" />
            <div className="absolute top-1/3 right-10 w-80 h-80 bg-secondary-container rounded-full mix-blend-multiply opacity-20 blur-3xl -z-10" />

            <div className="max-w-5xl mx-auto">

                {/* Back to Home */}
                <button
                    type="button"
                    onClick={() => onNavigate("home")}
                    className="group inline-flex items-center gap-sm bg-surface border-2 border-on-background shadow-hard px-md py-sm mb-xl font-label-bold text-label-bold text-on-background hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>

                    BACK TO HOME
                </button>

                {/* Page Header */}
                <div className="mb-lg">
                    <div className="inline-block bg-inverse-surface text-surface-container-lowest font-label-mono text-label-mono px-sm py-xs mb-md uppercase tracking-widest shadow-hard-primary rotate-1">
                        MatchMelo
                    </div>

                    <h1 className="font-display-lg text-display-lg text-on-background uppercase mb-md relative inline-block">
                        <span className="relative z-10">
                            {title}
                        </span>

                        <span className="absolute -bottom-2 left-0 w-full h-1/3 bg-primary-container -z-10 rotate-1" />
                    </h1>

                    <div className="w-full divider-stitched mt-lg" />
                </div>

                {/* Policy Content */}
                <article>
                    <div className="bg-surface-container-lowest border-2 border-on-background shadow-hard-primary p-md md:p-xl rotate-1">

                        <div className="rotate-neg-1">
                            {children}
                        </div>

                    </div>
                </article>

            </div>
        </div>
    );
}