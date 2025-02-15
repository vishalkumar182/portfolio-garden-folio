
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className={`max-w-4xl mx-auto z-10 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-sm font-medium text-muted-foreground mb-6 block">Hi, my name is</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">Your Name</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-8">I build things for the web.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex gap-6">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:your@email.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-muted-foreground">01.</span>
            <h2 className="text-2xl font-bold">About Me</h2>
            <Separator className="flex-grow" />
          </div>
          <Card className="glass-card">
            <CardContent className="grid md:grid-cols-2 gap-12 p-6">
              <div>
                <p className="text-muted-foreground mb-4">
                  Hello! My name is Your Name and I enjoy creating things that live on the internet. 
                  My interest in web development started back in 2012 when I decided to try editing custom 
                  Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p className="text-muted-foreground">
                  Fast-forward to today, and I've had the privilege of working at an advertising agency, 
                  a start-up, a huge corporation, and a student-led design studio.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium">Technologies I've been working with:</h3>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                  {["JavaScript (ES6+)", "React", "Node.js", "TypeScript", "Tailwind CSS", "Next.js"].map((tech) => (
                    <li key={tech} className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6" id="projects">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-muted-foreground">02.</span>
            <h2 className="text-2xl font-bold">Some Things I've Built</h2>
            <Separator className="flex-grow" />
          </div>
          <div className="space-y-24">
            {/* Project 1 */}
            <Card className="glass-card group">
              <div className="grid md:grid-cols-12 gap-4 p-6">
                <div className="md:col-span-7 relative">
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                      alt="Project Preview" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-300" />
                  </div>
                </div>
                <div className="md:col-span-5 md:pl-6">
                  <CardHeader className="p-0">
                    <CardDescription className="text-sm text-muted-foreground">Featured Project</CardDescription>
                    <CardTitle className="text-2xl font-bold">Project Title</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-4">
                    <div className="glass-card p-6 rounded-lg mb-4">
                      <p className="text-muted-foreground">
                        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
                        Available on Package Control, VS Code Marketplace, Atom Package Manager, and npm.
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                      <li>VS Code</li>
                      <li>Sublime Text</li>
                      <li>Atom</li>
                      <li>iTerm2</li>
                    </ul>
                    <div className="flex gap-4">
                      <Button variant="ghost" size="icon" asChild>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <span className="text-muted-foreground">03.</span>
            <h2 className="text-2xl font-bold">Get In Touch</h2>
          </div>
          <Card className="glass-card max-w-lg mx-auto">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-8">
                Although I'm not currently looking for any new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <Button variant="outline" asChild>
                <a href="mailto:your@email.com">Say Hello</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center">
        <p className="text-sm text-muted-foreground">Built with React, Tailwind CSS & shadcn/ui</p>
      </footer>
    </div>
  );
};

export default Index;
