
const Logo = () => {
  return (
    <div className="relative w-12 h-12 transform hover:scale-110 transition-transform duration-300">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl font-bold text-primary transform rotate-180">A</div>
        <div className="absolute text-2xl font-bold text-gradient">V</div>
      </div>
    </div>
  );
};

export default Logo;
