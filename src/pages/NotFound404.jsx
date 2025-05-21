import { useState, useEffect } from "react";
import { Home, ArrowLeft, RefreshCw } from "lucide-react";

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(10);
  const [animationState, setAnimationState] = useState({
    phase: 0,
    planeX: 20,
    planeY: 50,
    planeRotation: 0,
    planeScale: 1,
    cloudOffset: 0,
    radarAngle: 0,
    radarWave: 0
  });

  // Timer for countdown
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Cloud positions - static to reduce recalculations
  const cloudData = [
    { baseX: -20, y: 20, size: 1.2, speed: 0.5 },
    { baseX: 60, y: 35, size: 0.8, speed: 0.8 },
    { baseX: 120, y: 80, size: 1, speed: 0.3 },
  ];

  // Optimized animation using CSS transforms instead of frequent SVG updates
  useEffect(() => {
    // Use a single interval for all animations to reduce timer overhead
    const animationInterval = setInterval(() => {
      setAnimationState(prev => {
        // Create next state based on current phase
        const nextState = { ...prev };
        
        // Always update cloud positions
        nextState.cloudOffset = (prev.cloudOffset + 0.5) % 180;
        
        // Update radar animation
        nextState.radarAngle = (prev.radarAngle + 5) % 360;
        nextState.radarWave = (prev.radarWave + 1) % 8;
        
        // Phase-specific animations
        switch (prev.phase) {
          case 0: // Flying in
            nextState.planeX = prev.planeX + 1;
            nextState.planeY = 50 + Math.sin(prev.planeX / 10) * 8;
            nextState.planeRotation = Math.sin(prev.planeX / 10) * 10;
            if (nextState.planeX > 75) {
              nextState.phase = 1;
              nextState.planeX = 75;
            }
            break;
            
          case 1: // Spinning lost
            nextState.planeRotation = (prev.planeRotation + 10) % 360;
            // Small circular motion
            const angle = prev.planeRotation * (Math.PI / 180);
            nextState.planeX = 75 + Math.cos(angle) * 5;
            nextState.planeY = 50 + Math.sin(angle) * 5;
            // Change phase after 3 seconds (30 frames at 100ms interval)
            if (Math.floor(prev.planeRotation / 360) >= 3) {
              nextState.phase = 2;
            }
            break;
            
          case 2: // Falling
            nextState.planeY = prev.planeY + 2;
            nextState.planeRotation = prev.planeRotation + 5;
            if (nextState.planeY > 140) {
              nextState.phase = 3;
              nextState.planeY = -20;
              nextState.planeX = 20;
              nextState.planeRotation = 0;
            }
            break;
            
          case 3: // Radar searching
            // Plane stays off screen, only radar animates
            // After 5 seconds, reset animation
            if (Math.floor(prev.radarAngle / 360) >= 2) {
              nextState.phase = 0;
              nextState.planeX = -10;
              nextState.planeY = 50;
              nextState.planeRotation = 0;
            }
            break;
        }
        
        return nextState;
      });
    }, 50); // Update at 20fps for smoother animation
    
    return () => clearInterval(animationInterval);
  }, []);

  const handleGoBack = () => {
    console.log("Going back to previous page");
  };

  const handleGoHome = () => {
    console.log("Going to home page");
  };

  const handleRefresh = () => {
    setCountdown(10);
  };
  
  // Calculate cloud positions based on offset
  const getCloudStyle = (cloud) => {
    const x = ((cloud.baseX + animationState.cloudOffset * cloud.speed) % 180) - 30;
    return {
      transform: `translate(${x}px, ${cloud.y}px) scale(${cloud.size})`,
      transition: 'transform 0.05s linear'
    };
  };
  
  // Calculate plane style for CSS transform
  const getPlaneStyle = () => {
    return {
      transform: `translate(${animationState.planeX}px, ${animationState.planeY}px) rotate(${animationState.planeRotation}deg) scale(${animationState.planeScale})`,
      transition: 'transform 0.05s linear'
    };
  };
  
  // Calculate radar beam position
  const getRadarBeamStyle = () => {
    return {
      transform: `rotate(${animationState.radarAngle}deg)`,
      transformOrigin: '75px 75px',
      transition: 'transform 0.05s linear'
    };
  };
  
  // Get phase descriptor
  const getPhaseLabel = () => {
    const phases = ["Page Taking Off", "Lost in Cyberspace", "Crash Landing", "Searching..."];
    return phases[animationState.phase];
  };
  
  // Get radar wave path data
  const getRadarWavePath = () => {
    const waveHeights = [20, 15, 10, 8, 10, 15, 20, 15];
    const height = waveHeights[animationState.radarWave];
    return `M50,100 Q75,${100-height} 100,100`;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
        {/* Top decorative bar */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        <div className="p-8">
          {/* Error code & illustration */}
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-8xl font-bold text-gray-800 mb-2">404</h1>
            <div className="relative w-48 h-48 mb-6 overflow-hidden">
              {/* Dynamic animation scene */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg">
                <div className="relative w-full h-full">
                  {/* Sky background - static */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100"></div>
                  
                  {/* Clouds - using CSS transforms for smoother animation */}
                  {cloudData.map((cloud, i) => (
                    <div key={i} className="absolute" style={getCloudStyle(cloud)}>
                      <svg width="75" height="30" viewBox="0 0 75 30">
                        <path d="M0,20 Q5,10 15,15 Q20,5 30,10 Q40,0 50,10 Q55,5 65,15 Q70,10 75,20 Q65,30 50,25 Q40,35 25,30 Q10,35 0,20" 
                              fill="white" opacity="0.9" />
                      </svg>
                    </div>
                  ))}
                  
                  {/* Paper airplane - using CSS transforms */}
                  <div className="absolute" style={getPlaneStyle()}>
                    <svg width="20" height="16" viewBox="0 0 20 16">
                      <path d="M0,0 L15,8 L0,16 L4,8 Z" 
                            fill="white" 
                            stroke="#6b7280" 
                            strokeWidth="1" />
                      <line x1="0" y1="0" x2="4" y2="8" stroke="#6b7280" strokeWidth="0.5" />
                      <line x1="0" y1="16" x2="4" y2="8" stroke="#6b7280" strokeWidth="0.5" />
                    </svg>
                  </div>
                  
                  {/* Radar animation - only shown in phase 3 */}
                  {animationState.phase === 3 && (
                    <div className="absolute inset-0">
                      <svg width="150" height="150" viewBox="0 0 150 150">
                        {/* Radar circles - static */}
                        <circle cx="75" cy="75" r="30" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="3,3" />
                        <circle cx="75" cy="75" r="20" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="2,2" />
                        <circle cx="75" cy="75" r="10" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="1,1" />
                        
                        {/* Radar wave */}
                        <path d={getRadarWavePath()} 
                              stroke="#3b82f6" 
                              strokeWidth="2" 
                              fill="none" />
                        
                        {/* Radar beam - using CSS transform */}
                        <line 
                          x1="75" y1="75" 
                          x2="105" y2="75"
                          stroke="#3b82f6" 
                          strokeWidth="2" 
                          opacity="0.6"
                          style={getRadarBeamStyle()}
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Animation state indicator */}
              <div className="absolute bottom-0 w-full text-center">
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full transition-all duration-500">
                  {getPhaseLabel()}
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
            <p className="text-gray-500 text-center mt-2">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Auto-redirect notice */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500">
              Redirecting to home page in <span className="font-medium text-blue-600">{countdown}</span> seconds
            </p>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
              <div 
                className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${(countdown/10) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col space-y-3">
            <button 
              onClick={handleGoHome}
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            >
              <Home size={18} className="mr-2" />
              Go to Homepage
            </button>
            
            <div className="flex space-x-3">
              <button 
                onClick={handleGoBack}
                className="flex items-center justify-center flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-4 rounded-lg font-medium transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                Go Back
              </button>
              
              <button 
                onClick={handleRefresh}
                className="flex items-center justify-center flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-4 rounded-lg font-medium transition-colors"
              >
                <RefreshCw size={18} className="mr-2" />
                Retry
              </button>
            </div>
          </div>
          
          {/* Support link */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Need help? <a href="#" className="text-blue-600 hover:underline">Contact Support</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}