export function Footer() {
    return (
        <footer className="bg-inverse-surface border-t-4 border-dashed border-outline-variant flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-lg w-full mt-auto relative z-10">
            <div className="font-headline-md text-headline-md text-primary-fixed mb-md md:mb-0">
                MATCHMELO
            </div>
            <div className="flex gap-md font-label-mono text-label-mono mb-md md:mb-0">
                <a className="text-surface-variant opacity-80 hover:text-primary-fixed-dim hover:underline transition-opacity duration-300" href="#">Terms of Chaos</a>
                <a className="text-surface-variant opacity-80 hover:text-primary-fixed-dim hover:underline transition-opacity duration-300" href="#">Privacy Leak</a>
                <a className="text-surface-variant opacity-80 hover:text-primary-fixed-dim hover:underline transition-opacity duration-300" href="#">Newsletter</a>
                <a className="text-surface-variant opacity-80 hover:text-primary-fixed-dim hover:underline transition-opacity duration-300" href="#">Careers</a>
            </div>
            <div className="font-body-md text-body-md text-primary-fixed">
                © 2024 MATCHMELO. NO PERMISSION NEEDED.
            </div>
        </footer>
    );
}