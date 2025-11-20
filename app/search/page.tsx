"use client";

import { useState } from "react";
import { products } from "../../data/products";
import { ProductCard } from "../../components/products/ProductCard";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Search products</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name, brand, or category"
        className="w-full max-w-xl rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-gray-500">
            No products match your search.
          </p>
        )}
      </div>
    </div>
  );
}
