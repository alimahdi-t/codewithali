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
  const [cart, setCart] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const savedCart = localStorage.getItem("cart");
        const parsedCart = savedCart ? JSON.parse(savedCart) : [];

        // **Validation: Ensure it's an array of strings**
        if (
          !Array.isArray(parsedCart) ||
          !parsedCart.every((id) => typeof id === "string")
        ) {
          localStorage.removeItem("cart"); // Clear invalid data
          return [];
        }

        return parsedCart;
      } catch (error) {
        localStorage.removeItem("cart"); // Clear storage if JSON parsing fails
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
    localStorage.removeItem("cart"); // Clear storage completely
  };

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