import ProductCard from "./ProductCard";

const data = [
  { id: 0, img: "/product__1.jpg", name: "Dried Mango", price: "₹180/-" },
  { id: 1, img: "/product__7.jpg", name: "Coke", price: "₹30/-" },
  { id: 2, img: "/product__8.jpg", name: "Orion Sweet Corn Turtle Chips", price: "₹80/-" },
  { id: 3, img: "/product__4.jpg", name: "Dates", price: "₹150/-" },
];

const FeatureSectionFruits = () => {
  return (
    <div className="container pt-16">
      {/* Header */}
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">🛒Our Bestsellers!</h3>
          <p className="text-gray-600 mt-2">
            Handpicked favorites loved by our customers, fresh and full of flavor!
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 hover:text-accent">Vegetables</button>
          <button className="text-gray-600 hover:text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>

      {/* Banner + Products */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-4">
        {/* Banner */}
        <div className="lg:col-span-1">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/feature__2.jpg"
            alt="Fruits Banner"
          />
        </div>

        {/* Product Cards */}
        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSectionFruits;
