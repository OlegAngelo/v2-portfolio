import React, {useEffect} from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import WebDev from "../components/WebDev"
import Embedded from "../components/Embedded";
import TextSpan from '../utils/textSpan';

const Projects = () => {
  const githubLink = <a className="underline text-[#7c7cb3]" href="https://github.com/OlegAngelo/">Github</a>;
  const name = "My projects.".split("");

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main>
        <section>
          <div className="flex flex-col items-center justify-center gap-6 pb-10 md:mx-8 text-neutral-800">
          <motion.div
              className="lg:mt-[200px] mt-[120px] mb-[10px] lg:mb-[30px]  text-3xl font-bold md:text-4xl lg:text-5xl text-v"
              variants={fadeIn("right", 0.1)}
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

            {/* portfolio starts here */}
            {/* <div>Currently under maintenance. Adding new projects...</div>
            <div>You can check out some of my projects in my {githubLink}.</div> */}

            <WebDev />
            <Embedded />
          
          </div>
        </section>
    </main>
  );
};

export default Projects;
