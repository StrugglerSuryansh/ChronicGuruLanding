import { motion } from "framer-motion";
import { CannabisLeaf } from "../components/CannabisLeaf";
import { AIParticleSystem } from "../components/AIParticleSystem";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

function AnimatedSection({ children, delay = 0, className = "" }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MinimalNavigation() {
  return (
    <nav className="fixed w-full z-50 bg-charcoal/80 backdrop-blur-md border-b border-gray/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-forest rounded-lg flex items-center justify-center">
              <CannabisLeaf className="w-5 h-5 text-charcoal" animate={false} />
            </div>
            <span className="text-xl font-bold text-ivory">Green Side</span>
          </div>
          
          <motion.button 
            className="bg-forest text-charcoal px-6 py-2 rounded-full font-semibold hover:bg-forest/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-charcoal relative overflow-hidden pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <AIParticleSystem />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <AnimatedSection className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-ivory mb-6 leading-tight">
              Welcome to the <span className="text-forest">Green Side</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray mb-8">
              Explore a Lifestyle That Grows With You
            </p>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray leading-relaxed">
                We get it — you're after something a little more... <span className="text-forest font-semibold">elevated</span>.
              </p>
              <p className="text-lg text-gray leading-relaxed">
                No worries — we've built a space just for people like you.
              </p>
              <p className="text-lg text-gray leading-relaxed">
                We offer a discreet, secure way to explore botanically inspired goods — and yes,
                we handle safe, private delivery right to your doorstep. 📦
              </p>
            </div>

            <motion.button
              className="bg-forest text-charcoal px-8 py-4 rounded-full font-bold text-lg hover:bg-forest/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://t.me/yourusername', '_blank')}
            >
              Join Us on Telegram
            </motion.button>
          </AnimatedSection>

          {/* Right side - Hero image */}
          <AnimatedSection delay={0.2} className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-forest/20 to-sage/20 rounded-3xl overflow-hidden">
              {/* Cannabis-themed SVG illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-30">
                  <defs>
                    <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(142, 76%, 36%)" />
                      <stop offset="100%" stopColor="hsl(148, 60%, 30%)" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(200,200)">
                    {/* Large cannabis leaf */}
                    <path d="M0,-150 C-30,-120 -60,-90 -80,-50 C-90,-30 -85,0 -70,20 C-50,40 -20,50 0,45 C20,50 50,40 70,20 C85,0 90,-30 80,-50 C60,-90 30,-120 0,-150 Z" fill="url(#leafGradient)" opacity="0.8"/>
                    {/* Smaller leaflets */}
                    <path d="M-40,-100 C-55,-85 -65,-65 -60,-45 C-55,-25 -35,-15 -15,-20 C5,-15 15,-35 10,-55 C5,-75 -25,-95 -40,-100 Z" fill="url(#leafGradient)" opacity="0.6"/>
                    <path d="M40,-100 C55,-85 65,-65 60,-45 C55,-25 35,-15 15,-20 C-5,-15 -15,-35 -10,-55 C-5,-75 25,-95 40,-100 Z" fill="url(#leafGradient)" opacity="0.6"/>
                    <path d="M-70,-70 C-80,-55 -85,-35 -75,-20 C-65,-5 -45,0 -30,-5 C-15,0 -10,-20 -15,-35 C-20,-50 -55,-65 -70,-70 Z" fill="url(#leafGradient)" opacity="0.4"/>
                    <path d="M70,-70 C80,-55 85,-35 75,-20 C65,-5 45,0 30,-5 C15,0 10,-20 15,-35 C20,-50 55,-65 70,-70 Z" fill="url(#leafGradient)" opacity="0.4"/>
                  </g>
                </svg>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-forest rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-16 w-3 h-3 bg-sage rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-16 left-20 w-2 h-2 bg-forest rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-10 right-10 w-3 h-3 bg-sage rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function InfoCards() {
  const cards = [
    {
      icon: "🔍",
      title: "Curious?",
      description: "What we show here is just the surface. For the real deal — the good stuff — you'll need to be on the inside.",
      delay: 0
    },
    {
      icon: "🌱",
      title: "Premium Quality",
      description: "Botanically inspired goods sourced with care. Discreet packaging, secure delivery, elevated experience.",
      delay: 0.2
    },
    {
      icon: "🚪",
      title: "Step Inside",
      description: "Join our private channel to explore more. Updates, access, and vibes await. We'll meet you there.",
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-6">
            Join our private channel to explore more
          </h2>
          <p className="text-xl text-gray">
            Updates, access, and vibes await. 🌬
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <AnimatedSection key={index} delay={card.delay}>
              <motion.div 
                className="bg-dark border border-gray/30 rounded-2xl p-8 h-full hover:border-forest/50 transition-colors"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-forest mb-4">{card.title}</h3>
                <p className="text-gray leading-relaxed">{card.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal via-charcoal to-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="bg-dark border border-gray/30 rounded-3xl p-12">
            <div className="text-5xl mb-6">🚪</div>
            <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-6">
              Ready to Step Inside?
            </h2>
            <p className="text-xl text-gray mb-8 leading-relaxed">
              Click below to connect.<br />
              We'll meet you there.
            </p>
            
            <motion.button
              className="bg-forest text-charcoal px-12 py-5 rounded-full font-bold text-xl hover:bg-forest/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://t.me/yourusername', '_blank')}
            >
              Join Us on Telegram
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function MinimalFooter() {
  return (
    <footer className="bg-charcoal border-t border-gray/20 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-forest rounded-lg flex items-center justify-center">
            <CannabisLeaf className="w-5 h-5 text-charcoal" animate={false} />
          </div>
          <span className="text-xl font-bold text-ivory">Green Side</span>
        </div>
        
        <p className="text-gray text-sm mb-4">
          Discreet. Secure. Elevated.
        </p>
        
        <p className="text-gray/60 text-xs">
          Must be 21+ to access. Keep out of reach of children and pets.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal">
      <MinimalNavigation />
      <HeroSection />
      <InfoCards />
      <CTASection />
      <MinimalFooter />
    </div>
  );
}