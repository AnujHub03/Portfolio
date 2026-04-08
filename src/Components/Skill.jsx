import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Bootstrap","DaisyUI","ChakraUI"],
      icon: "🎨",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "php"],
      icon: "⚙️",
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
      icon: "💾",
    },
    {
      title: "Tools & Others",
      skills: ["Git & GitHub", "Postman", "Vite", "Responsive Design"],
      icon: "🛠️",
    },
  ];

  // Container variant to handle the staggering of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card
      },
    },
  };

  // Individual card variant
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <div id="skills" className="min-h-screen bg-gray-50 flex items-center justify-center px-6 lg:px-20 py-20 overflow-hidden">
      <div className="max-w-6xl w-full">
        {/* Header Animation */}
        <motion.div 
          className="mb-16 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold text-black">
            My <span className="text-gray-400">Skills</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg">
            I enjoy diving into new technologies and constantly expanding my stack to build better digital products.
          </p>
        </motion.div>

        {/* Skills Grid with Staggered Children */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                borderColor: "rgba(0,0,0,1)" 
              }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-transparent transition-colors duration-300 group cursor-default"
            >
              <motion.div 
                className="text-4xl mb-4 inline-block"
                whileHover={{ rotate: [0, -10, 10, 0] }} // Fun wiggle effect on icon hover
                transition={{ duration: 0.5 }}
              >
                {category.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4 text-black">{category.title}</h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <motion.li 
                    key={i} 
                    className="text-gray-600 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }} // Stagger inner list items slightly
                  >
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;