
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="mt-16 pt-32 pb-[260px] px-20 bg-purple-light text-purple-dark max-md:pt-24 max-md:pb-[200px] max-md:px-10 max-sm:pt-20 max-sm:pb-40 max-sm:px-5">
      <div className="max-w-screen-xl text-center mx-auto my-0 max-md:px-5 max-md:py-0">
        <h1 className="text-6xl font-bold mb-6 max-sm:text-[32px]">
          Supporting Caregivers Together
        </h1>
        <p className="text-xl mb-12 max-sm:text-lg">
          Join our community of caregivers, find resources, and make your voice
          heard through advocacy.
        </p>
        <div className="flex gap-6 justify-center max-sm:flex-col max-sm:gap-4">
          <Link to="/join-community" className="bg-white text-purple text-base font-semibold flex items-center gap-2 justify-center cursor-pointer px-[38px] py-4 rounded-lg border border-purple/20 hover:bg-gray-50 transition-colors max-sm:w-full">
            <i className="ti ti-users text-xl" />
            <span>Join Community</span>
          </Link>
          <Link to="/send-letter" className="bg-white text-purple text-base font-semibold flex items-center gap-2 justify-center cursor-pointer px-[38px] py-4 rounded-lg border border-purple/20 hover:bg-gray-50 transition-colors max-sm:w-full">
            <i className="ti ti-mail text-xl" />
            <span>Send Letter</span>
          </Link>
          <Link to="/find-support" className="bg-white text-purple text-base font-semibold flex items-center justify-center gap-2 cursor-pointer px-[38px] py-4 rounded-lg border border-purple/20 hover:bg-gray-50 transition-colors max-sm:w-full">
            <i className="ti ti-heart-handshake text-xl" />
            <span>Find Support</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
