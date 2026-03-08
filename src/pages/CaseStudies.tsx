import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { DiagonalSweep, PulsingRings } from '@/components/HeroAnimations';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Customer Service Platform',
    client: 'TechVentures Inc',
    industry: 'Technology',
    services: ['AI Agents', 'Software Development'],
    results: ['300% efficiency increase', '90% customer satisfaction', '50% cost reduction'],
    image: '/placeholder.svg',
    href: '/case-studies/techventures'
  },
  {
    id: 2,
    title: 'Enterprise Data Analytics Solution',
    client: 'DataFlow Systems',
    industry: 'Finance',
    services: ['AI Solutions', 'AI Engine'],
    results: ['Real-time insights', '40% faster decisions', '$2M annual savings'],
    image: '/placeholder.svg',
    href: '/case-studies/dataflow'
  },
  {
    id: 3,
    title: 'Mobile Commerce App Redesign',
    client: 'RetailMax',
    industry: 'Retail',
    services: ['Mobile Apps', 'UX/UI Design'],
    results: ['150% conversion increase', '4.8 app store rating', '2M+ downloads'],
    image: '/placeholder.svg',
    href: '/case-studies/retailmax'
  },
  {
    id: 4,
    title: 'SEO & Digital Marketing Transformation',
    client: 'GrowthStartup',
    industry: 'SaaS',
    services: ['SEO', 'Digital Marketing'],
    results: ['500% organic traffic growth', 'Top 3 rankings', '200% lead increase'],
    image: '/placeholder.svg',
    href: '/case-studies/growthstartup'
  },
  {
    id: 5,
    title: 'AI Training Platform for Healthcare',
    client: 'MedTech Labs',
    industry: 'Healthcare',
    services: ['AI Trainer', 'AI Consulting'],
    results: ['95% accuracy rate', 'FDA approval', 'Deployed in 50 hospitals'],
    image: '/placeholder.svg',
    href: '/case-studies/medtech'
  },
  {
    id: 6,
    title: 'Cloud Infrastructure Migration',
    client: 'Enterprise Corp',
    industry: 'Manufacturing',
    services: ['Data Center', 'Software Development'],
    results: ['99.99% uptime', '60% cost reduction', 'Zero downtime migration'],
    image: '/placeholder.svg',
    href: '/case-studies/enterprise'
  },
];

const CaseStudies = () => {
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
              Case Studies
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover how we've helped businesses transform with AI and digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={study.href}
                  className="block glass-card rounded-2xl overflow-hidden card-hover group h-full"
                >
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-display font-bold gradient-text">{study.client}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.services.map((service) => (
                        <span key={service} className="text-xs text-muted-foreground">
                          {service}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {result}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 flex items-center text-primary font-medium">
                      Read Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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
              Want Results Like These?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business achieve similar transformations.
            </p>
            <Button asChild className="btn-hero">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
