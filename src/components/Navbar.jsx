import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

<Link smooth to="/#about" className="hover:text-indigo-400">
  About
</Link>;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "py-8 bg-opacity-100 shadow-lg" : "py-6"
      } bg-gray-900 text-gray-100 fixed top-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex justify-between items-center">
        {/* Logo */}
        <Link smooth to="/#hero" className="text-xl font-extrabold text-white">
          Mohammed A.
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium text-2xl">
          <Link smooth to="/#about" className="hover:text-indigo-400">
            About
          </Link>
          <Link smooth to="/#service" className="hover:text-indigo-400">
            Services
          </Link>
          <Link smooth to="/#projects" className="hover:text-indigo-400">
            Projects
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          smooth
          to="/#contact"
          className="hidden md:inline bg-indigo-600 text-white text-2xl px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          Contact
        </Link>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 text-2xl">
            <Link smooth to="/#about" onClick={toggleMenu}>
              About Me
            </Link>
            <Link smooth to="/#service" onClick={toggleMenu}>
              Services
            </Link>
            <Link smooth to="/#projects" onClick={toggleMenu}>
              Projects
            </Link>
            <Link
              smooth
              to="/#contact"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
