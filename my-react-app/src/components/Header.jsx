import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-300 shadow-md py-4">
      <ul className="flex items-center justify-center gap-10 font-semibold text-gray-700 text-lg">
        <li>
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/booking"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Booking
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
