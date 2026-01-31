import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/layout/Layout';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business: Trends for 2024',
    excerpt: 'Explore the emerging AI trends that will shape business operations and strategy in the coming year.',
    category: 'AI Trends',
    author: 'Alex Johnson',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    image: '/placeholder.svg',
    href: '/blog/future-of-ai-2024'
  },
  {
    id: 2,
    title: 'How to Implement AI Without Breaking the Bank',
    excerpt: 'Practical strategies for startups and SMBs to adopt AI technology cost-effectively.',
    category: 'Strategy',
    author: 'Sarah Chen',
    date: 'Jan 10, 2024',
    readTime: '6 min read',
    image: '/placeholder.svg',
    href: '/blog/ai-implementation-budget'
  },
  {
    id: 3,
    title: 'Building Scalable AI Agents: A Technical Guide',
    excerpt: 'Deep dive into the architecture and best practices for building production-ready AI agents.',
    category: 'Technical',
    author: 'Michael Roberts',
    date: 'Jan 5, 2024',
    readTime: '12 min read',
    image: '/placeholder.svg',
    href: '/blog/scalable-ai-agents'
  },
  {
    id: 4,
    title: 'SEO in the Age of AI: What Changed?',
    excerpt: 'How AI is transforming search engine optimization and what marketers need to know.',
    category: 'Marketing',
    author: 'Emily Watson',
    date: 'Dec 28, 2023',
    readTime: '7 min read',
    image: '/placeholder.svg',
    href: '/blog/seo-ai-era'
  },
  {
    id: 5,
    title: 'Case Study: 300% Efficiency Boost with AI',
    excerpt: 'How TechVentures transformed their customer service with our AI solutions.',
    category: 'Case Study',
    author: 'Alex Johnson',
    date: 'Dec 20, 2023',
    readTime: '10 min read',
    image: '/placeholder.svg',
    href: '/blog/techventures-case-study'
  },
  {
    id: 6,
    title: 'The Complete Guide to AI Training Data',
    excerpt: 'Everything you need to know about collecting, labeling, and managing training data.',
    category: 'Technical',
    author: 'Sarah Chen',
    date: 'Dec 15, 2023',
    readTime: '15 min read',
    image: '/placeholder.svg',
    href: '/blog/ai-training-data-guide'
  },
];

const categories = ['All', 'AI Trends', 'Technical', 'Strategy', 'Marketing', 'Case Study'];

const Blog = () => {
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
              Blog & Resources
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Insights & <span className="gradient-text">Knowledge</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights, tutorials, and industry news from our team.
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto">
              <Input 
                placeholder="Search articles..." 
                className="bg-muted/50 text-center"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={post.href}
                  className="block glass-card rounded-2xl overflow-hidden card-hover group h-full"
                >
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <span className="text-muted-foreground">{post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="btn-secondary-hero">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest AI insights and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="bg-muted/50" />
              <Button className="btn-hero">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
