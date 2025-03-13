import { SocialIcon } from "../ui/SocialIcon";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 px-20 py-12 max-sm:px-5 max-sm:py-10">
      <div className="max-w-screen-xl flex gap-8 mb-8 mx-auto my-0 max-md:px-5 max-md:py-0 max-sm:flex-col max-sm:gap-8">
        <div className="w-72 max-sm:w-full">
          <h3 className="text-white text-base font-semibold mb-[17px]">
          Childhood Disability Network Canada
          </h3>
          <p className="text-gray-400 text-base">
            Supporting caregivers through community and advocacy.
          </p>
        </div>

        <div className="w-72 max-sm:w-full">
          <h3 className="text-white text-base font-semibold mb-[17px]">
            Quick Links
          </h3>
          <ul className="p-0">
            <li className="text-gray-400 text-base no-underline mb-2 hover:text-gray-300 cursor-pointer">
              About Us
            </li>
            <li className="text-gray-400 text-base no-underline mb-2 hover:text-gray-300 cursor-pointer">
              Resources
            </li>
            <li className="text-gray-400 text-base no-underline mb-2 hover:text-gray-300 cursor-pointer">
              Community
            </li>
            <li className="text-gray-400 text-base no-underline mb-2 hover:text-gray-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        <div className="w-72 max-sm:w-full">
          <h3 className="text-white text-base font-semibold mb-[17px]">
            Support
          </h3>
          <ul className="p-0">
            <li className="text-gray-400 text-base no-underline mb-2 hover:text-gray-300 cursor-pointer">
              Help Center
            </li>
            <li className="text-gray-400 text-base no-underline mb-2 hover:text-gray-300 cursor-pointer">
              FAQs
            </li>
            <li className="text-gray-400 text-base no-underline mb-2 hover:text-gray-300 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-gray-400 text-base no-underline mb-2 hover:text-gray-300 cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        <div className="w-72 max-sm:w-full">
          <h3 className="text-white text-base font-semibold mb-[17px]">
            Connect With Us
          </h3>
          <div className="flex gap-4">
            <SocialIcon type="facebook" />
            <SocialIcon type="twitter" />
            <SocialIcon type="linkedin" />
            <SocialIcon type="instagram" />
          </div>
        </div>
      </div>

      <div className="text-gray-400 text-base border-t-gray-700 text-center pt-8 border-t border-solid">
        © 2025 CDNC. All rights reserved.
      </div>
    </footer>
  );
};
