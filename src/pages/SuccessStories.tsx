import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Text3D, Center } from '@react-three/drei';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, BarChart3, Users, Globe } from 'lucide-react';

const FloatingGlobe = () => (
  <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <MeshDistortMaterial color="#667eea" distort={0.3} speed={1.5} wireframe />
    </mesh>
  </Float>
);

const stats = [
  { icon: Building2, value: '500+', label: 'Enterprise Clients' },
  { icon: BarChart3, value: '$2B+', label: 'Revenue Generated' },
  { icon: Users, value: '10M+', label: 'Users Impacted' },
  { icon: Globe, value: '40+', label: 'Countries' },
];

const successStories = [
  {
    company: 'TechCorp Global',
    industry: 'Technology',
    challenge: 'Legacy systems causing 40% operational inefficiency',
    solution: 'AI-powered process automation and predictive analytics',
    results: ['65% reduction in manual tasks', '3x faster decision making', '$12M annual savings'],
    image: '/placeholder.svg',
  },
  {
    company: 'HealthFirst Network',
    industry: 'Healthcare',
    challenge: 'Patient wait times averaging 45 minutes',
    solution: 'ML-based scheduling and resource optimization',
    results: ['70% reduction in wait times', '35% increase in patient satisfaction', '25% more appointments daily'],
    image: '/placeholder.svg',
  },
  {
    company: 'RetailMax',
    industry: 'E-commerce',
    challenge: 'Low conversion rates and high cart abandonment',
    solution: 'AI personalization engine and recommendation system',
    results: ['45% increase in conversions', '30% reduction in cart abandonment', '2x customer lifetime value'],
    image: '/placeholder.svg',
  },
  {
    company: 'FinanceHub',
    industry: 'Financial Services',
    challenge: 'Fraud losses exceeding $5M annually',
    solution: 'Real-time AI fraud detection system',
    results: ['95% fraud detection rate', '$4.2M in prevented losses', '60% faster transaction processing'],
    image: '/placeholder.svg',
  },
];

const SuccessStories = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <FloatingGlobe />
          </Canvas>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Success Stories
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Results,{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Real Impact
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how leading organizations have transformed their businesses with our AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-b border-border/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-12">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary">{story.industry}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{story.company}</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-1">Challenge</h4>
                          <p className="text-muted-foreground">{story.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-1">Solution</h4>
                          <p className="text-muted-foreground">{story.solution}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {story.results.map((result) => (
                          <Badge key={result} className="bg-primary/10 text-primary hover:bg-primary/20">
                            {result}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                          <Building2 className="w-12 h-12 text-primary" />
                        </div>
                        <Button variant="outline" size="sm">
                          Read Full Story
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how we can help you achieve similar transformative results.
            </p>
            <Link to="/consultation">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStories;
