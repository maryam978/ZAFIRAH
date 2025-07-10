import { Award, Users, Globe, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import heroBanner from '@/assets/hero-banner.jpg';

const AboutPage = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-gold" />,
      title: "Premium Quality",
      description: "We source only the finest materials and work with skilled artisans to create exceptional fashion pieces."
    },
    {
      icon: <Users className="h-8 w-8 text-gold" />,
      title: "Customer First",
      description: "Every decision we make is centered around providing our customers with the best possible experience."
    },
    {
      icon: <Globe className="h-8 w-8 text-gold" />,
      title: "Global Reach",
      description: "From our headquarters to customers worldwide, we bring luxury fashion to every corner of the globe."
    },
    {
      icon: <Heart className="h-8 w-8 text-gold" />,
      title: "Passion Driven",
      description: "Fashion is not just our business—it's our passion. Every piece reflects our love for exceptional design."
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Creative Director",
      description: "With over 15 years in luxury fashion, Sarah founded ZAFIRAH to make high-end fashion accessible to everyone."
    },
    {
      name: "David Chen",
      role: "Head of Design",
      description: "David brings innovative design concepts from his experience with leading fashion houses in Milan and Paris."
    },
    {
      name: "Maria Rodriguez",
      role: "Operations Director", 
      description: "Maria ensures every order meets our quality standards and reaches customers with precision and care."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <img
          src={heroBanner}
          alt="About ZAFIRAH"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-pearl mb-6">
                About ZAFIRAH
              </h1>
              <p className="text-xl text-pearl/90">
                Where luxury meets accessibility, and style knows no boundaries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-pearl mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020, ZAFIRAH emerged from a simple belief: that everyone deserves access to 
                beautifully crafted, luxury fashion without compromise. Our name, derived from the Arabic 
                word meaning "victorious" and "flourishing," embodies our mission to help individuals 
                express their unique style with confidence.
              </p>
              <p>
                What started as a vision to bridge the gap between high-end fashion and everyday 
                accessibility has evolved into a global brand trusted by thousands. We've built our 
                reputation on three pillars: uncompromising quality, innovative design, and exceptional 
                customer service.
              </p>
              <p>
                Today, ZAFIRAH continues to push boundaries in fashion technology, sustainability, and 
                customization. Every piece tells a story, and we're honored to be part of yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-pearl mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="luxury-card text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-pearl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-pearl mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind ZAFIRAH's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="luxury-card">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-gold font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-pearl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-2">
                50K+
              </div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-2">
                500+
              </div>
              <p className="text-muted-foreground">Unique Designs</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-2">
                25+
              </div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-2">
                4.9★
              </div>
              <p className="text-muted-foreground">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-pearl mb-8">
              Our Mission
            </h2>
            <blockquote className="text-2xl md:text-3xl font-playfair italic text-gold-gradient leading-relaxed">
              "To democratize luxury fashion by creating exceptional, customizable pieces that empower 
              individuals to express their unique style while maintaining the highest standards of 
              quality and craftsmanship."
            </blockquote>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-lg text-muted-foreground">
                Every piece we create is a testament to our commitment to excellence, 
                innovation, and the belief that luxury should be accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;