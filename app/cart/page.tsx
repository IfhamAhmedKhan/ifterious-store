"use client";

import Link from "next/link";
import { useCartStore } from "../../store/cartStore";

export default function CartPage() {
  const { items, increase, decrease, removeItem, clear } = useCartStore();

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="rounded-lg border bg-white p-6 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
          Your cart is empty.{" "}
          <Link href="/products" className="text-indigo-600 hover:underline">
            Browse products
          </Link>
          .
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-[minmax(0,_3fr)_minmax(0,_2fr)]">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between gap-4 rounded-lg border bg-white p-4 text-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <div>
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.product.brand} · ${item.product.price} each
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      className="h-7 w-7 rounded border text-sm font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                      onClick={() => decrease(item.product.id)}
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      className="h-7 w-7 rounded border text-sm font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                      onClick={() => increase(item.product.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-xs text-red-600 hover:underline"
                    onClick={() => removeItem(item.product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-3 rounded-lg border bg-white p-4 text-sm dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-base font-semibold">Order summary</h2>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <hr className="border-gray-200 dark:border-gray-800" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="mt-3 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
              Proceed to checkout
            </button>
            <button
              className="w-full rounded-md border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              onClick={clear}
            >
              Clear cart
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
