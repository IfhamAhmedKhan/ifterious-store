import { notFound } from "next/navigation";
import { products } from "../../../data/products";
import { ProductActions } from "../../../components/products/ProductActions";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  const hasDiscount = product.oldPrice && product.oldPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.oldPrice! - product.price) / product.oldPrice!) * 100
      )
    : 0;

  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,_2fr)_minmax(0,_3fr)]">
      <div className="rounded-xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
          <span className="text-xs text-gray-400">Product image</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            {product.brand} · {product.category}
          </p>
          <h1 className="text-2xl font-bold tracking-tight">{product.name}</h1>
        </div>

        <div className="flex items-end gap-3">
          <span className="text-3xl font-bold">${product.price}</span>
          {hasDiscount && (
            <div className="flex flex-col text-xs text-gray-500">
              <span className="line-through">${product.oldPrice}</span>
              <span className="font-semibold text-green-600">
                Save {discountPercent}%
              </span>
            </div>
          )}
        </div>

        <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>
            ⭐ {product.rating.toFixed(1)} ({product.reviews} reviews)
          </span>
          <span>{product.inStock ? "In stock" : "Out of stock"}</span>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          This is a demo description for {product.name}. In a real app, this
          would come from your backend and include key specs, features, and
          highlights.
        </p>

        <ProductActions product={product} />
      </div>
    </div>
  );
}
