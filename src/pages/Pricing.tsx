import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Zap, Star, Building2, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const FloatingPrism = () => (
  <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
    <mesh rotation={[0.5, 0.5, 0]}>
      <octahedronGeometry args={[1.5]} />
      <MeshDistortMaterial color="#00d4ff" distort={0.2} speed={3} transparent opacity={0.8} />
    </mesh>
  </Float>
);

const plans = [
  {
    name: 'Starter',
    price: 999,
    displayPrice: '₹999',
    period: '/month',
    description: 'Perfect for startups and small businesses',
    icon: Zap,
    popular: false,
    features: [
      'Up to 5 AI integrations',
      'Basic analytics dashboard',
      'Email support',
      '10GB data processing',
      'API access',
      'Monthly reports',
    ],
  },
  {
    name: 'Professional',
    price: 2499,
    displayPrice: '₹2,499',
    period: '/month',
    description: 'Ideal for growing companies',
    icon: Star,
    popular: true,
    features: [
      'Unlimited AI integrations',
      'Advanced analytics & insights',
      'Priority 24/7 support',
      '100GB data processing',
      'Custom API endpoints',
      'Weekly strategy calls',
      'Dedicated account manager',
      'Custom model training',
    ],
  },
  {
    name: 'Enterprise',
    price: 0,
    displayPrice: 'Custom',
    period: '',
    description: 'For large-scale operations',
    icon: Building2,
    popular: false,
    features: [
      'Everything in Professional',
      'Unlimited data processing',
      'On-premise deployment',
      'White-label solutions',
      'Custom SLA',
      'Dedicated engineering team',
      'Compliance & security audit',
      '24/7 phone support',
    ],
  },
];

const Pricing = () => {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (plan: typeof plans[0]) => {
    if (plan.name === 'Enterprise') {
      navigate('/consultation');
      return;
    }

    if (!user) {
      toast.error('Please login to subscribe');
      navigate('/login');
      return;
    }

    setLoadingPlan(plan.name);

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        toast.error('Failed to load payment gateway');
        setLoadingPlan(null);
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-razorpay-order', {
        body: { amount: plan.price, currency: 'INR', plan: plan.name, user_id: user.id },
      });

      if (error || !data?.order_id) {
        toast.error(data?.error || 'Failed to create order');
        setLoadingPlan(null);
        return;
      }

      const options = {
        key: data.key_id,
        amount: data.amount,
        currency: data.currency,
        name: 'GSGROUPS',
        description: `${plan.name} Plan Subscription`,
        order_id: data.order_id,
        handler: async (response: any) => {
          const { error: verifyError } = await supabase.functions.invoke('verify-razorpay-payment', {
            body: {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            },
          });

          if (verifyError) {
            toast.error('Payment verification failed');
          } else {
            toast.success(`Successfully subscribed to ${plan.name} plan!`);
            navigate('/dashboard');
          }
        },
        prefill: {
          email: user.email,
        },
        theme: {
          color: '#00d4ff',
        },
        modal: {
          ondismiss: () => setLoadingPlan(null),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('Payment error:', err);
      toast.error('Something went wrong');
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <FloatingPrism />
          </Canvas>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Simple Pricing
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Plans That{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Scale with You
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business. Upgrade or downgrade anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={plan.popular ? 'md:-mt-4 md:mb-4' : ''}
              >
                <Card className={`glass-card h-full relative ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-primary to-accent text-white text-sm font-medium px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <plan.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.displayPrice}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      onClick={() => handlePayment(plan)}
                      disabled={loadingPlan === plan.name}
                    >
                      {loadingPlan === plan.name ? (
                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...</>
                      ) : plan.name === 'Enterprise' ? (
                        'Contact Sales'
                      ) : (
                        'Get Started'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our team is here to help you choose the right plan for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" onClick={() => navigate('/faq')}>
                View FAQ
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent" onClick={() => navigate('/consultation')}>
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
