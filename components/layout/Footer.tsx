export function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-gray-500 md:flex-row dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Ifterious Store. All rights
          reserved.
        </p>
        <p className="space-x-3">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </p>
      </div>
    </footer>
  );
}
