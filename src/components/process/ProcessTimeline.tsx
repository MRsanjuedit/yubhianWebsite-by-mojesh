import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Process steps data
const processSteps = [
  {
    number: "01",
    title: "Client Engagement & Requirement Gathering",
    description: "Our IT consultants collaborate with your team to fully understand your unique needs, current challenges, and business objectives. This in-depth discovery phase ensures we capture all your requirements accurately.",
  },
  {
    number: "02",
    title: "Planning & Agreement",
    description: "We develop a comprehensive strategy tailored to your specific requirements, including technology selection, timeline, resource allocation, and clear deliverables.",
  },
  {
    number: "03",
    title: "Design Phase",
    description: "Our expert designers create detailed visual and architectural blueprints for your solution, focusing on user experience, scalability, and alignment with your brand identity.",
  },
  {
    number: "04",
    title: "Client Review and UAT",
    description: "We present our designs and prototypes for your feedback, conducting collaborative sessions to ensure the proposed solution matches your expectations.",
  },
  {
    number: "05",
    title: "Development Phase",
    description: "Our development team transforms approved designs into fully functional solutions using industry best practices, with regular check-ins to demonstrate progress.",
  },
  {
    number: "06",
    title: "Quality Assurance and Testing",
    description: "We conduct rigorous testing procedures to ensure your solution functions flawlessly across all scenarios, devices, and user roles.",
  },
  {
    number: "07",
    title: "Deployment",
    description: "We execute a carefully planned deployment strategy to launch your solution with minimal disruption to your operations, ensuring smooth transition.",
  },
  {
    number: "08",
    title: "Ongoing Support & Maintenance",
    description: "Our relationship continues beyond deployment with dedicated support, regular updates, and continuous optimization to ensure your solution evolves.",
  }
];

// Process Intro Component
const ProcessIntro = () => {
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Process</h2>
      <p className="text-lg text-gray-600 mb-8">
        We follow a structured approach to deliver exceptional results for your business. 
        Our proven methodology ensures transparent communication and successful project outcomes.
      </p>
    </div>
  );
};

// Process Step Component (for mobile view)
const ProcessStep = ({ number, title, description, align, isFirst, isLast }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isFirst && (
        <div className="absolute top-0 left-6 w-0.5 h-20 bg-blue-200 -translate-y-20"></div>
      )}
      {!isLast && (
        <div className="absolute top-16 left-6 w-0.5 h-20 bg-blue-200"></div>
      )}
      
      <div className={`flex ${align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Circle with number */}
        <div className="flex-shrink-0 relative z-10">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
            {number}
          </div>
        </div>
        
        {/* Content */}
        <div className={`bg-white rounded-lg p-4 shadow-md flex-grow mx-4 border border-blue-50 ${
          align === 'right' ? 'text-right' : 'text-left'
        }`}>
          <h3 className="font-bold text-blue-700">{title}</h3>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Main Process Timeline Component
const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  // Auto-rotate steps when not hovered
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredStep === null) {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [hoveredStep]);

  // Calculate position for circular layout
  const calculatePosition = (index) => {
    const angle = (index * 360) / processSteps.length - 90;
    const radius = 250;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y, angle };
  };

  // Calculate curved path between steps
  const calculateCurve = (startAngle, endAngle) => {
    const start = calculatePosition(startAngle / (360 / processSteps.length));
    const end = calculatePosition(endAngle / (360 / processSteps.length));
    
    // Control point for the curve
    const midAngle = (startAngle + endAngle) / 2;
    const controlRadius = 200;
    const controlX = Math.cos((midAngle * Math.PI) / 180) * controlRadius;
    const controlY = Math.sin((midAngle * Math.PI) / 180) * controlRadius;
    
    return `M ${start.x + 300} ${start.y + 300} Q ${controlX + 300} ${controlY + 300} ${end.x + 300} ${end.y + 300}`;
  };

  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <ProcessIntro />
      
      {/* Desktop/Tablet Version (Circular) */}
      <div className="hidden md:block container mx-auto px-4 mt-20">
        <div className="relative mx-auto" style={{ height: '700px' }}>
          {/* Description panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-2xl text-center z-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  {processSteps[currentStep].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {processSteps[currentStep].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Center circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <motion.div 
              className="w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full 
                       flex items-center justify-center text-white font-bold shadow-xl
                       border-4 border-white"
              animate={{
                scale: [1, 1.05, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm mb-1">Phase</div>
                  <div className="text-3xl">{processSteps[currentStep].number}</div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Connecting curves */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            width="600"
            height="600"
            viewBox="0 0 600 600"
          >
            {processSteps.map((_, index) => {
              const nextIndex = (index + 1) % processSteps.length;
              const startAngle = (index * 360) / processSteps.length;
              const endAngle = ((index + 1) * 360) / processSteps.length;
              const isActive = index === currentStep || nextIndex === currentStep;

              return (
                <motion.path
                  key={index}
                  d={calculateCurve(startAngle, endAngle)}
                  fill="none"
                  stroke={isActive ? "#3B82F6" : "#E5E7EB"}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              );
            })}
          </svg>

          {/* Process steps */}
          {processSteps.map((step, index) => {
            const pos = calculatePosition(index);
            const isActive = index === currentStep;

            return (
              <motion.div
                key={step.number}
                className="absolute left-1/2 top-1/2"
                style={{
                  x: pos.x - 50,
                  y: pos.y - 50,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-24 h-24 rounded-full shadow-lg flex items-center justify-center 
                             cursor-pointer transition-all duration-300
                             ${isActive ? 'bg-blue-500 text-white scale-110' : 'bg-white text-gray-800'}`}
                  whileHover={{ scale: 1.1 }}
                  animate={isActive ? {
                    scale: [1, 1.1, 1],
                    transition: { duration: 2, repeat: Infinity }
                  } : {}}
                  onHoverStart={() => setHoveredStep(index)}
                  onHoverEnd={() => setHoveredStep(null)}
                >
                  <div className="text-center p-3">
                    <div className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-blue-500'}`}>
                      {step.number}
                    </div>
                    <div className={`text-xs mt-1 ${isActive ? 'text-white' : 'text-gray-600'}`}>
                      {step.title.split(' ')[0]}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Version (Vertical Timeline) */}
      <div className="md:hidden container mx-auto px-4 mt-20">
        <div className="space-y-20">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              align={index % 2 === 0 ? 'left' : 'right'}
              isFirst={index === 0}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;