import React from 'react';
import { Building2, Calendar, Users, Briefcase, Phone, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">About Yubhian Technologies</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
            <div className="w-16 h-1 bg-blue-600"></div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded in 2024, Yubhian Technologies emerged as a dynamic and innovative IT solutions 
              provider based in Bhimavaram, Andhra Pradesh. We specialize in e-business, 
              Business Intelligence, Database Systems, systems integration, and custom 
              application development.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our journey began with a vision to bridge the gap between technology and business 
              needs, providing solutions that are both innovative and practical for the modern enterprise.
            </p>
            <div className="pt-4">
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Learn about our history
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transform md:translate-y-4 transition-transform hover:translate-y-0 duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-64 w-full flex items-center justify-center">
              <Building2 size={80} className="text-white opacity-50" />
            </div>
            <div className="bg-white p-6 border-t-4 border-blue-600">
              <h3 className="font-semibold text-xl mb-2">Technology With Purpose</h3>
              <p className="text-gray-600">Creating solutions that drive business growth and innovation.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg transform md:translate-y-4 transition-transform hover:translate-y-0 duration-300">
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 h-64 w-full flex items-center justify-center">
              <Users size={80} className="text-white opacity-50" />
            </div>
            <div className="bg-white p-6 border-t-4 border-blue-600">
              <h3 className="font-semibold text-xl mb-2">Client-Centered Approach</h3>
              <p className="text-gray-600">Building relationships through exceptional service and results.</p>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
            <div className="w-16 h-1 bg-blue-600"></div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are dedicated to delivering top-tier, client-focused solutions that prioritize 
              quality, reliability, timely delivery, and cost-effectiveness. Our mission is to 
              help organizations navigate the ever-evolving business landscape by providing 
              tailored technology solutions that meet both immediate and long-term needs.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Yubhian Technologies, we believe that technology should serve as an enabler for business 
              success, not a barrier. This philosophy guides everything we do, from initial consultation 
              to final implementation and ongoing support.
            </p>
            <div className="pt-4">
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                View our case studies
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-white rounded-lg shadow-md px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Company Details</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Calendar size={32} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Founded</h3>
            <p className="text-gray-600 text-lg text-center">2024</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Building2 size={32} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Headquarters</h3>
            <p className="text-gray-600 text-lg text-center">Bhimavaram, Andhra Pradesh</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Users size={32} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Company Size</h3>
            <p className="text-gray-600 text-lg text-center">11-50 employees</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Briefcase size={32} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Industry</h3>
            <p className="text-gray-600 text-lg text-center">IT Services and IT Consulting</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Phone size={32} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Phone</h3>
            <p className="text-gray-600 text-lg text-center">+91 8500401091</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Globe size={32} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Website</h3>
            <a href="https://yubhiantechnologies.in" className="text-blue-600 hover:text-blue-800 transition-colors text-lg">
              yubhiantechnologies.in
            </a>
          </div>
        </div>
      </section> */}
      
      <section className="py-16 bg-blue-700 rounded-lg px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-80"></div>
          <p className="text-white text-lg opacity-90 mb-10 leading-relaxed">
            We're always looking for talented individuals to join our team. If you're passionate 
            about technology and innovation, we'd love to hear from you.
          </p>
          <button className="bg-white text-blue-700 font-medium px-8 py-4 rounded-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;