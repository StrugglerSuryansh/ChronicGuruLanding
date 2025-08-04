import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { CannabisLeaf, SmokeEffect } from "@/components/CannabisLeaf";
import { PremiumBadge, QualityBadge } from "@/components/PremiumBadge";
import { AIGeneratedHeroImage, AIEnhancedProductImage } from "@/components/AIGeneratedHero";
import { AIParticleSystem, EnhancedSmokeEffect } from "@/components/AIParticleSystem";
import { 
  Leaf, 
  Menu, 
  ArrowRight, 
  PlayCircle, 
  ChevronDown, 
  ShieldCheck, 
  Truck, 
  Scale, 
  UserCheck, 
  Star, 
  BookOpen, 
  GraduationCap, 
  Users, 
  Shield, 
  CheckCircle, 
  AlertCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Loader2,
  Check
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function AnimatedSection({ children, className = "", variants = fadeInUp }: { 
  children: React.ReactNode; 
  className?: string; 
  variants?: any;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navigation() {
  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-forest to-sage rounded-lg flex items-center justify-center">
              <CannabisLeaf className="w-6 h-6 text-ivory" animate={false} />
            </div>
            <span className="text-2xl font-bold text-forest">Chronic Guru</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-charcoal hover:text-forest transition-colors duration-300">About</a>
            <a href="#products" className="text-charcoal hover:text-forest transition-colors duration-300">Products</a>
            <a href="#education" className="text-charcoal hover:text-forest transition-colors duration-300">Education</a>
            <button className="bg-forest text-ivory px-6 py-2 rounded-full hover:bg-sage hover:scale-105 transition-all duration-300">
              Shop Now
            </button>
          </div>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-forest" />
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI Generated Hero Background */}
      <AIGeneratedHeroImage />
      
      {/* AI Particle System */}
      <AIParticleSystem />
      
      {/* Enhanced Smoke Effects */}
      <EnhancedSmokeEffect />
      
      {/* Floating cannabis leaves */}
      <div className="absolute top-1/4 right-1/4">
        <CannabisLeaf className="w-16 h-16 text-sage/30" />
      </div>
      <div className="absolute top-3/4 left-1/4">
        <CannabisLeaf className="w-12 h-12 text-sage/40" />
      </div>
      <div className="absolute top-1/2 right-1/3">
        <CannabisLeaf className="w-8 h-8 text-gold/20" />
      </div>
      
      {/* Smoke effects */}
      <SmokeEffect className="absolute top-40 left-20" />
      <SmokeEffect className="absolute top-60 right-32" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-bold text-ivory leading-tight mb-6">
            Premium <span className="text-gold">THCa Cannabis</span><br />
            Delivered to Your Door
          </h1>
          
          <p className="text-xl md:text-2xl text-ivory/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            Organic. Lab-Tested. Farm-Direct. <span className="text-gold font-semibold">No Medical Card Needed.</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <PremiumBadge text="Veteran Owned" />
            <PremiumBadge text="Lab Tested" />
            <PremiumBadge text="Federally Legal" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              className="group bg-gold text-forest px-8 py-4 rounded-full font-semibold text-lg min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="group-hover:animate-pulse">Shop Now</span>
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button 
              className="group border-2 border-ivory text-ivory px-8 py-4 rounded-full font-semibold text-lg hover:bg-ivory hover:text-forest min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <PlayCircle className="w-5 h-5 ml-2 inline-block group-hover:scale-110 transition-transform duration-300" />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-ivory" />
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection variants={slideInLeft}>
            <AIEnhancedProductImage 
              src="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Premium cannabis cultivation facility with mature plants" 
              className="rounded-2xl shadow-2xl w-full h-auto hover-lift" 
            />
          </AnimatedSection>
          
          <AnimatedSection variants={slideInRight}>
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6 leading-tight">
                Meet the <span className="text-gold">Chronic Guru</span>
              </h2>
              
              <div className="text-lg text-charcoal/80 mb-8 space-y-4">
                <p>Founded by military veterans with a passion for premium cannabis cultivation, Chronic Guru represents the pinnacle of artisanal THCa products.</p>
                
                <div className="bg-sage/10 p-6 rounded-xl border-l-4 border-gold">
                  <p className="font-semibold text-forest text-xl mb-2">Our Promise:</p>
                  <p className="text-charcoal">Veteran-owned. Florida-grown. Federally legal.</p>
                </div>
                
                <p>Every product is carefully crafted using sustainable farming practices and undergoes rigorous third-party lab testing to ensure purity, potency, and peace of mind.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <QualityBadge 
                  icon={ShieldCheck}
                  text="Lab Tested"
                  subtext="Third-party verified"
                />
                <QualityBadge 
                  icon={CannabisLeaf}
                  text="Organic"
                  subtext="No pesticides"
                />
                <QualityBadge 
                  icon={Truck}
                  text="Ships Nationwide"
                  subtext="Fast delivery"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute top-20 right-10">
        <CannabisLeaf className="w-24 h-24 text-sage/10" />
      </div>
      <div className="absolute bottom-20 left-10">
        <CannabisLeaf className="w-20 h-20 text-forest/10" />
      </div>
    </section>
  );
}

function ProductCard({ product, delay }: { product: any; delay: number }) {
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="hover-lift"
    >
      <div className="bg-ivory rounded-2xl shadow-lg overflow-hidden border border-sage/10">
        <AIEnhancedProductImage 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64" 
        />
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-forest">{product.name}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              product.type === 'Sativa' ? 'bg-gold/20 text-gold' :
              product.type === 'Indica' ? 'bg-sage/20 text-sage' :
              'bg-gold/20 text-gold'
            }`}>
              {product.type}
            </span>
          </div>
          
          <p className="text-charcoal/70 mb-4">{product.description}</p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-forest">${product.price}</div>
            <div className="text-sm text-charcoal/60">per gram</div>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-charcoal/70">THCa Content:</span>
              <span className="font-semibold text-forest">{product.thca}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-charcoal/70">Terpenes:</span>
              <span className="font-semibold text-forest">{product.terpenes}%</span>
            </div>
          </div>
          
          <motion.button 
            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
              isAdded 
                ? 'bg-green-600 text-white' 
                : 'bg-forest text-ivory hover:bg-sage'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
          >
            {isAdded ? (
              <><Check className="w-4 h-4 inline-block mr-1" /> Added!</>
            ) : (
              'Add to Cart'
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function ProductCarousel() {
  const products = [
    {
      name: "Tropical Haze",
      type: "Sativa",
      description: "Energizing tropical strain with notes of citrus and pine. Perfect for daytime use and creative activities.",
      price: 45,
      thca: 24.5,
      terpenes: 2.8,
      image: "https://images.unsplash.com/photo-1611213618620-6814ce2e7316?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      name: "Midnight Express",
      type: "Indica",
      description: "Relaxing evening blend with earthy undertones. Ideal for unwinding and peaceful sleep.",
      price: 38,
      thca: 26.2,
      terpenes: 3.1,
      image: "https://images.unsplash.com/photo-1597652507203-3107a98bb78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      name: "Golden Balance",
      type: "Hybrid",
      description: "Perfectly balanced hybrid offering the best of both worlds. Smooth, consistent experience.",
      price: 42,
      thca: 23.8,
      terpenes: 2.9,
      image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];
  
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-sage/5 to-forest/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">Premium Product Collection</h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">Discover our carefully curated selection of premium THCa products, each one crafted with precision and tested for excellence.</p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} delay={index * 0.1} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button 
            className="bg-gold text-forest px-8 py-4 rounded-full font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
            <ArrowRight className="w-5 h-5 ml-2 inline-block" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: "Organic",
      description: "Sustainably grown without pesticides or harmful chemicals",
      tooltip: "100% Organic Cultivation"
    },
    {
      icon: ShieldCheck,
      title: "Lab-Tested",
      description: "Rigorous testing for purity, potency, and safety",
      tooltip: "Third-party Lab Verified"
    },
    {
      icon: Truck,
      title: "Ships Nationwide",
      description: "Fast, discrete delivery to all 50 states",
      tooltip: "Fast, Discrete Delivery"
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Federally compliant THCa products",
      tooltip: "2018 Farm Bill Compliant"
    },
    {
      icon: UserCheck,
      title: "No Card Required",
      description: "Access premium cannabis without medical certification",
      tooltip: "No Medical Card Required"
    }
  ];
  
  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">Why Choose Chronic Guru?</h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">Five pillars of excellence that set us apart in the cannabis industry.</p>
        </AnimatedSection>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="text-center group relative"
            >
              <div className="relative">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-forest to-sage rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <feature.icon className="w-10 h-10 text-ivory" />
                </motion.div>
                
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-forest text-ivory px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {feature.tooltip}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-forest mb-3">{feature.title}</h3>
              <p className="text-charcoal/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      content: "The quality is absolutely incredible. As a medical user, I need consistency and potency, and Chronic Guru delivers every single time. Plus, their customer service is top-notch!",
      customerName: "Sarah M.",
      location: "California",
      customerImage: "https://images.unsplash.com/photo-1494790108755-2616b332c5cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      content: "Finally found a vendor I can trust! The lab reports give me peace of mind, and the effects are exactly what I'm looking for. Fast shipping too!",
      customerName: "Mike R.",
      location: "Texas",
      customerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      content: "As a veteran, I appreciate supporting a veteran-owned business. The quality speaks for itself, and their educational content helped me find the right products.",
      customerName: "James K.",
      location: "Florida",
      customerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-sage/10 to-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">What Our Customers Say</h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">Real experiences from real customers who trust Chronic Guru for their cannabis needs.</p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="hover-lift"
            >
              <div className="bg-ivory rounded-2xl p-8 shadow-lg border border-sage/10 h-full">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-gold font-semibold">5.0</span>
                </div>
                
                <blockquote className="text-charcoal/80 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.customerImage} 
                    alt={testimonial.customerName} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <div className="font-semibold text-forest">{testimonial.customerName}</div>
                    <div className="text-charcoal/60 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCTA() {
  return (
    <section id="education" className="py-20 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-forest to-sage p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 leaf-float opacity-10">
              <Leaf className="w-16 h-16 text-ivory" />
            </div>
            <div className="absolute bottom-4 left-4 leaf-float opacity-10" style={{ animationDelay: '-3s' }}>
              <Leaf className="w-12 h-12 text-ivory transform rotate-180" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-ivory mb-6">New to THCa?</h2>
              
              <p className="text-xl text-ivory/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover the world of premium THCa cannabis with our comprehensive education center. Learn about benefits, usage, and find the perfect products for your needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-3 text-ivory/80">
                  <BookOpen className="w-5 h-5" />
                  <span>Strain guides and effect profiles</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-ivory/80">
                  <GraduationCap className="w-5 h-5" />
                  <span>Cannabis 101 courses and tutorials</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-ivory/80">
                  <Users className="w-5 h-5" />
                  <span>Community forums and expert advice</span>
                </div>
              </div>
              
              <motion.button 
                className="group bg-gold text-forest px-8 py-4 rounded-full font-semibold text-lg relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="mr-2">Explore Sativa University</span>
                <ArrowRight className="w-5 h-5 inline-block group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const mutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Check your email for confirmation.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Subscription failed",
        description: error.message || "Something went wrong. Please try again.",
      });
    },
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      mutation.mutate(email);
    }
  };
  
  return (
    <section className="py-20 bg-gradient-to-br from-sage/5 to-forest/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">Stay in the Know</h2>
          <p className="text-xl text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Get cannabis news, exclusive deals, and educational content straight to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border-2 border-sage/20 focus:border-forest focus:outline-none text-lg transition-all duration-300"
                  required
                  disabled={mutation.isPending}
                />
                <div className="absolute right-2 top-2">
                  <button 
                    type="submit"
                    className="bg-forest text-ivory px-6 py-2 rounded-full font-semibold hover:bg-sage hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 disabled:opacity-50"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span className="hidden sm:inline">Subscribe</span>
                        <ArrowRight className="w-5 h-5 sm:hidden" />
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-charcoal/60">
                <Shield className="w-4 h-4" />
                <span>We respect your privacy. Unsubscribe anytime.</span>
              </div>
            </form>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-forest">10K+</div>
                <div className="text-charcoal/60">Subscribers</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-forest">Weekly</div>
                <div className="text-charcoal/60">Updates</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-forest">Exclusive</div>
                <div className="text-charcoal/60">Deals</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-forest">Expert</div>
                <div className="text-charcoal/60">Content</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" }
  ];
  
  return (
    <footer className="bg-forest text-ivory py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-sage rounded-lg flex items-center justify-center">
                <CannabisLeaf className="w-6 h-6 text-forest" animate={false} />
              </div>
              <span className="text-2xl font-bold">Chronic Guru</span>
            </div>
            
            <p className="text-ivory/80 leading-relaxed">
              Premium THCa cannabis products delivered nationwide. Veteran-owned, Florida-grown, federally legal.
            </p>
            
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center hover:bg-gold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gold">Quick Links</h4>
            <div className="space-y-3">
              {["About Us", "Products", "Lab Results", "Education", "Blog"].map((link) => (
                <a key={link} href="#" className="block text-ivory/80 hover:text-gold transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gold">Customer Care</h4>
            <div className="space-y-3">
              {["Contact Us", "Shipping Info", "Returns", "FAQ", "Support"].map((link) => (
                <a key={link} href="#" className="block text-ivory/80 hover:text-gold transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gold">Legal</h4>
            <div className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Age Verification", "Compliance"].map((link) => (
                <a key={link} href="#" className="block text-ivory/80 hover:text-gold transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="border-t border-sage/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-ivory/60 text-sm">
              © 2024 Chronic Guru. All rights reserved.
            </div>
            
            <div className="text-ivory/60 text-sm text-center md:text-right">
              <p className="mb-2">This product has not been evaluated by the FDA.</p>
              <p>Must be 21+ to purchase. Keep out of reach of children and pets.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
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

function MinimalHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-charcoal relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <AIParticleSystem />
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-bold text-ivory mb-8 leading-tight">
            Welcome to the <span className="text-forest">Green Side</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray mb-12 max-w-2xl mx-auto">
            Explore a Lifestyle That Grows With You
          </p>
          
          <div className="space-y-8 mb-12">
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
          
          <motion.div 
            className="bg-dark border border-gray/30 rounded-2xl p-8 mb-12"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-forest mb-4">🔍 Curious?</h3>
            <p className="text-gray mb-4">
              What we show here is just the surface.
            </p>
            <p className="text-gray">
              For the real deal — the good stuff — you'll need to be on the inside.
            </p>
          </motion.div>
          
          <div className="space-y-6 mb-12">
            <p className="text-lg text-gray">
              Join our private channel to explore more. Updates, access, and vibes await. 🌬
            </p>
          </div>
          
          <motion.div 
            className="bg-dark border border-gray/30 rounded-2xl p-8 mb-12"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-forest mb-4">🚪 Step Inside</h3>
            <p className="text-gray mb-6">
              Click below to connect.<br />
              We'll meet you there.
            </p>
            
            <motion.button
              className="bg-forest text-charcoal px-8 py-4 rounded-full font-bold text-lg hover:bg-forest/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://t.me/yourusername', '_blank')}
            >
              Join Us on Telegram
            </motion.button>
          </motion.div>
          
          {/* Subtle floating elements */}
          <div className="absolute top-20 right-20 opacity-10">
            <CannabisLeaf className="w-16 h-16 text-forest" />
          </div>
          <div className="absolute bottom-20 left-20 opacity-10">
            <CannabisLeaf className="w-12 h-12 text-sage" />
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
      <MinimalHero />
      <MinimalFooter />
    </div>
  );
}
