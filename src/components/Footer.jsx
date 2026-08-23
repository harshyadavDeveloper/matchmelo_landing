export function Footer({ onNavigate }) {
    return (
        <footer className="bg-inverse-surface border-t-4 border-dashed border-outline-variant flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-lg w-full mt-auto relative z-10">

            {/* Logo */}
            <button
                type="button"
                onClick={() => onNavigate("home")}
                className="font-headline-md text-headline-md text-primary-fixed mb-md md:mb-0"
            >
                MATCHMELO
            </button>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-md font-label-mono text-label-mono mb-md md:mb-0">

                <button
                    type="button"
                    onClick={() => onNavigate("home")}
                    className="text-surface-variant opacity-80 hover:text-primary-fixed-dim hover:underline transition-opacity duration-300"
                >
                    Home
                </button>

                <button
                    type="button"
                    onClick={() => onNavigate("privacy")}
                    className="text-surface-variant opacity-80 hover:text-primary-fixed-dim hover:underline transition-opacity duration-300"
                >
                    Privacy Policy
                </button>

                <button
                    type="button"
                    onClick={() => onNavigate("terms")}
                    className="text-surface-variant opacity-80 hover:text-primary-fixed-dim hover:underline transition-opacity duration-300"
                >
                    Terms & Services
                </button>

                <button
                    type="button"
                    onClick={() => onNavigate("refund")}
                    className="text-surface-variant opacity-80 hover:text-primary-fixed-dim hover:underline transition-opacity duration-300"
                >
                    Refund Policy
                </button>

            </div>

            {/* Copyright */}
            <div className="font-body-md text-body-md text-primary-fixed text-center">
                © 2024 MATCHMELO. NO PERMISSION NEEDED.
            </div>

        </footer>
    );
}