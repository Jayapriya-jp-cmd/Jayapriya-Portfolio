import { motion } from 'framer-motion';
import { Download, ArrowRight, Shield, Terminal, Globe } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';
import Scene3D from '@/components/3d/Scene3D';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4 mb-8">
            <motion.h1 
              className="text-5xl md:text-7xl font-sora font-bold tracking-tight"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Hi, I'm Jaya Priya
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-foreground-muted font-inter leading-relaxed"
              variants={itemVariants}
            >
              Final Year Cybersecurity Engineering Student | Full Stack Developer with Interest in AI
            </motion.p>
          </motion.div>

          {/* Animated Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-8 mb-12"
          >
            <motion.div
              className="p-4 glass rounded-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="h-8 w-8 text-primary glow-primary" />
            </motion.div>
            <motion.div
              className="p-4 glass rounded-2xl"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Terminal className="h-8 w-8 text-secondary glow-secondary" />
            </motion.div>
            <motion.div
              className="p-4 glass rounded-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="h-8 w-8 text-accent glow-accent" />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-foreground-muted max-w-2xl mb-12 leading-relaxed"
          >
            Welcome to my digital space! I'm a final year cybersecurity engineering student passionate about 
            building secure, innovative applications. I specialize in full stack development with a keen 
            interest in AI technologies and cybersecurity solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <AnimatedButton 
              variant="cyber" 
              size="lg"
              className="group"
              onClick={() => navigate('/projects')}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </AnimatedButton>
            <AnimatedButton 
              variant="glow" 
              size="lg"
              className="group"
              onClick={() => window.open('https://drive.google.com/file/d/1-uEXf7DKTPHz_hGah4UIEhuMYKAtjwmE/view?usp=drive_link', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Download Resume
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;