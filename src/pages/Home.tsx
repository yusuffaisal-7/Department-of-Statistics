import React, { useState, useEffect } from 'react';
import { Calendar, Users, Award, BookOpen, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backgroundImages = [
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=1920&q=80'
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const goToPrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + backgroundImages.length) % backgroundImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="h-[500px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${backgroundImages[currentImageIndex]}')`
            }}
          />
        </AnimatePresence>
        
        {/* Overlay with less blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 to-teal-700/50"></div>
        
        {/* Slider Navigation */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white z-10"
          onClick={goToPrevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white z-10"
          onClick={goToNextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentImageIndex(index);
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 h-full relative">
          <div className="flex items-center h-full">
            <motion.div 
              className="text-white max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to the Department of Statistics
              </h1>
              <p className="text-xl mb-8">
                Empowering future statisticians through excellence in education and research
              </p>
              <div className="space-x-4">
                <Link to="/bsc" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  B.Sc in Statistics
                </Link>
                <Link to="/msc" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  M.Sc in Statistics
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">400+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">13+</h3>
              <p className="text-gray-600">Faculty Members</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-gray-600">Employment Rate</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">9+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Our Department</h2>
            <p className="text-gray-600 mb-8">
              The Department of Statistics at Noakhali Science and Technology University was established in 2014 
              with the vision of becoming a center of excellence in statistical education and research. Our department 
              offers comprehensive programs in statistical science, preparing students for careers in data analysis, 
              research, and various industries where statistical expertise is crucial.
            </p>
            <Link to="/about" className="text-teal-600 hover:text-teal-800 font-semibold inline-flex items-center">
              Learn More About Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200">
                <img 
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1523240795612-9a054b0db644' : item === 2 ? '1523289333742-be1680c46d5e' : '1523240795612-9a054b0db644'}?auto=format&fit=crop&w=800&q=80`}
                  alt="Event"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Statistical Workshop 202{item + 3}</h3>
                  <p className="text-gray-600 mb-4">
                    Join us for an intensive workshop on advanced statistical methods and their applications.
                  </p>
                  <button className="text-teal-600 hover:text-teal-800 font-semibold inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Facebook Feed</h3>
              <div className="aspect-video">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstatistics.nstu&tabs=timeline"
                  className="w-full h-full border-none overflow-hidden"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">YouTube Channel</h3>
              <div className="aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/videoseries?list=UU@DepartmentofStatisticsNSTU"
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;