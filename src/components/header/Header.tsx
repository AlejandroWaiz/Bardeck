import { JSX, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { getActualPlayer } from "../../entitys/Player";
import { useAuth } from "../../context/AuthContext";

const Header = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  const { player, logout } = useAuth();


  return (
    <header className="flex items-center justify-between sm:justify-around p-6 border-b-2 bg-gray-100">
      {/* Logo */}
      <a
        href="/"
        className="flex items-center ml-6 h-10 px-12 text-4xl sm:text-4xl bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
      >
        Bardeck
      </a>

      {/* Desktop navigation */}
      <nav className="sm:flex gap-6 font-semibold text-2xl sm:text-2xl ml-10">
        <a href="#" className="hover:text-gray-500">
          Home
        </a>
        <a href="#" className="hover:text-gray-500">
          About
        </a>
        <a href="#" className="hover:text-gray-500">
          Contact
        </a>
      </nav>

      <div className="absolute">Hola {player?.name}, tienes {player?.janoDolares} janodolares</div>

      {/* Mobile navigation button */}
      <div className="relative ml-auto pr-2">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-4xl text-black hover:text-gray-600"
          aria-label="Toggle Menu"
        >
          {showMenu ? (
            <CloseIcon fontSize="inherit" />
          ) : (
            <MenuIcon fontSize="inherit" />
          )}
        </button>

        {/* Mobile menu */}
        {showMenu && (
          <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md py-2 px-4 z-10 font-semibold text-2xl sm:text-2xl">
            <a href="#" className="block py-1 hover:text-gray-500">
              Home
            </a>
            <a href="#" className="block py-1 hover:text-gray-500">
              About
            </a>
            <a href="#" className="block py-1 hover:text-gray-500">
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
