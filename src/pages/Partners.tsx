import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, TrendingUp, Shield, Globe, Users, Award } from 'lucide-react';
import { FloatingGridLines } from '@/components/HeroAnimations';

const FloatingRing = () => (
  <Float speed={2} rotationIntensity={1} floatIntensity={1}>
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[1.5, 0.4, 16, 100]} />
      <MeshDistortMaterial color="#764ba2" distort={0.3} speed={2} />
    </mesh>
  </Float>
);

const partnerTypes = [
  {
    icon: Globe,
    title: 'Technology Partners',
    description: 'Integrate your technology with our AI platform to create powerful solutions for mutual customers.',
    benefits: ['API access', 'Technical support', 'Co-marketing opportunities'],
  },
  {
    icon: Users,
    title: 'Reseller Partners',
    description: 'Expand your offerings by reselling our AI solutions to your customer base.',
    benefits: ['Competitive margins', 'Sales training', 'Partner portal access'],
  },
  {
    icon: Award,
    title: 'Consulting Partners',
    description: 'Deliver AI transformation services using our platform and methodology.',
    benefits: ['Certification program', 'Lead sharing', 'Implementation support'],
  },
];

const partners = [
  'Microsoft', 'AWS', 'Google Cloud', 'NVIDIA', 'IBM', 'Salesforce',
  'SAP', 'Oracle', 'Snowflake', 'Databricks', 'MongoDB', 'Stripe',
];

const stats = [
  { value: '150+', label: 'Global Partners' },
  { value: '40+', label: 'Countries' },
  { value: '$50M+', label: 'Partner Revenue' },
  { value: '95%', label: 'Partner Satisfaction' },
];

const Partners = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <FloatingGridLines />
        <div className="absolute inset-0 z-0 opacity-50">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <FloatingRing />
          </Canvas>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Partner Program
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grow Together with{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GSGROUPS
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join our partner ecosystem and unlock new revenue streams with cutting-edge AI solutions.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              <Handshake className="w-5 h-5 mr-2" />
              Become a Partner
            </Button>
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
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the partnership model that best fits your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="glass-card h-full hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <type.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm font-semibold mb-3 text-primary">Benefits Include:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Partner Ecosystem</h2>
            <p className="text-muted-foreground">Trusted by industry leaders worldwide</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 flex items-center justify-center hover:border-primary/50 transition-all"
              >
                <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center max-w-4xl mx-auto"
          >
            <Shield className="w-16 h-16 mx-auto text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Partner?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join our growing network of partners and unlock the full potential of AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                Apply Now
              </Button>
              <Button size="lg" variant="outline">
                Download Partner Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
