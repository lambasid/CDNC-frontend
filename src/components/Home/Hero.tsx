import { Link } from "react-router-dom";
import { RunningBanner } from "../Support/RunningBanner";
import { TiUser, TiMail, TiHeart } from "react-icons/ti";
import { Header } from "@/components/Layout/Header";

export const Hero = () => {
  const runningBannerItems = [
    "24/7 Crisis Support Available",
    "Join a Local Support Group Today",
    "Financial Resources for Caregivers",
    "Download Our Free Caregiving Guide",
    "Virtual Support Sessions Every Tuesday",
    "One-on-One Counseling Available",
    "Emergency Respite Care Services",
    "Caregiver Wellness Workshops",
  ];
  return (
  
  <>
   <main>

      <section className="mt-16 pt-32 pb-[100px] px-20 bg-purple-light text-purple-900 max-md:pt-24 max-md:pb-[200px] max-md:px-10 max-sm:pt-20 max-sm:pb-40 max-sm:px-5 flex items-center justify-center">
        <div className="flex flex-col max-w-screen-xl text-center mx-auto my-0 max-md:px-5 max-md:py-0 ">
          <h1 className="text-6xl font-bold mb-6 max-sm:text-[32px]">
            Supporting Caregivers Together
          </h1>
          <p className="text-xl mb-12 max-sm:text-lg">
            Join our community of caregivers, find resources, and make your voice
            heard through advocacy.
          </p>
          <div className="flex gap-6 justify-center max-sm:flex-col max-sm:gap-4" >
            <Link
              to="/join-community"
              className="bg-white text-purple-900 text-base font-semibold flex items-center gap-2 justify-center cursor-pointer px-[38px] py-4 rounded-lg border border-purple/20 hover:bg-gray-50 transition-colors max-sm:w-full"
            >
              <TiUser className="text-xl" />
              <span>Join Community</span>
            </Link>
            <Link
              to="/send-letter"
              className="bg-white text-purple-900 text-base font-semibold flex items-center gap-2 justify-center cursor-pointer px-[38px] py-4 rounded-lg border border-purple/20 hover:bg-gray-50 transition-colors max-sm:w-full"
            >
              <TiMail className="text-xl" />
              <span>Send Letter</span>
            </Link>
            <Link
              to="/find-support"
              className="bg-white text-purple-900 text-base font-semibold flex items-center justify-center gap-2 cursor-pointer px-[38px] py-4 rounded-lg border border-purple/20 hover:bg-gray-50 transition-colors max-sm:w-full"
            >
              <TiHeart className="text-xl" />
              <span>Find Support</span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <RunningBanner
          items={runningBannerItems}
          className="bg-purple/10 text-purple-900 font-semibold py-3 text-lg"
        />
      </section>
  </main>

  </> 
  );
};
