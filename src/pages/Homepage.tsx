import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroBanner from '@/assets/hero-banner.jpg';
import mensProduct from '@/assets/mens-product.jpg';
import womensProduct from '@/assets/womens-product.jpg';
import kidsProduct from '@/assets/kids-product.jpg';
import sportswearProduct from '@/assets/sportswear-product.jpg';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: heroBanner,
      title: "Luxury Redefined",
      subtitle: "Discover the new collection of premium fashion",
      cta: "Explore Collection"
    },
    {
      image: mensProduct,
      title: "Gentleman's Choice",
      subtitle: "Sophisticated menswear for the modern man",
      cta: "Shop Men's"
    },
    {
      image: womensProduct,
      title: "Elegant Essentials",
      subtitle: "Timeless pieces for the contemporary woman",
      cta: "Shop Women's"
    }
  ];

  const featuredCollections = [
    {
      id: 1,
      name: "New Arrivals",
      image: heroBanner,
      description: "Latest drops from premium designers",
      link: "/new"
    },
    {
      id: 2,
      name: "Men's Collection",
      image: mensProduct,
      description: "Sophisticated styles for gentlemen",
      link: "/mens"
    },
    {
      id: 3,
      name: "Women's Collection",
      image: womensProduct,
      description: "Elegant fashion for modern women",
      link: "/womens"
    },
    {
      id: 4,
      name: "Kids Collection",
      image: kidsProduct,
      description: "Stylish and comfortable kidswear",
      link: "/kids"
    },
    {
      id: 5,
      name: "Sportswear",
      image: sportswearProduct,
      description: "Performance meets style",
      link: "/sportswear"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely love the quality and style. ZAFIRAH has become my go-to brand for luxury fashion."
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "The attention to detail is incredible. Worth every penny for such premium quality."
    },
    {
      id: 3,
      name: "Emma Davis", 
      rating: 5,
      comment: "Fast shipping, excellent customer service, and the most beautiful clothes I've ever owned."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const NextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const PrevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-7xl font-playfair font-bold text-pearl mb-6 hero-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-pearl/90 mb-8 hero-fade-in-delay">
                    {slide.subtitle}
                  </p>
                  <Button className="btn-luxury text-lg px-8 py-6 hero-fade-in-delay">
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={PrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={NextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-gold' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-pearl mb-4">
              Featured Collections
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our curated selection of premium fashion pieces designed for the modern lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCollections.map((collection) => (
              <Link key={collection.id} to={collection.link}>
                <Card className="luxury-card group cursor-pointer product-card overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover product-card-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-playfair font-semibold text-pearl mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-pearl/80">
                        {collection.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-pearl mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers who trust ZAFIRAH
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="luxury-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-pearl/90 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <p className="text-gold font-semibold">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-pearl mb-4">
              Stay in Style
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for exclusive access to new collections and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-charcoal-light border border-border rounded-md text-pearl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Button className="btn-luxury">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-gold text-xl">✓</span>
              </div>
              <span className="text-pearl text-sm">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-gold text-xl">↻</span>
              </div>
              <span className="text-pearl text-sm">Easy Returns</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-gold text-xl">♕</span>
              </div>
              <span className="text-pearl text-sm">Premium Quality</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-gold text-xl">🔒</span>
              </div>
              <span className="text-pearl text-sm">Secure Payment</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;