import { motion } from "framer-motion";

interface CannabisLeafProps {
  className?: string;
  animate?: boolean;
}

export function CannabisLeaf({ className = "w-8 h-8", animate = true }: CannabisLeafProps) {
  const leafMotion = animate ? {
    initial: { scale: 0.8, rotate: 0 },
    animate: { 
      scale: [0.8, 1, 0.8], 
      rotate: [0, 5, -5, 0],
      transition: { 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  } : {};

  const Component = animate ? motion.svg : 'svg';

  return (
    <Component
      {...leafMotion}
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 10c-5 0-10 5-15 15-3 6-5 12-5 18 0 8 3 15 8 20 2 3 5 5 8 6-1-2-2-4-2-7 0-5 2-10 5-14 3-4 7-7 11-8-2 3-3 7-3 11 0 6 3 12 8 16 3 2 6 3 10 3 2 0 4 0 6-1-3-1-6-3-8-6-5-5-8-12-8-20 0-6 2-12 5-18 5-10 10-15 15-15z"/>
      <path d="M50 90c5 0 10-5 15-15 3-6 5-12 5-18 0-8-3-15-8-20-2-3-5-5-8-6 1 2 2 4 2 7 0 5-2 10-5 14-3 4-7 7-11 8 2-3 3-7 3-11 0-6-3-12-8-16-3-2-6-3-10-3-2 0-4 0-6 1 3 1 6 3 8 6 5 5 8 12 8 20 0 6-2 12-5 18-5 10-10 15-15 15z"/>
      <path d="M10 50c0 5 5 10 15 15 6 3 12 5 18 5 8 0 15-3 20-8 3-2 5-5 6-8-2 1-4 2-7 2-5 0-10-2-14-5-4-3-7-7-8-11 3 2 7 3 11 3 6 0 12-3 16-8 2-3 3-6 3-10 0-2 0-4-1-6-1 3-3 6-6 8-5 5-12 8-20 8-6 0-12-2-18-5-10-5-15-10-15-15z"/>
      <path d="M90 50c0-5-5-10-15-15-6-3-12-5-18-5-8 0-15 3-20 8-3 2-5 5-6 8 2-1 4-2 7-2 5 0 10 2 14 5 4 3 7 7 8 11-3-2-7-3-11-3-6 0-12 3-16 8-2 3-3 6-3 10 0 2 0 4 1 6 1-3 3-6 6-8 5-5 12-8 20-8 6 0 12 2 18 5 10 5 15 10 15 15z"/>
    </Component>
  );
}

export function SmokeEffect({ className = "absolute" }: { className?: string }) {
  return (
    <div className={className}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-20 bg-gradient-to-t from-sage/30 to-transparent rounded-full"
          style={{
            left: `${i * 15}px`,
            animationDelay: `${i * 0.5}s`
          }}
          animate={{
            y: [-20, -80],
            x: [0, Math.random() * 20 - 10],
            opacity: [0.7, 0],
            scale: [1, 1.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.3
          }}
        />
      ))}
    </div>
  );
}