import { motion } from 'framer-motion';
import { Phone, MessageCircle, Share2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialShareProps {
  title?: string;
  url?: string;
  phoneNumber?: string;
}

const SocialShare = ({ title = 'GSGROUPS - AI Solutions', url, phoneNumber = '+918884162999' }: SocialShareProps) => {
  const shareUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedTitle}%20${encodedUrl}`,
      color: 'hover:bg-green-600',
    },
    {
      name: 'Telegram',
      icon: Phone,
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:bg-blue-500',
    },
    {
      name: 'Twitter',
      icon: Share2,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'hover:bg-sky-500',
    },
    {
      name: 'LinkedIn',
      icon: Share2,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:bg-blue-700',
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-1">Share:</span>
      {shareLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center transition-colors ${link.color} hover:text-primary-foreground`}
          title={`Share on ${link.name}`}
        >
          <link.icon className="w-4 h-4" />
        </motion.a>
      ))}
    </div>
  );
};

export const WhatsAppCTA = ({ phoneNumber = '+1234567890', message = 'Hi! I am interested in your AI services.' }) => (
  <motion.a
    href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-24 left-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
  >
    <MessageCircle className="w-6 h-6" />
  </motion.a>
);

export const GoogleMapEmbed = ({ address = 'GSGROUPS+Tech+City', className = '' }: { address?: string; className?: string }) => (
  <div className={`rounded-2xl overflow-hidden border border-border ${className}`}>
    <iframe
      title="Office Location"
      width="100%"
      height="300"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}`}
    />
  </div>
);

export const BookAppointmentButton = () => (
  <Button asChild className="btn-hero">
    <a href="/consultation">
      <MapPin className="w-4 h-4 mr-2" />
      Book Free Consultation
    </a>
  </Button>
);

export default SocialShare;
