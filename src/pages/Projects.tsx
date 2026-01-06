import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Renova Tech — Constructions",
    description: "Custom WordPress site για εταιρεία ανακαινίσεων με gallery έργων και φόρμα οδηγού πελατών.",
    tags: ["WordPress", "Elementor", "SEO", "Performance"],
    link: "https://www.renovatech.gr/",
    thumbnail: "" // Add your thumbnail URL here, e.g., "/images/renovatech-thumb.jpg"
  },
  {
    title: "Baghetto — Streetfood Restaurant",
    description: "Κατασκευή Custom site, custom product pages, menu και responsive UX για κινητές συσκευές.",
    tags: ["Custom", "WordPress", "Elementor", "SEO", "Performance"],
    link: "https://baghetto.gr/",
    thumbnail: "" // Add your thumbnail URL here, e.g., "/images/baghetto-thumb.jpg"
  }
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Έργα | Garti - Portfolio Ιστοσελίδων</title>
        <meta name="description" content="Δείτε τα έργα μας - Custom ιστοσελίδες, WordPress sites, e-shops και web εφαρμογές που έχουμε δημιουργήσει." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Δείτε μερικά από τα έργα που έχουμε ολοκληρώσει για τους πελάτες μας
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Thumbnail */}
                  {project.thumbnail ? (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary/30">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Projects;
