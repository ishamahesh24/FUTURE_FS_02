import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import { useCartContext } from "../context/cartContext";
import { useState } from "react";

const Cart = ({ setShowCart }: any) => {
  const { product, updateQuantity, clearCart, removeFromCart } = useCartContext();
  const [step, setStep] = useState("cart"); // cart, payment, cod
  const [orderPlaced, setOrderPlaced] = useState(false);

  const getNumericPrice = (price: string | number) => {
    if (typeof price === "number") return price;
    const match = price.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const itemsWithQuantity = product.map((p: any) => ({
    ...p,
    quantity: p.quantity ?? 1,
  }));

  const total = itemsWithQuantity.reduce(
    (acc: number, item: any) =>
      acc + getNumericPrice(item.price) * item.quantity,
    0
  );

  const isEmpty = itemsWithQuantity.length === 0;

  return (
    <div
      className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20"
      onClick={() => setShowCart(false)}
    >
      <div
        className="max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon */}
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
        />

        {/* STEP 1: CART */}
        {step === "cart" && !orderPlaced && (
          <>
            <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase flex items-center gap-2">
              Your Cart 🛒
            </h3>

            {isEmpty ? (
              <div className="mt-4 text-green-500 font-medium text-center">
                Your cart is empty!
              </div>
            ) : (
              <>
                <div className="mt-6 flex flex-col gap-4">
                  {itemsWithQuantity.map((el: any, index: number) => (
                    <div key={el.name} className="flex items-center justify-between">
                      <CartProduct
                        img={el.img}
                        name={el.name}
                        price={el.price}
                        quantity={el.quantity}
                        onQuantityChange={(newQty) => updateQuantity(index, newQty)}
                      />
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        ✖
                      </button>
                    </div>
                  ))}
                </div>

                <hr className="my-4" />
                <p className="font-bold text-lg flex justify-between">
                  <span>Total:</span> <span>₹{total}</span>
                </p>

                <button className="bg-accent text-white w-full rounded-3xl py-2 hover:bg-accent-dark mb-4 mt-4">
                  View Cart
                </button>
                <button
                  onClick={() => setStep("payment")}
                  className="bg-accent text-white w-full rounded-3xl py-2 hover:bg-accent-dark"
                >
                  CheckOut
                </button>
                <button
                  onClick={clearCart}
                  className="bg-accent text-white w-full rounded-3xl py-2 hover:bg-accent-dark mt-4"
                >
                  Clear Cart
                </button>
              </>
            )}
          </>
        )}

        {/* STEP 2: PAYMENT OPTIONS */}
        {step === "payment" && !orderPlaced && (
          <>
            <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase text-center">
              How would you like to pay?
            </h3>
            <div className="mt-8 flex flex-col gap-4">
              <button className="bg-green-500 text-white py-2 rounded-lg hover:bg-accent-dark">
                UPI Payment💳
              </button>
              <button
                onClick={() => setStep("cod")}
                className="bg-green-500 text-white py-2 rounded-lg hover:bg-accent-dark"
              >
                Cash on Delivery (COD)🚚
              </button>
              <button className="bg-green-500 text-white py-2 rounded-lg hover:bg-accent-dark">
                Net Banking🏦
              </button>
            </div>
            <button
              onClick={() => setStep("cart")}
              className="mt-6 text-gray-600 underline"
            >
              ← Back to Cart
            </button>
          </>
        )}

        {/* STEP 3: CONFIRM COD ORDER */}
        {step === "cod" && !orderPlaced && (
          <>
            <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase text-center">
              Confirm Your Order!🛍️
            </h3>
            <p className="mt-4 text-center font-bold text-lg">
              Total Amount: ₹{total}
            </p>
            <p className="text-center text-gray-500 mt-1">
              Pay in cash upon delivery
            </p>
            <button
              onClick={() => setOrderPlaced(true)}
              className="bg-green-500 text-white w-full rounded-3xl py-2 hover:bg-accent-dark mt-6"
            >
              Place Order
            </button>
            <button
              onClick={() => setStep("payment")}
              className="mt-4 text-gray-600 underline"
            >
              ← Back to Payment Options
            </button>
          </>
        )}

        {/* STEP 4: ORDER SUCCESS */}
        {step === "cod" && orderPlaced && (
          <div className="flex flex-col justify-center items-center h-full text-center">
            <h3 className="text-green-600 text-xl font-bold">
              🎉 Order placed successfully!
            </h3>
            <p className="text-gray-500 mt-2">
              Thank you for shopping with us.
            </p>
            <button
              onClick={() => {
                setStep("cart");
                setOrderPlaced(false);
                setShowCart(false);
                clearCart();
              }}
              className="bg-green-500 text-white rounded-3xl py-2 px-6 hover:bg-accent-dark mt-6"
            >
              Back to Shop
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
