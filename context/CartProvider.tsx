"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

interface CartContextType {
  cart: string[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure we only access localStorage after the component has mounted
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (
          Array.isArray(parsedCart) &&
          parsedCart.every((id) => typeof id === "string")
        ) {
          setCart(parsedCart);
        } else {
          localStorage.removeItem("cart"); // Clear invalid data
        }
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        localStorage.removeItem("cart"); // Clear storage on error
      }
    }
    setIsMounted(true); // Set mounted state to true when ready
  }, []);

  // Update localStorage when cart changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (id: string) => {
    setCart((prevCart) => {
      if (prevCart.includes(id)) {
        toast.error("این دوره قبلا به سبد خرید اضافه شده است!");
        return prevCart;
      }
      toast.success("دوره با موفقیت با سبد خرید اضافه شد!");
      return [...prevCart, id];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Don't render until the component is mounted (to avoid SSR mismatch)
  if (!isMounted) {
    return null; // Prevent server-side mismatch
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};