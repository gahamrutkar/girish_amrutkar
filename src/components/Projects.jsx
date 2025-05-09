import React, { useRef } from "react";
import Slider from "react-slick";

const projects = [
  {
    id: 1,
    title: "AIDAS: AI-Based Intelligent Driver Assistance System",
    description:
      "This project focuses on building an AI-powered driver-assistance system aimed at enhancing road safety and efficiency.",
    image: "/image1.png",
    tech: ["YOLO", "AI", "Cloud"],
    category: "AI",
  },
  {
    id: 2,
    title: "Smart Student Assessment and Recommendation System Using Machine Learning",
    description:
      "EduTracker is a web-based platform that assesses student performance and offers personalized learning recommendations using machine learning.",
    image: "/image2.png",
    tech: ["React.js", "Mongo DB", "Express.JS", "HTML", "CSS"],
    category: "Website",
  },
  {
    id: 3,
    title: "Email Spam Detection Using Machine Learning and NLP",
    description:
      "SmartMail is a machine learning-based email spam classifier that distinguishes spam from legitimate emails using natural language processing techniques.",
    image: "/image3.png",
    tech: ["XG Boost", "NLP Algorithm", "Machine Learning"],
    category: "Website",
  },
  {
    id: 4,
    title: "Automated Onboarding Form Processing System",
    description:
      "The Automated Onboarding Form Processing System aims to streamline the process of managing and processing onboarding forms by automating data extraction, validation, and integration.",
    image: "/image.png",
    tech: ["Flask", "Fitz", "My SQL"],
    category: "Website",
  },
];

const Projects = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-160px)] flex items-center justify-center py-20 bg-gradient-to-br from-slate-900 to-gray-950 text-white"
    >
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          My Projects
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-[-30px] sm:left-[-50px] text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full z-10 shadow-md"
          >
            ⟵
          </button>

          {/* Slider */}
          <div className="w-full max-w-4xl">
            <Slider ref={sliderRef} {...settings}>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-center h-full text-center"
                >
                  <div className="bg-gray-800 rounded-3xl shadow-lg p-8 sm:p-10 w-full transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full max-h-80 object-cover rounded-xl mb-6 shadow-md"
                    />
                    <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-600/30 backdrop-blur-sm text-blue-100 text-xs sm:text-sm font-medium px-3 py-1 rounded-full shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-[-30px] sm:right-[-50px] text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full z-10 shadow-md"
          >
            ⟶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
