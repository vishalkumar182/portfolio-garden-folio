
const Logo = () => {
  return (
    <div className="relative w-12 h-12 transform hover:scale-110 transition-transform duration-300">
      <div className="absolute inset-0 flex items-center justify-center animate-pulse">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transform rotate-180 hover:rotate-0 transition-transform duration-500">A</div>
        <div className="absolute text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-bounce">V</div>
      </div>
    </div>
  );
};

export default Logo;
