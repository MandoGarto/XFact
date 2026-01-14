import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PortfolioLightbox from '@/components/PortfolioLightbox';
import baghettoLogo from '@/assets/portfolio-baghetto.webp';

const projects = [
  {
    title: "RenovaTech — Οικοδομικές Εργασίες",
    description: "Ιστοσελίδα για εταιρεία ανακαινίσεων και κατασκευών. Περιλαμβάνει gallery έργων, υπηρεσίες (μερεμέτια, ελαιοχρωματισμοί, κατασκευές) και φόρμα επικοινωνίας για προσφορές.",
    tags: ["WordPress", "Elementor", "SEO", "Performance"],
    link: "https://www.renovatech.gr/",
    image: "https://www.renovatech.gr/wp-content/uploads/2025/11/RenovatechLogo-300x98.png"
  },
  {
    title: "Baghetto — Street Food",
    description: "Ιστοσελίδα για street food εστιατόριο στη Θεσσαλονίκη. Μοντέρνο design με ψηφιακό μενού, τοποθεσία και ώρες λειτουργίας. Responsive για κινητά.",
    tags: ["Custom", "WordPress", "Elementor", "SEO", "Performance"],
    link: "https://baghetto.gr/",
    image: baghettoLogo
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <>
      <Helmet>
        <title>Έργα | Garti - Portfolio Ιστοσελίδων</title>
        <meta name="description" content="Δείτε τα έργα μας - Custom ιστοσελίδες, WordPress sites, e-shops και web εφαρμογές που έχουμε δημιουργήσει." />
        <link rel="canonical" href="https://garti.gr/projects" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Δείτε μερικά από τα έργα που έχουμε ολοκληρώσει για τους πελάτες μας
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Project Image */}
                  <div 
                    className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-6 relative cursor-pointer overflow-hidden"
                    onClick={() => openLightbox(project)}
                  >
                    <img 
                      src={project.image} 
                      alt={`${project.title} logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          (e.currentTarget.nextElementSibling as HTMLElement).classList.remove('hidden');
                        }
                      }}
                    />
                    <span className="hidden text-4xl font-bold text-primary/30">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button asChild variant="outline" className="group/btn">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Επισκεφθείτε το site
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <PortfolioLightbox 
        project={selectedProject}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />
    </>
  );
};

export default Projects;
