import { useState } from 'react';
import { Upload, Palette, Type, Plus, Minus, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import mensProduct from '@/assets/mens-product.jpg';

const CustomizePage = () => {
  const [selectedProduct, setSelectedProduct] = useState('shirt');
  const [customization, setCustomization] = useState({
    color: 'black',
    size: 'M',
    text: '',
    textColor: 'white',
    textPosition: 'center',
    embroidery: false,
    backPrint: false,
    logoUpload: null as File | null,
  });
  const [totalPrice, setTotalPrice] = useState(89);

  const products = [
    { id: 'shirt', name: 'Premium Dress Shirt', basePrice: 89, image: mensProduct },
    { id: 'tshirt', name: 'Classic T-Shirt', basePrice: 49, image: mensProduct },
    { id: 'hoodie', name: 'Luxury Hoodie', basePrice: 129, image: mensProduct },
    { id: 'jacket', name: 'Designer Jacket', basePrice: 299, image: mensProduct },
  ];

  const colors = [
    { name: 'Black', value: 'black', hex: '#000000' },
    { name: 'White', value: 'white', hex: '#FFFFFF' },
    { name: 'Navy', value: 'navy', hex: '#1F2937' },
    { name: 'Grey', value: 'grey', hex: '#6B7280' },
    { name: 'Champagne', value: 'champagne', hex: '#F7E7CE' },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const textPositions = ['center', 'left-chest', 'back-center', 'sleeve'];

  const calculatePrice = () => {
    const baseProduct = products.find(p => p.id === selectedProduct);
    let price = baseProduct?.basePrice || 0;
    
    if (customization.embroidery) price += 5;
    if (customization.backPrint) price += 3;
    if (customization.text) price += 2;
    if (customization.logoUpload) price += 8;
    
    setTotalPrice(price);
  };

  useState(() => {
    calculatePrice();
  });

  const handleCustomizationChange = (key: string, value: any) => {
    setCustomization(prev => ({ ...prev, [key]: value }));
    setTimeout(calculatePrice, 0);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCustomization(prev => ({ ...prev, logoUpload: file }));
      setTimeout(calculatePrice, 0);
    }
  };

  const resetCustomization = () => {
    setCustomization({
      color: 'black',
      size: 'M',
      text: '',
      textColor: 'white',
      textPosition: 'center',
      embroidery: false,
      backPrint: false,
      logoUpload: null,
    });
    setTimeout(calculatePrice, 0);
  };

  const currentProduct = products.find(p => p.id === selectedProduct);

  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-pearl mb-4">
            Customize Your Style
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create unique pieces that reflect your personal style with our advanced customization tools
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Live Preview */}
          <div className="space-y-6">
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-gold">Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-charcoal-light rounded-lg p-8 min-h-96 flex items-center justify-center">
                  <div className="relative">
                    <img
                      src={currentProduct?.image}
                      alt={currentProduct?.name}
                      className="w-64 h-64 object-cover rounded-lg"
                      style={{
                        filter: customization.color !== 'black' 
                          ? `hue-rotate(${customization.color === 'white' ? '180' : customization.color === 'navy' ? '240' : customization.color === 'grey' ? '60' : '30'}deg)`
                          : 'none'
                      }}
                    />
                    
                    {/* Text Overlay */}
                    {customization.text && (
                      <div
                        className={`absolute text-lg font-semibold ${
                          customization.textPosition === 'center'
                            ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                            : customization.textPosition === 'left-chest'
                            ? 'top-1/4 left-1/4'
                            : customization.textPosition === 'back-center'
                            ? 'top-1/3 left-1/2 transform -translate-x-1/2'
                            : 'top-1/4 right-1/4'
                        }`}
                        style={{ color: customization.textColor }}
                      >
                        {customization.text}
                      </div>
                    )}

                    {/* Logo Preview */}
                    {customization.logoUpload && (
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xs text-pearl">LOGO</span>
                      </div>
                    )}

                    {/* Customization Indicators */}
                    <div className="absolute bottom-2 left-2 flex space-x-1">
                      {customization.embroidery && (
                        <span className="bg-gold text-charcoal text-xs px-2 py-1 rounded">
                          EMB
                        </span>
                      )}
                      {customization.backPrint && (
                        <span className="bg-gold text-charcoal text-xs px-2 py-1 rounded">
                          PRINT
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Summary */}
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-gold">Price Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Base Product</span>
                  <span>${currentProduct?.basePrice}</span>
                </div>
                {customization.text && (
                  <div className="flex justify-between text-sm">
                    <span>Custom Text</span>
                    <span>+$2</span>
                  </div>
                )}
                {customization.embroidery && (
                  <div className="flex justify-between text-sm">
                    <span>Embroidery</span>
                    <span>+$5</span>
                  </div>
                )}
                {customization.backPrint && (
                  <div className="flex justify-between text-sm">
                    <span>Back Print</span>
                    <span>+$3</span>
                  </div>
                )}
                {customization.logoUpload && (
                  <div className="flex justify-between text-sm">
                    <span>Logo Upload</span>
                    <span>+$8</span>
                  </div>
                )}
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg font-semibold text-gold">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customization Options */}
          <div className="space-y-6">
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-gold">Customize Product</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="basics" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="basics">Basics</TabsTrigger>
                    <TabsTrigger value="text">Text</TabsTrigger>
                    <TabsTrigger value="extras">Extras</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basics" className="space-y-4">
                    {/* Product Selection */}
                    <div className="space-y-2">
                      <Label>Product Type</Label>
                      <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {products.map(product => (
                            <SelectItem key={product.id} value={product.id}>
                              {product.name} - ${product.basePrice}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Color Selection */}
                    <div className="space-y-2">
                      <Label>Color</Label>
                      <div className="flex flex-wrap gap-3">
                        {colors.map(color => (
                          <button
                            key={color.value}
                            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                              customization.color === color.value
                                ? 'border-gold'
                                : 'border-border'
                            }`}
                            style={{ backgroundColor: color.hex }}
                            onClick={() => handleCustomizationChange('color', color.value)}
                          >
                            {customization.color === color.value && (
                              <span className="text-xs font-bold" style={{ 
                                color: color.value === 'white' ? '#000' : '#fff' 
                              }}>
                                ✓
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Size Selection */}
                    <div className="space-y-2">
                      <Label>Size</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {sizes.map(size => (
                          <Button
                            key={size}
                            variant={customization.size === size ? 'default' : 'outline'}
                            onClick={() => handleCustomizationChange('size', size)}
                          >
                            {size}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="text" className="space-y-4">
                    {/* Custom Text */}
                    <div className="space-y-2">
                      <Label>Custom Text</Label>
                      <Input
                        value={customization.text}
                        onChange={(e) => handleCustomizationChange('text', e.target.value)}
                        placeholder="Enter your custom text"
                      />
                    </div>

                    {customization.text && (
                      <>
                        {/* Text Color */}
                        <div className="space-y-2">
                          <Label>Text Color</Label>
                          <Select 
                            value={customization.textColor} 
                            onValueChange={(value) => handleCustomizationChange('textColor', value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="white">White</SelectItem>
                              <SelectItem value="black">Black</SelectItem>
                              <SelectItem value="#D4AF37">Gold</SelectItem>
                              <SelectItem value="navy">Navy</SelectItem>
                              <SelectItem value="red">Red</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Text Position */}
                        <div className="space-y-2">
                          <Label>Position</Label>
                          <Select 
                            value={customization.textPosition} 
                            onValueChange={(value) => handleCustomizationChange('textPosition', value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="center">Center</SelectItem>
                              <SelectItem value="left-chest">Left Chest</SelectItem>
                              <SelectItem value="back-center">Back Center</SelectItem>
                              <SelectItem value="sleeve">Sleeve</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}
                  </TabsContent>

                  <TabsContent value="extras" className="space-y-4">
                    {/* Embroidery Option */}
                    <div className="flex items-center justify-between p-4 bg-charcoal-light rounded-lg">
                      <div>
                        <h4 className="font-medium text-pearl">Embroidery</h4>
                        <p className="text-sm text-muted-foreground">Premium embroidered finish</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gold">+$5</span>
                        <Button
                          variant={customization.embroidery ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => handleCustomizationChange('embroidery', !customization.embroidery)}
                        >
                          {customization.embroidery ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* Back Print Option */}
                    <div className="flex items-center justify-between p-4 bg-charcoal-light rounded-lg">
                      <div>
                        <h4 className="font-medium text-pearl">Back Print</h4>
                        <p className="text-sm text-muted-foreground">Custom design on back</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gold">+$3</span>
                        <Button
                          variant={customization.backPrint ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => handleCustomizationChange('backPrint', !customization.backPrint)}
                        >
                          {customization.backPrint ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* Logo Upload */}
                    <div className="space-y-2">
                      <Label>Upload Logo/Image</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="logo-upload"
                        />
                        <label htmlFor="logo-upload" className="cursor-pointer">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload logo or image
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            +$8 for logo placement
                          </p>
                        </label>
                        {customization.logoUpload && (
                          <p className="text-sm text-gold mt-2">
                            {customization.logoUpload.name} uploaded
                          </p>
                        )}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-6">
                  <Button
                    variant="outline"
                    onClick={resetCustomization}
                    className="flex items-center"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                  <Button className="btn-luxury flex-1">
                    Add to Cart - ${totalPrice}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizePage;