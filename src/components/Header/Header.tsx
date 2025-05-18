import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext.ts";

export default function Header() {
  const { logout } = useContext(AuthContext);

  return (
    <header className="relative flex items-center shadow-sm h-[60px] text-black font-serif w-full bg-white">
      <div className="flex space-x-20 w-full justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx("cursor-pointer", isActive && "text-amber-400")
          }
        >
          Home Page
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            clsx("cursor-pointer", isActive && "text-amber-400")
          }
        >
          Search Page
        </NavLink>
      </div>
      <button
        className="cursor-pointer absolute right-15 font-medium hover:text-red-500"
        onClick={logout}
      >
        Log out
      </button>
    </header>
  );
}
