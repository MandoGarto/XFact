import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

interface PortfolioLightboxProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioLightbox = ({ project, isOpen, onClose }: PortfolioLightboxProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full z-50 overflow-hidden"
          >
            <div className="glass rounded-2xl overflow-hidden h-full md:h-auto max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-8">
                <motion.img
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button asChild variant="hero" className="w-full md:w-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Επισκεφθείτε το site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PortfolioLightbox;
