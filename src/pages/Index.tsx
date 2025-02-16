import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Smartphone, Bot, Leaf, Cloud, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navigation from '@/components/Navigation';
import WIPBanner from '@/components/WIPBanner';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const projects = [
    {
      title: "Hostel Management App",
      description: "A mobile app for hostel management, allowing users to book rooms, track amenities, manage complaints, and view notices. Built using Flutter and Firebase for seamless backend integration.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Flutter", "Firebase", "Dart", "Mobile Development"],
      icon: <Smartphone className="h-5 w-5" />,
      reversed: false
    },
    {
      title: "AI-Powered Tweet Generator",
      description: "An AI-driven platform that helps users generate engaging Twitter posts. Built using React with AI integration to suggest tweets based on trends.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "AI", "Node.js", "API Integration"],
      icon: <Bot className="h-5 w-5" />,
      reversed: true
    },
    {
      title: "AI Chatbot",
      description: "A smart chatbot using Google's Gemini API to assist users with queries, provide recommendations, and simulate human-like conversations.",
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Next.js", "Gemini API", "TypeScript", "TailwindCSS"],
      icon: <Bot className="h-5 w-5" />,
      reversed: false
    },
    {
      title: "Plant Identifier",
      description: "An AI-powered web app that helps users identify plants and diagnose diseases using image recognition, built with Next.js and the Gemini API.",
      image: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Next.js", "AI", "Image Recognition", "Gemini API"],
      icon: <Leaf className="h-5 w-5" />,
      reversed: true
    },
    {
      title: "Weather App",
      description: "A simple yet effective weather forecasting app that fetches live weather updates using API integration and provides temperature, humidity, and forecasts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["HTML", "CSS", "JavaScript", "Weather API"],
      icon: <Cloud className="h-5 w-5" />,
      reversed: false
    },
    {
      title: "E-Commerce Website",
      description: "A full-fledged e-commerce platform with features like product listing, add to cart, order tracking, and authentication. Built using React, MongoDB, and Firebase.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "MongoDB", "Firebase", "Node.js"],
      icon: <ShoppingCart className="h-5 w-5" />,
      reversed: true
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden" id="home">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse" />
        <div className={`max-w-4xl mx-auto z-10 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-sm font-medium text-muted-foreground mb-6 block hover:text-primary transition-colors">Hi, my name is</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient hover:scale-[1.02] transition-transform duration-300">Vishal Kumar</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-8 hover:text-gradient transition-colors duration-500">I build things for the web.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12 hover:text-foreground transition-colors duration-300">
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex gap-6 animate-fade-in">
            <Button 
              variant="outline" 
              size="icon" 
              asChild
              className="transform hover:scale-110 transition-all duration-300 hover:border-primary"
            >
              <a href="https://github.com/vishalkumar182" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              asChild
              className="transform hover:scale-110 transition-all duration-300 hover:border-primary"
            >
              <a href="https://linkedin.com/in/vishal-kumar" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              asChild
              className="transform hover:scale-110 transition-all duration-300 hover:border-primary"
            >
              <a href="mailto:your@email.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12 group">
            <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">01.</span>
            <h2 className="text-2xl font-bold group-hover:text-gradient transition-colors duration-300">About Me</h2>
            <Separator className="flex-grow group-hover:border-primary transition-colors duration-300" />
          </div>
          <Card className="glass-card transform hover:scale-[1.02] transition-all duration-500">
            <CardContent className="grid md:grid-cols-2 gap-12 p-6">
              <div>
                <p className="text-muted-foreground mb-4 hover:text-foreground transition-colors duration-300">
                  Hello! My name is Vishal Kumar and I enjoy creating things that live on the internet. 
                  My interest in web development started back in 2012 when I decided to try editing custom 
                  Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Fast-forward to today, and I've had the privilege of working at an advertising agency, 
                  a start-up, a huge corporation, and a student-led design studio.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium hover:text-gradient transition-colors duration-300">Technologies I've been working with:</h3>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                  {["JavaScript (ES6+)", "React", "Node.js", "TypeScript", "Tailwind CSS", "Next.js"].map((tech) => (
                    <li key={tech} className="flex items-center gap-2 group/item">
                      <ChevronRight className="h-4 w-4 text-primary transform group-hover/item:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover/item:text-foreground transition-colors duration-300">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6" id="projects">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12 group">
            <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">02.</span>
            <h2 className="text-2xl font-bold group-hover:text-gradient transition-colors duration-300">Some Things I've Built</h2>
            <Separator className="flex-grow group-hover:border-primary transition-colors duration-300" />
          </div>
          <div className="space-y-32">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="glass-card group hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`grid md:grid-cols-12 gap-4 p-6 ${project.reversed ? 'md:rtl' : ''}`}>
                  <div className="md:col-span-7 relative md:ltr">
                    <div className="h-48 flex items-center justify-center glass-card rounded-lg group-hover:scale-105 transition-all duration-500 group-hover:shadow-primary/20 group-hover:shadow-lg">
                      <div className="text-6xl text-primary/50 group-hover:text-primary/70 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                        {project.icon}
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5 md:px-6 md:ltr">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-2 mb-2">
                        {project.icon}
                        <CardDescription className="text-sm text-muted-foreground animate-fade-in group-hover:text-primary transition-colors duration-300">
                          Featured Project
                        </CardDescription>
                      </div>
                      <CardTitle className="text-2xl font-bold animate-fade-up group-hover:text-gradient transition-colors duration-300">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4">
                      <div className="glass-card p-6 rounded-lg mb-4 transform transition-all duration-500 hover:scale-[1.02] animate-fade-up group-hover:shadow-primary/10 group-hover:shadow-lg">
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {project.description}
                        </p>
                      </div>
                      <ul className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4 animate-fade-up">
                        {project.tags.map((tag, tagIndex) => (
                          <li 
                            key={tagIndex}
                            className="bg-muted px-3 py-1 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-105 hover:text-foreground"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-4">
                        <Button variant="ghost" size="icon" asChild>
                          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 transform hover:scale-110">
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 transform hover:scale-110">
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <footer className="py-6 px-6 text-center">
        <p className="text-sm text-muted-foreground">Built with React, Tailwind CSS & shadcn/ui</p>
      </footer>

      <WIPBanner />
    </div>
  );
};

export default Index;
