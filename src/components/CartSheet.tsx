import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

export const CartSheet = () => {
  const { items, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Order Placed!",
      description: `Your order of $${getTotalPrice().toFixed(2)} has been placed successfully.`,
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground hover:text-gold relative">
          <ShoppingCart className="h-5 w-5" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-gold text-charcoal text-xs rounded-full flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-gold">Shopping Cart</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-charcoal-light rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-pearl text-sm">{item.name}</h4>
                      <p className="text-gold font-medium">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-pearl w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-pearl">Total:</span>
                  <span className="text-lg font-semibold text-gold">${getTotalPrice().toFixed(2)}</span>
                </div>
                <Button className="w-full btn-luxury" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};