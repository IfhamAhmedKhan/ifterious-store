"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "../../store/cartStore";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart" },
  { href: "/profile", label: "Profile" },
];

export function Navbar() {
  const pathname = usePathname();
  const { items } = useCartStore();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="border-b bg-white/80 backdrop-blur dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Ifterious <span className="text-indigo-600">Store</span>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "inline-flex items-center gap-1 rounded-md px-3 py-2 transition-colors " +
                  (active
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800")
                }
              >
                <span>{link.label}</span>
                {link.href === "/cart" && cartCount > 0 && (
                  <span className="rounded-full bg-white/90 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-700">
                    {cartCount}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <input
            type="search"
            placeholder="Search products..."
            className="hidden w-40 rounded-md border border-gray-300 px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 md:block dark:border-gray-700 dark:bg-gray-900"
          />
          <Link
            href="/login"
            className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-indigo-700"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
