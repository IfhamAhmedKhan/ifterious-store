export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "macbook-pro-14-m3",
    name: "MacBook Pro 14",
    brand: "Apple",
    category: "Laptops",
    price: 1999,
    oldPrice: 2199,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder/laptop-1.png",
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "2",
    slug: "dell-xps-13",
    name: "Dell XPS 13",
    brand: "Dell",
    category: "Laptops",
    price: 1499,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder/laptop-2.png",
    inStock: true,
  },
  {
    id: "3",
    slug: "iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple",
    category: "Smartphones",
    price: 1299,
    oldPrice: 1399,
    rating: 4.9,
    reviews: 310,
    image: "/placeholder/phone-1.png",
    badge: "Trending",
    inStock: true,
  },
  {
    id: "4",
    slug: "samsung-galaxy-s25",
    name: "Samsung Galaxy S25",
    brand: "Samsung",
    category: "Smartphones",
    price: 1199,
    rating: 4.7,
    reviews: 205,
    image: "/placeholder/phone-2.png",
    inStock: true,
  },
  {
    id: "5",
    slug: "sony-wh-1000xm7",
    name: "Sony WH-1000XM7",
    brand: "Sony",
    category: "Audio",
    price: 399,
    oldPrice: 449,
    rating: 4.8,
    reviews: 542,
    image: "/placeholder/headphones-1.png",
    badge: "Hot",
    inStock: true,
  },
  {
    id: "6",
    slug: "apple-watch-series-10",
    name: "Apple Watch Series 10",
    brand: "Apple",
    category: "Wearables",
    price: 499,
    rating: 4.6,
    reviews: 187,
    image: "/placeholder/watch-1.png",
    inStock: true,
  },
  {
    id: "7",
    slug: "logitech-mx-master-5",
    name: "Logitech MX Master 5",
    brand: "Logitech",
    category: "Accessories",
    price: 129,
    rating: 4.9,
    reviews: 980,
    image: "/placeholder/mouse-1.png",
    inStock: true,
  },
  {
    id: "8",
    slug: "lg-oled-c4-55",
    name: 'LG OLED C4 55"',
    brand: "LG",
    category: "TVs",
    price: 1599,
    oldPrice: 1799,
    rating: 4.7,
    reviews: 76,
    image: "/placeholder/tv-1.png",
    inStock: false,
  },
];
