import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import testimonials from "../assets/testimonials.json";

const BLINK_INTERVAL = 500;
const SLIDE_INTERVAL = 5000;

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [blink, setBlink] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimeout = useRef();
  const blinkTimeout = useRef();

  useEffect(() => {
    if (!isPaused) {
      slideTimeout.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, SLIDE_INTERVAL);
    }
    return () => clearTimeout(slideTimeout.current);
  }, [current, isPaused]);

  useEffect(() => {
    blinkTimeout.current = setTimeout(() => {
      setBlink((prev) => (prev + 1) % 3);
    }, BLINK_INTERVAL);
    return () => clearTimeout(blinkTimeout.current);
  }, [blink]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <div className="w-full lg:w-2/5 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
              We Want The Best <br /> For Our Clients
            </h2>
            <div className="w-24 h-1 bg-blue-600"></div>
            <p className="text-gray-600 text-lg">
              Yubhian Technologies exists to find innovative solutions where business needs and technological possibilities converge.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-8">
              <span className="text-blue-600 font-bold text-xl flex items-center">
                Share Your Vision 
                <MessageSquare className="ml-2 w-5 h-5" />
              </span>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-3/5 mt-12 lg:mt-0">
            <div 
              className="relative" 
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Testimonial Card */}
              <div 
                className="bg-white rounded-lg shadow-lg p-6 md:p-8 mx-auto relative overflow-hidden min-h-[380px]"
              >
                {/* Background gradient */}
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10 bg-gradient-to-br from-blue-500 to-purple-500"></div>

                {/* Navigation Buttons – fixed bottom-left */}
                <div className="absolute bottom-20 left-10 z-20 flex gap-3">
                  <button
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow hover:bg-blue-700 transition-colors"
                    onClick={prev}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow hover:bg-blue-700 transition-colors"
                    onClick={next}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Stars & Verified Client – fixed bottom-right */}
                <div className="absolute bottom-25 right-20 z-20 flex flex-col items-end text-sm text-gray-500">
                  <span>{t.date || "Verified Client"}</span>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        fill={i < t.rating ? "#2563EB" : "#E5E7EB"} 
                        stroke="none"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10 h-full pb-16">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-16 h-16 rounded-full border-2 border-blue-100 shadow-sm object-cover"
                    />
                    <div>
                      <div className="font-bold text-xl text-gray-800">{t.name}</div>
                      <div className="text-blue-600 text-sm font-medium">{t.title}</div>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                    "{t.text}"
                  </blockquote>
                </div>
              </div>

              {/* Dots for Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === current ? "bg-blue-600 w-6" : "bg-gray-300"
                    }`}
                    onClick={() => goTo(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
