import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import AdminPage from "./pages/AdminPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ProductsProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/new" element={<ShopPage category="new" title="New Arrivals" />} />
            <Route path="/mens" element={<ShopPage category="mens" title="Men's Collection" />} />
            <Route path="/womens" element={<ShopPage category="womens" title="Women's Collection" />} />
            <Route path="/kids" element={<ShopPage category="kids" title="Kids Collection" />} />
            <Route path="/sportswear" element={<ShopPage category="sportswear" title="Sportswear" />} />
            <Route path="/accessories" element={<ShopPage category="accessories" title="Accessories" />} />
            <Route path="/shoes" element={<ShopPage category="shoes" title="Shoes Collection" />} />
            <Route path="/ebooks" element={<ShopPage category="ebooks" title="E-Books Collection" />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </CartProvider>
    </ProductsProvider>
  </QueryClientProvider>
);

export default App;
