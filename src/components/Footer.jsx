import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative py-12">
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

        {/* Left Section: Name & Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-1">Prasad Kulkarni</h3>
          <p className="text-gray-400 text-sm md:text-base">Full Stack Developer</p>
        </div>

        {/* Middle Section: Social Icons */}
        <div className="flex space-x-6 md:space-x-10 items-center">
          <a
            href="https://github.com/Kulkarnip29"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/prasad-kulkarni29"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Right Section: Copyright */}
        <div className="text-center md:text-right">
          <p className="text-gray-400 text-sm md:text-base">
            © {currentYear} Prasad Kulkarni. All rights reserved.
          </p>
        </div>
      </div>

      {/* Subtle Bottom Corner Text */}
      <div className="absolute bottom-2 right-4 text-gray-600 text-xs opacity-60 select-none">
        Made with ❤️ by Prasad Kulkarni
      </div>
    </footer>
  );
};

export default Footer;
