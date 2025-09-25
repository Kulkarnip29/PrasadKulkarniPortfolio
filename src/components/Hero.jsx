import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Twitter removed for clarity

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[80px] leading-tight lg:leading-[98px]"
          >
            Hi, I'm <span className="text-[#915EFF]">Prasad Kulkarni</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#dfd9ff] font-medium text-lg sm:text-xl lg:text-2xl xl:text-[30px] mt-4 lg:mt-6"
          >
            I develop{" "}
            <span className="text-[#915EFF] font-semibold">
              <Typewriter
                words={[
                  "Web Applications",
                  "User Interfaces",
                  "Full-Stack Solutions",
                  "React & Tailwind Developer",
                  "Cloud-Ready Apps"
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.p>

          {/* Download CV & Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            {/* Scroll to Resume Section */}
            <a
              href="#resume"
              className="bg-[#915EFF] hover:bg-[#7a4efc] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all"
            >
              Download CV
            </a>

            <div className="flex gap-4 mt-4 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/prasad-kulkarni29/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#0A66C2] text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Kulkarnip29"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 text-2xl"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 flex justify-center items-center relative"
        >
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
            {/* Glowing Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse opacity-50 blur-3xl" />
            {/* Profile Image */}
            <img
              src="/PrasadKulkarni_IMG.png"
              alt="Prasad Kulkarni"
              className="rounded-full w-full h-full object-cover border-4 border-[#915EFF] relative z-10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <a href="#about" className="hover:opacity-80 transition-opacity">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-[#915EFF] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
