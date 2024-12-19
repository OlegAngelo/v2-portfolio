import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TextSpan from "../utils/textSpan";
import { NavLink } from "react-router-dom";
import { FiDownload, FiEye } from "react-icons/fi";
import about from "../images/Angelo-About.png";
import Cv from "../constants/CV-AngeloBalagtas.pdf";

const Hero2 = () => {
  const name = "About me.".split("");

  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full min-h-screen text-neutral-800">
        {/*container*/}
        <div className="grid items-center gap-4 md:gap-6 lg:gap-8 justify-items-center lg:grid-cols-2">
          {/*image*/}
          <div className=" w-[200px] md:w-[300px] lg:w-[400px] xxl:w-[500px]">
            <motion.img
              variants={fadeIn("up", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              src={about}
              alt="A fun vector image depicting Angelo Balagtas in his corporate fit."
            />
          </div>
          {/*text-box*/}
          <div className="grid items-center gap-1 md:gap-2 lg:gap-3 justify-items-center w-[300px] md:w-[400px]">
            {/*title*/}
            <motion.div
              className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-v"
              variants={fadeIn("down", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              {name.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </motion.div>
            {/*text*/}
            <div className="flex flex-col text-justify text-neutral-500 ">
              <motion.p
                variants={fadeIn("down", 0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
              >
                Hi, I'm Niño Angelo Balagtas, a Full Stack Software Engineer based in the Philippines. I specialize in building innovative and scalable web applications, and I’m deeply interested in areas such as AI/ML, Robotics, and IoT.
                <br/><br/>
                With a strong background in technologies such as React, Node.js, C#, and Express.js, I build both the front-end and back-end to create well-rounded, efficient applications. My expertise spans various databases including MsSQL and PostgreSQL, and I’m constantly exploring new tools to enhance my work, like TensorFlow, PyTorch, and scikit-learn libraries for AI/ML applications.
                <br/><br/>
                <NavLink to="/contacts">
                  <span className="font-bold text-neutral-700 underline">I'm available for hire.</span>
                </NavLink>
              </motion.p>
            </div>

             {/* Buttons Side by Side */}
            <motion.div
              className="flex gap-4 mt-2" // Side-by-side layout with gap
              variants={fadeIn("down", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              {/* Download CV Button */}
              <a
                className="px-5 py-2 text-sm font-bold text-white uppercase border-b-4 rounded-full bg-vBtn bg-v hover:bg-vBtnHover border-vBtnHover hover:border-v flex items-center gap-2"
                href={Cv}
                download="CV-AngeloBalagtas"
                rel="noopener noreferrer"
              >
                <FiDownload size={20} />
                <p className="font-semibold">Download CV</p>
              </a>

              {/* View CV Button */}
              <a
                className="px-5 py-2 text-sm font-bold text-white uppercase border-b-4 rounded-full bg-vBtn bg-v hover:bg-vBtnHover border-vBtnHover hover:border-v flex items-center gap-2"
                href={Cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiEye size={20} /> {/* Eye icon for View CV */}
                <p className="font-semibold">View CV</p>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
