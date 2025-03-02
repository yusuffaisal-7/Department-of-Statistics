import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 mb-4">
              The Department of Statistics at NSTU is committed to excellence in teaching,
              research, and statistical innovation.
            </p>
            <Link to="/about" className="text-teal-400 hover:text-teal-300">
              Learn More →
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <p className="text-gray-300">Bir Sreshtho Shahid Mohammad Ruhul Amin Auditorium, 2nd floor</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <p className="text-gray-300">+880 1234567890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <p className="text-gray-300">statistics@nstu.edu.bd</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faculty" className="text-gray-300 hover:text-teal-400">Faculty Members</Link>
              </li>
              <li>
                <Link to="/staff" className="text-gray-300 hover:text-teal-400">Officers & Staff</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-teal-400">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Department of Statistics, NSTU. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Developed by <span className="font-medium text-teal-400 italic">Yusuf Faisal</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;