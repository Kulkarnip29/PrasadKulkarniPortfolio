import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "S M Sanskar Bharti School Project (PWA)",
      description:
        "I developed the official Progressive Web Application(PWA) for Shree S M Sanskar Bharti Public School using Vite and Tailwind CSS, ensuring a clean, responsive, and user-friendly design. The site features well-structured sections such as Home, About, Academics, Admissions, Gallery, and Contact, with smooth navigation and optimized layouts for mobile and desktop. It includes an event photo gallery and a functional contact form for inquiries. Deployed on Netlify with GitHub integration for continuous deployment, the project also incorporates SEO essentials like meta tags and Google Search Console verification. This project demonstrates my skills in front-end development, deployment, and SEO optimization , Mobile Friendly and easy to downlaod on any devices.",
      image: "SM Sanskarbhartipublicschoolwerb.png",
      url: "https://shreeswamisamrthedu.netlify.app/",
    },
    {
      id: 2,
      title: "Nike Clone",
      description:
        "Nike Store online E-Commerce Platform Developed using React Js, Javascript and Tailwind Css",
      image: "nikecloneIMG.png",
      url: "https://675c3d3c8e8b42269d538365--nikecloneprasadk.netlify.app/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Personal Portfolio website Developed Using React Js, Javascript, TailwindCSS. Check it out!",
      image: "Portfolio_website.png",
      url: "https://prasadkulkarniportfolio.netlify.app/",
    },
  ];

  const [readMore, setReadMore] = useState({});

  const toggleReadMore = (id) => {
    setReadMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto flex flex-col justify-center"
      >
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </h2>
          <p className="py-6 text-lg sm:text-xl">Check out some of my work</p>
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
              className="bg-tertiary rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="rounded-t-lg w-full h-48 sm:h-56 md:h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <h3 className="text-xl font-semibold text-[#915EFF] mb-2">
                  {title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {readMore[id] ? description : `${description.slice(0, 100)}...`}
                  {description.length > 100 && (
                    <button
                      onClick={() => toggleReadMore(id)}
                      className="text-cyan-400 ml-2 font-semibold hover:underline"
                    >
                      {readMore[id] ? "Show Less" : "Read More"}
                    </button>
                  )}
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 px-4 rounded-md hover:scale-105 transition-transform duration-300 font-semibold"
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
