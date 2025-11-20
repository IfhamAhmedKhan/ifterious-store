"use client";

import { useCartStore } from "../../store/cartStore";
import type { Product } from "../../data/products";

type Props = {
  product: Product;
};

export function ProductActions({ product }: Props) {
  const { addItem } = useCartStore();

  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <button
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        disabled={!product.inStock}
        onClick={() => addItem(product)}
      >
        {product.inStock ? "Add to cart" : "Out of stock"}
      </button>
      <button className="rounded-md border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
        Buy now
      </button>
      <button className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
        ♥ Add to wishlist
      </button>
    </div>
  );
}
