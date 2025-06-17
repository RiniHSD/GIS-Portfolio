import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MapPin, Code } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const fullText = 'GIS Developer & Mobile Development Specialist';
  
  // Referensi untuk kartu interaktif
  const cardRef = useRef(null);
  const [cardStyle, setCardStyle] = useState({
    '--pointer-x': '50%',
    '--pointer-y': '50%',
    '--rotate-x': '0deg',
    '--rotate-y': '0deg',
    '--card-opacity': '0.2',
    '--behind-gradient': `radial-gradient(
      farthest-side circle at var(--pointer-x) var(--pointer-y),
      hsla(266, 100%, 90%, var(--card-opacity)) 4%,
      hsla(266, 50%, 80%, calc(var(--card-opacity)*0.75)) 10%,
      hsla(266, 25%, 70%, calc(var(--card-opacity)*0.5)) 50%,
      hsla(266, 0%, 60%, 0) 100%),
      radial-gradient(35% 52% at 55% 20%, #00ffaac4 0%, #073aff00 100%),
      radial-gradient(100% 100% at 50% 50%, #00c1ffff 1%, #073aff00 76%),
      conic-gradient(from 124deg at 50% 50%, #c137ffff 0%, #07c6ffff 40%, #07c6ffff 60%, #c137ffff 100%)`,
    '--inner-gradient': 'linear-gradient(145deg, #60496e8c 0%, #71C4FF44 100%)',
  });

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

  // Efek pergerakan mouse untuk kartu interaktif
  const handleMouseMove = (e) => {
    setIsHovering(true);

    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const pointerX = (x / rect.width) * 100;
      const pointerY = (y / rect.height) * 100;
      
      // Hitung rotasi berdasarkan posisi kursor
      const rotateX = -((pointerY - 50) / 50) * 15;
      const rotateY = ((pointerX - 50) / 50) * 15;

      const distanceFromCenter = Math.sqrt(Math.pow(pointerX - 50, 2) + Math.pow(pointerY - 50, 2)) / 50;
      const scale = 1.05 - distanceFromCenter * 0.05;
      
      setCardStyle({
        ...cardStyle,
        '--pointer-x': `${pointerX}%`,
        '--pointer-y': `${pointerY}%`,
        '--rotate-x': `${rotateX}deg`,
        '--rotate-y': `${rotateY}deg`,
        '--card-opacity': `1`,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCardStyle({
      ...cardStyle,
      '--pointer-x': '50%',
      '--pointer-y': '50%',
      '--rotate-x': '0deg',
      '--rotate-y': '0deg',
      '--card-opacity': '0',
    });
  };

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

      {/* Container utama dengan layout grid */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Bagian Kiri: Konten Teks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left md:pl-12"
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
          <motion.h3
            className="text-4xl md:text-7xl font-black mb-4 bg-neon-gradient bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            RINI HUSADIYAH
          </motion.h3>

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
        </motion.div>

        {/* Bagian Kanan: Kartu Interaktif Sederhana */}
        <div className="md:col-span-6">
          <div 
            ref={cardRef}
            className="relative mx-auto"
            style={{
              width: '300px',
              height: '400px',
              ...cardStyle,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Layer gradient belakang simulasi ::before */}
            <div 
              className="absolute -inset-[20%] z-0 transition-all duration-500 pointer-events-none"
              style={{
                background: 'var(--behind-gradient)',
                filter: isHovering 
                  ? 'blur(50px) contrast(1) saturate(2)' 
                  : 'blur(24px)',
                transform: isHovering ? 'scale(1.1)' : 'scale(0.9)',
                opacity: isHovering ? 1 : 0.6,
                transition: 'all 0.4s ease-in-out',
                borderRadius: '36px',
              }}
            />

            {/* Card utama */}
            <div 
              className="relative z-10 pc-card rounded-[32px] overflow-hidden border border-[#cccccc50] shadow-xl w-[300px] h-[400px]"
            >
              {/* Lapisan dalam yang menerima efek rotasi */}
              <div 
                className="pc-inside relative w-full h-full"
                style={{
                  transform: 'perspective(1000px) rotateX(var(--rotate-x)) rotateY(var(--rotate-y))',
                  transition: 'transform 120ms ease-out',
                  background: isHovering
                    ? 'url(/bg1.jpg), var(--behind-gradient)'
                    : 'rgba(255,255,255,0.04)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Shine */}
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    background: 'var(--inner-gradient)',
                    mask: 'linear-gradient(white, transparent 70%)',
                  }}
                />

                {/* Glare */}
                <div 
                  className="absolute inset-0 mix-blend-soft-light pointer-events-none z-0"
                  style={{
                    background: 'radial-gradient(circle at var(--pointer-x) var(--pointer-y), #ffffff55 10%, transparent 60%)',
                    opacity: isHovering ? 0.5 : 0,
                    transition: 'opacity 0.4s ease',
                  }}
                />

                {/* Konten Utama */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-end p-6 pb-8">

                  {/* Foto — full container */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <img 
                      src="/Fotobg.png" 
                      alt="Rini Husadiyah" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Tombol CV */}
                  <a 
                    href="/CV_RiniHusadiyah.pdf"
                    download
                    className="relative z-10 mt-auto px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium transition-all hover:bg-white/20 border border-white/30 shadow-lg"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>


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

export default Hero;