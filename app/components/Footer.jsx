import Image from "next/image";
import { assets } from "@/public/assets";
const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="text-2xl">
          {" "}
          Mayur<span className="px-2 p-y-2 bg-red-400 rounded-sm">.Dev</span>
        </h3>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            className="w-5"
            alt=""
          />
          mayurchaudhari4142@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Mayur Chaudhari. All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/mayurbro">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mayurchaudhari41/"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
