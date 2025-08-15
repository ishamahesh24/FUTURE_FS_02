import { type ReactNode, createContext, useState, useContext } from 'react';

interface CartItem {
  img: string;
  name: string;
  price: string | number;
  quantity: number;
}

interface ICartContext {
  product: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (index: number, newQuantity: number) => void;
  removeFromCart: (index: number) => void; // ✅ Added
  clearCart: () => void;
}

const CartContext = createContext<ICartContext>({
  product: [],
  addToCart: () => {},
  updateQuantity: () => {},
  removeFromCart: () => {}, // ✅ Default empty
  clearCart: () => {},
});

interface ICartContextProvider {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: ICartContextProvider) => {
  const [product, setProduct] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setProduct((prev) => {
      const existingIndex = prev.findIndex((p) => p.name === item.name);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    setProduct((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQuantity;
      return updated;
    });
  };

  const removeFromCart = (index: number) => {
    setProduct((prev) => prev.filter((_, i) => i !== index)); // ✅ Remove one item
  };

  const clearCart = () => {
    setProduct([]);
  };

  return (
    <CartContext.Provider value={{ product, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
