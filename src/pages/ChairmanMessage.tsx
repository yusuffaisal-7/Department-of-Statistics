import React from 'react';
import mamunimage from '../images/Mamun.jpg';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const ChairmanMessage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-2">Message from the Chairman</h1>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Chairman's Photo */}
              <motion.div 
                className="md:w-1/3 relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <img 
                  src={mamunimage}
                  alt="Department Chairman" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-900 to-transparent p-4">
                  <h3 className="text-white text-lg font-semibold">Md Shohel Rana</h3>
                  <p className="text-teal-100 text-sm">Associate Professor & Chairman</p>
                </div>
              </motion.div>

              {/* Chairman's Message */}
              <motion.div 
                className="md:w-2/3 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-start mb-6">
                  <Quote className="w-10 h-10 text-teal-600 mr-4 flex-shrink-0 transform rotate-180" />
                  <h2 className="text-2xl font-bold text-gray-800">Welcome to the Department of Statistics</h2>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>
                    It is my great pleasure to welcome you to the Department of Statistics at Noakhali Science and Technology University. 
                    Since our establishment in 2014, we have been dedicated to providing quality education and research opportunities in the field of statistics.
                  </p>
                  
                  <p>
                    In today's data-driven world, the role of statisticians has become increasingly important. Our department is committed to 
                    preparing students with the knowledge and skills needed to excel in this dynamic field. We offer a comprehensive curriculum 
                    that combines theoretical foundations with practical applications, ensuring our graduates are well-equipped for careers in 
                    academia, industry, government, and research institutions.
                  </p>
                  
                  <p>
                    Our faculty members are dedicated educators and active researchers who bring their expertise and passion into the classroom. 
                    We foster a supportive learning environment where students are encouraged to think critically, solve complex problems, and 
                    develop innovative approaches to statistical analysis.
                  </p>
                  
                  <p>
                    I invite you to explore our website to learn more about our academic programs, research activities, and the achievements of 
                    our faculty and students. Whether you are a prospective student, a current member of our community, or an interested visitor, 
                    I hope you find the information you seek.
                  </p>
                  
                  <motion.p 
                    className="font-semibold text-teal-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    Thank you for your interest in the Department of Statistics at NSTU. We look forward to connecting with you.
                  </motion.p>
                </div>

                <motion.div 
                  className="mt-8 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <img 
                    src="https://i.imgur.com/signature.png" 
                    alt="Chairman's Signature" 
                    className="h-16 mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Md. Mamun Miah</p>
                    <p className="text-sm text-gray-600">Chairman, Department of Statistics</p>
                    <p className="text-sm text-gray-600">Noakhali Science and Technology University</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessage;