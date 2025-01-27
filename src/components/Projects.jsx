import { image } from "framer-motion/client";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Nike_Clone",
      description: "Nike Store online E-Commerce Platform Developed using React Js, Javascript and Tailwind Css",
      image: "nikecloneIMG.png",
      url: "https://675c3d3c8e8b42269d538365--nikecloneprasadk.netlify.app/"
    },
    // Add more projects here
    {
      id: 2,
      title: "ProtfolioWeb",
      description: "Personal Portfolio website Developed USing React Js, Javascript, TailwindCSS Check it Out!!",
       image:"Portfolio_website.png",
      url: "http://localhost:5173/"
    },
  ];

  return (
    <div name="projects" className="w-full h-screen bg-primary text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ id, title, description, image, url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={image}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-lg font-semibold mt-2">{title}</h3>
                <p className="text-sm text-center p-2">{description}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;