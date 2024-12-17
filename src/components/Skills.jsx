import React, { useState } from "react";
import skills from "../constants/skills";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TextSpan from "../utils/textSpan";

const Skills = () => {
  const name = "My skill-set.".split("");

  // State to track hovered skill name and mouse position
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Track mouse position relative to the viewport
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="mb-20">
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        {/* Container */}
        <div className="grid items-center w-full gap-8 justify-items-center">
          {/* Title */}
          <motion.div
            className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-v"
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            {name.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </motion.div>
          {/* Skills Grid */}
          <div className="grid grid-cols-4 gap-3 mx-auto md:gap-6 lg:gap-8 lg:grid-cols-5 ">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col rounded-xl w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] items-center justify-center bg-white shadow-lg ${skill.shadow}`}
                variants={fadeIn("up", skill.duration)}
                initial={"hidden"}
                whileInView={"show"}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.1 },
                }}
                viewport={{ once: false, amount: 0.7 }}
                onMouseEnter={() => setHoveredSkill(skill.name)} // Set hovered skill
                onMouseLeave={() => setHoveredSkill(null)} // Clear hovered skill
                onMouseMove={handleMouseMove} // Update mouse position
              >
                {/* Skill Icon */}
                <img
                  src={skill.icon}
                  className="w-12 lg:w-16"
                  alt={`${skill.name} Icon`}
                />
              </motion.div>
            ))}
          </div>

          {/* Tooltip (follows mouse position) */}
          {hoveredSkill && (
            <div
              className="absolute px-2 py-1 text-sm text-white bg-gray-800 rounded-md pointer-events-none"
              style={{
                top: mousePosition.y + 15, // Slight offset below the cursor
                left: mousePosition.x + 15, // Slight offset to the right
                transform: "translate(-50%, -50%)",
                position: "fixed", // Use fixed to follow the viewport
                zIndex: 9999, // Ensure it's above all other elements
              }}
            >
              {hoveredSkill}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
