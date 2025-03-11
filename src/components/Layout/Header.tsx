
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed shadow-[0_1px_2px_rgba(0,0,0,0.05)] z-[100] bg-white top-0 inset-x-0">
      <div className="max-w-screen-xl h-16 flex items-center justify-between mx-auto my-0 px-4 py-0 max-md:px-5 max-md:py-0 max-sm:px-4 max-sm:py-0">
        <Link to="/" className="flex items-center gap-2 text-purple-dark text-xl font-bold">
          <img src="/lovable-uploads/166cbe99-0d1b-4958-9f31-e0af738e5746.png" alt="CareSupport Logo" className="h-12 w-auto" />
          Childhood Disability Network Canada
        </Link>

        <nav className="flex gap-8 max-sm:hidden" aria-label="Main navigation">
          <Link
            to="/"
            className="text-gray-700 text-base no-underline hover:text-purple transition-colors"
          >
            Home
          </Link>
          <Link
            to="/advocacy"
            className="text-gray-700 text-base no-underline hover:text-purple transition-colors"
          >
            Advocacy Hub
          </Link>
          <Link
            to="/resources"
            className="text-gray-700 text-base no-underline hover:text-purple transition-colors"
          >
            Resources
          </Link>
          <Link
            to="/find-support"
            className="text-gray-700 text-base no-underline hover:text-purple transition-colors"
          >
            Find Support
          </Link>
          <Link
            to="/join-community"
            className="text-gray-700 text-base no-underline hover:text-purple transition-colors"
          >
            Join Community
          </Link>
        </nav>

        <Link
          to="/sign-in"
          className="text-white text-base cursor-pointer bg-purple px-4 py-2 rounded-lg border-[none] hover:bg-purple-dark transition-colors"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};
