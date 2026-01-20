import vizoLogo from "@/assets/vizo-logo.jpeg";
import { Smartphone, Globe, Users, Zap, Shield, Headphones, ArrowRight, Mail, Phone, MapPin, } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  { name: "Hotel Management", platform: ["web"] },
  { name: "Billing Software", platform: ["web"] },
  { name: "Vizo Finance", platform: ["web", "mobile"] },
  { name: "Blood Bank", platform: ["mobile"] },
  { name: "Vizo EShop", platform: ["web"] },
  { name: "E-Commerce", platform: ["web"] },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={vizoLogo} alt="VIZO Software Solutions" className="h-12 w-auto" />
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button className="gradient-vizo text-background font-semibold">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-border bg-card">
            <span className="text-sm text-muted-foreground">🚀 Transforming Ideas into Digital Reality</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-vizo-text">VIZO</span>
            <br />
            <span className="text-foreground">Software Solutions</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We craft exceptional mobile and web applications tailored for businesses, startups, and individuals. 
            Your vision, our expertise — together we build the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-vizo text-background font-semibold text-lg px-8 glow-purple">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-border hover:bg-card">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Marquee Section */}
      <section className="py-16 px-6 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-3 gradient-vizo-text">
              Our Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Products we’ve built for real-world businesses
            </p>
          </div>

          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Marquee Track */}
            <div className="flex w-max animate-marquee gap-6">
  {[...projects, ...projects].map((project, index) => (
    <div
      key={index}
      className="
        group flex items-center gap-4 px-6 py-3 rounded-full
        bg-card/70 backdrop-blur-xl
        border border-border
        text-muted-foreground font-medium
        hover:text-foreground
        hover:border-primary/50
        hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
        transition-all duration-300
      "
    >
      {/* Project name */}
      <span className="whitespace-nowrap">
        {project.name}
      </span>

      {/* Platform icons */}
      <div className="flex items-center gap-2">
        {project.platform.includes("web") && (
          <span className="
            flex items-center justify-center w-7 h-7 rounded-full
            bg-gradient-to-br from-purple-500 to-pink-500
            text-white
            group-hover:scale-110 transition-transform
          ">
            <Globe className="w-4 h-4" />
          </span>
        )}

        {project.platform.includes("mobile") && (
          <span className="
            flex items-center justify-center w-7 h-7 rounded-full
            bg-gradient-to-br from-cyan-500 to-blue-500
            text-white
            group-hover:scale-110 transition-transform
          ">
            <Smartphone className="w-4 h-4" />
          </span>
        )}
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-vizo-text">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions for all your digital needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Smartphone className="h-8 w-8" />}
              title="Mobile App Development"
              description="Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences."
            />
            <ServiceCard
              icon={<Globe className="h-8 w-8" />}
              title="Web Application Development"
              description="Scalable, responsive web applications built with modern technologies for optimal performance."
            />
            <ServiceCard
              icon={<Users className="h-8 w-8" />}
              title="Custom Software Solutions"
              description="Tailored software solutions designed to meet your unique business requirements and workflows."
            />
            <ServiceCard
              icon={<Zap className="h-8 w-8" />}
              title="API Development"
              description="Robust and secure APIs that power seamless integration between your applications and services."
            />
            <ServiceCard
              icon={<Shield className="h-8 w-8" />}
              title="Cloud Solutions"
              description="Cloud-native applications and migration services for scalability and reliability."
            />
            <ServiceCard
              icon={<Headphones className="h-8 w-8" />}
              title="Support & Maintenance"
              description="Ongoing support and maintenance to keep your applications running smoothly 24/7."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose <span className="gradient-vizo-text">VIZO</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At VIZO Software Solutions, we believe in turning complex challenges into elegant digital solutions. 
                With years of experience and a passionate team of developers, designers, and strategists, 
                we deliver products that not only meet expectations but exceed them.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you're a startup looking to launch your first app or an enterprise seeking digital transformation, 
                we have the expertise to bring your vision to life.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <StatCard number="10+" label="Projects Delivered" />
                <StatCard number="5+" label="Happy Clients" />
                <StatCard number="10+" label="Team Members" />
                <StatCard number="2+" label="Years Experience" />
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 gradient-vizo rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-card border border-border rounded-3xl p-8 glow-purple">
                <img src={vizoLogo} alt="VIZO Logo" className="w-full max-w-md mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-vizo-text">Built for Everyone</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            From individual entrepreneurs to large enterprises, our solutions adapt to your scale
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="For Startups"
              description="Launch quickly with MVPs that validate your ideas and attract investors. We help you build fast without compromising quality."
              gradient="from-purple-500 to-pink-500"
            />
            <FeatureCard
              title="For Businesses"
              description="Streamline operations with custom software that integrates with your existing systems and scales with your growth."
              gradient="from-cyan-500 to-blue-500"
            />
            <FeatureCard
              title="For Enterprises"
              description="Enterprise-grade solutions with robust security, compliance, and performance for mission-critical applications."
              gradient="from-green-500 to-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-vizo-text">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your project? Let's discuss how we can help bring your ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ContactCard
              icon={<Mail className="h-6 w-6" />}
              title="Email Us"
              value="vizosoftwares@gmail.com"
            />
            <ContactCard
              icon={<Phone className="h-6 w-6" />}
              title="Call Us"
              value={[
                "+91-6379691338",
                "+91-9677253577"
              ]}
            />
            <ContactCard
              icon={<MapPin className="h-6 w-6" />}
              title="Visit Us"
              value="200A/3, Main Road, Hyundai Showroom Upstairs, Ambasamudram, Tirunelveli, Tamil Nadu"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={vizoLogo} alt="VIZO Software Solutions" className="h-10 w-auto" />
          <p className="text-muted-foreground text-sm">
            © 2026 VIZO Software Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:glow-purple">
    <div className="w-14 h-14 gradient-vizo rounded-xl flex items-center justify-center text-background mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center p-4">
    <div className="text-3xl font-bold gradient-vizo-text mb-1">{number}</div>
    <div className="text-muted-foreground text-sm">{label}</div>
  </div>
);

const FeatureCard = ({ title, description, gradient }: { title: string; description: string; gradient: string }) => (
  <div className="p-8 bg-card rounded-2xl border border-border text-left">
    <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${gradient} text-white text-sm font-medium mb-4`}>
      {title}
    </div>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const ContactCard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string | string[];
}) => (
  <div className="p-6 bg-card rounded-2xl border border-border text-center hover:border-primary/50 transition-colors">
    <div className="w-12 h-12 gradient-vizo rounded-full flex items-center justify-center text-background mx-auto mb-4">
      {icon}
    </div>

    <h3 className="font-semibold mb-2 text-foreground">{title}</h3>

    <div className="text-muted-foreground space-y-1">
      {Array.isArray(value) ? (
        value.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      ) : (
        <p>{value}</p>
      )}
    </div>
  </div>
);

export default Index;
