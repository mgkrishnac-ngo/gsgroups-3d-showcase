import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Cpu, Code, Megaphone, Search, Smartphone, Bot, Palette, Server, Lightbulb, Database, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const services = [
  { 
    icon: Sparkles, 
    name: 'AI Apps', 
    description: 'Custom AI-powered applications that automate workflows, enhance decision-making, and create competitive advantages.',
    features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Recommendation Systems'],
    href: '/services/ai-apps',
    color: 'from-violet-500 to-purple-600'
  },
  { 
    icon: Cpu, 
    name: 'AI Trainer', 
    description: 'Train and fine-tune AI models specifically for your unique business needs and data patterns.',
    features: ['Custom Model Training', 'Data Labeling', 'Model Optimization', 'Transfer Learning'],
    href: '/services/ai-trainer',
    color: 'from-cyan-500 to-blue-600'
  },
  { 
    icon: Lightbulb, 
    name: 'AI Solutions', 
    description: 'End-to-end AI implementations tailored to your industry vertical and specific challenges.',
    features: ['Solution Architecture', 'Integration Services', 'Deployment Support', 'Maintenance'],
    href: '/services/ai-solutions',
    color: 'from-amber-500 to-orange-600'
  },
  { 
    icon: Code, 
    name: 'Software Development', 
    description: 'Scalable, maintainable software solutions built with cutting-edge technologies and best practices.',
    features: ['Web Applications', 'APIs & Microservices', 'Cloud Solutions', 'DevOps'],
    href: '/services/software-development',
    color: 'from-emerald-500 to-green-600'
  },
  { 
    icon: Megaphone, 
    name: 'Digital Marketing', 
    description: 'Data-driven marketing strategies powered by AI that deliver measurable results.',
    features: ['Performance Marketing', 'Content Strategy', 'Analytics', 'Automation'],
    href: '/services/digital-marketing',
    color: 'from-pink-500 to-rose-600'
  },
  { 
    icon: Zap, 
    name: 'Advertising', 
    description: 'Creative advertising campaigns that capture attention and drive conversions.',
    features: ['Campaign Strategy', 'Creative Design', 'Media Buying', 'ROI Optimization'],
    href: '/services/advertising',
    color: 'from-yellow-500 to-amber-600'
  },
  { 
    icon: Search, 
    name: 'SEO', 
    description: 'Dominate search rankings with our proven SEO strategies and technical expertise.',
    features: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO'],
    href: '/services/seo',
    color: 'from-indigo-500 to-violet-600'
  },
  { 
    icon: Smartphone, 
    name: 'Mobile Apps', 
    description: 'Native iOS & Android applications with exceptional user experiences and performance.',
    features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization'],
    href: '/services/mobile-apps',
    color: 'from-sky-500 to-cyan-600'
  },
  { 
    icon: Bot, 
    name: 'AI Agents', 
    description: 'Intelligent automation agents that work 24/7 to handle customer support, sales, and operations.',
    features: ['Chatbots', 'Virtual Assistants', 'Process Automation', 'Multi-channel Support'],
    href: '/services/ai-agents',
    color: 'from-fuchsia-500 to-pink-600'
  },
  { 
    icon: Palette, 
    name: 'UX/UI Design', 
    description: 'Beautiful, intuitive interfaces designed with user research and data-driven insights.',
    features: ['User Research', 'Interface Design', 'Prototyping', 'Design Systems'],
    href: '/services/design',
    color: 'from-rose-500 to-red-600'
  },
  { 
    icon: Server, 
    name: 'AI Engine', 
    description: 'Core AI infrastructure for enterprise-scale operations with reliability and performance.',
    features: ['ML Infrastructure', 'Model Serving', 'Auto-scaling', 'Monitoring'],
    href: '/services/ai-engine',
    color: 'from-teal-500 to-emerald-600'
  },
  { 
    icon: Lightbulb, 
    name: 'AI Consulting', 
    description: 'Strategic AI guidance from industry experts to navigate your digital transformation.',
    features: ['Strategy Development', 'Technology Assessment', 'Roadmap Planning', 'Change Management'],
    href: '/services/ai-consulting',
    color: 'from-orange-500 to-amber-600'
  },
  { 
    icon: Database, 
    name: 'Data Center', 
    description: 'Enterprise-scale infrastructure solutions from startup to unicorn and beyond.',
    features: ['Cloud Hosting', 'Managed Services', 'Security', '24/7 Support'],
    href: '/services/data-center',
    color: 'from-slate-500 to-gray-600'
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From AI development to digital marketing, we offer comprehensive solutions 
              that drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link 
                  to={service.href}
                  className="block glass-card p-8 rounded-2xl card-hover group"
                >
                  <div className="grid md:grid-cols-[auto,1fr,auto] gap-6 items-center">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span 
                            key={feature}
                            className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all hidden md:block" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss your goals and we'll recommend the best approach for your business.
            </p>
            <Button asChild className="btn-hero">
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
