import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "GIS Developer",
      company: "PT Techno GIS Indonesia",
      location: "Sleman",
      period: "Sep - Dec 2024",
      type: "Internship",
      description: "Assisted in the development of a mobile GIS application for village boundary mapping, integrating GNSS-based data collection and spatial database management",
      achievements: [
        "Developed and registered a mobile GIS application under Indonesia's Intellectual Property Rights (HKI)",
        "Integrated GNSS geodetic data to improve spatial accuracy for administrative boundary mapping",
        "Designed and managed spatial databases using PostgreSQL and PostGIS",
        "Improved data collection workflows using mobile-first mapping solutions"
      ],
      technologies: ["JavaScript", "React Native", "Leaflet", "GNSS", "PostgreSQL"],
      link: "https://e-hakcipta.dgip.go.id/legal/c/ZTgxMTdhM2U4Yjg3MDk4OWI4NDdmNTdlYzZkOGFlZjIK"
    },
    {
      title: "Lecturar Assistant",
      company: "Universitas Gadjah Mada",
      location: "Yogyakarta",
      period: "Aug - Dec 2024",
      type: "Academic",
      description: "Assisted undergraduate students in two programming-related courses as a teaching assistant. Helped facilitate learning through code reviews, debugging, and hands-on guidance during lab sessions",
      achievements: [
        "Facilitated practical sessions for 62 GIS students in Computer Programming (VB.Net, C#, Python, Java, HTML/CSS, JavaScript, PHP)",
        "Guided 61 students in developing mobile applications using React Native and Ionic for Advanced Mobile Geospatial Programming",
        "Supported students' understanding of core programming concepts through collaborative exercises and live coding demonstrations",
      ],
      technologies: ["Python", "React Native", "Ionic", "VB.Net", "C#", "Java", "HTML/CSS", "JavaScript", "PHP"]
    },
    {
      title: "Spatial Planning (RDTR Development Team)",
      company: "Ministry of Agrarian Affairs and Spatial Planning/ National Land Agency (ATR/BPN)",
      location: "West Sumatera",
      period: "Feb - Jun 2024",
      type: "Internship",
      description: "Part of the official RDTR development team for IKK Lubuk Tarok, contributing to spatial map revisions, document drafting, and spatial plan design using ArcGIS",
      achievements: [
        "Revised base maps and thematic maps for spatial planning purposes",
        "Assisted in preparing fact books and analysis documents for the 2024 - 2044 RDTR of IKK Lubuk Tarok",
        "Drafted sections of the spatial structure plan under supervision of senior planners",
        "Visualized and analyzed spatial zoning using ArcGIS Desktop and QGIS"
      ],
      technologies: ["ArcGIS", "QGIS", "Spatial Planning", "Cartography"]
    },
    {
      title: "Geography Olympiad Trainer & Mentor",
      company: "MAN Insan Cendekia Siak",
      location: "Siak, Riau",
      period: "Feb 2024, Jul 2024",
      type: "Freelance",
      description: "Provided short-term mentorship to high school students in preparation for the national-level Madrasah Science Competition (KSM) in Geography",
      achievements: [
        "Delivered intensive training sessions on geographic concepts, data interpretation, and spatial reasoning",
        "Successfully mentored a student who won a Silver Medal at the 2024 KSM National Competition in Ternate, North Maluku",
      ],
      technologies: ["Geographic Education", "Training", "Remote Mentoring"]
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

                  {exp.link && exp.title === "GIS Developer" && (
                    <p className="text-sm text-cyber-cyan underline mb-6">
                      🏆{" "}
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyber-purple transition-colors"
                      >
                        Officially registered under Indonesia's HKI system
                      </a>
                    </p>
                  )}

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