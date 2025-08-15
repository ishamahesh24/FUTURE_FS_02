import React from "react";

interface CartProductProps {
  img: string;
  name: string;
  price: string | number;
  quantity: number;
  onQuantityChange?: (newQuantity: number) => void;
}

export const getNumericPrice = (price: string | number) => {
  if (typeof price === "number") return price;
  const match = price.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

const CartProduct = ({ img, name, price, quantity, onQuantityChange }: CartProductProps) => {
  const numericPrice = getNumericPrice(price);
  const totalItemPrice = numericPrice * quantity;

  const handleDecrement = () => {
    if (onQuantityChange && quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (onQuantityChange) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 w-full">
      <img src={img} alt={name} className="w-16 h-16 object-cover rounded" />

      <div className="flex-1">
        <h4 className="font-medium">{name}</h4>
        <p className="text-gray-600">₹{numericPrice}</p>

        {onQuantityChange && (
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={handleDecrement}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-2">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
        )}
      </div>

      <p className="font-semibold">₹{totalItemPrice}</p>
    </div>
  );
};

export default CartProduct;
