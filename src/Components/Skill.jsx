import React from "react";

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

  return (
    <div id="skills" className="min-h-screen bg-gray-50 flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-black">
            My <span className="text-gray-400">Skills</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg">
            I enjoy diving into new technologies and constantly expanding my stack to build better digital products.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-transparent hover:border-black transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;