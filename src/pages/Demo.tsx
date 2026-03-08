import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, CheckCircle, Clock, Users, Zap } from 'lucide-react';
import { DiagonalSweep } from '@/components/HeroAnimations';

const FloatingScreen = () => (
  <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
    <mesh rotation={[0.1, -0.2, 0]}>
      <boxGeometry args={[2.5, 1.5, 0.1]} />
      <MeshDistortMaterial color="#667eea" distort={0.15} speed={2} />
    </mesh>
    <mesh position={[0, 0, 0.06]}>
      <planeGeometry args={[2.3, 1.3]} />
      <meshBasicMaterial color="#0f0f23" />
    </mesh>
  </Float>
);

const features = [
  { icon: Clock, text: '30-minute personalized demo' },
  { icon: Users, text: 'Talk with our AI specialists' },
  { icon: Zap, text: 'See solutions in action' },
  { icon: CheckCircle, text: 'Get custom recommendations' },
];

const Demo = () => {
  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                <Play className="w-4 h-4 inline mr-2" />
                Request Demo
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                See GSGROUPS{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  in Action
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a personalized demo and discover how our AI solutions can transform your business.
              </p>

              <Card className="glass-card">
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Work Email</label>
                      <Input type="email" placeholder="john@company.com" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company</label>
                      <Input placeholder="Company Name" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company Size</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501+">501+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Interested In</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-apps">AI Apps</SelectItem>
                          <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                          <SelectItem value="software-dev">Software Development</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="mobile-apps">Mobile App Development</SelectItem>
                          <SelectItem value="ai-agents">AI Agent Development</SelectItem>
                          <SelectItem value="data-center">Data Center Solutions</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Tell us about your project</label>
                      <Textarea placeholder="Describe your needs and goals..." rows={4} />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent" size="lg">
                      Schedule Demo
                      <Play className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right - 3D + Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="h-[400px] mb-8">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <FloatingScreen />
                </Canvas>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
