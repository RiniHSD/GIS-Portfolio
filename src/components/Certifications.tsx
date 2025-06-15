import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "ArcGIS Pro Certified Developer",
      issuer: "Esri",
      date: "2023",
      description: "Advanced certification in ArcGIS Pro development, spatial analysis, and geoprocessing workflows.",
      credentialId: "ARC-2023-RH-001",
      skills: ["ArcGIS Pro", "Python", "Spatial Analysis", "Geoprocessing"],
      verified: true
    },
    {
      title: "React Native Certified Developer",
      issuer: "Meta",
      date: "2022",
      description: "Comprehensive certification covering React Native development, performance optimization, and platform-specific implementations.",
      credentialId: "RN-2022-DEV-456",
      skills: ["React Native", "Mobile Development", "iOS", "Android"],
      verified: true
    },
    {
      title: "Google Maps Platform Developer",
      issuer: "Google",
      date: "2022",
      description: "Specialized certification in Google Maps APIs, location services, and mapping solutions development.",
      credentialId: "GMP-2022-789",
      skills: ["Google Maps API", "JavaScript", "Location Services", "Web Development"],
      verified: true
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Foundation-level certification demonstrating cloud computing knowledge and AWS platform understanding.",
      credentialId: "AWS-CP-2023-123",
      skills: ["Cloud Computing", "AWS", "Infrastructure", "Security"],
      verified: true
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2021",
      description: "Professional certification in MongoDB database design, development, and optimization.",
      credentialId: "MDB-2021-DEV-890",
      skills: ["MongoDB", "Database Design", "NoSQL", "Performance Optimization"],
      verified: true
    },
    {
      title: "Scrum Master Certified",
      issuer: "Scrum Alliance",
      date: "2022",
      description: "Agile methodology certification focusing on Scrum framework, team leadership, and project management.",
      credentialId: "CSM-2022-567",
      skills: ["Scrum", "Agile", "Project Management", "Team Leadership"],
      verified: true
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
            Professional certifications and credentials that validate expertise across various technologies and methodologies
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
                className="bg-cyber-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-6 h-full hover:border-cyber-cyan/60 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(0, 255, 255, 0.1)'
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="w-12 h-12 bg-neon-gradient rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award size={24} className="text-cyber-black" />
                  </motion.div>
                  
                  {cert.verified && (
                    <motion.div
                      className="flex items-center text-cyber-green text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle size={16} className="mr-1" />
                      Verified
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center text-cyber-cyan font-semibold mb-2">
                    <span>{cert.issuer}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar size={16} className="mr-2 text-cyber-cyan" />
                    {cert.date}
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
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

                {/* Action Button */}
                <motion.button
                  className="w-full flex items-center justify-center px-4 py-2 bg-transparent border border-cyber-cyan/30 text-cyber-cyan rounded-lg hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Credential
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-cyber-dark/20 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <motion.div
                  className="text-3xl font-bold text-cyber-cyan mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  6+
                </motion.div>
                <div className="text-gray-300 text-sm">Professional Certifications</div>
              </div>
              
              <div>
                <motion.div
                  className="text-3xl font-bold text-cyber-purple mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  15+
                </motion.div>
                <div className="text-gray-300 text-sm">Technical Skills</div>
              </div>
              
              <div>
                <motion.div
                  className="text-3xl font-bold text-cyber-green mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  100%
                </motion.div>
                <div className="text-gray-300 text-sm">Verification Rate</div>
              </div>
              
              <div>
                <motion.div
                  className="text-3xl font-bold text-cyber-pink mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  2023
                </motion.div>
                <div className="text-gray-300 text-sm">Latest Certification</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;