import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold items-center">Prasad Kulkarni</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-10 mb-4 md:mb-0">
            <a href="http://github.com/Kulkarnip29" target="_blank" rel="noopener noreferrer" 
               className="hover:text-gray-400 transition-colors">
              <FaGithub size={25} />
            </a>
            <a href="https://www.linkedin.com/in/prasad-kulkarni29" target="_blank" rel="noopener noreferrer"
               className="hover:text-gray-400 transition-colors">
              <FaLinkedin size={25} />
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer"
               className="hover:text-gray-400 transition-colors">
              <FaTwitter size={24} />
            </a> */}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400"> ©Prasad_Kulkarni {currentYear} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;