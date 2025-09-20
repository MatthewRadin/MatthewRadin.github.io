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
      value: 'matthew.radin@email.com',
      action: 'mailto:matthew.radin@email.com',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Voice Channel',
      description: 'Call for immediate discussions',
      icon: <Phone className="w-8 h-8" />,
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Location',
      description: 'Current base of operations',
      icon: <MapPin className="w-8 h-8" />,
      value: 'Your City, State',
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
    {
      name: 'Twitter',
      username: '@MatthewRadin',
      url: 'https://twitter.com/MatthewRadin',
      icon: <Twitter className="w-6 h-6" />,
      color: 'from-cyan-400 to-blue-500'
    }
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
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
          GUILD CONTACT
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Ready to collaborate on your next game project? Send me a message through any of the channels below. Let's create something amazing together!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-panel p-8"
        >
          <div className="flex items-center mb-6">
            <MessageSquare className="w-8 h-8 text-cyan-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Send Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Player Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Quest Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="What's this about?"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full game-button-primary py-4 text-lg font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Zap className="animate-spin mr-2" size={20} />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="mr-2" size={20} />
                  Send Message
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
              <Users className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Contact Channels</h2>
            </div>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  className="game-panel p-6 hover:border-purple-400/60 transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-r ${method.color} p-3 rounded-lg`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white">{method.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                      {method.action ? (
                        <a
                          href={method.action}
                          className="text-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-cyan-300">{method.value}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Social Channels</h3>
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
                  className="game-panel p-4 flex items-center space-x-4 hover:border-cyan-400/60 transition-all group"
                >
                  <div className={`bg-gradient-to-r ${social.color} p-2 rounded`}>
                    {social.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {social.name}
                    </div>
                    <div className="text-gray-400 text-sm">{social.username}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="game-panel p-6"
          >
            <h3 className="text-xl font-bold text-green-300 mb-4">Response Time</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400">24h</div>
                <div className="text-gray-400 text-sm">Email Response</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">2h</div>
                <div className="text-gray-400 text-sm">Social Media</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="p-6 vscode-content">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="mb-8"
//       >
//         <h2 className="text-3xl font-bold mb-4 vscode-syntax-highlight">
//           <span className="vscode-keyword">public class</span> <span className="vscode-class">Contact</span> &#123;
//         </h2>
//         <p className="text-[#cccccc] text-lg max-w-2xl">
//           Ready to work together? Let's discuss your next project
//         </p>
//       </motion.div>

//       <div className="max-w-2xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <div className="vscode-terminal p-4">
//             <div className="flex items-center mb-4">
//               <div className="flex space-x-2">
//                 <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                 <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//               </div>
//               <span className="ml-4 text-sm text-[#6a6a6a]">ContactForm.java</span>
//             </div>
            
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-[#cccccc] mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="contact_name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     autoComplete="off"
//                     autoCorrect="off"
//                     autoCapitalize="off"
//                     spellCheck="false"
//                     className="vscode-input w-full"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-[#cccccc] mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="contact_email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     autoComplete="off"
//                     autoCorrect="off"
//                     autoCapitalize="off"
//                     spellCheck="false"
//                     className="vscode-input w-full"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-[#cccccc] mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="contact_subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   autoComplete="off"
//                   autoCorrect="off"
//                   autoCapitalize="off"
//                   spellCheck="false"
//                   className="vscode-input w-full"
//                   placeholder="What's this about?"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-[#cccccc] mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="contact_message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   autoComplete="off"
//                   autoCorrect="off"
//                   autoCapitalize="off"
//                   spellCheck="false"
//                   rows={6}
//                   className="vscode-input w-full resize-none"
//                   placeholder="Tell me about your project..."
//                 />
//               </div>

//               <motion.button
//                 type="submit"
//                 disabled={isSubmitting}
//                 whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
//                 whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
//                 className={`vscode-button w-full flex items-center justify-center gap-2 ${
//                   isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     Sending...
//                   </>
//                 ) : submitStatus === 'success' ? (
//                   <>
//                     <CheckCircle className="w-5 h-5 text-green-400" />
//                     Message Sent!
//                   </>
//                 ) : submitStatus === 'error' ? (
//                   <>
//                     <AlertCircle className="w-5 h-5 text-red-400" />
//                     Send Failed
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5" />
//                     Send Message
//                   </>
//                 )}
//               </motion.button>

//               {submitStatus === 'success' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded text-green-400 text-sm"
//                 >
//                   ✓ Message sent successfully! I'll get back to you soon.
//                 </motion.div>
//               )}

//               {submitStatus === 'error' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded text-red-400 text-sm"
//                 >
//                   ✗ Failed to send message. Please try again or contact me directly.
//                 </motion.div>
//               )}
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact; 