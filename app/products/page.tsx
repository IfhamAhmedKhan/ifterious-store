import { products } from "../../data/products";
import { ProductCard } from "../../components/products/ProductCard";

export const dynamic = "force-static";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">All Products</h1>
          <p className="text-sm text-gray-500">
            Browse our latest tech products across laptops, phones, audio, and
            more.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
