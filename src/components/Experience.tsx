import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "GIS Developer",
      company: "PT Techno GIS Indonesia",
      location: "Sleman",
      period: "2024",
      type: "Internship",
      description: "Leading development of innovative GIS applications and mobile solutions for spatial data management. Responsible for end-to-end project delivery including system architecture, development, and deployment.",
      achievements: [
        "Developed 5+ mobile GIS applications serving 10,000+ users",
        "Improved data processing efficiency by 40% through optimization",
        "Led cross-functional team of 4 developers",
        "Implemented real-time location tracking systems"
      ],
      technologies: ["React Native", "ArcGIS", "Postman", "PostgreSQL", "Node.js"]
    },
    {
      title: "Lecturar Assistant",
      company: "Universitas Gadjah Mada",
      location: "Yogyakarta",
      period: "2022 - 2023",
      type: "Contract",
      description: "Specialized in developing location-based mobile applications with focus on user experience and performance optimization. Collaborated with design teams to create intuitive interfaces for complex geospatial data.",
      achievements: [
        "Built award-winning navigation app with 50,000+ downloads",
        "Reduced app loading time by 60% through code optimization",
        "Integrated multiple mapping APIs and services",
        "Mentored junior developers in mobile best practices"
      ],
      technologies: ["React Native", "JavaScript", "Google Maps API", "Firebase"]
    },
    {
      title: "Detailed Spatial Plan (RDTR) Development Team",
      company: "Ministry of Agrarian Affairs and Spatial Planning/ National Land Agency (ATR/BPN)",
      location: "Indonesia",
      period: "2021 - 2022",
      type: "Internship",
      description: "Gained hands-on experience in spatial data analysis and GIS software development. Contributed to research projects focused on environmental monitoring and urban planning applications.",
      achievements: [
        "Analyzed satellite imagery for environmental monitoring",
        "Created interactive web maps for research visualization",
        "Automated data processing workflows",
        "Presented findings at regional GIS conference"
      ],
      technologies: ["ArcGIS", "QGIS", "Python", "JavaScript", "HTML/CSS"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent" />
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline Icon */}
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-neon-gradient rounded-full flex items-center justify-center relative z-10"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Briefcase size={24} className="text-cyber-black" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-cyber-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-lg p-6 hover:border-cyber-cyan/60 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: '0 10px 30px rgba(0, 255, 255, 0.1)'
                  }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 bg-cyber-cyan/20 text-cyber-cyan text-xs rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg text-cyber-cyan font-semibold mb-3">
                      {exp.company}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-cyber-cyan" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-cyber-cyan" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start text-gray-300 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * achIndex }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-white font-semibold mb-3">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-cyber-black/50 border border-cyber-purple/30 rounded-full text-xs text-cyber-purple"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.1 * techIndex }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.6)' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
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

export default Experience;