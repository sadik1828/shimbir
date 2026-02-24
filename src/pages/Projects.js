// Projects.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from './mockData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get unique categories from projects
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <section className="bg-gray-900 py-24 text-center text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600)' }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#dd6b20] font-semibold tracking-wider uppercase"
          >
            Our Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 mt-2"
          >
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            A showcase of our construction excellence and commitment to quality.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-[#dd6b20] text-white shadow-lg shadow-orange-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project._id} 
                  variants={itemVariants}
                  layout
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  onMouseEnter={() => setHoveredProject(project._id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[#dd6b20] text-sm font-semibold mb-2">{project.category}</span>
                      <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      <div className="flex items-center text-white text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {project.location}
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-[#dd6b20] text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 text-gray-800 text-xs font-bold px-3 py-1 rounded-full capitalize">
                      {project.status}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#dd6b20] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {project.location}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-orange-50 text-[#dd6b20] text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Stats */}
                    {project.budget && project.duration && (
                      <div className="flex justify-between border-t pt-4 mb-4">
                        <div className="text-center">
                          <p className="text-xs text-gray-500">Budget</p>
                          <p className="font-semibold text-gray-900">{project.budget}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-500">Duration</p>
                          <p className="font-semibold text-gray-900">{project.duration}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-500">Status</p>
                          <p className="font-semibold text-green-600 capitalize">{project.status}</p>
                        </div>
                      </div>
                    )}

                    {/* View Details Button */}
                    <Link 
                      to={`/projects/${project._id}`} 
                      className="block w-full text-center py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-[#dd6b20] hover:text-white transition-all duration-300"
                    >
                      View Details →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
              <button 
                onClick={() => setFilter('All')}
                className="mt-4 text-[#dd6b20] font-semibold hover:text-orange-700"
              >
                View All Projects →
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '15+', label: 'Years Experience' },
              { number: '50+', label: 'Expert Team' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#dd6b20] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
            Have a Project in Mind?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how we can bring your vision to life with our expert construction services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-white text-[#dd6b20] font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;