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
  // Initialize with hoodie products and bohemian dresses
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
    },
    {
      id: 3,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/dfae611d-d744-4b19-80ad-11ebf94c0995.png",
      rating: 4.6,
      reviews: 124,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 4,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/6e43c38e-d237-4b31-9009-4fbb36a0bb86.png",
      rating: 4.6,
      reviews: 98,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 5,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/d37691be-577e-4556-a581-07921cd48424.png",
      rating: 4.7,
      reviews: 142,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 6,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/6a5a620b-6a12-4565-85c6-61fadf1decb9.png",
      rating: 4.5,
      reviews: 87,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 7,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/6b1f06db-3123-4895-8223-565efea5117b.png",
      rating: 4.8,
      reviews: 176,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 8,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/8f79107d-2b43-4525-902d-9a90fe3d0a7c.png",
      rating: 4.6,
      reviews: 103,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 9,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/0c30f5c5-ca54-4563-b051-e96c7cbd2154.png",
      rating: 4.7,
      reviews: 159,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 10,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/0891fa47-ef37-4eee-8f4f-6c0fe2d580df.png",
      rating: 4.5,
      reviews: 91,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 11,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/611a5ad8-a4a5-4f83-8a39-e0198f9b771c.png",
      rating: 4.6,
      reviews: 134,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 12,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/11e580a9-397a-4dcd-9062-3f4fca488159.png",
      rating: 4.7,
      reviews: 168,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
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
