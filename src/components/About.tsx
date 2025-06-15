import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code2, Smartphone, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "GIS Expertise",
      description: "Specialized in Geographic Information Systems with focus on spatial data analysis and visualization"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating intuitive mobile applications that bring geospatial data to users' fingertips"
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end development experience from backend systems to user interfaces"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Expert in handling complex geospatial databases and optimizing data workflows"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-cyber-cyan mb-4">
              Bridging Geography and Technology
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              As a passionate GIS Developer with expertise in mobile development, I specialize in 
              creating innovative solutions that transform complex geospatial data into accessible, 
              user-friendly applications. My work focuses on developing cutting-edge mobile and web 
              applications that help organizations make informed decisions through spatial analysis.
            </p>

            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in Geographic Information Systems and modern development 
              technologies, I bring a unique perspective to projects that require both technical 
              precision and creative problem-solving. I'm committed to delivering solutions that 
              not only meet technical requirements but also provide exceptional user experiences.
            </p>

            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap gap-3">
                {['React', 'GIS', 'Mobile Development', 'JavaScript', 'Python', 'ArcGIS'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-cyber-dark/50 border border-cyber-cyan/30 rounded-full text-sm text-cyber-cyan"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 255, 0.6)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-cyber-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-lg p-6 group hover:border-cyber-cyan/60 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(0, 255, 255, 0.1)'
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-neon-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon size={24} className="text-cyber-black" />
                </motion.div>
                
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;