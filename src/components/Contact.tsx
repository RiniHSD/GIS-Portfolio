import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://xxxxCredentials", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
  
      if (result.ok || response.status === 200) {
        setNotification({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setNotification({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setNotification({ type: "error", message: "An error occurred while sending your message." });
      console.error(error);
    }
  };
  
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);
  

  const contactInfo = [
    // {
    //   icon: Mail,
    //   title: "Email",
    //   value: "rini@example.com",
    //   href: "mailto:rini@example.com",
    //   color: "cyber-cyan"
    // },
    // {
    //   icon: MapPin,
    //   title: "Location",
    //   value: "Indonesia",
    //   href: "#",
    //   color: "cyber-purple"
    // },
    // {
    //   icon: Phone,
    //   title: "Phone",
    //   value: "+62 XXX XXX XXXX",
    //   href: "tel:+62XXXXXXXXX",
    //   color: "cyber-green"
    // }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/RiniHSD",
      color: "hover:text-white"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rinihusadiyah/",
      color: "hover:text-blue-400"
    },
    // {
    //   icon: MessageCircle,
    //   name: "WhatsApp",
    //   href: "#",
    //   color: "hover:text-green-400"
    // }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'cyber-cyan': 'text-cyber-cyan border-cyber-cyan bg-cyber-cyan',
      'cyber-purple': 'text-cyber-purple border-cyber-purple bg-cyber-purple',
      'cyber-green': 'text-cyber-green border-cyber-green bg-cyber-green'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap['cyber-cyan'];
  };

  return (
    <>
    {notification && (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg text-sm font-medium
          ${notification.type === 'success' ? 'bg-cyber-cyan text-cyber-black' : 'bg-red-600 text-white'}`}
      >
        {notification.message}
      </motion.div>
    )}
    
    <section id="contact" className="py-20 relative">
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
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always excited to collaborate, learn, and explore new opportunities in geospatial technology. Feel free to reach out if you'd like to work together or just talk GIS!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm open to new opportunities, collaborations, internships, or 
                simply exchanging ideas around GIS, spatial planning, or mobile 
                mapping tools. Don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.a
                    href={info.href}
                    className="flex items-center p-4 bg-cyber-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-lg hover:border-cyber-cyan/60 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 10px 30px rgba(0, 255, 255, 0.1)'
                    }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-lg border ${getColorClasses(info.color).split(' ')[1]} ${getColorClasses(info.color).split(' ')[2]}/20 flex items-center justify-center mr-4`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon size={24} className={getColorClasses(info.color).split(' ')[0]} />
                    </motion.div>
                    
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-cyber-cyan transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-cyber-dark/50 backdrop-blur-sm rounded-full border border-cyber-cyan/20 text-gray-400 transition-all duration-300 ${link.color}`}
                    whileHover={{ 
                      scale: 1.1,
                      borderColor: 'rgba(0, 255, 255, 0.6)',
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-cyber-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-cyan/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-cyan focus:outline-none focus:ring-2 focus:ring-cyber-cyan/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-cyan/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-cyan focus:outline-none focus:ring-2 focus:ring-cyber-cyan/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-cyan/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-cyan focus:outline-none focus:ring-2 focus:ring-cyber-cyan/20 transition-all duration-300"
                    placeholder="Project inquiry / Collaboration / General"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-cyber-black/50 border border-cyber-cyan/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-cyan focus:outline-none focus:ring-2 focus:ring-cyber-cyan/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or how we can collaborate..."
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-neon-gradient text-cyber-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-cyan/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </>
  );
};

export default Contact;