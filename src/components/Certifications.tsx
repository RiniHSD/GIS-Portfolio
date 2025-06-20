import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Inspiring Bootcamp In Spatial Planning",
      issuer: "PPSDM Kementerian ATR/BPN",
      date: "2024",
      credentialId: "Ke2iBMYyHu",
      skills: ["Spatial Planning", "Urban Planning", "Infrastructure", "GIS"],
      verified: true,
      image: "/certifications/spatialplanning.png"
    },
    {
      title: "Practice Exam 3 for AWS Certified Developer - Associate (DVA-C02)",
      issuer: "Linkedin Learning",
      date: "2024",
      skills: ["AWS", "Cloud Computing"],
      verified: true,
      image: "/certifications/aws.jpg"
    },
    {
      title: "Geospatial Data Analytics Essential Training",
      issuer: "Linkedin Learning",
      date: "2025",
      skills: ["Geospatial Data", "Geographic Information System (GIS)", "Python"],
      verified: true,
      image: "/certifications/geospatial.jpg"
    },
    {
      title: "Hands-On PostgreSQL Project Spatial Data Science",
      issuer: "LinkedIn Learning",
      date: "2025",
      skills: ["DBeaver", "Data Manipulation", "Geographic Information System (GIS)"],
      verified: true,
      image: "/certifications/postgresql.jpg"
    },
    {
      title: "Bootcamp In Remote Sensing and Mapping",
      issuer: "Aksara Lab",
      date: "2024",
      credentialId: "1278/ABI/VII/2024",
      skills: ["Cloud Computing", "Mapping", "Remote Sensing", "Google Earth Engine"],
      verified: true,
      image: "/certifications/mapping.jpg"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
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
            Certifications
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Courses and certifications I've completed to strengthen my skills in GIS, spatial planning, and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="bg-cyber-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-6 h-full hover:border-cyber-cyan/60 transition-all duration-300 flex flex-col"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(0, 255, 255, 0.1)'
                }}
              >
                {/* Gambar Sertifikat */}
                <div className="relative mb-4 rounded-lg overflow-hidden h-65">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 to-transparent opacity-70" />
                  
                  {/* Logo Badge */}
                  <div className="absolute top-3 right-3 bg-cyber-black/80 backdrop-blur-sm rounded-full p-2">
                    <motion.div
                      className="w-8 h-8 bg-neon-gradient rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award size={16} className="text-cyber-black" />
                    </motion.div>
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyber-cyan transition-colors">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center text-cyber-cyan font-semibold text-sm">
                      <span>{cert.issuer}</span>
                    </div>
                  </div>
                  
                  {cert.verified && (
                    <motion.div
                      className="flex items-center text-cyber-green text-xs"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle size={14} className="mr-1" />
                      Verified
                    </motion.div>
                  )}
                </div>

                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <Calendar size={14} className="mr-2 text-cyber-cyan" />
                  {cert.date}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {cert.description}
                </p>

                {/* Credential ID */}
                <div className="bg-cyber-black/30 rounded-lg p-3 mb-4">
                  <div className="text-xs text-gray-400 mb-1">Credential ID:</div>
                  <div className="text-cyber-cyan font-mono text-sm">{cert.credentialId}</div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Skills Validated:</div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-2 py-1 bg-cyber-black/50 border border-cyber-purple/30 rounded text-xs text-cyber-purple"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.6)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;