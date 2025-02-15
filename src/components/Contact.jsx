import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold inline border-b-4 border-gray-500"
          >
            Contact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-6 text-lg leading-relaxed"
          >
            Feel free to reach out by submitting the form below, and I will get back to you promptly.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg"
          >
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-cyan-500" size={24} />
              <span>+91-9607482906</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-cyan-500" size={24} />
              <span>prasadkulkarni32596@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-cyan-500" size={24} />
              <span>India</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            action="https://getform.io/f/bpjnjzxb"
            method="POST"
            className="flex flex-col bg-primary p-8 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 mb-4 bg-transparent border-2 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 mb-4 bg-transparent border-2 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="p-3 mb-4 bg-transparent border-2 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 mt-6 mx-auto flex items-center justify-center rounded-md font-bold text-lg hover:shadow-lg transition-transform duration-300"
            >
              Let's Talk
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
