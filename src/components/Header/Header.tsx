import { NavLink } from "react-router-dom";
import { clsx } from "clsx";

export default function Header() {
  return (
    <header className="flex items-center justify-center shadow-sm space-x-20 h-[60px] text-black font-serif w-full fixed">
      <NavLink
        to="/"
        className={({ isActive }) =>
          clsx("cursor-pointer", isActive && "bg-white text-amber-400")
        }
      >
        Home Page
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          clsx("cursor-pointer", isActive && "bg-white text-amber-400")
        }
      >
        Search Page
      </NavLink>
    </header>
  );
}
