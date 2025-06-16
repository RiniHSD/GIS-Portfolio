import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Geographic Information Systems",
      institution: "Universitas Gadjah Mada",
      location: "Indonesia",
      period: "2021 - 2025",
      description: "Specialized in spatial data analysis, cartography, and GIS software development. Graduated with honors focusing on mobile GIS applications and geospatial database management.",
      highlights: ["Spatial Data Analysis", "Cartographic Design", "GIS Programming", "Remote Sensing"]
    },
    // {
    //   degree: "Mobile App Development Certification",
    //   institution: "Tech Academy",
    //   location: "Online",
    //   period: "2022",
    //   description: "Comprehensive certification covering React Native, iOS, and Android development with focus on location-based services and mapping applications.",
    //   highlights: ["React Native", "iOS Development", "Android Development", "Location Services"]
    // }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-neon-gradient bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < education.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-cyber-cyan to-transparent" />
              )}
              
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-neon-gradient rounded-full flex items-center justify-center relative z-10"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap size={24} className="text-cyber-black" />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-1 bg-cyber-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-lg p-6 hover:border-cyber-cyan/60 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 10px 30px rgba(0, 255, 255, 0.1)'
                  }}
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.degree}
                    </h3>
                    <h4 className="text-lg text-cyber-cyan font-semibold mb-2">
                      {item.institution}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-cyber-cyan" />
                        {item.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-cyber-cyan" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <motion.span
                        key={highlight}
                        className="px-3 py-1 bg-cyber-black/50 border border-cyber-purple/30 rounded-full text-xs text-cyber-purple"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + highlightIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;