import { Suspense, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle,
  Sparkles, 
  Cpu, 
  Code, 
  Megaphone, 
  Search, 
  Smartphone, 
  Bot, 
  Palette, 
  Server, 
  Lightbulb, 
  Database,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const FloatingElement = lazy(() => import('@/components/3d/FloatingElement'));

type ServiceSlug = 
  | 'ai-apps' 
  | 'ai-trainer' 
  | 'ai-solutions' 
  | 'software-development' 
  | 'digital-marketing' 
  | 'advertising'
  | 'seo' 
  | 'mobile-apps' 
  | 'ai-agents' 
  | 'design' 
  | 'ai-engine' 
  | 'ai-consulting' 
  | 'data-center';

const servicesData: Record<ServiceSlug, {
  name: string;
  tagline: string;
  description: string;
  icon: typeof Sparkles;
  color: string;
  shape: 'sphere' | 'box' | 'torus' | 'octahedron' | 'icosahedron';
  features: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
}> = {
  'ai-apps': {
    name: 'AI Apps',
    tagline: 'Intelligent Applications That Transform Business',
    description: 'Build custom AI-powered applications that automate complex workflows, enhance decision-making, and create competitive advantages for your organization.',
    icon: Sparkles,
    color: '#8b5cf6',
    shape: 'sphere',
    features: [
      'Natural Language Processing',
      'Computer Vision Integration',
      'Predictive Analytics',
      'Recommendation Systems',
      'Real-time AI Processing',
      'Custom Model Integration'
    ],
    benefits: [
      { title: 'Increased Efficiency', description: 'Automate repetitive tasks and free your team for high-value work.' },
      { title: 'Better Decisions', description: 'Data-driven insights that improve business outcomes.' },
      { title: 'Competitive Edge', description: 'Stay ahead with cutting-edge AI capabilities.' },
      { title: 'Scalable Solutions', description: 'Solutions that grow with your business needs.' },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'We analyze your needs and define the AI opportunity.' },
      { step: '02', title: 'Design', description: 'Create the architecture and user experience.' },
      { step: '03', title: 'Development', description: 'Build and train the AI models and application.' },
      { step: '04', title: 'Deployment', description: 'Launch and monitor for continuous improvement.' },
    ]
  },
  'ai-trainer': {
    name: 'AI Trainer',
    tagline: 'Train AI Models for Your Unique Needs',
    description: 'Fine-tune and train AI models with your proprietary data to achieve unmatched accuracy and relevance for your specific use cases.',
    icon: Cpu,
    color: '#06b6d4',
    shape: 'octahedron',
    features: [
      'Custom Model Training',
      'Data Labeling Services',
      'Model Optimization',
      'Transfer Learning',
      'Continuous Learning',
      'Performance Monitoring'
    ],
    benefits: [
      { title: 'Higher Accuracy', description: 'Models trained on your data outperform generic solutions.' },
      { title: 'Domain Expertise', description: 'AI that understands your industry nuances.' },
      { title: 'Cost Efficiency', description: 'Optimized models reduce inference costs.' },
      { title: 'Ownership', description: 'Your trained models are your intellectual property.' },
    ],
    process: [
      { step: '01', title: 'Data Assessment', description: 'Evaluate your data quality and quantity.' },
      { step: '02', title: 'Preprocessing', description: 'Clean, label, and prepare training datasets.' },
      { step: '03', title: 'Training', description: 'Train and fine-tune models with best practices.' },
      { step: '04', title: 'Validation', description: 'Test and validate model performance.' },
    ]
  },
  'ai-solutions': {
    name: 'AI Solutions',
    tagline: 'End-to-End AI Implementations',
    description: 'Comprehensive AI solutions tailored to your industry vertical, from strategy to deployment and ongoing optimization.',
    icon: Lightbulb,
    color: '#f59e0b',
    shape: 'icosahedron',
    features: [
      'Solution Architecture',
      'System Integration',
      'Cloud Deployment',
      'API Development',
      'Maintenance & Support',
      'Performance Analytics'
    ],
    benefits: [
      { title: 'Complete Solution', description: 'Everything you need from one trusted partner.' },
      { title: 'Faster Time-to-Market', description: 'Accelerated development with proven methodologies.' },
      { title: 'Risk Mitigation', description: 'Expert guidance reduces project risks.' },
      { title: 'Ongoing Support', description: 'Continuous improvement and maintenance.' },
    ],
    process: [
      { step: '01', title: 'Strategy', description: 'Define AI strategy aligned with business goals.' },
      { step: '02', title: 'Architecture', description: 'Design scalable, robust solution architecture.' },
      { step: '03', title: 'Implementation', description: 'Build and integrate the complete solution.' },
      { step: '04', title: 'Optimization', description: 'Monitor and optimize for best results.' },
    ]
  },
  'software-development': {
    name: 'Software Development',
    tagline: 'Scalable Software Built Right',
    description: 'Custom software solutions built with modern technologies, best practices, and a focus on scalability and maintainability.',
    icon: Code,
    color: '#10b981',
    shape: 'box',
    features: [
      'Web Applications',
      'APIs & Microservices',
      'Cloud-Native Solutions',
      'DevOps & CI/CD',
      'Legacy Modernization',
      'Quality Assurance'
    ],
    benefits: [
      { title: 'Custom Fit', description: 'Software tailored to your exact requirements.' },
      { title: 'Scalability', description: 'Architecture that grows with your business.' },
      { title: 'Reliability', description: 'Robust, well-tested, production-ready code.' },
      { title: 'Maintainability', description: 'Clean code that\'s easy to update and extend.' },
    ],
    process: [
      { step: '01', title: 'Requirements', description: 'Deep dive into your needs and goals.' },
      { step: '02', title: 'Design', description: 'System architecture and UX design.' },
      { step: '03', title: 'Development', description: 'Agile development with regular demos.' },
      { step: '04', title: 'Launch', description: 'Deployment, training, and handover.' },
    ]
  },
  'digital-marketing': {
    name: 'Digital Marketing',
    tagline: 'Data-Driven Marketing Excellence',
    description: 'AI-powered marketing strategies that deliver measurable results through intelligent targeting, automation, and optimization.',
    icon: Megaphone,
    color: '#ec4899',
    shape: 'torus',
    features: [
      'Performance Marketing',
      'Content Strategy',
      'Marketing Automation',
      'Analytics & Insights',
      'A/B Testing',
      'ROI Optimization'
    ],
    benefits: [
      { title: 'Higher ROI', description: 'AI optimization maximizes your marketing spend.' },
      { title: 'Better Targeting', description: 'Reach the right audience at the right time.' },
      { title: 'Scalable Growth', description: 'Marketing systems that scale with you.' },
      { title: 'Data Insights', description: 'Deep understanding of customer behavior.' },
    ],
    process: [
      { step: '01', title: 'Audit', description: 'Analyze current marketing performance.' },
      { step: '02', title: 'Strategy', description: 'Develop data-driven marketing plan.' },
      { step: '03', title: 'Execution', description: 'Implement campaigns across channels.' },
      { step: '04', title: 'Optimize', description: 'Continuous testing and improvement.' },
    ]
  },
  'advertising': {
    name: 'Advertising',
    tagline: 'Creative Campaigns That Convert',
    description: 'Strategic advertising campaigns that capture attention, build brand awareness, and drive meaningful conversions.',
    icon: Zap,
    color: '#eab308',
    shape: 'sphere',
    features: [
      'Campaign Strategy',
      'Creative Design',
      'Media Buying',
      'Performance Tracking',
      'Retargeting',
      'Cross-Channel Ads'
    ],
    benefits: [
      { title: 'Brand Awareness', description: 'Get your brand in front of the right audience.' },
      { title: 'Lead Generation', description: 'Convert viewers into qualified leads.' },
      { title: 'Cost Efficiency', description: 'Optimized spend for maximum impact.' },
      { title: 'Creative Excellence', description: 'Ads that stand out and resonate.' },
    ],
    process: [
      { step: '01', title: 'Research', description: 'Understand your audience and competition.' },
      { step: '02', title: 'Creative', description: 'Develop compelling ad concepts.' },
      { step: '03', title: 'Launch', description: 'Deploy campaigns across platforms.' },
      { step: '04', title: 'Analyze', description: 'Track performance and optimize.' },
    ]
  },
  'seo': {
    name: 'SEO',
    tagline: 'Dominate Search Rankings',
    description: 'Comprehensive SEO strategies that improve your visibility, drive organic traffic, and establish your authority.',
    icon: Search,
    color: '#6366f1',
    shape: 'octahedron',
    features: [
      'Technical SEO',
      'Content Optimization',
      'Link Building',
      'Local SEO',
      'Keyword Research',
      'Analytics & Reporting'
    ],
    benefits: [
      { title: 'Organic Traffic', description: 'Sustainable traffic that compounds over time.' },
      { title: 'Brand Authority', description: 'Establish thought leadership in your space.' },
      { title: 'Cost Effective', description: 'Long-term results without ongoing ad spend.' },
      { title: 'Quality Leads', description: 'Traffic with high purchase intent.' },
    ],
    process: [
      { step: '01', title: 'Audit', description: 'Comprehensive site and competitor analysis.' },
      { step: '02', title: 'Strategy', description: 'Keyword and content strategy development.' },
      { step: '03', title: 'Optimize', description: 'On-page and technical improvements.' },
      { step: '04', title: 'Build', description: 'Content creation and link acquisition.' },
    ]
  },
  'mobile-apps': {
    name: 'Mobile Apps',
    tagline: 'Native Apps, Exceptional Experiences',
    description: 'Build stunning iOS and Android applications that users love, with seamless performance and intuitive design.',
    icon: Smartphone,
    color: '#0ea5e9',
    shape: 'box',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Apps',
      'UI/UX Design',
      'Backend Integration',
      'App Store Optimization'
    ],
    benefits: [
      { title: 'User Engagement', description: 'Apps that keep users coming back.' },
      { title: 'Performance', description: 'Smooth, fast, native experiences.' },
      { title: 'Reach', description: 'Access billions of mobile users.' },
      { title: 'Monetization', description: 'Multiple revenue opportunities.' },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Define requirements and user personas.' },
      { step: '02', title: 'Design', description: 'Create intuitive, beautiful interfaces.' },
      { step: '03', title: 'Develop', description: 'Build native or cross-platform apps.' },
      { step: '04', title: 'Launch', description: 'App store submission and marketing.' },
    ]
  },
  'ai-agents': {
    name: 'AI Agents',
    tagline: 'Intelligent Automation 24/7',
    description: 'Deploy AI agents that handle customer support, sales, operations, and more — working around the clock for your business.',
    icon: Bot,
    color: '#d946ef',
    shape: 'icosahedron',
    features: [
      'Conversational AI',
      'Virtual Assistants',
      'Process Automation',
      'Multi-Channel Support',
      'Learning Systems',
      'Human Handoff'
    ],
    benefits: [
      { title: '24/7 Availability', description: 'Always-on support for your customers.' },
      { title: 'Cost Reduction', description: 'Handle more inquiries with less staff.' },
      { title: 'Consistency', description: 'Uniform quality in every interaction.' },
      { title: 'Scalability', description: 'Handle peak loads effortlessly.' },
    ],
    process: [
      { step: '01', title: 'Analysis', description: 'Map out automation opportunities.' },
      { step: '02', title: 'Design', description: 'Create conversation flows and logic.' },
      { step: '03', title: 'Train', description: 'Train agents on your knowledge base.' },
      { step: '04', title: 'Deploy', description: 'Launch and continuously improve.' },
    ]
  },
  'design': {
    name: 'UX/UI Design',
    tagline: 'Design That Delights Users',
    description: 'User-centered design solutions that combine beauty with functionality, creating experiences users love.',
    icon: Palette,
    color: '#f43f5e',
    shape: 'torus',
    features: [
      'User Research',
      'Interface Design',
      'Prototyping',
      'Design Systems',
      'Usability Testing',
      'Brand Identity'
    ],
    benefits: [
      { title: 'User Satisfaction', description: 'Designs that users find intuitive and enjoyable.' },
      { title: 'Conversion', description: 'UI optimized for your business goals.' },
      { title: 'Consistency', description: 'Design systems for scalable products.' },
      { title: 'Differentiation', description: 'Stand out from competitors.' },
    ],
    process: [
      { step: '01', title: 'Research', description: 'Understand users and their needs.' },
      { step: '02', title: 'Ideate', description: 'Explore solutions and concepts.' },
      { step: '03', title: 'Design', description: 'Create high-fidelity designs.' },
      { step: '04', title: 'Test', description: 'Validate with real users.' },
    ]
  },
  'ai-engine': {
    name: 'AI Engine',
    tagline: 'Enterprise AI Infrastructure',
    description: 'Build robust AI infrastructure that powers your applications with reliability, scalability, and performance.',
    icon: Server,
    color: '#14b8a6',
    shape: 'box',
    features: [
      'ML Infrastructure',
      'Model Serving',
      'Auto-Scaling',
      'Monitoring & Logging',
      'A/B Testing',
      'Feature Stores'
    ],
    benefits: [
      { title: 'Reliability', description: 'Enterprise-grade uptime and performance.' },
      { title: 'Scalability', description: 'Handle millions of predictions per day.' },
      { title: 'Efficiency', description: 'Optimized infrastructure costs.' },
      { title: 'Velocity', description: 'Faster model deployment cycles.' },
    ],
    process: [
      { step: '01', title: 'Assessment', description: 'Evaluate current infrastructure needs.' },
      { step: '02', title: 'Architecture', description: 'Design scalable ML platform.' },
      { step: '03', title: 'Build', description: 'Implement infrastructure and pipelines.' },
      { step: '04', title: 'Operate', description: 'Monitor, maintain, and optimize.' },
    ]
  },
  'ai-consulting': {
    name: 'AI Consulting',
    tagline: 'Strategic AI Guidance',
    description: 'Expert consulting to help you navigate AI adoption, from strategy development to implementation planning.',
    icon: Lightbulb,
    color: '#f97316',
    shape: 'icosahedron',
    features: [
      'AI Strategy',
      'Technology Assessment',
      'Roadmap Planning',
      'Vendor Selection',
      'Change Management',
      'Training & Enablement'
    ],
    benefits: [
      { title: 'Clarity', description: 'Clear path to AI transformation.' },
      { title: 'Risk Reduction', description: 'Avoid common pitfalls and mistakes.' },
      { title: 'Faster Results', description: 'Accelerated time to value.' },
      { title: 'Knowledge Transfer', description: 'Build internal AI capabilities.' },
    ],
    process: [
      { step: '01', title: 'Assessment', description: 'Evaluate AI readiness and opportunities.' },
      { step: '02', title: 'Strategy', description: 'Develop comprehensive AI roadmap.' },
      { step: '03', title: 'Planning', description: 'Create detailed implementation plans.' },
      { step: '04', title: 'Support', description: 'Ongoing guidance and coaching.' },
    ]
  },
  'data-center': {
    name: 'Data Center',
    tagline: 'Enterprise Infrastructure at Scale',
    description: 'Reliable, secure, and scalable data center solutions that grow with your business from startup to enterprise.',
    icon: Database,
    color: '#64748b',
    shape: 'box',
    features: [
      'Cloud Hosting',
      'Managed Services',
      'Security & Compliance',
      '24/7 Support',
      'Disaster Recovery',
      'Hybrid Solutions'
    ],
    benefits: [
      { title: 'Reliability', description: '99.99% uptime guarantee.' },
      { title: 'Security', description: 'Enterprise-grade security measures.' },
      { title: 'Compliance', description: 'Meet industry regulations.' },
      { title: 'Support', description: 'Expert help when you need it.' },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Understand your infrastructure needs.' },
      { step: '02', title: 'Design', description: 'Architect optimal solution.' },
      { step: '03', title: 'Migration', description: 'Seamless transition to new infrastructure.' },
      { step: '04', title: 'Manage', description: 'Ongoing management and support.' },
    ]
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData[slug as ServiceSlug];

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <Link to="/services" className="text-primary hover:underline">
              View All Services
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section with 3D */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-50">
          <Suspense fallback={<div className="w-full h-full bg-muted/20" />}>
            <FloatingElement 
              shape={service.shape} 
              color={service.color}
              distort={service.shape === 'sphere'}
              wobble={service.shape === 'torus'}
            />
          </Suspense>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background z-10" />
        
        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}88)` }}
              >
                <service.icon className="w-10 h-10 text-white" />
              </div>
            </div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              {service.name}
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              {service.tagline}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="btn-hero">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="btn-secondary-hero">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Key <span className="gradient-text">Features</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex items-center gap-4"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Why Choose <span className="gradient-text">{service.name}</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-primary to-transparent" />
                )}
                <div className="glass-card p-6 rounded-2xl text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-orbitron font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how {service.name} can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="btn-hero">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button variant="outline" asChild className="btn-secondary-hero">
                <Link to="/services">Explore All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
