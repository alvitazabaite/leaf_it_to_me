import { useAuth } from '@/context/AuthContext.ts';

export default function Header() {
    const { logout } = useAuth();

    return (
        <header className="flex items-center justify-between h-[70px] px-[16.5px] pr-[20.5px] md:h-[90px] md:px-[150.56px] md:pr-[211.52px] bg-dark-green shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
            <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-[url('@/assets/tree.png')] bg-lightgray bg-center bg-cover bg-no-repeat aspect-square shrink-0"></div>
            <button onClick={logout} className="text-lg text-white font-bold cursor-pointer">
                Log out
            </button>
        </header>
    );
}
