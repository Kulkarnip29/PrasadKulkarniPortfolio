import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Trainings = () => {
  const trainings = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description:
        "Gained hands-on practice and learned HTML, CSS, JavaScript, React Js, Node Js, Express Js, Bootstrap, SQL, Data Structure And Algorithms, AWS",
      image: "Full-Stack.png",
      certificate: "MERN StacK Bitcode.jpg",
    },
    {
      id: 2,
      title: ".Net Full Stack Development",
      description:
        "Gained hands-on practice and learned HTML, CSS, JavaScript, JQuery, Tailwindcss, C#, ASP .Net, .Net Core, MS SQL Server",
      image: "DotNetFUllStack.png",
      certificate: "DOTNET Naresh.jpg",
    },
  ];

  const [popup, setPopup] = useState({ open: false, image: "" });

  const openPopup = (image) => setPopup({ open: true, image });
  const closePopup = () => setPopup({ open: false, image: "" });

  // Close popup on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div
      name="trainings"
      className="w-full min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto flex flex-col justify-center"
      >
        {/* Section Header */}
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Training and Certifications
          </h2>
          <p className="py-6 text-lg sm:text-xl">
            Check out some of my Trainings and Certifications
          </p>
        </div>

        {/* Trainings Grid */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {trainings.map(({ id, title, description, image, certificate }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 * id }}
              className="shadow-md shadow-gray-600 rounded-lg bg-tertiary p-4 hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Card Image */}
              <div className="overflow-hidden rounded-md">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover duration-200 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col justify-center items-center mt-4 flex-1">
                <h3 className="text-lg font-semibold text-[#915EFF] mb-2 text-center">
                  {title}
                </h3>
                <p className="text-sm text-center p-2 text-gray-300 mb-4">
                  {description.length > 120
                    ? description.slice(0, 120) + "..."
                    : description}
                </p>
                <button
                  onClick={() => openPopup(certificate)}
                  className="w-1/2 px-6 py-2 mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Check Out!!
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Popup for Certificate */}
      {popup.open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={popup.image}
              alt="Certificate"
              className="w-full h-auto rounded-md shadow-2xl"
            />
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2 font-bold hover:bg-red-700"
            >
              X
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Trainings;
