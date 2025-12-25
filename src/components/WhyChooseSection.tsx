import { Zap, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Quick Delivery",
    description: "Fast turnaround on all projects without compromising quality.",
  },
  {
    icon: Users,
    title: "Human-Friendly",
    description: "Clear communication designed for non-technical users.",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description: "We're here when you need us with reliable maintenance packages.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Modern standards with responsive design and SEO best practices.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-1/2 h-96 bg-primary/5 rounded-l-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up delay-100">
              Digital Solutions
              <br />
              <span className="text-gradient">Made Simple</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-up delay-200">
              We believe technology should empower your business, not complicate it. Our approach focuses on practical solutions that work for you — not the other way around.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up delay-300">
            <div className="relative rounded-2xl overflow-hidden glass p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="relative z-10">
                <div className="text-6xl font-bold text-gradient mb-4">5+</div>
                <div className="text-xl font-semibold mb-2">Years of Experience</div>
                <p className="text-muted-foreground">
                  Helping businesses establish their digital presence with reliable, 
                  accessible, and affordable solutions.
                </p>
                
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                        >
                          <span className="text-xs font-medium">👤</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="font-semibold">50+ Clients</div>
                      <div className="text-sm text-muted-foreground">Trust our services</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
