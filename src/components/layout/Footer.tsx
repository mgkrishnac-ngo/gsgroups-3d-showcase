import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUpRight,
  Send,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import gsLogo from '@/assets/gsgroups-logo.png';

const services = [
  { name: 'AI Apps', href: '/services/ai-apps' },
  { name: 'AI Trainer', href: '/services/ai-trainer' },
  { name: 'AI Solutions', href: '/services/ai-solutions' },
  { name: 'Software Development', href: '/services/software-development' },
  { name: 'Digital Marketing', href: '/services/digital-marketing' },
  { name: 'Mobile Apps', href: '/services/mobile-apps' },
  { name: 'AI Agents', href: '/services/ai-agents' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
];

const resources = [
  { name: 'Resources', href: '/resources' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'Newsletter', href: '/newsletter' },
  { name: 'Tech Stack', href: '/tech-stack' },
  { name: 'Industries', href: '/industries' },
  { name: 'Success Stories', href: '/success-stories' },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Refund Policy', href: '/refund' },
];

const socials = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/gsaborgs' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/gsaborgs' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/gsaborgs' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@gsaborgs' },
];

const Footer = () => {
  const [footerEmail, setFooterEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);

  const handleFooterSubscribe = async () => {
    if (!footerEmail) return;
    setSubscribing(true);
    const { error } = await supabase.from('newsletter_subscribers').insert({ email: footerEmail });
    setSubscribing(false);
    if (error) {
      if (error.code === '23505') toast.info('You are already subscribed!');
      else toast.error('Failed to subscribe. Try again.');
      return;
    }
    toast.success('Subscribed successfully!');
    setFooterEmail('');
  };

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={gsLogo} alt="GSGROUPS Logo" className="w-12 h-12 rounded-xl object-contain" />
              <span className="font-display font-bold text-2xl gradient-text">GSGROUPS</span>
            </Link>
            
            <p className="text-muted-foreground max-w-md">
              Empowering businesses with cutting-edge AI solutions and digital transformation services. 
              From startups to enterprises, we deliver innovation at scale.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  className="bg-muted/50 border-border focus:border-primary"
                />
                <Button className="btn-hero px-4" onClick={handleFooterSubscribe} disabled={subscribing}>
                  {subscribing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Innovation Drive<br />Tech City, TC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:hello@gsgroups.com" className="hover:text-primary transition-colors">
                  hello@gsgroups.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GSGROUPS. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow z-50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
