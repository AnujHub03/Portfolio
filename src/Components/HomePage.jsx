import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-[url('src/assets/img/background.png')] bg-cover bg-center min-h-screen flex items-center justify-center px-6 py-12 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-5xl gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <header>
              <h4 className="text-gray-600 uppercase tracking-[0.2em] font-bold text-xs md:text-sm lg:text-base mb-2">
                Hello! This is Anuj Hooda
              </h4>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-black">
                Creative <span className="text-gray-400">Web Developer</span>
                <span className="text-xl md:text-3xl lg:text-4xl block mt-4 font-medium text-gray-700">
                  Frontend | Backend
                </span>
              </h1>
            </header>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="bg-black hover:bg-gray-800 text-white px-10 py-3 rounded-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 font-semibold text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hire me
              </a>

              <button
                className="border-2 border-gray-300 hover:border-black text-gray-700 px-10 py-3 rounded-md transition-all duration-300 hover:shadow-lg font-semibold"
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gray-100 rounded-2xl -z-10 group-hover:bg-gray-200 transition-colors duration-500"></div>

              <img
                src="src/assets/img/.jpeg"
                alt="Anuj Hooda"
                className="w-56 h-72 sm:w-72 sm:h-96 lg:w-[400px] lg:h-[550px] object-cover rounded-2xl shadow-2xl  hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
