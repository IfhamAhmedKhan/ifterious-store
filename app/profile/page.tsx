import Link from "next/link";

export default function ProfileHomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">My account</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        This is a frontend-only demo. These links would normally show your
        personal data from the backend.
      </p>
      <ul className="space-y-2 text-sm">
        <li>
          <Link
            href="/profile/orders"
            className="text-indigo-600 hover:underline"
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            href="/profile/address"
            className="text-indigo-600 hover:underline"
          >
            Addresses
          </Link>
        </li>
        <li>
          <Link
            href="/profile/wishlist"
            className="text-indigo-600 hover:underline"
          >
            Wishlist
          </Link>
        </li>
      </ul>
    </div>
  );
}
