import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, BookOpen } from 'lucide-react';

const About = () => {
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

  const certifications = [
    "Amazon Junior Software Developer with GenAI Professional Certificate",
    "Full Stack Development (Novitech Pvt Limited Internship)",
    "IBM Java Developer",
    "Google Cyber Security Professional Certificate",
    "Gen Ai Agent - Google Cloud",
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-sora font-bold gradient-text mb-6">
              About Me
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Driven by curiosity and powered by code
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <BookOpen className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-sora font-semibold">My Story</h2>
                </div>
                <div className="space-y-4 text-foreground-muted leading-relaxed">
                  <p>
                    I'm a final year cybersecurity engineering student with a passion for developing secure, 
                    innovative solutions that bridge the gap between technology and security.
                  </p>
                  <p>
                    My journey spans full stack development, AI technologies, and cybersecurity practices. 
                    I have hands-on experience through internships and real-world projects.
                  </p>
                  <p>
                    I completed a full stack internship at Novitech Pvt Limited, where I gained valuable 
                    industry experience in building scalable web applications.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education & Goals */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-8 w-8 text-secondary mr-3" />
                  <h2 className="text-2xl font-sora font-semibold">Education</h2>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-primary">BE CSE Specialized in Cyber Security</h3>
                    <p className="text-foreground-muted">Arunai Engineering College</p>
                    <p className="text-foreground-muted">Batch 2022-2026</p>
                    <p className="text-sm text-foreground-muted mt-2">
                      Currently pursuing BE in Computer Science Engineering specialized in Cybersecurity
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-accent mr-3" />
                  <h2 className="text-2xl font-sora font-semibold">Goals</h2>
                </div>
                <ul className="space-y-3 text-foreground-muted">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Develop applications with secure and AI integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    Contribute to open source security tools
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Build secure, scalable web applications
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl">
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-sora font-semibold">Certifications & Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background-secondary border border-card-border rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-glow-pulse" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;