"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface CartItem {
  id: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (course: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize the Cart State:
  // cart holds an array of cart items.
  // It initializes from localStorage, ensuring cart data persists after page reloads.
  // typeof window !== "undefined" prevents errors when running on the server.
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Runs every time cart updates.
  // Saves the cart to localStorage so the cart persists across sessions.
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (course: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === course.id);
      if (existingItem) {
        return prevCart; // Do nothing if the item is already in the cart
      }
      return [...prevCart, course]; // Add the course if it's not already in the cart
    });
  };

  // Filters out the item with the given id, removing it from the cart.
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clears all items from the cart.
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// A custom hook to access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};