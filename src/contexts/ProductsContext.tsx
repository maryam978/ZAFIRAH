import { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  sale?: boolean;
  description?: string;
  stock?: number;
}

export interface Ebook {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  downloadUrl?: string;
  fileSize?: string;
  pages?: number;
}

interface ProductsContextType {
  products: Product[];
  ebooks: Ebook[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: number, product: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  addEbook: (ebook: Omit<Ebook, 'id'>) => void;
  updateEbook: (id: number, ebook: Partial<Ebook>) => void;
  deleteEbook: (id: number) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  // Initialize with both hoodie products
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Fleece Full Zip Hoodie Sweatshirt",
      price: 15.99,
      image: "/lovable-uploads/f48f7684-c467-4b02-9e80-fea7ab9f75bd.png",
      rating: 4.8,
      reviews: 156,
      category: 'mens',
      description: "Male Model is 6'0\" wearing a Size Medium. Female Model is 5'9\" wearing size Small\nEversoft fabric provides premium softness was after wash\nDouble-needle stitching on the neck and hems for durability\nRibbed cuffs and waistband that hold their shape\nShoulder-to-shoulder neck tape for comfort and durability",
      stock: 50,
      isNew: true
    },
    {
      id: 2,
      name: "Men's Zip-up Hoodie",
      price: 55.00,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 89,
      category: 'mens',
      description: "THE FIT - Standard-fit men's full-zip hoodie that hits at the hip.\nTHE FEEL - Crafted with a soft, midweight 9 oz. fleece with a brushed interior for warmth without extra bulk.\nTHE LOOK - Ribbed cuffs and hem add structure, while the double-lined hood keeps you covered and warm.\nLOW PILL, LOW SHRINK - High-quality fabric helps to reduce pilling and shrinkage, so this piece can be a longtime favorite.\nNote: C logo patch color may vary from image, and fabric content may vary",
      stock: 35,
      isNew: false
    }
  ]);

  const [ebooks, setEbooks] = useState<Ebook[]>([]);

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct = {
      ...productData,
      id: Date.now(),
      rating: productData.rating || 4.5,
      reviews: productData.reviews || 0,
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: number, productData: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...productData } : p));
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const addEbook = (ebookData: Omit<Ebook, 'id'>) => {
    const newEbook = {
      ...ebookData,
      id: Date.now(),
      rating: ebookData.rating || 4.5,
      reviews: ebookData.reviews || 0,
    };
    setEbooks(prev => [...prev, newEbook]);
  };

  const updateEbook = (id: number, ebookData: Partial<Ebook>) => {
    setEbooks(prev => prev.map(e => e.id === id ? { ...e, ...ebookData } : e));
  };

  const deleteEbook = (id: number) => {
    setEbooks(prev => prev.filter(e => e.id !== id));
  };

  return (
    <ProductsContext.Provider value={{
      products,
      ebooks,
      addProduct,
      updateProduct,
      deleteProduct,
      addEbook,
      updateEbook,
      deleteEbook
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
