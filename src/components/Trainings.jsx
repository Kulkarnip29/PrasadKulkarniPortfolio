import React from 'react'
import { image } from "framer-motion/client";

const Trainings = () => {
  const trainings = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Gained hands on practice and learned the HTML,CSS, JavaScript, React Js, Node Js, Express Js, Node Js, Bootstrap,SQL, Data Structure And Algorithms,AWS",
      image: "Full-Stack.png",
      url: "#"
    },
    // Add more trainings here
    {
      id: 2,
      title: ".Net Full Stack Development",
      description: "Gained Hands on Practice and learned the HTML, CSS, JavaScript, JQuery,Tailwindcss, C#, ASP .Net, .Net Core,MS SQL Server",
       image:"DotNetFUllStack.png",
      url: "#"
    },
  ];
  return (
    <div name="trainings" className="w-full h-screen bg-primary text-white">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Training and Certifications
        </p>
        <p className="py-6">Check out some of my Trainings And Certifications </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {trainings.map(({ id, title, description, image, url }) => (
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
                Check Out!!
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Trainings
