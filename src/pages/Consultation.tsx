import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MessageCircle, Clock, Sparkles } from 'lucide-react';

const FloatingCalendar = () => (
  <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
    <mesh rotation={[0.1, -0.1, 0]}>
      <boxGeometry args={[2, 2.2, 0.15]} />
      <MeshDistortMaterial color="#00d4ff" distort={0.15} speed={2} />
    </mesh>
    {/* Calendar grid lines */}
    {[0, 1, 2, 3].map((i) => (
      <mesh key={i} position={[0, 0.6 - i * 0.4, 0.08]}>
        <boxGeometry args={[1.8, 0.02, 0.01]} />
        <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
      </mesh>
    ))}
  </Float>
);

const Consultation = () => {
  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - 3D */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="h-[400px] mb-8">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <FloatingCalendar />
                </Canvas>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <Clock className="w-8 h-8 mx-auto text-primary mb-2" />
                    <div className="text-2xl font-bold">45 min</div>
                    <div className="text-sm text-muted-foreground">Session Duration</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <Sparkles className="w-8 h-8 mx-auto text-primary mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-muted-foreground">Free Consultation</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                <Calendar className="w-4 h-4 inline mr-2" />
                Free Consultation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Discuss Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  AI Journey
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Book a free 45-minute consultation with our AI experts to explore how we can help transform your business.
              </p>

              <Card className="glass-card">
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Full Name</label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input type="email" placeholder="you@company.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Phone</label>
                        <Input type="tel" placeholder="+1 (555) 000-0000" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Company</label>
                        <Input placeholder="Company Name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Preferred Time</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Topic of Interest</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="What would you like to discuss?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-strategy">AI Strategy & Roadmap</SelectItem>
                          <SelectItem value="automation">Business Process Automation</SelectItem>
                          <SelectItem value="custom-ai">Custom AI Development</SelectItem>
                          <SelectItem value="digital-transform">Digital Transformation</SelectItem>
                          <SelectItem value="data-analytics">Data & Analytics</SelectItem>
                          <SelectItem value="other">Other / General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">What challenges are you facing?</label>
                      <Textarea placeholder="Tell us about your current challenges and goals..." rows={4} />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent" size="lg">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book Free Consultation
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      By booking, you agree to our terms. We'll never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consultation;
