export default function ContactPage() {
  return (
    <div className="space-y-3 max-w-xl">
      <h1 className="text-2xl font-bold tracking-tight">Contact Us</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        This is a frontend-only demo, so this form doesn&apos;t actually send
        anything yet. In a real app, it would call your backend API.
      </p>
      <form className="space-y-3 text-sm">
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-700 dark:bg-gray-900"
        />
        <input
          type="email"
          placeholder="Your email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-700 dark:bg-gray-900"
        />
        <textarea
          placeholder="Your message"
          rows={4}
          className="w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-700 dark:bg-gray-900"
        />
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
