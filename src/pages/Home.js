// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects, services, testimonials } from './mockData';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Building Your Vision, <br /> Creating Your Future
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto"
          >
            Professional construction services with quality craftsmanship and on-time delivery.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="px-8 py-4 bg-[#dd6b20] text-white font-semibold rounded-lg hover:bg-orange-700 transition shadow-lg hover:shadow-orange-500/30">
              Get Free Quote
            </Link>
            <Link to="/projects" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg">
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#dd6b20] font-semibold tracking-wider uppercase"
            >
              What We Do
            </motion.span>
            <h2 className="text-4xl font-bold mb-4 mt-2">Our Services</h2>
            <div className="w-20 h-1 bg-[#dd6b20] mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Comprehensive construction solutions tailored to your specific needs.</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div 
                key={service._id} 
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-[#dd6b20]"
              >
                <div className="text-6xl mb-6 bg-orange-50 w-20 h-20 flex items-center justify-center rounded-full mx-auto">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{service.name}</h3>
                <p className="text-gray-600 mb-6 text-center text-sm">{service.description}</p>
                <Link to="/services" className="block text-center text-[#dd6b20] font-semibold hover:text-orange-700">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#dd6b20] font-semibold tracking-wider uppercase">Our Portfolio</span>
              <h2 className="text-4xl font-bold mb-4 mt-2">Featured Projects</h2>
              <div className="w-20 h-1 bg-[#dd6b20]"></div>
            </div>
            <Link to="/projects" className="hidden md:block text-[#dd6b20] font-semibold hover:text-orange-700">View All Projects →</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <motion.div 
                key={project._id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#dd6b20] text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/projects" className="text-[#dd6b20] font-semibold hover:text-orange-700">View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#dd6b20] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '200+', label: 'Projects Completed' },
              { number: '50+', label: 'Expert Team' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#dd6b20] font-semibold tracking-wider uppercase">Testimonials</span>
            <h2 className="text-4xl font-bold mb-4 mt-2">Client Testimonials</h2>
            <div className="w-20 h-1 bg-[#dd6b20] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial._id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-xl relative hover:shadow-xl transition-shadow"
              >
                <div className="text-[#dd6b20] text-4xl mb-4">"</div>
                <p className="text-gray-300 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.clientName} className="w-12 h-12 rounded-full mr-4 border-2 border-[#dd6b20]" />
                  <div>
                    <h4 className="font-bold">{testimonial.clientName}</h4>
                    <p className="text-sm text-gray-400">{testimonial.projectType}</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#dd6b20]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#dd6b20] to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Contact us today for a free consultation and quote. Let's build something great together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact" className="inline-block px-8 py-4 bg-white text-[#dd6b20] font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;