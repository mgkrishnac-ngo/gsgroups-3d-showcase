import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Building2, ShoppingCart, Stethoscope, GraduationCap, Factory } from 'lucide-react';
import { GradientMorphOrbs, PulsingRings } from '@/components/HeroAnimations';

const industries = [
  {
    slug: 'finance',
    title: 'Financial Services',
    icon: TrendingUp,
    description: 'AI-powered solutions for fraud detection, risk assessment, algorithmic trading, and customer service automation.',
    useCases: ['Fraud Detection', 'Credit Scoring', 'Robo-Advisory', 'Regulatory Compliance'],
    stats: { clients: '50+', improvement: '40%' },
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    icon: Stethoscope,
    description: 'Transform patient care with AI diagnostics, predictive analytics, drug discovery, and operational optimization.',
    useCases: ['Diagnostic AI', 'Patient Analytics', 'Drug Discovery', 'Resource Optimization'],
    stats: { clients: '35+', improvement: '55%' },
  },
  {
    slug: 'retail',
    title: 'Retail & E-commerce',
    icon: ShoppingCart,
    description: 'Enhance customer experience with personalization, demand forecasting, inventory optimization, and chatbots.',
    useCases: ['Personalization', 'Demand Forecasting', 'Visual Search', 'Dynamic Pricing'],
    stats: { clients: '80+', improvement: '35%' },
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    icon: Factory,
    description: 'Optimize operations with predictive maintenance, quality control, supply chain AI, and smart automation.',
    useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain AI', 'Process Automation'],
    stats: { clients: '45+', improvement: '45%' },
  },
  {
    slug: 'education',
    title: 'Education',
    icon: GraduationCap,
    description: 'Personalize learning experiences with adaptive AI, automated grading, and intelligent tutoring systems.',
    useCases: ['Adaptive Learning', 'Auto-Grading', 'Content Generation', 'Student Analytics'],
    stats: { clients: '60+', improvement: '50%' },
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    icon: Building2,
    description: 'Leverage AI for property valuation, market analysis, lead scoring, and smart building management.',
    useCases: ['Property Valuation', 'Market Analysis', 'Lead Scoring', 'Smart Buildings'],
    stats: { clients: '30+', improvement: '38%' },
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <GradientMorphOrbs />
        <PulsingRings />
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Solutions for{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored AI implementations designed for your industry's unique challenges and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-primary/50 transition-all group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <industry.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {industry.title}
                    </CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {industry.useCases.map((useCase) => (
                        <Badge key={useCase} variant="secondary" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-6 p-4 rounded-xl bg-muted/50">
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">{industry.stats.clients}</div>
                        <div className="text-xs text-muted-foreground">Clients</div>
                      </div>
                      <div className="w-px h-10 bg-border" />
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">{industry.stats.improvement}</div>
                        <div className="text-xs text-muted-foreground">Avg. Improvement</div>
                      </div>
                    </div>
                    
                    <Link to={`/industries/${industry.slug}`}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
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
            <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our AI solutions are adaptable to any industry. Let's discuss how we can help transform your business.
            </p>
            <Link to="/consultation">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
