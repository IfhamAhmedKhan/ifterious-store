import { products } from "../../../data/products";
import { ProductCard } from "../../../components/products/ProductCard";

type Props = {
  params: { category: string };
};

export default function CategoryPage({ params }: Props) {
  const categoryName = decodeURIComponent(params.category);

  const filtered = products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">
        Category: {categoryName}
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-gray-500">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
