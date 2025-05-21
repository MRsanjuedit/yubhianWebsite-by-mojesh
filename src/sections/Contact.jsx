import React, { useEffect, useState } from "react";

const contactEmails = "info@yubhiantechnologies.in";
const contactPhone = "+918500401091";

const socialLinks = {
  instagram: "https://instagram.com/yubhiantechnologies",
  twitter: "https://twitter.com/yubhiantech",
  facebook: "https://facebook.com/yubhiantechnologies",
  whatsapp: "https://wa.me/918500401091",
};

const images = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=80",
];

const AnimatedLetter = ({ letter, index, activeIndex }) => {
  return (
    <span
      style={{
        display: "inline-block",
        transition: "all 0.3s ease",
        color: activeIndex === index ? "#3b82f6" : "white",
        transform: activeIndex === index ? "translateY(-12px) scale(1.3)" : "none",
        marginRight: letter === " " ? "0.5rem" : "0.15rem",
        letterSpacing: "0.15em",
      }}
    >
      {letter}
    </span>
  );
};

export default function ContactFooter() {
  const text = "LET'S CONNECT";
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % text.length);
    }, 300);
    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <div className="bg-[#0f172a] text-white font-sans select-none">
      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2
          className="text-4xl sm:text-[5rem] md:text-[6rem] lg:text-[7rem] font-extrabold tracking-[0.12em] mb-8 whitespace-nowrap"
          aria-label={text}
          style={{ lineHeight: 1 }}
        >
          {text.split("").map((char, i) => (
            <AnimatedLetter key={i} letter={char} index={i} activeIndex={activeIndex} />
          ))}
        </h2>

        <div className="flex justify-center flex-col sm:flex-row gap-4 sm:gap-12 text-lg font-semibold break-words">
          <a
            href={`mailto:${contactEmails}`}
            className="hover:text-blue-500 transition-colors duration-300"
            aria-label="Send email"
          >
            {contactEmails}
          </a>
          <a
            href={`tel:${contactPhone}`}
            className="hover:text-blue-500 transition-colors duration-300"
            aria-label="Call phone"
          >
            {contactPhone}
          </a>
        </div>
      </section>

      {/* Auto-scrolling Images */}
      <section className="relative w-full overflow-hidden pb-20">
        <div className="flex w-max animate-scroll-left gap-4 px-4">
          {[...images, ...images].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Team working ${idx + 1}`}
              className="h-[200px] sm:h-[300px] w-[85vw] sm:w-[500px] object-cover rounded-md shadow-md shrink-0"
              draggable={false}
            />
          ))}
        </div>
      </section>

      {/* 
      Footer is commented out below. Uncomment to enable.

      <footer className="border-t border-gray-700 py-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 text-gray-400">
        <div className="mb-4 md:mb-0 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Yubhian Technologies. All rights reserved.
        </div>
        <div className="flex space-x-6 text-2xl">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-blue-500 transition-colors"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-500 transition-colors"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 transition-colors"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-blue-500 transition-colors"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </footer>
      */}

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
      `}</style>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
