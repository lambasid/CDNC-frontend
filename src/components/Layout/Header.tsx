import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHeartbeat } from "react-icons/fa";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isMenuOpen
          ? "bg-primary-main shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl"
        >
          <div className={`bg-white text-primary-main p-2 rounded-full`}>
            <FaHeartbeat />
          </div>
          <span className={`transition-colors duration-300 ${
            isScrolled || !isMenuOpen ? "text-white" : "text-primary-main"
          }`}>Caregiver Support</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["Home", "Resources", "Community", "Advocacy", "About", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`relative font-medium transition-colors duration-300 hover:text-accent-main ${
                  isScrolled || !isMenuOpen ? "text-white" : "text-primary-main"
                }`}
              >
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-main"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className={`transition-colors duration-300 font-medium ${
              isScrolled || !isMenuOpen ? "text-white" : "text-primary-main"
            } hover:text-accent-main`}
          >
            Log In
          </Link>
          <Link
            to="/join-community"
            className={`btn btn-primary text-sm py-2 ${
              isScrolled || !isMenuOpen ? "text-white" : "text-primary-main"
            }`}
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className={isScrolled || !isMenuOpen ? "text-white" : "text-primary-main"} />
          ) : (
            <FaBars className={isScrolled || !isMenuOpen ? "text-white" : "text-primary-main"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-main border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                {["Home", "Resources", "Community", "Advocacy", "About", "Contact"].map(
                  (item) => (
                    <Link
                      key={item}
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-white hover:text-accent-main font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  )
                )}
                <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-gray-100">
                  <Link
                    to="/login"
                    className="text-white hover:text-accent-main font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log In
                  </Link>
                  <Link
                    to="/join-community"
                    className="btn btn-primary text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Us
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
