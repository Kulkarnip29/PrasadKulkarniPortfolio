import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full">
          <div className="w-full lg:w-1/2">
            <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
              Hi, I'm <span className="text-[#915EFF]">Prasad Kulkarni</span>
            </h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
              I develop web applications, user <br className="sm:block hidden" />
              interfaces and software solutions
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse" style={{ filter: 'blur(15px)', opacity: '0.5' }}></div>
              <img
                src="../pkimg1.jpg" 
                alt="Prasad"
                className="rounded-full w-full h-full object-cover border-4 border-[#915EFF] relative z-10"
              />
              
              {/* Floating badges */}
              <motion.div
                animate={{
                  y: [-10, 10],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute -top-4 -right-4 bg-white text-primary px-4 py-2 rounded-full font-bold shadow-lg z-20"
              >
                Full Stack
              </motion.div>
              
              <motion.div
                animate={{
                  y: [10, -10],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute -bottom-4 -left-4 bg-[#915EFF] text-white px-4 py-2 rounded-full font-bold shadow-lg z-20"
              >
                Developer
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
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
    </section>
  );
};

export default Hero;