import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

export default function Header({ isDarMode }) {
  return (
    <div
      id=""
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-20 mb-20"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="flex flex-col items-center rounded-full overflow-hidden h-50 w-50  object-cover"
      >
        <Image width={200} height={300} alt="" src={assets.profile2_picture} />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl"
      >
        Hi, I am Mayur
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-3xl sm:text-6xl lg:text-[50px] w-[900px]"
      >
        Fullstack web developer
      </motion.h1>

      <h2 className="text-xl sm:text-2xl -mt-3">
        Specialization in MERN stack
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center gap-3 px-10 py-3 border border-white rounded-full text-white bg-black dark:bg-transparent "
          href="#contact"
        >
          Contact me{" "}
          <Image
            className="w-3"
            alt=""
            src={isDarMode ? assets.arrow_icon : assets.arrow_icon_dark}
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center gap-3 px-10 py-3 border border- rounded-full border-gray-500 dark:bg-white dark:text-black"
          href="/mayur-resume.pdf"
          download
        >
          My resume <Image className="w-5 " alt="" src={assets.download_icon} />
        </motion.a>
      </div>
    </div>
  );
}
