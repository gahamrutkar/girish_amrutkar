import React from "react";
import { motion } from "framer-motion";

const titles = [
  "Full Stack Developer",
  "Cloud Enthsiast",
  "Tech Enthusiast",
  "Machine Learning Enthusiast",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/myimage.jpg"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-2/3 object-cover"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              👋 Hi, I'm <span className="text-blue-600">Girish Amrutkar</span>
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm a versatile professional with a strong background in software development. I enjoy crafting full-stack applications, ensuring software quality through automation, and diving into the world of cybersecurity and emerging tech.
            </p>

            <p className="text-gray-600 mb-6">
              I thrive in dynamic environments and am always eager to learn, build, and innovate. Whether it's coding scalable applications, automating test suites, or exploring ethical hacking, I love solving problems and pushing boundaries.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              {titles.map((title, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {title}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
