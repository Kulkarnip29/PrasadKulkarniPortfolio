import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaNpm,
  FaDatabase,
  FaAws
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiDotnet,
  SiWordpress,
  SiNextdotjs,
  SiGithub
} from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-400" /> },
    { name: "React", icon: <FaReact size={50} className="text-cyan-400" /> },
    { name: "Next Js", icon: <SiNextdotjs size={50} className="text-gray-500"/>},
    { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500" /> },
    { name: ".Net", icon: <SiDotnet size={50} className="text-purple-500" />},
    { name: "Java", icon: <FaJava  size={50} className="text-white-100" />},
    { name: "Express", icon: <SiExpress size={50} className="text-gray-500" /> },
    { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-600" /> },
    { name: "Redux", icon: <SiRedux size={50} className="text-purple-500" /> },
    { name: "Git", icon: <FaGitAlt size={50} className="text-orange-600" /> },
    { name: "GitHub", icon: <SiGithub size={50} className="text-gray-400"/>},
    { name: "npm", icon: <FaNpm size={50} className="text-red-500" /> },
    { name: "SQL", icon: <FaDatabase size={50} className="text-blue-400" /> },
    {name: "Aws", icon: <FaAws size={50} className="text-orange-500"/>},
    { name: "Tailwind", icon: <SiTailwindcss size={50} className="text-cyan-400" /> },
    { name: "WordPress", icon: <SiWordpress size={50} className="text-sky-600"/>}
  ];

  const interpersonalSkills = [
    "Communication",
    "Leadership",
    "Problem Solving",
    "Team Collaboration",
    "Time Management",
    "Adaptability"
  ];

  return (
    <div name="skills" className="w-full min-h-screen bg-primary text-white py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
        </div>
        
        <div className="w-full">
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-tertiary p-6 rounded-lg flex flex-col items-center justify-center hover:scale-105 duration-200 group"
                >
                  <div className="mb-4 group-hover:animate-bounce">
                    {skill.icon}
                  </div>
                  <p className="text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8">Interpersonal Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {interpersonalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-tertiary px-4 py-6 rounded-lg text-center hover:scale-105 duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;