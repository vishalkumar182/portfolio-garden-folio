
import { useState, useEffect } from 'react';
import { Home, User, Grid, Mail } from 'lucide-react';
import Logo from './Logo';

const Navigation = ({ activeSection, setActiveSection }: { 
  activeSection: string;
  setActiveSection: (section: string) => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Projects', icon: Grid },
    { name: 'Contact', icon: Mail }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md' : ''}`}>
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.name}
                  onClick={() => setActiveSection(link.name.toLowerCase())}
                  className={`flex items-center gap-2 text-sm transition-colors duration-300
                    ${activeSection === link.name.toLowerCase() 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-primary'}`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden md:inline">{link.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
