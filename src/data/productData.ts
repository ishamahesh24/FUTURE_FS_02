export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh cow milk",
    price: 80,
    image: "/images/product_1.jpg",
  },
  {
    id: 2,
    name: "Bread",
    price: 60,
    image: "/images/product_2.jpg",
  },
  {
    id: 3,
    name: "Multigrain oats",
    price: 160,
    image: "/images/product_3.jpg",
  },
  {
    id: 4,
    name: "Cheese",
    price: 150,
    image: "/images/product_4.jpg",
  },
  {
    id: 5,
    name: "Butter",
    price: 120,
    image: "/images/product_5.jpg",
  },
  {
    id: 6,
    name: "Paneer",
    price: 200,
    image: "/images/product_6.jpg",
  },
  {
    id: 7,
    name: "Yogurt",
    price: 90,
    image: "/images/product_7.jpg",
  },
  {
    id: 8,
    name: "Eggs",
    price: 70,
    image: "/images/product_8.jpg",
  },
];
