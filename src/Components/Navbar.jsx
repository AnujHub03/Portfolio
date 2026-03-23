import React,{ useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }, 
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { name: "Home", id: "home" }, 
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Connect", id: "contact" }, 
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 lg:px-20 py-4 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div
          className={`text-2xl font-black cursor-pointer transition-colors duration-300 ${isScrolled ? "text-white" : "text-black"}`}
          onClick={() => scrollToSection("home")}
        >
          ANUJ<span className="text-gray-400">.</span>
        </div>

        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 group ${
                activeSection === link.id
                  ? isScrolled
                    ? "text-white"
                    : "text-black"
                  : isScrolled
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-black"
              }`}
            >
              {link.name}

              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-gray-400 transition-all duration-500 ${
                  activeSection === link.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
