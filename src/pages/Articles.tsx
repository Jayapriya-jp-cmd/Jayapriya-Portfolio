import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink, BookOpen, Shield, Code, Globe } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';

const Articles = () => {
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

  const articles = [
    {
      title: "Advanced SQL Injection Techniques in Modern Web Applications",
      description: "A deep dive into sophisticated SQL injection methods and how to defend against them in contemporary web applications.",
      category: "Cybersecurity",
      icon: Shield,
      readTime: "12 min read",
      date: "Dec 15, 2024",
      link: "https://medium.com/@jayapriya",
      featured: true,
      gradient: "from-cyber-purple to-cyber-blue"
    },
    {
      title: "Building Secure React Applications: A Complete Guide",
      description: "Best practices for developing secure React applications, covering XSS prevention, CSRF protection, and secure authentication.",
      category: "Web Security",
      icon: Code,
      readTime: "15 min read",
      date: "Dec 10, 2024",
      link: "https://medium.com/@jayapriya",
      featured: true,
      gradient: "from-cyber-blue to-cyber-teal"
    },
    {
      title: "Network Penetration Testing with Custom Python Scripts",
      description: "Learn how to create custom Python tools for network reconnaissance and vulnerability assessment.",
      category: "Penetration Testing",
      icon: Globe,
      readTime: "10 min read",
      date: "Dec 5, 2024",
      link: "https://medium.com/@jayapriya",
      featured: false,
      gradient: "from-cyber-teal to-cyber-green"
    },
    {
      title: "Zero-Day Vulnerability Research: Methodology and Ethics",
      description: "Understanding the process of discovering zero-day vulnerabilities and the ethical considerations involved.",
      category: "Research",
      icon: BookOpen,
      readTime: "18 min read",
      date: "Nov 28, 2024",
      link: "https://medium.com/@jayapriya",
      featured: false,
      gradient: "from-cyber-green to-cyber-pink"
    },
    {
      title: "Implementing OWASP Top 10 Defenses in Node.js APIs",
      description: "Practical implementation of security measures to protect against the OWASP Top 10 vulnerabilities in Node.js applications.",
      category: "Backend Security",
      icon: Shield,
      readTime: "14 min read",
      date: "Nov 20, 2024",
      link: "https://medium.com/@jayapriya",
      featured: false,
      gradient: "from-cyber-pink to-cyber-purple"
    },
    {
      title: "Automating Security Testing with GitHub Actions",
      description: "Setting up automated security scans and vulnerability assessments in your CI/CD pipeline using GitHub Actions.",
      category: "DevSecOps",
      icon: Code,
      readTime: "11 min read",
      date: "Nov 15, 2024",
      link: "https://medium.com/@jayapriya",
      featured: false,
      gradient: "from-cyber-purple to-cyber-blue"
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary opacity-8 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
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
              Articles & Blogs
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Sharing insights on cybersecurity, development, and technology
            </p>
          </motion.div>

          {/* Featured Articles */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-sora font-bold mb-8 text-center">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredArticles.map((article, index) => {
                const IconComponent = article.icon;
                return (
                  <motion.article
                    key={article.title}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                  >
                    <div className="glass-card p-8 rounded-2xl h-full relative overflow-hidden">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                          Featured
                        </span>
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${article.gradient} flex items-center justify-center mr-4`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-primary">{article.category}</span>
                            <div className="flex items-center text-xs text-foreground-muted mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              {article.date}
                              <Clock className="h-3 w-3 ml-3 mr-1" />
                              {article.readTime}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl font-sora font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-foreground-muted mb-6 leading-relaxed line-clamp-3">
                          {article.description}
                        </p>

                        <AnimatedButton
                          variant="ghost"
                          size="sm"
                          className="group/btn"
                          asChild
                        >
                          <a href={article.link} target="_blank" rel="noopener noreferrer">
                            Read Article
                            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </AnimatedButton>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

          {/* Regular Articles */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-sora font-bold mb-8 text-center">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {regularArticles.map((article, index) => {
                const IconComponent = article.icon;
                return (
                  <motion.article
                    key={article.title}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                      
                      {/* Content */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${article.gradient} flex items-center justify-center mr-3`}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <span className="text-xs font-medium text-primary">{article.category}</span>
                            <div className="flex items-center text-xs text-foreground-muted">
                              <Calendar className="h-3 w-3 mr-1" />
                              {article.date}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-lg font-sora font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-foreground-muted text-sm mb-4 leading-relaxed line-clamp-3">
                          {article.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-foreground-muted">
                            <Clock className="h-3 w-3 mr-1" />
                            {article.readTime}
                          </div>
                          <AnimatedButton
                            variant="ghost"
                            size="sm"
                            className="text-xs group/btn"
                            asChild
                          >
                            <a href={article.link} target="_blank" rel="noopener noreferrer">
                              Read
                              <ExternalLink className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                          </AnimatedButton>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;