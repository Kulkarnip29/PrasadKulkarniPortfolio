import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div name="experience" className="w-full min-h-screen bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto flex flex-col justify-center"
      >
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-tertiary rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#915EFF]">
                Frontend Developer Intern
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mt-2 sm:mt-0">
                GyamaTech (May 2023 - Oct 2023)
              </p>
            </div>

            <ul className="space-y-4 text-base sm:text-lg">
              <motion.li 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#915EFF] before:rounded-full leading-relaxed"
              >
                As a frontend developer intern at Gyamatech.com, I played a
                pivotal role in crafting responsive and visually appealing
                websites. Working closely with a team of experienced developers,
                designers, and project managers, I contributed to the creation of
                dynamic web experiences that seamlessly integrate user interface
                design with functionality.
              </motion.li>

              <motion.li 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#915EFF] before:rounded-full leading-relaxed"
              >
                <span className="font-semibold text-[#915EFF]">Key Responsibilities:</span>
                <br />
                Developed and maintained responsive websites using HTML, CSS, and 
                JavaScript, ensuring compatibility across various browsers and devices. 
                Collaborated with design and development teams to implement user 
                interface designs, incorporating best practices for usability and 
                user experience. Conducted thorough testing and debugging to optimize 
                website performance and functionality. Assisted in the creation and 
                implementation of web development strategies, contributing innovative 
                ideas and solutions to enhance project outcomes. Participated in team 
                meetings and project discussions, providing valuable insights and 
                recommendations for improving frontend development processes.
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;