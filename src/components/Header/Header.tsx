import { useAuth } from '@/context/AuthContext.ts';
import tree from '@/assets/tree.png';

export default function Header() {
    const { logout } = useAuth();

    return (
        <header className="flex items-center justify-between h-[5.625rem] w-full bg-dark-green shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] px-[13.22rem]">
            <img src={tree} alt="tree" className="w-[4.375rem] h-[4.375rem] aspect-square" />
            <button onClick={logout} className="text-lg text-white hover:text-yellowish-white cursor-pointer">
                Log out
            </button>
        </header>
    );
}
