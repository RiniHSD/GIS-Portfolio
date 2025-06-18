import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Mountain, Music, BookOpen, Gamepad2, Coffee, Palette, Compass } from 'lucide-react';


// tambahin playlist spotify
const Interests = () => {
  const interests = [
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing landscapes and urban architecture, especially from aerial perspectives using drones.",
      color: "cyber-cyan"
    },
    {
      icon: Mountain,
      title: "Hiking & Exploration",
      description: "Exploring new terrains and documenting geographic features for personal mapping projects.",
      color: "cyber-green"
    },
    {
      icon: Music,
      title: "Electronic Music",
      description: "Creating ambient soundscapes and electronic music that complement coding sessions.",
      color: "cyber-purple"
    },
    {
      icon: BookOpen,
      title: "Technology Books",
      description: "Reading about emerging technologies, spatial computing, and future of digital mapping.",
      color: "cyber-pink"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Strategy games and open-world exploration games that feature detailed mapping systems.",
      color: "cyber-cyan"
    },
    {
      icon: Coffee,
      title: "Coffee Culture",
      description: "Discovering local coffee shops and studying urban development patterns through café mapping.",
      color: "cyber-green"
    },
    {
      icon: Palette,
      title: "Digital Art",
      description: "Creating data visualizations and infographic designs for complex geographic information.",
      color: "cyber-purple"
    },
    {
      icon: Compass,
      title: "Navigation Sports",
      description: "Orienteering and geocaching activities that combine technology with outdoor adventures.",
      color: "cyber-pink"
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
    <section id="interests" className="py-20 relative">
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
            Interests & Hobbies
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Beyond coding and GIS development, I explore diverse interests that inspire creativity and fuel innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="bg-cyber-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-6 h-full hover:border-cyber-cyan/60 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 35px rgba(0, 255, 255, 0.1)'
                }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl border ${getColorClasses(interest.color).split(' ')[1]} ${getColorClasses(interest.color).split(' ')[2]}/20 flex items-center justify-center mb-4 mx-auto`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <interest.icon size={32} className={getColorClasses(interest.color).split(' ')[0]} />
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">
                    {interest.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-cyber-cyan/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-cyber-dark/20 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-8 max-w-4xl mx-auto">
            <motion.div
              className="w-16 h-16 bg-neon-gradient rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Compass size={32} className="text-cyber-black" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              "Innovation Through Exploration"
            </h3>
            
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              I believe that the best technological solutions come from understanding the world around us. 
              My diverse interests in photography, exploration, and creative pursuits directly influence 
              my approach to GIS development and mobile application design. Each adventure and creative 
              project teaches me something new about spatial relationships, user experience, and the 
              intersection of technology with human needs.
            </p>
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Photos Taken", color: "cyber-cyan" },
              { number: "25+", label: "Hiking Trails", color: "cyber-green" },
              { number: "12", label: "Instruments Played", color: "cyber-purple" },
              { number: "100+", label: "Books Read", color: "cyber-pink" }
            ].map((fact, index) => (
              <motion.div
                key={fact.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`text-2xl font-bold mb-2 ${getColorClasses(fact.color).split(' ')[0]}`}
                  whileHover={{ scale: 1.1 }}
                >
                  {fact.number}
                </motion.div>
                <div className="text-gray-400 text-sm">{fact.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;