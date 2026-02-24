// Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { services } from './mockData';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <section className="bg-gray-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive construction solutions tailored to your specific needs.
          </motion.p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service._id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:direction-rtl' : ''}`}
              >
                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="absolute -inset-4 bg-[#dd6b20]/20 rounded-xl transform rotate-3"></div>
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="relative w-full h-96 object-cover rounded-xl shadow-2xl" 
                  />
                </div>

                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4 bg-orange-50 w-16 h-16 flex items-center justify-center rounded-full">{service.icon}</div>
                    <h2 className="text-3xl font-bold">{service.name}</h2>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.longDescription}
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-4 text-gray-900">Key Features:</h4>
                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <span className="text-[#dd6b20] mr-3 font-bold">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link to="/contact" className="inline-block px-6 py-3 bg-[#dd6b20] text-white font-semibold rounded-lg hover:bg-orange-700 transition">
                      Request Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Not sure which service you need?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Our team of experts is ready to help you plan and execute your next construction project.</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;