import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  FileText, 
  Video, 
  BookOpen, 
  Wrench, 
  Calculator,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { ParticleWave } from '@/components/HeroAnimations';

const FloatingToolbox = () => (
  <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
    <mesh rotation={[0.3, 0.3, 0]}>
      <boxGeometry args={[1.5, 1, 1]} />
      <MeshDistortMaterial color="#ff6b6b" distort={0.2} speed={2} />
    </mesh>
    <mesh position={[0, 0.7, 0]}>
      <boxGeometry args={[1.2, 0.3, 0.8]} />
      <MeshDistortMaterial color="#ff8e53" distort={0.15} speed={3} />
    </mesh>
  </Float>
);

const resources = [
  {
    category: 'Guides',
    icon: BookOpen,
    items: [
      { title: 'AI Implementation Playbook', description: 'Step-by-step guide to implementing AI in your organization', type: 'PDF', pages: '45 pages' },
      { title: 'Digital Transformation Blueprint', description: 'Comprehensive roadmap for digital transformation', type: 'PDF', pages: '60 pages' },
      { title: 'Machine Learning Best Practices', description: 'Industry-proven ML development guidelines', type: 'PDF', pages: '35 pages' },
    ],
  },
  {
    category: 'Templates',
    icon: FileText,
    items: [
      { title: 'AI Project Proposal Template', description: 'Professional template for AI project proposals', type: 'DOCX', pages: '12 pages' },
      { title: 'ROI Calculator Spreadsheet', description: 'Calculate AI investment returns', type: 'XLSX', pages: 'Interactive' },
      { title: 'Data Strategy Framework', description: 'Framework for building data strategies', type: 'PDF', pages: '20 pages' },
    ],
  },
  {
    category: 'Tools',
    icon: Wrench,
    items: [
      { title: 'AI Readiness Assessment', description: 'Evaluate your organization\'s AI readiness', type: 'Online', pages: '10 min' },
      { title: 'Tech Stack Analyzer', description: 'Analyze and optimize your tech stack', type: 'Online', pages: '5 min' },
      { title: 'Cost Estimator', description: 'Estimate costs for AI projects', type: 'Online', pages: 'Interactive' },
    ],
  },
  {
    category: 'Videos',
    icon: Video,
    items: [
      { title: 'AI Fundamentals Course', description: 'Introduction to AI concepts and applications', type: 'Video', pages: '2 hours' },
      { title: 'Case Study Walkthrough', description: 'Real-world AI implementation examples', type: 'Video', pages: '45 min' },
      { title: 'Expert Interview Series', description: 'Insights from AI industry leaders', type: 'Video', pages: '6 episodes' },
    ],
  },
];

const featuredTools = [
  { icon: Calculator, title: 'ROI Calculator', description: 'Calculate potential returns on AI investment' },
  { icon: CheckCircle, title: 'AI Readiness Quiz', description: 'Assess your organization\'s AI maturity' },
];

const Resources = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <FloatingToolbox />
          </Canvas>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Free Resources
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tools & Resources to{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Accelerate Growth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access free guides, templates, tools, and educational content to help you succeed with AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-12 px-4 border-b border-border/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featuredTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card hover:border-primary/50 transition-all cursor-pointer group">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                      <tool.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{tool.title}</h3>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {resources.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{category.category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                  >
                    <Card className="glass-card h-full hover:border-primary/50 transition-all group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">{item.type}</Badge>
                          <span className="text-xs text-muted-foreground">{item.pages}</span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          {item.type === 'Online' ? 'Access Tool' : 'Download Free'}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Need Custom Resources?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us for customized materials, training programs, or consulting engagements.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
