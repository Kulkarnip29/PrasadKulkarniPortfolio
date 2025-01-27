import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="floating-resume bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 max-w-2xl mx-4">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Download My Resume</h2>
          <p className="mb-5">Get a detailed overview of my skills and experience</p>
          <a
            href="https://drive.google.com/file/d/1mt2IZ55kqiR0BN3hbreHL2qRw-iF1q9L/view?usp=drive_link"
            download="PrasadKulkarni_Resume.pdf"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
          >
            <FaFileDownload className="mr-2" size={20} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;