import { useState } from 'react';
import { Plus, Edit3, Trash2, Save, Image, Package, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useProducts, Product, Ebook } from '@/contexts/ProductsContext';

const AdminPage = () => {
  const { toast } = useToast();
  const { 
    products, 
    ebooks, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    addEbook, 
    updateEbook, 
    deleteEbook 
  } = useProducts();

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingEbook, setEditingEbook] = useState<Ebook | null>(null);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    image: ''
  });

  const [newEbook, setNewEbook] = useState({
    title: '',
    author: '',
    price: '',
    description: '',
    image: '',
    pages: '',
    fileSize: ''
  });

  const [siteSettings, setSiteSettings] = useState({
    siteName: 'ZAFIRAH',
    tagline: 'Luxury Fashion Redefined',
    heroTitle: 'Discover Timeless Elegance',
    heroSubtitle: 'Where luxury meets sophistication'
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price) {
      toast({
        title: "Missing Information",
        description: "Please fill in name, category, and price to add a product.",
        variant: "destructive",
      });
      return;
    }

    const productData = {
      name: newProduct.name,
      category: newProduct.category,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock) || 0,
      image: newProduct.image || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
      description: newProduct.description,
      rating: 4.5,
      reviews: 0
    };
    
    addProduct(productData);
    setNewProduct({ name: '', category: '', price: '', stock: '', description: '', image: '' });
    
    toast({
      title: "Product Added",
      description: `${productData.name} has been successfully added to the catalog.`,
    });
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      stock: product.stock?.toString() || '0',
      description: product.description || '',
      image: product.image
    });
  };

  const handleUpdateProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price || !editingProduct) {
      toast({
        title: "Missing Information",
        description: "Please fill in name, category, and price to update the product.",
        variant: "destructive",
      });
      return;
    }

    const updatedData = {
      name: newProduct.name,
      category: newProduct.category,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock) || 0,
      image: newProduct.image || editingProduct.image,
      description: newProduct.description
    };

    updateProduct(editingProduct.id, updatedData);
    setEditingProduct(null);
    setNewProduct({ name: '', category: '', price: '', stock: '', description: '', image: '' });
    
    toast({
      title: "Product Updated",
      description: `${updatedData.name} has been successfully updated.`,
    });
  };


  const handleDeleteProduct = (id: number) => {
    const productToDelete = products.find(p => p.id === id);
    deleteProduct(id);
    
    toast({
      title: "Product Deleted",
      description: `${productToDelete?.name} has been removed from the catalog.`,
    });
  };

  // Ebook handlers
  const handleAddEbook = () => {
    if (!newEbook.title || !newEbook.author || !newEbook.price) {
      toast({
        title: "Missing Information",
        description: "Please fill in title, author, and price to add an e-book.",
        variant: "destructive",
      });
      return;
    }

    const ebookData = {
      title: newEbook.title,
      author: newEbook.author,
      price: parseFloat(newEbook.price),
      description: newEbook.description,
      image: newEbook.image || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
      pages: parseInt(newEbook.pages) || 0,
      fileSize: newEbook.fileSize,
      rating: 4.5,
      reviews: 0
    };
    
    addEbook(ebookData);
    setNewEbook({ title: '', author: '', price: '', description: '', image: '', pages: '', fileSize: '' });
    
    toast({
      title: "E-book Added",
      description: `${ebookData.title} has been successfully added to the catalog.`,
    });
  };

  const handleEditEbook = (ebook: Ebook) => {
    setEditingEbook(ebook);
    setNewEbook({
      title: ebook.title,
      author: ebook.author,
      price: ebook.price.toString(),
      description: ebook.description,
      image: ebook.image,
      pages: ebook.pages?.toString() || '',
      fileSize: ebook.fileSize || ''
    });
  };

  const handleUpdateEbook = () => {
    if (!newEbook.title || !newEbook.author || !newEbook.price || !editingEbook) {
      toast({
        title: "Missing Information",
        description: "Please fill in title, author, and price to update the e-book.",
        variant: "destructive",
      });
      return;
    }

    const updatedData = {
      title: newEbook.title,
      author: newEbook.author,
      price: parseFloat(newEbook.price),
      description: newEbook.description,
      image: newEbook.image || editingEbook.image,
      pages: parseInt(newEbook.pages) || 0,
      fileSize: newEbook.fileSize
    };

    updateEbook(editingEbook.id, updatedData);
    setEditingEbook(null);
    setNewEbook({ title: '', author: '', price: '', description: '', image: '', pages: '', fileSize: '' });
    
    toast({
      title: "E-book Updated",
      description: `${updatedData.title} has been successfully updated.`,
    });
  };

  const handleDeleteEbook = (id: number) => {
    const ebookToDelete = ebooks.find(e => e.id === id);
    deleteEbook(id);
    
    toast({
      title: "E-book Deleted",
      description: `${ebookToDelete?.title} has been removed from the catalog.`,
    });
  };

  const categories = ['new', 'mens', 'womens', 'kids', 'sportswear', 'accessories', 'shoes'];

  const handleCancelEditProduct = () => {
    setEditingProduct(null);
    setNewProduct({ name: '', category: '', price: '', stock: '', description: '', image: '' });
  };

  const handleCancelEditEbook = () => {
    setEditingEbook(null);
    setNewEbook({ title: '', author: '', price: '', description: '', image: '', pages: '', fileSize: '' });
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Page Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-pearl mb-4">
            Admin Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage your products and website settings
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="add-product">Add Product</TabsTrigger>
            <TabsTrigger value="ebooks">E-Books</TabsTrigger>
            <TabsTrigger value="add-ebook">Add E-Book</TabsTrigger>
            <TabsTrigger value="settings">Site Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-gold flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Product Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 bg-charcoal-light rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-pearl">{product.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Category: {product.category}</span>
                          <span>Price: ${product.price}</span>
                          <span>Stock: {product.stock}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleEditProduct(product)}
                      >
                        <Edit3 className="h-4 w-4" />
                        Edit
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add-product" className="space-y-6">
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-gold flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Product Name</Label>
                    <Input
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      placeholder="Enter product name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select value={newProduct.category} onValueChange={(value) => setNewProduct({...newProduct, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Price ($)</Label>
                    <Input
                      type="number"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Stock Quantity</Label>
                    <Input
                      type="number"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    placeholder="Product description..."
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Product Image URL</Label>
                  <Input
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    placeholder="https://images.unsplash.com/photo-1234567890/product.jpg"
                  />
                  <p className="text-xs text-muted-foreground">Enter image URL or use Unsplash images</p>
                </div>
                {editingProduct ? (
                  <div className="flex space-x-2">
                    <Button onClick={handleUpdateProduct} className="btn-luxury flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      Update Product
                    </Button>
                    <Button onClick={handleCancelEditProduct} variant="outline" className="flex-1">
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button onClick={handleAddProduct} className="btn-luxury w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ebooks" className="space-y-6">
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-gold flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  E-book Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ebooks.map((ebook) => (
                  <div key={ebook.id} className="flex items-center justify-between p-4 bg-charcoal-light rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={ebook.image} 
                        alt={ebook.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-pearl">{ebook.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Author: {ebook.author}</span>
                          <span>Price: ${ebook.price}</span>
                          <span>Pages: {ebook.pages}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleEditEbook(ebook)}
                      >
                        <Edit3 className="h-4 w-4" />
                        Edit
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleDeleteEbook(ebook.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  ))}
                  {ebooks.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No e-books found. Add your first e-book to get started.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add-ebook" className="space-y-6">
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-gold flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  {editingEbook ? 'Edit E-book' : 'Add New E-book'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>E-book Title</Label>
                    <Input
                      value={newEbook.title}
                      onChange={(e) => setNewEbook({...newEbook, title: e.target.value})}
                      placeholder="Enter e-book title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Author</Label>
                    <Input
                      value={newEbook.author}
                      onChange={(e) => setNewEbook({...newEbook, author: e.target.value})}
                      placeholder="Enter author name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Price ($)</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={newEbook.price}
                      onChange={(e) => setNewEbook({...newEbook, price: e.target.value})}
                      placeholder="0.00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Pages</Label>
                    <Input
                      type="number"
                      value={newEbook.pages}
                      onChange={(e) => setNewEbook({...newEbook, pages: e.target.value})}
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>File Size</Label>
                    <Input
                      value={newEbook.fileSize}
                      onChange={(e) => setNewEbook({...newEbook, fileSize: e.target.value})}
                      placeholder="e.g., 2.5 MB"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={newEbook.description}
                    onChange={(e) => setNewEbook({...newEbook, description: e.target.value})}
                    placeholder="E-book description..."
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Cover Image URL</Label>
                  <Input
                    value={newEbook.image}
                    onChange={(e) => setNewEbook({...newEbook, image: e.target.value})}
                    placeholder="https://images.unsplash.com/photo-1234567890/ebook-cover.jpg"
                  />
                  <p className="text-xs text-muted-foreground">Enter cover image URL</p>
                </div>
                {editingEbook ? (
                  <div className="flex space-x-2">
                    <Button onClick={handleUpdateEbook} className="btn-luxury flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      Update E-book
                    </Button>
                    <Button onClick={handleCancelEditEbook} variant="outline" className="flex-1">
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button onClick={handleAddEbook} className="btn-luxury w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add E-book
                  </Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-gold flex items-center">
                  <Edit3 className="h-5 w-5 mr-2" />
                  Website Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Site Name</Label>
                    <Input
                      value={siteSettings.siteName}
                      onChange={(e) => setSiteSettings({...siteSettings, siteName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Tagline</Label>
                    <Input
                      value={siteSettings.tagline}
                      onChange={(e) => setSiteSettings({...siteSettings, tagline: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Hero Title</Label>
                  <Input
                    value={siteSettings.heroTitle}
                    onChange={(e) => setSiteSettings({...siteSettings, heroTitle: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Hero Subtitle</Label>
                  <Textarea
                    value={siteSettings.heroSubtitle}
                    onChange={(e) => setSiteSettings({...siteSettings, heroSubtitle: e.target.value})}
                    rows={2}
                  />
                </div>
                <Button 
                  className="btn-luxury"
                  onClick={() => {
                    toast({
                      title: "Settings Saved",
                      description: "Website settings have been updated successfully.",
                    });
                  }}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-gold">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-charcoal-light rounded-lg">
                    <div className="text-2xl font-bold text-gold">{products.length}</div>
                    <div className="text-sm text-muted-foreground">Total Products</div>
                  </div>
                   <div className="text-center p-4 bg-charcoal-light rounded-lg">
                     <div className="text-2xl font-bold text-gold">{categories.length}</div>
                     <div className="text-sm text-muted-foreground">Categories</div>
                   </div>
                   <div className="text-center p-4 bg-charcoal-light rounded-lg">
                     <div className="text-2xl font-bold text-gold">{products.reduce((sum, p) => sum + (p.stock || 0), 0)}</div>
                     <div className="text-sm text-muted-foreground">Total Stock</div>
                   </div>
                   <div className="text-center p-4 bg-charcoal-light rounded-lg">
                     <div className="text-2xl font-bold text-gold">{ebooks.length}</div>
                     <div className="text-sm text-muted-foreground">E-books</div>
                   </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;