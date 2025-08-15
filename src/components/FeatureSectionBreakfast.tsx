import ProductCard from "./ProductCard";

const data = [
    { id: 0, img: "product__5.jpg", name: "Fresh cow milk", price: "80/-" },
    { id: 1, img: "product__2.jpg", name: "Bread", price: "60/-" },
    { id: 2, img: "product__3.jpg", name: "Multigrain oats", price: "160/-" },
    { id: 3, img: "product__6.jpg", name: "Cheese", price: "150/-" },
];

const FeatureSectionBreakfast = () => {
  return (
    <div className="container pt-16">
        {/* Section Heading */}
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className="font-medium text-2xl">Breakfast & Dairy🥚🥐</h3>
                <p className="text-gray-600 mt-2">
                    Buy best quality breakfast online from supermarket stop near you.
                </p>
            </div>

            {/* Category Buttons */}
            <div className="space-x-4 mt-8 lg:mt-0">
                <button className="feature_btn">Eggs & Dairy</button>
                <button className="text-gray-600 hover:text-accent">Pizza</button>
                <button className="text-gray-600 hover:text-accent">Snacks</button>
            </div>
        </div>

        {/* Products + Banner */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            {/* Banner Image */}
            <div>
                <img
                    className="w-full h-full object-cover"
                    src="/feature__3.jpg"
                    alt="Breakfast Banner"
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

export default FeatureSectionBreakfast;
