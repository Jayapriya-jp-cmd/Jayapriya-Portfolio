import { motion } from 'framer-motion';
import { 
  Shield, Terminal, Globe, Database, Cloud, Code, 
  Lock, Wifi, Settings, Monitor, Zap, Layers 
} from 'lucide-react';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const skillCategories = [
    {
      title: "Cybersecurity Tools",
      icon: Shield,
      gradient: "from-cyber-purple to-cyber-blue",
      skills: [
        { name: "Wireshark", level: 90, icon: Monitor },
        { name: "Metasploit", level: 85, icon: Terminal },
        { name: "Burp Suite", level: 88, icon: Globe },
        { name: "Nmap", level: 92, icon: Wifi },
        { name: "John the Ripper", level: 80, icon: Lock },
        { name: "Aircrack-ng", level: 75, icon: Zap }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      gradient: "from-cyber-blue to-cyber-teal",
      skills: [
        { name: "Python", level: 95, icon: Code },
        { name: "JavaScript", level: 90, icon: Code },
        { name: "TypeScript", level: 88, icon: Code },
        { name: "C++", level: 85, icon: Code },
        { name: "Bash", level: 92, icon: Terminal },
        { name: "SQL", level: 87, icon: Database }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      gradient: "from-cyber-teal to-cyber-green",
      skills: [
        { name: "React", level: 93, icon: Layers },
        { name: "Node.js", level: 88, icon: Settings },
        { name: "Express.js", level: 85, icon: Settings },
        { name: "MongoDB", level: 82, icon: Database },
        { name: "PostgreSQL", level: 80, icon: Database },
        { name: "REST APIs", level: 90, icon: Globe }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      gradient: "from-cyber-green to-cyber-pink",
      skills: [
        { name: "AWS", level: 85, icon: Cloud },
        { name: "Docker", level: 88, icon: Layers },
        { name: "Kubernetes", level: 75, icon: Settings },
        { name: "Linux", level: 95, icon: Terminal },
        { name: "Git", level: 92, icon: Code },
        { name: "CI/CD", level: 80, icon: Settings }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary opacity-8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary opacity-8 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent opacity-8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
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
              Technical Skills
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Expertise across cybersecurity, development, and cloud technologies
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="glass-card p-8 rounded-2xl relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5`} />
                  
                  {/* Category Header */}
                  <div className="relative mb-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mr-4`}>
                        <CategoryIcon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-sora font-bold">{category.title}</h2>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="relative space-y-6">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            type: "spring",
                            stiffness: 100 
                          }}
                          className="group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <SkillIcon className="h-5 w-5 text-primary mr-3 group-hover:scale-110 transition-transform" />
                              <span className="text-foreground font-medium">{skill.name}</span>
                            </div>
                            <span className="text-foreground-muted text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-background-secondary rounded-full h-2 relative overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                                duration: 0.8,
                                ease: "easeOut"
                              }}
                            >
                              <div className="absolute inset-0 bg-white opacity-20 animate-pulse" />
                            </motion.div>
                          </div>
                        </motion.div>
                      );
                    })}
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

export default Skills;