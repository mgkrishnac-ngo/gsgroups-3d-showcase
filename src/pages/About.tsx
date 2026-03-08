import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { GradientMorphOrbs, FloatingGridLines } from '@/components/HeroAnimations';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  Award,
  Heart,
  Rocket,
  Globe,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const FloatingElement = lazy(() => import('@/components/3d/FloatingElement'));

const values = [
  { icon: Lightbulb, title: 'Innovation First', description: 'We push boundaries and embrace emerging technologies.' },
  { icon: Users, title: 'Client Focused', description: 'Your success is our mission. We build lasting partnerships.' },
  { icon: Shield, title: 'Quality Driven', description: 'Excellence in every line of code and every design.' },
  { icon: Heart, title: 'Passion Led', description: 'We love what we do, and it shows in our work.' },
];

const team = [
  { name: 'Alex Johnson', role: 'CEO & Founder', image: '/placeholder.svg' },
  { name: 'Sarah Chen', role: 'CTO', image: '/placeholder.svg' },
  { name: 'Michael Roberts', role: 'Head of AI', image: '/placeholder.svg' },
  { name: 'Emily Watson', role: 'Design Director', image: '/placeholder.svg' },
];

const milestones = [
  { year: '2018', title: 'Founded', description: 'Started with a vision to democratize AI' },
  { year: '2019', title: 'First 50 Clients', description: 'Rapid growth in our first year' },
  { year: '2020', title: 'Global Expansion', description: 'Opened offices in 5 countries' },
  { year: '2021', title: 'AI Platform Launch', description: 'Released our proprietary AI engine' },
  { year: '2022', title: '500+ Projects', description: 'Milestone of successful deliveries' },
  { year: '2023', title: 'Enterprise Focus', description: 'Fortune 500 partnerships' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <Suspense fallback={<div className="w-full h-full bg-muted/20" />}>
            <FloatingElement shape="icosahedron" color="#667eea" distort />
          </Suspense>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background z-10" />
        
        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Building the <span className="gradient-text">Future</span> of Tech
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a team of innovators, engineers, and dreamers united by a passion 
              for creating technology that transforms businesses and lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-3xl glass-card p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-mesh" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-24 h-24 text-primary mx-auto mb-6" />
                    <h3 className="text-3xl font-display font-bold gradient-text">Our Mission</h3>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Democratizing <span className="gradient-text">AI</span> for Everyone
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                We believe that AI should be accessible to businesses of all sizes. Our mission 
                is to break down barriers and empower organizations with cutting-edge technology 
                that was once only available to tech giants.
              </p>
              <p className="text-muted-foreground mb-8">
                From startups to enterprises, we provide the tools, expertise, and support needed 
                to harness the full potential of artificial intelligence and digital transformation.
              </p>
              <Button asChild className="btn-hero">
                <Link to="/contact">
                  Join Our Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              What <span className="gradient-text">Drives</span> Us
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center card-hover"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              From <span className="gradient-text">Vision</span> to Reality
            </h2>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card p-6 rounded-2xl inline-block">
                      <span className="text-primary font-orbitron font-bold text-2xl">{milestone.year}</span>
                      <h3 className="text-xl font-semibold mt-2">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary glow-primary hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Meet the <span className="gradient-text">Leaders</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden card-hover"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
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
            className="glass-card rounded-3xl p-12 md:p-16 text-center"
          >
            <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              Join hundreds of companies that trust GSGROUPS for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="btn-hero">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" asChild className="btn-secondary-hero">
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
