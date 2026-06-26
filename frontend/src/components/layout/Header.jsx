import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import logo from "../../assets/amplixme_logo.jpg";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Proyecto Amplix"
              className="h-10 w-auto"
            />

            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Proyecto Amplix
            </span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden items-center gap-8 md:flex">

            <Link
              to="/"
              className="border-b-2 border-blue-600 pb-1 text-sm font-semibold text-blue-600"
            >
              Latest
            </Link>

            <Link
              to="/"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              Popular
            </Link>

            <Link
              to="/"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              Newsletter
            </Link>

          </nav>

          {/* Acciones Desktop */}
          <div className="hidden items-center gap-4 md:flex">

            <Link
              to="/login"
              className="rounded-full px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Log In
            </Link>

            <Link
              to="/register"
              className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Subscribe
            </Link>

            <img
              src="https://i.pravatar.cc/40"
              alt="Avatar"
              className="h-10 w-10 rounded-full border border-gray-200 object-cover"
            />

          </div>

          {/* Botón Mobile */}
          <button
            className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>

        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}