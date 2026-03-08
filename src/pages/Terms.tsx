import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { FloatingGridLines } from '@/components/HeroAnimations';

const Terms = () => {
  return (
    <Layout>
      <section className="relative py-20 px-4 overflow-hidden">
        <FloatingGridLines />
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-muted-foreground mb-12">Last updated: February 1, 2026</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using GSGROUPS services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  GSGROUPS provides AI and digital solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>AI Applications and Solutions Development</li>
                  <li>Software Development Services</li>
                  <li>Digital Marketing and SEO Services</li>
                  <li>Mobile Application Development</li>
                  <li>AI Agent Development</li>
                  <li>UX/UI Design Services</li>
                  <li>Data Center Solutions</li>
                </ul>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Users agree to provide accurate information, maintain the confidentiality of their account credentials, and use services in compliance with applicable laws and regulations. Users shall not engage in any activity that interferes with or disrupts the services.
                </p>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of GSGROUPS and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment for services is due according to the terms specified in your service agreement. Late payments may result in suspension of services. All fees are non-refundable unless otherwise specified in writing.
                </p>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  GSGROUPS shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services. Our total liability shall not exceed the amount paid for the services in the twelve months preceding the claim.
                </p>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services with 30 days written notice. GSGROUPS reserves the right to terminate services immediately for breach of these terms. Upon termination, all user data will be handled according to our data retention policy.
                </p>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration.
                </p>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or through our platform. Continued use of services after changes constitutes acceptance of new terms.
                </p>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:<br />
                  Email: legal@gsgroups.com<br />
                  Address: 123 Innovation Drive, Tech City, TC 10001
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
