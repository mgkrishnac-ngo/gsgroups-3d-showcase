import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Refund = () => {
  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Refund{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-muted-foreground mb-12">Last updated: February 1, 2026</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At GSGROUPS, we stand behind the quality of our services. This refund policy outlines the conditions under which refunds may be granted for our AI and digital solutions services.
                </p>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">2. Subscription Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For subscription-based services:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Monthly subscriptions: Full refund within 7 days of initial purchase</li>
                  <li>Annual subscriptions: Pro-rated refund within 30 days of initial purchase</li>
                  <li>No refunds for partial months or subscription renewals after the refund period</li>
                  <li>Refunds processed within 5-10 business days</li>
                </ul>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">3. Project-Based Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For custom development and consulting projects:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Deposits are non-refundable once project work has commenced</li>
                  <li>Milestone payments are refundable if deliverables do not meet agreed specifications</li>
                  <li>Disputes must be raised within 14 days of milestone delivery</li>
                  <li>Final payments are due upon project completion and approval</li>
                </ul>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">4. Conditions for Refund</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Refunds may be granted when:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Service is significantly different from what was described</li>
                  <li>Technical issues prevent access to services for extended periods</li>
                  <li>Duplicate charges or billing errors occur</li>
                  <li>Service is discontinued by GSGROUPS</li>
                </ul>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">5. Non-Refundable Items</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following are not eligible for refunds:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Services that have been fully delivered and accepted</li>
                  <li>Custom development work that meets agreed specifications</li>
                  <li>Training and consulting hours that have been consumed</li>
                  <li>Third-party costs (cloud services, APIs, licenses)</li>
                  <li>Rush or expedited service fees</li>
                </ul>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">6. How to Request a Refund</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To request a refund:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>Contact our support team at billing@gsgroups.com</li>
                  <li>Include your order number and reason for the refund request</li>
                  <li>Provide any relevant documentation or screenshots</li>
                  <li>Our team will review and respond within 3 business days</li>
                </ol>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">7. Refund Processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Approved refunds will be processed to the original payment method within 5-10 business days. Credit card refunds may take an additional 3-5 business days to appear on your statement, depending on your financial institution.
                </p>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">8. Disputes and Chargebacks</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage customers to contact us directly before initiating a chargeback. We are committed to resolving disputes fairly and promptly. Initiating a chargeback may result in suspension of services during the dispute resolution process.
                </p>
              </section>

              <section className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For refund inquiries or billing questions:<br />
                  Email: billing@gsgroups.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Hours: Monday - Friday, 9 AM - 6 PM EST
                </p>
                <Button className="bg-gradient-to-r from-primary to-accent">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Billing Support
                </Button>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Refund;
