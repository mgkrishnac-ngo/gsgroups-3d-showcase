import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Video, Clock } from 'lucide-react';
import { AuroraWaves, ParticleWave } from '@/components/HeroAnimations';

const upcomingEvents = [
  {
    title: 'AI Summit 2026',
    type: 'Conference',
    date: 'March 15-17, 2026',
    location: 'San Francisco, CA',
    description: 'Join industry leaders for three days of AI innovation, networking, and hands-on workshops.',
    virtual: false,
  },
  {
    title: 'Building Enterprise AI Solutions',
    type: 'Webinar',
    date: 'February 20, 2026',
    location: 'Online',
    description: 'Learn best practices for implementing AI at scale in enterprise environments.',
    virtual: true,
  },
  {
    title: 'AI in Healthcare Workshop',
    type: 'Workshop',
    date: 'February 28, 2026',
    location: 'Boston, MA',
    description: 'Hands-on workshop exploring AI applications in healthcare diagnostics and patient care.',
    virtual: false,
  },
];

const pastWebinars = [
  {
    title: 'Introduction to Machine Learning Ops',
    date: 'January 15, 2026',
    duration: '45 min',
    viewers: '2.5k',
  },
  {
    title: 'AI Ethics and Responsible Development',
    date: 'January 8, 2026',
    duration: '60 min',
    viewers: '3.2k',
  },
  {
    title: 'Scaling AI: From Prototype to Production',
    date: 'December 20, 2025',
    duration: '50 min',
    viewers: '4.1k',
  },
];

const Webinars = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Events & Webinars
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn from{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Experts
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our webinars, workshops, and conferences to stay at the forefront of AI innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{event.type}</Badge>
                          {event.virtual && (
                            <Badge className="bg-accent/20 text-accent">
                              <Video className="w-3 h-3 mr-1" />
                              Virtual
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-primary to-accent shrink-0">
                        Register Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">On-Demand Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:border-primary/50 transition-all group cursor-pointer">
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Video className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {webinar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {webinar.duration}
                      </span>
                      <span>{webinar.viewers} views</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Host a Private Event</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Looking for customized training or workshops for your organization? Let's create a tailored program.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Webinars;
