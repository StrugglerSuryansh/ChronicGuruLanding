import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function AIParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 15;
    const colors = ['#4CAF50', '#8BC34A', '#CDDC39', '#FFC107', '#FF9800'];
    
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.6 + 0.2,
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, particle.speedX * 50, 0],
            y: [0, particle.speedY * 50, 0],
            scale: [1, 1.5, 1],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* AI-Generated Cannabis Leaf Patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cannabis-leaves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              >
                <path 
                  d="M100 50c-5 0-10 5-15 15-3 6-5 12-5 18 0 8 3 15 8 20 2 3 5 5 8 6-1-2-2-4-2-7 0-5 2-10 5-14 3-4 7-7 11-8-2 3-3 7-3 11 0 6 3 12 8 16 3 2 6 3 10 3 2 0 4 0 6-1-3-1-6-3-8-6-5-5-8-12-8-20 0-6 2-12 5-18 5-10 10-15 15-15z" 
                  fill="#4CAF50" 
                  opacity="0.3"
                />
                <path 
                  d="M100 150c5 0 10-5 15-15 3-6 5-12 5-18 0-8-3-15-8-20-2-3-5-5-8-6 1 2 2 4 2 7 0 5-2 10-5 14-3 4-7 7-11 8 2-3 3-7 3-11 0-6-3-12-8-16-3-2-6-3-10-3-2 0-4 0-6 1 3 1 6 3 8 6 5 5 8 12 8 20 0 6-2 12-5 18-5 10-10 15-15 15z" 
                  fill="#8BC34A" 
                  opacity="0.3"
                />
              </motion.g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cannabis-leaves)" />
        </svg>
      </div>
    </div>
  );
}

export function EnhancedSmokeEffect() {
  return (
    <div className="absolute top-20 left-20 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-16 rounded-full"
          style={{
            left: `${i * 8}px`,
            background: `linear-gradient(to top, 
              rgba(76, 175, 80, ${0.4 - i * 0.05}), 
              rgba(139, 195, 74, ${0.3 - i * 0.04}), 
              transparent)`,
          }}
          animate={{
            y: [-10, -80],
            x: [0, Math.sin(i) * 15],
            opacity: [0.7, 0],
            scale: [1, 1.8],
            rotate: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}