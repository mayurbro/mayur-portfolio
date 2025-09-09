"use client";
import { useRef, useState, useEffect } from "react";
// import Image from "./Image";
import Image from "next/image";
import { assets } from "@/assets/assets";
export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const ref = useRef();
  const [scroll, setScroll] = useState(false);
  function openModel() {
    ref.current.style.transform = "translateX(-16rem)";
  }
  function closeModel() {
    ref.current.style.transform = "translateX(16rem)";
  }

  useEffect(() => {
    const userScroll = window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div
        id=""
        className=" fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden"
      >
        <Image
          alt=""
          src={assets.header_bg_color}
          className="w-full h-screen"
        />
      </div>
      <nav
        className={` w-full  fixed  px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          scroll
            ? "bg-white/50 backdrop-blur-2xl border-b-1 dark:bg-black/50 dark:backdrop-blur-2xl dark:border-b-white"
            : ""
        }`}
      >
        <a href="#top" className="text-2xl">
          Mayur<span className="px-2 p-y-2 bg-red-400 rounded-sm">.Dev</span>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            scroll
              ? ""
              : "bg-white/50 shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li className="hover:border-b-2 border-b-red-400  hover:-translate-y-2 transform duration-500">
            <a href="#top">Home</a>
          </li>
          <li className="hover:border-b-2 border-b-red-400  hover:-translate-y-2 transform duration-500">
            <a href="#services">Services</a>
          </li>
          <li className="hover:border-b-2 border-b-red-400  hover:-translate-y-2 transform duration-500">
            <a href="#about">About me</a>
          </li>
          <li className="hover:border-b-2 border-b-red-400  hover:-translate-y-2 transform duration-500">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:border-b-2 border-b-red-400  hover:-translate-y-2 transform duration-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            className="cursor-pointer"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              width={24}
              height={24}
              className="w-6"
              alt=""
            />
          </button>
          <a
            className="hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50"
            href="#contact"
          >
            Contact{" "}
            <Image
              className="w-3"
              alt=""
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
            />
          </a>

          <button onClick={openModel}>
            <Image
              className="block md:hidden w-6 cursor-pointer"
              alt=""
              src={isDarkMode ? assets.menu_white : assets.menu_black}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={ref}
          className=" md:hidden flex items-center  flex-col  gap-2 w-64 py-20 px-10  bg-rose-50  fixed -right-64 top-0 bottom-0 h-screen dark:bg-[#2a004a] dark:text-white
          "
        >
          <div onClick={closeModel}>
            <Image
              alt=""
              className="absolute top-5 right-3 w-5  cursor-pointer"
              src={isDarkMode ? assets.close_white : assets.close_black}
            />
          </div>

          <li onClick={closeModel}>
            <a href="#home">Home</a>
          </li>
          <li onClick={closeModel}>
            <a href="#services">Services</a>
          </li>
          <li onClick={closeModel}>
            <a href="#about">About me</a>
          </li>
          <li onClick={closeModel}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={closeModel}>
            <a href="#education"> Education</a>
          </li>
        </ul>
      </nav>{" "}
      <div></div>
    </>
  );
}
