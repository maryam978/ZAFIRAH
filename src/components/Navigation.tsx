import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from './ui/button';
import { CartSheet } from './CartSheet';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'New', href: '/new' },
    { name: 'Mens', href: '/mens' },
    { name: 'Womens', href: '/womens' },
    { name: 'Kids', href: '/kids' },
    { name: 'Sportswear', href: '/sportswear' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Shoes', href: '/shoes' },
    { name: 'E-Books', href: '/ebooks' },
    { name: 'Admin', href: '/admin' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 flex items-center justify-center">
              <img 
                src="/lovable-uploads/0ae6e025-e2c5-4418-9297-163f08305acc.png" 
                alt="ZAFIRAH Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-2xl font-playfair font-bold text-gold-gradient">
              ZAFIRAH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-sm font-medium ${
                  isActive(item.href) ? 'text-gold' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-gold">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-gold">
              <User className="h-5 w-5" />
            </Button>
            <CartSheet />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-gold"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-gold bg-gold/10'
                      : 'text-foreground hover:text-gold hover:bg-gold/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;