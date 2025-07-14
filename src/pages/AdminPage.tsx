import { useState } from 'react';
import { Plus, Edit3, Trash2, Save, Image, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const AdminPage = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState([
    { id: 1, name: 'Premium Dress Shirt', category: 'mens', price: 89, stock: 25, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400' },
    { id: 2, name: 'Elegant Dress', category: 'womens', price: 129, stock: 15, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400' },
    { id: 3, name: 'Kids T-Shirt', category: 'kids', price: 29, stock: 40, image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400' },
    { id: 4, name: 'Running Shoes', category: 'shoes', price: 159, stock: 20, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400' },
    { id: 5, name: 'Designer Handbag', category: 'accessories', price: 199, stock: 12, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400' },
  ]);

  const [editingProduct, setEditingProduct] = useState<any>(null);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    image: ''
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

    const product = {
      id: Date.now(), // Use timestamp for unique ID
      name: newProduct.name,
      category: newProduct.category,
      price: parseInt(newProduct.price),
      stock: parseInt(newProduct.stock) || 0,
      image: newProduct.image || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400'
    };
    setProducts([...products, product]);
    setNewProduct({ name: '', category: '', price: '', stock: '', description: '', image: '' });
    
    toast({
      title: "Product Added",
      description: `${product.name} has been successfully added to the catalog.`,
    });
  };

  const handleEditProduct = (product: any) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      stock: product.stock.toString(),
      description: '',
      image: product.image
    });
  };

  const handleUpdateProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price) {
      toast({
        title: "Missing Information",
        description: "Please fill in name, category, and price to update the product.",
        variant: "destructive",
      });
      return;
    }

    const updatedProduct = {
      ...editingProduct,
      name: newProduct.name,
      category: newProduct.category,
      price: parseInt(newProduct.price),
      stock: parseInt(newProduct.stock) || 0,
      image: newProduct.image || editingProduct.image
    };

    setProducts(products.map(p => p.id === editingProduct.id ? updatedProduct : p));
    setEditingProduct(null);
    setNewProduct({ name: '', category: '', price: '', stock: '', description: '', image: '' });
    
    toast({
      title: "Product Updated",
      description: `${updatedProduct.name} has been successfully updated.`,
    });
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setNewProduct({ name: '', category: '', price: '', stock: '', description: '', image: '' });
  };

  const handleDeleteProduct = (id: number) => {
    const productToDelete = products.find(p => p.id === id);
    setProducts(products.filter(p => p.id !== id));
    
    toast({
      title: "Product Deleted",
      description: `${productToDelete?.name} has been removed from the catalog.`,
    });
  };

  const categories = ['new', 'mens', 'womens', 'kids', 'sportswear', 'accessories', 'shoes'];

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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="add-product">Add Product</TabsTrigger>
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
                    <Button onClick={handleCancelEdit} variant="outline" className="flex-1">
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
                    <div className="text-2xl font-bold text-gold">{products.reduce((sum, p) => sum + p.stock, 0)}</div>
                    <div className="text-sm text-muted-foreground">Total Stock</div>
                  </div>
                  <div className="text-center p-4 bg-charcoal-light rounded-lg">
                    <div className="text-2xl font-bold text-gold">${products.reduce((sum, p) => sum + (p.price * p.stock), 0)}</div>
                    <div className="text-sm text-muted-foreground">Inventory Value</div>
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