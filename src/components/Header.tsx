import React from 'react';
import logoimage from '../images/logo.jpg';
import { Menu, X, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-gradient-to-r from-teal-800 to-teal-600 text-white sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <a href="https://nstu.edu.bd/" target="_blank" rel="noopener noreferrer">
              <img 
                src={logoimage} 
                alt="NSTU Logo" 
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
              />
            </a>
            <div>
              <h1 className="text-xl font-bold">Department of Statistics</h1>
              <p className="text-sm text-teal-100">Noakhali Science and Technology University</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {[
              { to: "/", label: "Home" },
              { to: "/chairman-message", label: "Chairman's Message" },
              { to: "/about", label: "About" },
              { to: "/faculty", label: "Faculty Members" },
              { to: "/seminar-library", label: "Seminar Library" },
              { to: "/batch-info", label: "Batch Info" },
              { to: "/contact", label: "Contact" }
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a 
              href="https://www.facebook.com/statistics.nstu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:bg-teal-700 p-2 rounded-full transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://www.youtube.com/@DepartmentofStatisticsNSTU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:bg-teal-700 p-2 rounded-full transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Youtube className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 hover:bg-teal-700 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden py-4 border-t border-teal-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/chairman-message", label: "Chairman's Message" },
                { to: "/about", label: "About" },
                { to: "/faculty", label: "Faculty Members" },
                { to: "/seminar-library", label: "Seminar Library" },
                { to: "/batch-info", label: "Batch Info" },
                { to: "/contact", label: "Contact" }
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to={item.to} 
                    className="px-4 py-2 hover:bg-teal-700 rounded-lg transition-colors duration-200 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;