import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  Search,
  Menu,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  X,
} from "lucide-react";

export default function FloatingNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [animationStep, setAnimationStep] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add fadeIn animation to CSS
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Add scroll listener to detect when to switch navbar style
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // For music symbol animation - horizontal bars
  useEffect(() => {
    if (menuOpen) return; // Don't animate when menu is open

    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 500);

    return () => clearInterval(interval);
  }, [menuOpen]);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    @keyframes musicBar1 {
      0%, 100% { transform: scaleX(2); }
      33% { transform: scaleX(1.50); }
      66% { transform: scaleX(1); }
    }
    @keyframes musicBar2 {
      0%, 100% { transform: scaleX(1.50); }
      33% { transform: scaleX(2); }
      66% { transform: scaleX(1.50); }
    }
    @keyframes musicBar3 {
      0%, 100% { transform: scaleX(1); }
      33% { transform: scaleX(1.50); }
      66% { transform: scaleX(2); }
    }

    .music-bar {
      transform-origin: left;
      animation-duration: 1.7s;
      animation-timing-function: ease-out-in;
      animation-iteration-count: infinite;
    }
    .bar1 { animation-name: musicBar1; }
    .bar2 { animation-name: musicBar2; }
    .bar3 { animation-name: musicBar3; }
  `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);

    console.log(`Navigated to ${section}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);

    setSearchOpen(false);
    setSearchQuery("");
  };

  const MusicSymbol = () => (
    <div className="hidden md:flex flex-col items-start justify-center space-y-1">
      <div className="h-1 w-3 bg-gradient-to-r from-blue-600 to-purple-600 mb-1 rounded-full music-bar bar1"></div>
      <div className="h-1 w-3 bg-gradient-to-r from-blue-600 to-purple-600 mb-1 rounded-full music-bar bar2"></div>
      <div className="h-1 w-3 bg-gradient-to-r from-blue-600 to-purple-600 mb-1 rounded-full music-bar bar3"></div>
    </div>
  );

  // Transition classes for smooth navbar change
  const navbarPositionClass = isScrolled
    ? "fixed top-0 left-0 mx-0 right-0 w-full"
    : "fixed w-full top-16";

  const navbarTransitionClass = "transition-all duration-300 ease-in-out";

  return (
    <div className={`${navbarPositionClass} ${navbarTransitionClass} z-50 px-4 md:px-0`}>
      
      {!isScrolled && (
        <div className="hidden md:flex items-center justify-between lg:px-35 md:px-17">
          {/* Top Contact Info with Gradient */}
          <div className="bg-white py-1.5 px-2 rounded-t-3xl">
            <div className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full pl-2 pr-6 py-2">
              <div className="flex items-center text-sm">
                <MdEmail className="h-5 w-5 mr-1" />
                <span>ithub@mail.com</span>
              </div>
              <div className="flex items-center text-sm ml-4">
                <FaLocationDot className="h-4 w-4 mr-1" />
                <span>24 Street, New York, USA</span>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="hidden md:flex bg-white py-3.5 px-3 rounded-t-2xl items-center space-x-4 mr-4">
            <a href="#" className="hover:scale-110 transition-transform">
              <Facebook className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Instagram className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Twitter className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Globe className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
            </a>
          </div>
        </div>
      )}

      <div
        className={`bg-white ${
          isScrolled ? "shadow-md" : "rounded-full shadow-lg mx-auto max-w-7xl"
        } `}
      >
        {/* Main Navigation */}
        <div className="flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="mr-3">
              <div className="flex">
                <div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">i</div>
                </div>
                <div className="flex flex-col -ml-4 mt-1">
                  <div className="rounded-full bg-pink-500 w-6 h-6"></div>
                  <div className="rounded-full bg-teal-400 w-6 h-6 -mt-2 ml-3"></div>
                </div>
              </div>
            </div>
            <div className="text-3xl font-bold">iThub</div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              active={activeSection === "home"}
              onClick={() => handleNavLinkClick("home")}
            >
              Home
            </NavLink>
            <NavLink
              active={activeSection === "about"}
              onClick={() => handleNavLinkClick("about")}
            >
              About
            </NavLink>
            <NavLink
              active={activeSection === "services"}
              onClick={() => handleNavLinkClick("services")}
            >
              Services
            </NavLink>
            <NavLink
              active={activeSection === "project"}
              onClick={() => handleNavLinkClick("project")}
            >
              Project
            </NavLink>
            <NavLink
              active={activeSection === "shop"}
              onClick={() => handleNavLinkClick("shop")}
            >
              Shop
            </NavLink>
            <NavLink
              active={activeSection === "blog"}
              onClick={() => handleNavLinkClick("blog")}
            >
              Blog
            </NavLink>
            <NavLink
              active={activeSection === "contact"}
              onClick={() => handleNavLinkClick("contact")}
            >
              Contact
            </NavLink>
          </div>

          {/* Search and CTA */}
          <div className="flex items-center space-x-2">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <MusicSymbol />
            <button className="hidden md:flex ml-5 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-start justify-center pt-24 z-50 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-4 transform transition-all duration-300 ease-out scale-100 opacity-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Search</h3>
              <button
                className="p-1 rounded-full hover:bg-gray-100"
                onClick={() => setSearchOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSearch}>
              <div className="flex h-full items-center border-2 backdrop-blur border-blue-600 rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="w-full h-full px-4 py-2 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu with slide-in animation */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="flex">
                <div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 w-8 h-8 flex items-center justify-center">
                  <div className="text-xl font-bold text-white">i</div>
                </div>
                <div className="flex flex-col -ml-3 mt-1">
                  <div className="rounded-full bg-pink-500 w-4 h-4"></div>
                  <div className="rounded-full bg-teal-400 w-4 h-4 -mt-1 ml-2"></div>
                </div>
              </div>
              <div className="text-2xl font-bold ml-2">iThub</div>
            </div>
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <NavLink
              active={activeSection === "home"}
              onClick={() => handleNavLinkClick("home")}
            >
              Home
            </NavLink>
            <NavLink
              active={activeSection === "about"}
              onClick={() => handleNavLinkClick("about")}
            >
              About
            </NavLink>
            <NavLink
              active={activeSection === "services"}
              onClick={() => handleNavLinkClick("services")}
            >
              Services
            </NavLink>
            <NavLink
              active={activeSection === "project"}
              onClick={() => handleNavLinkClick("project")}
            >
              Project
            </NavLink>
            <NavLink
              active={activeSection === "shop"}
              onClick={() => handleNavLinkClick("shop")}
            >
              Shop
            </NavLink>
            <NavLink
              active={activeSection === "blog"}
              onClick={() => handleNavLinkClick("blog")}
            >
              Blog
            </NavLink>
            <NavLink
              active={activeSection === "contact"}
              onClick={() => handleNavLinkClick("contact")}
            >
              Contact
            </NavLink>
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <a href="#" className="hover:scale-110 transition-transform">
              <Facebook className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Instagram className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Twitter className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Globe className="h-5 w-5 text-gray-600 hover:text-indigo-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}

// Helper component for navigation links
function NavLink({ children, active, onClick }) {
  return (
    <a
      href="#"
      className={`relative font-medium ${
        active ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"
      }`}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      {children}
      {active && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600"></span>
      )}
    </a>
  );
}
