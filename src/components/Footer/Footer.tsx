export default function Footer() {
    return (
        <footer className="h-[108px] md:h-[70px] flex items-center justify-center gap-[10px] p-[10px] bg-dark-green">
            <div className="text-white font-inter text-[15px] md:text-xl leading-normal font-normal text-center">
                <span className="md:hidden">
                    © 2025
                    <br />
                    Free to explore, learn, and grow
                </span>
                <span className="hidden md:inline">© 2025 – Free to explore, learn, and grow</span>
            </div>
        </footer>
    );
}
