import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  { name: 'AI Apps', href: '/services/ai-apps', description: 'Custom AI-powered applications' },
  { name: 'AI Trainer', href: '/services/ai-trainer', description: 'Train AI models for your needs' },
  { name: 'AI Solutions', href: '/services/ai-solutions', description: 'End-to-end AI implementations' },
  { name: 'Software Development', href: '/services/software-development', description: 'Custom software solutions' },
  { name: 'Digital Marketing', href: '/services/digital-marketing', description: 'Data-driven marketing strategies' },
  { name: 'Advertising', href: '/services/advertising', description: 'Creative advertising campaigns' },
  { name: 'SEO', href: '/services/seo', description: 'Search engine optimization' },
  { name: 'Mobile App Development', href: '/services/mobile-apps', description: 'iOS & Android applications' },
  { name: 'AI Agent Development', href: '/services/ai-agents', description: 'Intelligent automation agents' },
  { name: 'UX/UI Design', href: '/services/design', description: 'User-centered design solutions' },
  { name: 'AI Engine Systems', href: '/services/ai-engine', description: 'Core AI infrastructure' },
  { name: 'AI Consulting', href: '/services/ai-consulting', description: 'Strategic AI guidance' },
  { name: 'Data Center Provider', href: '/services/data-center', description: 'Enterprise-scale infrastructure' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-primary-foreground font-orbitron font-bold text-lg">GS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.div>
            <span className="font-display font-bold text-xl gradient-text">GSGROUPS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                        location.pathname.startsWith('/services')
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        >
                          <div className="glass-card p-6 w-[600px] grid grid-cols-2 gap-3 shadow-2xl">
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                to={service.href}
                                className="p-3 rounded-lg hover:bg-muted/50 transition-colors group/item"
                              >
                                <span className="font-medium text-foreground group-hover/item:text-primary transition-colors">
                                  {service.name}
                                </span>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {service.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === link.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-sm" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button className="btn-hero text-sm py-2 px-5" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="flex items-center gap-2 text-foreground font-medium w-full"
                        >
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-2"
                            >
                              {services.map((service) => (
                                <Link
                                  key={service.href}
                                  to={service.href}
                                  className="block text-muted-foreground hover:text-primary transition-colors py-1"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={`block font-medium transition-colors ${
                          location.pathname === link.href
                            ? 'text-primary'
                            : 'text-foreground hover:text-primary'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3 border-t border-border">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/login">Sign In</Link>
                  </Button>
                  <Button className="w-full btn-hero" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
