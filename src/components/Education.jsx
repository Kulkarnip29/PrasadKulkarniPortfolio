import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div
      name="education"
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
            Education
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-6 space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-tertiary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold text-[#915EFF]">
              Master Of Computer Application (MCA)
            </h3>
            <p className="text-xl text-gray-300">
              Swami Ramanand Teerth Marathwada University
            </p>
            <p className="text-lg">2024</p>
            <i>
              CGPA: <b>7.25</b>
            </i>
            <p className="mt-2">
              College Name: Institute Of Computer Education (ICE), Latur
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-tertiary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold text-[#915EFF]">
              Bachelor in Computer Science (BSc Computer Science)
            </h3>
            <p className="text-xl text-gray-300">
              Swami Ramanand Teerth Marathwada University
            </p>
            <p className="text-lg">2022</p>
            <i>
              CGPA: <b>9.11</b>
            </i>
            <p className="mt-2">
              College Name: College Of Computer Science And Information
              Technology (COCSIT), Latur
            </p>
          </motion.div>

          {/* Add more education entries as needed */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
