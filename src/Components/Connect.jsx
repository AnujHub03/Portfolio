import React from "react";
import { motion } from "framer-motion";

const Connect = () => {
  // Variants for the left-side text/info
  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, staggerChildren: 0.2 } 
    }
  };

  // Variants for the form card
  const formVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.6, delay: 0.3 } 
    }
  };

  return (
    <div
      id="connect"
      className="min-h-screen bg-gray-50 flex items-center justify-center px-6 lg:px-20 py-20 overflow-hidden"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Text and Contact Info */}
        <motion.div 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={infoVariants}
        >
          <motion.div variants={infoVariants}>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-black">
              Let's <span className="text-gray-400">Connect</span>
            </h2>
            <p className="text-gray-500 mt-6 text-lg max-w-md">
              Have a project in mind or just want to say hi? I’m always open to
              discussing new opportunities and creative ideas.
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Email Link */}
            <motion.div 
              variants={infoVariants}
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full group-hover:rotate-12 transition-transform">
                📧
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                  Email Me
                </p>
                <p className="text-lg font-semibold text-black">
                  Hoodaanuj03@example.com
                </p>
              </div>
            </motion.div>

            {/* LinkedIn Link */}
            <motion.div 
              variants={infoVariants}
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center rounded-full group-hover:rotate-12 transition-transform shadow-sm">
                💼
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                  LinkedIn
                </p>
                <p className="text-lg font-semibold text-black break-all">
                  linkedin.com/in/anuj-hooda
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formVariants}
        >
          <form className="space-y-5">
            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Anuj Hooda"
                className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-black focus:bg-white rounded-xl outline-none transition-all"
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Your Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-black focus:bg-white rounded-xl outline-none transition-all"
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-black focus:bg-white rounded-xl outline-none transition-all resize-none"
              ></textarea>
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-black text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Send Message &rarr;
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Connect;