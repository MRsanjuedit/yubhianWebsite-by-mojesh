import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, ArrowRight } from 'lucide-react';

const ProcessIntro = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // Changed to false for re-animation when scrolling
    rootMargin: '0px 0px -50px 0px',
  });

  // Enhanced motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 2px 0 rgba(79, 70, 229, 0.1)",
      "0 0 15px 2px rgba(79, 70, 229, 0.3)",
      "0 0 2px 0 rgba(79, 70, 229, 0.1)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Background decorative elements */}
        <motion.div 
          className="absolute -top-20 -right-20 text-indigo-100 opacity-20 hidden md:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg width="180" height="180" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-20 -left-20 text-blue-100 opacity-20 hidden md:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg width="160" height="160" viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" fill="none" rx="15" />
            <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="2" fill="none" rx="10" />
          </svg>
        </motion.div>
        
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 mb-6"
          variants={badgeVariants}
          animate={inView ? { 
            ...badgeVariants.visible,
            ...glowAnimation 
          } : badgeVariants.hidden}
        >
          <motion.span animate={floatAnimation}>
            <Sparkles size={16} className="text-indigo-600 mr-2" />
          </motion.span>
          <span className="text-sm font-semibold tracking-wide text-indigo-700">OUR METHODOLOGY</span>
        </motion.div>
        
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
          variants={itemVariants}
        >
          Transform Your Business With Our
          <div className="relative inline-block mx-2">
            <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              IT Consulting
            </span>
            <motion.span 
              className="absolute -bottom-1 left-0 w-full h-3 bg-indigo-100 -z-10 rounded-sm"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
          </div>
          Expertise
        </motion.h2>
        
        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 mb-10 leading-relaxed"
          variants={itemVariants}
        >
          Our proven 8-step methodology ensures a seamless journey from concept to implementation,
          delivering exceptional value at every stage of your digital transformation.
        </motion.p>
        
        {/* Action button */}
        <motion.div variants={itemVariants}>
          <motion.button 
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Our Process</span>
            <motion.span 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProcessIntro;