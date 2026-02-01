import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Database, Cloud, Shield, Zap, GitBranch, Box, Layers } from 'lucide-react';

const FloatingTech = () => (
  <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
    <group>
      <mesh position={[-1, 0, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <MeshDistortMaterial color="#667eea" distort={0.2} speed={2} />
      </mesh>
      <mesh position={[1, 0, 0]}>
        <octahedronGeometry args={[0.6]} />
        <MeshDistortMaterial color="#00d4ff" distort={0.3} speed={3} />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <icosahedronGeometry args={[0.5]} />
        <MeshDistortMaterial color="#764ba2" distort={0.25} speed={2.5} />
      </mesh>
    </group>
  </Float>
);

const techStack = [
  {
    category: 'AI & Machine Learning',
    icon: Cpu,
    technologies: [
      { name: 'TensorFlow', description: 'Deep learning framework' },
      { name: 'PyTorch', description: 'Neural network library' },
      { name: 'OpenAI GPT', description: 'Large language models' },
      { name: 'Hugging Face', description: 'Transformer models' },
      { name: 'scikit-learn', description: 'ML algorithms' },
    ],
  },
  {
    category: 'Data Infrastructure',
    icon: Database,
    technologies: [
      { name: 'Snowflake', description: 'Cloud data warehouse' },
      { name: 'Databricks', description: 'Data lakehouse' },
      { name: 'Apache Spark', description: 'Data processing' },
      { name: 'MongoDB', description: 'NoSQL database' },
      { name: 'PostgreSQL', description: 'Relational database' },
    ],
  },
  {
    category: 'Cloud Platforms',
    icon: Cloud,
    technologies: [
      { name: 'AWS', description: 'Cloud infrastructure' },
      { name: 'Google Cloud', description: 'AI/ML services' },
      { name: 'Microsoft Azure', description: 'Enterprise cloud' },
      { name: 'Kubernetes', description: 'Container orchestration' },
      { name: 'Docker', description: 'Containerization' },
    ],
  },
  {
    category: 'Security & Compliance',
    icon: Shield,
    technologies: [
      { name: 'OAuth 2.0', description: 'Authentication' },
      { name: 'SOC 2', description: 'Security compliance' },
      { name: 'GDPR', description: 'Data protection' },
      { name: 'HIPAA', description: 'Healthcare compliance' },
      { name: 'SSL/TLS', description: 'Encryption' },
    ],
  },
  {
    category: 'Development',
    icon: GitBranch,
    technologies: [
      { name: 'React', description: 'Frontend framework' },
      { name: 'Node.js', description: 'Backend runtime' },
      { name: 'Python', description: 'ML development' },
      { name: 'TypeScript', description: 'Type-safe JavaScript' },
      { name: 'GraphQL', description: 'API query language' },
    ],
  },
  {
    category: 'MLOps & DevOps',
    icon: Layers,
    technologies: [
      { name: 'MLflow', description: 'ML lifecycle' },
      { name: 'Kubeflow', description: 'ML on Kubernetes' },
      { name: 'GitHub Actions', description: 'CI/CD pipelines' },
      { name: 'Terraform', description: 'Infrastructure as code' },
      { name: 'Prometheus', description: 'Monitoring' },
    ],
  },
];

const TechStack = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <FloatingTech />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4 inline mr-2" />
              Technology Stack
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powered by{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Best-in-Class Tech
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build scalable, secure, and intelligent solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.technologies.map((tech) => (
                        <div key={tech.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                          <span className="font-medium">{tech.name}</span>
                          <span className="text-xs text-muted-foreground">{tech.description}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Technology Partners</h2>
            <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
              We're partnered with leading technology providers to deliver the best solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {['Microsoft', 'AWS', 'Google Cloud', 'NVIDIA', 'OpenAI', 'Snowflake'].map((partner) => (
                <div key={partner} className="glass-card px-8 py-4">
                  <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TechStack;
