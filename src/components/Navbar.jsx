export function Navbar({ onJoinWaitlist }) {
    return (
        <nav className="bg-surface border-b-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(58,105,44,1)] sticky top-0 z-50 w-full">
            <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-base max-w-full">
                <a className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    MATCHMELO
                </a>
                <div className="hidden md:flex gap-md font-label-bold text-label-bold text-on-surface-variant">
                    <a className="hover:text-primary hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Marketplace</a>
                    <a className="text-primary border-b-2 border-primary pb-1 scale-95 transition-transform" href="#">AI Match</a>
                    <a className="hover:text-primary hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Escrow</a>
                    <a className="hover:text-primary hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all" href="#">Stories</a>
                </div>
                <button
                    type="button"
                    onClick={onJoinWaitlist}
                    className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-md py-sm border-2 border-on-background shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded"
                >
                    Join Now
                </button>
            </div>
        </nav>
    );
}