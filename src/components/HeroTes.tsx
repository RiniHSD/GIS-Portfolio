import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MapPin, Code } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const HeroTes = () => {
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const fullText = 'GIS Engineer | Surveyor | Full Stack Developer';
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi perangkat mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Mouse move effect untuk desktop
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imageRef.current && !isMobile) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Normalisasi posisi (0 sampai 1)
        const normalizedX = x / rect.width;
        const normalizedY = y / rect.height;
        
        // Hitung rotasi yang benar:
        const rotationX = (0.5 - normalizedY) * 30; // -15 to 15
        const rotationY = (normalizedX - 0.5) * 30; // -15 to 15
        
        setMousePosition({ x: rotationX, y: rotationY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/RiniHSD', 
      label: 'GitHub',
      color: 'hover:text-white'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/rinihusadiyah/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-10 md:py-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_70%)]" />
      
      {/* Floating Geometric Elements */}
      <motion.div
        className="hidden md:block absolute top-20 left-10 w-20 h-20 border border-cyber-cyan/30 rotate-45"
        animate={{ 
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-20 right-10 w-16 h-16 border border-cyber-purple/30"
        animate={{ 
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Container utama dengan layout flex */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {/* Bagian Kiri: Konten Teks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left md:pl-12"
        >
          {/* Profile Image */}
          <motion.div
            className="mb-8 relative inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-neon-gradient p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center">
                <Code size={32} className="md:size-10 text-cyber-cyan" />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-7xl font-black mb-4 bg-neon-gradient bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            RINI HUSADIYAH
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            className="text-lg md:text-2xl text-gray-300 mb-6 md:mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-mono">{typedText}</span>
            <motion.span
              className="inline-block w-0.5 h-6 bg-cyber-cyan ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex items-center justify-center md:justify-start text-gray-400 mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <MapPin size={16} className="md:size-5 mr-2 text-cyber-cyan" />
            <span>Indonesia</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto md:mx-0 mb-8 md:mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Passionate about creating innovative geospatial solutions and mobile applications 
            that bridge the gap between complex data visualization and user-friendly experiences.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center md:justify-start space-x-4 md:space-x-6 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 md:p-4 bg-cyber-dark/50 backdrop-blur-sm rounded-full border border-cyber-cyan/20 text-gray-400 transition-all duration-300 ${link.color}`}
                whileHover={{ 
                  scale: 1.1,
                  borderColor: 'rgba(0, 255, 255, 0.6)',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <link.icon size={20} className="md:size-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-cyber-cyan text-cyber-cyan font-semibold rounded-lg overflow-hidden group transition-all duration-300 hover:text-cyber-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <span className="relative z-10 text-sm md:text-base">Explore My Work</span>
            <motion.div
              className="absolute inset-0 bg-cyber-cyan"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Gambar 3D hanya di mobile - di bawah tombol */}
          {isMobile && (
            <motion.div 
              className="w-full flex justify-center mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative w-full max-w-xs mx-auto">
                <div className="bg-gray-200 rounded-xl w-full h-[250px] overflow-hidden relative">
                  {/* Placeholder */}
                  <img 
                    src="../assets/Foto.JPG" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 border-4 border-cyber-cyan/30 rounded-xl pointer-events-none" />
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Gambar 3D hanya di desktop */}
        {!isMobile && (
            <motion.div className="w-full md:w-1/2 flex justify-center">
                <InteractiveCard />
            </motion.div>
            )}
      </div>

      {/* Scroll Indicator - Sembunyikan di mobile */}
      <motion.div
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-cyber-cyan/50 rounded-full flex justify-center"
          animate={{ 
            borderColor: ['rgba(0, 255, 255, 0.5)', 'rgba(0, 255, 255, 1)', 'rgba(0, 255, 255, 0.5)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-cyber-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroTes;