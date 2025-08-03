import { motion } from "framer-motion";

export function AIGeneratedHeroImage() {
  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* AI Generated Cannabis Background */}
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(46, 125, 50, 0.8) 0%, rgba(56, 142, 60, 0.6) 50%, rgba(76, 175, 80, 0.4) 100%), 
                           url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='cannabis-pattern' x='0' y='0' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cpath d='M25 5c-3 0-6 3-9 9-2 4-3 8-3 12 0 5 2 10 5 13 1 2 3 3 5 4-1-1-1-3-1-5 0-3 1-6 3-9 2-3 4-5 7-6-1 2-2 4-2 7 0 4 2 8 5 11 2 1 4 2 6 2 1 0 3 0 4-1-2 0-4-2-5-4-3-3-5-8-5-13 0-4 1-8 3-12 3-6 6-9 9-9z' fill='%23C8E6C9' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23cannabis-pattern)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-sage/60" />
      
      {/* Animated Cannabis Silhouettes */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-ivory">
            <path d="M50 10c-5 0-10 5-15 15-3 6-5 12-5 18 0 8 3 15 8 20 2 3 5 5 8 6-1-2-2-4-2-7 0-5 2-10 5-14 3-4 7-7 11-8-2 3-3 7-3 11 0 6 3 12 8 16 3 2 6 3 10 3 2 0 4 0 6-1-3-1-6-3-8-6-5-5-8-12-8-20 0-6 2-12 5-18 5-10 10-15 15-15z" fill="currentColor"/>
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-ivory">
            <path d="M50 90c5 0 10-5 15-15 3-6 5-12 5-18 0-8-3-15-8-20-2-3-5-5-8-6 1 2 2 4 2 7 0 5-2 10-5 14-3 4-7 7-11 8 2-3 3-7 3-11 0-6-3-12-8-16-3-2-6-3-10-3-2 0-4 0-6 1 3 1 6 3 8 6 5 5 8 12 8 20 0 6-2 12-5 18-5 10-10 15-15 15z" fill="currentColor"/>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function AIEnhancedProductImage({ 
  src, 
  alt, 
  className = "" 
}: { 
  src: string; 
  alt: string; 
  className?: string; 
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img 
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* AI Enhancement Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest/20 via-transparent to-gold/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Premium Quality Indicator */}
      <motion.div 
        className="absolute top-2 right-2 bg-gold/90 text-forest text-xs font-bold px-2 py-1 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        Premium
      </motion.div>
    </div>
  );
}