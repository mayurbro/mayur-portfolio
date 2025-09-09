import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg "
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl"
      >
        My latest work
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 text-center  place-items-center my-10 gap-2 mx-auto">
        {workData.map((project, index) => {
          return (
            <div
              key={index}
              className=" w-100 h-70 sm:w-110 sm:h-100 bg-no-repeat bg-cover bg-center  relative  group shadow-2xl  rounded-2xl mb-8    "
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="bg-orange-50 w-11/12   absolute bottom-5 left-1/2 -translate-x-1/2 py-5 px-5 flex items-center justify-between duration-500 group-hover:bottom-7  shadow-2xl ">
                <div>
                  <div className="flex justify-between  items-center mb-2">
                    <h2 className="text-black">{project.title}</h2>
                    <div className="flex justify-center gap-2">
                      {project.github && (
                        <a href={project.github} className="rounded-full">
                          <Image
                            width={8}
                            height={8}
                            className="w-8 hover:-translate-y-2 duration-500 rounded-full hover:bg-blue-300"
                            src={"/github_iconSVG.png"}
                            alt=""
                          />
                        </a>
                      )}

                      <a href={project.liveSite}>
                        <Image
                          width={8}
                          height={8}
                          className="w-8 cursor-pointer  hover:-translate-y-2 duration-500 rounded-full hover:bg-blue-300"
                          src={"/browser.png"}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>

                  <ul className="grid grid-cols-4 gap-1">
                    {project.techStack ? (
                      project.techStack.map((stack, index) => (
                        <li
                          className="text-sm sm:py-1 items-center   sm:px-1  bg-black text-white text-center  rounded-2xl"
                          key={index}
                        >
                          {stack}
                        </li>
                      ))
                    ) : (
                      <p></p>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
