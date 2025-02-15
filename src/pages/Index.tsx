
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className={`max-w-4xl mx-auto ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-sm font-medium text-gray-500 mb-6 block">Hi, my name is</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Your Name</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-600 mb-8">I build things for the web.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-12">
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 hover:text-gray-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 hover:text-gray-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your@email.com"
               className="p-2 hover:text-gray-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
            <span className="text-gray-400">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-4">
                Hello! My name is Your Name and I enjoy creating things that live on the internet. 
                My interest in web development started back in 2012 when I decided to try editing custom 
                Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p className="text-gray-600">
                Fast-forward to today, and I've had the privilege of working at an advertising agency, 
                a start-up, a huge corporation, and a student-led design studio.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Technologies I've been working with:</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">▹</span> JavaScript (ES6+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">▹</span> React
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">▹</span> Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">▹</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">▹</span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">▹</span> Next.js
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-white" id="projects">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
            <span className="text-gray-400">02.</span> Some Things I've Built
          </h2>
          <div className="space-y-24">
            {/* Project 1 */}
            <div className="group relative grid md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-7 relative">
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                    alt="Project Preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors duration-300"></div>
                </div>
              </div>
              <div className="md:col-span-5 md:pl-6">
                <p className="text-sm text-gray-500 mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">Project Title</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-600">
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
                    Available on Package Control, VS Code Marketplace, Atom Package Manager, and npm.
                  </p>
                </div>
                <ul className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                  <li>VS Code</li>
                  <li>Sublime Text</li>
                  <li>Atom</li>
                  <li>iTerm2</li>
                </ul>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative grid md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-5 md:pr-6 md:order-1 order-2">
                <p className="text-sm text-gray-500 mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">Project Title</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-600">
                    A web app for visualizing personalized Spotify data. View your top artists, 
                    top tracks, recently played tracks, and detailed audio information about each track.
                  </p>
                </div>
                <ul className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                  <li>React</li>
                  <li>Spotify API</li>
                  <li>Styled Components</li>
                </ul>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="md:col-span-7 relative md:order-2 order-1">
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Project Preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-4 justify-center">
            <span className="text-gray-400">03.</span> Get In Touch
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto mb-12">
            Although I'm not currently looking for any new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:your@email.com"
            className="inline-block px-8 py-4 border border-gray-900 rounded-lg font-medium
                     hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-sm text-gray-500">
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Index;
