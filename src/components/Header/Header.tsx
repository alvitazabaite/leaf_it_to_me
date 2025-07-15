import { useAuth } from '@/context/AuthContext.ts';

export default function Header() {
    const { logout } = useAuth();

    return (
        <header className="flex items-center justify-between h-[90px] px-[150.56px] pr-[211.52px] bg-dark-green shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
            <div className="w-[70px] h-[70px] bg-[url('@/assets/tree.png')] bg-lightgray bg-center bg-cover bg-no-repeat aspect-square shrink-0"></div>
            <button onClick={logout} className="text-lg text-white font-bold cursor-pointer">
                Log out
            </button>
        </header>
    );
}
