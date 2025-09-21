import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare, Users, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      title: 'Direct Message',
      description: 'Send me a message for project inquiries',
      icon: <Mail className="w-8 h-8" />,
      value: 'matthewradin04@email.com',
      action: 'mailto:matthewradin04@email.com',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Voice Channel',
      description: 'Call for immediate discussions',
      icon: <Phone className="w-8 h-8" />,
      value: '+1 (704) 241-5094',
      action: 'tel:+17042415094',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Location',
      description: 'Current base of operations',
      icon: <MapPin className="w-8 h-8" />,
      value: 'Charlotte, NC',
      action: '',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const socialChannels = [
    {
      name: 'GitHub',
      username: 'MatthewRadin',
      url: 'https://github.com/MatthewRadin',
      icon: <Github className="w-6 h-6" />,
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'LinkedIn',
      username: 'matthew-radin',
      url: 'https://linkedin.com/in/matthew-radin',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'from-blue-400 to-blue-600'
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      alert('Message sent! Thanks for reaching out.');
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="heading-sketch text-4xl md:text-6xl mb-6">
          Collaboration Brief
          <span className="annotation-line"></span>
        </h1>
        <p className="body-text text-xl max-w-3xl mx-auto">
          Ready to collaborate on your next game project? Send me a message through any of the channels below. Let's create something amazing together!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="design-panel sketch-animation"
        >
          <div className="flex items-center mb-6">
            <MessageSquare className="w-8 h-8 text-warm-coral mr-3" />
            <h2 className="heading-sketch text-2xl font-bold">Project Inquiry</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block body-text mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-warm-cream border border-warm-brown rounded-lg px-4 py-3 text-warm-brown focus:border-warm-coral focus:outline-none transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block body-text mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-warm-cream border border-warm-brown rounded-lg px-4 py-3 text-warm-brown focus:border-warm-coral focus:outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block body-text mb-2 font-medium">Project Type</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-warm-cream border border-warm-brown rounded-lg px-4 py-3 text-warm-brown focus:border-warm-coral focus:outline-none transition-colors"
                placeholder="Game Design, Consultation, Collaboration..."
                required
              />
            </div>

            <div>
              <label className="block body-text mb-2 font-medium">Project Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-warm-cream border border-warm-brown rounded-lg px-4 py-3 text-warm-brown focus:border-warm-coral focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project vision, timeline, and how I can help..."
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-warm-coral hover:bg-warm-orange text-warm-cream py-4 text-lg font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              {isSubmitting ? (
                <>
                  <Zap className="animate-spin mr-2" size={20} />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="mr-2" size={20} />
                  Send Inquiry
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Contact Methods */}
          <div>
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-warm-blue mr-3" />
              <h2 className="heading-sketch text-2xl font-bold">
                Contact Information
                <span className="margin-note">How to reach me</span>
              </h2>
            </div>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  className="design-panel sketch-animation hover:shadow-md transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-warm-blue p-3 rounded-lg">
                      <span className="text-warm-cream">{method.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-tech font-bold">{method.title}</h3>
                      <p className="annotation text-sm mb-2">{method.description}</p>
                      {method.action ? (
                        <a
                          href={method.action}
                          className="body-text text-warm-blue hover:text-warm-coral transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="body-text text-warm-blue">{method.value}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="heading-tech text-xl font-bold mb-4">
              Professional Networks
              <span className="margin-note">Find me online</span>
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {socialChannels.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                  className="design-panel sketch-animation flex items-center space-x-4 hover:shadow-md transition-all group"
                >
                  <div className="bg-tech-gray p-2 rounded">
                    <span className="text-tech-white">{social.icon}</span>
                  </div>
                  <div>
                    <div className="heading-tech font-semibold group-hover:text-warm-coral transition-colors">
                      {social.name}
                    </div>
                    <div className="annotation text-sm">{social.username}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="design-panel sketch-animation"
          >
            <h3 className="heading-sketch text-xl font-bold mb-4">Response Timeline</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="heading-sketch text-2xl font-bold">24h</div>
                <div className="annotation text-sm">Email Response</div>
              </div>
              <div>
                <div className="heading-sketch text-2xl font-bold">2h</div>
                <div className="annotation text-sm">Social Media</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
