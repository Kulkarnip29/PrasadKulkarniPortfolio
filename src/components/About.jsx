import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-primary text-white py-20 px-4 sm:px-6 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto flex flex-col justify-center"
      >
        {/* Section Title */}
        <div className="pb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            About Me
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            A glimpse into my professional journey and expertise.
          </p>
        </div>

        {/* About Content */}
        <div className="space-y-8 text-base sm:text-lg lg:text-xl leading-relaxed">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300"
          >
            I am <span className="text-[#915EFF] font-semibold">Prasad Kulkarni</span>, a motivated and skilled Software Developer with
            expertise in <span className="text-[#915EFF] font-semibold">Full Stack</span> and <span className="text-[#915EFF] font-semibold">.NET</span> development. 
            I hold a strong educational foundation in Computer Science (BSc) and an ongoing <span className="text-[#915EFF] font-semibold">MCA</span>, complemented by certifications in 
            <span className="text-[#915EFF] font-semibold"> Web Full Stack</span> and <span className="text-[#915EFF] font-semibold">.NET Full Stack Development</span>. 
            My technical skill set includes <span className="text-[#915EFF] font-semibold">ASP.NET, C#.NET, OOPS, ADO.NET, HTML5, CSS3, JavaScript, React.js, Vue.js, Bootstrap, Go, Express.js, MongoDB, SQL Server</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300"
          >
            My expertise allows me to build <span className="text-[#915EFF] font-semibold">secure, scalable, and feature-rich software solutions</span> tailored to client needs. 
            I excel in the full software development lifecycle, from <span className="text-[#915EFF] font-semibold">requirement gathering</span> to deployment. 
            I bring analytical and problem-solving abilities to tackle complex challenges, craft responsive frontends, optimize backend systems, and ensure cross-browser compatibility.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300"
          >
            Key strengths include: <span className="text-[#915EFF] font-semibold">RESTful API development, Git version control, MySQL, responsive design, cross-browser compatibility</span>. 
            I have a <span className="text-[#915EFF] font-semibold">results-oriented mindset</span>, excelling in team collaboration, leadership, and stakeholder communication. 
            I thrive in fast-paced environments, bringing <span className="text-[#915EFF] font-semibold">innovation and problem-solving</span> to every project. 
            Passionate about technology, I am eager to lead initiatives, collaborate with teams, and deliver impactful solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-300"
          >
            Let's connect and explore opportunities to turn ideas into high-quality, real-world software solutions.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
