import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { ParticleWave, AuroraWaves } from '@/components/HeroAnimations';

const blogPosts = [
  {
    slug: 'future-of-ai-2026',
    title: 'The Future of AI in 2026: Trends and Predictions',
    excerpt: 'Explore the transformative AI trends that will shape industries in 2026 and beyond.',
    category: 'AI Trends',
    author: 'Dr. Sarah Chen',
    date: 'Jan 28, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'implementing-ai-enterprise',
    title: 'A Practical Guide to Implementing AI in Enterprise',
    excerpt: 'Step-by-step framework for successfully integrating AI solutions into large organizations.',
    category: 'Implementation',
    author: 'Michael Rodriguez',
    date: 'Jan 25, 2026',
    readTime: '12 min read',
    featured: true,
  },
  {
    slug: 'machine-learning-best-practices',
    title: 'Machine Learning Best Practices for 2026',
    excerpt: 'Essential guidelines for building robust, scalable, and ethical ML systems.',
    category: 'Technical',
    author: 'Emily Watson',
    date: 'Jan 22, 2026',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'ai-healthcare-revolution',
    title: 'How AI is Revolutionizing Healthcare Diagnostics',
    excerpt: 'Deep dive into AI-powered diagnostic tools transforming patient care.',
    category: 'Healthcare',
    author: 'Dr. James Park',
    date: 'Jan 20, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'chatbot-customer-service',
    title: 'Building Intelligent Chatbots for Customer Service',
    excerpt: 'How to design and deploy AI chatbots that actually improve customer experience.',
    category: 'AI Solutions',
    author: 'Lisa Thompson',
    date: 'Jan 18, 2026',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'data-strategy-ai-success',
    title: 'Data Strategy: The Foundation of AI Success',
    excerpt: 'Why your data strategy determines the success or failure of AI initiatives.',
    category: 'Strategy',
    author: 'David Kim',
    date: 'Jan 15, 2026',
    readTime: '6 min read',
    featured: false,
  },
];

const categories = ['All', 'AI Trends', 'Implementation', 'Technical', 'Healthcare', 'AI Solutions', 'Strategy'];

const BlogPage = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <ParticleWave />
        <AuroraWaves />
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Blog & Insights
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Insights &{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Expert Analysis
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest in AI technology, industry trends, and implementation strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-4 border-b border-border/50">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === 'All' ? 'default' : 'secondary'}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="glass-card h-full hover:border-primary/50 transition-all group overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="glass-card h-full hover:border-primary/50 transition-all group">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                          Read more
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for weekly AI insights delivered straight to your inbox.
            </p>
            <Link to="/newsletter">
              <Badge className="cursor-pointer bg-gradient-to-r from-primary to-accent hover:opacity-90 text-base px-6 py-2">
                Subscribe Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Badge>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
