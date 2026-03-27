import React from "react";

const About = () => {
  const handleScrollToProjects = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-white flex items-center justify-center px-6 lg:px-20 py-20"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative flex justify-center">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <img
            src="src/assets/img/me.jpeg"
            alt="Anuj Hooda"
            className="relative z-10 w-full max-w-sm lg:max-w-md rounded-2xl shadow-2xl object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-black">
              About <span className="text-gray-400">Me</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I’m a developer who loves building things for the web. Whether
              it's complex backend architecture or a pixel-perfect frontend
              interface, I focus on creating seamless user experiences.
            </p>
            <p className="text-gray-500">
              Currently, I'm working on several React-based projects, including
              game dashboards and a website with a combination of various react
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-gray-200 rounded-2xl border border-transparent hover:border-gray-200 transition-all shadow-sm">
              <h3 className="font-bold text-xl mb-2 text-black">Frontend</h3>
              <p className="text-sm text-gray-500 font-medium">
                React, Tailwind, DaisyUI
              </p>
            </div>

            <div className="p-6 bg-black text-white rounded-2xl shadow-lg transform translate-y-2">
              <h3 className="font-bold text-xl mb-2">Backend</h3>
              <p className="text-sm text-gray-400 font-medium">
                Node.js, Express, MongoDB
              </p>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleScrollToProjects}
              className="group flex items-center gap-2 border-b-2 border-black pb-1 font-bold text-lg text-gray-800 hover:text-black hover:border-gray-400 transition-all"
            >
              View My Projects
              <span className="group-hover:translate-x-2 transition-transform">
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
