import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Sparkles, TrendingUp, Lightbulb, Zap, Loader2 } from 'lucide-react';
import { AuroraWaves } from '@/components/HeroAnimations';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const FloatingEnvelope = () => (
  <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
    <mesh>
      <boxGeometry args={[2, 1.2, 0.2]} />
      <MeshDistortMaterial color="#667eea" distort={0.2} speed={2} />
    </mesh>
    <mesh position={[0, 0.3, 0.15]} rotation={[0, 0, Math.PI / 4]}>
      <planeGeometry args={[1.4, 1.4]} />
      <MeshDistortMaterial color="#00d4ff" distort={0.1} speed={3} transparent opacity={0.8} />
    </mesh>
  </Float>
);

const benefits = [
  { icon: Sparkles, title: 'AI Insights', description: 'Weekly trends and breakthroughs in AI technology' },
  { icon: TrendingUp, title: 'Industry Updates', description: 'Stay ahead with digital transformation news' },
  { icon: Lightbulb, title: 'Expert Tips', description: 'Practical advice from our AI specialists' },
  { icon: Zap, title: 'Exclusive Content', description: 'Early access to tools, guides, and resources' },
];

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const { error } = await supabase.from('newsletter_subscribers').insert({ email });
    setLoading(false);
    if (error) {
      if (error.code === '23505') toast.info('You are already subscribed!');
      else toast.error('Failed to subscribe. Please try again.');
      return;
    }
    setSubscribed(true);
    toast.success('Successfully subscribed!');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <AuroraWaves />
        <div className="absolute inset-0 z-0 opacity-50">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <FloatingEnvelope />
          </Canvas>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              <Mail className="w-4 h-4 inline mr-2" />
              Newsletter
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Stay Ahead with{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join 25,000+ professionals receiving weekly insights on AI innovation, digital transformation, and industry trends.
            </p>

            {!subscribed ? (
              <motion.form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 text-lg glass-card flex-1"
                    required
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="h-14 px-8 bg-gradient-to-r from-primary to-accent"
                    disabled={loading}
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Subscribe <Sparkles className="w-5 h-5 ml-2" /></>}
                  </Button>
                    Subscribe
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-8 max-w-lg mx-auto"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">You're In!</h3>
                <p className="text-muted-foreground">
                  Check your inbox for a confirmation email. Welcome to the GSGROUPS community!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Get</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every week, receive curated content designed to help you stay competitive in the AI era.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full text-center hover:border-primary/50 transition-all">
                  <CardContent className="pt-8">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  25,000+
                </div>
                <div className="text-sm text-muted-foreground">Subscribers</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  52%
                </div>
                <div className="text-sm text-muted-foreground">Open Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  4.9/5
                </div>
                <div className="text-sm text-muted-foreground">Reader Rating</div>
              </div>
            </div>
            <p className="text-muted-foreground italic max-w-xl mx-auto">
              "The best AI newsletter I've subscribed to. Concise, actionable, and always relevant."
              <br />
              <span className="text-sm not-italic">— CTO, Fortune 500 Company</span>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
