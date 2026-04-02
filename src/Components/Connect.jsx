import React from "react";

const Connect = () => {
  return (
    <div
      id="connect"
      className="min-h-screen bg-gray-50 flex items-center justify-center px-6 lg:px-20 py-20"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-black">
              Let's <span className="text-gray-400">Connect</span>
            </h2>
            <p className="text-gray-500 mt-6 text-lg max-w-md">
              Have a project in mind or just want to say hi? I’m always open to
              discussing new opportunities and creative ideas.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
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
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform shadow-sm">
                💼
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                  LinkedIn
                </p>
                <p className="text-lg font-semibold text-black">
                  https://www.linkedin.com/in/anuj-hooda-544135351
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Anuj Hooda"
                className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-black focus:bg-white rounded-xl outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Your Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-black focus:bg-white rounded-xl outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-black focus:bg-white rounded-xl outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-black text-white font-bold py-4 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Send Message &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
