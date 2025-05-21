import React from 'react';

const Services = () => {
  const services = [
    {
      title: "E-Business Solutions",
      description: "Comprehensive digital solutions to transform your business operations and enhance your online presence.",
      icon: "💻"
    },
    {
      title: "Business Intelligence",
      description: "Data-driven insights and analytics to power your business decisions and strategy.",
      icon: "📊"
    },
    {
      title: "Database Systems",
      description: "Robust database solutions for efficient data management and storage.",
      icon: "🗃️"
    },
    {
      title: "Systems Integration",
      description: "Seamless integration of disparate systems for unified operations.",
      icon: "🔌"
    },
    {
      title: "Custom Application Development",
      description: "Tailored software solutions designed specifically for your business needs.",
      icon: "🛠️"
    },
    {
      title: "Career Guidance & Training",
      description: "Comprehensive training programs and career guidance for students and professionals.",
      icon: "🎓"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We offer a comprehensive range of IT services designed to meet your business needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-blue-50 rounded-lg px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Yubhian Technologies?</h2>
          <p className="text-gray-600 mb-8">
            We believe in building strong, long-term partnerships and ensuring total customer 
            satisfaction by anticipating and responding to the demands of the market. Our 
            solutions prioritize quality, reliability, timely delivery, and cost-effectiveness.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
            Contact Us for More Information
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;