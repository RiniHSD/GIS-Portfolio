import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, MapPin, Smartphone, Globe, Drone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Map Projects",
      description: "A comprehensive mobile application for urban navigation with real-time traffic data, public transport integration, and accessibility features.",
      image: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Google Maps API", "Firebase", "Node.js"],
      features: ["Real-time Navigation", "Public Transport", "Accessibility", "Offline Maps"],
      demoUrl: "https://drive.google.com/file/d/1Muu2iEImjb70QqBep6yhWSpUox1QPXmR/view",
      githubUrl: "https://github.com/RiniHSD",
      category: "Mobile App",
      icon: MapPin
    },
    {
      title: "Field Survey",
      description: "Interactive web platform for monitoring environmental data with real-time sensor integration and predictive analytics.",
      image: "https://images.pexels.com/photos/2058993/pexels-photo-2058993.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "ArcGIS API", "Python", "PostgreSQL"],
      features: ["Real-time Data", "Predictive Analytics", "Interactive Maps", "Report Generation"],
      demoUrl: "https://storymaps.arcgis.com/stories/cda2b0bdd6f64cf49f93ba6b8c76d56f",
      githubUrl: "https://github.com/RiniHSD",
      category: "Field Survey",
      icon: MapPin
    },
    {
      title: "App Development",
      description: "Comprehensive platform for location-based services with geofencing, analytics, and custom mapping solutions.",
      image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Leaflet", "Node.js", "MongoDB"],
      features: ["Geofencing", "Analytics Dashboard", "Custom Maps", "API Integration"],
      demoUrl: "#",
      githubUrl: "https://github.com/RiniHSD",
      category: "GIS Platform",
      icon: MapPin
    },
    {
      title: "App Development",
      description: "Comprehensive platform for location-based services with geofencing, analytics, and custom mapping solutions.",
      image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Leaflet", "Node.js", "MongoDB"],
      features: ["Geofencing", "Analytics Dashboard", "Custom Maps", "API Integration"],
      demoUrl: "#",
      githubUrl: "https://github.com/RiniHSD",
      category: "GIS Platform",
      icon: MapPin
    },
    {
      title: "App Development",
      description: "Comprehensive platform for location-based services with geofencing, analytics, and custom mapping solutions.",
      image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Leaflet", "Node.js", "MongoDB"],
      features: ["Geofencing", "Analytics Dashboard", "Custom Maps", "API Integration"],
      demoUrl: "#",
      githubUrl: "https://github.com/RiniHSD",
      category: "GIS Platform",
      icon: MapPin
    },
    {
      title: "App Development",
      description: "Comprehensive platform for location-based services with geofencing, analytics, and custom mapping solutions.",
      image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Leaflet", "Node.js", "MongoDB"],
      features: ["Geofencing", "Analytics Dashboard", "Custom Maps", "API Integration"],
      demoUrl: "#",
      githubUrl: "https://github.com/RiniHSD",
      category: "GIS Platform",
      icon: MapPin
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions that bridge the gap between complex geospatial data and user-friendly experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="bg-cyber-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl overflow-hidden hover:border-cyber-cyan/60 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(0, 255, 255, 0.1)'
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <motion.div
                      className="flex items-center px-3 py-1 bg-cyber-dark/80 backdrop-blur-sm border border-cyber-cyan/30 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <project.icon size={16} className="text-cyber-cyan mr-2" />
                      <span className="text-cyber-cyan text-sm font-medium">{project.category}</span>
                    </motion.div>
                  </div>

                  {/* Overlay Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cyber-dark/80 backdrop-blur-sm border border-cyber-cyan/30 rounded-full text-cyber-cyan hover:border-cyber-cyan hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cyber-dark/80 backdrop-blur-sm border border-cyber-cyan/30 rounded-full text-cyber-cyan hover:border-cyber-cyan hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyber-cyan mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center text-gray-400"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1 h-1 bg-cyber-cyan rounded-full mr-2" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 bg-cyber-black/50 border border-cyber-purple/30 rounded text-xs text-cyber-purple"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.6)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/RiniHSD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-cyber-cyan text-cyber-cyan font-semibold rounded-lg hover:bg-cyber-cyan hover:text-cyber-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;