// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#dd6b20] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SG</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Shimbir Group</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors relative group ${
                  location.pathname === item.path
                    ? 'text-[#dd6b20]'
                    : 'text-gray-700 hover:text-[#dd6b20]'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#dd6b20] transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-[#dd6b20] text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition shadow-md hover:shadow-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={isMenuOpen ? 'open' : 'closed'}
              className="w-6 h-6 relative"
            >
              <motion.span
                variants={{
                  open: { rotate: 45, y: 6 },
                  closed: { rotate: 0, y: 0 }
                }}
                className="absolute w-6 h-0.5 bg-gray-700 top-0"
              />
              <motion.span
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 }
                }}
                className="absolute w-6 h-0.5 bg-gray-700 top-3"
              />
              <motion.span
                variants={{
                  open: { rotate: -45, y: -6 },
                  closed: { rotate: 0, y: 0 }
                }}
                className="absolute w-6 h-0.5 bg-gray-700 top-6"
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t pt-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-medium py-2 ${
                      location.pathname === item.path
                        ? 'text-[#dd6b20]'
                        : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  className="bg-[#dd6b20] text-white px-6 py-2 rounded-lg text-center hover:bg-orange-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;