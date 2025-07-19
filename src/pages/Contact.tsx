import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:jayapriyajain10@gmail.com?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoLink;

    setTimeout(() => {
      toast({
        title: "Email Client Opened!",
        description: "Your default email client should open with the message ready to send.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "text-white" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "text-blue-400" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "text-pink-400" }
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-sora font-bold gradient-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Ready to collaborate or discuss cybersecurity? Let's connect!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-sora font-bold">Send Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="glass border-card-border focus:border-primary"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="glass border-card-border focus:border-primary"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or question..."
                    rows={5}
                    required
                    className="glass border-card-border focus:border-primary resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <AnimatedButton
                    type="submit"
                    variant="cyber"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </AnimatedButton>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Information */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-sora font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-4" />
                    <span className="text-foreground-muted">jayapriyajain10@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-4" />
                    <span className="text-foreground-muted">7448443931</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-4" />
                    <span className="text-foreground-muted">Available for remote work</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-sora font-bold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-4 rounded-xl bg-background-secondary border border-card-border hover:border-primary transition-all group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <IconComponent className={`h-6 w-6 ${social.color} mr-3 group-hover:scale-110 transition-transform`} />
                        <span className="text-foreground-muted group-hover:text-foreground transition-colors">
                          {social.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Response */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-sora font-bold mb-4">Quick Response</h3>
                <p className="text-foreground-muted mb-4">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out on LinkedIn.
                </p>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-success rounded-full mr-3 animate-pulse" />
                  <span className="text-success text-sm font-medium">Available for new opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;