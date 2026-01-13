import { motion } from 'framer-motion';
import { Shield, Zap, Award, HeartHandshake } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'SSL Secured' },
  { icon: Zap, label: 'Fast Delivery' },
  { icon: Award, label: 'Quality Work' },
  { icon: HeartHandshake, label: 'Client Focused' },
];

const TrustBadges = () => {
  return (
    <div className="py-8 border-t border-b border-border/50 mb-12">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <badge.icon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{badge.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
