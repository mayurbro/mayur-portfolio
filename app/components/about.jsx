import Image from "next/image";
import { assets } from "@/public/assets";
import { infoList } from "@/public/assets";
import { toolsData } from "@/public/assets";
import { motion } from "motion/react";
const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 "
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-5xl text-center
      "
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col w-full lg:flex-row  items-center gap-20 my-20 "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none "
        >
          {" "}
          <Image
            alt=""
            src={assets.user_profile3}
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <motion.ol
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-10 list-disc ml-6 "
          >
            <li>
              {" "}
              I am a passionate full-stack web developer, having solid
              understanding of web technologies such as React Js, Next Js,
              Express Js, MongoDb & Mysql.
            </li>
            <li>
              Solved more than 100 data structure ans algorithm question on
              leetcode using Java.
            </li>

            <li>
              {" "}
              I have successfully build and deploy 3 live projects. This
              projects showcase my skills and ability to code complex web
              applications.
            </li>
            <li>Eager to learn and adapt new technologies quickly.</li>
          </motion.ol>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, iconDark, description }, index) => {
              return (
                <motion.li
                  whileInView={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer shadow-xl hover:bg-amber-50  hover:-translate-y-1 duration-500 hover:shadow-black/50 dark:border-white dark:hover:shadow-white/50 dark:hover:bg-[#2a004a]"
                >
                  <Image
                    className="w-7"
                    src={isDarkMode ? iconDark : icon}
                    alt=""
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {description}
                  </p>
                </motion.li>
              );
            })}
          </ul>
          <h4 className="my-6 text-gray-700 dark:text-white/80">Tools I use</h4>
          <ul className="flex items-center text-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => {
              return (
                <li
                  key={index}
                  className=" flex items-center justify-center  border  cursor-pointer border-gray w-12 sm:w-14 aspect-square rounded-lg hover:-translate-y-2 duration-500"
                >
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
