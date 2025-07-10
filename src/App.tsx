import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import CustomizePage from "./pages/CustomizePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          <Route path="/customize" element={<CustomizePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
