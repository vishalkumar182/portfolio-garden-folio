
const Logo = () => {
  return (
    <div className="relative w-12 h-12 transform hover:scale-110 transition-transform duration-300">
      {/* Main letters with hover effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transform rotate-180 hover:rotate-0 transition-transform duration-500 animate-[bounce_1s_ease-in-out_infinite]">A</div>
        <div className="absolute text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-[bounce_1s_ease-in-out_infinite] delay-100">V</div>
      </div>
      
      {/* Orbital ring */}
      <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
        <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-0 left-1/2 transform -translate-x-1/2 blur-sm"></div>
        <div className="absolute w-2 h-2 bg-purple-500 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 blur-sm"></div>
        <div className="absolute w-2 h-2 bg-pink-500 rounded-full left-0 top-1/2 transform -translate-y-1/2 blur-sm"></div>
        <div className="absolute w-2 h-2 bg-blue-500 rounded-full right-0 top-1/2 transform -translate-y-1/2 blur-sm"></div>
      </div>
      
      {/* Inner rotating gradient */}
      <div className="absolute inset-0 animate-[spin_4s_linear_infinite] opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-md rounded-full"></div>
      </div>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 animate-[pulse_2s_ease-in-out_infinite]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl rounded-full"></div>
      </div>
      
      {/* Sparkle effects */}
      <div className="absolute inset-0">
        <div className="absolute w-1 h-1 bg-white top-1/4 left-1/4 rounded-full animate-[ping_2s_ease-in-out_infinite]"></div>
        <div className="absolute w-1 h-1 bg-white bottom-1/4 right-1/4 rounded-full animate-[ping_2s_ease-in-out_infinite] delay-1000"></div>
      </div>
      
      {/* Border glow */}
      <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-[pulse_3s_ease-in-out_infinite]"></div>
    </div>
  );
};

export default Logo;
