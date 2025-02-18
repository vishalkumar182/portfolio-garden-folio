
const Logo = () => {
  return (
    <div className="relative w-12 h-12 transform hover:scale-110 transition-transform duration-300">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transform rotate-180 hover:rotate-0 transition-transform duration-500 animate-[scale-in_0.5s_ease-out] hover:scale-110">A</div>
        <div className="absolute text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-[scale-in_0.5s_ease-out] hover:scale-110 hover:rotate-12 transition-all duration-300">V</div>
      </div>
      <div className="absolute inset-0 animate-[spin_20s_linear_infinite] group-hover:animate-[spin_10s_linear_infinite]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-lg transform rotate-45"></div>
      </div>
      {/* Starburst effect */}
      <div className="absolute inset-0 animate-[spin_15s_linear_infinite] opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-md transform -rotate-45"></div>
      </div>
      {/* Pulsing glow */}
      <div className="absolute inset-0 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
      </div>
      {/* Star points */}
      <div className="absolute inset-0 animate-[spin_30s_linear_infinite] opacity-30">
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45 blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-90 blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-[135deg] blur-sm"></div>
      </div>
    </div>
  );
};

export default Logo;
