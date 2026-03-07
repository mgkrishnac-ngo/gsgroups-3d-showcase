import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const blogPostsData: Record<string, {
  title: string; excerpt: string; category: string; author: string;
  date: string; readTime: string; content: string[];
}> = {
  'future-of-ai-2026': {
    title: 'The Future of AI in 2026: Trends and Predictions',
    excerpt: 'Explore the transformative AI trends that will shape industries in 2026 and beyond.',
    category: 'AI Trends',
    author: 'Dr. Sarah Chen',
    date: 'Jan 28, 2026',
    readTime: '8 min read',
    content: [
      'Artificial intelligence has evolved from a niche technology into the backbone of modern enterprise. In 2026, several key trends are reshaping how businesses operate, compete, and innovate.',
      '## Agentic AI Takes Center Stage',
      'The biggest shift this year is the rise of agentic AI — systems that don\'t just respond to prompts but autonomously plan, execute, and iterate on complex tasks. From managing supply chains to orchestrating marketing campaigns, AI agents are becoming indispensable teammates.',
      '## Multimodal Models Become the Norm',
      'Gone are the days of text-only AI. Modern models seamlessly process text, images, audio, video, and structured data in a single pass. This enables richer interactions and more nuanced decision-making across healthcare diagnostics, creative industries, and customer service.',
      '## Edge AI and On-Device Intelligence',
      'With privacy regulations tightening and latency requirements shrinking, more AI inference is moving to the edge. Smartphones, IoT sensors, and industrial robots now run sophisticated models locally, reducing cloud dependency and enabling real-time decision-making.',
      '## AI Governance Matures',
      'Regulatory frameworks like the EU AI Act are now in full effect. Organizations are investing heavily in AI governance — from bias auditing and explainability tooling to comprehensive model registries. Compliance is no longer optional; it\'s a competitive advantage.',
      '## The Democratization of AI Development',
      'Low-code and no-code AI platforms have made it possible for domain experts — not just data scientists — to build, train, and deploy models. This democratization is accelerating innovation across every industry vertical.',
      '## What This Means for Your Business',
      'The organizations that thrive in 2026 will be those that treat AI not as a bolt-on tool but as a core competency. Whether you\'re automating back-office operations or building AI-native products, the time to invest is now.',
    ],
  },
  'implementing-ai-enterprise': {
    title: 'A Practical Guide to Implementing AI in Enterprise',
    excerpt: 'Step-by-step framework for successfully integrating AI solutions into large organizations.',
    category: 'Implementation',
    author: 'Michael Rodriguez',
    date: 'Jan 25, 2026',
    readTime: '12 min read',
    content: [
      'Implementing AI at enterprise scale is fundamentally different from running a proof of concept. This guide distills lessons from dozens of successful enterprise deployments into a repeatable framework.',
      '## Step 1: Define the Business Problem',
      'The most common mistake is starting with technology instead of the problem. Before evaluating any AI solution, clearly articulate the business outcome you want: reduce customer churn by 20%, cut processing time by half, or improve forecast accuracy.',
      '## Step 2: Audit Your Data',
      'AI is only as good as the data it learns from. Conduct a thorough data audit: assess quality, completeness, accessibility, and governance. Establish data pipelines and cleaning processes before model development begins.',
      '## Step 3: Start Small, Think Big',
      'Launch with a focused pilot project that can demonstrate ROI within 90 days. Choose a use case with clear metrics, available data, and executive sponsorship. Success in the pilot builds organizational confidence for larger initiatives.',
      '## Step 4: Build Cross-Functional Teams',
      'Effective AI implementation requires collaboration between data scientists, domain experts, engineers, and business stakeholders. Create dedicated cross-functional teams with clear ownership and decision-making authority.',
      '## Step 5: Invest in MLOps',
      'Production AI requires robust infrastructure for model versioning, monitoring, retraining, and deployment. Invest in MLOps tooling early to avoid accumulating technical debt that will slow you down later.',
      '## Step 6: Measure and Iterate',
      'Deploy measurement frameworks that track both technical metrics (accuracy, latency) and business metrics (revenue impact, cost savings). Use these insights to continuously refine models and expand to new use cases.',
      '## Common Pitfalls to Avoid',
      'Watch out for scope creep, underestimating data preparation effort, neglecting change management, and failing to plan for model maintenance. Each of these has derailed otherwise promising AI initiatives.',
    ],
  },
  'machine-learning-best-practices': {
    title: 'Machine Learning Best Practices for 2026',
    excerpt: 'Essential guidelines for building robust, scalable, and ethical ML systems.',
    category: 'Technical',
    author: 'Emily Watson',
    date: 'Jan 22, 2026',
    readTime: '10 min read',
    content: [
      'Building machine learning systems that work reliably in production requires more than just good algorithms. Here are the best practices every ML team should follow in 2026.',
      '## Data Quality Over Quantity',
      'The era of "more data is always better" is over. Curated, high-quality datasets consistently outperform massive but noisy ones. Invest in data labeling infrastructure, active learning, and synthetic data generation to build superior training sets.',
      '## Embrace Foundation Models — Wisely',
      'Foundation models offer incredible capabilities out of the box, but fine-tuning and prompt engineering still matter. Understand the tradeoffs between using general-purpose models, fine-tuning domain-specific ones, and training from scratch.',
      '## Reproducibility is Non-Negotiable',
      'Every experiment should be reproducible. Use version control for data, code, and model artifacts. Document hyperparameters, random seeds, and training environments. Tools like MLflow, Weights & Biases, and DVC make this manageable.',
      '## Test Like a Software Engineer',
      'Apply software engineering rigor to ML: unit tests for data transformations, integration tests for pipelines, and continuous evaluation against holdout sets. Catch data drift and model degradation before they impact users.',
      '## Ethical AI by Design',
      'Bias detection and fairness evaluation should be part of your standard workflow, not an afterthought. Use fairness toolkits, conduct regular audits, and establish clear guidelines for responsible AI development.',
      '## Monitor Everything in Production',
      'Production models degrade over time. Monitor input distributions, prediction distributions, latency, and downstream business metrics. Set up automated alerts and retraining triggers to keep models performing at their best.',
    ],
  },
  'ai-healthcare-revolution': {
    title: 'How AI is Revolutionizing Healthcare Diagnostics',
    excerpt: 'Deep dive into AI-powered diagnostic tools transforming patient care.',
    category: 'Healthcare',
    author: 'Dr. James Park',
    date: 'Jan 20, 2026',
    readTime: '7 min read',
    content: [
      'AI is transforming healthcare diagnostics from reactive to predictive, from generic to personalized. Here\'s how the revolution is unfolding.',
      '## Medical Imaging Breakthroughs',
      'AI models now match or exceed radiologist performance in detecting conditions from X-rays, MRIs, and CT scans. From early cancer detection to identifying rare diseases, these tools are saving lives by catching what human eyes might miss.',
      '## Genomic Analysis at Scale',
      'AI-powered genomic analysis can now process an entire genome in minutes, identifying disease risk factors and recommending personalized treatment plans. This is making precision medicine accessible beyond research hospitals.',
      '## Predictive Patient Monitoring',
      'Wearable devices combined with AI algorithms continuously monitor patient vitals, predicting adverse events hours before they occur. ICUs using these systems have seen 30% reductions in cardiac arrest mortality.',
      '## Drug Discovery Acceleration',
      'AI has compressed the drug discovery timeline from years to months. By simulating molecular interactions and predicting drug efficacy, AI platforms are bringing life-saving treatments to patients faster than ever.',
      '## Challenges and Considerations',
      'Despite the promise, challenges remain: regulatory approval processes, data privacy in healthcare, integration with existing clinical workflows, and ensuring equitable access to AI-powered diagnostics across different healthcare systems.',
    ],
  },
  'chatbot-customer-service': {
    title: 'Building Intelligent Chatbots for Customer Service',
    excerpt: 'How to design and deploy AI chatbots that actually improve customer experience.',
    category: 'AI Solutions',
    author: 'Lisa Thompson',
    date: 'Jan 18, 2026',
    readTime: '9 min read',
    content: [
      'Most customer service chatbots frustrate users. Here\'s how to build ones that actually delight them.',
      '## Start With Customer Journey Mapping',
      'Before writing a single line of code, map your customer journeys. Identify the most common queries, pain points, and moments where AI can add genuine value versus where human handoff is essential.',
      '## Design Conversational Flows That Feel Natural',
      'Great chatbots don\'t feel like chatbots. Use natural language understanding to handle variations in how customers express the same intent. Support context-switching, follow-up questions, and graceful error recovery.',
      '## Integrate With Your Knowledge Base',
      'Connect your chatbot to your product documentation, FAQ database, and CRM. RAG (Retrieval-Augmented Generation) architectures let chatbots provide accurate, up-to-date answers grounded in your actual content.',
      '## Implement Smart Escalation',
      'Know when to hand off to a human. Use sentiment analysis and confidence scoring to detect when a customer is frustrated or when the AI is uncertain. Seamless escalation with full conversation context prevents customers from repeating themselves.',
      '## Measure What Matters',
      'Track resolution rate, customer satisfaction (CSAT), average handling time, and containment rate. But also measure what you can\'t see: how many customers abandoned the conversation, and why.',
      '## Continuous Improvement Loop',
      'Regularly review conversation logs, identify failure patterns, and retrain your models. The best chatbots get better every week because their teams treat improvement as a continuous process, not a one-time project.',
    ],
  },
  'data-strategy-ai-success': {
    title: 'Data Strategy: The Foundation of AI Success',
    excerpt: 'Why your data strategy determines the success or failure of AI initiatives.',
    category: 'Strategy',
    author: 'David Kim',
    date: 'Jan 15, 2026',
    readTime: '6 min read',
    content: [
      'Every failed AI project has one thing in common: poor data strategy. Here\'s how to build a data foundation that sets your AI initiatives up for success.',
      '## Data as a Strategic Asset',
      'Organizations that treat data as a strategic asset outperform their peers. This means investing in data infrastructure, governance, and literacy at every level of the organization — not just in the data team.',
      '## Build a Modern Data Stack',
      'A modern data stack includes cloud data warehouses, ELT pipelines, data catalogs, and quality monitoring tools. The goal is to make clean, well-documented data accessible to everyone who needs it.',
      '## Data Governance Without Bureaucracy',
      'Effective data governance balances control with agility. Implement automated data quality checks, clear ownership policies, and self-service access controls. The goal is to make doing the right thing the easy thing.',
      '## Break Down Data Silos',
      'AI models need diverse data to deliver value. Breaking down organizational silos — between marketing and sales, operations and finance — unlocks cross-functional insights that siloed analyses can never provide.',
      '## Privacy-First Architecture',
      'Design your data architecture with privacy built in. Implement data minimization, purpose limitation, and consent management from the start. This is not just about compliance — it\'s about building trust with your customers.',
    ],
  },
};

const relatedPosts = [
  { slug: 'future-of-ai-2026', title: 'The Future of AI in 2026', category: 'AI Trends' },
  { slug: 'implementing-ai-enterprise', title: 'Implementing AI in Enterprise', category: 'Implementation' },
  { slug: 'machine-learning-best-practices', title: 'ML Best Practices for 2026', category: 'Technical' },
];

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <Layout>
        <section className="py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild><Link to="/blog">Back to Blog</Link></Button>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/blog">Blog</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>{post.title}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
              <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            <div className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-12" />

            <Separator className="mb-12" />

            <div className="prose prose-lg max-w-none">
              {post.content.map((block, i) => {
                if (block.startsWith('## ')) {
                  return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-foreground">{block.replace('## ', '')}</h2>;
                }
                return <p key={i} className="text-muted-foreground leading-relaxed mb-6">{block}</p>;
              })}
            </div>
          </motion.div>

          <Separator className="my-16" />

          <section>
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.filter(p => p.slug !== slug).slice(0, 3).map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all group">
                  <Badge variant="secondary" className="mb-3">{p.category}</Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors">{p.title}</h4>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostDetail;
