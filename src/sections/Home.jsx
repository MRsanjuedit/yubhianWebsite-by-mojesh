import React from "react";
import { motion } from "framer-motion";
import HeroS from "./../assets/HeroS.jpg";
import MSME from "./../assets/MSME.png";
import StartupIndia from "./../assets/StartupIndia.png";
import AICTE from "./../assets/AICTE.png";

const Home = () => {
  return (
    <div className="overflow-x-hidden h-full">
      {/* Hero Section */}
      <section
        className="relative w-full overflow-x-hidden h-[130vh] md:h-[155vh] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroS})` }}
      >
        {/* Animated overlay */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />

        {/* Animated text block */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-0 max-w-7xl mx-auto">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-lg font-medium">
                Unleash Digital Potential
              </span>
            </div>

            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-8xl font-bold text-white mb-4 leading-relaxed md:leading-[1.15]"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Delivering Tech <br />
              <span className="outlined-text">Solutions</span> For <br />
              Your Startups
            </motion.h1>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 transition">
                Work With Us
                <span className="bg-blue-600 text-white rounded-full p-1 flex items-center justify-center w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Review Box */}
        <div className="absolute bottom-8 right-8 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center gap-4 shadow-lg max-w-xs w-full">
          {/* Top Button */}
          <div className="w-full text-right">
            <button className="text-black flex items-center gap-1 hover:underline transition">
              More Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Client Avatars + Count */}
          <div className="flex items-center justify-center w-full">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <img
                  key={i}
                  src={HeroS}
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="ml-4 text-left">
              <span className="text-blue-600 font-bold text-xl">25k+</span>
              <p className="text-sm text-black leading-tight">Clients Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliates Section */}
      <section className="py-14 px-6 md:px-20 mx-20 max-w-7xl bg-[#eeeeee] flex justify-between items-center rounded-3xl mt-10">
        <h2 className="text-center text-lg md:text-3xl font-semibold">
          Our Affiliates
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-30">
          <img
            src={MSME}
            alt="MSME"
            className="w-24 h-auto filter md:grayscale hover:grayscale-0 hover:scale-110 transition duration-300 ease-in-out"
          />
          <img
            src={StartupIndia}
            alt="Startup India"
            className="w-32 h-auto filter md:grayscale hover:grayscale-0 hover:scale-110 transition duration-300 ease-in-out"
          />
          <img
            src={AICTE}
            alt="AICTE"
            className="w-28 h-auto filter md:grayscale hover:grayscale-0 hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
