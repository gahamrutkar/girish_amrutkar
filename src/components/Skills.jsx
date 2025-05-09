import React from "react";
import { motion } from "framer-motion";
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss, SiSpringboot, SiMongodb, SiMysql, SiCplusplus,
} from "react-icons/si";
import { MdComputer } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { PiGraphFill } from "react-icons/pi";

const techSkills = [
  { name: "C/C++", icon: <SiCplusplus className="text-4xl text-blue-800" /> },
  { name: "Java", icon: <FaJava className="text-4xl text-orange-700" /> },
  { name: "Python", icon: <FaPython className="text-4xl text-yellow-500" /> },
  { name: "DBMS", icon: <FaDatabase className="text-4xl text-purple-600" /> },
 
  {
    name: "HTML/CSS",
    icon: (
      <div className="flex gap-2">
        <FaHtml5 className="text-4xl text-orange-500" />
        <FaCss3Alt className="text-4xl text-blue-600" />
      </div>
    ),
  },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-4xl text-cyan-500" /> },
  { name: "ReactJS", icon: <FaReact className="text-4xl text-blue-500 animate-spin-slow" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-4xl text-green-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-4xl text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-600" /> },
  { name: "DSA", icon: <PiGraphFill className="text-4xl text-indigo-700" /> },
];  

const repeatedSkills = [...techSkills, ...techSkills];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 tracking-wide">
          Technical Skills
        </h2>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
          >
            {repeatedSkills.map((skill, index) => (
              <div
                key={index}
                className="min-w-[200px] bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="mb-3 text-8xl">{skill.icon}</div>
                <h3 className="text-center text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
