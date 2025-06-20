import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code2, Smartphone, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "GIS Expertise",
      description: "Skilled in spatial data processing, mapping, and visualization using ArcGIS, QGIS, and Google Earth Engine — with experience in both desktop and field workflows"
    },
    {
      icon: Smartphone,
      title: "Mobile GIS Development",
      description: "Developing mobile GIS apps for field mapping using React Native, Ionic, Leaflet, and GNSS tools — applied in academic and internship projects"
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Hands-on experience building full-stack GIS apps with JavaScript, Python, HTML, PHP, and PostgreSQL/PostGIS — from frontend to spatial data backend"
    },
    {
      icon: Database,
      title: "Spatial Data Management",
      description: "Proficient in managing geospatial databases with PostGIS and MySQL, optimizing workflows for spatial analysis and map generation"
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
            className="space-y-6 pl-4 md:pl-6"
          >
            <h3 className="text-2xl font-bold text-cyber-cyan mb-4">
              Bridging Geography and Technology
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              As a final-year GIS student with a passion for geospatial development, I focus on 
              building mobile and web-based mapping applications that make spatial data more 
              accessible and useful. My academic and internship experiences include working 
              with GNSS-based field data collection, spatial data processing, 
              and developing GIS tools using JavaScript and open-source technologies.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I'm especially interested in the intersection of spatial analysis and programming, 
              and I enjoy turning complex geospatial concepts into practical digital solutions 
              through hands-on coding and fieldwork.
            </p>

            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap gap-3">
                {['GIS', 'Mobile GIS', 'JavaScript', 'Python', 'ArcGIS', 'QGIS', 'GEE'].map((skill, index) => (
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