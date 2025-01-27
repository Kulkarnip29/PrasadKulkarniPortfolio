import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto flex flex-col justify-center"
      >
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        <div className="space-y-6 text-base sm:text-lg lg:text-xl">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="leading-relaxed"
          >
            I am Prasad Kulkarni, a motivated and skilled Software Developer with
            a strong foundation in Full Stack and .NET development. Leveraging a
            comprehensive educational background in Computer Science (BSc) and an
            MCA, along with certifications in Web Full Stack and .NET Full Stack
            Development, I bring a versatile skill set to the table. My technical
            expertise spans modern web technologies and .NET frameworks, including
            ASP.NET, C#.NET, OOPS, ADO.NET, HTML5, CSS3, JavaScript, React.js,
            Vue.js, Bootstrap, Go, Express.js, MongoDB, and Microsoft SQL Server.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="leading-relaxed"
          >
            This robust skill set enables me to excel in building secure,
            scalable, and feature-rich software solutions tailored to meet client
            needs. I am adept at the full software development lifecycle, from
            requirement gathering to deployment. My analytical and problem-solving
            abilities allow me to tackle challenges effectively and deliver
            innovative solutions. Whether it's crafting responsive frontends,
            optimizing backend systems, or ensuring cross-browser compatibility, I
            strive for excellence in every aspect of development.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="leading-relaxed"
          >
            Key strengths include: Proficient in RESTful API development, version
            control using Git, and MySQL database management. Strong knowledge of
            responsive design principles and cross-browser compatibility. A
            results-oriented mindset, excelling in team collaboration, leadership,
            and stakeholder communication. Exceptional interpersonal,
            motivational, and facilitation skills, thriving in fast-paced, dynamic
            environments. Passionate about innovation, I am always eager to take
            on new challenges, lead projects, and collaborate with teams to
            deliver exceptional results. Let's connect to explore opportunities to
            bring impactful ideas to life!
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;