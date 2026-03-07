import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, Users, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

interface CaseStudy {
  title: string; client: string; industry: string;
  services: string[]; results: { metric: string; value: string }[];
  overview: string; challenge: string; solution: string;
  implementation: string[]; testimonial: { quote: string; name: string; role: string };
}

const caseStudiesData: Record<string, CaseStudy> = {
  techventures: {
    title: 'AI-Powered Customer Service Platform',
    client: 'TechVentures Inc',
    industry: 'Technology',
    services: ['AI Agents', 'Software Development'],
    results: [
      { metric: 'Efficiency Increase', value: '300%' },
      { metric: 'Customer Satisfaction', value: '90%' },
      { metric: 'Cost Reduction', value: '50%' },
      { metric: 'Response Time', value: '<2s' },
    ],
    overview: 'TechVentures Inc, a fast-growing SaaS company, was struggling to scale their customer service operations. With a 200% year-over-year growth in user base, their support team couldn\'t keep up with ticket volume, leading to long wait times and declining satisfaction scores.',
    challenge: 'The company faced three critical challenges: a 72-hour average response time that was driving churn, inconsistent quality across support agents, and unsustainable hiring costs to maintain coverage across time zones. They needed a solution that could scale instantly without sacrificing the personalized experience their customers expected.',
    solution: 'We designed and deployed an AI-powered customer service platform built on a multi-agent architecture. The system includes an intelligent triage agent that classifies and routes tickets, domain-specific resolver agents trained on TechVentures\' product documentation, and a seamless human handoff system for complex cases. The platform integrates directly with their existing CRM and knowledge base.',
    implementation: [
      'Conducted a 4-week discovery phase analyzing 50,000+ historical support tickets to identify patterns and common resolution paths.',
      'Built a custom RAG pipeline connecting the AI agents to TechVentures\' product documentation, release notes, and internal knowledge base.',
      'Developed a multi-agent orchestration layer that routes conversations to specialized agents based on topic, complexity, and sentiment.',
      'Implemented a confidence-based escalation system that seamlessly hands off to human agents when the AI is uncertain.',
      'Deployed a real-time analytics dashboard for monitoring resolution rates, customer satisfaction, and agent performance.',
      'Ran a 6-week phased rollout starting with low-risk ticket categories before expanding to full coverage.',
    ],
    testimonial: {
      quote: 'GS Groups didn\'t just build us a chatbot — they built an intelligent support system that understands our product as well as our best agents. Our customers are happier, our team is more productive, and we\'re saving millions annually.',
      name: 'Jennifer Walsh',
      role: 'VP of Customer Success, TechVentures Inc',
    },
  },
  dataflow: {
    title: 'Enterprise Data Analytics Solution',
    client: 'DataFlow Systems',
    industry: 'Finance',
    services: ['AI Solutions', 'AI Engine'],
    results: [
      { metric: 'Decision Speed', value: '40% faster' },
      { metric: 'Annual Savings', value: '$2M' },
      { metric: 'Data Processing', value: 'Real-time' },
      { metric: 'Accuracy', value: '99.7%' },
    ],
    overview: 'DataFlow Systems, a mid-market financial services firm, was drowning in data but starving for insights. Their legacy analytics infrastructure couldn\'t handle the volume and velocity of modern financial data, leaving traders and risk managers making decisions with outdated information.',
    challenge: 'DataFlow\'s existing systems had a 4-hour lag between data ingestion and insight delivery. In financial markets, this delay translated directly to missed opportunities and increased risk exposure. Additionally, their analytics were siloed across departments, preventing the cross-functional insights needed for holistic decision-making.',
    solution: 'We built a real-time data analytics engine powered by stream processing and machine learning. The platform ingests data from 50+ sources, processes it in real-time, and delivers actionable insights through customizable dashboards. Predictive models provide forward-looking risk assessments and opportunity identification.',
    implementation: [
      'Architected a streaming data pipeline capable of processing 10 million events per second with sub-second latency.',
      'Built custom ML models for anomaly detection, trend prediction, and risk scoring tailored to DataFlow\'s specific financial instruments.',
      'Designed a unified data model that broke down silos between trading, risk, compliance, and operations departments.',
      'Implemented role-based dashboards with drill-down capabilities for executives, analysts, and traders.',
      'Created automated alerting systems that notify relevant stakeholders of significant market events or risk threshold breaches.',
      'Conducted comprehensive security audit and implemented encryption at rest and in transit for all financial data.',
    ],
    testimonial: {
      quote: 'The analytics platform transformed how we operate. We went from making decisions on yesterday\'s data to acting on real-time insights. The ROI was evident within the first quarter.',
      name: 'Robert Chang',
      role: 'CTO, DataFlow Systems',
    },
  },
  retailmax: {
    title: 'Mobile Commerce App Redesign',
    client: 'RetailMax',
    industry: 'Retail',
    services: ['Mobile Apps', 'UX/UI Design'],
    results: [
      { metric: 'Conversion Increase', value: '150%' },
      { metric: 'App Store Rating', value: '4.8★' },
      { metric: 'Downloads', value: '2M+' },
      { metric: 'Session Duration', value: '+65%' },
    ],
    overview: 'RetailMax, a national retail chain with 500+ locations, had a mobile app that was functional but uninspiring. With mobile commerce growing 30% year-over-year in their category, they needed an app that could compete with digital-native brands while leveraging their physical store advantage.',
    challenge: 'The existing app had a 2.3-star rating, a 70% cart abandonment rate, and minimal engagement beyond basic product search. Users complained about slow performance, confusing navigation, and a checkout process that required too many steps.',
    solution: 'We redesigned the entire mobile experience from the ground up, focusing on personalization, speed, and seamless omnichannel integration. The new app features AI-powered product recommendations, visual search, one-tap checkout, and real-time inventory visibility across all 500+ stores.',
    implementation: [
      'Conducted extensive user research including 200+ customer interviews, usability testing, and competitive analysis.',
      'Redesigned the information architecture and navigation to reduce the average path-to-purchase from 8 taps to 3.',
      'Implemented AI-powered personalization that tailors the home screen, recommendations, and promotions to each user.',
      'Built a visual search feature that lets customers photograph products and find matching items in RetailMax\'s catalog.',
      'Created a unified cart and checkout experience that supports in-app purchase, in-store pickup, and same-day delivery.',
      'Optimized app performance to achieve sub-2-second load times on 95% of devices.',
    ],
    testimonial: {
      quote: 'Our app went from our biggest weakness to our strongest competitive advantage. The team at GS Groups understood our customers better than we did and delivered an experience that keeps them coming back.',
      name: 'Maria Santos',
      role: 'Chief Digital Officer, RetailMax',
    },
  },
  growthstartup: {
    title: 'SEO & Digital Marketing Transformation',
    client: 'GrowthStartup',
    industry: 'SaaS',
    services: ['SEO', 'Digital Marketing'],
    results: [
      { metric: 'Organic Traffic', value: '500%' },
      { metric: 'Search Rankings', value: 'Top 3' },
      { metric: 'Lead Increase', value: '200%' },
      { metric: 'CAC Reduction', value: '40%' },
    ],
    overview: 'GrowthStartup, a B2B SaaS company, was heavily reliant on paid advertising for customer acquisition. With a CAC that exceeded their first-year customer value, they needed to build a sustainable organic growth engine.',
    challenge: 'Despite having a superior product, GrowthStartup was invisible in organic search. Their website ranked for zero high-intent keywords, their content strategy was nonexistent, and their technical SEO had critical issues preventing proper indexing.',
    solution: 'We developed and executed a comprehensive SEO and content marketing strategy that positioned GrowthStartup as a thought leader in their space. This included technical SEO remediation, a pillar content strategy, and a programmatic approach to scaling content production.',
    implementation: [
      'Performed a comprehensive technical SEO audit identifying 200+ issues and prioritized fixes by impact.',
      'Developed a keyword strategy targeting 500+ terms across awareness, consideration, and decision stages.',
      'Created a content hub architecture with pillar pages, supporting articles, and strategic internal linking.',
      'Built a programmatic content generation pipeline for location and feature-specific landing pages.',
      'Implemented schema markup, Core Web Vitals optimization, and site architecture improvements.',
      'Established a monthly reporting cadence with clear KPIs tied to pipeline and revenue impact.',
    ],
    testimonial: {
      quote: 'In 12 months, we went from zero organic presence to ranking #1 for our most valuable keywords. The leads we get from organic search convert at 3x the rate of paid — it completely changed our unit economics.',
      name: 'Alex Turner',
      role: 'CEO, GrowthStartup',
    },
  },
  medtech: {
    title: 'AI Training Platform for Healthcare',
    client: 'MedTech Labs',
    industry: 'Healthcare',
    services: ['AI Trainer', 'AI Consulting'],
    results: [
      { metric: 'Model Accuracy', value: '95%' },
      { metric: 'FDA Status', value: 'Approved' },
      { metric: 'Hospital Deployments', value: '50+' },
      { metric: 'Processing Time', value: '-80%' },
    ],
    overview: 'MedTech Labs had developed promising AI algorithms for medical imaging analysis but lacked the infrastructure to train models at scale, validate them rigorously, and deploy them in clinical settings that meet regulatory requirements.',
    challenge: 'Training medical AI models requires massive labeled datasets, strict data governance, and a validation framework that satisfies FDA requirements. MedTech Labs had brilliant researchers but no production-grade ML infrastructure.',
    solution: 'We built a comprehensive AI training and deployment platform specifically designed for healthcare. The platform includes HIPAA-compliant data pipelines, federated learning capabilities, automated validation workflows, and a deployment framework that integrates with hospital PACS systems.',
    implementation: [
      'Designed and built a HIPAA-compliant data ingestion and labeling platform supporting DICOM, HL7, and FHIR formats.',
      'Implemented federated learning infrastructure enabling model training across multiple hospital sites without data leaving each facility.',
      'Created an automated validation pipeline that runs models against curated test sets and generates FDA-submission-ready performance reports.',
      'Built a model registry with full lineage tracking from training data through deployment.',
      'Developed integration adapters for the top 5 PACS systems used by US hospitals.',
      'Supported MedTech Labs through the FDA 510(k) submission process with technical documentation and validation evidence.',
    ],
    testimonial: {
      quote: 'GS Groups built the infrastructure that turned our research into a product. Their platform didn\'t just help us get FDA approval — it gave us the foundation to scale to 50 hospitals in our first year.',
      name: 'Dr. Priya Sharma',
      role: 'Founder & CEO, MedTech Labs',
    },
  },
  enterprise: {
    title: 'Cloud Infrastructure Migration',
    client: 'Enterprise Corp',
    industry: 'Manufacturing',
    services: ['Data Center', 'Software Development'],
    results: [
      { metric: 'Uptime', value: '99.99%' },
      { metric: 'Cost Reduction', value: '60%' },
      { metric: 'Migration Downtime', value: 'Zero' },
      { metric: 'Deploy Frequency', value: '10x' },
    ],
    overview: 'Enterprise Corp, a Fortune 500 manufacturer, was running critical operations on aging on-premise infrastructure. Hardware failures were becoming frequent, scaling was impossible, and their IT team spent 80% of their time on maintenance instead of innovation.',
    challenge: 'Migrating 200+ applications, 50TB of data, and mission-critical manufacturing systems to the cloud without any downtime. The company operates 24/7 across 12 global facilities, so even minutes of downtime translate to millions in lost production.',
    solution: 'We executed a zero-downtime cloud migration using a phased approach with parallel running, automated testing, and intelligent traffic routing. The new cloud-native architecture includes containerized microservices, auto-scaling, and a comprehensive disaster recovery setup.',
    implementation: [
      'Conducted a 6-week application portfolio assessment categorizing 200+ applications by migration strategy (rehost, replatform, refactor, retire).',
      'Designed a landing zone architecture with network segmentation, security controls, and compliance guardrails for manufacturing workloads.',
      'Built automated migration pipelines that replicated data in real-time between on-premise and cloud environments.',
      'Implemented a blue-green deployment strategy that allowed instant rollback for each migrated application.',
      'Containerized 60+ applications and built CI/CD pipelines that increased deployment frequency from monthly to multiple times daily.',
      'Established a cloud center of excellence to upskill Enterprise Corp\'s IT team on cloud-native operations.',
    ],
    testimonial: {
      quote: 'We migrated 200 applications to the cloud without a single second of downtime. Our IT team went from firefighting infrastructure issues to driving innovation. The cost savings alone justified the investment within 6 months.',
      name: 'Thomas Mueller',
      role: 'CIO, Enterprise Corp',
    },
  },
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudiesData[slug] : null;

  if (!study) {
    return (
      <Layout>
        <section className="py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Button asChild><Link to="/case-studies">View All Case Studies</Link></Button>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/case-studies">Case Studies</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>{study.client}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" /> All Case Studies
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>{study.industry}</Badge>
              {study.services.map(s => <Badge key={s} variant="secondary">{s}</Badge>)}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{study.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">Client: {study.client}</p>

            <div className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-12">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{study.client}</span>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {study.results.map((r, i) => (
                <motion.div key={r.metric} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Card className="glass-card text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-primary mb-1">{r.value}</div>
                      <div className="text-sm text-muted-foreground">{r.metric}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Content Sections */}
            {[
              { icon: Target, title: 'Overview', content: study.overview },
              { icon: TrendingUp, title: 'The Challenge', content: study.challenge },
              { icon: Users, title: 'Our Solution', content: study.solution },
            ].map(({ icon: Icon, title, content }) => (
              <section key={title} className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon className="w-6 h-6 text-primary" /> {title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{content}</p>
              </section>
            ))}

            {/* Implementation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Implementation</h2>
              <div className="space-y-4">
                {study.implementation.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</div>
                    <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-12" />

            {/* Testimonial */}
            <section className="glass-card rounded-2xl p-8 md:p-12 mb-16">
              <CheckCircle className="w-8 h-8 text-primary mb-4" />
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 italic">
                "{study.testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold">{study.testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{study.testimonial.role}</div>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center glass-card rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">Want Similar Results?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how we can help your business achieve transformative outcomes.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Start Your Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyDetail;
