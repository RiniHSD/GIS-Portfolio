import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Daftar gambar skills (pastikan file gambar ada di public/skills)
  const techSkills = [
    { name: 'React', image: '/skills/react.png' },
    { name: 'TypeScript', image: '/skills/typescript.png' },
    { name: 'JavaScript', image: '/skills/javascript.png' },
    { name: 'Node.js', image: '/skills/nodejs.png' },
    { name: 'Python', image: '/skills/python.png' },
    { name: 'PostgreSQL', image: '/skills/postgresql.png' },
    // { name: 'MongoDB', image: '/skills/mongodb.png' },
    { name: 'ArcGIS', image: '/skills/arcgis.png' },
    { name: 'QGIS', image: '/skills/qgis.png' },
    { name: 'Leaflet', image: '/skills/leaflet.png' },
    { name: 'Google Maps', image: '/skills/gee.png' },
    // { name: 'Docker', image: '/skills/docker.png' },
    // { name: 'AWS', image: '/skills/aws.png' },
    { name: 'Git', image: '/skills/git.png' },
    { name: 'HTML5', image: '/skills/html5.png' },
    { name: 'CSS3', image: '/skills/css3.png' },
    // { name: 'Tailwind CSS', image: '/skills/tailwindcss.png' },
    // { name: 'React Native', image: '/skills/react-native.png' },
  ];

  // Duplikasi array untuk efek infinite scroll
  const duplicatedSkills = [...techSkills, ...techSkills];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Fungsi untuk menggerakkan carousel
  const moveCarousel = () => {
    if (!isPaused && carouselRef.current) {
      setPosition(prev => {
        const newPosition = prev - 1;
        const containerWidth = carouselRef.current?.scrollWidth || 0;
        const itemWidth = 120; // Lebar setiap item
        const threshold = containerWidth / 2 - itemWidth;
        
        if (Math.abs(newPosition) > threshold) {
          return 0;
        }
        return newPosition;
      });
    }
  };

  // Gunakan useEffect untuk animasi berkelanjutan
  React.useEffect(() => {
    const interval = setInterval(moveCarousel, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-cyber-dark" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-neon-gradient bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Carousel */}
        <div 
          className="relative overflow-hidden py-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            ref={carouselRef}
            className="flex"
            animate={{ x: position }}
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 mx-4 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-cyber-dark/100 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-4 hover:border-cyber-cyan/60 hover:shadow-neon transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)"
                }}
              >
                <img 
                  src={skill.image} 
                  alt={skill.name} 
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlay untuk efek fading */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cyber-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cyber-black to-transparent pointer-events-none" />
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          {/* <div className="bg-cyber-dark/20 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Always exploring GIS analytics, geospatial ML, and mobile dev tools — because growth never stops.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['Machine Learning', 'Cloud Computing', 'DevOps', 'AI/ML in GIS', 'Big Data', 'IoT'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-cyber-black/50 border border-cyber-green/30 rounded-full text-cyber-green text-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(16, 185, 129, 0.6)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;