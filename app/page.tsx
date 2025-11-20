const categories = [
  {
    name: "Laptops",
    description: "Powerful machines for work, gaming, and everything between.",
    href: "/categories/Laptops",
  },
  {
    name: "Smartphones",
    description: "Stay connected with the latest flagship phones.",
    href: "/categories/Smartphones",
  },
  {
    name: "Audio",
    description: "Headphones, speakers, and gear for music and meetings.",
    href: "/categories/Audio",
  },
  {
    name: "Wearables",
    description: "Smartwatches and fitness bands to track your day.",
    href: "/categories/Wearables",
  },
  {
    name: "Accessories",
    description: "Mice, keyboards, hubs, and everything around your desk.",
    href: "/categories/Accessories",
  },
  {
    name: "TVs",
    description: "Crisp 4K and OLED displays for movies and games.",
    href: "/categories/TVs",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 px-6 py-12 text-white shadow-lg md:px-10">
        <div className="relative z-10 max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-100">
            Tech store demo
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Welcome to Ifterious Store
          </h1>
          <p className="max-w-xl text-sm text-indigo-100/90 md:text-base">
            A modern Next.js storefront to explore laptops, phones, audio gear,
            and more. Fully responsive and built for learning.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/products"
              className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-indigo-700 shadow hover:bg-indigo-50"
            >
              Start shopping
            </a>
            <a
              href="/about"
              className="inline-flex items-center rounded-full border border-indigo-200 px-5 py-2 text-sm font-semibold text-indigo-50 hover:bg-indigo-500/30"
            >
              Learn more
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-6 text-xs md:text-sm">
            <div>
              <p className="font-semibold">Built with Next.js 16</p>
              <p className="text-indigo-100/80">App Router, Tailwind CSS v4</p>
            </div>
            <div>
              <p className="font-semibold">Responsive by default</p>
              <p className="text-indigo-100/80">
                Looks good on mobile and desktop
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />
      </section>

      {/* Categories section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            Shop by category
          </h2>
          <a
            href="/products"
            className="text-xs font-medium text-indigo-600 hover:underline"
          >
            View all products
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group flex flex-col justify-between rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-gray-50 dark:group-hover:text-indigo-400">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-medium text-indigo-600 group-hover:underline dark:text-indigo-400">
                Browse {category.name.toLowerCase()}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
