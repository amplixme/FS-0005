import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-gray-200 bg-gray-50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Información */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-gray-900">
            Proyecto Amplix
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()} Proyecto Amplix. Todos los derechos reservados.
          </p>
        </div>

        {/* Enlaces */}
        <div className="flex gap-6 text-sm text-gray-600">
          <Link
            to="/"
            className="transition hover:text-blue-600"
          >
            Privacy Policy
          </Link>

          <Link
            to="/"
            className="transition hover:text-blue-600"
          >
            Terms
          </Link>

          <Link
            to="/"
            className="transition hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
}