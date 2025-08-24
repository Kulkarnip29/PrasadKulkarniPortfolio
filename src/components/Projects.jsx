import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "S M Sanskar Bharti School Project",
      description:
        "I developed the official website for Shree S M Sanskar Bharti Public School using Vite and Tailwind CSS, ensuring a clean, responsive, and user-friendly design. The site features well-structured sections such as Home, About, Academics, Admissions, Gallery, and Contact, with smooth navigation and optimized layouts for mobile and desktop. It includes an event photo gallery and a functional contact form for inquiries. Deployed on Netlify with GitHub integration for continuous deployment, the project also incorporates SEO essentials like meta tags and Google Search Console verification. This project demonstrates my skills in front-end development, deployment, and SEO optimization.",
      image: "S M Sanskar Bharti School Freelancing project",
      url: "https://shreeswamisamrthedu.netlify.app/",
    },

    {
      id: 2,
      title: "Nike_Clone",
      description:
        "Nike Store online E-Commerce Platform Developed using React Js, Javascript and Tailwind Css",
      image: "nikecloneIMG.png",
      url: "https://675c3d3c8e8b42269d538365--nikecloneprasadk.netlify.app/",
    },
    {
      id: 3,
      title: "ProtfolioWeb",
      description:
        "Personal Portfolio website Developed Using React Js, Javascript, TailwindCSS Check it Out!!",
      image: "Portfolio_website.png",
      url: "https://prasadkulkarniportfolio.netlify.app/",
    },
  ];

  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-primary text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto flex flex-col justify-center"
      >
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </h2>
          <p className="py-6">Check out some of my work</p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {projects.map(({ id, title, description, image, url }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 * id }}
              className="shadow-md shadow-gray-600 rounded-lg bg-tertiary p-6 hover:shadow-xl transition-shadow"
            >
              <img
                src={image}
                alt={title}
                className="rounded-md duration-200 hover:scale-105 mb-4"
              />
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-lg font-semibold text-[#915EFF]">
                  {title}
                </h3>
                <p className="text-sm text-center p-2 text-gray-300">
                  {description}
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-2 mt-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
