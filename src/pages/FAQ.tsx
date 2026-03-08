import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Search, HelpCircle, Mail, Phone } from 'lucide-react';
import { FloatingGridLines, GradientMorphOrbs } from '@/components/HeroAnimations';

const faqCategories = [
  {
    title: 'General Questions',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What services does GSGROUPS offer?',
        answer: 'GSGROUPS offers a comprehensive suite of AI and digital solutions including AI Apps, AI Training, AI Solutions, Software Development, Digital Marketing, Advertising, SEO, Mobile App Development, AI Agent Development, UX/UI Design, AI Engine Systems, AI Consulting, and Data Center Services.',
      },
      {
        question: 'How do I get started with GSGROUPS?',
        answer: 'Getting started is easy! Simply contact us through our website, schedule a free consultation, and our team will assess your needs and recommend the best solutions for your business.',
      },
      {
        question: 'Do you offer custom AI solutions?',
        answer: 'Yes, we specialize in creating custom AI solutions tailored to your specific business needs. Our team works closely with you to understand your requirements and develop solutions that drive real results.',
      },
    ],
  },
  {
    title: 'Pricing & Plans',
    icon: MessageCircle,
    faqs: [
      {
        question: 'How is pricing determined?',
        answer: 'Our pricing is based on the scope and complexity of your project. We offer flexible plans starting from $999/month for smaller projects, with custom enterprise solutions available for larger implementations.',
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment options including monthly, quarterly, and annual plans. Enterprise clients can also arrange custom payment terms.',
      },
      {
        question: 'Is there a free trial available?',
        answer: 'We offer a free consultation and demo of our services. For certain products, we also provide limited trial periods to help you evaluate our solutions.',
      },
    ],
  },
  {
    title: 'Technical Support',
    icon: Search,
    faqs: [
      {
        question: 'What kind of support do you provide?',
        answer: 'We provide comprehensive support including email, phone, and chat support. Professional and Enterprise plans include 24/7 priority support with dedicated account managers.',
      },
      {
        question: 'How quickly do you respond to support requests?',
        answer: 'Our response times vary by plan. Starter plans receive responses within 24 hours, Professional within 4 hours, and Enterprise clients receive immediate priority support.',
      },
      {
        question: 'Do you provide training for your solutions?',
        answer: 'Yes, we provide comprehensive training and onboarding for all our solutions. This includes documentation, video tutorials, and live training sessions.',
      },
    ],
  },
  {
    title: 'Security & Compliance',
    icon: HelpCircle,
    faqs: [
      {
        question: 'How do you ensure data security?',
        answer: 'We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA where applicable.',
      },
      {
        question: 'Where is my data stored?',
        answer: 'Data is stored in secure, certified data centers with options for geographic location preferences. We offer multi-region deployment for enterprise clients.',
      },
      {
        question: 'Can I export my data?',
        answer: 'Yes, you have full ownership of your data and can export it at any time in standard formats. We provide data portability tools for easy migration.',
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <FloatingGridLines />
        <GradientMorphOrbs />
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Help Center
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions about our services, pricing, and support.
            </p>
            
            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search for answers..." 
                className="pl-12 h-14 text-lg glass-card"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-3">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`${categoryIndex}-${faqIndex}`}
                    className="glass-card px-6 border-none"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our team is here to help. Reach out through any of these channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full text-center hover:border-primary/50 transition-all">
                <CardContent className="pt-8 pb-6">
                  <MessageCircle className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-4">Chat with our support team</p>
                  <Button variant="outline" size="sm">Start Chat</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-card h-full text-center hover:border-primary/50 transition-all">
                <CardContent className="pt-8 pb-6">
                  <Mail className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">support@gsgroups.com</p>
                  <Button variant="outline" size="sm">Send Email</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card h-full text-center hover:border-primary/50 transition-all">
                <CardContent className="pt-8 pb-6">
                  <Phone className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">+1 (555) 123-4567</p>
                  <Button variant="outline" size="sm">Schedule Call</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
