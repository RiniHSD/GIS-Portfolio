import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, MapPin, Smartphone, Globe, Map } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Surveyor');
  const projectCategories = [
    {
      name: "GIS Analyst",
      icon: Map,
      
    },
    {
      name: "Surveyor",
      icon: MapPin,
      
    },
    {
      name: "GIS Developer",
      icon: Smartphone,
      
    }
  ];

  const projects = [
    // Surveyor
    {
      title: "Data Aquisition and Mapping",
      description: "Conducted data acquisition through aerial photography and field surveys on population and land use in Padukuhan Canden, Ngargosari Village, Samigaluh District, Kulon Progo Regency, DIY",
      image: "https://project-gis-rini.vercel.app/images/31.png",
      technologies: ["ArcGIS", "StoryMaps", "Drone Deploy", "ODK Collect"],
      features: ["Aerial image acquisition", "Population and land use field surveys", "GNSS geodetic data collection", "StoryMap-based data visualization"],
      demoUrl: "https://storymaps.arcgis.com/stories/cda2b0bdd6f64cf49f93ba6b8c76d56f",
      githubUrl: "https://github.com/RiniHSD",
      category: "Surveyor",
      icon: MapPin
    },
    {
      title: "GNSS RTK Accuracy Test",
      description: "Collaborative project between Universitas Gadjah Mada and PT Techno GIS Indonesia to test the positional accuracy of a locally-produced GNSS RTK receiver",
      image: "https://project-gis-rini.vercel.app/images/33.png",
      technologies: ["GNSS RTK", "Surveying", "ArcGIS", "Total Station"],
      features: ["Centimeter-level accuracy testing", "Field data validation", "Affordable local technology development", "Cost-efficient alternative to imported GNSS (55M vs 150M+)"],
      demoUrl: "https://dtk.sv.ugm.ac.id/inovasi-teknologi-pemetaan-launching-produk-presisi-untuk-penetapan-dan-penegasan-batas-desa/",
      githubUrl: "https://github.com/RiniHSD",
      category: "Surveyor",
      icon: MapPin
    },
    {
      title: "Aerial Mapping", 
      description: "Conducted an aerial photogrammetry project over the Universitas Gadjah Mada campus field. Collected UAV imagery and ground control points (GCPs) for orthophoto generation",
      image: "https://project-gis-rini.vercel.app/images/32.png",
      technologies: ["DJI Mavic 2 Pro", "GNSS Leica", "Drone Deploy", "Agisoft Metashape"],
      features: ["Aerial imagery acquisition", "GCP measurement", "Automated flight planning", "Orthophoto and 3D model"],
      demoUrl: "https://project-gis-rini.vercel.app/images/32.png",
      githubUrl: "https://github.com/RiniHSD",
      category: "Surveyor",
      icon: MapPin
    },
    // GIS Analyst
    {
      title: "RDTR Mapping",
      description: "Created base maps and thematic layers for the Detailed Spatial Plan (RDTR) of IKK Lubuk Tarok, Sijunjung Regency, during an internship at the Ministry of ATR/BPN. Contributed to spatial structure planning and technical documentation",
      image: "https://project-gis-rini.vercel.app/images/52.png",
      technologies: ["ArcGIS", "QGIS", "Microsoft Word"],
      features: ["Base map revision and digitization", "Land use and spatial pattern analysis", "RDTR document drafting (2024-2044)"],
      demoUrl: "https://project-gis-rini.vercel.app/",
      githubUrl: "https://github.com/RiniHSD",
      category: "GIS Analyst",
      icon: Map
    },
    {
      title: "Environmental and Land Cover Analysis",
      description: "Performed multi-platform spatial analysis using ArcGIS, ENVI, and Google Earth Engine. Project outputs include NDVI classification, land cover change detection, and urban expansion modeling",
      image: "https://project-gis-rini.vercel.app/images/51.png",
      technologies: ["ArcGIS", "ENVI", "Google Earth Engine", "SAGA GIS"],
      features: ["NDVI and LULC classification", "Change detection using multi-temporal imagery", "Cloud-based analysis with GEE JavaScript API", "Raster calculation and supervised classification"],
      demoUrl: "https://project-gis-rini.vercel.app/",
      githubUrl: "https://github.com/RiniHSD",
      category: "GIS Analyst",
      icon: Map
    },
    {
      title: "Album Map Generation",
      description: "Designed and compiled a comprehensive thematic map album, covering topography, land use, accessibility, and public facilities in Pajangan District, Bantul Regency",
      image: "https://project-gis-rini.vercel.app/images/53.jpg",
      technologies: ["ArcGIS", "RBI Map", "BPS Data"],
      features: ["Topographic and land use mapping", "Multi-page map layout design", "Printed & digital album output"],
      demoUrl: "https://drive.google.com/file/d/1Muu2iEImjb70QqBep6yhWSpUox1QPXmR/view",
      githubUrl: "https://github.com/RiniHSD",
      category: "GIS Analyst",
      icon: Map
    },
    // GIS Developer
    {
      title: "PRESISI",
      description: "A patented mobile-based mapping application for village boundary delineation. It integrates GNSS geodetic tools to achieve high-accuracy spatial mapping",
      image: "https://project-gis-rini.vercel.app/images/42.png",
      technologies: ["JavaScript", "React Native", "GNSS Integration", "PostgreSQL"],
      features: ["GNSS-integrated boundary mapping", "High-accuracy spatial processing", "🏆 HKI-registered geospatial innovation"],
      demoUrl: "https://pdki-indonesia.dgip.go.id/link/45433030323032343235383233357c636f70797269676874",
      githubUrl: "https://github.com/RiniHSD",
      category: "GIS Developer",
      icon: Smartphone
    },
    {
      title: "AIRIS",
      description: "A mobile GIS application to map and inventory irrigation networks in real-time using low-cost GNSS integration. Built with React Native and designed to support centimeter-level spatial accuracy and offline field data collection",
      image: "https://project-gis-rini.vercel.app/images/41.png",
      technologies: ["React Native", "GNSS Integration", "JavaScript", "PostgreSQL"],
      features: ["Real-time mapping of irrigation channels", "RTK-based coordinate correction with NTRIP", "GNSS geodetic low-cost device integration"],
      demoUrl: "https://github.com/RiniHSD/AIRISMAP",
      githubUrl: "https://github.com/RiniHSD",
      category: "GIS Developer",
      icon: Smartphone
    },
    {
      title: "GeoRoad Report",
      description: "A mobile GIS application for reporting damaged roads in Siak Regency, Riau Province. Developed as part of a practical course project using open-source tools and government data",
      image: "https://project-gis-rini.vercel.app/images/43.png",
      technologies: ["JavaScript", "Leaflet", "App Script", "Google Sheets"],
      features: ["User-submitted road damage reports", "Dynamic map visualization with Leaflet", "Integrated with live Google Sheets database", "Data analysis based on BPS statistics (2022)"],
      demoUrl: "https://github.com/RiniHSD/GeoRoad-Report",
      githubUrl: "https://github.com/RiniHSD",
      category: "GIS Developer",
      icon: Smartphone
    }
  ];


  const filteredProjects = projects.filter(
    project => project.category === activeCategory
  );

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

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {projectCategories.map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer p-6 rounded-xl border-2 ${
                activeCategory === category.name
                  ? 'bg-cyber-cyan/10 border-cyber-cyan'
                  : 'bg-cyber-dark/50 border-cyber-cyan/20'
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <div className="flex items-center">
                <category.icon className="text-cyber-cyan mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>
              {/* <p className="mt-2 text-cyber-cyan">{category.count} Projects</p> */}
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
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
                    <div className="relative h-64 overflow-hidden">
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
                        {/* <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-cyber-dark/80 backdrop-blur-sm border border-cyber-cyan/30 rounded-full text-cyber-cyan hover:border-cyber-cyan hover:scale-110 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                        </motion.a> */}
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
          </motion.div>
        </AnimatePresence>

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
