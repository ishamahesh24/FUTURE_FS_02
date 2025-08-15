import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import productData from "../data/productData";

interface ProductDetailProps {
  setShowCart: (show: boolean) => void;
}

const ProductDetail = ({ setShowCart }: ProductDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);
  const product = id ? productData[id] : undefined;

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowCart(true);
  };

  const handleCheckout = () => {
    addToCart(product, quantity);
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">₹{product.price}</p>

        <div className="flex items-center gap-2 mb-4">
          <label className="font-medium">Quantity:</label>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-16 border rounded p-1 text-center"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={handleCheckout}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Checkout
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
