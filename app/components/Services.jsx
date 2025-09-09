import { serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20 flex flex-col items-center justify-center "
    >
      <motion.h4 className="text-center mb-2 text-lg ">What I offer</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl"
      >
        My Services
      </motion.h2>
      <div className=" flex flex-col  md:flex-row items-center justify-center gap-6 my-10 ">
        {serviceData.map(({ title, icon, description }, index) => {
          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-2xl  hover:-translate-y-1 duration-500 dark:hover:shadow-white/40 dark:bg-transparent dark:hover:bg-[#2a004a] "
            >
              <Image
                width={10}
                height={10}
                src={icon}
                alt=""
                className="w-10"
              />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white/80">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/70">
                {description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Services;
