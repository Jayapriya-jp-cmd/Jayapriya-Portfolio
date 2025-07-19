import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        <motion.div
          className="relative w-20 h-20 mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 border-4 border-primary rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ borderRightColor: 'transparent' }}
          />
          
          {/* Inner Ring */}
          <motion.div
            className="absolute inset-2 border-4 border-secondary rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ borderLeftColor: 'transparent' }}
          />
          
          {/* Center Dot */}
          <motion.div
            className="absolute inset-6 bg-accent rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-sora font-bold gradient-text mb-2">Jaya Priya</h2>
          <p className="text-foreground-muted">Loading...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;