import React from 'react';
import { Settings, Database, BarChart3, Cable, Wrench, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "E-Business Solutions",
      description: "Comprehensive digital solutions to transform your business operations and enhance your online presence.",
      icon: <Settings className="text-blue-600" size={32} />
    },
    {
      title: "Business Intelligence",
      description: "Data-driven insights and analytics to power your business decisions and strategic planning.",
      icon: <BarChart3 className="text-blue-600" size={32} />
    },
    {
      title: "Database Systems",
      description: "Robust database solutions for efficient data management and secure storage.",
      icon: <Database className="text-blue-600" size={32} />
    },
    {
      title: "Systems Integration",
      description: "Seamless integration of disparate systems for unified operations and improved efficiency.",
      icon: <Cable className="text-blue-600" size={32} />
    },
    {
      title: "Custom Application Development",
      description: "Tailored software solutions designed specifically to address your unique business challenges.",
      icon: <Wrench className="text-blue-600" size={32} />
    },
    {
      title: "Career Guidance & Training",
      description: "Comprehensive training programs and career guidance for students and professionals in the IT sector.",
      icon: <GraduationCap className="text-blue-600" size={32} />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Services</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          We deliver enterprise-grade IT solutions designed to optimize your business operations and drive growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-6">
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-blue-700 rounded-lg px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Yubhian Technologies?</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-80"></div>
          <p className="text-white text-lg opacity-90 mb-10 leading-relaxed">
            We build strong, long-term partnerships with our clients by consistently delivering solutions that 
            exceed expectations. Our approach combines technical expertise, industry knowledge, and a 
            commitment to quality, ensuring reliable, timely, and cost-effective solutions for your business challenges.
          </p>
          <button className="bg-white text-blue-700 font-medium px-8 py-4 rounded-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;