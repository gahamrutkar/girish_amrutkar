import React, { useState } from "react";
import Slider from "react-slick";

const projects = [
  {
    id: 1,
    title: "Hostel Management System",
    description:
      "A web app to manage hostel operations like room allocation, billing, and student management.",
    image: "https://via.placeholder.com/800x600",
    tech: ["React", "TailwindCSS", "MySQL", "Java"],
    category: "web",
  },
  {
    id: 2,
    title: "Academic ERP Portal",
    description:
      "Secure registration/login with Captcha, course registration, attendance upload, OTP and email notifications.",
    image: "https://via.placeholder.com/800x600",
    tech: ["HTML", "CSS", "Javascript", "Java", "Spring Boot", "MySQL"],
    category: "web",
  },
  {
    id: 3,
    title: "Image Encryption in Python",
    description:
      "Encrypt and decrypt images using DES algorithm with password protection using Python Tkinter.",
    image: "https://via.placeholder.com/800x600",
    tech: ["Python", "Tkinter", "Cryptography"],
    category: "desktop",
  },
  {
    id: 4,
    title: "Class Photo Attendance System",
    description:
      "A smart attendance system using image processing with Flask backend and Firebase integration.",
    image: "https://via.placeholder.com/800x600",
    tech: ["Python", "Flask", "Flutter", "Firebase"],
    category: "ai",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
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

        <div className="flex items-center justify-center">
          <div className="w-full max-w-4xl">
            <Slider {...settings}>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-center h-full text-center"
                >
                  <div className="bg-gray-800 rounded-3xl shadow-lg p-8 sm:p-10 w-full transform transition duration-300 hover:scale-105 hover:shadow-2xl">
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
