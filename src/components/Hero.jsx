import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 pt-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
            <h1 className="font-black text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[80px] leading-tight lg:leading-[98px]">
              Hi, I'm <span className="text-[#915EFF]">Kulkarni Prasad</span>
            </h1>
            <p className="text-[#dfd9ff] font-medium text-lg sm:text-xl lg:text-2xl xl:text-[30px] mt-4 lg:mt-6">
              I develop web applications, user{" "}
              <br className="hidden sm:block" />
              interfaces and software solutions
            </p>
          </div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
              {/* Glowing Background */}
              <div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse" 
                style={{ filter: 'blur(15px)', opacity: '0.5' }}
              />
              
              {/* Profile Image */}
              <img
                src="/pkimg1.jpg" // Make sure the image is in the public folder
                alt="Prasad Kulkarni"
                className="rounded-full w-full h-full object-cover border-4 border-[#915EFF] relative z-10"
              />
              
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [-10, 10] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute -top-4 -right-4 bg-white text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold shadow-lg z-20 text-sm sm:text-base"
              >
                Full Stack
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute -bottom-4 -left-4 bg-[#915EFF] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold shadow-lg z-20 text-sm sm:text-base"
              >
                Developer
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 w-full left-0 flex justify-center">
          <a href="#about" className="hover:opacity-80 transition-opacity">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;