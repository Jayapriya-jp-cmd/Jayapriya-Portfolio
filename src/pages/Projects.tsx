import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock, Globe, Database, Shield } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const projects = [
    {
      title: "Google Clone",
      description: "A responsive Google search engine clone with modern UI design and clean interface built using HTML and Tailwind CSS.",
      tech: ["HTML", "Tailwind CSS", "GitHub Pages"],
      icon: Globe,
      gradient: "from-cyber-purple to-cyber-blue",
      github: "https://github.com/Jayapriya-jp-cmd/Google-clone",
      live: "https://jayapriya-jp-cmd.github.io/Google-clone/"
    },
    {
      title: "MovieHunt Website",
      description: "A dynamic movie discovery platform with search functionality, movie details, and responsive design using React and Bootstrap.",
      tech: ["React JS", "Bootstrap", "HTML", "JavaScript"],
      icon: Database,
      gradient: "from-cyber-blue to-cyber-teal",
      github: "https://github.com/Jayapriya-jp-cmd/MovieHunt",
      live: "https://demo.com"
    },
    {
      title: "Book Recommender",
      description: "An intelligent book recommendation system powered by LLM models from Hugging Face, providing personalized book suggestions.",
      tech: ["Python", "Hugging Face", "LLM", "Machine Learning"],
      icon: Shield,
      gradient: "from-cyber-teal to-cyber-green",
      github: "https://github.com/Jayapriya-jp-cmd",
      live: "https://demo.com"
    },
    {
      title: "Food Supply for Poor",
      description: "Salesforce project focused on creating a platform to supply leftover food to poor communities, reducing food waste and helping those in need.",
      tech: ["Salesforce", "Apex", "Lightning", "Flow"],
      icon: Lock,
      gradient: "from-cyber-green to-cyber-pink",
      github: "https://github.com/Jayapriya-jp-cmd/SalesForce-Project",
      live: "https://demo.com"
    }
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-sora font-bold gradient-text mb-6">
              Featured Projects
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Showcasing my expertise in cybersecurity and web development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="glass-card p-8 rounded-2xl h-full relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-2xl font-sora font-bold mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-foreground-muted mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-background-secondary border border-card-border rounded-full text-foreground-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <AnimatedButton
                          variant="ghost"
                          size="sm"
                          className="group/btn"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Code
                          </a>
                        </AnimatedButton>
                        <AnimatedButton
                          variant="default"
                          size="sm"
                          className="group/btn"
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Live Demo
                          </a>
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;