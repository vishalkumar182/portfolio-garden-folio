
const Logo = () => {
  return (
    <div className="relative w-12 h-12 transform hover:scale-110 transition-transform duration-300">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transform rotate-180 hover:rotate-0 transition-transform duration-500 animate-[scale-in_0.5s_ease-out]">A</div>
        <div className="absolute text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-[scale-in_0.5s_ease-out]">V</div>
      </div>
      <div className="absolute inset-0 animate-[spin_2s_linear_infinite]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-lg transform rotate-45"></div>
      </div>
    </div>
  );
};

export default Logo;
