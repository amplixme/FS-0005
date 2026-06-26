import { X } from "lucide-react";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div className="absolute right-0 h-full w-72 bg-white p-6 shadow-xl">

        <button
          onClick={onClose}
          className="mb-8"
          aria-label="Cerrar menú"
        >
          <X size={30} />
        </button>

        <nav className="flex flex-col gap-6">
          <a href="/" className="hover:text-blue-600">
            Latest
          </a>

          <a href="/" className="hover:text-blue-600">
            Popular
          </a>

          <a href="/" className="hover:text-blue-600">
            Newsletter
          </a>

          <hr />

          <button className="text-left hover:text-blue-600">
            Log In
          </button>

          <button className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Subscribe
          </button>
        </nav>

      </div>
    </div>
  );
}