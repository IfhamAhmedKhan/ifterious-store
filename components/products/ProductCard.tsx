"use client";

import Link from "next/link";
import type { Product } from "../../data/products";
import { useCartStore } from "../../store/cartStore";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { addItem } = useCartStore();
  const hasDiscount = product.oldPrice && product.oldPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.oldPrice! - product.price) / product.oldPrice!) * 100
      )
    : 0;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800">
        {/* Placeholder image area */}
        <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
          Image
        </div>
        {product.badge && (
          <span className="absolute left-2 top-2 rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <span className="absolute right-2 top-2 rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
            Out of stock
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            {product.brand}
          </p>
          <Link
            href={`/products/${product.slug}`}
            className="line-clamp-2 text-sm font-semibold text-gray-900 hover:text-indigo-600 dark:text-gray-50 dark:hover:text-indigo-400"
          >
            {product.name}
          </Link>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-50">
            ${product.price}
          </span>
          {hasDiscount && (
            <>
              <span className="text-xs text-gray-400 line-through">
                ${product.oldPrice}
              </span>
              <span className="text-xs font-semibold text-green-600">
                -{discountPercent}%
              </span>
            </>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>
            ⭐ {product.rating.toFixed(1)} · {product.reviews} reviews
          </span>
        </div>

        <div className="mt-3 flex gap-2">
          <button
            className="flex-1 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            disabled={!product.inStock}
            onClick={() => addItem(product)}
          >
            {product.inStock ? "Add to cart" : "Out of stock"}
          </button>
          <button
            className="rounded-md border px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            aria-label="Add to wishlist"
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}
