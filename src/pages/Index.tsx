import { Suspense, lazy } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GradientMorphOrbs, FloatingGridLines, ParticleWave, DiagonalSweep, PulsingRings, AuroraWaves } from '@/components/HeroAnimations';
import teamCeoImg from '@/assets/team-ceo.jpg';
import teamCtoImg from '@/assets/team-cto.jpg';
import teamDesignImg from '@/assets/team-design.jpg';
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Code, 
  Megaphone, 
  Search, 
  Smartphone, 
  Bot, 
  Palette, 
  Server, 
  Lightbulb, 
  Database,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Globe,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

// Lazy load 3D scene for performance
const NeuralNetworkScene = lazy(() => import('@/components/3d/NeuralNetworkScene'));

const services = [
  { 
    icon: Sparkles, 
    name: 'AI Apps', 
    description: 'Custom AI-powered applications that transform your business processes.',
    href: '/services/ai-apps',
    color: 'from-violet-500 to-purple-600'
  },
  { 
    icon: Cpu, 
    name: 'AI Trainer', 
    description: 'Train and fine-tune AI models specifically for your use cases.',
    href: '/services/ai-trainer',
    color: 'from-cyan-500 to-blue-600'
  },
  { 
    icon: Lightbulb, 
    name: 'AI Solutions', 
    description: 'End-to-end AI implementations tailored to your industry.',
    href: '/services/ai-solutions',
    color: 'from-amber-500 to-orange-600'
  },
  { 
    icon: Code, 
    name: 'Software Development', 
    description: 'Scalable, maintainable software built with modern technologies.',
    href: '/services/software-development',
    color: 'from-emerald-500 to-green-600'
  },
  { 
    icon: Megaphone, 
    name: 'Digital Marketing', 
    description: 'Data-driven marketing strategies that deliver results.',
    href: '/services/digital-marketing',
    color: 'from-pink-500 to-rose-600'
  },
  { 
    icon: Search, 
    name: 'SEO', 
    description: 'Dominate search rankings with our proven SEO strategies.',
    href: '/services/seo',
    color: 'from-indigo-500 to-violet-600'
  },
  { 
    icon: Smartphone, 
    name: 'Mobile Apps', 
    description: 'Native iOS & Android apps with exceptional user experiences.',
    href: '/services/mobile-apps',
    color: 'from-sky-500 to-cyan-600'
  },
  { 
    icon: Bot, 
    name: 'AI Agents', 
    description: 'Intelligent automation agents that work 24/7 for your business.',
    href: '/services/ai-agents',
    color: 'from-fuchsia-500 to-pink-600'
  },
  { 
    icon: Palette, 
    name: 'UX/UI Design', 
    description: 'Beautiful, intuitive interfaces that users love.',
    href: '/services/design',
    color: 'from-rose-500 to-red-600'
  },
  { 
    icon: Server, 
    name: 'AI Engine', 
    description: 'Core AI infrastructure for enterprise-scale operations.',
    href: '/services/ai-engine',
    color: 'from-teal-500 to-emerald-600'
  },
  { 
    icon: Lightbulb, 
    name: 'AI Consulting', 
    description: 'Strategic AI guidance from industry experts.',
    href: '/services/ai-consulting',
    color: 'from-yellow-500 to-amber-600'
  },
  { 
    icon: Database, 
    name: 'Data Center', 
    description: 'Enterprise-scale infrastructure from startup to unicorn.',
    href: '/services/data-center',
    color: 'from-slate-500 to-gray-600'
  },
];

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: CheckCircle },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
  { value: '50+', label: 'AI Models Deployed', icon: Cpu },
  { value: '24/7', label: 'Support Available', icon: Zap },
];

const testimonials = [
  {
    quote: "GSGROUPS transformed our business with their AI solutions. Our efficiency increased by 300% within months.",
    author: "Sarah Chen",
    role: "CTO, TechVentures Inc",
    avatar: "/placeholder.svg"
  },
  {
    quote: "The best tech partner we've ever worked with. Their team delivers exceptional quality consistently.",
    author: "Michael Roberts",
    role: "CEO, DataFlow Systems",
    avatar: "/placeholder.svg"
  },
  {
    quote: "Their AI agents handle 80% of our customer inquiries automatically. Game changer for our support team.",
    author: "Emily Watson",
    role: "VP Operations, ScaleUp Co",
    avatar: "/placeholder.svg"
  },
];

const features = [
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade security for all your data and operations.' },
  { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance that scales with your growth.' },
  { icon: Globe, title: 'Global Reach', description: 'Serving clients across 50+ countries worldwide.' },
  { icon: Users, title: 'Expert Team', description: '200+ engineers, designers, and AI specialists.' },
];

const Index = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={
            <div className="w-full h-full bg-gradient-to-b from-background via-muted/20 to-background animate-pulse" />
          }>
            <NeuralNetworkScene className="opacity-60" />
          </Suspense>
        </div>
        
        {/* Hero Animations */}
        <GradientMorphOrbs />
        <FloatingGridLines />
        <ParticleWave />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background z-10" />
        <div className="absolute inset-0 bg-gradient-mesh z-10" />
        
        {/* Content */}
        <motion.div 
          className="container mx-auto px-6 relative z-20"
          style={{ y, opacity }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Digital Solutions</span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">Transform</span> Your Business
              <br />
              <span className="text-foreground">With </span>
              <span className="gradient-text-secondary">AI</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              From cutting-edge AI solutions to full-scale digital transformation, we help businesses 
              innovate, scale, and dominate their markets.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild className="btn-hero group">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="btn-secondary-hero">
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm"
            >
              <span>Trusted by:</span>
              <div className="flex items-center gap-8 opacity-60">
                {['TechCorp', 'DataFlow', 'ScaleUp', 'InnovateLab', 'FutureTech'].map((company) => (
                  <span key={company} className="font-semibold">{company}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center glass-card p-6 rounded-2xl"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From AI development to digital marketing, we offer comprehensive solutions 
              that drive real business results.
            </p>
          </motion.div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link 
                  to={service.href}
                  className="block h-full glass-card p-6 rounded-2xl card-hover group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative z-20 bg-muted/30 overflow-hidden">
        <DiagonalSweep />
        <PulsingRings />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Built for <span className="gradient-text">Enterprise</span> Scale
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine cutting-edge technology with deep industry expertise to deliver 
                solutions that grow with your business.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl glass-card p-8 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-mesh animate-pulse" />
                
                {/* Floating elements */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
                      <Cpu className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2">AI-First Approach</h3>
                    <p className="text-muted-foreground">Powered by the latest AI technologies</p>
                  </div>
                </div>
                
                {/* Decorative orbs */}
                <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-secondary/20 animate-float-slow" />
                <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-accent/20 animate-float-fast" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-mesh" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
                Let's discuss how our AI solutions can help you achieve your goals. 
                Get a free consultation with our experts.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="btn-hero group">
                  <Link to="/contact">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="btn-secondary-hero">
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
