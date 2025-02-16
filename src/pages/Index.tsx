
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navigation from '@/components/Navigation';
import WIPBanner from '@/components/WIPBanner';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <section className={`space-y-8 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold">Vishal Kumar</h1>
            <p className="text-lg md:text-xl text-muted-foreground">AI Developer & Problem Solver</p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm passionate about leveraging AI to solve real-world problems and create impactful solutions.
              I specialize in building intelligent applications that enhance user experiences and streamline processes.
            </p>
          </section>
        );
      
      case 'about':
        return (
          <section className="space-y-6 animate-fade-up">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">About myself</h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>India</span>
              </div>
            </div>
            <Separator className="bg-blue-500/30" />
            <div className="space-y-4">
              <p className="text-lg">AI Developer & Problem Solver</p>
              <p className="text-lg">Data Science Enthusiast</p>
              <p className="text-lg">Learning to develop AI</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Technologies:</h3>
              <p className="text-muted-foreground">
                Python | JavaScript | Flutter | React | Next.js | MongoDB | Firebase | MySQL
              </p>
            </div>
          </section>
        );
      
      case 'projects':
        return (
          <section className="space-y-6 animate-fade-up">
            <h2 className="text-2xl font-bold">My Projects</h2>
            <Card className="glass-card p-6">
              <div className="grid gap-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">AI-Powered Solutions</h3>
                  <p className="text-muted-foreground">
                    Working on innovative AI projects that solve real-world problems.
                    More details coming soon...
                  </p>
                </div>
              </div>
            </Card>
          </section>
        );
      
      case 'contact':
        return (
          <section className="space-y-6 animate-fade-up">
            <h2 className="text-2xl font-bold">Get In Touch</h2>
            <Card className="glass-card p-6">
              <p className="text-muted-foreground mb-6">
                Looking to collaborate on AI-powered solutions or have a project in mind? 
                Let's connect and discuss how we can work together!
              </p>
              <div className="flex gap-4">
                <Button variant="outline" asChild>
                  <a href="https://github.com/vishalkumar182" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/vishal-kumar" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-2" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:your@email.com">
                    <Mail className="h-5 w-5 mr-2" /> Email
                  </a>
                </Button>
              </div>
            </Card>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </main>

      <WIPBanner />
    </div>
  );
};

export default Index;
