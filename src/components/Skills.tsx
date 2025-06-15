import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Map, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "cyber-cyan",
      skills: [
        { name: "React/React Native", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "HTML/CSS", level: 88 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "GIS Technologies",
      icon: Map,
      color: "cyber-purple",
      skills: [
        { name: "ArcGIS", level: 92 },
        { name: "QGIS", level: 88 },
        { name: "Leaflet", level: 85 },
        { name: "Google Maps API", level: 90 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "cyber-pink",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL/PostGIS", level: 88 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "cyber-green",
      skills: [
        { name: "React Native", level: 90 },
        { name: "iOS Development", level: 75 },
        { name: "Android Development", level: 80 },
        { name: "Cross-platform", level: 88 }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "cyber-cyan",
      skills: [
        { name: "RESTful APIs", level: 88 },
        { name: "GraphQL", level: 70 },
        { name: "WebGIS", level: 92 },
        { name: "Progressive Web Apps", level: 85 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Settings,
      color: "cyber-purple",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS/Cloud Services", level: 70 },
        { name: "CI/CD", level: 72 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'cyber-cyan': 'text-cyber-cyan border-cyber-cyan bg-cyber-cyan',
      'cyber-purple': 'text-cyber-purple border-cyber-purple bg-cyber-purple',
      'cyber-pink': 'text-cyber-pink border-cyber-pink bg-cyber-pink',
      'cyber-green': 'text-cyber-green border-cyber-green bg-cyber-green'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap['cyber-cyan'];
  };

  return (
    <section id="skills" className="py-20 relative">
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
            A comprehensive toolkit spanning GIS technologies, mobile development, and modern web frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
              viewport={{ once: true }}
              className="bg-cyber-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-6 hover:border-cyber-cyan/60 transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 10px 30px rgba(0, 255, 255, 0.1)'
              }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <motion.div
                  className={`w-12 h-12 rounded-lg border ${getColorClasses(category.color).split(' ')[1]} ${getColorClasses(category.color).split(' ')[2]}/20 flex items-center justify-center mr-4`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon size={24} className={getColorClasses(category.color).split(' ')[0]} />
                </motion.div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.15) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className={`text-xs font-bold ${getColorClasses(category.color).split(' ')[0]}`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-cyber-black/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full ${getColorClasses(category.color).split(' ')[2]} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.15) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`absolute inset-0 ${getColorClasses(category.color).split(' ')[2]} opacity-50`}
                          animate={{ 
                            x: ['-100%', '100%'],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          style={{
                            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-cyber-dark/20 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
              advanced GIS analytics, machine learning applications in geospatial data, and emerging 
              mobile development frameworks.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['Machine Learning', 'Cloud Computing', 'DevOps', 'AI/ML in GIS', 'Blockchain', 'IoT'].map((skill, index) => (
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;