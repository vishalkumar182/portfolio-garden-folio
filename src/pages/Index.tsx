import { useState, useEffect } from 'react';
import { Github, Linkedin, MapPin, Bot, ShoppingCart, Home, Ticket, Leaf, Twitter, Cloud, Code, Server, Smartphone, Brain } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import Navigation from '@/components/Navigation';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "MongoDB", "MySQL", "Firebase", "Express.js", "REST APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Mobile UI/UX"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Python", "TensorFlow", "Gemini API", "Natural Language Processing", "Computer Vision"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const projects = [
    {
      title: "AI Chatbot",
      description: "A chatbot built using Next.js and the Gemini API, capable of intelligent conversations and answering queries.",
      icon: Bot,
      tech: ["Next.js", "Gemini API", "React", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "E-commerce Website",
      description: "A fully functional e-commerce platform with features like product listing, cart management, order tracking, and authentication.",
      icon: ShoppingCart,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      title: "Hostel Management App",
      description: "A Flutter-based application for managing hostel-related tasks, including room allocation and resident details.",
      icon: Home,
      tech: ["Flutter", "Firebase", "Dart"],
      link: "#"
    },
    {
      title: "Outpass System",
      description: "A digital outpass management system for students to request and track their exit approvals.",
      icon: Ticket,
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Plant Identifier",
      description: "An AI-powered tool using the Gemini API to identify plants and detect diseases from images.",
      icon: Leaf,
      tech: ["Python", "Gemini API", "React"],
      link: "#"
    },
    {
      title: "Twitter Tweet Generator",
      description: "A React-based application that generates tweets based on user inputs and trends.",
      icon: Twitter,
      tech: ["React", "API Integration"],
      link: "#"
    },
    {
      title: "Weather App",
      description: "A web app using HTML, CSS, and JavaScript to fetch and display real-time weather data.",
      icon: Cloud,
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const onSubmit = async (data: any) => {
    try {
      console.log('Form data:', data);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <section className={`space-y-12 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  <span className="inline-block animate-slide-down">Vishal Kumar</span>
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="text-lg md:text-xl text-muted-foreground animate-slide-up">
                  App, Web & AI Integrated Developer
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in">
                  I'm passionate about leveraging AI to solve real-world problems and create impactful solutions.
                  I specialize in building intelligent applications that enhance user experiences and streamline processes.
                </p>
              </div>
            </div>
            
            <Card className="glass-card p-6 border-l-4 border-l-blue-500 animate-scale-in">
              <blockquote className="space-y-2">
                <p className="text-lg italic text-muted-foreground">
                  "In the era of AI, the most valuable skill is not just coding, but understanding how to integrate 
                  intelligence into applications that make a real difference."
                </p>
                <footer className="text-sm text-right text-muted-foreground">
                  - My Development Philosophy
                </footer>
              </blockquote>
            </Card>
          </section>
        );
      
      case 'about':
        return (
          <section className="space-y-6 animate-fade-up">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gradient">About myself</h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>India</span>
              </div>
            </div>
            <Separator className="bg-blue-500/30" />
            <div className="space-y-4">
              <p className="text-lg">AI Developer & Problem Solver</p>
              <p className="text-lg">App, Web & AI Integrated Developer</p>
              <p className="text-lg">Learning to develop AI</p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gradient">Skills & Technologies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <Card 
                      key={index}
                      className="glass-card p-6 hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-md bg-gradient-to-br ${category.color} bg-opacity-10`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold">{category.title}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${category.color} bg-opacity-10 text-white`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        );
      
      case 'projects':
        return (
          <section className="space-y-8 animate-fade-up">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gradient">My Projects</h2>
              <Button variant="outline" asChild>
                <a 
                  href="https://github.com/vishalkumar182" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  View GitHub Profile
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass-card p-6 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-blue-500/10">
                            <Icon className="h-5 w-5 text-blue-500" />
                          </div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="text-xs px-2 py-1 rounded-full bg-white/5 text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        );
      
      case 'contact':
        return (
          <section className="space-y-6 animate-fade-up">
            <h2 className="text-2xl font-bold text-gradient">Get In Touch</h2>
            <Card className="glass-card p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Let's Connect</h3>
                  <p className="text-muted-foreground">
                    Looking to collaborate on AI-powered solutions or have a project in mind? 
                    Fill out the form or reach out through social media.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com/vishalkumar182" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://linkedin.com/in/vishal-kumar" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      placeholder="Your Name"
                      {...register('name', { required: true })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...register('email', { required: true })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Your Message"
                      className="min-h-[120px]"
                      {...register('message', { required: true })}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
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
    </div>
  );
};

export default Index;
