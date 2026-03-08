import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Sparkles, Video, Phone, Users } from 'lucide-react';

const FloatingCalendar = () => (
  <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
    <mesh rotation={[0.1, -0.1, 0]}>
      <boxGeometry args={[2, 2.2, 0.15]} />
      <MeshDistortMaterial color="#00d4ff" distort={0.15} speed={2} />
    </mesh>
    {[0, 1, 2, 3].map((i) => (
      <mesh key={i} position={[0, 0.6 - i * 0.4, 0.08]}>
        <boxGeometry args={[1.8, 0.02, 0.01]} />
        <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
      </mesh>
    ))}
  </Float>
);

const meetingTypes = [
  {
    id: 'discovery',
    title: '15 Min Discovery Call',
    duration: '15 min',
    icon: Phone,
    description: 'Quick intro call to understand your needs',
    calLink: 'gsgroups/discovery-call',
  },
  {
    id: 'consultation',
    title: '45 Min AI Consultation',
    duration: '45 min',
    icon: Video,
    description: 'Deep dive into your AI strategy and roadmap',
    calLink: 'gsgroups/ai-consultation',
  },
  {
    id: 'workshop',
    title: '90 Min Team Workshop',
    duration: '90 min',
    icon: Users,
    description: 'Collaborative session with your team',
    calLink: 'gsgroups/team-workshop',
  },
];

const Consultation = () => {
  const [selectedMeeting, setSelectedMeeting] = useState(meetingTypes[1]);

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 inline mr-2" />
              Free Consultation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss Your{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Journey
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a free consultation with our AI experts to explore how we can help transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Meeting Types */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold mb-4">Select Meeting Type</h3>
              {meetingTypes.map((meeting) => (
                <Card
                  key={meeting.id}
                  className={`glass-card cursor-pointer transition-all hover:border-primary/50 ${
                    selectedMeeting.id === meeting.id ? 'border-primary shadow-lg shadow-primary/20' : ''
                  }`}
                  onClick={() => setSelectedMeeting(meeting)}
                >
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                      <meeting.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{meeting.title}</h4>
                      <p className="text-sm text-muted-foreground">{meeting.description}</p>
                      <span className="text-xs text-primary mt-1 inline-block">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {meeting.duration}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <Clock className="w-8 h-8 mx-auto text-primary mb-2" />
                    <div className="text-2xl font-bold">{selectedMeeting.duration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <Sparkles className="w-8 h-8 mx-auto text-primary mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-muted-foreground">Free</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Right - Cal.com Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-0">
                  <Tabs defaultValue="inline" className="w-full">
                    <div className="p-4 border-b border-border">
                      <TabsList className="grid w-full max-w-xs grid-cols-2">
                        <TabsTrigger value="inline">Inline</TabsTrigger>
                        <TabsTrigger value="popup">Popup</TabsTrigger>
                      </TabsList>
                    </div>
                    
                    <TabsContent value="inline" className="m-0">
                      <div className="min-h-[600px] bg-background">
                        <iframe
                          src={`https://cal.com/${selectedMeeting.calLink}?embed=true&theme=dark&hideEventTypeDetails=false`}
                          className="w-full h-[600px] border-0"
                          title="Book a consultation"
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="popup" className="m-0 p-8">
                      <div className="text-center py-12">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                          <selectedMeeting.icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{selectedMeeting.title}</h3>
                        <p className="text-muted-foreground mb-6">{selectedMeeting.description}</p>
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-primary to-accent"
                          onClick={() => {
                            window.open(
                              `https://cal.com/${selectedMeeting.calLink}`,
                              'cal-popup',
                              'width=600,height=700'
                            );
                          }}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Open Booking Calendar
                        </Button>
                        <p className="text-xs text-muted-foreground mt-4">
                          Opens in a new window for easier scheduling
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* 3D Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="h-[300px]">
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <FloatingCalendar />
              </Canvas>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Consultation;