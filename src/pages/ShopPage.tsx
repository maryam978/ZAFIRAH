import { useState } from 'react';
import { Filter, Grid, List, Search, Star, Heart, ShoppingCart, Download, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { useProducts, Product, Ebook } from '@/contexts/ProductsContext';


interface ShopPageProps {
  category: string;
  title: string;
}

const ShopPage = ({ category, title }: ShopPageProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    priceRange: '',
    rating: ''
  });
  
  const { addToCart } = useCart();
  const { toast } = useToast();
  const { products, ebooks } = useProducts();

  // Filter products or ebooks based on category
  const filteredItems = category === 'ebooks' 
    ? ebooks 
    : products.filter(product => {
        if (category !== 'new' && product.category !== category) return false;
        if (category === 'new' && !product.isNew) return false;
        return true;
      });
  
  const getItemName = (item: Product | Ebook) => {
    return category === 'ebooks' ? (item as Ebook).title : (item as Product).name;
  };

  const handleAddToCart = (item: Product | Ebook) => {
    const itemName = getItemName(item);
    // For ebooks, we'll handle differently or add to cart as well
    if (category === 'ebooks') {
      toast({
        title: "E-book Added",
        description: `${itemName} has been added to your cart.`,
      });
    } else {
      addToCart(item as Product);
      toast({
        title: "Added to Cart",
        description: `${itemName} has been added to your cart.`,
      });
    }
  };
  const ProductCard = ({ item }: { item: Product | Ebook }) => {
    const isEbook = category === 'ebooks';
    const displayName = isEbook ? (item as Ebook).title : (item as Product).name;
    const displayImage = item.image;
    
    return (
      <Card className="luxury-card group cursor-pointer product-card overflow-hidden">
        <div className="relative">
          <img
            src={displayImage}
            alt={displayName}
            className="w-full h-64 object-cover product-card-image"
          />
          <div className="absolute top-4 left-4">
            {isEbook && (
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                E-BOOK
              </span>
            )}
            {!isEbook && (item as Product).isNew && (
              <span className="bg-gold text-charcoal text-xs font-semibold px-2 py-1 rounded">
                NEW
              </span>
            )}
            {!isEbook && (item as Product).sale && (
              <span className="bg-destructive text-white text-xs font-semibold px-2 py-1 rounded ml-2">
                SALE
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 hover:bg-black/40 text-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 space-y-2">
              <Button className="btn-luxury w-full" onClick={() => handleAddToCart(item)}>
                {isEbook ? <Download className="h-4 w-4 mr-2" /> : <ShoppingCart className="h-4 w-4 mr-2" />}
                {isEbook ? 'Download' : 'Add to Cart'}
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-pearl mb-2 line-clamp-1">
            {displayName}
          </h3>
          {isEbook && (item as Ebook).author && (
            <p className="text-sm text-muted-foreground mb-2">
              by {(item as Ebook).author}
            </p>
          )}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(item.rating)
                      ? 'text-gold fill-current'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              ({item.reviews})
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gold">
                ${item.price}
              </span>
              {item.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${item.originalPrice}
                </span>
              )}
            </div>
          </div>
          {isEbook && (item as Ebook).pages && (
            <p className="text-xs text-muted-foreground mt-2">
              {(item as Ebook).pages} pages
            </p>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-pearl mb-4">
                {title}
              </h1>
              <p className="text-muted-foreground">
                {filteredItems.length} {category === 'ebooks' ? 'e-books' : 'products'} available
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center border border-border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 space-y-6">
            <div className="luxury-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-pearl">Filters</h3>
                <Filter className="h-4 w-4 text-muted-foreground" />
              </div>

              {/* Price Range */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-pearl">Price Range</h4>
                <Select value={filters.priceRange} onValueChange={(value) => setFilters({...filters, priceRange: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50">$0 - $50</SelectItem>
                    <SelectItem value="50-100">$50 - $100</SelectItem>
                    <SelectItem value="100-200">$100 - $200</SelectItem>
                    <SelectItem value="200+">$200+</SelectItem>
                  </SelectContent>
                </Select>
              </div>


              {/* Rating Filter */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-pearl">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      className="flex items-center w-full text-left hover:text-gold transition-colors"
                      onClick={() => setFilters({...filters, rating: rating.toString()})}
                    >
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < rating ? 'text-gold fill-current' : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm">& Up</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => setFilters({ priceRange: '', rating: '' })}
              >
                Clear All Filters
              </Button>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredItems.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                {category === 'ebooks' ? (
                  <Book className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                ) : (
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                )}
                <h3 className="text-xl font-semibold text-pearl mb-2">
                  No {category === 'ebooks' ? 'e-books' : 'products'} found
                </h3>
                <p className="text-muted-foreground">
                  {category === 'ebooks' 
                    ? 'Add some e-books from the admin panel to see them here'
                    : 'Try adjusting your search criteria or browse our other collections'
                  }
                </p>
              </div>
            )}

            {/* Pagination */}
            {filteredItems.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  <Button variant="default">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">
                    Next
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;