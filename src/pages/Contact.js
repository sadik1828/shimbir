// Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// ✅ FIX: Removed unused Link import
// import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Our Location',
      content: 'Mogadishu, Somalia',
      subtext: 'Serving all regions'
    },
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      title: 'Phone Number',
      content: '+252 61 2485763',
      subtext: 'Mon-Sat 8am-6pm'
    },
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Email Address',
      content: 'info@shimbirgroup.com',
      subtext: '24/7 Support'
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <section className="bg-gray-900 py-24 text-center text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600)' }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Let's build something amazing together
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#dd6b20]/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#dd6b20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={info.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                <p className="text-gray-900 font-semibold mb-1">{info.content}</p>
                <p className="text-gray-500 text-sm">{info.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd6b20] focus:border-transparent transition" 
                    placeholder="John Doe" 
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd6b20] focus:border-transparent transition" 
                      placeholder="mohamed@shimbir.com" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd6b20] focus:border-transparent transition" 
                      placeholder="+252 61 XXX XXX" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd6b20] focus:border-transparent transition"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="road">Road Construction</option>
                    <option value="design">Design & Build</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd6b20] focus:border-transparent transition" 
                    placeholder="Tell us about your project..." 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#dd6b20] text-white px-6 py-4 rounded-lg font-bold hover:bg-orange-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254116.3624842128!2d45.182007!3d2.046934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e5a9337c7e5a5a5%3A0x6c6c6c6c6c6c6c6c!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2s!4v1234567890" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Shimbir Group Location"
                ></iframe>
              </div>

              {/* Additional Info */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-6">Why Choose Shimbir Group?</h3>
                <div className="space-y-4">
                  {[
                    '15+ Years of Experience',
                    '50+ Expert Team Members',
                    '200+ Projects Completed',
                    '100% Client Satisfaction',
                    'On-Time Delivery Guarantee',
                    'Quality Materials & Workmanship'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-[#dd6b20] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[#dd6b20] to-orange-600 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">Need Urgent Support?</h3>
                <p className="mb-4 opacity-90">Call us directly for immediate assistance with your construction needs.</p>
                <a href="tel:+252615550123" className="inline-block bg-white text-[#dd6b20] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                  📞 +252 61 2485763
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;