import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const botResponses: Record<string, string> = {
  default: "Thanks for reaching out! I'm GSGROUPS AI assistant. How can I help you today?",
  services: "We offer AI/ML solutions, custom software development, cloud services, data analytics, and more. Visit our Services page for details!",
  pricing: "Our pricing is customized per project. Visit /pricing or book a free consultation at /consultation.",
  contact: "You can reach us at /contact or email hello@gsgroups.com. We typically respond within 24 hours.",
  demo: "Book a free demo at /demo to see our AI solutions in action!",
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes('service') || lower.includes('solution') || lower.includes('offer')) return botResponses.services;
  if (lower.includes('price') || lower.includes('cost') || lower.includes('plan')) return botResponses.pricing;
  if (lower.includes('contact') || lower.includes('reach') || lower.includes('email')) return botResponses.contact;
  if (lower.includes('demo') || lower.includes('trial')) return botResponses.demo;
  return botResponses.default;
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm the GSGROUPS AI Assistant. How can I help you?", isBot: true },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), text: input, isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: getResponse(input), isBot: true }]);
    }, 800);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 glass-card rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            <div className="bg-primary/20 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                <span className="font-semibold text-sm">AI Assistant</span>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
              <button onClick={() => setIsOpen(false)}><X className="w-4 h-4 text-muted-foreground" /></button>
            </div>

            <div className="h-72 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] rounded-xl px-4 py-2 text-sm ${msg.isBot ? 'bg-muted text-foreground' : 'bg-primary text-primary-foreground'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-border flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me anything..."
                className="text-sm"
              />
              <Button size="icon" onClick={sendMessage}><Send className="w-4 h-4" /></Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg glow-primary"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </>
  );
};

export default AIChatbot;
