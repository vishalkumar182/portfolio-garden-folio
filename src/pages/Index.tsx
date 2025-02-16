import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Logo from '@/components/Logo';
import WIPBanner from '@/components/WIPBanner';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md">
        <nav className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Projects', 'Art', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Vishal Kumar</h1>
            <p className="text-lg md:text-xl text-muted-foreground">@vishalkumar182</p>
            <p className="text-lg text-muted-foreground border-l-2 border-blue-500 pl-4 my-8">
              This page is not fully completed yet
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Welcome!</h2>
              <span className="text-muted-foreground">Views coming soon</span>
            </div>
          </section>

          <section className="space-y-6">
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
            <div className="space-y-2">
              <p className="text-lg font-bold">Other fields:</p>
              <p className="text-muted-foreground">
                Programming | Web development | Machine Learning
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Take a look at my projects</h2>
            <Card className="glass-card p-6">
              <div className="grid gap-4">
                <p className="text-muted-foreground">Projects coming soon...</p>
              </div>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Status</h2>
            <Separator className="bg-blue-500/30" />
            <p className="text-muted-foreground">Portfolio under development</p>
          </section>
        </div>
      </main>

      <footer className="mt-20 py-6 px-6 text-center text-sm text-muted-foreground">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/vishalkumar182" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/vishal-kumar" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:your@email.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </footer>

      <WIPBanner />
    </div>
  );
};

export default Index;
