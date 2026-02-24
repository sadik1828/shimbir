// About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// ✅ FIX: Removed unused 'projects' import
import { teamMembers, testimonials } from './mockData';

const About = () => {
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

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We deliver the highest quality construction services with attention to every detail.'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Honest and transparent communication throughout every project phase.'
    },
    {
      icon: '⏱️',
      title: 'Reliability',
      description: 'On-time delivery and commitment to project timelines.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Eco-friendly practices and sustainable building solutions.'
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-900 py-24 text-center text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600)' }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Shimbir Group
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Building Somalia's Future, One Project at a Time
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#dd6b20]/20 rounded-xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800" 
                alt="Construction Site Somalia" 
                className="relative w-full h-96 object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-[#dd6b20] mb-6"></div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in <strong>2010 in Mogadishu, Somalia</strong>, Shimbir Group has grown from a small local contractor 
                into one of the most trusted construction companies in the Horn of Africa. Our name "Shimbir" means 
                "Bird" in Somali, symbolizing our vision to soar high and build structures that reach new heights.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We are proud to contribute to <strong>Somalia's reconstruction and development</strong>, working on 
                residential, commercial, and infrastructure projects across Mogadishu, Hargeisa, Kismayo, and beyond. 
                Our commitment to quality, safety, and local employment has made us a preferred partner for both 
                private clients and government initiatives.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With a team of <strong>50+ skilled Somali professionals</strong>, we combine local expertise with 
                international standards to deliver construction excellence that builds communities and transforms 
                skylines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#dd6b20]"
            >
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To deliver <strong>world-class construction services</strong> that exceed client expectations while 
                contributing to <strong>Somalia's economic growth and infrastructure development</strong>.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#dd6b20] mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Provide quality construction solutions using modern technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dd6b20] mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Create employment opportunities for Somali youth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dd6b20] mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Build safe, sustainable, and affordable structures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dd6b20] mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Partner with communities for long-term development</span>
                </li>
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#dd6b20]"
            >
              <div className="text-6xl mb-6">👁️</div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To become the <strong>leading construction company in Somalia and the Horn of Africa</strong>, 
                recognized for excellence, innovation, and positive community impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#dd6b20] mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Expand operations across all Somali regions by 2030</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dd6b20] mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Lead in sustainable and green building practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dd6b20] mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Train 1000+ Somali construction professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dd6b20] mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Set new standards for construction excellence in East Africa</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-[#dd6b20] mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-[#dd6b20] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <div className="w-20 h-1 bg-[#dd6b20] mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Experienced professionals dedicated to building Somalia's future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#dd6b20] font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Somalia Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Building Somalia Together</h2>
              <div className="w-20 h-1 bg-[#dd6b20] mb-6"></div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At Shimbir Group, we believe in <strong>local empowerment and community development</strong>. 
                Every project we undertake creates jobs, develops skills, and contributes to Somalia's 
                reconstruction efforts.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#dd6b20] text-white p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Local Employment</h4>
                    <p className="text-gray-600">95% of our workforce is Somali, creating jobs in local communities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#dd6b20] text-white p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Skills Training</h4>
                    <p className="text-gray-600">Ongoing training programs for Somali construction workers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#dd6b20] text-white p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Community Projects</h4>
                    <p className="text-gray-600">Supporting schools, hospitals, and public infrastructure</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#dd6b20]/20 rounded-xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800" 
                alt="Somalia Construction" 
                className="relative w-full h-96 object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-xl relative"
              >
                <div className="text-[#dd6b20] text-4xl mb-4">"</div>
                <p className="text-gray-300 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.clientName} 
                    className="w-12 h-12 rounded-full mr-4 border-2 border-[#dd6b20]" 
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.clientName}</h4>
                    <p className="text-sm text-gray-400">{testimonial.projectType}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#dd6b20]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Project in Somalia?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Let's create something amazing together.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-white text-[#dd6b20] font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Contact Us Now
            </Link>
            <Link 
              to="/projects" 
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#dd6b20] transition"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;