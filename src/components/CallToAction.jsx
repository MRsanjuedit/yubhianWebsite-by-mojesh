import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const benefits = [
    "Streamlined processes and reduced operational costs",
    "Custom solutions tailored to your specific business needs",
    "Expert guidance from industry professionals",
    "Ongoing support and continuous improvement"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Our IT Solutions?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Schedule a consultation with our experts today and discover how our proven process can help your business achieve its technology goals.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.button 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-800 font-medium rounded-full 
                        shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="bg-white rounded-xl p-8 shadow-2xl transform -rotate-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg 
                           hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-400 rounded-full opacity-70"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-indigo-400 rounded-full opacity-60"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;