import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold text-indigo-600"
        >
          Sagar Mahto
        </Link>

        {/* ========= LARGE & MEDIUM DEVICES ========= */}
        <div className="hidden md:flex items-center gap-8 text-sm lg:text-base font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative hover:text-indigo-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ========= SMALL DEVICES ========= */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ========= MOBILE MENU ========= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t shadow px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-sm font-medium hover:text-indigo-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
