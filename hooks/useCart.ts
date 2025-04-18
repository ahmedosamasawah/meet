import { useState, useCallback } from "react";
import { Product } from "@/types";

export function useCart() {
  const [cartItems, setCartItems] = useState<
    (Product & { quantity: number })[]
  >([]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem)
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      else return [...prevItems, { ...product, quantity }];
    });
  }, []);

  const removeFromCart = useCallback(
    (productId: number) =>
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
      ),
    []
  );

  const updateQuantity = useCallback(
    (productId: number, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    },
    [removeFromCart]
  );

  const getTotal = useCallback(
    () =>
      cartItems.reduce(
        (total, item) => total + item.newPrice * item.quantity,
        0
      ),
    [cartItems]
  );

  return {
    getTotal,
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    itemCount: cartItems.length,
  };
}
