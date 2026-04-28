import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/img/Preview2.png";
import project2 from "../assets/img/Preview3.png";
import project3 from "../assets/img/project3.png";

const Project = () => {
  const projectList = [
    {
      title: "Shopping Website",
      description: "A modern version with react of a shopping website.",
      tech: ["React", "Tailwind", "DaisyUI", "JavaScript"],
      image: project1,
      link: "https://trial-shopping.vercel.app/",
    },
    {
      title: "React Hub",
      description: "A website hosted on GitHub, featuring various react projects in single website.",
      tech: ["React", "Vite", "Tailwind"],
      image: project2,
      link: "https://react-projects-beta-lilac.vercel.app",
    },
    {
      title: "Digital Marketing Website",
      description: "A fully functional digital website with modern design and responsive UI.",
      tech: ["React", "Tailwind", "DaisyUI", "JavaScript"],
      image: project3, 
      link: "https://digital-marketing-website-project.vercel.app/",
    },
  ];

  // Container variant for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card variant
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <div
      id="projects"
      className="min-h-screen bg-white flex items-center justify-center px-6 lg:px-20 py-20 overflow-hidden"
    >
      <div className="max-w-6xl w-full">
        {/* Header Animation */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold text-black">
            Featured <span className="text-gray-400">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4">
            A collection of games and web applications I've built.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }} // Lifts the card up on hover
              className="group bg-gray-50 rounded-3xl overflow-hidden border border-transparent hover:border-black transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all"
                  >
                    View Project
                  </motion.a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-gray-500 uppercase tracking-widest font-bold bg-gray-200 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;