import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <div id="resume" className="w-full flex justify-center items-center py-10 bg-primary text-white">
      <div className="floating-resume bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-2xl mx-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-6">Download My Resume</h2>
          <p className="mb-6 text-lg leading-relaxed">
            Take a closer look at my professional journey, skills, and accomplishments.
          </p>
          <a
            href="https://drive.google.com/file/d/1-TPH8jcJ7Ks9wp83tJfKjD7HqNJMvuH5/view?usp=sharing"
            download="PrasadKulkarni_Resume.pdf"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition-transform duration-300 transform hover:scale-105"
          >
            <FaFileDownload className="mr-3" size={24} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
