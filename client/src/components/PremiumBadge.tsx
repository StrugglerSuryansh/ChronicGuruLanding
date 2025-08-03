import { motion } from "framer-motion";
import { Shield, Star } from "lucide-react";

interface PremiumBadgeProps {
  text: string;
  className?: string;
}

export function PremiumBadge({ text, className = "" }: PremiumBadgeProps) {
  return (
    <motion.div
      className={`inline-flex items-center space-x-2 bg-gradient-to-r from-gold/20 to-sage/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Shield className="w-4 h-4 text-gold" />
      <span className="text-sm font-semibold text-forest">{text}</span>
      <Star className="w-4 h-4 text-gold fill-gold" />
    </motion.div>
  );
}

export function QualityBadge({ 
  icon: Icon, 
  text, 
  subtext,
  className = "" 
}: { 
  icon: any; 
  text: string; 
  subtext: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`bg-ivory/90 backdrop-blur-sm rounded-xl p-4 border border-sage/20 shadow-lg ${className}`}
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-forest to-sage rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-ivory" />
        </div>
        <div>
          <div className="font-semibold text-forest">{text}</div>
          <div className="text-sm text-charcoal/70">{subtext}</div>
        </div>
      </div>
    </motion.div>
  );
}