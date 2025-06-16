import React, { useState, useEffect, useRef } from 'react'; // Tambahkan useRef di sini
import { motion } from 'framer-motion';
import { Github, Linkedin, MapPin, Code } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const fullText = 'GIS Developer & Mobile Development Specialist';
  const [isHovered, setIsHovered] = useState(false);

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Normalisasi posisi (-0.5 sampai 0.5)
        const normalizedX = (x / rect.width - 0.5) * 2;
        const normalizedY = (y / rect.height - 0.5) * 2;
        
        // Batasi rotasi maksimal 15 derajat
        const rotationX = Math.min(Math.max(normalizedY * 15, -15), 15);
        const rotationY = Math.min(Math.max(normalizedX * 15, -15), 15);
        
        setMousePosition({ x: rotationY, y: rotationX });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_70%)]" />
      
      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-cyber-cyan/30 rotate-45"
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
        className="absolute bottom-20 right-10 w-16 h-16 border border-cyber-purple/30"
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
      <div className="container mx-auto px-12 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Bagian Kiri: Konten Teks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-16 md:mb-0"
        >
          {/* Profile Image */}
          <motion.div
            className="mb-8 relative inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-neon-gradient p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center">
                <Code size={48} className="text-cyber-cyan" />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-4 bg-neon-gradient bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            RINI HUSADIYAH
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            className="text-xl md:text-2xl text-gray-300 mb-8 h-8"
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
            className="flex items-center justify-center md:justify-start text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <MapPin size={20} className="mr-2 text-cyber-cyan" />
            <span>Indonesia</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto md:mx-0 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Passionate about creating innovative geospatial solutions and mobile applications 
            that bridge the gap between complex data visualization and user-friendly experiences.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center md:justify-start space-x-6 mb-12"
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
                className={`p-4 bg-cyber-dark/50 backdrop-blur-sm rounded-full border border-cyber-cyan/20 text-gray-400 transition-all duration-300 ${link.color}`}
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
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-8 py-4 bg-transparent border-2 border-cyber-cyan text-cyber-cyan font-semibold rounded-lg overflow-hidden group transition-all duration-300 hover:text-cyber-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.div
              className="absolute inset-0 bg-cyber-cyan"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Bagian Kanan: Gambar 3D */}
        <motion.div 
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div 
            ref={imageRef}
            className="relative w-full max-w-md mx-auto"
            style={{
              perspective: '1000px',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              // Reset posisi saat kursor meninggalkan gambar
              setTimeout(() => setMousePosition({ x: 0, y: 0 }), 300);
            }}
          >
            <motion.div
              className="bg-gray-200 rounded-xl w-full h-[400px] md:h-[500px] overflow-hidden relative"
              style={{
                transform: isHovered 
                  ? `rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)` 
                  : 'rotateY(0deg) rotateX(0deg)',
                transition: 'transform 0.3s ease-out',
                boxShadow: isHovered 
                  ? '0 25px 50px -12px rgba(0, 255, 255, 0.4)' 
                  : '0 10px 30px -10px rgba(0, 255, 255, 0.2)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Placeholder - Ganti dengan gambar Anda */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 opacity-70" />
              
              {/* Efek kedalaman - hanya saat hover */}
              {isHovered && (
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at ${(mousePosition.x + 15) * 10}% ${(mousePosition.y + 15) * 10}%, rgba(255,255,255,0.2), transparent 70%)`,
                  }}
                />
              )}
              
              {/* Efek highlight - hanya saat hover */}
              {isHovered && (
                <div 
                  className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-20"
                  style={{
                    transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(20px)`,
                  }}
                />
              )}
            </motion.div>

            {/* Frame dekoratif */}
            <div className="absolute inset-0 border-4 border-cyber-cyan/30 rounded-xl pointer-events-none" />
            <div className="absolute -inset-4 border border-cyber-cyan/10 rounded-xl pointer-events-none" />
            
            {/* Overlay instruksi */}
            {!isHovered && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-gray-300 bg-cyber-dark/70 px-4 py-2 rounded-lg backdrop-blur-sm">
                  Hover for 3D effect
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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

export default Hero;