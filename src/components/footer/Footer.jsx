import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = {
    instagram: "https://instagram.com/yubhiantechnologies",
    twitter: "https://twitter.com/yubhiantech",
    facebook: "https://facebook.com/yubhiantechnologies",
    whatsapp: "https://wa.me/918500401091",
  };

  const socialIcons = [
    {
      href: socialLinks.facebook,
      label: "Facebook",
      iconClass: "fab fa-facebook-f",
      hoverColor: "hover:bg-blue-600",
    },
    {
      href: socialLinks.twitter,
      label: "Twitter",
      iconClass: "fab fa-twitter",
      hoverColor: "hover:bg-sky-400",
    },
    {
      href: socialLinks.instagram,
      label: "Instagram",
      iconClass: "fab fa-instagram",
      hoverColor: "hover:bg-pink-500",
    },
    {
      href: socialLinks.whatsapp,
      label: "WhatsApp",
      iconClass: "fab fa-whatsapp",
      hoverColor: "hover:bg-green-500",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {socialIcons.map(({ href, label, iconClass, hoverColor }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-gray-400 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition transform duration-300 ease-in-out ${hoverColor} hover:text-white hover:scale-110`}
            >
              <i className={`${iconClass} text-2xl`}></i>
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <nav className="mb-10">
          <ul className="hidden sm:flex justify-center items-center space-x-12 text-lg font-semibold tracking-wide">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-white transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Text */}
        <div className="text-center text-gray-500 text-sm select-none">
          &copy; {new Date().getFullYear()} Yubhian Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
