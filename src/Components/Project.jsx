import React from "react";


const Project = () => {
  const projectList = [
    {
      title: "Snake and Ladders",
      description:
        "A fully functional digital board game with custom logic and responsive UI.",
      tech: ["React", "Tailwind", "Game Logic"],
      image: "src/assets/img/snake-game.png",
      link: "#",
    },
    {
      title: "Shopping Website",
      description: "A modern version with react of a shopping website.",
      tech: ["React", "Tailwind" ,"DaisyUI", "JavaScript"],
      image: "src/assets/img/Preview2.png",
      link: "https://trial-shopping.vercel.app/",
    },
    {
      title: "React Hub",
      description:
        "A website hosted on GitHub, featuring various react projects in single website.",
      tech: ["React", "Vite", "Tailwind"],
      image: "src/assets/img/Preview3.png",
      link: "https://react-projects-beta-lilac.vercel.app",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-white flex items-center justify-center px-6 lg:px-20 py-20"
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-black">
            Featured <span className="text-gray-400">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4">
            A collection of games and web applications I've built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50  rounded-3xl overflow-hidden border border-transparent hover:border-black transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    className="bg-white text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    View Project
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex gap-2 mb-4 ">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-gray-500 uppercase tracking-widest font-bold  bg-gray-200 px-2 py-1 rounded"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
