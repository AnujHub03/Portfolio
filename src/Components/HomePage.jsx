import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/img/background.png";
import bghero from "../assets/img/heroimg1.png";
import myCV from "../assets/doc/myCV.pdf";

const Home = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays the start of each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = myCV;
    link.download = "Anuj_Hooda_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div  style={{ backgroundImage: `url(${bg})` }} className=" bg-cover bg-center min-h-screen flex items-center justify-center px-6 py-12 lg:px-20">
      <motion.div 
        className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-5xl gap-10 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <header>
            <motion.h4 
              variants={itemVariants}
              className="text-gray-600 uppercase tracking-[0.2em] font-bold text-xs md:text-sm lg:text-base mb-2"
            >
              Hello! This is Anuj Hooda
            </motion.h4>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-black"
            >
              Creative <span className="text-gray-400">Web Developer</span>
              <span className="text-xl md:text-3xl lg:text-4xl block mt-4 font-medium text-gray-700">
                Frontend | Backend
              </span>
            </motion.h1>
          </header>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
          >
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
             onClick={handleDownload}
              className="border-2 border-gray-300 hover:border-black text-gray-700 px-10 py-3 rounded-md transition-all duration-300 hover:shadow-lg font-semibold"
            >
              Download CV
            </button>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div 
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative group">
            <motion.img
              src={bghero}
              alt="Anuj Hooda"
              className="w-56 h-72 sm:w-72 sm:h-96 lg:w-[400px] lg:h-[550px] object-cover rounded-2xl "
              // Floating animation
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home; 