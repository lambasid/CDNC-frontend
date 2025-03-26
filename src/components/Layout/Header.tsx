import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-screen-xl h-16 flex items-center justify-between mx-auto px-6">
        <Link to="/" className="flex items-center gap-2 text-purple-900 text-xl font-bold">
          <img src="/images/logo_heart.png" alt="CDNC Logo" className="h-9 w-auto" />
          Childhood Disability Network Canada
        </Link>

        <nav className="flex gap-8 max-sm:hidden" aria-label="Main navigation">
          <Link
            to="/"
            className="text-gray-700 text-base font-medium hover:text-purple-900 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/advocacy"
            className="text-gray-700 text-base font-medium hover:text-purple-900 transition-colors"
          >
            Advocacy Hub
          </Link>
          <Link
            to="/resources"
            className="text-gray-700 text-base font-medium hover:text-purple-900 transition-colors"
          >
            Resources
          </Link>
          <Link
            to="/find-support"
            className="text-gray-700 text-base font-medium hover:text-purple-900 transition-colors"
          >
            Find Support
          </Link>
          <Link
            to="/join-community"
            className="text-gray-700 text-base font-medium hover:text-purple-900 transition-colors"
          >
            Join Community
          </Link>
        </nav>

        <Link
          to="/sign-in"
          className="bg-purple text-white text-base font-medium px-4 py-2 rounded-lg hover:bg-purple-dark transition-colors"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};
