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
  // Initialize with hoodie products, bohemian dresses, and t-shirts
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
      image: "/lovable-uploads/ff42e84c-6406-4da8-8ef4-f247f37af295.png",
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
      image: "/lovable-uploads/9a8add9f-034d-40fd-869c-b3ded672e172.png",
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
      image: "/lovable-uploads/94b08a9c-3485-41b6-ab75-e59d11a6a75d.png",
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
      image: "/lovable-uploads/0edaa750-43ed-4d25-9523-55151c2a655f.png",
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
      image: "/lovable-uploads/79995195-1225-4fee-a290-a97cc4928612.png",
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
      image: "/lovable-uploads/0fe3adfd-1e49-4bca-ad9d-dfecc8c3fff5.png",
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
      image: "/lovable-uploads/1db8418b-c04e-4dfe-9072-333a1b88c166.png",
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
      image: "/lovable-uploads/500d96b3-6914-49e6-88fd-2ecf8321bfd5.png",
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
      image: "/lovable-uploads/6f7ef2cf-5b36-4978-822f-fe38cca3d0a8.png",
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
    },
    {
      id: 13,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/e7820fa8-08ee-460e-8c42-b4fc88fe45e9.png",
      rating: 4.7,
      reviews: 156,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 14,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/d894421f-e1fe-46d1-ac4f-6aab78286855.png",
      rating: 4.6,
      reviews: 142,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 15,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/9bd43add-4a1a-4142-a3b1-00b9aa093c10.png",
      rating: 4.8,
      reviews: 189,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 16,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/058f6742-57e2-4062-8b02-fcc2a9300e83.png",
      rating: 4.5,
      reviews: 128,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce rim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 17,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/7810b262-9f96-4467-9ac9-d8587e1921e5.png",
      rating: 4.7,
      reviews: 174,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 18,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/33a8c198-c91a-43e6-9341-3f78b3e5b479.png",
      rating: 4.6,
      reviews: 195,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 19,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/a42d66d2-f7b1-4ae0-8c64-3e4285f8ab1d.png",
      rating: 4.8,
      reviews: 201,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 20,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/6f3705e0-3cbe-4a42-8a9b-a8308b9a25c7.png",
      rating: 4.6,
      reviews: 167,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 21,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/0afb4bc9-accc-4223-a219-b931c5df5c91.png",
      rating: 4.7,
      reviews: 183,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    {
      id: 22,
      name: "Summer Casual Bohemian Floral Dresses for Women Puff Short Sleeve Long Maxi Dress with Pockets ETX",
      price: 45.00,
      image: "/lovable-uploads/80c359fc-58e3-42fd-be81-4396bb737c6e.png",
      rating: 4.5,
      reviews: 149,
      category: 'womens',
      description: "Fabric type61.3% Cotton, 38.7% Rayon\nCare instructionsMachine Wash\nOriginImported\nClosure typePull On\nAbout this item\nEnjoy the perfect combination of comfort and style. These ladies summer dresses are crafted from cozy and sumptuously soft fabric. The lightweight and airy material allows for optimal airflow, keeping you cool and comfy even on hot days. With gentle and soft texture, the fabric caresses your skin, providing a luxurious and cozy wearing experience.\nThese floral bohemian maxi dresses are printed brightly with various geometric patterns or vivid flowers, lovely or generous. Wear your favorite color and have a date with spring. Wherever you go, beach, vocation, cocktail, party, wedding, church or work, you are the protagonist of your own life.\nPuffed sleeves adding a lovely touch of cuteness and hiding your larger arms at the same time. Catching your eyes, three layers of flounce trim on the tiered hem flowing like the undulating waves, romantic and dreamy. The swing hem falling naturally at your ankles. Every act and move of you will radiate stunning feminine vibes.\nFeaturing a variety of beauty, these casual loose dresses flatter all figures and styles. With adorable detailing, playfulness of young girls can be showcased fully. For those who are looking for sophisticated and elegant style, our dresses add some taste and elegance to your look by vivid prints and fine details.\nHand wash in cold water. Line dry. Low ironing if necessary.",
      stock: 40,
      isNew: true
    },
    // T-Shirts for Mens Section
    {
      id: 23,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/9f76a4bd-a417-41e8-8a69-d273967ef9c4.png",
      rating: 4.7,
      reviews: 89,
      category: 'mens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 24,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/7e81cd02-d385-4d73-9352-dc89da8951ce.png",
      rating: 4.6,
      reviews: 124,
      category: 'mens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 25,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/ce3975d2-4532-44e4-9575-6e541e77a51d.png",
      rating: 4.8,
      reviews: 156,
      category: 'mens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 26,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/4939d019-4db9-4849-8244-c88b4a79a9ff.png",
      rating: 4.5,
      reviews: 98,
      category: 'mens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 27,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/1c69baf7-0dc6-4c54-b745-b1280e217441.png",
      rating: 4.7,
      reviews: 142,
      category: 'mens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 28,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/d2a3bf45-68e1-439d-90f4-1287320ba7eb.png",
      rating: 4.6,
      reviews: 167,
      category: 'mens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 29,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/1a2e1aaa-8035-4279-a4e4-55c29a86a8fb.png",
      rating: 4.8,
      reviews: 189,
      category: 'mens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 30,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/e69c483e-4124-4c70-842b-91fc92bf8c48.png",
      rating: 4.5,
      reviews: 134,
      category: 'mens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 31,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/b3b6937b-9315-4974-b80a-22614974840f.png",
      rating: 4.7,
      reviews: 178,
      category: 'mens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 32,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/04185589-9215-49ff-a11e-10c533bf7764.png",
      rating: 4.6,
      reviews: 203,
      category: 'mens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    // T-Shirts for Womens Section
    {
      id: 33,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/9f76a4bd-a417-41e8-8a69-d273967ef9c4.png",
      rating: 4.7,
      reviews: 89,
      category: 'womens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 34,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/7e81cd02-d385-4d73-9352-dc89da8951ce.png",
      rating: 4.6,
      reviews: 124,
      category: 'womens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 35,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/ce3975d2-4532-44e4-9575-6e541e77a51d.png",
      rating: 4.8,
      reviews: 156,
      category: 'womens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 36,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/4939d019-4db9-4849-8244-c88b4a79a9ff.png",
      rating: 4.5,
      reviews: 98,
      category: 'womens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 37,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/1c69baf7-0dc6-4c54-b745-b1280e217441.png",
      rating: 4.7,
      reviews: 142,
      category: 'womens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 38,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/d2a3bf45-68e1-439d-90f4-1287320ba7eb.png",
      rating: 4.6,
      reviews: 167,
      category: 'womens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 39,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/1a2e1aaa-8035-4279-a4e4-55c29a86a8fb.png",
      rating: 4.8,
      reviews: 189,
      category: 'womens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 40,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/e69c483e-4124-4c70-842b-91fc92bf8c48.png",
      rating: 4.5,
      reviews: 134,
      category: 'womens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 41,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/b3b6937b-9315-4974-b80a-22614974840f.png",
      rating: 4.7,
      reviews: 178,
      category: 'womens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    },
    {
      id: 42,
      name: "Men's Short Sleeve Graphic Fashion T-Shirt",
      price: 40.00,
      image: "/lovable-uploads/04185589-9215-49ff-a11e-10c533bf7764.png",
      rating: 4.6,
      reviews: 203,
      category: 'womens',
      description: "Fabric type100% Combed Cotton\nCare instructionsMachine Wash\nOriginMade in the USA and Imported\nClosure typePull On\nAbout this item\n100% Combed Ring-Spun Cotton\nFeel: Soft Wash\nMachine Washable\nTagless Neck Label.",
      stock: 999,
      isNew: true
    }
  ]);

  const [ebooks, setEbooks] = useState<Ebook[]>([
    {
      id: 1,
      title: "GREATNESS 101",
      author: "Muhammad Zaid",
      price: 12.99,
      image: "/lovable-uploads/d81e4abf-7e62-4c3a-8af6-0a1fd108972b.png",
      rating: 4.8,
      reviews: 245,
      description: "🌟 Take Back Control. Reclaim Your Power. Transform Your Life. 🌟\nIntroducing \"Greatness 101: The Ultimate Guide to Self-Discipline and Life Control\"\n\nAre you tired of feeling stuck, overwhelmed, or constantly behind on your goals? Do you ever feel like life is happening to you instead of because of you?\n\nThis isn't just another self-help book. \"Greatness 101\" is a bold, no-excuses blueprint for reclaiming your focus, rebuilding your discipline, and finally taking full command of your life.\n\nInside, you'll discover:\n\n🔥 Proven, science-backed strategies to strengthen self-discipline and resist distractions\n\n🧠 Mental rewiring techniques that eliminate procrastination and build unstoppable momentum\n\n📅 Powerful routines and rituals that create structure, clarity, and drive\n\n🛠️ Tools to break bad habits, master emotional control, and make decisions with confidence\n\n💡 A results-driven mindset that empowers you to turn chaos into control—and dreams into results\n\nWhether you're struggling with time management, battling self-doubt, or just ready to level up, this book gives you the clarity and courage to finally take charge.\n\nThis is your turning point.\nIf you're serious about changing your life—not someday, but starting now—then \"Master Your Moment\" is the book you've been waiting for.\n\n✅ Ideal for entrepreneurs, students, professionals, and anyone ready to break free from burnout and build a life on your terms.\n\nDiscipline isn't punishment. It's power.\nClaim yours today.",
      pages: 245,
      fileSize: "2.1 MB"
    }
  ]);

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
