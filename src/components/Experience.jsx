import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Claim Specialist Intern – Healthcare Analytics",
    company: "AArete",
    duration: "Jul 2025 – Present.. | Pune, Maharashtra (On-site)",
    skills: "Python, SQL, Excel, Power BI, Data Analytics, HIPAA Compliance",
    responsibilities: [
      "Analyzed US healthcare claims data using Python and SQL to detect fraudulent, duplicate, and incorrect claims, improving accuracy by 15%.",
      "Developed Python scripts to automate data validation tasks, reducing manual effort and increasing processing speed by 25%.",
      "Built interactive Power BI dashboards to monitor claim trends, provider performance, and cost-saving opportunities.",
      "Collaborated with cross-functional teams to streamline reimbursement processes and reduce operational bottlenecks.",
      "Ensured HIPAA compliance while handling sensitive patient data."
    ]
  },
{
    title: "Freelance Web Developer",
    projectName: "Shreeswami Samarth Edu",
    projectLink: "https://shreeswamisamrthedu.netlify.app/",
    company: "Freelance Project",
    duration: "Aug 2025 – Aug 2025",
    skills: "React.js, Tailwind CSS, HTML5, CSS3, JSON, GitHub, CI/CD, Netlify, Responsive Design",
    responsibilities: [
      "Developed a responsive, user-friendly school website using React.js, Tailwind CSS, HTML5, CSS3, JSON, and GitHub.",
      "Designed wireframes and modular React components for homepage, events, announcements, and contact sections.",
      "Implemented CI/CD pipelines with GitHub Actions and deployed to Netlify.",
      "Optimized site for SEO, performance, and mobile responsiveness, delivering a production-ready site that simplified content updates for staff."
    ]
  },
   {
    title: "Junior Full Stack Developer – Trainee",
    company: "Zizbey",
    duration: "Nov 2024 – Dec 2024 | Pune, Maharashtra",
    skills: "Vue.js, Vuetify, React.js, Node.js, Golang, PostgreSQL, REST API",
    responsibilities: [
      "Developed CRM and HRM modules using Vue.js, Vuetify, React.js, Node.js, Golang, and PostgreSQL.",
      "Designed REST APIs and optimized database queries for improved backend performance.",
      "Collaborated with team members to deliver end-to-end solutions and ensure application scalability."
    ]
  },


  {
    title: "Full Stack Web Developer – Trainee (Training Institute)",
    company: "BitCode Technologies Pvt. Ltd.",
    duration: "May 2024 – Sep 2024 | Pune, Maharashtra",
    skills: "MERN Stack, React.js, Node.js, Express.js, MongoDB, SQL, REST API, JWT, JSON, HTML5, CSS3, Tailwind CSS, AWS Basics, DSA, Basic Testing",
    responsibilities: [
      "Hands-on training in full-stack web development and real-time client projects.",
      "Implemented secure authentication and authorization systems and collaborated on client requirement discussions.",
      "Gained practical experience with CI/CD pipelines and deployment processes."
    ]
  },
 
  {
    title: "Frontend Developer Intern",
    company: "GyamaTech",
    duration: "May 2023 – Oct 2023 | Pune, Maharashtra (Remote)",
    skills: "HTML5, CSS3, JavaScript, MERN Stack, Responsive Design",
    responsibilities: [
      "Developed responsive websites using HTML, CSS, JavaScript, and MERN stack components.",
      "Collaborated with design and development teams to implement UI/UX best practices.",
      "Conducted testing and debugging to optimize performance and ensure cross-browser compatibility.",
      "Participated in team meetings and provided suggestions to improve frontend development processes."
    ]
  },
  {
    title: "Full Stack Developer – Trainee",
    company: "Naresh i Technologies",
    duration: "Sep 2022 – Feb 2023 | Hyderabad, Telangana",
    skills: "C# .NET, ASP.NET Core, React.js, HTML, CSS, Bootstrap, jQuery, SQL Server, LINQ, ADO.NET",
    responsibilities: [
      "Built multiple web and software applications using C# .NET, ASP.NET Core, React.js, HTML, CSS, Bootstrap, jQuery, SQL Server, LINQ, and ADO.NET.",
      "Developed databases, APIs, and responsive frontends while collaborating with mentors and peers.",
      "Gained comprehensive full-stack development experience and hands-on exposure to real-world projects."
    ]
  },
  
];

const Experience = () => {
  return (
    <div name="experience" className="w-full min-h-screen bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto flex flex-col justify-center"
      >
        <div className="pb-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            Experience
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            My professional journey in web development, full-stack technologies, and healthcare analytics.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
              className="bg-tertiary rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#915EFF]">{exp.title}</h3>
                <p className="text-lg sm:text-xl text-gray-300 mt-2 sm:mt-0">{exp.company} ({exp.duration})</p>
              </div>

              <p className="text-gray-400 mb-4">
                <span className="font-semibold text-[#915EFF]">Skills:</span> {exp.skills}
              </p>

              {exp.projectLink && (
                <p className="text-gray-400 mb-4">
                  <span className="font-semibold text-[#915EFF]">Project:</span>{" "}
                  <a href={exp.projectLink} target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-500">
                    {exp.projectName}
                  </a>
                </p>
              )}

              <ul className="space-y-3 text-base sm:text-lg">
                {exp.responsibilities.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#915EFF] before:rounded-full leading-relaxed"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
