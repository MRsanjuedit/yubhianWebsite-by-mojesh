import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Circle, Square, Triangle, Users, FileSearch, Palette, TestTube, Code, CheckCircle2, Rocket, Wrench } from 'lucide-react';

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  align, 
  isFirst = false,
  isLast = false
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      x: align === 'left' ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.3,
        ease: "easeOut",
      }
    }
  };

  const doodleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    rotate: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const spinAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  };

  const bounceAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const getStepDoodles = () => {
    const doodleMap = {
      "01": [
        <motion.div animate={floatingAnimation} className="text-blue-400" key="users">
          <Users className="w-8 h-8" />
        </motion.div>,
        <motion.div animate={bounceAnimation} className="text-indigo-400" key="search">
          <FileSearch className="w-7 h-7" />
        </motion.div>
      ],
      "02": [
        <motion.div animate={spinAnimation} className="text-purple-400" key="planning">
          <Square className="w-8 h-8" />
        </motion.div>,
        <motion.div animate={floatingAnimation} className="text-violet-400" key="strategy">
          <Triangle className="w-7 h-7" />
        </motion.div>
      ],
      "03": [
        <motion.div animate={bounceAnimation} className="text-pink-400" key="design">
          <Palette className="w-8 h-8" />
        </motion.div>,
        <motion.div animate={floatingAnimation} className="text-rose-400" key="creative">
          <Circle className="w-7 h-7" />
        </motion.div>
      ],
      "04": [
        <motion.div animate={spinAnimation} className="text-amber-400" key="review">
          <TestTube className="w-8 h-8" />
        </motion.div>,
        <motion.div animate={bounceAnimation} className="text-orange-400" key="test">
          <CheckCircle2 className="w-7 h-7" />
        </motion.div>
      ],
      "05": [
        <motion.div animate={floatingAnimation} className="text-emerald-400" key="dev">
          <Code className="w-8 h-8" />
        </motion.div>,
        <motion.div animate={spinAnimation} className="text-green-400" key="coding">
          <Square className="w-7 h-7" />
        </motion.div>
      ],
      "06": [
        <motion.div animate={bounceAnimation} className="text-cyan-400" key="qa">
          <TestTube className="w-8 h-8" />
        </motion.div>,
        <motion.div animate={floatingAnimation} className="text-teal-400" key="testing">
          <CheckCircle2 className="w-7 h-7" />
        </motion.div>
      ],
      "07": [
        <motion.div animate={spinAnimation} className="text-blue-400" key="deploy">
          <Rocket className="w-8 h-8" />
        </motion.div>,
        <motion.div animate={bounceAnimation} className="text-indigo-400" key="launch">
          <Triangle className="w-7 h-7" />
        </motion.div>
      ],
      "08": [
        <motion.div animate={floatingAnimation} className="text-violet-400" key="support">
          <Wrench className="w-8 h-8" />
        </motion.div>,
        <motion.div animate={spinAnimation} className="text-purple-400" key="maintenance">
          <Circle className="w-7 h-7" />
        </motion.div>
      ]
    };

    return doodleMap[number] || [];
  };

  return (
    <div ref={ref} className="relative">
      <motion.div 
        className={`absolute ${align === 'left' ? 'md:left-1/2 left-8' : 'md:left-1/2 left-8'} 
                  -translate-x-1/2 z-20 w-8 h-8 bg-blue-600 rounded-full 
                  shadow-lg flex items-center justify-center border-4 border-white`}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={dotVariants}
      ></motion.div>

      {/* Animated Doodles */}
      <motion.div
        className={`absolute ${align === 'left' ? '-right-4 md:right-1/2' : '-left-4 md:left-1/2'} 
                   top-0 z-10 hidden md:flex space-x-4`}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={doodleVariants}
      >
        {getStepDoodles()}
      </motion.div>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
        align === 'right' ? 'md:flex-row-reverse' : ''
      }`}>
        <div className="md:hidden mb-4 ml-16">
          <div className="process-number">{number}</div>
          <h3 className="text-xl font-semibold mt-2">{title}</h3>
        </div>

        <motion.div 
          className={`${align === 'left' ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} ml-16 md:ml-0`}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <div className="hidden md:block">
            <div className="process-number">{number}</div>
            <h3 className="text-2xl font-semibold mt-2">{title}</h3>
          </div>
          <p className="mt-4 text-gray-600">{description}</p>
        </motion.div>

        <motion.div 
          className={`hidden md:block ${align === 'left' ? 'md:pl-16' : 'md:pr-16'}`}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <div className={`bg-white p-6 rounded-xl shadow-lg transform transition-transform 
                          hover:scale-105 duration-300 border border-gray-100 relative overflow-hidden
                          ${align === 'left' ? 'text-left' : 'text-right'}`}>
            <h4 className="text-lg font-medium text-blue-700">Step {number}</h4>
            <p className="mt-2 text-gray-700">{description}</p>
            
            {/* Background doodles */}
            <motion.div 
              className="absolute -right-4 -bottom-4 text-gray-100 opacity-20"
              animate={spinAnimation}
            >
              {getStepDoodles()[0]}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {!isLast && (
        <div className={`absolute ${align === 'left' ? 'md:left-1/2 left-8' : 'md:left-1/2 left-8'} 
                      -translate-x-1/2 w-1 bg-indigo-100 z-10`}
             style={{ top: '2rem', height: 'calc(100% + 8rem)' }}></div>
      )}
    </div>
  );
};

export default ProcessStep;